// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ONFT721 } from "@layerzerolabs/onft-evm/contracts/onft721/ONFT721.sol";

contract POAPMeUp is ONFT721 {
    uint256 public nextTokenId;
    mapping(uint256 => string) private _tokenURIs;

    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) ONFT721(_name, _symbol, _lzEndpoint, _delegate) {
        nextTokenId = 1;
    }

    function mint(address _to, string memory _uri) external returns (uint256) {
        uint256 tokenId = nextTokenId;
        _mint(_to, tokenId);
        _setTokenURI(tokenId, _uri);
        nextTokenId++;
        return tokenId;
    }

    function _setTokenURI(uint256 tokenId, string memory _uri) internal virtual {
        _tokenURIs[tokenId] = _uri;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return _tokenURIs[tokenId];
    }
}
