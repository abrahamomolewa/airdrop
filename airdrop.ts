import { Connection, Keypair, LAMPORTS_PER_SOL } from
"@solana/web3.js"

import wallet from "./wba-wallet.json"

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
    // We're going to claim 2 devnet SOL tokens
    const secretKey = Uint8Array.from(wallet);
    const keypair = Keypair.fromSecretKey(secretKey);

    const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
    console.log(`Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
    console.error(`Oops, something went wrong: ${e}`);
    }
    })();



