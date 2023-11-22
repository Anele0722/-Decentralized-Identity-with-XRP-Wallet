// XrpBalance.js
import React, { useEffect, useState } from 'react';
import XrpJsInteraction from './xrp'; //importing the XrpJsInteraction

const XrpBalance = () => {
  const [xrpBalance, setXrpBalance] = useState(null); //state that holds the XRP balance

  useEffect(() => { // useEffect hook to fetch the XRP balance when the component mounts
    XrpJsInteraction.checkXRPBalance('your-xrp-wallet-address').then((balance) => { // Calling the checkXRPBalance function from XrpJsInteraction
                                                                                    // Replace 'your-xrp-wallet-address' with the actual wallet address
      setXrpBalance(balance);// Updating the state with the fetched balance
    });
  }, []); //The empty dependency array ensures the effect runs only once on mount


  return (
    <div> {/* Header displaying the component title */}
      <h3 className="text-2xl font-bold mb-2">XRP Wallet Balance</h3>     
      {xrpBalance !== null ? (       {/* Displaying XRP balance or loading message based on the state */}

        <p className="text-lg">Balance: {xrpBalance} XRP</p>     
      ) : (
        <p className="text-lg">Loading XRP balance...</p>
      )}
    </div>
  );
}

export default XrpBalance;
