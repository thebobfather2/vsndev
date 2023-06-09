import React, { useEffect, useState } from 'react';
import "./Home.css";
import { ElvWalletFrameClient } from "@eluvio/elv-wallet-frame-client";
    
function Home () {
  const [walletFrameClient, setWalletFrameClient] = useState(null);

  useEffect(() => {
    async function initializeWalletFrameClient() {
      const walletFrameClient = await ElvWalletFrameClient.InitializeFrame({
        requestor: "My App",
        walletAppUrl: "https://wallet.contentfabric.io/?mid=iq__PoyQD1L385EWHguKYvGNUbpyXbP&hgm=/#/marketplace/iq__PoyQD1L385EWHguKYvGNUbpyXbP/store",
        target: document.getElementById("wallet-target")
      });
      setWalletFrameClient(walletFrameClient);
    }

    initializeWalletFrameClient().catch((error) => {
      // Handle any errors here
      console.error(error);
    });
  }, []);

  return (
    <main className="MainContainer" style={{padding: '10px'}}>
      <section className={`p-3`}>
        <h2>Welcome to VSN!</h2>
      </section>
      <iframe 
        id="wallet-target" 
        title="Eluvio Wallet" 
        style={{ width: "100%", height: "100vh", border: "solid", borderColor: "white", borderWidth: "10px", borderRadius: "20px" }}>
      </iframe>
    </main>
  )
}

export default Home;
