<script>
export default {
  name: "TestResult",
  data() {
    return {
      chartData: null,
      ans: null,
      chartOptions: {
        cutout: '60%'
      }
    };
  },
  mounted() {
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
    this.server();
  },
  methods: {
    server(){
      const wrongAnswers = [1, 2, 3, 4, 5];

      fetch('http://localhost:3000/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wrongAnswers })
      })
          .then(res => res.json())
          .then(data => {
            console.log('Ответ GPT:', data.result);
            this.ans = JSON.parse(data.result);
          });
    },
    setChartData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [540, 325, 702],
            backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
          }
        ]
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');

      return {
        plugins: {
          legend: {
            labels: {
              cutout: '60%',
              color: textColor
            }
          }
        }
      };
    }
  }
}
</script>

<template>
<div class="w-full flex">
  <div style="width: 600px;" class="p-3">
    <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
    <div class="flex flex-col">
      <div class="item">
        <p class="title">Количество вопросов</p>
        <p class="value">18</p>
      </div>
      <div class="item">
        <p class="title">Правильно</p>
        <p class="value">5</p>
      </div>
      <div class="item">
        <p class="title">Неправильно</p>
        <p class="value">10</p>
      </div>
      <div class="item">
        <p class="title">Вопросы которые не были отмечены</p>
        <p class="value">3</p>
      </div>
      <div class="item">
        <p class="title">Время на тест</p>
        <p class="value">1 час</p>
      </div>
    </div>
  </div>
  <div class="w-full min-h-96 overflow-y-auto bg-indigo-50">
    <p v-if="!ans">AI думает...</p>
    <div v-else>
      <p>анализ неправильных ответов</p>
      <div v-for="s in ans" class="mb-2.5 font-medium text-sm">
        <p>{{s.id}} вопрос</p>
        <p>{{s.explanation}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.item {
  @apply flex w-full justify-between text-sm py-3 items-center;
  .title {
    @apply text-gray-600;
  }
  .value {
    @apply text-indigo-700 font-medium min-w-7 h-7 px-1.5 rounded-lg bg-indigo-100 flex text-center items-center justify-center;
  }
}
.item + .item {
  @apply border-0 border-solid border-t border-gray-200;
}
</style>