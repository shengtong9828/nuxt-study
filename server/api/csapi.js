export default defineEventHandler((event) => {
  // const { req, res } = event.node;
  // console.log("req", req);
  // console.log("res", res);
  const query = getQuery(event);

  console.log(process, "process");
  console.log(process.env, "process.env");
  console.log(process.env.NOTION_CONFIG, "process.env.NOTION_CONFIG");
  return {
    status: 1,
    msg: `process --- ${process}
    process.env --- ${process.env}
    process.env.NOTION_CONFIG --- ${process.env.NOTION_CONFIG}`,
  };
});
