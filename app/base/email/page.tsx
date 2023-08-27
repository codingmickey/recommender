'use client';

import GeneratedEmailList from '@/components/GeneratedEmailList';

export default function Chat() {
  const generatedEmails = [
    {
      id: '1',
      subject: 'Welcome to ZooToolsWelcome to f f f f f f f ZooTools Welcome to ZooTools',
      content:
        'Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!Dear user, welcome to ZooTools. We are excited to have you on board!'
    },
    {
      id: '2',
      subject: 'New feature announcement',
      content: 'Hello user, we are happy to announce a new feature that has been added to ZooTools.'
    },
    {
      id: '3',
      subject: 'Important update',
      content: 'Dear user, we would like to inform you about an important update regarding your account.'
    },
    {
      id: '4',
      subject: 'Feedback request',
      content: 'Hello user, we would appreciate your feedback on your recent experience with ZooTools.'
    },
    {
      id: '5',
      subject: 'Account verification',
      content: 'Dear user, we need to verify your account information. Please follow the link to complete the process.'
    }
  ];

  return (
    <>
      <GeneratedEmailList generatedEmails={generatedEmails}></GeneratedEmailList>
    </>
  );
}
