<script setup>

</script>

<template>
  <div class="chapter">
    <div class="avatar"><img src="@/assets/images/user1.webp" alt=""></div>
    <div class="flex justify-between items-center h-full">
      <div class="flex items-center ml-52 h-ull">
        <p class="text-gray-700 font-medium" style="font-size: 24px;"><span class="text-xl text-gray-700 font-medium pr-1">@</span>lizzie_olsen</p>
      </div>
<!--      <div class="chapter-items">-->
<!--        <button class="active"><span>Обо мне</span></button>-->
<!--                  <button><span>Учеба</span></button>-->
<!--        <button><span>Цель</span></button>-->
<!--        <button><span>Редактировать</span></button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
.chapter {
  @apply w-full relative h-full;
  .avatar {
    @apply w-44 h-44 rounded-full overflow-hidden flex justify-center items-center;
    @apply absolute -top-16 left-2;

    img {
      @apply w-full h-full object-cover;
    }
  }

  .chapter-items {
    @apply flex items-center h-full gap-3;
    button {
      @apply text-xs text-gray-600 rounded-3xl overflow-hidden px-5 py-2.5;
      border: 1px solid #fafcfd;
    }
    .active {
      background: #063058;
      color: white;
      border: 1px solid #a8e2fc;
    }
  }
}
</style>