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
<!--      <div class="h-full w-full" style="max-width: 1240px; margin: 0 auto">-->
        <router-view/>
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  @apply flex w-full h-full overflow-hidden gap-2;
}

.sidebar-box {
  width: 400px;
  min-width: 400px;
  @apply overflow-hidden h-full;
}

.main-content {
  @apply w-full overflow-y-auto p-2;
}
</style>