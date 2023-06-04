<template>
  <div
    class="login"
    :style="{
      background: `linear-gradient(135deg, ${color1.hex}, ${color2.hex});
}`,
    }"
  >
    <van-form class="login-form" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <div class="footer" :style="{ color: `${footerColor}` }">
      <div>{{ color1.hex }} - {{ color2.hex }}</div>
      <div>{{ color1.name }} - {{ color2.name }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { sm2 } from "sm-crypto";
definePageMeta({
  layout: false,
});

const { data: color1 } = (await useFetch("/api/colors")).data.value;
const { data: color2 } = (await useFetch("/api/colors")).data.value;

const footerColor = resBgColor(color2.RGB);

function resBgColor(rgbArr: Array<number>) {
  // 当color值大于128时,color值偏向255,即#ffffff,此时字体颜色应为#000000
  // 当color值小于128时,color值偏向0,即#000000,此时字体颜色应为#ffffff
  var color =
    0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2;
  return color ? "#000000" : "#ffffff";
}

const username = ref("");
const password = ref("");
async function onSubmit(value: { pageId: String }) {
  console.log("submit", pageId);
  const { data: publicKey } = (await useFetch("/api/public-key")).data.value;

  console.log("publicKey", publicKey);
  console.log("value.pageId", value.pageId);

  const res = await useFetch("/api/check_pageId", {
    method: "post",
    body: {
      pageId: sm2.doEncrypt(
        `${value.pageId}${new Date().getTime()}`,
        publicKey,
        0
      ),
    },
  });
  console.log(res);
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f95b0, #ed9db2);
  .login-form {
    position: absolute;
    width: 9rem;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 0;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0.5rem;
  }
  .footer {
    width: calc(100% - 1rem);
    padding: 0.5rem;
    position: absolute;
    font-size: 0.4rem;
    bottom: 0;
    text-align: right;
    color: #fff;
  }
}
</style>
