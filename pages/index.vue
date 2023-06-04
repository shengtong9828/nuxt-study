<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" />
    <div>this is index page</div>
    <van-button @click="abc">测试</van-button>
    <ul>
      <li v-for="color in data.data">{{ color }}</li>
    </ul>
  </div>
</template>

<script setup>
let data = ref([]);
async function abc() {
  data.value = await useFetch("/api/csapi");
  console.log(data);
  console.log(data.value);
  console.log(data.value.data);
  console.log(data.value.data[0]);
  console.log("data", data.value);
}
</script>
