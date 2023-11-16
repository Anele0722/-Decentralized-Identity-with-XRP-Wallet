const vc = require('vc-js');
const { Ed25519KeyPair } = require('did-key-ed25519');
const { Ed25519Signature2018 } = require('jsonld-signatures');

async function createVerifiableCredential() {
  // Replace with your XRP DID
  const xrpDID = 'did:key:your-xrp-did-id';

  // Replace with the issuer DID and keypair information
  const issuerDID = xrpDID;
  const issuerKeyPair = await Ed25519KeyPair.generate();

  // Create a Verifiable Credential
  const credential = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiableCredential'],
    issuer: issuerDID,
    issuanceDate: new Date().toISOString(),
    credentialSubject: {
      id: xrpDID,
    },
  };

  // Sign the Verifiable Credential
  const signedVC = await vc.issue({
    credential,
    suite: new Ed25519Signature2018({ key: issuerKeyPair }),
    documentLoader: vc.documentLoader,
  });

  const signedVCJson = JSON.stringify(signedVC, null, 2);

  console.log('Verifiable Credential:');
  console.log(signedVCJson);
}

createVerifiableCredential();