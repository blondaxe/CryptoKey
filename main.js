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
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "createNFT",
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
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "setClose",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "setOpen",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getNFTAttributes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isOpen",
						"type": "bool"
					}
				],
				"internalType": "struct MyNFT.NFTAttributes",
				"name": "",
				"type": "tuple"
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
		"name": "getUserNFTs",
		"outputs": [
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
const contractAddress = "0x053FE8d95475754E50F0D5A12bAA70a850f85130"; // Remplacez par l'adresse du contrat
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

    const nftList = await contract.getUserNFTs(accountAddress); // SOLIDITY
    const list = nftList.map((tokenId) => tokenId.toString());
    console.log(list)

    if (nftList.length === 0) {
      const listItem = document.createElement("p");
      listItem.textContent = "Vous n'avez pas encore de KEY";
      userNFTList.appendChild(listItem);
    } else { 

      for (let i=1; i <= list.length; i++ ) {
        const attributes = await contract.getNFTAttributes(i); // SOLIDITY
        const name = attributes[0]
        const isOpen = attributes[1]
        
        console.log(attributes)
        console.log(attributes[0])
        console.log(attributes[1])
      
        // créer une div qui inclut le li et le button pour styliser plus simplement
        const listItem = document.createElement("li");
        listItem.textContent = `KEY n° ${i}  (${name})`;
        userNFTList.appendChild(listItem);

        const openButton = document.createElement("button");

        if (isOpen == true) {
          openButton.textContent = "Fermer la serrure";
          openButton.addEventListener("click", async function () {
            try {
              const transaction = await contract.connect(signer).setClose(i); // SOLIDITY
              await transaction.wait();

              //createNFTForm.reset();
              //creationMessage.textContent = "";
              alert("KEY fermée avec succès !")
              await getList()
            } catch (error) {
              // creationMessage.textContent = "";
              // createNFTForm.reset();
              alert("Erreur lors de la création.")
            }
          });
          userNFTList.appendChild(openButton);
        } else {
          openButton.textContent = "Ouvrir la serrure";
          openButton.addEventListener("click", async function () {
            try {
              const transaction = await contract.connect(signer).setOpen(i); // SOLIDITY
              await transaction.wait();

              //createNFTForm.reset();
              //creationMessage.textContent = "";
              alert("KEY ouverte avec succès !")
              await getList()
            } catch (error) {
              // creationMessage.textContent = "";
              // createNFTForm.reset();
              alert("Erreur lors de la création.")
            }
          });
          userNFTList.appendChild(openButton);
        }
      }
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