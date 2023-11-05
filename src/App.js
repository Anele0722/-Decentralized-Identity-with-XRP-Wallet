import React from 'react';
import gradImage from './grad.jpg';
import { ReactComponent as ReactLogo } from './fingerprint-solid.svg';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("${gradImage}")`,
    backgroundSize: 'cover',
  };

  return (
    <div className="App">
      <div className=" text-white" style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16 relative">
          <div className="max-w-xl grid grid-cols-1 gap-8">
            <div className="w-12">
              <ReactLogo className="fill-white" />
            
            </div>
            <h2 className="text-xl uppercase font-bold">Managing Your Digital Identity</h2>
            <h1 className="text-6xl font-bold">
              Experience the future of Identification
            </h1>
            <p className="text-lg">
              An all-in-one digital identity solution for issuing and managing student ID cards. Perfect for time, attendance register, and identification verification.
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-purple-600 py-3 px-6 text-lg rounded-md w-48">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className="text-5xl">One card, endless Possibilities!</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2">Simplify your student life</h3>
            <p className="text-lg">
              It's your student ID, payment card, and key to a world of campus services.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Blockchain-based identity verification</h3>
            <p className="text-lg">
              Our cutting-edge student card system harnesses the power of the XRP Ledger
              blockchain to ensure that your identity is as secure as Fort Knox. Say goodbye to identity theft worries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;