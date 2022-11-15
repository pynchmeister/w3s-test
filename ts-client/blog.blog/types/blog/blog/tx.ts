/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "blog.blog";

export interface MsgCreatePost {
  creator: string;
  title: string;
  body: string;
}

export interface MsgCreatePostResponse {
  id: number;
}

export interface MsgUploadFilecoin {
  creator: string;
  authToken: string;
  content: string;
}

export interface MsgUploadFilecoinResponse {
  id: number;
}

export interface MsgUploadW3S {
  creator: string;
  title: string;
  content: string;
}

export interface MsgUploadW3SResponse {
  id: number;
}

function createBaseMsgCreatePost(): MsgCreatePost {
  return { creator: "", title: "", body: "" };
}

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePost>, I>>(object: I): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return { id: 0 };
}

export const MsgCreatePostResponse = {
  encode(message: MsgCreatePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePostResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePostResponse>, I>>(object: I): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUploadFilecoin(): MsgUploadFilecoin {
  return { creator: "", authToken: "", content: "" };
}

export const MsgUploadFilecoin = {
  encode(message: MsgUploadFilecoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.authToken !== "") {
      writer.uint32(18).string(message.authToken);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUploadFilecoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUploadFilecoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.authToken = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUploadFilecoin {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      authToken: isSet(object.authToken) ? String(object.authToken) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: MsgUploadFilecoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.authToken !== undefined && (obj.authToken = message.authToken);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUploadFilecoin>, I>>(object: I): MsgUploadFilecoin {
    const message = createBaseMsgUploadFilecoin();
    message.creator = object.creator ?? "";
    message.authToken = object.authToken ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseMsgUploadFilecoinResponse(): MsgUploadFilecoinResponse {
  return { id: 0 };
}

export const MsgUploadFilecoinResponse = {
  encode(message: MsgUploadFilecoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUploadFilecoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUploadFilecoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUploadFilecoinResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgUploadFilecoinResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUploadFilecoinResponse>, I>>(object: I): MsgUploadFilecoinResponse {
    const message = createBaseMsgUploadFilecoinResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUploadW3S(): MsgUploadW3S {
  return { creator: "", title: "", content: "" };
}

export const MsgUploadW3S = {
  encode(message: MsgUploadW3S, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUploadW3S {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUploadW3S();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUploadW3S {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: MsgUploadW3S): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUploadW3S>, I>>(object: I): MsgUploadW3S {
    const message = createBaseMsgUploadW3S();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseMsgUploadW3SResponse(): MsgUploadW3SResponse {
  return { id: 0 };
}

export const MsgUploadW3SResponse = {
  encode(message: MsgUploadW3SResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUploadW3SResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUploadW3SResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUploadW3SResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgUploadW3SResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUploadW3SResponse>, I>>(object: I): MsgUploadW3SResponse {
    const message = createBaseMsgUploadW3SResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  UploadFilecoin(request: MsgUploadFilecoin): Promise<MsgUploadFilecoinResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UploadW3S(request: MsgUploadW3S): Promise<MsgUploadW3SResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePost = this.CreatePost.bind(this);
    this.UploadFilecoin = this.UploadFilecoin.bind(this);
    this.UploadW3S = this.UploadW3S.bind(this);
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "CreatePost", data);
    return promise.then((data) => MsgCreatePostResponse.decode(new _m0.Reader(data)));
  }

  UploadFilecoin(request: MsgUploadFilecoin): Promise<MsgUploadFilecoinResponse> {
    const data = MsgUploadFilecoin.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "UploadFilecoin", data);
    return promise.then((data) => MsgUploadFilecoinResponse.decode(new _m0.Reader(data)));
  }

  UploadW3S(request: MsgUploadW3S): Promise<MsgUploadW3SResponse> {
    const data = MsgUploadW3S.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "UploadW3S", data);
    return promise.then((data) => MsgUploadW3SResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
