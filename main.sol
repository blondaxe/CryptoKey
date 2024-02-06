// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => uint256[]) private _userNFTs;

    struct NFTAttributes {
        string name;
        bool isOpen;
    }

    mapping(uint256 => NFTAttributes) private _nftAttributes;

    constructor() ERC721("My keys", "KEY") {}

    function createNFT(address recipient, string memory name) public returns (uint256) {
        require(recipient == msg.sender, "Vous ne pouvez creer une KEY que pour vous");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(recipient, newItemId);
        _userNFTs[recipient].push(newItemId); // Ajoute l'ID du NFT à la liste de l'utilisateur

        _nftAttributes[newItemId] = NFTAttributes(name, true); // Ajoute les caractéristiques à l'ID (ouvert par défaut)

        return newItemId;
    }

    function setOpen(uint256 tokenId) public {
        //require(_exists(tokenId), "Token does not exist"); //Redoder fonction _exists ?? 
        require(ownerOf(tokenId) == msg.sender, "You are not the owner");

        _nftAttributes[tokenId].isOpen = true;
    }

    function setClose(uint256 tokenId) public {
        //require(_exists(tokenId), "Token does not exist");
        require(ownerOf(tokenId) == msg.sender, "You are not the owner");

        _nftAttributes[tokenId].isOpen = false;
    }

    function getNFTAttributes(uint256 tokenId) public view returns (NFTAttributes memory) {
        return _nftAttributes[tokenId];
    }

    function getUserNFTs(address user) public view returns (uint256[] memory) {
        return _userNFTs[user];
    }
}












/*

POUR LA FONCTIONNALITE DE TRANSFERT DE KEY

    function hasNFT(address owner, uint256 tokenId) public view returns (bool) {
        return ownerOf(tokenId) == owner;
    }

    function _updateUserNFTs(address user, uint256 tokenId) private {
        bool found = false;
        uint256[] storage userNFTs = _userNFTs[user];
        for (uint256 i = 0; i < userNFTs.length; i++) {
            if (userNFTs[i] == tokenId) {
                found = true;
                // trouver une façon de supprimer le token de la liste
                break;
            }
        }

        if (!found) {
            userNFTs.push(tokenId);
        }
    }

    event VariableChanged(address owner);

    function setVariable() internal {
        emit VariableChanged(msg.sender);
    }

    function transferNFT(address from, address to, uint256 tokenId) public {
        require(
            _isApprovedOrOwner(msg.sender, tokenId),
            "Not approved or owner of the NFT"
        );
        _transfer(from, to, tokenId);

        // Met à jour la liste des NFT de l'expéditeur et du destinataire
        _updateUserNFTs(from, tokenId);
        _updateUserNFTs(to, tokenId);
    }
}
*/