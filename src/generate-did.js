const { generate, toDIDDocument } = require('did-method-key');
const { Ed25519KeyPair } = require('did-key-ed25519');

async function generateXRPDID() {
  // Generate an Ed25519 key pair for the DID
  const keyPair = await Ed25519KeyPair.generate();
  const keyPairId = keyPair.id;

  // Create the DID using the XRP Ledger as the blockchain
  const did = `did:key:${keyPairId}`;

  // Create a DID document
  const didDocument = toDIDDocument({
    didMethod: 'key',
    keyPair,
  });

  const didDocumentJson = JSON.stringify(didDocument, null, 2);

  console.log(`XRP DID: ${did}`);
  console.log('DID Document:');
  console.log(didDocumentJson);
}

generateXRPDID();