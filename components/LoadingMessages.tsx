import React, { useState, useEffect } from 'react';

const loadingMessages = [
  "Cooking up witty emails... Don't worry, we won't over-season with puns!",
  'Loading boosters for our sales emails. Stirring in just the right amount of persuasive charm!',
  'Generating emails like a marketing maestro. Just a sprinkle of genius left!',
  "Our sales elves are typing away. Santa's got nothing on our email magic!",
  'Squeezing creativity into each email. No pulp, just pure persuasive power!',
  'Mixing metaphors and marketing magic. Stirring in a dash of irresistible allure!',
  "Hold tight! We're bottling up sales brilliance for your inbox.",
  'Emails in progress. Stirring the pot of conversions with a side of sass!',
  'Spinning sales yarns with extra twirls of wit. Almost ready to unravel success!',
  'Cooking up email concoctions for your sales delight. Just a sprinkle of mischief to go!',
  'Generating emails like a magician on caffeine. Abracadabra, sales galore!',
  'Eureka! The perfect sales email is brewing... and maybe a splash of coffee too.',
  'Wizards in action, crafting emails that even unicorns would click on!',
  'Simmering sales strategies into scrumptious email bites. Tastes like success!',
  'Whipping up digital delights for your inbox. Sales feasts, served with a wink!',
  'Firing up the creativity grill. Hot emails incoming!',
  'Marinating words for sales supremacy. Can you smell the success?',
  'Sales brainstorm in progress. Creativity meter: Over 9000!',
  'Mastering the art of selling with a sprinkle of whimsy. Almost there!',
  "Fasten your seatbelts! We're revving up the sales engine with a side of sizzle!",
  "Unleashing our email ninjas. They're stealthy, sassy, and sales-savvy!",
  'Brewing emails hotter than your morning coffee. Handle with care!',
  "Loading creativity... If this was a microwave, your sales would be 'pinged'!",
  'Emails baking with charisma. Warning: May cause sudden customer excitement!',
  'Convincing pixels to become your sales allies. Almost ready for pixel warfare!',
  'Unicorn-approved sales spells in progress. Sprinkling stardust for extra charm!',
  'Shaking up the email cocktail. Olives? Nah. Just a twist of witty words!',
  'Email assembly line in action. Robots with attitude getting your sales game on!',
  'Sales emails sizzling like a BBQ party. No burnt offerings here!',
  'Loading pixels with personality. Watch out for sparks of persuasive brilliance!',
  'Preparing emails like a Michelin-star chef. Presentation: 10/10, Persuasion: 11/10!',
  'Sending Morse code to your sales prospects... using emojis! Wait for the reply beep!',
  'Coding sales sorcery. Have you seen our JavaScript potion for boosting conversions?',
  'Crafting email symphonies. Can you hear the sweet sound of rising sales?',
  'Emails in training... Get ready for a marketing marathon of epic proportions!'
];

const LoadingMessages: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messageIndex, setMessageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setMessage(loadingMessages[messageIndex]);
  }, [messageIndex]);

  return (
    // <div className="flex justify-center items-center h-screen">
    <div className="text-center p-4">
      <p className="text-lg font-semibold text-gray-800">{message}</p>
    </div>
    // </div>
  );
};

export default LoadingMessages;
