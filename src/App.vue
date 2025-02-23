<script setup>
import SideBar from "./components/MainComponents/SideBar.vue";
import Theme from "@/pages/Profile/Theme.vue";
import Chapter from "@/pages/Profile/Chapter.vue";
import Contents from "@/pages/Profile/Contents.vue";
</script>

<template>
<div class="w-full h-full flex items-center gap-5">
  <div class="side">
    <side-bar/>
  </div>
  <div class="profile-content">
    <div class="profile">
      <div class="theme">
        <Theme/>
      </div>
      <div class="chapter">
        <chapter/>
      </div>
      <div class="contents">
        <contents/>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.side{
  width: 15%;
  min-width: 15%;
  height: 98.5vh;
  max-height: 98.5vh;
  border: 1px solid #eff3f9;
  @apply rounded overflow-hidden;
}
.profile-content {
  @apply w-full flex justify-center overflow-y-auto;
  height: 98.5vh;
  max-height: 98.5vh;
}
.profile {
  width: 55%;
  min-width: 1200px;
  @apply h-full rounded;
}

.theme {
  @apply w-full;
  height: 35%;
}
.chapter {
  height: 60px;
  @apply w-full;
  margin-bottom: 55px;
}
.contents {
  @apply w-full h-full overflow-y-auto;
}
</style>
