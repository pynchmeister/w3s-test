import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUploadW3S } from "./types/blog/blog/tx";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgUploadFilecoin } from "./types/blog/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blog.blog.MsgUploadW3S", MsgUploadW3S],
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.MsgUploadFilecoin", MsgUploadFilecoin],
    
];

export { msgTypes }