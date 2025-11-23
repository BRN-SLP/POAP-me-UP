export const POAP_ABI = [
    {
        "inputs": [
            { "internalType": "string", "name": "_name", "type": "string" },
            { "internalType": "string", "name": "_symbol", "type": "string" },
            { "internalType": "address", "name": "_lzEndpoint", "type": "address" },
            { "internalType": "address", "name": "_delegate", "type": "address" }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "_to", "type": "address" },
            { "internalType": "string", "name": "_uri", "type": "string" }
        ],
        "name": "mint",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
        "name": "tokenURI",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint32", "name": "_dstEid", "type": "uint32" },
            { "internalType": "bytes32", "name": "_to", "type": "bytes32" },
            { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
            { "internalType": "bytes", "name": "_options", "type": "bytes" },
            { "internalType": "bytes", "name": "_composeMsg", "type": "bytes" },
            { "internalType": "bytes", "name": "_payInLzToken", "type": "bytes" }
        ],
        "name": "send",
        "outputs": [
            { "internalType": "uint256", "name": "msgReceipt", "type": "uint256" }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint32", "name": "_dstEid", "type": "uint32" },
            { "internalType": "bytes32", "name": "_to", "type": "bytes32" },
            { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
            { "internalType": "bytes", "name": "_options", "type": "bytes" },
            { "internalType": "bool", "name": "_payInLzToken", "type": "bool" }
        ],
        "name": "quote",
        "outputs": [
            { "internalType": "uint256", "name": "nativeFee", "type": "uint256" },
            { "internalType": "uint256", "name": "lzTokenFee", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] as const;

export const POAP_ADDRESSES = {
    baseSepolia: "0x45f6dAAEFA7F5F374901787b83EB0fbb40f1932f",
    optimismSepolia: "0x543B57fB141855e5590DBaDfbc1302F5239271f3",
    // celoSepolia: "SKIPPED",
} as const;

export const LZ_EIDS = {
    baseSepolia: 40245,
    optimismSepolia: 40232,
    celoSepolia: 40259 // Assuming this for now, but not used
} as const;
