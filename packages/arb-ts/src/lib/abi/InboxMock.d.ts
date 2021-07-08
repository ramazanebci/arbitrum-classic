/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface InboxMockInterface extends ethers.utils.Interface {
  functions: {
    'activeOutbox()': FunctionFragment
    'bridge()': FunctionFragment
    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)': FunctionFragment
    'l2ToL1Sender()': FunctionFragment
    'setL2ToL1Sender(address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'activeOutbox',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'bridge', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'createRetryableTicket',
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'l2ToL1Sender',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'setL2ToL1Sender',
    values: [string]
  ): string

  decodeFunctionResult(
    functionFragment: 'activeOutbox',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'bridge', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'createRetryableTicket',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'l2ToL1Sender',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setL2ToL1Sender',
    data: BytesLike
  ): Result

  events: {
    'TicketData(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'TicketData'): EventFragment
}

export class InboxMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: InboxMockInterface

  functions: {
    activeOutbox(overrides?: Overrides): Promise<ContractTransaction>

    'activeOutbox()'(overrides?: Overrides): Promise<ContractTransaction>

    bridge(overrides?: Overrides): Promise<ContractTransaction>

    'bridge()'(overrides?: Overrides): Promise<ContractTransaction>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    l2ToL1Sender(overrides?: Overrides): Promise<ContractTransaction>

    'l2ToL1Sender()'(overrides?: Overrides): Promise<ContractTransaction>

    setL2ToL1Sender(
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setL2ToL1Sender(address)'(
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  activeOutbox(overrides?: Overrides): Promise<ContractTransaction>

  'activeOutbox()'(overrides?: Overrides): Promise<ContractTransaction>

  bridge(overrides?: Overrides): Promise<ContractTransaction>

  'bridge()'(overrides?: Overrides): Promise<ContractTransaction>

  createRetryableTicket(
    destAddr: string,
    l2CallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
    destAddr: string,
    l2CallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  l2ToL1Sender(overrides?: Overrides): Promise<ContractTransaction>

  'l2ToL1Sender()'(overrides?: Overrides): Promise<ContractTransaction>

  setL2ToL1Sender(
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setL2ToL1Sender(address)'(
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    activeOutbox(overrides?: CallOverrides): Promise<string>

    'activeOutbox()'(overrides?: CallOverrides): Promise<string>

    bridge(overrides?: CallOverrides): Promise<string>

    'bridge()'(overrides?: CallOverrides): Promise<string>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    l2ToL1Sender(overrides?: CallOverrides): Promise<string>

    'l2ToL1Sender()'(overrides?: CallOverrides): Promise<string>

    setL2ToL1Sender(sender: string, overrides?: CallOverrides): Promise<void>

    'setL2ToL1Sender(address)'(
      sender: string,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    TicketData(maxSubmissionCost: null): EventFilter
  }

  estimateGas: {
    activeOutbox(overrides?: Overrides): Promise<BigNumber>

    'activeOutbox()'(overrides?: Overrides): Promise<BigNumber>

    bridge(overrides?: Overrides): Promise<BigNumber>

    'bridge()'(overrides?: Overrides): Promise<BigNumber>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    l2ToL1Sender(overrides?: Overrides): Promise<BigNumber>

    'l2ToL1Sender()'(overrides?: Overrides): Promise<BigNumber>

    setL2ToL1Sender(sender: string, overrides?: Overrides): Promise<BigNumber>

    'setL2ToL1Sender(address)'(
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    activeOutbox(overrides?: Overrides): Promise<PopulatedTransaction>

    'activeOutbox()'(overrides?: Overrides): Promise<PopulatedTransaction>

    bridge(overrides?: Overrides): Promise<PopulatedTransaction>

    'bridge()'(overrides?: Overrides): Promise<PopulatedTransaction>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    l2ToL1Sender(overrides?: Overrides): Promise<PopulatedTransaction>

    'l2ToL1Sender()'(overrides?: Overrides): Promise<PopulatedTransaction>

    setL2ToL1Sender(
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setL2ToL1Sender(address)'(
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}