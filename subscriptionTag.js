// SubscriptionTag.js

import React from 'react';

function SubscriptionTag() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-purple-600 py-4 text-white text-center">
      <h2 className="text-xl font-bold">Subscribe for Updates</h2>
      <p className="text-sm">Stay up to date with our latest features and announcements.</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="rounded-md px-4 py-2"
      />
      <button className="bg-white text-black rounded-md px-4 py-2 ml-2">
        Subscribe
      </button>
    </div>
  );
}

export default SubscriptionTag;
