// XrpBalance.js
import React, { useEffect, useState } from 'react';
import XrpJsInteraction from './xrp';

const XrpBalance = () => {
  const [xrpBalance, setXrpBalance] = useState(null);

  useEffect(() => {
    XrpJsInteraction.checkXRPBalance('your-xrp-wallet-address').then((balance) => {
      setXrpBalance(balance);
    });
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">XRP Wallet Balance</h3>
      {xrpBalance !== null ? (
        <p className="text-lg">Balance: {xrpBalance} XRP</p>
      ) : (
        <p className="text-lg">Loading XRP balance...</p>
      )}
    </div>
  );
}

export default XrpBalance;
