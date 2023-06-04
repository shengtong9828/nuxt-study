<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
// import { sm2 } from "sm-crypto";
// const a = (await useFetch("/api/public-key")).data.value.data;
// TODO 0.判断当前路由是否是登录页
// TODO 1.从缓存中获取pageId加密信息，如果存在则校验是否有效，失效清空缓存跳转登录页
// TODO 2.提交pageId后，将pageID 混入 时间后加密，使用加密数据通过接口校验，校验成功 则缓存加密信息，跳转首页
// TODO 3.每次校验加密信息有效后 更新缓存时间
// TODO 每次调用接口 校验 pageId
// console.log(a);
</script>
