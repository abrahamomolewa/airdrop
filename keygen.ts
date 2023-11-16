import { Keypair } from "@solana/web3.js";
import * as fs from 'fs';

// Generate a new keypair
let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);

const keypairJSON = JSON.stringify(Array.from(kp.secretKey));
fs.writeFileSync('wba-wallet.json', keypairJSON);

console.log('Private key saved to solana-keypair.json');

