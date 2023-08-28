'use client';

import { useRouter } from 'next/navigation';
import React, { Dispatch, useState } from 'react';
import { FiCheck, FiArrowLeft, FiCopy } from 'react-icons/fi';

export type GeneratedEmail = {
  id?: string;
  subject: string;
  body: string;
};

const GeneratedEmailList = ({
  generatedEmails,
  setIsResultPage
}: {
  generatedEmails: GeneratedEmail[];
  setIsResultPage: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [copiedEmailIndex, setCopiedEmailIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleCopyClick = (index: number) => {
    const emailText = generatedEmails[index].body;
    navigator.clipboard.writeText(emailText);
    setCopiedEmailIndex(index);
    setTimeout(() => setCopiedEmailIndex(null), 3000); // Reset copied email index after 3 seconds
  };

  const onBackClick = () => {
    setIsResultPage(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-4">
        <button className="mr-2 text-blue-500 hover:text-blue-600" onClick={onBackClick}>
          <FiArrowLeft size="1.5rem" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800">Generated Emails</h2>
      </div>
      {generatedEmails
        ? generatedEmails.length === 0 && (
            <div className="p-4 rounded-lg shadow-md bg-transparent border border-orange-300 relative">
              <h3 className="text-gray-800 text-lg font-semibold mb-2 pr-7">
                No emails generated or sorry if refreshed as no Database is connected for now! :(
              </h3>
              <div className="text-gray-800">
                <p>Try generating some emails!</p>
              </div>
            </div>
          )
        : null}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {generatedEmails.map((email, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md bg-transparent border border-orange-300 relative email-background-gradient"
          >
            <button
              className={`absolute top-6 right-6 text-blue-500 hover:text-blue-600`}
              onClick={() => handleCopyClick(index)}
            >
              {copiedEmailIndex === index ? <FiCheck /> : <FiCopy />}
            </button>
            <h3 className="text-gray-800 text-lg font-semibold mb-2 pr-7">{email.subject}</h3>
            <div className="text-gray-800">
              {email.body.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
            {/* <button
              className={`mt-2 px-3 py-1 text-sm rounded-md ${
                copiedEmailIndex === index ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
              }`}
              onClick={() => handleCopyClick(index)}
            >
              {copiedEmailIndex === index ? 'Copied!' : 'Copy to Clipboard'}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneratedEmailList;
