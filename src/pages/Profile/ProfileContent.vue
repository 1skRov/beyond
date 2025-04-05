<script>

import ProfileInformation from "@/pages/Profile/ProfileInformation.vue";
import Achievements from "@/pages/Profile/achievements.vue";

export default {
  components: {Achievements, ProfileInformation},
  data() {
    return {
      value: 1,
      visible: false
    }
  },
  methods: {
    profile(id) {
      this.value = 1;
    },
    archivment(id) {
      this.value = 2;
    },
    open(id) {
      this.visible = !this.visible;
    }
  }
}
</script>

<template>
  <div class="contents">
    <div class="head">
      <img src="@/assets/images/theme1.jpg" alt="">
    </div>
    <div class="navs">
      <div class="flex gap-4">
        <button :class="value === 1 ? 'active' : ''" @click="profile(1)">Информация</button>
        <button @click="archivment(2)" :class="value === 2 ? 'active' : ''">Достижения</button>
        <button @click="open(3)" :class="value === 3 ? 'active' : ''">Редактировать</button>
      </div>
      <div class="absolute" style="top : 17px; left: 198px"><p class="m-0 font-semibold"
                                                               style="color: #8ba6c7; font-size: 20px;">
        @lizzie_olsen</p></div>
      <div class="w-40 h-40 rounded-full overflow-hidden flex justify-center items-center absolute"
           style="top : -70px; left: 10px">
        <img src="@/assets/images/user1.webp" alt="" style="width: 100%; height: 100%; object-fit: cover">
      </div>
    </div>
    <div class="content mt-10">
      <div v-if="value===1">
        <profile-information></profile-information>
      </div>
      <div v-if="value === 2">
        <achievements></achievements>
      </div>
    </div>
    <div></div>
  </div>
  <div>
    <Drawer v-model:visible="visible" header="Редактировать" position="right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Drawer>
  </div>
</template>

<style scoped>
.contents {
  @apply w-full h-full border border-red-100 rounded;
}

.head {
  max-height: 250px;
  height: 250px;
  @apply w-full overflow-hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.navs {
  @apply w-full h-16 bg-white flex justify-end items-center relative;

  button {
    @apply border-none rounded-full px-4 py-1.5 text-gray-400 font-semibold;
  }

  .active {
    background: #4278de;
    color: white;
    @apply font-semibold
  }
}
</style>