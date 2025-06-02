<template>
  <div>
    <div ref="resultChart" style="width: 100%; height: 400px; margin-bottom: 40px" />
    <div ref="progressChart" style="width: 100%; height: 400px" />

    <Drawer v-model:visible="drawerVisible" position="right" :modal="true" :header="drawerTitle">
      <div>
        <p>Тест ID: {{ drawerData.testId }}</p>
        <p>Лёгкий: {{ drawerData.easy }}</p>
        <p>Средний: {{ drawerData.medium }}</p>
        <p>Сложный: {{ drawerData.hard }}</p>
      </div>
    </Drawer>
  </div>
</template>

<script setup>
import Highcharts from 'highcharts';
import {ref, onMounted} from 'vue';

const testResults = [
  {testId: 'Test 1', easy: 3, medium: 2, hard: 1},
  {testId: 'Test 2', easy: 4, medium: 3, hard: 2},
];

const progressData = [
  {date: '2025-05-01', easy: 2, medium: 1, hard: 0},
  {date: '2025-05-10', easy: 3, medium: 2, hard: 1},
  {date: '2025-05-20', easy: 4, medium: 3, hard: 2},
];

const resultChart = ref(null);
const progressChart = ref(null);
const drawerVisible = ref(false);
const drawerData = ref({});
const drawerTitle = ref('Информация о тесте');

const openDrawer = (index) => {
  const test = testResults[index];
  drawerData.value = test;
  drawerTitle.value = `Результат по ${test.testId}`;
  drawerVisible.value = true;
};

onMounted(() => {
  Highcharts.chart(resultChart.value, {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Результаты по типам вопросов'
    },
    xAxis: {
      categories: testResults.map(t => t.testId),
      title: {text: null}
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Количество правильных',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        point: {
          events: {
            click: function () {
              openDrawer(this.index);
            }
          }
        }
      }
    },
    series: [
      {
        name: 'Лёгкий',
        data: testResults.map(t => t.easy)
      },
      {
        name: 'Средний',
        data: testResults.map(t => t.medium)
      },
      {
        name: 'Сложный',
        data: testResults.map(t => t.hard)
      }
    ]
  });

  Highcharts.chart(progressChart.value, {
    chart: {type: 'line'},
    title: {text: 'Прогресс по типам вопросов'},
    xAxis: {
      categories: progressData.map(p => p.date)
    },
    yAxis: {
      title: {text: 'Правильные ответы'}
    },
    series: [
      {
        name: 'Лёгкий',
        data: progressData.map(p => p.easy)
      },
      {
        name: 'Средний',
        data: progressData.map(p => p.medium)
      },
      {
        name: 'Сложный',
        data: progressData.map(p => p.hard)
      }
    ]
  });
});
</script>
