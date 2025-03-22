<script>
export default {
  name: "SideBar",
  data() {
    return {
      menu: [
        {title: "Главная", icon: "fi fi-rr-apps", link:"/"},
        {title: "Тестирование", icon: "fi fi-rr-apps", link:"/tests"},
        {title: "Материалы", icon: "fi fi-rr-apps", link:"/"},
        {title: "Университеты", icon: "fi fi-rr-apps", link:"university/"},
        {title: "Образовательные маршруты", icon: "fi fi-rr-apps", link:"/"},
        {title: "Образовательные программы", icon: "fi fi-rr-apps", link:"/"},
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    }
  }
}

</script>

<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-header mb-3">
        <p class="head-title">Beyond</p>
        <div class="logout" v-tooltip.right="{
          value: 'Выйти',
            pt: {
                arrow: {
                    style: {
                      borderBottomColor: 'var(--p-primary-color)'
                    }
                },
                text: '!bg-primary !text-primary-contrast !font-medium'
            }
          }">
          <i class="fi fi-ss-arrow-left-from-arc"></i>
        </div>
      </div>
      <div class="sidebar-menu">
        <div class="" v-for="m in menu" :key="m.id">
          <router-link
              :to="m.link"
              class="block"
              active-class="router-link-active"
              exact-active-class="router-link-exact-active"
          >
            <div
                class="menu-item"
                :class="{ 'active-item': $route.path === m.link }"
            >
              <i :class="m.icon"></i>
              <p>{{ m.title }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="settings">
      <div class="avatar sidebar-item">
        <div class="flex gap-2.5 items-center">
          <div class="image">
            <img src="@/assets/images/user1.webp" alt="" class="w-full h-full object-cover">
          </div>
          <div class="user-name">
            <p class="text-gray-600 m-0 text-medium">Elizabeth olsen</p>
            <p class="m-0 text-gray-500 text-xs">@lizzie_olsen</p>
          </div>
        </div>
        <div class="user-settings" @click="toggle">
          <i class="fi fi-rr-settings-sliders"></i>
        </div>
        <Popover ref="op">
          <router-link to="/profile">
            <div class="popover-setting">
              <div class="text-sky-600">
                <i class="fi fi-rs-circle-user"></i>
              </div>
              <p>Профиль</p>
            </div>
          </router-link>
          <router-link to="#">
            <div class="popover-setting">
              <div class="text-sky-600">
                <i class="fi fi-rr-bell"></i>
              </div>
              <p>Уведомления</p>
            </div>
          </router-link>
        </Popover>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  @apply border border-blue-100 flex flex-col justify-between h-full p-2 rounded bg-white;
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

.popover-setting {
  @apply flex gap-2.5 p-2 items-center cursor-pointer hover:bg-sky-50 border border-transparent rounded-lg hover:border-sky-100;
}

.popover-setting i {
  font-size: 15px;
}

.popover-setting p {
  @apply m-0 text-gray-500 font-medium -mt-1;
}

.sidebar-header {
  @apply flex justify-between items-center w-full p-1.5 border-0 border-b border-gray-200;
}

.logout {
  @apply w-8 h-8 text-sky-600 flex items-center justify-center rounded-lg cursor-pointer;
}

.logout:hover {
  @apply bg-sky-100;
}

.head-title {
  font-size: 25px;
  letter-spacing: 1.5px;
  @apply font-medium text-gray-700;
}

.sidebar-menu {
  @apply flex flex-col w-full gap-1;
}
.active-item {
  @apply font-medium text-sky-600 border-r-8 border-r-sky-500 border-sky-200 bg-sky-100;
}
</style>