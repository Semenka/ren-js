/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import Contract, { contractOptions } from "web3/eth/contract";
import { EventLog, Callback, EventEmitter } from "web3/types";
import { TransactionObject, BlockType } from "web3/eth/types";
import { ContractEvent } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class ERC20 extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: contractOptions
  );
  clone(): ERC20;
  address: string;
  methods: {
    totalSupply(): TransactionObject<BN>;

    balanceOf(account: string): TransactionObject<BN>;

    transfer(
      recipient: string,
      amount: number | string
    ): TransactionObject<boolean>;

    allowance(owner: string, spender: string): TransactionObject<BN>;

    approve(
      spender: string,
      value: number | string
    ): TransactionObject<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string
    ): TransactionObject<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: number | string
    ): TransactionObject<boolean>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string
    ): TransactionObject<boolean>;
  };
  events: {
    Transfer: ContractEvent<{
      from: string;
      to: string;
      value: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    Approval: ContractEvent<{
      owner: string;
      spender: string;
      value: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}