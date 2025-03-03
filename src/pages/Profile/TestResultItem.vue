<script>
export default {
  props: ["color", "bg"]
}
</script>

<template>
  <div :class="bg" class="res">
    <div class="res-head">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="color">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
              d="M6.96006 2C7.37758 2 7.71605 2.30996 7.71605 2.69231V4.08883C8.38663 4.07692 9.13829 4.07692 9.98402 4.07692H14.016C14.8617 4.07692 15.6134 4.07692 16.284 4.08883V2.69231C16.284 2.30996 16.6224 2 17.0399 2C17.4575 2 17.7959 2.30996 17.7959 2.69231V4.15008C19.2468 4.25647 20.1992 4.51758 20.899 5.15838C21.5987 5.79917 21.8838 6.67139 22 8V9H2V8C2.11618 6.67139 2.4013 5.79917 3.10104 5.15838C3.80079 4.51758 4.75323 4.25647 6.20406 4.15008V2.69231C6.20406 2.30996 6.54253 2 6.96006 2Z"
              fill="currentColor"></path>
          <path opacity="0.5"
                d="M22 14V12C22 11.161 21.9873 9.66527 21.9744 9H2.00586C1.99296 9.66527 2.00564 11.161 2.00564 12V14C2.00564 17.7712 2.00564 19.6569 3.17688 20.8284C4.34813 22 6.23321 22 10.0034 22H14.0023C17.7724 22 19.6575 22 20.8288 20.8284C22 19.6569 22 17.7712 22 14Z"
                fill="currentColor"></path>
          <path
              d="M18 16.5C18 17.3284 17.3284 18 16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5Z"
              fill="currentColor"></path>
        </g>
      </svg>
      <p :class="color">16 янв. 2025г</p>
    </div>
    <div class="res-body">
      <div class="res-item">
        <p class="title">История казахстана</p>
        <p class="num"><span :class="color">10</span> / 15</p>
      </div>
      <div class="res-item">
        <p class="title">Грамотность чтения</p>
        <p class="num"><span :class="color">10</span> / 15</p>
      </div>
      <div class="res-item">
        <p class="title">Математическая грамотность</p>
        <p class="num"><span :class="color">10</span> / 15</p>
      </div>
      <div class="res-item">
        <p class="title">Математика</p>
        <p class="num"><span :class="color">10</span> / 15</p>
      </div>
      <div class="res-item">
        <p class="title">Физика</p>
        <p class="num"><span :class="color">10</span> / 15</p>
      </div>
    </div>
    <div class="res-footer">
      <p><span :class="color">60</span> из 140</p>
    </div>
  </div>
</template>

<style scoped>
.res {
  @apply rounded-lg overflow-hidden flex flex-col gap-3.5 p-3;
  min-height: 220px;
}

.res-head {
  @apply w-full flex;

  p {
    @apply text-sm font-semibold m-0 ml-2.5;
  }

  svg {
    width: 20px;
    height: 20px;
  }
}
.res-body {
  @apply flex flex-col w-full gap-3 pl-2;
}
.res-item {
  @apply flex justify-between text-xs;
  .title {
    @apply text-gray-500 ;
  }
  .num {
    @apply text-gray-500;
    span {
      @apply font-semibold;
    }
  }
}
.res-footer {
  @apply w-full flex justify-end text-sm;
  p {
    @apply text-gray-500;
    span {
      @apply font-semibold;
    }
  }
}
</style>