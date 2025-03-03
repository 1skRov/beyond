<script setup>

import TestResultItem from "@/pages/Profile/TestResultItem.vue";
</script>

<template>
<div class="results">
  <test-result-item :bg="'bg-purple-100'" :color="'text-purple-800'"></test-result-item>
  <test-result-item :bg="'bg-blue-100'" :color="'text-blue-800'"></test-result-item>
  <test-result-item :bg="'bg-pink-100'" :color="'text-pink-800'"></test-result-item>
  <test-result-item :bg="'bg-green-100'" :color="'text-green-800'"></test-result-item>
  <test-result-item :bg="'bg-cyan-100'" :color="'text-cyan-800'"></test-result-item>
</div>
</template>

<style scoped>
.results {
  @apply w-full h-full flex flex-col gap-2.5 overflow-y-auto flex-grow;
}
</style>