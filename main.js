// Connexion Metamask

async function connectMetaMask() {
  try {
    if (typeof window.ethereum == "undefined") {
      alert("Meta Mask n'est pas installé");

      return null
    } else {
      const account = await window.ethereum.request({ method: "eth_requestAccounts" });

      if (account.length <= 0) {
        return null
      } else {
        const messagesDiv = document.getElementById('messages');
        messagesDiv.textContent = "Vous êtes connecté avec l'adresse : " + account;

        return account
      }
    }
  } catch (error) {
    return null
  }
}

const account = await connectMetaMask()


// Lien avec le contract

const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "tokenURI",
        "type": "string"
      }
    ],
    "name": "awardItem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      }
    ],
    "name": "BatchMetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "MetadataUpdate",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserKEYs",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]  // Remplacez par l'ABI du contrat
const contractAddress = "0xE4fd4259dD1B43E086422Fc2DADe2CFd98888629"; // Remplacez par l'adresse du contrat
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);
const accountAddress = account.join('');

const createNFTForm = document.getElementById("createNFTForm");
const transferNFTForm = document.getElementById("transferNFTForm");


// Obtenir la liste de KEY de l'utilisateur

async function getList() {
  try {
    const userNFTList = document.getElementById("userNFTList");
    userNFTList.innerHTML = ""; // Réinitialise la liste

    const nftList = await contract.getUserKEYs(accountAddress); // SOLIDITY
    const list = nftList.map((tokenId) => tokenId.toString());
    console.log(list)
    const id = list[1].split(",");
    const name = list[0].split(",");

    // Si la liste est vide : QUITTER la fonction et dire que l'utilisateur n'a pas encode de KEYs

    for (let i = 0; i < id.length; i++) {
      console.log(id[i]);
      console.log(name[i]);
      
      // créer une div qui inclut le li et le button pour styliser plus simplement
      const listItem = document.createElement("li");
      listItem.textContent = `KEY n° ${id[i]}  (${name[i]})`;
      userNFTList.appendChild(listItem);

      const openButton = document.createElement("button");
      // Mettre "ouvrir" si elle est fermée et inversement
      openButton.textContent = "Ouvrir / Fermer la serrure";
      openButton.addEventListener("click", async function () {
        alert(id[i]);

        // fonction pour ouvrir ou fermer avec SOLIDITY

      });
      userNFTList.appendChild(openButton);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des KEY : ', error);
  }
}

await getList()


// Transférer une KEY

transferNFTForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const toAddress = document.getElementById("toAddress").value;
  const tokenId = document.getElementById("tokenId").value;
  const transactionMessage = document.getElementById('transaction-message');
  transactionMessage.textContent = "Transaction en cours...";

  try {
    const transaction = await contract.connect(signer).transferNFT(accountAddress, toAddress, tokenId);
    await transaction.wait();

    transferNFTForm.reset();
    transactionMessage.textContent = "";
    alert("KEY transférée avec succès !")
    await getList()

  } catch (error) {
    transactionMessage.textContent = "";
    transferNFTForm.reset();
    alert("Erreur lors de la transaction.")
  }
});


// Créer une KEY

createNFTForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const tokenName = document.getElementById("tokenName").value;
  const creationMessage = document.getElementById('creation-message');
  creationMessage.textContent = "Transaction en cours...";

  const KEYName = tokenName.replace(/,/g, ''); // Supprime toutes les virgules de la valeur

  try {
    const transaction = await contract.connect(signer).createNFT(accountAddress, KEYName); // SOLIDITY
    await transaction.wait();

    createNFTForm.reset();
    creationMessage.textContent = "";
    alert("KEY crée avec succès !")
    await getList()

  } catch (error) {
    creationMessage.textContent = "";
    createNFTForm.reset();
    alert("Erreur lors de la création.")
  }
});