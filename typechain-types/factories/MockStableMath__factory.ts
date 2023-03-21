/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockStableMath,
  MockStableMathInterface,
} from "../MockStableMath";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "bptInForExactTokensOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "lastInvariant",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256",
      },
    ],
    name: "calculateDueTokenProtocolSwapFeeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "tokenIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "exactBPTInForTokenOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "bptAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
    ],
    name: "exactBPTInForTokensOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "exactTokensInForBPTOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "tokenIndexIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenIndexOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256",
      },
    ],
    name: "inGivenOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    name: "invariant",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "tokenIndexIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenIndexOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256",
      },
    ],
    name: "outGivenIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "tokenIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "tokenInForExactBPTOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611765806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639cd91d3f116100665780639cd91d3f14610430578063a89d4259146104e3578063cf1b8c8c14610612578063db7ad3f2146106cb578063fe2dd7ba1461077e57610093565b8063155bfcb8146100985780631c855fa614610152578063405de978146102485780636fc82f2914610301575b600080fd5b610140600480360360408110156100ae57600080fd5b81359190810190604081016020820135600160201b8111156100cf57600080fd5b8201836020820111156100e157600080fd5b803590602001918460208302840111600160201b8311171561010257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610831945050505050565b60408051918252519081900360200190f35b6101f86004803603606081101561016857600080fd5b810190602081018135600160201b81111561018257600080fd5b82018360208201111561019457600080fd5b803590602001918460208302840111600160201b831117156101b557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060200135610846565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561023457818101518382015260200161021c565b505050509050019250505060405180910390f35b610140600480360360c081101561025e57600080fd5b81359190810190604081016020820135600160201b81111561027f57600080fd5b82018360208201111561029157600080fd5b803590602001918460208302840111600160201b831117156102b257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550508235935050506020810135906040810135906060013561085b565b610140600480360360a081101561031757600080fd5b81359190810190604081016020820135600160201b81111561033857600080fd5b82018360208201111561034a57600080fd5b803590602001918460208302840111600160201b8311171561036b57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156103ba57600080fd5b8201836020820111156103cc57600080fd5b803590602001918460208302840111600160201b831117156103ed57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060200135610876565b610140600480360360a081101561044657600080fd5b81359190810190604081016020820135600160201b81111561046757600080fd5b82018360208201111561047957600080fd5b803590602001918460208302840111600160201b8311171561049a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550508235935050506020810135906040013561088f565b610140600480360360a08110156104f957600080fd5b81359190810190604081016020820135600160201b81111561051a57600080fd5b82018360208201111561052c57600080fd5b803590602001918460208302840111600160201b8311171561054d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561059c57600080fd5b8201836020820111156105ae57600080fd5b803590602001918460208302840111600160201b831117156105cf57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550508235935050506020013561089e565b610140600480360360c081101561062857600080fd5b81359190810190604081016020820135600160201b81111561064957600080fd5b82018360208201111561065b57600080fd5b803590602001918460208302840111600160201b8311171561067c57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602081013590604081013590606001356108ad565b610140600480360360a08110156106e157600080fd5b81359190810190604081016020820135600160201b81111561070257600080fd5b82018360208201111561071457600080fd5b803590602001918460208302840111600160201b8311171561073557600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602081013590604001356108bd565b610140600480360360a081101561079457600080fd5b81359190810190604081016020820135600160201b8111156107b557600080fd5b8201836020820111156107c757600080fd5b803590602001918460208302840111600160201b831117156107e857600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602081013590604001356108cc565b600061083d83836108db565b90505b92915050565b6060610853848484610a55565b949350505050565b600061086b878787878787610b07565b979650505050505050565b60006108858686868686610c1b565b9695505050505050565b60006108858686868686610ea9565b60006108858686868686610f4f565b600061086b8787878787876111d0565b60006108858686868686611282565b600061088586868686866112de565b80516000908190815b8181101561091c576109128582815181106108fb57fe5b60200260200101518461136290919063ffffffff16565b92506001016108e4565b508161092d57600092505050610840565b6000828161093b8885611374565b905060005b60ff811015610a48576000610969868a60008151811061095c57fe5b6020026020010151611374565b905060015b868110156109a25761099861099261098c848d858151811061095c57fe5b89611374565b86611398565b915060010161096e565b50839450610a026109d86109bf6109b9868b611374565b84611374565b6109d26109cc8a89611374565b88611374565b90611362565b6109fd6109ef6109e98760016113cb565b85611374565b6109d261098c8b6001611362565b611398565b935084841115610a28576001610a1885876113cb565b11610a235750610a48565b610a3f565b6001610a3486866113cb565b11610a3f5750610a48565b50600101610940565b5090979650505050505050565b60606000610a6384846113e1565b90506060855167ffffffffffffffff81118015610a7f57600080fd5b50604051908082528060200260200182016040528015610aa9578160200160208202803683370190505b50905060005b8651811015610afd57610ade83888381518110610ac857fe5b602002602001015161143290919063ffffffff16565b828281518110610aea57fe5b6020908102919091010152600101610aaf565b5095945050505050565b600080610b1488886108db565b90506000610b3682610b3087610b2a818b611362565b9061145e565b906114ac565b90506000805b8951811015610b7557610b6b8a8281518110610b5457fe5b60200260200101518361136290919063ffffffff16565b9150600101610b3c565b506000610b848b8b858c6114e8565b90506000610bae8b8b81518110610b9757fe5b6020026020010151836113cb90919063ffffffff16565b90506000610bd8848d8d81518110610bc257fe5b60200260200101516113e190919063ffffffff16565b90506000610be582611684565b90506000610bf38a836114ac565b9050610c08610c0182611684565b859061145e565b9f9e505050505050505050505050505050565b600080610c2887876108db565b90506000805b8751811015610c5057610c46888281518110610b5457fe5b9150600101610c2e565b506060865167ffffffffffffffff81118015610c6b57600080fd5b50604051908082528060200260200182016040528015610c95578160200160208202803683370190505b5090506000805b8951811015610d4c576000610cb7858c8481518110610bc257fe5b9050610d0f8b8381518110610cc857fe5b6020026020010151610d098c8581518110610cdf57fe5b60200260200101518e8681518110610cf357fe5b602002602001015161136290919063ffffffff16565b906113e1565b848381518110610d1b57fe5b602002602001018181525050610d41610d3a82868581518110610ac857fe5b8490611362565b925050600101610c9c565b506060895167ffffffffffffffff81118015610d6757600080fd5b50604051908082528060200260200182016040528015610d91578160200160208202803683370190505b50905060005b8a51811015610e64576000848281518110610dae57fe5b60200260200101518410610dc457506000610e08565b610e05610df5670de0b6b3a7640000878581518110610ddf57fe5b60200260200101516113cb90919063ffffffff16565b610b2a86888681518110610ddf57fe5b90505b6000610e148a836114ac565b90506000610e30610e2483611684565b8e8681518110610ac857fe5b9050610e42818f8681518110610cf357fe5b858581518110610e4e57fe5b6020908102919091010152505050600101610d97565b506000610e718c836108db565b9050610e99610e92670de0b6b3a7640000610e8c848a6113e1565b906113cb565b8a90611432565b9c9b505050505050505050505050565b600080610eb687876108db565b9050610ec883878681518110610ddf57fe5b868581518110610ed457fe5b6020026020010181815250506000610eee888884896114e8565b9050610f0084888781518110610cf357fe5b878681518110610f0c57fe5b602002602001018181525050610f4360016109d2898981518110610f2c57fe5b6020026020010151846113cb90919063ffffffff16565b98975050505050505050565b600080610f5c87876108db565b90506000805b8751811015610f8457610f7a888281518110610b5457fe5b9150600101610f62565b506060865167ffffffffffffffff81118015610f9f57600080fd5b50604051908082528060200260200182016040528015610fc9578160200160208202803683370190505b5090506000805b8951811015611089576000611001858c8481518110610feb57fe5b602002602001015161145e90919063ffffffff16565b905061103d8b838151811061101257fe5b6020026020010151610b2a8c858151811061102957fe5b60200260200101518e8681518110610ddf57fe5b84838151811061104957fe5b60200260200101818152505061107e610d3a8286858151811061106857fe5b60200260200101516114ac90919063ffffffff16565b925050600101610fd0565b506060895167ffffffffffffffff811180156110a457600080fd5b506040519080825280602002602001820160405280156110ce578160200160208202803683370190505b50905060005b8a518110156111a55760008482815181106110eb57fe5b6020026020010151841161110157506000611149565b61114661112086848151811061111357fe5b6020026020010151611684565b610b2a87858151811061112f57fe5b6020026020010151876113cb90919063ffffffff16565b90505b60006111558a836114ac565b9050600061117161116583611684565b8e8681518110610feb57fe5b9050611183818f8681518110610ddf57fe5b85858151811061118f57fe5b60209081029190910101525050506001016110d4565b5060006111b28c836108db565b9050610e996111c96111c4838961145e565b611684565b8a906114ac565b6000806111dd88886108db565b905060006111f382610b3087610b2a818b6113cb565b90506000805b895181101561121b576112118a8281518110610b5457fe5b91506001016111f9565b50600061122a8b8b858c6114e8565b9050600061123e828c8c81518110610ddf57fe5b90506000611252848d8d81518110610bc257fe5b9050600061125f82611684565b9050600061126d8a836114ac565b9050610c0861127b82611684565b8590611432565b600080611291878787876114e8565b90506000818786815181106112a257fe5b6020026020010151116112b65760006112c6565b6112c682888781518110610ddf57fe5b9050610f43670de0b6b3a7640000610d098387611432565b6000806112eb87876108db565b90506112fd83878781518110610cf357fe5b86868151811061130957fe5b6020026020010181815250506000611323888884886114e8565b905061133584888881518110610ddf57fe5b87878151811061134157fe5b602002602001018181525050610f436001610e8c838a8981518110610ddf57fe5b600082820161083d84821015836116aa565b600082820261083d84158061139157508385838161138e57fe5b04145b60036116aa565b60006113a782151560046116aa565b826113b457506000610840565b8160018403816113c057fe5b046001019050610840565b60006113db8383111560016116aa565b50900390565b60006113f082151560046116aa565b826113fd57506000610840565b670de0b6b3a7640000838102906114209085838161141757fe5b041460056116aa565b82818161142957fe5b04915050610840565b600082820261144c84158061139157508385838161138e57fe5b670de0b6b3a764000090049392505050565b600061146d82151560046116aa565b8261147a57506000610840565b670de0b6b3a7640000838102906114949085838161141757fe5b8260018203816114a057fe5b04600101915050610840565b60008282026114c684158061139157508385838161138e57fe5b806114d5576000915050610840565b670de0b6b3a764000060001982016114a0565b6000806114f6868651611374565b905060008560008151811061150757fe5b60200260200101519050600061152587518860008151811061095c57fe5b905060015b875181101561157157611556611550611549848b858151811061095c57fe5b8a51611374565b886116bc565b91506115678882815181106108fb57fe5b925060010161152a565b50611581878681518110610b9757fe5b915060006115986115928889611374565b85611398565b90506115c482610b2a8a89815181106115ad57fe5b6020026020010151846114ac90919063ffffffff16565b905060006115dc6115d589876113e1565b8590611362565b90506000806115fc6115ee8b85611362565b610b2a866109d28e806114ac565b905060005b60ff811015611674578192506116316116238c610e8c876109d2876002611374565b610b2a876109d286806114ac565b91508282111561165657600161164783856113cb565b1161165157611674565b61166c565b600161166284846113cb565b1161166c57611674565b600101611601565b509b9a5050505050505050505050565b6000670de0b6b3a7640000821061169c576000610840565b50670de0b6b3a76400000390565b816116b8576116b8816116dc565b5050565b60006116cb82151560046116aa565b8183816116d457fe5b049392505050565b62461bcd60e51b6000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fdfea26469706673582212203481c567c6b2ae4381e4beef4549b5cfb00c2cbbe766c8e2d19ee9fd23e07a0364736f6c63430007010033";

type MockStableMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockStableMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockStableMath__factory extends ContractFactory {
  constructor(...args: MockStableMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockStableMath> {
    return super.deploy(overrides || {}) as Promise<MockStableMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockStableMath {
    return super.attach(address) as MockStableMath;
  }
  connect(signer: Signer): MockStableMath__factory {
    return super.connect(signer) as MockStableMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockStableMathInterface {
    return new utils.Interface(_abi) as MockStableMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStableMath {
    return new Contract(address, _abi, signerOrProvider) as MockStableMath;
  }
}
