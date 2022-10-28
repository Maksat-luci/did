/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "itachi.did";

export interface Strings {
  values: string[];
}

/**
 * DIDDocument defines a W3C DID Document
 *
 * NOTE: All 'json_name' and 'gogoproto.customtype' tags are for panacea-core to unmarshal the v1.3 genesis which is in the W3C JSON-LD format.
 *       On the other hand, the panacea-core and cosmos-sdk don't use those tags to marshal result to JSON (via grpc-gateway).
 */
export interface DIDDocument {
  contexts: Strings | undefined;
  id: string;
  controller: Strings | undefined;
  verificationMethods: VerificationMethod[];
  /** TODO: the repeated gogoproto.customtype has an issue: https://github.com/gogo/protobuf/issues/478 */
  authentications: VerificationRelationship[];
  assertionMethods: VerificationRelationship[];
  keyAgreements: VerificationRelationship[];
  capabilityInvocations: VerificationRelationship[];
  capabilityDelegations: VerificationRelationship[];
  services: Service[];
}

/** VerificationMethod defines a W3C verification method */
export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  publicKeyBase58: string;
}

/** VerificationRelationship defines a W3C verification relationship */
export interface VerificationRelationship {
  verificationMethodId: string | undefined;
  verificationMethod: VerificationMethod | undefined;
}

/** Service defines a service in the W3C DID Document. */
export interface Service {
  id: string;
  type: string;
  serviceEndpoint: string;
}

/** DIDDocumentWithSeq defines a message for DID Document with a sequence number for preventing replay attacks. */
export interface DIDDocumentWithSeq {
  document: DIDDocument | undefined;
  sequence: number;
}

/** DataWithSeq defines a message for data with a sequence number for preventing replay attacks. */
export interface DataWithSeq {
  data: Uint8Array;
  sequence: number;
}

function createBaseStrings(): Strings {
  return { values: [] };
}

export const Strings = {
  encode(message: Strings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Strings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Strings {
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Strings): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Strings>, I>>(object: I): Strings {
    const message = createBaseStrings();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseDIDDocument(): DIDDocument {
  return {
    contexts: undefined,
    id: "",
    controller: undefined,
    verificationMethods: [],
    authentications: [],
    assertionMethods: [],
    keyAgreements: [],
    capabilityInvocations: [],
    capabilityDelegations: [],
    services: [],
  };
}

export const DIDDocument = {
  encode(message: DIDDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contexts !== undefined) {
      Strings.encode(message.contexts, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.controller !== undefined) {
      Strings.encode(message.controller, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.verificationMethods) {
      VerificationMethod.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.authentications) {
      VerificationRelationship.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.assertionMethods) {
      VerificationRelationship.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.keyAgreements) {
      VerificationRelationship.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.capabilityInvocations) {
      VerificationRelationship.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.capabilityDelegations) {
      VerificationRelationship.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DIDDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDIDDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contexts = Strings.decode(reader, reader.uint32());
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.controller = Strings.decode(reader, reader.uint32());
          break;
        case 4:
          message.verificationMethods.push(VerificationMethod.decode(reader, reader.uint32()));
          break;
        case 5:
          message.authentications.push(VerificationRelationship.decode(reader, reader.uint32()));
          break;
        case 6:
          message.assertionMethods.push(VerificationRelationship.decode(reader, reader.uint32()));
          break;
        case 7:
          message.keyAgreements.push(VerificationRelationship.decode(reader, reader.uint32()));
          break;
        case 8:
          message.capabilityInvocations.push(VerificationRelationship.decode(reader, reader.uint32()));
          break;
        case 9:
          message.capabilityDelegations.push(VerificationRelationship.decode(reader, reader.uint32()));
          break;
        case 10:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DIDDocument {
    return {
      contexts: isSet(object["@context"]) ? Strings.fromJSON(object["@context"]) : undefined,
      id: isSet(object.id) ? String(object.id) : "",
      controller: isSet(object.controller) ? Strings.fromJSON(object.controller) : undefined,
      verificationMethods: Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      authentications: Array.isArray(object?.authentication)
        ? object.authentication.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      assertionMethods: Array.isArray(object?.assertionMethod)
        ? object.assertionMethod.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      keyAgreements: Array.isArray(object?.keyAgreement)
        ? object.keyAgreement.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      capabilityInvocations: Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      capabilityDelegations: Array.isArray(object?.capabilityDelegation)
        ? object.capabilityDelegation.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      services: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
    };
  },

  toJSON(message: DIDDocument): unknown {
    const obj: any = {};
    message.contexts !== undefined
      && (obj["@context"] = message.contexts ? Strings.toJSON(message.contexts) : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.controller !== undefined
      && (obj.controller = message.controller ? Strings.toJSON(message.controller) : undefined);
    if (message.verificationMethods) {
      obj.verificationMethod = message.verificationMethods.map((e) => e ? VerificationMethod.toJSON(e) : undefined);
    } else {
      obj.verificationMethod = [];
    }
    if (message.authentications) {
      obj.authentication = message.authentications.map((e) => e ? VerificationRelationship.toJSON(e) : undefined);
    } else {
      obj.authentication = [];
    }
    if (message.assertionMethods) {
      obj.assertionMethod = message.assertionMethods.map((e) => e ? VerificationRelationship.toJSON(e) : undefined);
    } else {
      obj.assertionMethod = [];
    }
    if (message.keyAgreements) {
      obj.keyAgreement = message.keyAgreements.map((e) => e ? VerificationRelationship.toJSON(e) : undefined);
    } else {
      obj.keyAgreement = [];
    }
    if (message.capabilityInvocations) {
      obj.capabilityInvocation = message.capabilityInvocations.map((e) =>
        e ? VerificationRelationship.toJSON(e) : undefined
      );
    } else {
      obj.capabilityInvocation = [];
    }
    if (message.capabilityDelegations) {
      obj.capabilityDelegation = message.capabilityDelegations.map((e) =>
        e ? VerificationRelationship.toJSON(e) : undefined
      );
    } else {
      obj.capabilityDelegation = [];
    }
    if (message.services) {
      obj.service = message.services.map((e) => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DIDDocument>, I>>(object: I): DIDDocument {
    const message = createBaseDIDDocument();
    message.contexts = (object.contexts !== undefined && object.contexts !== null)
      ? Strings.fromPartial(object.contexts)
      : undefined;
    message.id = object.id ?? "";
    message.controller = (object.controller !== undefined && object.controller !== null)
      ? Strings.fromPartial(object.controller)
      : undefined;
    message.verificationMethods = object.verificationMethods?.map((e) => VerificationMethod.fromPartial(e)) || [];
    message.authentications = object.authentications?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.assertionMethods = object.assertionMethods?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.keyAgreements = object.keyAgreements?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.capabilityInvocations = object.capabilityInvocations?.map((e) => VerificationRelationship.fromPartial(e))
      || [];
    message.capabilityDelegations = object.capabilityDelegations?.map((e) => VerificationRelationship.fromPartial(e))
      || [];
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVerificationMethod(): VerificationMethod {
  return { id: "", type: "", controller: "", publicKeyBase58: "" };
}

export const VerificationMethod = {
  encode(message: VerificationMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }
    if (message.publicKeyBase58 !== "") {
      writer.uint32(34).string(message.publicKeyBase58);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.controller = reader.string();
          break;
        case 4:
          message.publicKeyBase58 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerificationMethod {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      publicKeyBase58: isSet(object.publicKeyBase58) ? String(object.publicKeyBase58) : "",
    };
  },

  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.controller !== undefined && (obj.controller = message.controller);
    message.publicKeyBase58 !== undefined && (obj.publicKeyBase58 = message.publicKeyBase58);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerificationMethod>, I>>(object: I): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.publicKeyBase58 = object.publicKeyBase58 ?? "";
    return message;
  },
};

function createBaseVerificationRelationship(): VerificationRelationship {
  return { verificationMethodId: undefined, verificationMethod: undefined };
}

export const VerificationRelationship = {
  encode(message: VerificationRelationship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verificationMethodId !== undefined) {
      writer.uint32(10).string(message.verificationMethodId);
    }
    if (message.verificationMethod !== undefined) {
      VerificationMethod.encode(message.verificationMethod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verificationMethodId = reader.string();
          break;
        case 2:
          message.verificationMethod = VerificationMethod.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerificationRelationship {
    return {
      verificationMethodId: isSet(object.verificationMethodId) ? String(object.verificationMethodId) : undefined,
      verificationMethod: isSet(object.verificationMethod)
        ? VerificationMethod.fromJSON(object.verificationMethod)
        : undefined,
    };
  },

  toJSON(message: VerificationRelationship): unknown {
    const obj: any = {};
    message.verificationMethodId !== undefined && (obj.verificationMethodId = message.verificationMethodId);
    message.verificationMethod !== undefined && (obj.verificationMethod = message.verificationMethod
      ? VerificationMethod.toJSON(message.verificationMethod)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerificationRelationship>, I>>(object: I): VerificationRelationship {
    const message = createBaseVerificationRelationship();
    message.verificationMethodId = object.verificationMethodId ?? undefined;
    message.verificationMethod = (object.verificationMethod !== undefined && object.verificationMethod !== null)
      ? VerificationMethod.fromPartial(object.verificationMethod)
      : undefined;
    return message;
  },
};

function createBaseService(): Service {
  return { id: "", type: "", serviceEndpoint: "" };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(26).string(message.serviceEndpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.serviceEndpoint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : "",
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  },
};

function createBaseDIDDocumentWithSeq(): DIDDocumentWithSeq {
  return { document: undefined, sequence: 0 };
}

export const DIDDocumentWithSeq = {
  encode(message: DIDDocumentWithSeq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.document !== undefined) {
      DIDDocument.encode(message.document, writer.uint32(10).fork()).ldelim();
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DIDDocumentWithSeq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDIDDocumentWithSeq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.document = DIDDocument.decode(reader, reader.uint32());
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DIDDocumentWithSeq {
    return {
      document: isSet(object.document) ? DIDDocument.fromJSON(object.document) : undefined,
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: DIDDocumentWithSeq): unknown {
    const obj: any = {};
    message.document !== undefined
      && (obj.document = message.document ? DIDDocument.toJSON(message.document) : undefined);
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DIDDocumentWithSeq>, I>>(object: I): DIDDocumentWithSeq {
    const message = createBaseDIDDocumentWithSeq();
    message.document = (object.document !== undefined && object.document !== null)
      ? DIDDocument.fromPartial(object.document)
      : undefined;
    message.sequence = object.sequence ?? 0;
    return message;
  },
};

function createBaseDataWithSeq(): DataWithSeq {
  return { data: new Uint8Array(), sequence: 0 };
}

export const DataWithSeq = {
  encode(message: DataWithSeq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataWithSeq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataWithSeq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataWithSeq {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: DataWithSeq): unknown {
    const obj: any = {};
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataWithSeq>, I>>(object: I): DataWithSeq {
    const message = createBaseDataWithSeq();
    message.data = object.data ?? new Uint8Array();
    message.sequence = object.sequence ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
