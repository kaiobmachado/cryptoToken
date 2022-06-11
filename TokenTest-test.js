const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("CryptoToken", function (mintToken) {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner, wallet1] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("CryptoToken");

    const hardhatToken = await Token.deploy();


    const bWallet1 = await hardhatToken.balanceOf(wallet1.address);

    
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    await hardhatToken.transfer(wallet1.address, 70);

    await hardhatToken.mintToken();

    console.log(await hardhatToken.totalSupply())
    console.log(await hardhatToken.balanceOf(owner.address))

    expect(await hardhatToken.totalSupply()).to.equal (150);
    expect( await hardhatToken.balanceOf(owner.address)).to.equal (80);
    

  });
});

describe("CryptoToken", function (mintToken) {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner, wallet1] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("CryptoToken");

    const hardhatToken = await Token.deploy();


    const bWallet1 = await hardhatToken.balanceOf(wallet1.address);

    
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    await hardhatToken.transfer(wallet1.address, 20);

    await hardhatToken.mintToken();
   

    console.log(await hardhatToken.totalSupply())
    console.log(await hardhatToken.balanceOf(owner.address))

    expect(await hardhatToken.totalSupply()).to.equal (100);
    expect( await hardhatToken.balanceOf(owner.address)).to.equal (80);
    

  });
});

describe("CryptoToken", function (mintToken) {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner, wallet1] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("CryptoToken");

    const hardhatToken = await Token.deploy();


    const bWallet1 = await hardhatToken.balanceOf(wallet1.address);

    
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    await hardhatToken.transfer(wallet1.address,49);

    await hardhatToken.mintToken();
   

    console.log(await hardhatToken.totalSupply())
    console.log(await hardhatToken.balanceOf(owner.address))

    expect(await hardhatToken.totalSupply()).to.equal (100);
    expect( await hardhatToken.balanceOf(owner.address)).to.equal (51);
    

  });
});