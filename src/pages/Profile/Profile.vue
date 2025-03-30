<script setup>

import SideBar from "@/components/MainComponents/SideBar.vue";
import TestResults from "@/pages/Profile/TestResults.vue";
import ProfileContent from "@/pages/Profile/ProfileContent.vue";
</script>

<template>
  <div class="flex h-full gap-2.5">
    <div class="w-full flex gap-2.5" style="height: 100%">
      <div class="content">
        <ProfileContent></ProfileContent>
      </div>
      <div class="test-results">
        <test-results></test-results>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  @apply w-full h-full overflow-y-auto;
}

.test-results {
  @apply overflow-y-auto;
  width: 300px;
  min-width: 300px;
  height: 100%;
}
</style>