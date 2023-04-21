import React from 'react';
import "./Home.css";
import { ElvWalletFrameClient } from "@eluvio/elv-wallet-frame-client";

// Initialize in iframe at target element
async function init() {
    const walletFrameClient = await ElvWalletFrameClient.InitializeFrame({
      requestor: "My App",
      walletAppUrl: "https://wallet.contentfabric.io",
      target: document.getElementById("#wallet-target")
    });
  }
  
  init();

function Home () {
    return (
        <main className="MainContainer" style={{padding: '10px'}}>
        <section className={`p-3`}>
            <h2>Welcome to VSN!</h2>
            <div id="wallet-target"></div>
        </section>
        </main>
    )
}
export default Home;