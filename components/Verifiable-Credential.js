// VerifiableCredential.js
import React, { useEffect } from 'react';
import { Ed25519KeyPair } from 'did-key-ed25519';
import { Ed25519Signature2018 } from 'jsonld-signatures';
import vc from 'vc-js';

const VerifiableCredential = () => {
  useEffect(() => {
    // Function to create a Verifiable Credential
    const createVerifiableCredential = async () => {
      // Generate an Ed25519 key pair for the credential
      const keyPair = await Ed25519KeyPair.generate();
      // Form the issuer DID using the generated key pair
      const issuerDID = `did:key:${keyPair.id}`;

      // Defining the Verifiable Credential data
      const credential = {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential'],
        issuer: issuerDID,
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
          id: issuerDID,
        },
      };

      // Issue the Verifiable Credential with a digital signature
      const signedVC = await vc.issue({
        credential,
        suite: new Ed25519Signature2018({ key: keyPair }),
        documentLoader: vc.documentLoader,
      });

      // Convert the signed Verifiable Credential to JSON format
      const signedVCJson = JSON.stringify(signedVC, null, 2);

      // Logging the generated Verifiable Credential to the console
      console.log('Verifiable Credential:');
      console.log(signedVCJson);
    };

    // Call the function to create a Verifiable Credential
    createVerifiableCredential();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Return null or render component UI if needed
  return null;
}

// Export the VerifiableCredential component
export default VerifiableCredential;
