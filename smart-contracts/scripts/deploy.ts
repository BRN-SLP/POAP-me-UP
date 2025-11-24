import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // LayerZero Endpoint V2 addresses for testnets
    // Base Sepolia: 0x6EDCE65403992e310A62460808c4b910D972f10f
    // Optimism Sepolia: 0x6EDCE65403992e310A62460808c4b910D972f10f
    // Celo Sepolia: 0x6EDCE65403992e310A62460808c4b910D972f10f
    // Note: Check official LayerZero docs for latest addresses if these fail.
    // Using a placeholder for now, user should verify.

    const POAPMeUp = await ethers.getContractFactory("POAPMeUp");
    const poap = await POAPMeUp.deploy(
        "POAP Me Up",
        "POAP"
    );

    await poap.deployed();

    console.log("POAPMeUp deployed to:", poap.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
