// XrpService.js
import React, { useState } from 'react';
import { RippleAPI } from 'ripple-lib';

const XrpService = ({ account }) => {
  const [accountInfo, setAccountInfo] = useState(null);

  const connectToXRP = async () => {
    const api = new RippleAPI({ server: 'wss://s.altnet.rippletest.net:51233' });
    await api.connect();

    try {
      const accountInfo = await api.getAccountInfo(account);
      setAccountInfo(accountInfo);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      await api.disconnect();
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">XRPL Service</h3>
      <button onClick={connectToXRP}>Check Account Info</button>
      {accountInfo && (
        <div>
          <p className="text-lg">Account: {accountInfo.account}</p>
          <p className="text-lg">Balance: {accountInfo.xrpBalance} XRP</p>
          <p className="text-lg">Sequence: {accountInfo.sequence}</p>
        </div>
      )}
    </div>
  );
}

export default XrpService;
