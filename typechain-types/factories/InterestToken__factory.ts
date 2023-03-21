/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InterestToken, InterestTokenInterface } from "../InterestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tranche",
        type: "address",
      },
      {
        internalType: "string",
        name: "_strategySymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
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
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tranche",
    outputs: [
      {
        internalType: "contract ITranche",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200283138038062002831833981016040819052620000349162000c51565b60408051808201909152601481527f456c656d656e74205969656c6420546f6b656e20000000000000000000000000602082015262000075908484620001d6565b604080518082019091526002815261655960f01b60208201526200009b9085856200029c565b6000620000a9838262000df2565b506001620000b8828262000df2565b506002805460ff1916601217905560036020526000197f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff81905530600090815260409020557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200012f919062000ebe565b60408051918290038220828201825260018352603160f81b6020938401528151928301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160408051808303601f19018152919052805160209091012060065550506001600160a01b0384166080526002805460ff831660ff1990911617905550505050620010a9565b60606000620001e6858262000df2565b506200020083836000620002d560201b620009f91760201c565b600080546200020f9062000d63565b80601f01602080910402602001604051908101604052809291908181526020018280546200023d9062000d63565b80156200028e5780601f1062000262576101008083540402835291602001916200028e565b820191906000526020600020905b8154815290600101906020018083116200027057829003601f168201915b505050505090509392505050565b60606001620002ac858262000df2565b50620002c683836001620002d560201b620009f91760201c565b600180546200020f9062000d63565b828160005b8251811015620003975781838281518110620002fa57620002fa62000f3c565b602001015160f81c60f81b9080805480620003159062000d63565b80601f8103620003355783600052602060002060ff1984168155603f9350505b506002919091019091558154600116156200035f5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555080806200038e9062000f68565b915050620002da565b5080602d60f81b9080805480620003ae9062000d63565b80601f8103620003ce5783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620003f85790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506200042c84846200043360201b60201c565b5050505050565b6200043f828262000443565b5050565b8060008080620004616200045b620151808862000f9a565b620008f8565b91945092509050600062000477600a8362000f9a565b9050846200048782603062000fb1565b60f81b90808054806200049a9062000d63565b80601f8103620004ba5783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620004e45790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a8362000517919062000fd3565b9050856200052782603062000fb1565b60f81b90808054806200053a9062000d63565b80601f81036200055a5783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620005845790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550505081600103620005d157620005cb84602560f91b604160f81b602760f91b62000aa4565b6200079e565b81600203620005f457620005cb84602360f91b604560f81b602160f91b62000aa4565b816003036200061757620005cb84604d60f81b604160f81b602960f91b62000aa4565b816004036200063a57620005cb84604160f81b600560fc1b602960f91b62000aa4565b816005036200065d57620005cb84604d60f81b604160f81b605960f81b62000aa4565b816006036200068057620005cb84602560f91b605560f81b602760f91b62000aa4565b81600703620006a357620005cb84602560f91b605560f81b601360fa1b62000aa4565b81600803620006c657620005cb84604160f81b605560f81b604760f81b62000aa4565b81600903620006e957620005cb84605360f81b604560f81b600560fc1b62000aa4565b81600a036200070c57620005cb84604f60f81b604360f81b601560fa1b62000aa4565b81600b036200072f57620005cb84602760f91b604f60f81b602b60f91b62000aa4565b81600c036200075257620005cb84601160fa1b604560f81b604360f81b62000aa4565b60405162461bcd60e51b815260206004820152601360248201527f64617465206465636f64696e67206572726f7200000000000000000000000000604482015260640160405180910390fd5b6000620007ad60648562000fd3565b90506000620007be600a8362000f9a565b905085620007ce82603062000fb1565b60f81b9080805480620007e19062000d63565b80601f8103620008015783600052602060002060ff1984168155603f9350505b506002919091019091558154600116156200082b5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a836200085e919062000fd3565b9050866200086e82603062000fb1565b60f81b9080805480620008819062000d63565b80601f8103620008a15783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620008cb5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550505050505050505050565b60008080838162253d8c620009118362010bd962000fea565b6200091d919062000fea565b9050600062023ab16200093283600462001015565b6200093e91906200104b565b90506004620009518262023ab162001015565b6200095e90600362000fea565b6200096a91906200104b565b6200097690836200107f565b9150600062164b096200098b84600162000fea565b6200099990610fa062001015565b620009a591906200104b565b90506004620009b7826105b562001015565b620009c391906200104b565b620009cf90846200107f565b620009dc90601f62000fea565b9250600061098f620009f085605062001015565b620009fc91906200104b565b90506000605062000a108361098f62001015565b62000a1c91906200104b565b62000a2890866200107f565b905062000a37600b836200104b565b945062000a4685600c62001015565b62000a5383600262000fea565b62000a5f91906200107f565b9150848362000a706031876200107f565b62000a7d90606462001015565b62000a89919062000fea565b62000a95919062000fea565b9a919950975095505050505050565b8383908080548062000ab69062000d63565b80601f810362000ad65783600052602060002060ff1984168155603f9350505b5060029190910190915581546001161562000b005790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508382908080548062000b349062000d63565b80601f810362000b545783600052602060002060ff1984168155603f9350505b5060029190910190915581546001161562000b7e5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508381908080548062000bb29062000d63565b80601f810362000bd25783600052602060002060ff1984168155603f9350505b5060029190910190915581546001161562000bfc5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555050505050565b634e487b7160e01b600052604160045260246000fd5b805160ff8116811462000c4c57600080fd5b919050565b6000806000806080858703121562000c6857600080fd5b84516001600160a01b038116811462000c8057600080fd5b602086810151919550906001600160401b038082111562000ca057600080fd5b818801915088601f83011262000cb557600080fd5b81518181111562000cca5762000cca62000c24565b604051601f8201601f19908116603f0116810190838211818310171562000cf55762000cf562000c24565b816040528281528b8684870101111562000d0e57600080fd5b600093505b8284101562000d32578484018601518185018701529285019262000d13565b60008684830101528098505050505050506040850151915062000d586060860162000c3a565b905092959194509250565b600181811c9082168062000d7857607f821691505b60208210810362000d9957634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000ded57600081815260208120601f850160051c8101602086101562000dc85750805b601f850160051c820191505b8181101562000de95782815560010162000dd4565b5050505b505050565b81516001600160401b0381111562000e0e5762000e0e62000c24565b62000e268162000e1f845462000d63565b8462000d9f565b602080601f83116001811462000e5e576000841562000e455750858301515b600019600386901b1c1916600185901b17855562000de9565b600085815260208120601f198616915b8281101562000e8f5788860151825594840194600190910190840162000e6e565b508582101562000eae5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600080835462000ece8162000d63565b6001828116801562000ee9576001811462000eff5762000f30565b60ff198416875282151583028701945062000f30565b8760005260208060002060005b8581101562000f275781548a82015290840190820162000f0c565b50505082870194505b50929695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820162000f7d5762000f7d62000f52565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008262000fac5762000fac62000f84565b500490565b60ff818116838216019081111562000fcd5762000fcd62000f52565b92915050565b60008262000fe55762000fe562000f84565b500690565b80820182811260008312801582168215821617156200100d576200100d62000f52565b505092915050565b80820260008212600160ff1b8414161562001034576200103462000f52565b818105831482151762000fcd5762000fcd62000f52565b6000826200105d576200105d62000f84565b600160ff1b8214600019841416156200107a576200107a62000f52565b500590565b8181036000831280158383131683831282161715620010a257620010a262000f52565b5092915050565b608051611757620010da600039600081816101d8015281816103bd01528181610623015261068601526117576000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636ebc0af1116100975780639dc29fac116100665780639dc29fac1461025a578063a9059cbb1461026d578063d505accf14610280578063dd62ed3e1461029357600080fd5b80636ebc0af1146101d357806370a08231146102125780637ecebe001461023257806395d89b411461025257600080fd5b806330adf81f116100d357806330adf81f1461016f578063313ce567146101965780633644e515146101b557806340c10f19146101be57600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd1461015c575b600080fd5b61010d6102be565b60405161011a919061137c565b60405180910390f35b6101366101313660046113e6565b61034c565b604051901515815260200161011a565b61014e6103b9565b60405190815260200161011a565b61013661016a366004611410565b61044b565b61014e7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6002546101a39060ff1681565b60405160ff909116815260200161011a565b61014e60065481565b6101d16101cc3660046113e6565b610618565b005b6101fa7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011a565b61014e61022036600461144c565b60036020526000908152604090205481565b61014e61024036600461144c565b60056020526000908152604090205481565b61010d61066e565b6101d16102683660046113e6565b61067b565b61013661027b3660046113e6565b6106cd565b6101d161028e366004611467565b6106e1565b61014e6102a13660046114da565b600460209081526000928352604080842090915290825290205481565b600080546102cb9061150d565b80601f01602080910402602001604051908101604052809291908181526020018280546102f79061150d565b80156103445780601f1061031957610100808354040283529160200191610344565b820191906000526020600020905b81548152906001019060200180831161032757829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103a79086815260200190565b60405180910390a35060015b92915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663041be7c26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d9190611547565b6001600160801b0316905090565b6001600160a01b038316600090815260036020526040812054828110156104b95760405162461bcd60e51b815260206004820152601b60248201527f45524332303a20696e73756666696369656e742d62616c616e6365000000000060448201526064015b60405180910390fd5b6001600160a01b0385163314610577576001600160a01b0385166000908152600460209081526040808320338452909152902054600019811461057557838110156105465760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e742d616c6c6f77616e636500000060448201526064016104b0565b6105508482611586565b6001600160a01b03871660009081526004602090815260408083203384529091529020555b505b6105818382611586565b6001600160a01b0380871660009081526003602052604080822093909355908616815220546105b1908490611599565b6001600160a01b0380861660008181526003602052604090819020939093559151908716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106059087815260200190565b60405180910390a3506001949350505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106605760405162461bcd60e51b81526004016104b0906115ac565b61066a8282610b40565b5050565b600180546102cb9061150d565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106c35760405162461bcd60e51b81526004016104b0906115ac565b61066a8282610bc1565b60006106da33848461044b565b9392505050565b6006546001600160a01b038881166000818152600560209081526040918290205482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981840152808401859052948c166060860152608085018b905260a085015260c08085018a90528251808603909101815260e08501835280519082012061190160f01b6101008601526101028501959095526101228085019590955281518085039095018552610142909301905282519290910191909120906107e95760405162461bcd60e51b815260206004820152601860248201527f45524332303a20696e76616c69642d616464726573732d30000000000000000060448201526064016104b0565b60408051600081526020810180835283905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa15801561083c573d6000803e3d6000fd5b505050602060405103516001600160a01b0316886001600160a01b03161461089e5760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881a5b9d985b1a590b5c195c9b5a5d605a1b60448201526064016104b0565b8415806108ab5750844211155b6108ef5760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881c195c9b5a5d0b595e1c1a5c9959605a1b60448201526064016104b0565b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561096a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104b0565b6001600160a01b038816600090815260056020526040812080549161098e836115ee565b90915550506001600160a01b038881166000818152600460209081526040808320948c16808452948252918290208a905590518981527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a35050505050505050565b828160005b8251811015610ab05781838281518110610a1a57610a1a611607565b602001015160f81c60f81b9080805480610a339061150d565b80601f8103610a525783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610a7b5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508080610aa8906115ee565b9150506109fe565b5080602d60f81b9080805480610ac59061150d565b80601f8103610ae45783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610b0d5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550610b398484610c33565b5050505050565b6001600160a01b038216600090815260036020526040902054610b64908290611599565b6001600160a01b0383166000818152600360205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610bb59085815260200190565b60405180910390a35050565b6001600160a01b038216600090815260036020526040902054610be5908290611586565b6001600160a01b0383166000818152600360205260408082209390935591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610bb59085815260200190565b61066a82828060008080610c52610c4d6201518088611633565b611094565b919450925090506000610c66600a83611633565b905084610c74826030611647565b60f81b9080805480610c859061150d565b80601f8103610ca45783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610ccd5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a83610cfe9190611660565b905085610d0c826030611647565b60f81b9080805480610d1d9061150d565b80601f8103610d3c5783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610d655790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550505081600103610dae57610da984602560f91b604160f81b602760f91b611208565b610f4c565b81600203610dce57610da984602360f91b604560f81b602160f91b611208565b81600303610dee57610da984604d60f81b604160f81b602960f91b611208565b81600403610e0e57610da984604160f81b600560fc1b602960f91b611208565b81600503610e2e57610da984604d60f81b604160f81b605960f81b611208565b81600603610e4e57610da984602560f91b605560f81b602760f91b611208565b81600703610e6e57610da984602560f91b605560f81b601360fa1b611208565b81600803610e8e57610da984604160f81b605560f81b604760f81b611208565b81600903610eae57610da984605360f81b604560f81b600560fc1b611208565b81600a03610ece57610da984604f60f81b604360f81b601560fa1b611208565b81600b03610eee57610da984602760f91b604f60f81b602b60f91b611208565b81600c03610f0e57610da984601160fa1b604560f81b604360f81b611208565b60405162461bcd60e51b81526020600482015260136024820152723230ba32903232b1b7b234b7339032b93937b960691b60448201526064016104b0565b6000610f59606485611660565b90506000610f68600a83611633565b905085610f76826030611647565b60f81b9080805480610f879061150d565b80601f8103610fa65783600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610fcf5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a836110009190611660565b90508661100e826030611647565b60f81b908080548061101f9061150d565b80601f810361103e5783600052602060002060ff1984168155603f9350505b506002919091019091558154600116156110675790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550505050505050505050565b60008080838162253d8c6110ab8362010bd9611674565b6110b59190611674565b9050600062023ab16110c883600461169c565b6110d291906116cc565b905060046110e38262023ab161169c565b6110ee906003611674565b6110f891906116cc565b61110290836116fa565b9150600062164b09611115846001611674565b61112190610fa061169c565b61112b91906116cc565b9050600461113b826105b561169c565b61114591906116cc565b61114f90846116fa565b61115a90601f611674565b9250600061098f61116c85605061169c565b61117691906116cc565b9050600060506111888361098f61169c565b61119291906116cc565b61119c90866116fa565b90506111a9600b836116cc565b94506111b685600c61169c565b6111c1836002611674565b6111cb91906116fa565b915084836111da6031876116fa565b6111e590606461169c565b6111ef9190611674565b6111f99190611674565b9a919950975095505050505050565b838390808054806112189061150d565b80601f81036112375783600052602060002060ff1984168155603f9350505b506002919091019091558154600116156112605790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550838290808054806112929061150d565b80601f81036112b15783600052602060002060ff1984168155603f9350505b506002919091019091558154600116156112da5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508381908080548061130c9061150d565b80601f810361132b5783600052602060002060ff1984168155603f9350505b506002919091019091558154600116156113545790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555050505050565b600060208083528351808285015260005b818110156113a95785810183015185820160400152820161138d565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146113e157600080fd5b919050565b600080604083850312156113f957600080fd5b611402836113ca565b946020939093013593505050565b60008060006060848603121561142557600080fd5b61142e846113ca565b925061143c602085016113ca565b9150604084013590509250925092565b60006020828403121561145e57600080fd5b6106da826113ca565b600080600080600080600060e0888a03121561148257600080fd5b61148b886113ca565b9650611499602089016113ca565b95506040880135945060608801359350608088013560ff811681146114bd57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156114ed57600080fd5b6114f6836113ca565b9150611504602084016113ca565b90509250929050565b600181811c9082168061152157607f821691505b60208210810361154157634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561155957600080fd5b81516001600160801b03811681146106da57600080fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156103b3576103b3611570565b808201808211156103b3576103b3611570565b60208082526022908201527f63616c6c6572206973206e6f7420616e20617574686f72697a6564206d696e7460408201526132b960f11b606082015260800190565b60006001820161160057611600611570565b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826116425761164261161d565b500490565b60ff81811683821601908111156103b3576103b3611570565b60008261166f5761166f61161d565b500690565b808201828112600083128015821682158216171561169457611694611570565b505092915050565b80820260008212600160ff1b841416156116b8576116b8611570565b81810583148215176103b3576103b3611570565b6000826116db576116db61161d565b600160ff1b8214600019841416156116f5576116f5611570565b500590565b818103600083128015838313168383128216171561171a5761171a611570565b509291505056fea26469706673582212205fa6cf91faa663ab0518264aeb0bc92c799094428f15e16f7bef1dbba80b57d264736f6c63430008110033";

type InterestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InterestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InterestToken__factory extends ContractFactory {
  constructor(...args: InterestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _tranche: string,
    _strategySymbol: string,
    _timestamp: BigNumberish,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InterestToken> {
    return super.deploy(
      _tranche,
      _strategySymbol,
      _timestamp,
      _decimals,
      overrides || {}
    ) as Promise<InterestToken>;
  }
  getDeployTransaction(
    _tranche: string,
    _strategySymbol: string,
    _timestamp: BigNumberish,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tranche,
      _strategySymbol,
      _timestamp,
      _decimals,
      overrides || {}
    );
  }
  attach(address: string): InterestToken {
    return super.attach(address) as InterestToken;
  }
  connect(signer: Signer): InterestToken__factory {
    return super.connect(signer) as InterestToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InterestTokenInterface {
    return new utils.Interface(_abi) as InterestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InterestToken {
    return new Contract(address, _abi, signerOrProvider) as InterestToken;
  }
}
