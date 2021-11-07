
<template>
  <button @click="fetchData">Fetch Data</button>
  <div v-for="i in state.films" :key="i">
    <p>{{ i }}</p>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
const state = reactive({
  films: []
})
const fetchData = async () => {
  let [err, rsp] = await fetch('https://swapi.dev/api/films/').then(rsp => {
    if (!rsp.ok) {
      return Promise.reject([rsp.statusText, undefined])
    }
    return rsp.json()
  }).then(async json => [undefined, json]).catch((err) => err);

  console.log(err, rsp)
  if (err) {
    alert(err.toString())
    return
  }
  state.films = rsp.results || []
}

onMounted(fetchData)
</script>
