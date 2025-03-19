<script>
export default {
  name: "TestListitem"
}
</script>

<template>
  <div class="test">
    <div class="icon">
      <i class="fi fi-ss-test"></i>
    </div>
    <div class="flex items-center justify-between w-full">
      <div class="info">
        <p class="title">Математика, основы тригонометрии</p>
        <p class="desc"><span>Евгений Шевченко</span>
          <Tag icon="pi pi-clock" severity="warn" value="40 минут" style="font-size: 10px; margin-left: 36px;"
               rounded></Tag>
        </p>
      </div>
      <div class="const"><span class="font-medium text-gray-500 text-xs">25 вопросов</span></div>
    </div>
  </div>
</template>

<style scoped>
.test {
  @apply p-3 flex gap-3 bg-blue-50 w-full rounded;

  .icon {
    @apply w-10 h-10 bg-indigo-200 flex items-center justify-center rounded-md;

    i {
      font-size: 20px;
      @apply text-blue-600;
    }
  }

  .info {
    @apply flex flex-col gap-1.5;
  }

  .const {
    @apply flex justify-end;
  }
}
.test:hover {
  @apply shadow-lg shadow-indigo-100/100 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5;
}
.desc {
  @apply text-gray-500 text-xs m-0;
}

.title {
  @apply text-gray-700 font-medium text-sm m-0;
}

</style>