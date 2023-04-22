import React from 'react';
import "./Home.css";
import { ElvWalletFrameClient } from "@eluvio/elv-wallet-frame-client";
    
// initialize in a popup
async function initializeWalletFrameClient() {
  const walletFrameClient = await ElvWalletFrameClient.InitializePopup({
    requestor: "My App",
    walletAppUrl: "https://wallet.contentfabric.io",
  });
  return walletFrameClient;
}

initializeWalletFrameClient()
  .then((walletFrameClient) => {
    // Use the walletFrameClient object here
    console.log(walletFrameClient);
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error);
  });

function Home () {
    return (
        <main className="MainContainer" style={{padding: '10px'}}>
        <section className={`p-3`}>
            <h2>Welcome to VSN!</h2>
        </section>
        </main>
    )
}
export default Home;