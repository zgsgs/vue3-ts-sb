
<template>
  <div v-for="i in state.films" :key="i">
    <p>{{ i }}</p>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
const state = reactive({
  films: []
})

onMounted(async () => {
  let [err, data] = await fetch('https://swapi.dev/api/films/').then(rsp => [undefined, rsp.json()]).catch((err) => [err, undefined]);
  console.log(err, await data)
  if (err) {
    alert(err.toString())
    return
  }
  // 这里有点奇怪，另一个项目中不用await就能获取？？？
  const rsp = await data
  state.films = rsp?.results || []
  console.log(state)
})
</script>
