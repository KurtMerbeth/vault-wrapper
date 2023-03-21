/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CodeSizeChecker,
  CodeSizeCheckerInterface,
} from "../CodeSizeChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "which",
        type: "address",
      },
    ],
    name: "codeSize",
    outputs: [
      {
        internalType: "uint256",
        name: "ret",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b28061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806352872cf314602d575b600080fd5b603c6038366004604e565b3b90565b60405190815260200160405180910390f35b600060208284031215605f57600080fd5b81356001600160a01b0381168114607557600080fd5b939250505056fea2646970667358221220d7eebba261bed63505f639f42bacb237c699a23827a144e9c55d669901a8ada164736f6c63430008110033";

type CodeSizeCheckerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CodeSizeCheckerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CodeSizeChecker__factory extends ContractFactory {
  constructor(...args: CodeSizeCheckerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CodeSizeChecker> {
    return super.deploy(overrides || {}) as Promise<CodeSizeChecker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CodeSizeChecker {
    return super.attach(address) as CodeSizeChecker;
  }
  connect(signer: Signer): CodeSizeChecker__factory {
    return super.connect(signer) as CodeSizeChecker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CodeSizeCheckerInterface {
    return new utils.Interface(_abi) as CodeSizeCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CodeSizeChecker {
    return new Contract(address, _abi, signerOrProvider) as CodeSizeChecker;
  }
}
