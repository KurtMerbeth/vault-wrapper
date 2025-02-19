/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolPriceOracle,
  PoolPriceOracleInterface,
} from "../PoolPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getSample",
    outputs: [
      {
        internalType: "int256",
        name: "logPairPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "accLogPairPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "logBptPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "accLogBptPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "logInvariant",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "accLogInvariant",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSamples",
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
  "0x608060405234801561001057600080fd5b506102d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360d1507c1461003b578063b48b5b4014610090575b600080fd5b6100586004803603602081101561005157600080fd5b50356100aa565b604080519788526020880196909652868601949094526060860192909252608085015260a084015260c0830152519081900360e00190f35b6100986100f3565b60408051918252519081900360200190f35b60008060008060008060006100c5610400891061013b6100f9565b60006100d08961010b565b90506100db8161011d565b959f949e50929c50909a509850965090945092505050565b61040090565b816101075761010781610180565b5050565b60009081526020819052604090205490565b6000806000806000806000610131886101d3565b965061013c886101e6565b9550610147886101f3565b945061015288610200565b935061015d8861020d565b92506101688861021a565b915061017388610227565b9050919395979092949650565b62461bcd60e51b6000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b60006101e08260ea610233565b92915050565b60006101e08260b561025d565b60006101e082609f610233565b60006101e082606a61025d565b60006101e0826054610233565b60006101e082601f61025d565b60006101e08282610290565b600082821c623fffff16621fffff811361024d5780610255565b623fffff1981175b949350505050565b600082821c661fffffffffffff16660fffffffffffff811361027f5780610255565b661fffffffffffff19179392505050565b1c637fffffff169056fea2646970667358221220a84e802665da615777e092d4c3fd6f945b5515a784d64fbc2d97c029b29a7abb64736f6c63430007010033";

type PoolPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoolPriceOracle__factory extends ContractFactory {
  constructor(...args: PoolPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolPriceOracle> {
    return super.deploy(overrides || {}) as Promise<PoolPriceOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoolPriceOracle {
    return super.attach(address) as PoolPriceOracle;
  }
  connect(signer: Signer): PoolPriceOracle__factory {
    return super.connect(signer) as PoolPriceOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolPriceOracleInterface {
    return new utils.Interface(_abi) as PoolPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as PoolPriceOracle;
  }
}
