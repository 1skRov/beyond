<script>
export default {
  name: "OptionsInformation",
  props: ["sport"],
  data() {
    return {
      value: '0',
      faculty: null,
    }
  },
  mounted(){
    console.log(this.sport)
  }
}
</script>

<template>
  <div>
    <div class="flex my-2 gap-3">
      <button @click="value = '0'">Факультеты</button>
      <button @click="value = '1'">Общежитие</button>
      <button @click="value = '2'">Спорт</button>
    </div>

    <p v-if="value === 0">
      <Button size="small">Создать факультет</Button>
    </p>
    <p v-if="value === 1">
    </p>
    <p v-if="value === 2" v-html="sport">
    </p>
  </div>
</template>

<style scoped lang="scss">
button {
  @apply border-none w-[120px] py-1.5 bg-blue-900 text-blue-100 text-sm font-medium rounded-md duration-200 ease-in cursor-pointer;

  &:hover {
    @apply bg-blue-100 text-blue-900;
  }

  .active {
    @apply bg-red-100;
  }
}
</style>