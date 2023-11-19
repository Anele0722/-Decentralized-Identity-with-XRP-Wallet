const express = require('express');
const { RippleAPI } = require('ripple-lib');

const app = express();
const port = 3000;

app.get('/:account', async (req, res) => {
  const account = req.params.account;

  // Connect to the XRP Ledger
  const api = new RippleAPI({ server: 'wss://s.altnet.rippletest.net:51233' });
  await api.connect();

  try {
    // Get account information
    const accountInfo = await api.getAccountInfo(account);

    res.json({
      account: accountInfo.account,
      balance: accountInfo.xrpBalance,
      sequence: accountInfo.sequence,
      // Add more relevant information based on your use case
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect from the XRP Ledger
    await api.disconnect();
  }
});

app.listen(port, () => {
  console.log(`XRPL Service is running at http://localhost:${port}`);
});
