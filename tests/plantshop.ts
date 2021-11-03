import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Plantshop } from '../target/types/plantshop';
const { SystemProgram } = anchor.web3;

describe('plantshop', () => {

  // Configure the client to use the local cluster.
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Plantshop as Program<Plantshop>;

  it('Is initialized!', async () => {
    // Add your test here.

    const plantshopAccount = anchor.web3.Keypair.generate();
    await program.rpc.initialize({
      accounts: {
        plantshopAccount: plantshopAccount.publicKey,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,

      },
      signers: [plantshopAccount],

    });
    // console.log("Your transaction signature", tx);
  });
});
