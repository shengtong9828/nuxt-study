export default defineEventHandler(async (event) => {
  const res = await (
    await fetch(
      `https://api.notion.com/v1/databases/${process.env.USER_DATABASEID}/query`,
      {
        method: "post",
        data: {
          // filter: {}, // json
          // sorts: [], // array
          // start_cursor: '', // string
          page_size: 1, // int32
        },
        headers: {
          Authorization:
            "Bearer secret_LqsmK3q2dtzIVrrKk8eaBV7T3FHzmNkAzfrBFn6E4Bi",
          "Notion-Version": "2022-06-28",
        },
      }
    )
  ).json();
  // const res = await axios.get("http://zhongguose.com/colors.json");
  // const res = await useAsyncData();

  // console.log(res, "res");
  // console.log(res.data, "res.data");
  // const { req, res } = event.node;
  // console.log("req", req);
  // console.log("res", res);
  const query = getQuery(event);

  // console.log(process, "process");
  // console.log(process.env, "process.env");
  return {
    status: 1,
    msg: `res --- ${res}
    process --- ${process}
    process.env --- ${process.env}
    process.env.NOTION_CONFIG --- ${process.env.NOTION_CONFIG}`,
    data: res,
  };
});
