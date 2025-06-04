<script>
import Chart from 'primevue/chart';

export default {
  name: "TestResult",
  components: { Chart },
  data() {
    return {
      chartData: null,
      ans: null,
      chartOptions: {
        cutout: '60%'
      },
      totalQuestions: 0,
      correctCount: 0,
      incorrectCount: 0,
      unansweredCount: 0,
      testTime: 'Н/Д'
    };
  },
  mounted() {
    const storedResults = localStorage.getItem('testResults');
    if (storedResults) {
      const results = JSON.parse(storedResults);
      this.totalQuestions = results.totalQuestions;
      this.correctCount = results.correctCount;
      this.incorrectCount = results.incorrectCount;
      this.unansweredCount = results.unansweredCount;
      this.testTime = results.timeLeft ? this.formatTime(results.totalTime - results.timeLeft) : '1 час';


      this.chartData = this.setChartData(results.correctCount, results.incorrectCount, results.unansweredCount);
      this.chartOptions = this.setChartOptions();

      if (results.wrongAnswersDetails && results.wrongAnswersDetails.length > 0) {
        this.fetchExplanations(results.wrongAnswersDetails);
      } else {
        this.ans = [];
      }
    } else {
      this.ans = [];
    }
  },
  methods: {
    fetchExplanations(wrongAnswersDetails){
      fetch('http://localhost:3000/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ detailedWrongAnswers: wrongAnswersDetails })
      })
        .then(res => res.json())
        .then(data => {
          console.log('Ответ GPT:', data.result);
          try {
            this.ans = JSON.parse(data.result);
          } catch (e) {
            console.error("Ошибка парсинга ответа GPT:", e);
            this.ans = [{ id: "Ошибка", explanation: "Не удалось обработать ответ от AI." }];
          }
        })
        .catch(error => {
            console.error("Ошибка при запросе объяснений:", error);
            this.ans = [{ id: "Ошибка", explanation: "Ошибка при запросе объяснений к AI." }];
        });
    },
    setChartData(correct, incorrect, unanswered) {
      const documentStyle = getComputedStyle(document.body);
      return {
        labels: ['Правильно', 'Неправильно', 'Без ответа'],
        datasets: [
          {
            data: [correct, incorrect, unanswered],
            backgroundColor: [
              documentStyle.getPropertyValue('--p-green-500') || '#10B981',
              documentStyle.getPropertyValue('--p-red-500') || '#EF4444',
              documentStyle.getPropertyValue('--p-yellow-500') || '#F59E0B'
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-green-400') || '#34D399',
              documentStyle.getPropertyValue('--p-red-400') || '#F87171',
              documentStyle.getPropertyValue('--p-yellow-400') || '#FBBF24'
            ]
          }
        ]
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color') || '#4B5563';

      return {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        cutout: '60%'
      };
    },
    formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
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
        <p class="value">{{ totalQuestions }}</p>
      </div>
      <div class="item">
        <p class="title">Правильно</p>
        <p class="value">{{ correctCount }}</p>
      </div>
      <div class="item">
        <p class="title">Неправильно</p>
        <p class="value">{{ incorrectCount }}</p>
      </div>
      <div class="item">
        <p class="title">Вопросы, которые не были отмечены</p>
        <p class="value">{{ unansweredCount }}</p>
      </div>
      <div class="item">
        <p class="title">Затраченное время</p>
        <p class="value">{{ testTime }}</p>
      </div>
    </div>
  </div>
  <div class="w-full min-h-96 overflow-y-auto bg-indigo-50 p-4">
    <p v-if="!ans" class="text-center text-gray-500">AI анализирует ваши ответы...</p>
    <div v-else-if="ans.length === 0 && incorrectCount === 0 && unansweredCount === 0" class="text-center text-green-600 font-semibold">
      🎉 Поздравляем! Все ответы верны! 🎉
    </div>
     <div v-else-if="ans.length === 0 && (incorrectCount > 0 || unansweredCount > 0)" class="text-center text-red-500 font-semibold">
        Не удалось получить объяснения от AI.
    </div>
    <div v-else>
      <h2 class="text-xl font-semibold mb-3 text-indigo-700">Анализ ответов:</h2>
      <div v-for="s in ans" :key="s.id" class="mb-4 p-3 bg-white rounded-lg shadow">
        <p class="font-bold text-indigo-600">Разбор вопроса (ID: {{s.id}})</p>
        <div class="mt-1 text-gray-700" v-html="s.explanation"></div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.item {
  @apply flex w-full justify-between text-sm py-3 items-center;
}
.item .title { /* Исправлено для Tailwind JIT */
  @apply text-gray-600;
}
.item .value { /* Исправлено для Tailwind JIT */
  @apply text-indigo-700 font-medium min-w-7 h-7 px-1.5 rounded-lg bg-indigo-100 flex text-center items-center justify-center;
}
.item + .item {
  @apply border-0 border-solid border-t border-gray-200;
}
</style>