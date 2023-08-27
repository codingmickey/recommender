'use client';

import GeneratedEmailList from '@/components/GeneratedEmailList';
import { useState } from 'react';

export default function Chat() {
  const [isResultPage, setIsResultPage] = useState(false);
  const data = {
    emails: [
      {
        subject: 'We want you back! Get $10 off your subscription',
        body: "Dear customer,\n\nWe noticed that you recently cancelled your subscription with our marketing agency. We understand that sometimes things change and priorities shift. However, we don't want you to miss out on the benefits and value our services can provide.\n\nThat's why we're offering you an exclusive $10 discount to reactivate your plan. Our team of experts is ready to assist you in achieving your marketing goals and driving success for your business.\n\nDon't let this opportunity slip away. Simply click on the link below to reactivate your subscription and access our premium marketing services at a discounted rate.\n\n[Reactivate Now]\n\nWe look forward to welcoming you back and working together to propel your business forward.\n\nBest regards,\nThe Marketing Agency Team"
      },
      {
        subject: 'Unlock the power of marketing with $10 off',
        body: "Hello,\n\nWe hope this email finds you well. We noticed that you cancelled your subscription with our marketing agency, and we wanted to reach out and offer you a special discount to help you get back on track.\n\nAt our marketing agency, we understand the challenges businesses face when it comes to marketing and growing their customer base. That's why we're here to provide you with expert guidance, proven strategies, and innovative solutions.\n\nFor a limited time, we're offering a $10 discount on your subscription fee when you reactivate your plan. This means you can continue to benefit from our comprehensive range of services at a reduced cost.\n\nDon't miss out on this opportunity! Click on the link below to reactivate your subscription and start harnessing the power of effective marketing.\n\n[Reactivate Now]\n\nWe're excited to have you back on board and support your journey to success.\n\nRegards,\nThe Team at the Marketing Agency"
      },
      {
        subject: 'Your marketing journey awaits! Claim your $10 discount',
        body: "Dear valued customer,\n\nWe hope this email finds you well. It has come to our attention that you recently cancelled your subscription with our marketing agency.\n\nAt the Marketing Agency, we understand that circumstances change, and priorities may shift. However, we believe that our services can still add immense value to your business.\n\nTo help you get back on track, we're offering you an exclusive $10 discount on your subscription fee when you reactivate your plan. With this discount, you can continue to benefit from our industry expertise, cutting-edge strategies, and personalized support.\n\nDon't let this opportunity slip away! Click on the link below to reactivate your subscription and resume your marketing journey with us.\n\n[Reactivate Now]\n\nWe can't wait to have you back as part of our community and assist you in achieving your marketing goals.\n\nBest regards,\nThe Marketing Agency Team"
      },
      {
        subject: 'Special offer: Get $10 off and supercharge your marketing',
        body: "Hello,\n\nWe're reaching out to you because we noticed that you cancelled your subscription with our marketing agency. We understand that circumstances may have changed, but we believe that our services can still be of immense value to your business.\n\nTo entice you to reactivate your plan, we're offering you a special discount of $10 off your subscription fee. By taking advantage of this offer, you can continue to access our industry-leading marketing solutions, expert guidance, and cutting-edge strategies, all at a reduced cost.\n\nDon't miss out on this opportunity to supercharge your marketing efforts! Simply click on the link below to reactivate your subscription.\n\n[Reactivate Now]\n\nWe're excited to have you back on board and support you in achieving your marketing goals.\n\nWarm regards,\nThe Marketing Agency Team"
      },
      {
        subject: 'Revitalize your marketing strategy with $10 off',
        body: "Dear customer,\n\nWe hope this email finds you well. We noticed that you recently cancelled your subscription with our marketing agency, and we wanted to reach out to you with a special offer to help revitalize your marketing strategy.\n\nAt our marketing agency, we understand that businesses face various challenges when it comes to marketing and reaching their target audience. That's why we're here to provide you with the knowledge, expertise, and support you need to succeed.\n\nTo encourage you to give our services another try, we're offering you a $10 discount on your subscription fee when you reactivate your plan. This means you can continue to benefit from our comprehensive range of marketing solutions and take your business to new heights.\n\nDon't miss out on this opportunity! Click on the link below to reactivate your subscription and let us help you achieve your marketing goals.\n\n[Reactivate Now]\n\nWe look forward to welcoming you back and working together to create marketing success.\n\nBest regards,\nThe Marketing Agency Team"
      }
    ]
  };

  return (
    <>
      <GeneratedEmailList generatedEmails={data.emails} setIsResultPage={setIsResultPage}></GeneratedEmailList>
    </>
  );
}
