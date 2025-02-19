/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type BatchSwapStepStruct = {
  poolId: BytesLike;
  assetInIndex: BigNumberish;
  assetOutIndex: BigNumberish;
  amount: BigNumberish;
  userData: BytesLike;
};

export type BatchSwapStepStructOutput = [
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  poolId: string;
  assetInIndex: BigNumber;
  assetOutIndex: BigNumber;
  amount: BigNumber;
  userData: string;
};

export type FundManagementStruct = {
  sender: string;
  fromInternalBalance: boolean;
  recipient: string;
  toInternalBalance: boolean;
};

export type FundManagementStructOutput = [string, boolean, string, boolean] & {
  sender: string;
  fromInternalBalance: boolean;
  recipient: string;
  toInternalBalance: boolean;
};

export type ExitPoolRequestStruct = {
  assets: string[];
  minAmountsOut: BigNumberish[];
  userData: BytesLike;
  toInternalBalance: boolean;
};

export type ExitPoolRequestStructOutput = [
  string[],
  BigNumber[],
  string,
  boolean
] & {
  assets: string[];
  minAmountsOut: BigNumber[];
  userData: string;
  toInternalBalance: boolean;
};

export type JoinPoolRequestStruct = {
  assets: string[];
  maxAmountsIn: BigNumberish[];
  userData: BytesLike;
  fromInternalBalance: boolean;
};

export type JoinPoolRequestStructOutput = [
  string[],
  BigNumber[],
  string,
  boolean
] & {
  assets: string[];
  maxAmountsIn: BigNumber[];
  userData: string;
  fromInternalBalance: boolean;
};

export type PoolBalanceOpStruct = {
  kind: BigNumberish;
  poolId: BytesLike;
  token: string;
  amount: BigNumberish;
};

export type PoolBalanceOpStructOutput = [number, string, string, BigNumber] & {
  kind: number;
  poolId: string;
  token: string;
  amount: BigNumber;
};

export type UserBalanceOpStruct = {
  kind: BigNumberish;
  asset: string;
  amount: BigNumberish;
  sender: string;
  recipient: string;
};

export type UserBalanceOpStructOutput = [
  number,
  string,
  BigNumber,
  string,
  string
] & {
  kind: number;
  asset: string;
  amount: BigNumber;
  sender: string;
  recipient: string;
};

export type SingleSwapStruct = {
  poolId: BytesLike;
  kind: BigNumberish;
  assetIn: string;
  assetOut: string;
  amount: BigNumberish;
  userData: BytesLike;
};

export type SingleSwapStructOutput = [
  string,
  number,
  string,
  string,
  BigNumber,
  string
] & {
  poolId: string;
  kind: number;
  assetIn: string;
  assetOut: string;
  amount: BigNumber;
  userData: string;
};

export interface AssetManagersInterface extends utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "batchSwap(uint8,(bytes32,uint256,uint256,uint256,bytes)[],address[],(address,bool,address,bool),int256[],uint256)": FunctionFragment;
    "deregisterTokens(bytes32,address[])": FunctionFragment;
    "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "flashLoan(address,address[],uint256[],bytes)": FunctionFragment;
    "getActionId(bytes4)": FunctionFragment;
    "getAuthorizer()": FunctionFragment;
    "getDomainSeparator()": FunctionFragment;
    "getInternalBalance(address,address[])": FunctionFragment;
    "getNextNonce(address)": FunctionFragment;
    "getPausedState()": FunctionFragment;
    "getPool(bytes32)": FunctionFragment;
    "getPoolTokenInfo(bytes32,address)": FunctionFragment;
    "getPoolTokens(bytes32)": FunctionFragment;
    "getProtocolFeesCollector()": FunctionFragment;
    "hasApprovedRelayer(address,address)": FunctionFragment;
    "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "managePoolBalance((uint8,bytes32,address,uint256)[])": FunctionFragment;
    "manageUserBalance((uint8,address,uint256,address,address)[])": FunctionFragment;
    "queryBatchSwap(uint8,(bytes32,uint256,uint256,uint256,bytes)[],address[],(address,bool,address,bool))": FunctionFragment;
    "registerPool(uint8)": FunctionFragment;
    "registerTokens(bytes32,address[],address[])": FunctionFragment;
    "setAuthorizer(address)": FunctionFragment;
    "setPaused(bool)": FunctionFragment;
    "setRelayerApproval(address,address,bool)": FunctionFragment;
    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "batchSwap",
    values: [
      BigNumberish,
      BatchSwapStepStruct[],
      string[],
      FundManagementStruct,
      BigNumberish[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deregisterTokens",
    values: [BytesLike, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exitPool",
    values: [BytesLike, string, string, ExitPoolRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [string, string[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInternalBalance",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextNonce",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPausedState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPool", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getPoolTokenInfo",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolFeesCollector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasApprovedRelayer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "joinPool",
    values: [BytesLike, string, string, JoinPoolRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "managePoolBalance",
    values: [PoolBalanceOpStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "manageUserBalance",
    values: [UserBalanceOpStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "queryBatchSwap",
    values: [
      BigNumberish,
      BatchSwapStepStruct[],
      string[],
      FundManagementStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerTokens",
    values: [BytesLike, string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizer",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setPaused", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setRelayerApproval",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [SingleSwapStruct, FundManagementStruct, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "batchSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deregisterTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getActionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInternalBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPausedState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFeesCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasApprovedRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "managePoolBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "manageUserBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryBatchSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRelayerApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {
    "AuthorizerChanged(address)": EventFragment;
    "ExternalBalanceTransfer(address,address,address,uint256)": EventFragment;
    "FlashLoan(address,address,uint256,uint256)": EventFragment;
    "InternalBalanceChanged(address,address,int256)": EventFragment;
    "PausedStateChanged(bool)": EventFragment;
    "PoolBalanceChanged(bytes32,address,address[],int256[],uint256[])": EventFragment;
    "PoolBalanceManaged(bytes32,address,address,int256,int256)": EventFragment;
    "PoolRegistered(bytes32,address,uint8)": EventFragment;
    "RelayerApprovalChanged(address,address,bool)": EventFragment;
    "Swap(bytes32,address,address,uint256,uint256)": EventFragment;
    "TokensDeregistered(bytes32,address[])": EventFragment;
    "TokensRegistered(bytes32,address[],address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExternalBalanceTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InternalBalanceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausedStateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolBalanceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolBalanceManaged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerApprovalChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensDeregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensRegistered"): EventFragment;
}

export type AuthorizerChangedEvent = TypedEvent<
  [string],
  { newAuthorizer: string }
>;

export type AuthorizerChangedEventFilter =
  TypedEventFilter<AuthorizerChangedEvent>;

export type ExternalBalanceTransferEvent = TypedEvent<
  [string, string, string, BigNumber],
  { token: string; sender: string; recipient: string; amount: BigNumber }
>;

export type ExternalBalanceTransferEventFilter =
  TypedEventFilter<ExternalBalanceTransferEvent>;

export type FlashLoanEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { recipient: string; token: string; amount: BigNumber; feeAmount: BigNumber }
>;

export type FlashLoanEventFilter = TypedEventFilter<FlashLoanEvent>;

export type InternalBalanceChangedEvent = TypedEvent<
  [string, string, BigNumber],
  { user: string; token: string; delta: BigNumber }
>;

export type InternalBalanceChangedEventFilter =
  TypedEventFilter<InternalBalanceChangedEvent>;

export type PausedStateChangedEvent = TypedEvent<
  [boolean],
  { paused: boolean }
>;

export type PausedStateChangedEventFilter =
  TypedEventFilter<PausedStateChangedEvent>;

export type PoolBalanceChangedEvent = TypedEvent<
  [string, string, string[], BigNumber[], BigNumber[]],
  {
    poolId: string;
    liquidityProvider: string;
    tokens: string[];
    deltas: BigNumber[];
    protocolFeeAmounts: BigNumber[];
  }
>;

export type PoolBalanceChangedEventFilter =
  TypedEventFilter<PoolBalanceChangedEvent>;

export type PoolBalanceManagedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    poolId: string;
    assetManager: string;
    token: string;
    cashDelta: BigNumber;
    managedDelta: BigNumber;
  }
>;

export type PoolBalanceManagedEventFilter =
  TypedEventFilter<PoolBalanceManagedEvent>;

export type PoolRegisteredEvent = TypedEvent<
  [string, string, number],
  { poolId: string; poolAddress: string; specialization: number }
>;

export type PoolRegisteredEventFilter = TypedEventFilter<PoolRegisteredEvent>;

export type RelayerApprovalChangedEvent = TypedEvent<
  [string, string, boolean],
  { relayer: string; sender: string; approved: boolean }
>;

export type RelayerApprovalChangedEventFilter =
  TypedEventFilter<RelayerApprovalChangedEvent>;

export type SwapEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    poolId: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
  }
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export type TokensDeregisteredEvent = TypedEvent<
  [string, string[]],
  { poolId: string; tokens: string[] }
>;

export type TokensDeregisteredEventFilter =
  TypedEventFilter<TokensDeregisteredEvent>;

export type TokensRegisteredEvent = TypedEvent<
  [string, string[], string[]],
  { poolId: string; tokens: string[]; assetManagers: string[] }
>;

export type TokensRegisteredEventFilter =
  TypedEventFilter<TokensRegisteredEvent>;

export interface AssetManagers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetManagersInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    batchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      limits: BigNumberish[],
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deregisterTokens(
      poolId: BytesLike,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    flashLoan(
      recipient: string,
      tokens: string[],
      amounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAuthorizer(overrides?: CallOverrides): Promise<[string]>;

    getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    getInternalBalance(
      user: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getNextNonce(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getPausedState(overrides?: CallOverrides): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;

    getPool(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    getPoolTokenInfo(
      poolId: BytesLike,
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        cash: BigNumber;
        managed: BigNumber;
        lastChangeBlock: BigNumber;
        assetManager: string;
      }
    >;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    getProtocolFeesCollector(overrides?: CallOverrides): Promise<[string]>;

    hasApprovedRelayer(
      user: string,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    joinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    managePoolBalance(
      ops: PoolBalanceOpStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    manageUserBalance(
      ops: UserBalanceOpStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryBatchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerPool(
      specialization: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerTokens(
      poolId: BytesLike,
      tokens: string[],
      assetManagers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuthorizer(
      newAuthorizer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPaused(
      paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRelayerApproval(
      sender: string,
      relayer: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      singleSwap: SingleSwapStruct,
      funds: FundManagementStruct,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  batchSwap(
    kind: BigNumberish,
    swaps: BatchSwapStepStruct[],
    assets: string[],
    funds: FundManagementStruct,
    limits: BigNumberish[],
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deregisterTokens(
    poolId: BytesLike,
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exitPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    request: ExitPoolRequestStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  flashLoan(
    recipient: string,
    tokens: string[],
    amounts: BigNumberish[],
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getActionId(selector: BytesLike, overrides?: CallOverrides): Promise<string>;

  getAuthorizer(overrides?: CallOverrides): Promise<string>;

  getDomainSeparator(overrides?: CallOverrides): Promise<string>;

  getInternalBalance(
    user: string,
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getNextNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getPausedState(overrides?: CallOverrides): Promise<
    [boolean, BigNumber, BigNumber] & {
      paused: boolean;
      pauseWindowEndTime: BigNumber;
      bufferPeriodEndTime: BigNumber;
    }
  >;

  getPool(
    poolId: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, number]>;

  getPoolTokenInfo(
    poolId: BytesLike,
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string] & {
      cash: BigNumber;
      managed: BigNumber;
      lastChangeBlock: BigNumber;
      assetManager: string;
    }
  >;

  getPoolTokens(
    poolId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[], BigNumber] & {
      tokens: string[];
      balances: BigNumber[];
      lastChangeBlock: BigNumber;
    }
  >;

  getProtocolFeesCollector(overrides?: CallOverrides): Promise<string>;

  hasApprovedRelayer(
    user: string,
    relayer: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  joinPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    request: JoinPoolRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  managePoolBalance(
    ops: PoolBalanceOpStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  manageUserBalance(
    ops: UserBalanceOpStruct[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryBatchSwap(
    kind: BigNumberish,
    swaps: BatchSwapStepStruct[],
    assets: string[],
    funds: FundManagementStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerPool(
    specialization: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerTokens(
    poolId: BytesLike,
    tokens: string[],
    assetManagers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuthorizer(
    newAuthorizer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPaused(
    paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRelayerApproval(
    sender: string,
    relayer: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    singleSwap: SingleSwapStruct,
    funds: FundManagementStruct,
    limit: BigNumberish,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    batchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      limits: BigNumberish[],
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    deregisterTokens(
      poolId: BytesLike,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    exitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    flashLoan(
      recipient: string,
      tokens: string[],
      amounts: BigNumberish[],
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getAuthorizer(overrides?: CallOverrides): Promise<string>;

    getDomainSeparator(overrides?: CallOverrides): Promise<string>;

    getInternalBalance(
      user: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getNextNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPausedState(overrides?: CallOverrides): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;

    getPool(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    getPoolTokenInfo(
      poolId: BytesLike,
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        cash: BigNumber;
        managed: BigNumber;
        lastChangeBlock: BigNumber;
        assetManager: string;
      }
    >;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    getProtocolFeesCollector(overrides?: CallOverrides): Promise<string>;

    hasApprovedRelayer(
      user: string,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    joinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    managePoolBalance(
      ops: PoolBalanceOpStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    manageUserBalance(
      ops: UserBalanceOpStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    queryBatchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    registerPool(
      specialization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    registerTokens(
      poolId: BytesLike,
      tokens: string[],
      assetManagers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setAuthorizer(
      newAuthorizer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPaused(paused: boolean, overrides?: CallOverrides): Promise<void>;

    setRelayerApproval(
      sender: string,
      relayer: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      singleSwap: SingleSwapStruct,
      funds: FundManagementStruct,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AuthorizerChanged(address)"(
      newAuthorizer?: string | null
    ): AuthorizerChangedEventFilter;
    AuthorizerChanged(
      newAuthorizer?: string | null
    ): AuthorizerChangedEventFilter;

    "ExternalBalanceTransfer(address,address,address,uint256)"(
      token?: string | null,
      sender?: string | null,
      recipient?: null,
      amount?: null
    ): ExternalBalanceTransferEventFilter;
    ExternalBalanceTransfer(
      token?: string | null,
      sender?: string | null,
      recipient?: null,
      amount?: null
    ): ExternalBalanceTransferEventFilter;

    "FlashLoan(address,address,uint256,uint256)"(
      recipient?: string | null,
      token?: string | null,
      amount?: null,
      feeAmount?: null
    ): FlashLoanEventFilter;
    FlashLoan(
      recipient?: string | null,
      token?: string | null,
      amount?: null,
      feeAmount?: null
    ): FlashLoanEventFilter;

    "InternalBalanceChanged(address,address,int256)"(
      user?: string | null,
      token?: string | null,
      delta?: null
    ): InternalBalanceChangedEventFilter;
    InternalBalanceChanged(
      user?: string | null,
      token?: string | null,
      delta?: null
    ): InternalBalanceChangedEventFilter;

    "PausedStateChanged(bool)"(paused?: null): PausedStateChangedEventFilter;
    PausedStateChanged(paused?: null): PausedStateChangedEventFilter;

    "PoolBalanceChanged(bytes32,address,address[],int256[],uint256[])"(
      poolId?: BytesLike | null,
      liquidityProvider?: string | null,
      tokens?: null,
      deltas?: null,
      protocolFeeAmounts?: null
    ): PoolBalanceChangedEventFilter;
    PoolBalanceChanged(
      poolId?: BytesLike | null,
      liquidityProvider?: string | null,
      tokens?: null,
      deltas?: null,
      protocolFeeAmounts?: null
    ): PoolBalanceChangedEventFilter;

    "PoolBalanceManaged(bytes32,address,address,int256,int256)"(
      poolId?: BytesLike | null,
      assetManager?: string | null,
      token?: string | null,
      cashDelta?: null,
      managedDelta?: null
    ): PoolBalanceManagedEventFilter;
    PoolBalanceManaged(
      poolId?: BytesLike | null,
      assetManager?: string | null,
      token?: string | null,
      cashDelta?: null,
      managedDelta?: null
    ): PoolBalanceManagedEventFilter;

    "PoolRegistered(bytes32,address,uint8)"(
      poolId?: BytesLike | null,
      poolAddress?: string | null,
      specialization?: null
    ): PoolRegisteredEventFilter;
    PoolRegistered(
      poolId?: BytesLike | null,
      poolAddress?: string | null,
      specialization?: null
    ): PoolRegisteredEventFilter;

    "RelayerApprovalChanged(address,address,bool)"(
      relayer?: string | null,
      sender?: string | null,
      approved?: null
    ): RelayerApprovalChangedEventFilter;
    RelayerApprovalChanged(
      relayer?: string | null,
      sender?: string | null,
      approved?: null
    ): RelayerApprovalChangedEventFilter;

    "Swap(bytes32,address,address,uint256,uint256)"(
      poolId?: BytesLike | null,
      tokenIn?: string | null,
      tokenOut?: string | null,
      amountIn?: null,
      amountOut?: null
    ): SwapEventFilter;
    Swap(
      poolId?: BytesLike | null,
      tokenIn?: string | null,
      tokenOut?: string | null,
      amountIn?: null,
      amountOut?: null
    ): SwapEventFilter;

    "TokensDeregistered(bytes32,address[])"(
      poolId?: BytesLike | null,
      tokens?: null
    ): TokensDeregisteredEventFilter;
    TokensDeregistered(
      poolId?: BytesLike | null,
      tokens?: null
    ): TokensDeregisteredEventFilter;

    "TokensRegistered(bytes32,address[],address[])"(
      poolId?: BytesLike | null,
      tokens?: null,
      assetManagers?: null
    ): TokensRegisteredEventFilter;
    TokensRegistered(
      poolId?: BytesLike | null,
      tokens?: null,
      assetManagers?: null
    ): TokensRegisteredEventFilter;
  };

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    batchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      limits: BigNumberish[],
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deregisterTokens(
      poolId: BytesLike,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    flashLoan(
      recipient: string,
      tokens: string[],
      amounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizer(overrides?: CallOverrides): Promise<BigNumber>;

    getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    getInternalBalance(
      user: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPausedState(overrides?: CallOverrides): Promise<BigNumber>;

    getPool(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPoolTokenInfo(
      poolId: BytesLike,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolFeesCollector(overrides?: CallOverrides): Promise<BigNumber>;

    hasApprovedRelayer(
      user: string,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    managePoolBalance(
      ops: PoolBalanceOpStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    manageUserBalance(
      ops: UserBalanceOpStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryBatchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerPool(
      specialization: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerTokens(
      poolId: BytesLike,
      tokens: string[],
      assetManagers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuthorizer(
      newAuthorizer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPaused(
      paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRelayerApproval(
      sender: string,
      relayer: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      singleSwap: SingleSwapStruct,
      funds: FundManagementStruct,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    batchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      limits: BigNumberish[],
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deregisterTokens(
      poolId: BytesLike,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    flashLoan(
      recipient: string,
      tokens: string[],
      amounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInternalBalance(
      user: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPausedState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPool(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolTokenInfo(
      poolId: BytesLike,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolFeesCollector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasApprovedRelayer(
      user: string,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    managePoolBalance(
      ops: PoolBalanceOpStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    manageUserBalance(
      ops: UserBalanceOpStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryBatchSwap(
      kind: BigNumberish,
      swaps: BatchSwapStepStruct[],
      assets: string[],
      funds: FundManagementStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerPool(
      specialization: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerTokens(
      poolId: BytesLike,
      tokens: string[],
      assetManagers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuthorizer(
      newAuthorizer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPaused(
      paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRelayerApproval(
      sender: string,
      relayer: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      singleSwap: SingleSwapStruct,
      funds: FundManagementStruct,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
