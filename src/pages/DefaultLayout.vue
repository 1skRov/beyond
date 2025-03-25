<script>
import MainSideBar from "@/components/MainComponents/SideBar.vue"
export default {
  name: "DefaultLayout",
  components: {MainSideBar},
}
</script>

<template>
  <div class="app-layout">
    <div class="sidebar-box">
      <MainSideBar></MainSideBar>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  @apply flex gap-2 w-full h-full;
}
.sidebar-box {
  width: 450px;
  min-width: 450px;
  height: 100%;
  @apply p-1.5;
}
.main-content {
  @apply w-full h-full overflow-y-auto;
}
</style>