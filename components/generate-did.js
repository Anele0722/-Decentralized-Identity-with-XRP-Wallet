// GenerateDID.js
import React, { useEffect } from 'react';
import { generate, toDIDDocument } from 'did-method-key';
import { Ed25519KeyPair } from 'did-key-ed25519';

const GenerateDID = () => {
  useEffect(() => {
    // Function to generate an XRP DID and its associated DID Document
    const generateXRPDID = async () => {
      // Generate an Ed25519 key pair for the DID
      const keyPair = await Ed25519KeyPair.generate();
      // Extract the key pair ID for the DID
      const keyPairId = keyPair.id;

      // Create the XRP DID using the generated key pair ID
      const did = `did:key:${keyPairId}`;
      
      // Generates the DID Document using the 'did-method-key' library
      const didDocument = toDIDDocument({
        didMethod: 'key',
        keyPair,
      });

      // Converting the DID Document to JSON format
      const didDocumentJson = JSON.stringify(didDocument, null, 2);

      // Logging the generated XRP DID and its associated DID Document to the console
      console.log(`XRP DID: ${did}`);
      console.log('DID Document:');
      console.log(didDocumentJson);
    };

    // Calling the function to generate an XRP DID
    generateXRPDID();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Return null or render component UI if needed
  return null;
}

// Export the GenerateDID component
export default GenerateDID;
