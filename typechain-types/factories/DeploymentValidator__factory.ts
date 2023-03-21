/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeploymentValidator,
  DeploymentValidatorInterface,
} from "../DeploymentValidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
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
        name: "wrappedPosition",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "checkPairValidation",
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
        name: "pool",
        type: "address",
      },
    ],
    name: "checkPoolValidation",
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
        name: "wrappedPosition",
        type: "address",
      },
    ],
    name: "checkWPValidation",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "pairs",
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
        name: "",
        type: "address",
      },
    ],
    name: "pools",
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
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedPosition",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "validateAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "validatePoolAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedPosition",
        type: "address",
      },
    ],
    name: "validateWPAddress",
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
    name: "wrappedPositions",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161073338038061073383398101604081905261002f91610072565b600080546001600160a01b0319163317905561006c816001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b506100a2565b60006020828403121561008457600080fd5b81516001600160a01b038116811461009b57600080fd5b9392505050565b610682806100b16000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639221015711610097578063b918161111610066578063b918161114610243578063c1c6917514610266578063c6957c28146102d2578063fe9fbb80146102fe57600080fd5b806392210157146101ce57806393795f27146101fa578063a4063dbc1461020d578063b6a5d7de1461023057600080fd5b80635027e6ac116100d35780635027e6ac1461013557806352f57eea1461016d578063673e0481146101805780638da5cb5b146101a357600080fd5b806313af4035146100fa57806327c97fa51461010f57806340c5d80114610122575b600080fd5b61010d610108366004610585565b61032a565b005b61010d61011d366004610585565b61037f565b61010d610130366004610585565b6103ca565b610158610143366004610585565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61010d61017b3660046105a7565b61041d565b61015861018e3660046105da565b60046020526000908152604090205460ff1681565b6000546101b6906001600160a01b031681565b6040516001600160a01b039091168152602001610164565b6101586101dc366004610585565b6001600160a01b031660009081526002602052604090205460ff1690565b61010d610208366004610585565b6104be565b61015861021b366004610585565b60036020526000908152604090205460ff1681565b61010d61023e366004610585565b610511565b610158610251366004610585565b60016020526000908152604090205460ff1681565b6101586102743660046105a7565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b166034820152600090819060480160408051808303601f1901815291815281516020928301206000908152600490925290205460ff16949350505050565b6101586102e0366004610585565b6001600160a01b031660009081526003602052604090205460ff1690565b61015861030c366004610585565b6001600160a01b031660009081526001602052604090205460ff1690565b6000546001600160a01b0316331461035d5760405162461bcd60e51b8152600401610354906105f3565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146103a95760405162461bcd60e51b8152600401610354906105f3565b6001600160a01b03166000908152600160205260409020805460ff19169055565b3360009081526001602052604090205460ff166103f95760405162461bcd60e51b81526004016103549061061d565b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b3360009081526001602052604090205460ff1661044c5760405162461bcd60e51b81526004016103549061061d565b610455816104be565b61045e826103ca565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b16603482015260009060480160408051601f198184030181529181528151602092830120600090815260049092529020805460ff19166001179055505050565b3360009081526001602052604090205460ff166104ed5760405162461bcd60e51b81526004016103549061061d565b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b6000546001600160a01b0316331461053b5760405162461bcd60e51b8152600401610354906105f3565b610566816001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b50565b80356001600160a01b038116811461058057600080fd5b919050565b60006020828403121561059757600080fd5b6105a082610569565b9392505050565b600080604083850312156105ba57600080fd5b6105c383610569565b91506105d160208401610569565b90509250929050565b6000602082840312156105ec57600080fd5b5035919050565b60208082526010908201526f29b2b73232b9103737ba1037bbb732b960811b604082015260600190565b60208082526015908201527414d95b99195c881b9bdd08105d5d1a1bdc9a5e9959605a1b60408201526060019056fea26469706673582212204fe0d0c2f79025d073a4b375a19d4ae10c1e7ba93dadc3b2d3c0b7e93827851364736f6c63430008110033";

type DeploymentValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeploymentValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeploymentValidator__factory extends ContractFactory {
  constructor(...args: DeploymentValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DeploymentValidator> {
    return super.deploy(
      _owner,
      overrides || {}
    ) as Promise<DeploymentValidator>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): DeploymentValidator {
    return super.attach(address) as DeploymentValidator;
  }
  connect(signer: Signer): DeploymentValidator__factory {
    return super.connect(signer) as DeploymentValidator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeploymentValidatorInterface {
    return new utils.Interface(_abi) as DeploymentValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeploymentValidator {
    return new Contract(address, _abi, signerOrProvider) as DeploymentValidator;
  }
}
