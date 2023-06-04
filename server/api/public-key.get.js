export default defineEventHandler(() => {
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
