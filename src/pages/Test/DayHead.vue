<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">Активность пользователя</h2>
    <div ref="heatmapContainer"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import CalHeatmap from 'cal-heatmap'
import Tooltip from 'cal-heatmap/plugins/Tooltip'
import Legend from 'cal-heatmap/plugins/Legend'

onMounted(() => {
  const cal = new CalHeatmap()

  cal.paint({
    range: 12,
    start: new Date('2025-01-01'),
    locale: 'ru-RU',
    domain: {
      type: 'month',
      // label: {
      //   text: 'LLLL', // январь, февраль и т.п.
      //   position: 'top',
      //   textAlign: 'middle',
      // },
    },
    subDomain: {
      type: 'day',
      label: '',
      radius: 4,
      width: 15,
      height: 15,
    },
    data: {
      source: testData,
      type: 'json',
    },
    scale: {
      color: {
        type: 'quantize',
        domain: [0, 10],
        range: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
      },
    },
    itemSelector: heatmapContainer.value,
    animationDuration: 500,
    plugins: [
      new Tooltip(),
      new Legend({tickSize: 0, width: 100}),
    ],
  })

})


// 📌 Тестовые данные: объект формата { timestamp: count }
const testData = {
  [new Date('2025-01-01').getTime() / 1000]: 1,
  [new Date('2025-01-02').getTime() / 1000]: 3,
  [new Date('2025-01-03').getTime() / 1000]: 6,
  [new Date('2025-01-05').getTime() / 1000]: 9,
  [new Date('2025-01-10').getTime() / 1000]: 4,
  [new Date('2025-02-01').getTime() / 1000]: 7,
  [new Date('2025-03-15').getTime() / 1000]: 2,
}

const heatmapContainer = ref(null)
</script>

<style scoped>
/* необязательные стили */
h2 {
  color: #333;
}
</style>
