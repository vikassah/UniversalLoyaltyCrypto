const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoyaltyContractFactory", function () {
  it("Should create four coins", async function () {
    const LoyaltyCoinFactory = await hre.ethers.getContractFactory("LoyaltyCoinFactory");
    const factory = await LoyaltyCoinFactory.deploy();
    await factory.deployed();
  
    console.log("LoyaltyCoinFactory deployed to:", factory.address);
  
    await factory.createLoyaltyERC20Coin("MOES Coin", "MOES", ethers.utils.parseUnits("1000000", 18));
    await factory.createLoyaltyERC20Coin("Starbucks Coin", "SBUCKS", ethers.utils.parseUnits("1000000", 18));
    await factory.createLoyaltyERC20Coin("LOYL Coin", "LOYL", ethers.utils.parseUnits("1000000", 18));
    await factory.createLoyaltyERC20Coin("McDonalds Coin", "MCD", ethers.utils.parseUnits("1000000", 18));

    expect((await factory.totalCoins()).toNumber()).to.equal(4);

  });
});
