<template>
  <div>
    <slot />
    defalut layout
    <van-tabbar route @change="onChange">
      <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search">标签</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="friends-o"
        >标签</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
let path: Ref<string> = ref("");
function getCurrentPath() {
  let route = useRoute();
  console.log("route", route.name);
  path.value = route.path;
  console.log("path.value", path.value);
}
getCurrentPath();
function onChange(v: number) {
  getCurrentPath();
}

let active = ref(0);
let value = ref("");
function onSearch() {}
function onCancel() {}
</script>
<style scoped>
.van-tabbar--fixed {
  position: fixed !important;
}
</style>
