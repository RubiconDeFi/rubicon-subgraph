// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class UserTrade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserTrade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserTrade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserTrade", id.toString(), this);
  }

  static load(id: string): UserTrade | null {
    return store.get("UserTrade", id) as UserTrade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isBuy(): boolean {
    let value = this.get("isBuy");
    return value.toBoolean();
  }

  set isBuy(value: boolean) {
    this.set("isBuy", Value.fromBoolean(value));
  }

  get payGem(): string {
    let value = this.get("payGem");
    return value.toString();
  }

  set payGem(value: string) {
    this.set("payGem", Value.fromString(value));
  }

  get buyGem(): string {
    let value = this.get("buyGem");
    return value.toString();
  }

  set buyGem(value: string) {
    this.set("buyGem", Value.fromString(value));
  }

  get payAmount(): BigInt {
    let value = this.get("payAmount");
    return value.toBigInt();
  }

  set payAmount(value: BigInt) {
    this.set("payAmount", Value.fromBigInt(value));
  }

  get buyAmount(): BigInt {
    let value = this.get("buyAmount");
    return value.toBigInt();
  }

  set buyAmount(value: BigInt) {
    this.set("buyAmount", Value.fromBigInt(value));
  }

  get completed(): boolean {
    let value = this.get("completed");
    return value.toBoolean();
  }

  set completed(value: boolean) {
    this.set("completed", Value.fromBoolean(value));
  }

  get killed(): boolean {
    let value = this.get("killed");
    return value.toBoolean();
  }

  set killed(value: boolean) {
    this.set("killed", Value.fromBoolean(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class LogMake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogMake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogMake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogMake", id.toString(), this);
  }

  static load(id: string): LogMake | null {
    return store.get("LogMake", id) as LogMake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get logMakeID(): BigInt {
    let value = this.get("logMakeID");
    return value.toBigInt();
  }

  set logMakeID(value: BigInt) {
    this.set("logMakeID", Value.fromBigInt(value));
  }

  get pair(): Bytes {
    let value = this.get("pair");
    return value.toBytes();
  }

  set pair(value: Bytes) {
    this.set("pair", Value.fromBytes(value));
  }

  get maker(): Bytes {
    let value = this.get("maker");
    return value.toBytes();
  }

  set maker(value: Bytes) {
    this.set("maker", Value.fromBytes(value));
  }

  get pay_gem(): Bytes {
    let value = this.get("pay_gem");
    return value.toBytes();
  }

  set pay_gem(value: Bytes) {
    this.set("pay_gem", Value.fromBytes(value));
  }

  get buy_gem(): Bytes {
    let value = this.get("buy_gem");
    return value.toBytes();
  }

  set buy_gem(value: Bytes) {
    this.set("buy_gem", Value.fromBytes(value));
  }

  get pay_amt(): BigInt {
    let value = this.get("pay_amt");
    return value.toBigInt();
  }

  set pay_amt(value: BigInt) {
    this.set("pay_amt", Value.fromBigInt(value));
  }

  get buy_amt(): BigInt {
    let value = this.get("buy_amt");
    return value.toBigInt();
  }

  set buy_amt(value: BigInt) {
    this.set("buy_amt", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class LogTake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogTake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogTake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogTake", id.toString(), this);
  }

  static load(id: string): LogTake | null {
    return store.get("LogTake", id) as LogTake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get logTakeID(): BigInt {
    let value = this.get("logTakeID");
    return value.toBigInt();
  }

  set logTakeID(value: BigInt) {
    this.set("logTakeID", Value.fromBigInt(value));
  }

  get pair(): Bytes {
    let value = this.get("pair");
    return value.toBytes();
  }

  set pair(value: Bytes) {
    this.set("pair", Value.fromBytes(value));
  }

  get maker(): Bytes {
    let value = this.get("maker");
    return value.toBytes();
  }

  set maker(value: Bytes) {
    this.set("maker", Value.fromBytes(value));
  }

  get pay_gem(): Bytes {
    let value = this.get("pay_gem");
    return value.toBytes();
  }

  set pay_gem(value: Bytes) {
    this.set("pay_gem", Value.fromBytes(value));
  }

  get buy_gem(): Bytes {
    let value = this.get("buy_gem");
    return value.toBytes();
  }

  set buy_gem(value: Bytes) {
    this.set("buy_gem", Value.fromBytes(value));
  }

  get take_amt(): BigInt {
    let value = this.get("take_amt");
    return value.toBigInt();
  }

  set take_amt(value: BigInt) {
    this.set("take_amt", Value.fromBigInt(value));
  }

  get give_amt(): BigInt {
    let value = this.get("give_amt");
    return value.toBigInt();
  }

  set give_amt(value: BigInt) {
    this.set("give_amt", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class LogKill extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogKill entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogKill entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogKill", id.toString(), this);
  }

  static load(id: string): LogKill | null {
    return store.get("LogKill", id) as LogKill | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get logKillID(): BigInt {
    let value = this.get("logKillID");
    return value.toBigInt();
  }

  set logKillID(value: BigInt) {
    this.set("logKillID", Value.fromBigInt(value));
  }

  get pair(): Bytes {
    let value = this.get("pair");
    return value.toBytes();
  }

  set pair(value: Bytes) {
    this.set("pair", Value.fromBytes(value));
  }

  get maker(): Bytes {
    let value = this.get("maker");
    return value.toBytes();
  }

  set maker(value: Bytes) {
    this.set("maker", Value.fromBytes(value));
  }

  get pay_gem(): Bytes {
    let value = this.get("pay_gem");
    return value.toBytes();
  }

  set pay_gem(value: Bytes) {
    this.set("pay_gem", Value.fromBytes(value));
  }

  get buy_gem(): Bytes {
    let value = this.get("buy_gem");
    return value.toBytes();
  }

  set buy_gem(value: Bytes) {
    this.set("buy_gem", Value.fromBytes(value));
  }

  get pay_amt(): BigInt {
    let value = this.get("pay_amt");
    return value.toBigInt();
  }

  set pay_amt(value: BigInt) {
    this.set("pay_amt", Value.fromBigInt(value));
  }

  get buy_amt(): BigInt {
    let value = this.get("buy_amt");
    return value.toBigInt();
  }

  set buy_amt(value: BigInt) {
    this.set("buy_amt", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
