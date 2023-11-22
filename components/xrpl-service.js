// XrpService.js
import React, { useState } from 'react';
import { RippleAPI } from 'ripple-lib';

// XrpService component that checks XRPL account information
const XrpService = ({ account }) => {
  // State to hold the account information
  const [accountInfo, setAccountInfo] = useState(null);

  // Function to connect to XRPL and fetch account information
  const connectToXRP = async () => {
    // Create a new RippleAPI instance with the XRPL testnet server
    const api = new RippleAPI({ server: 'wss://s.altnet.rippletest.net:51233' });

    // Connecting to the XRPL server
    await api.connect();

    try {
      // Fetching account information using the provided account address
      const accountInfo = await api.getAccountInfo(account);
      
      // Set the fetched account information to the component state
      setAccountInfo(accountInfo);
    } catch (error) {
      // Handle errors by logging the error message to the console
      console.error('Error:', error.message);
    } finally {
      // Disconnect from the XRPL server, whether the operation succeeds or fails
      await api.disconnect();
    }
  };

  // Render XRPL Service component UI
  return (
    <div>
      {/* Component title */}
      <h3 className="text-2xl font-bold mb-2">XRPL Service</h3>
      
      {/* Button to trigger the account information check */}
      <button onClick={connectToXRP}>Check Account Info</button>

      {/* Display account information if available */}
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

// Export the XrpService component
export default XrpService;
