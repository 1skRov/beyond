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
  @apply flex w-full h-full overflow-hidden p-2 gap-2;
}
.sidebar-box {
  width: 400px;
  min-width: 400px;
  height: 100%;
  @apply overflow-hidden shadow-md rounded-lg;
}
.main-content {
  @apply w-full h-full overflow-y-auto shadow-md bg-slate-50 rounded-lg p-2;
}
</style>