export default defineEventHandler(async () => {
  const res = await (await fetch(`http://zhongguose.com/colors.json`)).json();
  const index = Math.floor(Math.random() * res.length);
  return {
    status: 0,
    msg: `获取成功`,
    data: res[index],
  };
});
