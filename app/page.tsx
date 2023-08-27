import EmailForm from '@/components/EmailForm';
import { GeneratedEmail } from '@/components/GeneratedEmailList';
import React, { useState } from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg background-gradient">
      <EmailForm />
    </div>
  );
};

export default HomePage;
