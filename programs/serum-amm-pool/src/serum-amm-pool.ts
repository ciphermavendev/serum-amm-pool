import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SerumAmmPool } from "../target/types/serum_amm_pool";
import { TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";

describe("serum-amm-pool", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SerumAmmPool as Program<SerumAmmPool>;

  it("Initializes the pool", async () => {
    // Create test tokens
    const tokenA = await Token.createMint(
      provider.connection,
      provider.wallet.payer,
      provider.wallet.publicKey,
      null,
      6,
      TOKEN_PROGRAM_ID
    );

    const tokenB = await Token.createMint(
      provider.connection,
      provider.wallet.payer,
      provider.wallet.publicKey,
      null,
      6,
      TOKEN_PROGRAM_ID
    );

    // Create token accounts
    const tokenAAccount = await tokenA.createAccount(provider.wallet.publicKey);
    const tokenBAccount = await tokenB.createAccount(provider.wallet.publicKey);

    // Initialize pool
    const pool = anchor.web3.Keypair.generate();
    
    await program.methods
      .initializePool(new anchor.BN(1000000), new anchor.BN(1000000))
      .accounts({
        pool: pool.publicKey,
        tokenAAccount,
        tokenBAccount,
        initializer: provider.wallet.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([pool])
      .rpc();

    // Verify pool state
    const poolAccount = await program.account.pool.fetch(pool.publicKey);
    assert.ok(poolAccount.tokenAAccount.equals(tokenAAccount));
    assert.ok(poolAccount.tokenBAccount.equals(tokenBAccount));
  });
});