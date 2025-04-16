<script>
export default {
  name: "CourseFilters",
  data() {
    return {
      value: null,
      options: [
        {name: 'По рейтингу', value: 1},
        {name: 'По числу просмотров', value: 2},
        {name: 'По продолжительности', value: 3}
      ],
      inputValue: null,
    }
  }
}
</script>

<template>
  <div class="w-full pt-2 pb-5 flex items-center justify-between">
    <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple"
                  size="small"/>
    <IconField>
      <InputIcon class="pi pi-search text-xs"/>
      <InputText v-model="inputValue" placeholder="Поиск" size="small"/>
    </IconField>
  </div>
</template>

<style scoped>

</style>