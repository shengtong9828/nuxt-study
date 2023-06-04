export default defineEventHandler(() => {
  const {
    NOTION_AUTHORIZATION,
    NOTION_VERSION,
    MAIN_PAGEID,
    USER_DATABASEID,
    PRIVATE_KEY,
    PUBLIC_KEY,
  } = process.env;
  let isPass = true;
  let msg = "请先配置环境变量";
  if (!NOTION_AUTHORIZATION) {
    isPass = false;
    msg = `${msg}NOTION_AUTHORIZATION`;
  } else if (!NOTION_VERSION) {
    isPass = false;
    msg = `${msg}NOTION_VERSION`;
  } else if (!MAIN_PAGEID) {
    isPass = false;
    msg = `${msg}MAIN_PAGEID`;
  } else if (!USER_DATABASEID) {
    isPass = false;
    msg = `${msg}USER_DATABASEID`;
  } else if (!PRIVATE_KEY) {
    isPass = false;
    msg = `${msg}PRIVATE_KEY`;
  } else if (!PUBLIC_KEY) {
    isPass = false;
    msg = `${msg}PUBLIC_KEY`;
  }
  return {
    status: 0,
    msg: isPass ? "校验成功！" : msg,
    data: isPass,
  };
});
