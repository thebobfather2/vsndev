import React from 'react';
import "./Home.css";
import { ElvWalletFrameClient } from "@eluvio/elv-wallet-frame-client";

// Initialize in iframe at target element
const walletFrameClient = await ElvWalletFrameClient.InitializeFrame({
    requestor: "VSN",
    walletAppUrl: "https://wallet.contentfabric.io",
    target: document.getElementById("#wallet-target")
  });

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