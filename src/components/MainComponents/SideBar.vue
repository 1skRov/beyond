<script>
export default {
  name: "SideBar",
  data() {
    return {}
  }
}

</script>

<template>
  <div class="sidebar">
    <div class="sidebar-content">content</div>
    <div class="settings">
      <div class="avatar sidebar-item border">
        <div class="flex gap-2.5 items-center">
          <div class="image">
            <img src="@/assets/images/user1.webp" alt="" class="w-full h-full object-cover">
          </div>
          <div class="user-name">
            <p class="text-gray-600 text-sm m-0 text-medium">Elizabeth olsen</p>
            <p class="m-0 text-gray-500 text-xs">@lizzie_olsen</p>
          </div>
        </div>
        <div class="user-settings">
          <i class="fi fi-rr-settings-sliders"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  @apply border border-blue-100 flex flex-col justify-between h-full p-3 rounded bg-white;
}

.settings {
  @apply flex flex-col gap-3;
}

.avatar {
  @apply flex justify-between;
}

.avatar .image {
  @apply w-10 h-10 overflow-hidden rounded-full;
}
.user-settings {
  @apply flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer;
}
.user-settings i {
  @apply text-sky-600;
}
</style>