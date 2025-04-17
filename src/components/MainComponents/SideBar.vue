<script>
export default {
  name: "SideBar",
  data() {
    return {
      menu: [
        {title: "Главная", icon: "fi fi-rr-store-alt", link: "/"},
        {title: "Тестирование", icon: "fi fi-ts-quiz-alt", link: "/tests"},
        {title: "Материалы", icon: "fi fi-rr-folder", link: "/courses"},
        {title: "Образовательные маршруты", icon: "fi fi-rr-code-merge", link: "/roadmap"},
        {title: "Университеты", icon: "fi fi-rr-graduation-cap", link: "/university"},
        {title: "Образовательные программы", icon: "fi fi-rs-book-bookmark", link: "/"},
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
        <div class="hidden" v-tooltip.right="{
          value: 'Свернуть',
            pt: {
                arrow: {
                    style: {
                      borderBottomColor: 'var(--p-primary-color)'
                    }
                },
                text: '!bg-primary !text-primary-contrast !font-medium'
            }
          }">
          <i class="fi fi-rr-angle-double-small-left"></i>
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
            <p class="text-slate-700 m-0 font-medium">Elizabeth olsen</p>
            <p class="m-0 text-slate-700 text-xs">@lizzie_olsen</p>
          </div>
        </div>
        <div class="user-settings" @click="toggle">
          <i class="fi fi-rr-settings-sliders"></i>
        </div>
        <Popover ref="op">
          <router-link to="/profile">
            <div class="popover-setting">
              <div class="text-blue-600">
                <i class="fi fi-rs-circle-user"></i>
              </div>
              <p>Профиль</p>
            </div>
          </router-link>
          <router-link to="#">
            <div class="popover-setting">
              <div class="text-blue-600">
                <i class="fi fi-rr-bell"></i>
              </div>
              <p>Уведомления</p>
            </div>
          </router-link>
          <div class="popover-setting">
            <div class="text-blue-600">
              <i class="fi fi-ss-arrow-left-from-arc"></i>
            </div>
            <p>Выйти</p>
          </div>
        </Popover>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  @apply flex flex-col justify-between h-full p-2 rounded bg-slate-50;
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
  @apply text-slate-700;
}

.popover-setting {
  @apply flex gap-2.5 p-2 items-center cursor-pointer hover:bg-blue-100 rounded-lg;
}

.popover-setting i {
  font-size: 15px;
}

.popover-setting p {
  @apply m-0 text-slate-700 font-medium -mt-1;
}

.sidebar-header {
  @apply flex justify-between items-center w-full p-1.5 border-0 border-b border-gray-200;
}

.hidden {
  @apply w-8 h-8 text-slate-700 flex items-center justify-center rounded-lg cursor-pointer;
}

.hidden:hover {
  @apply bg-blue-200;
}

.head-title {
  font-size: 25px;
  letter-spacing: 1.5px;
  @apply font-bold text-slate-600;
}

.sidebar-menu {
  @apply flex flex-col w-full gap-1 font-medium;
}

.active-item {
  @apply font-medium text-white border-blue-400 bg-blue-600;
}
</style>