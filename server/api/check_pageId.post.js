import { sm2 } from "sm-crypto";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const decodePageId = sm2.doDecrypt(body.pageId, process.env.PRIVATE_KEY, 0);
  const pageId = decodePageId.substring(0, decodePageId.length - 13);
  console.log("body", body);
  console.log("decodePageId", decodePageId);
  console.log("pageId", pageId);
  if (process?.env?.PUBLIC_KEY) {
    return {
      status: 0,
      msg: "获取成功！",
      data: process.env.PUBLIC_KEY,
    };
  } else {
    return {
      status: 1,
      msg: "请先配置环境变量PUBLIC_KEY",
      data: null,
    };
  }
});
