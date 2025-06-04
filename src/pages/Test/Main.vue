<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
  {
    name: 'Australia',
    code: 'AU',
    states: [
      {
        name: 'New South Wales',
        cities: [
          { cname: 'Sydney', code: 'A-SY' },
          { cname: 'Newcastle', code: 'A-NE' },
          { cname: 'Wollongong', code: 'A-WO' }
        ]
      },
      {
        name: 'Queensland',
        cities: [
          { cname: 'Brisbane', code: 'A-BR' },
          { cname: 'Townsville', code: 'A-TO' }
        ]
      }
    ]
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Quebec',
        cities: [
          { cname: 'Montreal', code: 'C-MO' },
          { cname: 'Quebec City', code: 'C-QU' }
        ]
      },
      {
        name: 'Ontario',
        cities: [
          { cname: 'Ottawa', code: 'C-OT' },
          { cname: 'Toronto', code: 'C-TO' }
        ]
      }
    ]
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      {
        name: 'California', cities: [
          { cname: 'Los Angeles', code: 'US-LA' },
          { cname: 'San Diego', code: 'US-SD' },
          { cname: 'San Francisco', code: 'US-SF' }
        ]
      },
      {
        name: 'Florida',
        cities: [
          { cname: 'Jacksonville', code: 'US-JA' },
          { cname: 'Miami', code: 'US-MI' },
          { cname: 'Tampa', code: 'US-TA' },
          { cname: 'Orlando', code: 'US-OR' }
        ]
      },
      {
        name: 'Texas',
        cities: [
          { cname: 'Austin', code: 'US-AU' },
          { cname: 'Dallas', code: 'US-DA' },
          { cname: 'Houston', code: 'US-HO' }
        ]
      }
    ]
  }
]);
const value = ref('Одиночный');
const options = ref(['Одиночный', 'Несколько типов']);
</script>

<template>
  <div class="test-page">
    <div class="test-filters">
      <div class="filter-item">
        <span>Поиск</span>
        <AutoComplete size="small" class="w-full" />
      </div>
      <div class="filter-item">
        <span>Тип теста</span>
        <SelectButton v-model="value" :options="options" size="small" class="w-full" />
      </div>
      <div class="filter-item">
        <span>Уровни сложности которые могут присутствовать в тесте</span>
        <div class="flex w-full gap-3 h-full items-center">
          <div class="flex items-center gap-2">
            <Checkbox inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1"> Легкий </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2"> Средний </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3"> Сложный </label>
          </div>
        </div>
      </div>
    </div>
    <div class="test-content"></div>
    <router-view />
  </div>
</template>
<style scoped>
.test-page {
  @apply w-full h-full;

  .test-filters {
    @apply w-full p-3 bg-white rounded-md flex;

    .filter-item {
      @apply flex flex-col gap-0.5 min-w-[320px];

      span {
        @apply text-xs text-slate-600;
      }
    }
  }
}
</style>
