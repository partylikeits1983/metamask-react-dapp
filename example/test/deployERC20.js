const { ethers } = require("hardhat");

require("dotenv").config()

async function main() {
    const RPC = 'http://127.0.0.1:8545/';
    const provider = new ethers.providers.JsonRpcProvider(RPC);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // DEPLOYING //
    const DAI = await ethers.getContractFactory("DAI", {signer});
    const dai = await DAI.deploy();
    await dai.deployed();

    console.log("DAI address", dai.address);
    console.log("User DAI balance", await dai.balanceOf(signer.address));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
