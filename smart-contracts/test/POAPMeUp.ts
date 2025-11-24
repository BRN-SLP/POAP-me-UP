import { expect } from "chai";
import { ethers } from "hardhat";

describe("POAPMeUp", function () {
    it("Should mint a new token", async function () {
        const POAPMeUp = await ethers.getContractFactory("POAPMeUp");
        const poap = await POAPMeUp.deploy("POAP Me Up", "POAP");
        await poap.deployed();

        const [owner] = await ethers.getSigners();

        const tx = await poap.mint(owner.address, "ipfs://test-uri");
        await tx.wait();

        expect(await poap.ownerOf(1)).to.equal(owner.address);
        expect(await poap.tokenURI(1)).to.equal("ipfs://test-uri");
    });
});
