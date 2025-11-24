# POAP Me Up

**POAP Me Up** is a decentralized application (dApp) built on the Superchain that allows users to generate and mint exclusive POAPs (Proof of Attendance Protocol) NFTs.

## Features

-   **Multi-Chain Support:** Deployed on Base, Optimism, and Celo.
-   **Reown AppKit Integration:** Seamless wallet connection and interaction using the latest Reown AppKit.
-   **AI-Generated Art:** (Coming Soon) Generate unique POAP art using AI.
-   **Low Fees:** Leverages the efficiency of the Superchain L2s.

## Tech Stack

-   **Frontend:** Next.js 16, React 19, TailwindCSS 4
-   **Blockchain:** Solidity, Hardhat, Ethers.js
-   **Wallet Connection:** Reown AppKit, Wagmi, Viem
-   **Smart Contracts:** OpenZeppelin ERC721

## Getting Started

### Prerequisites

-   Node.js v20+
-   npm or yarn
-   Wallet with testnet/mainnet ETH (Base, Optimism, Celo)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/BRN-SLP/POAP-me-UP.git
    cd POAP-me-UP
    ```

2.  Install dependencies:
    ```bash
    npm install
    cd smart-contracts && npm install
    ```

3.  Set up environment variables:
    Create a `.env` file in the root and `smart-contracts` directories.
    ```env
    NEXT_PUBLIC_PROJECT_ID=your_reown_project_id
    PRIVATE_KEY=your_wallet_private_key
    BASESCAN_API_KEY=your_basescan_api_key
    ```

### Deployment

To deploy the smart contracts to Base Mainnet:

```bash
cd smart-contracts
npx hardhat run scripts/deploy.ts --network base
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT
