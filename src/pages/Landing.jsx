
import React from 'react';
import AppHeaderBar from '../components/AppHeaderBar';
import CheckoutButton from '../components/CheckoutButton';
import MonkQuoteScroll from '../components/MonkQuoteScroll';

function Landing() {
  return (
    <div>
      <AppHeaderBar title="Welcome to Farpy Grid" />
      <div className="p-6 space-y-4 text-center">
        <MonkQuoteScroll />
        <CheckoutButton />
      </div>
    </div>
  );
}

export default Landing;
