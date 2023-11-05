const XrplClient = require('xrpl.js').XrplClient;

async function checkXRPBalance(xrpWallet) {
  // Replace with your XRP Wallet's secret key
  const xrpSecret = 'sXXXXXXXXXXXXXXXXX...'; // Replace with the secret key for your XRP wallet

  // Connect to the XRP Ledger server (you can use a different server URL)
  const client = new XrplClient('wss://s1.ripple.com');

  try {
    await client.connect();

    // Generate an XRP address from the secret key
    const xrpAddress = client.wallet.deriveAddress(xrpSecret);

    // Get the XRP balance
    const xrpBalance = await client.getBalance(xrpAddress);

    console.log(`XRP Wallet Address: ${xrpAddress}`);
    console.log(`XRP Balance: ${xrpBalance} XRP`);
  } catch (error) {
    console.error('Error interacting with XRP Ledger:', error);
  } finally {
    await client.disconnect();
  }
}

// Replace 'your-xrp-wallet-address' with your actual XRP wallet address
checkXRPBalance('your-xrp-wallet-address');
