<template>
  <div>
    <div ref="heatmapContainer" class="min-h-[150px]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CalHeatmap from 'cal-heatmap';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import Legend from 'cal-heatmap/plugins/Legend';

// 1) Подключаем стили (делайте это ОДИН раз в проекте, например в main.ts)
import 'cal-heatmap/cal-heatmap.css';          // :contentReference[oaicite:0]{index=0}

// 2) Правильная работа локали Day.js
import dayjs from 'dayjs';
import 'dayjs/locale/ru';                      // :contentReference[oaicite:1]{index=1}
dayjs.locale('ru');

const heatmapContainer = ref(null);
const MAX = 50;

/* ------------------ генерация тестовых данных ------------------ */
function generateData(start = '2025-01-01', months = 12, max = MAX) {
  const obj = {};
  const startDate = new Date(start);
  const end = new Date(startDate);
  end.setMonth(end.getMonth() + months);

  for (let d = new Date(startDate); d <= end; d.setDate(d.getDate() + 1)) {
    if (Math.random() < 0.7) {
      obj[Math.floor(d.getTime() / 1000)] = Math.floor(Math.random() * max) + 1;
    }
  }
  return obj;
}

const rawData = generateData();

// Cal-Heatmap v4 ждёт **массив объектов** → трансформируем
const dataArr = Object.entries(rawData).map(([ts, value]) => ({
  ts: +ts * 1000,   // миллисекунды!
  value,
}));

/* ------------------ отрисовка ------------------ */
onMounted(() => {
  new CalHeatmap().paint({
    itemSelector: heatmapContainer.value,
    range: 12,
    date: {
      start: new Date('2025-01-01'),
      locale: 'ru',                       // правильный код локали  :contentReference[oaicite:2]{index=2}
    },
    domain: {
      type: 'month',
      gutter: 4,
      padding: [0, 0, 10, 0],
      label: { text: 'MMM', position: 'top', textAlign: 'start', offset: { x: 10, y: 0 } },
    },
    subDomain: { type: 'day', width: 11, height: 11, radius: 2, gutter: 2 },
    data: {
      source: dataArr,                   // массив объектов  :contentReference[oaicite:3]{index=3}
      x: d => d.ts,
      y: 'value',
      groupY: 'sum',
      defaultValue: 0,                   // пустые дни = 0
    },
    scale: {
      color: {
        type: 'quantize',
        domain: [0, MAX],
        range: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
      },
    },
    animationDuration: 300,
    plugins: [
      [Tooltip, {text: (date, value, dayjsDate) => `${value || 0} активности – ${dayjsDate.format('LL')}`}],
      [Legend, {title: 'Уровень активности', align: 'center', verticalAlign: 'bottom'}],
    ],
  });
});
</script>

<!-- Доп-стили при желании -->
<style scoped>
h2 {
  color: #333;
}
</style>
