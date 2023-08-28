'use client';

import React, { Dispatch, useState } from 'react';
import SquigglyLines from './SquigglyLines';
import LoadingDots from './LoadingDots';
import { set } from 'zod';
import { toast } from 'react-toastify';
import GeneratedEmailList, { GeneratedEmail } from './GeneratedEmailList';
import { useRouter } from 'next/navigation';
import LoadingMessages from './LoadingMessages';

const EmailForm = () => {
  const [campaignGoal, setCampaignGoal] = useState('');
  const [brandTone, setBrandTone] = useState('Formal');
  const [customIndustry, setCustomIndustry] = useState('marketing agency');
  const [emailContent, setEmailContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResultPage, setIsResultPage] = useState(false);
  const [generatedEmails, setGeneratedEmails] = useState<GeneratedEmail[]>([]);
  const [apiCallCount, setApiCallCount] = useState(0);

  const router = useRouter();

  const handleCampaignGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCampaignGoal(event.target.value);
  };

  const handleBrandToneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBrandTone(event.target.value);
  };

  const handleIndustryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomIndustry(event.target.value);
  };

  const handleEmailContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailContent(event.target.value);
  };
  // Make a function to make api call 5 times simultaneously and then append the response to the setGeneratedEmails
  const makeApiCall = async (i: number, maxEmails: number) => {
    try {
      console.log('campaignGoal', campaignGoal);
      console.log('brandTone', brandTone);
      console.log('industry', customIndustry);
      console.log('details', emailContent);

      if (i === 0) {
        setIsLoading(true);
        toast.info('Generating emails...');
      } else if (i === maxEmails - 1) {
        toast.info('Generating last email...');
      } else {
        toast.info('Generating more emails...');
      }
      const response = await fetch('/api/email/basic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          campaignGoal,
          brandTone,
          industry: customIndustry,
          details: emailContent
        })
      });
      const data = await response.json();
      console.log('Success:', data);
      if (i === 0) {
        setIsLoading(false);
        setIsResultPage(true);
        toast.success('First generated successfully!');
      } else if (i === maxEmails - 1) {
        toast.success('All emails generated successfully!');
      } else {
        toast.success('More emails generated successfully!');
      }

      setGeneratedEmails((prevEmails) => [...prevEmails, data.emails[0]]);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      toast.error(`Error: ${error}`);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setGeneratedEmails([]);
    const maxEmails = 5;
    for (let i = 0; i < maxEmails; i++) {
      setApiCallCount(i);
      await makeApiCall(i, maxEmails);
      console.log('apiCallCount', apiCallCount);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="block background-gradient">
          <div className="text-center">
            {' '}
            <LoadingDots style="big" />
          </div>
          <br />
          <br />
          <LoadingMessages />
        </div>
      ) : isResultPage ? (
        <GeneratedEmailList generatedEmails={generatedEmails} setIsResultPage={setIsResultPage} />
      ) : (
        <div className="background-gradient">
          {/* hover:shadow-orange-500/50 */}
          <div className="max-w-7xl mx-auto p-4 md:px-20 px-5 rounded-xl border-2 border-orange-600/40 bg-orange-100/10 shadow-xl backdrop-filter backdrop-blur-lg transform duration-300 shadow-orange-500/25 py-12 flex flex-col items-center gap-8 w-full">
            <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-black-300 sm:text-5xl text-center">
              Create your marketing emails{' '}
              <span className="relative whitespace-nowrap text-orange-600">
                <SquigglyLines />
                <span className="relative">with AI</span>
              </span>{' '}
            </h2>

            <p className="text-gray-600">
              Introduce information about your business and goal of the campaign and we'll take care of the rest!
            </p>
            <form className="w-3/4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-medium mb-1">Campaign goal</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value="Convince to buy product"
                      className="mr-2"
                      required
                      onChange={handleCampaignGoalChange}
                    />
                    Convince to buy product
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value="Recover churned customers"
                      className="mr-2"
                      required
                      onChange={handleCampaignGoalChange}
                    />
                    Recover churned customers
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value="Teach a new concept"
                      className="mr-2"
                      required
                      onChange={handleCampaignGoalChange}
                    />
                    Teach a new concept
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value="Onboard users"
                      className="mr-2"
                      required
                      onChange={handleCampaignGoalChange}
                    />
                    Onboard users
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value="Share product updates"
                      className="mr-2"
                      required
                      onChange={handleCampaignGoalChange}
                    />
                    Share product updates
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value="Convince to buy product"
                      className="mr-2"
                      required
                      onChange={handleCampaignGoalChange}
                    />
                    Convince to buy product
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value="Recover churned customers"
                      className="mr-2"
                      required
                      onChange={handleCampaignGoalChange}
                    />
                    Recover churned customers
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="brandTone" className="block font-medium mb-1">
                  Brand tone
                </label>
                <select
                  required
                  id="brandTone"
                  name="brandTone"
                  className="w-full border rounded-md px-3 py-2"
                  onChange={handleBrandToneChange}
                >
                  <option value="Formal">Formal</option>
                  <option value="Informal">Informal</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="industry" className="block font-medium mb-1">
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter your industry"
                  value={customIndustry}
                  onChange={handleIndustryChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="emailContent" className="block font-medium mb-1">
                  Tell us more about the email you want to send
                </label>
                <textarea
                  id="emailContent"
                  name="emailContent"
                  placeholder="I'm offering a $10 discount for customers who have cancelled their subscription. I want to find a way to make them reactivate their plan again."
                  className="w-full border rounded-md px-3 py-2"
                  rows={4}
                  required
                  value={emailContent}
                  onChange={handleEmailContentChange}
                />
              </div>
              <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-md">
                Generate campaign
              </button>
              {/* Add a button to check generated emails */}
              <button
                type="button"
                // Change the syles to make it look like a link
                className="text-orange-600 px-4 py-2 rounded-md text-right"
                onClick={() => {
                  setIsResultPage(true);
                }}
              >
                Check generated emails
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailForm;
