use anchor_lang::prelude::*;

declare_id!("8QTpRdAJedrYUxG31T2MATyDWh3G3BMAfG7vBi3ziks4");

#[program]
pub mod plantshop {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let plantshop_account = &mut ctx.accounts.plantshop_account;
        plantshop_account.plantshop = 420;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    plantshop_account: ProgramAccount<'info, PlantShop>,
    rent: Sysvar<'info, Rent>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct PlantShop {
    pub plantshop: u64,
}
