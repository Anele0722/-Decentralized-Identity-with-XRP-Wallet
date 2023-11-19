// VerifiableCredential.js
import React, { useEffect } from 'react';
import { Ed25519KeyPair } from 'did-key-ed25519';
import { Ed25519Signature2018 } from 'jsonld-signatures';
import vc from 'vc-js';

const VerifiableCredential = () => {
  useEffect(() => {
    const createVerifiableCredential = async () => {
      const keyPair = await Ed25519KeyPair.generate();
      const issuerDID = `did:key:${keyPair.id}`;

      const credential = {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential'],
        issuer: issuerDID,
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
          id: issuerDID,
        },
      };

      const signedVC = await vc.issue({
        credential,
        suite: new Ed25519Signature2018({ key: keyPair }),
        documentLoader: vc.documentLoader,
      });

      const signedVCJson = JSON.stringify(signedVC, null, 2);

      console.log('Verifiable Credential:');
      console.log(signedVCJson);
    };

    createVerifiableCredential();
  }, []);

  return null; // or render component UI if needed
}

export default VerifiableCredential;
