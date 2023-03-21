/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZapSwapCurve, ZapSwapCurveInterface } from "../ZapSwapCurve";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "__balancer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isFrozen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "spenders",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "setApprovalsFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_newState",
        type: "bool",
      },
    ],
    name: "setIsFrozen",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "balancerPoolId",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "contract IAsset",
            name: "principalToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minPtAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "needsChildZap",
            type: "bool",
          },
        ],
        internalType: "struct ZapSwapCurve.ZapInInfo",
        name: "_info",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "curvePool",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "roots",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "parentIdx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLpAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ZapSwapCurve.ZapCurveLpIn",
        name: "_zap",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "curvePool",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "roots",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "parentIdx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLpAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ZapSwapCurve.ZapCurveLpIn",
        name: "_childZap",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IERC20Permit",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiration",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct ZapSwapCurve.PermitData[]",
        name: "_permitData",
        type: "tuple[]",
      },
    ],
    name: "zapIn",
    outputs: [
      {
        internalType: "uint256",
        name: "ptAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "balancerPoolId",
            type: "bytes32",
          },
          {
            internalType: "contract IAsset",
            name: "principalToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "principalTokenAmount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minBaseTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minRootTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "targetNeedsChildZap",
            type: "bool",
          },
        ],
        internalType: "struct ZapSwapCurve.ZapOutInfo",
        name: "_info",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "curvePool",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "int128",
            name: "rootTokenIdx",
            type: "int128",
          },
          {
            internalType: "address",
            name: "rootToken",
            type: "address",
          },
          {
            internalType: "bool",
            name: "curveRemoveLiqFnIsUint256",
            type: "bool",
          },
        ],
        internalType: "struct ZapSwapCurve.ZapCurveLpOut",
        name: "_zap",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "curvePool",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "int128",
            name: "rootTokenIdx",
            type: "int128",
          },
          {
            internalType: "address",
            name: "rootToken",
            type: "address",
          },
          {
            internalType: "bool",
            name: "curveRemoveLiqFnIsUint256",
            type: "bool",
          },
        ],
        internalType: "struct ZapSwapCurve.ZapCurveLpOut",
        name: "_childZap",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IERC20Permit",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiration",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct ZapSwapCurve.PermitData[]",
        name: "_permitData",
        type: "tuple[]",
      },
    ],
    name: "zapOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002267380380620022678339810160408190526200003491620000a0565b600080546001600160a01b031916339081179091556001600255620000599062000079565b60601b6001600160601b0319166080526003805460ff19169055620000d0565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b600060208284031215620000b2578081fd5b81516001600160a01b0381168114620000c9578182fd5b9392505050565b60805160601c612171620000f66000396000818161036a01526107a701526121716000f3fe6080604052600436106100a05760003560e01c80638da5cb5b116100645780638da5cb5b14610159578063b6a5d7de1461017b578063b91816111461019b578063c24bca01146101bb578063e5355a22146101db578063fe9fbb80146101ee576100a7565b806313af4035146100ac57806327c97fa5146100ce57806333eeb147146100ee57806364eda74b146101195780636a978af614610139576100a7565b366100a757005b600080fd5b3480156100b857600080fd5b506100cc6100c736600461187d565b61020e565b005b3480156100da57600080fd5b506100cc6100e936600461187d565b610263565b3480156100fa57600080fd5b506101036102ae565b6040516101109190611ced565b60405180910390f35b34801561012557600080fd5b506100cc610134366004611924565b6102b7565b61014c610147366004611a56565b6102ef565b6040516101109190611fc9565b34801561016557600080fd5b5061016e61050b565b6040516101109190611bd1565b34801561018757600080fd5b506100cc61019636600461187d565b61051a565b3480156101a757600080fd5b506101036101b636600461187d565b610550565b3480156101c757600080fd5b506100cc6101d63660046118a0565b610565565b61014c6101e936600461195c565b6106d0565b3480156101fa57600080fd5b5061010361020936600461187d565b6108ea565b6000546001600160a01b031633146102415760405162461bcd60e51b815260040161023890611d0b565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461028d5760405162461bcd60e51b815260040161023890611d0b565b6001600160a01b03166000908152600160205260409020805460ff19169055565b60035460ff1681565b6102c0336108ea565b6102dc5760405162461bcd60e51b815260040161023890611d35565b6003805460ff1916911515919091179055565b60006102f961090c565b60035460ff161561031c5760405162461bcd60e51b815260040161023890611e38565b8161032681610934565b61034e3330886040015189602001516001600160a01b0316610af5909392919063ffffffff16565b6040805160c08101909152865181526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906352bbbe2990602081018481526020018a602001516001600160a01b0316815260200189602001516001600160a01b031681526020018a604001518152602001604051806040016040528060048152602001630307830360e41b8152508152506040518060800160405280306001600160a01b03168152602001600015158152602001306001600160a01b03168152602001600015158152508a608001518b60c001516040518563ffffffff1660e01b815260040161044d9493929190611f25565b602060405180830381600087803b15801561046757600080fd5b505af115801561047b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049f9190611b2f565b90506104d686828960e001516104b9578960a001516104bc565b60005b8a60e001516104cf578a606001516104d1565b305b610b4d565b92508660e00151156104f9576104f685848960a001518a60600151610b4d565b92505b5050610503610d39565b949350505050565b6000546001600160a01b031681565b6000546001600160a01b031633146105445760405162461bcd60e51b815260040161023890611d0b565b61054d81610d40565b50565b60016020526000908152604090205460ff1681565b61056e336108ea565b61058a5760405162461bcd60e51b815260040161023890611d35565b81518351146105ab5760405162461bcd60e51b815260040161023890611d9b565b80518351146105cc5760405162461bcd60e51b815260040161023890611d9b565b60005b83518110156106ca576106458382815181106105fb57634e487b7160e01b600052603260045260246000fd5b6020026020010151600086848151811061062557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316610d679092919063ffffffff16565b6106b883828151811061066857634e487b7160e01b600052603260045260246000fd5b602002602001015183838151811061069057634e487b7160e01b600052603260045260246000fd5b602002602001015186848151811061062557634e487b7160e01b600052603260045260246000fd5b806106c2816120b1565b9150506105cf565b50505050565b60006106da61090c565b60035460ff16156106fd5760405162461bcd60e51b815260040161023890611e38565b8161070781610934565b61070f61156a565b8660a001511561077f57600061074286604051806060016040528060008152602001600081526020016000815250610e2f565b9050808287608001516003811061076957634e487b7160e01b600052603260045260246000fd5b6020020181815161077a9190612056565b905250505b600061078b8783610e2f565b6040805160c08101909152895181529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906352bbbe299060208101600081526020018a602001516001600160a01b031681526020018b604001516001600160a01b03168152602001848152602001604051806040016040528060048152602001630307830360e41b8152508152506040518060800160405280306001600160a01b031681526020016000151581526020018c602001516001600160a01b03168152602001600015158152508b606001518c608001516040518563ffffffff1660e01b815260040161088b9493929190611f25565b602060405180830381600087803b1580156108a557600080fd5b505af11580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dd9190611b2f565b9350505050610503610d39565b6001600160a01b03811660009081526001602052604090205460ff165b919050565b60028054141561092e5760405162461bcd60e51b815260040161023890611e61565b60028055565b80511561054d5760005b8151811015610af15781818151811061096757634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b031663d505accf338484815181106109a257634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518585815181106109ce57634e487b7160e01b600052603260045260246000fd5b6020026020010151604001518686815181106109fa57634e487b7160e01b600052603260045260246000fd5b602002602001015160600151878781518110610a2657634e487b7160e01b600052603260045260246000fd5b602002602001015160c00151888881518110610a5257634e487b7160e01b600052603260045260246000fd5b602002602001015160800151898981518110610a7e57634e487b7160e01b600052603260045260246000fd5b602002602001015160a001516040518863ffffffff1660e01b8152600401610aac9796959493929190611c23565b600060405180830381600087803b158015610ac657600080fd5b505af1158015610ada573d6000803e3d6000fd5b505050508080610ae9906120b1565b91505061093e565b5050565b6106ca846323b872dd60e01b858585604051602401610b1693929190611bff565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261135a565b60608401516000906001600160a01b0383811630141591839173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee911614610b9457610b8f87606001516113e9565b610b96565b475b9050866080015115610c13578651604080890151905163f1dc3cc960e01b81526001600160a01b039092169163f1dc3cc991610bdc918a91600f0b908a90600401611feb565b600060405180830381600087803b158015610bf657600080fd5b505af1158015610c0a573d6000803e3d6000fd5b50505050610c7d565b86516040808901519051630d2680e960e11b81526001600160a01b0390921691631a4d01d291610c4a918a91908a90600401611fd2565b600060405180830381600087803b158015610c6457600080fd5b505af1158015610c78573d6000803e3d6000fd5b505050505b60608701516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610cf557610cb0814761206e565b92508115610cf0576040516001600160a01b0385169084156108fc029085906000818181858888f19350505050158015610cee573d6000803e3d6000fd5b505b610d2f565b80610d0388606001516113e9565b610d0d919061206e565b92508115610d2f576060870151610d2f906001600160a01b0316308686610af5565b5050949350505050565b6001600255565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b801580610def5750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90610d9d9030908690600401611be5565b60206040518083038186803b158015610db557600080fd5b505afa158015610dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ded9190611b2f565b155b610e0b5760405162461bcd60e51b815260040161023890611e98565b610e2a8363095ea7b360e01b8484604051602401610b16929190611c64565b505050565b600082604001515160021480610e4a57508260400151516003145b610e665760405162461bcd60e51b815260040161023890611eee565b6000805b8460400151518160ff1610156111495760008086604001518360ff1681518110610ea457634e487b7160e01b600052603260045260246000fd5b60200260200101511190508080610ee257506000858360ff1660038110610edb57634e487b7160e01b600052603260045260246000fd5b6020020151115b610eec5782610eef565b60015b925080610efc5750611137565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b031686606001518360ff1681518110610f4157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031614156110105785604001518260ff1681518110610f7f57634e487b7160e01b600052603260045260246000fd5b60200260200101513414610fa55760405162461bcd60e51b815260040161023890611e0f565b85604001518260ff1681518110610fcc57634e487b7160e01b600052603260045260246000fd5b6020026020010151858360ff1660038110610ff757634e487b7160e01b600052603260045260246000fd5b602002018181516110089190612056565b905250611135565b600061104987606001518460ff168151811061103c57634e487b7160e01b600052603260045260246000fd5b60200260200101516113e9565b90506110c7333089604001518660ff168151811061107757634e487b7160e01b600052603260045260246000fd5b60200260200101518a606001518760ff16815181106110a657634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316610af5909392919063ffffffff16565b806110f288606001518560ff168151811061103c57634e487b7160e01b600052603260045260246000fd5b6110fc919061206e565b868460ff166003811061111f57634e487b7160e01b600052603260045260246000fd5b602002018181516111309190612056565b905250505b505b80611141816120cc565b915050610e6a565b5080611159576000915050611354565b600061116885602001516113e9565b9050846040015151600214156112445784600001516001600160a01b0316630b4c7e4d346040518060400160405280886000600381106111b857634e487b7160e01b600052603260045260246000fd5b60200201518152602001886001600381106111e357634e487b7160e01b600052603260045260246000fd5b60200201518152508860a001516040518463ffffffff1660e01b815260040161120d929190611c7d565b6000604051808303818588803b15801561122657600080fd5b505af115801561123a573d6000803e3d6000fd5b5050505050611337565b84600001516001600160a01b0316634515cef33460405180606001604052808860006003811061128457634e487b7160e01b600052603260045260246000fd5b60200201518152602001886001600381106112af57634e487b7160e01b600052603260045260246000fd5b60200201518152602001886002600381106112da57634e487b7160e01b600052603260045260246000fd5b60200201518152508860a001516040518463ffffffff1660e01b8152600401611304929190611cb5565b6000604051808303818588803b15801561131d57600080fd5b505af1158015611331573d6000803e3d6000fd5b50505050505b8061134586602001516113e9565b61134f919061206e565b925050505b92915050565b60006113af826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114689092919063ffffffff16565b805190915015610e2a57808060200190518101906113cd9190611940565b610e2a5760405162461bcd60e51b815260040161023890611dc5565b6040516370a0823160e01b81526000906001600160a01b038316906370a0823190611418903090600401611bd1565b60206040518083038186803b15801561143057600080fd5b505afa158015611444573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113549190611b2f565b6060610503848460008585600080866001600160a01b0316858760405161148f9190611bb5565b60006040518083038185875af1925050503d80600081146114cc576040519150601f19603f3d011682016040523d82523d6000602084013e6114d1565b606091505b50915091506114e2878383876114ed565b979650505050505050565b606083156115275782516115205761150485611531565b6115205760405162461bcd60e51b815260040161023890611d64565b5081610503565b6105038383611540565b6001600160a01b03163b151590565b8151156115505781518083602001fd5b8060405162461bcd60e51b81526004016102389190611cf8565b60405180606001604052806003906020820280368337509192915050565b803561090781612118565b600082601f8301126115a3578081fd5b813560206115b86115b383612032565b612001565b82815281810190858301838502870184018810156115d4578586fd5b855b858110156115fb5781356115e981612118565b845292840192908401906001016115d6565b5090979650505050505050565b600082601f830112611618578081fd5b813560206116286115b383612032565b8281528181019085830160e080860288018501891015611646578687fd5b865b868110156116d05781838b03121561165e578788fd5b61166782612001565b833561167281612118565b81528387013561168181612118565b8188015260408481013590820152606080850135908201526080808501359082015260a0808501359082015260c06116ba81860161186c565b9082015285529385019391810191600101611648565b509198975050505050505050565b600082601f8301126116ee578081fd5b813560206116fe6115b383612032565b828152818101908583018385028701840188101561171a578586fd5b855b858110156115fb5781358452928401929084019060010161171c565b80356109078161212d565b600060c08284031215611754578081fd5b61175e60c0612001565b905061176982611588565b815261177760208301611588565b6020820152604082013567ffffffffffffffff8082111561179757600080fd5b6117a3858386016116de565b604084015260608401359150808211156117bc57600080fd5b506117c984828501611593565b6060830152506080820135608082015260a082013560a082015292915050565b600060a082840312156117fa578081fd5b61180460a0612001565b9050813561181181612118565b8152602082013561182181612118565b60208201526040820135600f81900b811461183b57600080fd5b6040820152606082013561184e81612118565b606082015260808201356118618161212d565b608082015292915050565b803560ff8116811461090757600080fd5b60006020828403121561188e578081fd5b813561189981612118565b9392505050565b6000806000606084860312156118b4578182fd5b833567ffffffffffffffff808211156118cb578384fd5b6118d787838801611593565b945060208601359150808211156118ec578384fd5b6118f887838801611593565b9350604086013591508082111561190d578283fd5b5061191a868287016116de565b9150509250925092565b600060208284031215611935578081fd5b81356118998161212d565b600060208284031215611951578081fd5b81516118998161212d565b600080600080848603610120811215611973578283fd5b60c0811215611980578283fd5b5061198b60c0612001565b85358152602086013561199d81612118565b602082015260408601356119b081612118565b80604083015250606086013560608201526080860135608082015260a08601356119d98161212d565b60a0820152935060c085013567ffffffffffffffff808211156119fa578384fd5b611a0688838901611743565b945060e0870135915080821115611a1b578384fd5b611a2788838901611743565b9350610100870135915080821115611a3d578283fd5b50611a4a87828801611608565b91505092959194509250565b600080600080848603610260811215611a6d578283fd5b61010080821215611a7c578384fd5b611a8581612001565b915086358252611a9760208801611588565b602083015260408701356040830152611ab260608801611588565b60608301526080870135608083015260a087013560a083015260c087013560c0830152611ae160e08801611738565b60e0830152819550611af5888289016117e9565b94505050611b07866101a087016117e9565b915061024085013567ffffffffffffffff811115611b23578182fd5b611a4a87828801611608565b600060208284031215611b40578081fd5b5051919050565b60008151808452611b5f816020860160208601612085565b601f01601f19169290920160200192915050565b6001600160a01b03169052565b80516001600160a01b039081168352602080830151151590840152604080830151909116908301526060908101511515910152565b60008251611bc7818460208701612085565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b60608101818460005b6002811015611ca5578151835260209283019290910190600101611c86565b5050508260408301529392505050565b60808101818460005b6003811015611cdd578151835260209283019290910190600101611cbe565b5050508260608301529392505050565b901515815260200190565b6000602082526118996020830184611b47565b60208082526010908201526f29b2b73232b9103737ba1037bbb732b960811b604082015260600190565b60208082526015908201527414d95b99195c881b9bdd08105d5d1a1bdc9a5e9959605a1b604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526010908201526f092dcc6dee4e4cac6e840d8cadccee8d60831b604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600f908201526e696e636f72726563742076616c756560881b604082015260600190565b6020808252600f908201526e21b7b73a3930b1ba10333937bd32b760891b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606082015260800190565b6020808252601b908201527f212832203e3d20616d6f756e74732e6c656e677468203c3d2033290000000000604082015260600190565b600060e08252855160e0830152602086015160028110611f5357634e487b7160e01b82526021600452602482fd5b6101008301526040860151611f6c610120840182611b73565b506060860151611f80610140840182611b73565b50608086015161016083015260a086015160c0610180840152611fa76101a0840182611b47565b915050611fb76020830186611b80565b60a082019390935260c0015292915050565b90815260200190565b928352600f9190910b6020830152604082015260600190565b9283526020830191909152604082015260600190565b604051601f8201601f1916810167ffffffffffffffff8111828210171561202a5761202a612102565b604052919050565b600067ffffffffffffffff82111561204c5761204c612102565b5060209081020190565b60008219821115612069576120696120ec565b500190565b600082821015612080576120806120ec565b500390565b60005b838110156120a0578181015183820152602001612088565b838111156106ca5750506000910152565b60006000198214156120c5576120c56120ec565b5060010190565b600060ff821660ff8114156120e3576120e36120ec565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461054d57600080fd5b801515811461054d57600080fdfea264697066735822122045adb7b941465ec04089070e193f19b916403d33e44e9faf83e92eba15bee38564736f6c63430008010033";

type ZapSwapCurveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZapSwapCurveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZapSwapCurve__factory extends ContractFactory {
  constructor(...args: ZapSwapCurveConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    __balancer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZapSwapCurve> {
    return super.deploy(__balancer, overrides || {}) as Promise<ZapSwapCurve>;
  }
  getDeployTransaction(
    __balancer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(__balancer, overrides || {});
  }
  attach(address: string): ZapSwapCurve {
    return super.attach(address) as ZapSwapCurve;
  }
  connect(signer: Signer): ZapSwapCurve__factory {
    return super.connect(signer) as ZapSwapCurve__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZapSwapCurveInterface {
    return new utils.Interface(_abi) as ZapSwapCurveInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZapSwapCurve {
    return new Contract(address, _abi, signerOrProvider) as ZapSwapCurve;
  }
}
