<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>hello nuxt</h1>
    <button @click="a">test</button>
    <cs></cs>
  </div>
</template>

<script setup>
function a() {
  console.log(process, "process");
  console.log(process.env, "process.env");
  console.log(process.env.NOTION_CONFIG, "process.env.NOTION_CONFIG");
}
</script>
