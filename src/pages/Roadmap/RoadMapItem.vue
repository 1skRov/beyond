<script>
export default {
  name: "RoadMapMainPage",
  props:["title", "value"]
}
</script>

<template>
<div class="road" style="min-width: 250px; max-width: 350px; height: 80px">
  <p class="text-sm">{{title}}</p>
  <p v-if="value === 0" class="text-xs text-gray-500 font-medium">Еще не начали</p>
  <ProgressBar :value="value" v-else></ProgressBar>
</div>
</template>

<style scoped lang="scss">
.road {
  @apply rounded-md bg-blue-100 py-3 px-4 cursor-pointer flex flex-col gap-2.5;
  @apply text-blue-900 font-medium
}
</style>