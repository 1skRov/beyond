<script>
import TestListitem from "@/pages/Test/TestListitem.vue";

export default {
  name: "TestList",
  components: {TestListitem},
  data() {
    return {
      value: 'С временем',
      selectedCity: null,
      cities: [
        {name: 'Сложный', code: 'NY'},
        {name: 'Простой', code: 'RM'},
        {name: 'Средний', code: 'LDN'},
      ],
      options: ['С временем', 'Без времени']
    }
  },
  computed: {},
  methods: {
    startTest(){
      const routeData = this.$router.resolve({ name: 'testItem' });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<template>
  <div>
    <div class="mb-5 w-full shadow-lg shadow-blue-100/50">
      <Toolbar>
        <template #start>
          <span class="text-lg font-bold text-gray-600">Математика</span>
        </template>

        <template #center>
          <div class="flex gap-2.5 items-center">
            <FloatLabel class="w-full md:w-56" variant="on">
              <Select v-model="selectedCity" inputId="on_label" :options="cities" optionLabel="name" class="w-full text-sm" size="small" />
              <label for="on_label" class="text-sm">Выберите сложность</label>
            </FloatLabel>
            <SelectButton v-model="value" :options="options" size="small" class="text-sm"/>
          </div>
        </template>
        <template #end>
          <IconField>
            <InputIcon>
              <i class="pi pi-search"/>
            </InputIcon>
            <InputText placeholder="Найти" size="small" class="text-sm"/>
          </IconField>
        </template>
      </Toolbar>
    </div>
    <div class="flex gap-5">
      <div class="w-1/2 flex flex-col gap-3">
        <div class="flex flex-col gap-3">
          <test-listitem @click="startTest"></test-listitem>
          <test-listitem></test-listitem>
          <test-listitem></test-listitem>
          <test-listitem></test-listitem>
          <test-listitem></test-listitem>
          <test-listitem></test-listitem>
          <test-listitem></test-listitem>
          <test-listitem></test-listitem>
        </div>
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]" class="text-xs"></Paginator>
      </div>
      <div class="w-1/2 bg-gray-50 border border-gray-100 rounded p-3 flex flex-col gap-3.5">
        <p class="text-lg text-gray-600 font-medium">Информация про тест</p>
        <div class="text-lg text-gray-600">
          Автор: Евгений Шевченко
        </div>
        <div class="text-lg text-gray-600">
          название: Математика основы тригонометрии
        </div>
        <div class="text-lg text-gray-600">
          ограничение по времени: 40 минут
        </div>
        <div class="text-lg text-gray-600">
          количество вопросов: 25
        </div>
        <div class="text-lg text-gray-600">
          459 пользователей прошли этот курс
        </div>
        <div class="flex justify-end items-center">
          <Button label="Начать тест" severity="success" variant="outlined" size="small" class="test-xs"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>