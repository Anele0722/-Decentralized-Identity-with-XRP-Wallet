// GenerateDID.js
import React, { useEffect } from 'react';
import { generate, toDIDDocument } from 'did-method-key';
import { Ed25519KeyPair } from 'did-key-ed25519';

const GenerateDID = () => {
  useEffect(() => {
    const generateXRPDID = async () => {
      const keyPair = await Ed25519KeyPair.generate();
      const keyPairId = keyPair.id;

      const did = `did:key:${keyPairId}`;
      const didDocument = toDIDDocument({
        didMethod: 'key',
        keyPair,
      });

      const didDocumentJson = JSON.stringify(didDocument, null, 2);

      console.log(`XRP DID: ${did}`);
      console.log('DID Document:');
      console.log(didDocumentJson);
    };

    generateXRPDID();
  }, []);

  return null; // or render component UI if needed
}

export default GenerateDID;
