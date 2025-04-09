<script>
export default {
  name: "RoadMapMainPage",
  props:["title", "value"]
}
</script>

<template>
<div class="rounded-lg bg-sky-50 border border-sky-200 py-3 px-4 cursor-pointer flex flex-col gap-2.5" style=" width: 250px">
  <p class="text-sm">{{title}}</p>
  <p v-if="value === 0" class="text-xs text-gray-500 font-medium">Еще не начали</p>
  <ProgressBar :value="value" v-else></ProgressBar>
</div>
</template>

<style scoped>

</style>