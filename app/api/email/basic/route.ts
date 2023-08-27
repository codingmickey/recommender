import { NextRequest, NextResponse } from 'next/server';

import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { ChatOpenAI } from 'langchain/chat_models/openai';
import { PromptTemplate } from 'langchain/prompts';
import { JsonOutputFunctionsParser } from 'langchain/output_parsers';
import { StreamingTextResponse } from 'ai';
import { BytesOutputParser } from 'langchain/dist/schema/output_parser';

export const runtime = 'edge'; // 'nodejs' is the default
export const preferredRegion = 'bom1'; // only execute this function on bom1

const TEMPLATE = `Assume that you are an content writing specialist. You are appointed by the company to create very well written emails on behalf of the company.

You have to write 5 marketing emails which should be written with the details that should be kept in mind while that is mentioned in the input. The emails should be written in a way that it should be able to convince the customers or the users to do the task.

The target audience is the customers or the users of the company. The sender is the company's name which will be replaced by the user and not the generic industry name in which it operates.

The campaign goal to {campaignGoal}.
The brand tone is {brandTone}.
The industry in which the company operates is a {industry}.

These are the details that you have to keep in mind while writing the emails:
{details}

The output should be an an object with an array of emails in the following provided format.
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { campaignGoal, brandTone, industry, details } = body;

    const prompt = PromptTemplate.fromTemplate<{
      campaignGoal: string;
      brandTone: string;
      industry: string;
      details: string;
    }>(TEMPLATE);

    const model = new ChatOpenAI({
      temperature: 0.9,
      modelName: 'gpt-3.5-turbo-16k',
      streaming: true
    });

    // const outputParser = new BytesOutputParser();

    const schema = z.object({
      emails: z.array(z.object({ subject: z.string(), body: z.string() })).describe('The emails to be sent to the user')
    });

    const functionCallingModel = model.bind({
      functions: [
        {
          name: 'marketing_email_generator',
          description: 'Should generate marketing emails for the given task',
          parameters: zodToJsonSchema(schema)
        }
      ],
      function_call: { name: 'marketing_email_generator' }
    });

    const chain = prompt.pipe(functionCallingModel).pipe(new JsonOutputFunctionsParser());

    console.log(chain);

    // const result = await chain.stream({ brandTone, campaignGoal, industry, details });
    const result = await chain.invoke({ brandTone, campaignGoal, industry, details });

    console.log(result);

    // return new StreamingTextResponse(result, {
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   status: 200,
    //   statusText: 'OK'
    // });
    return NextResponse.json(result, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
