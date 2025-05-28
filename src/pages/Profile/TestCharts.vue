<template>
  <v-chart :option="entStackedOption" autoresize class="h-[500px] w-full" />
</template>

<script setup>
import {use} from 'echarts/core'
import {BarChart} from 'echarts/charts'
import {TooltipComponent, LegendComponent, GridComponent} from 'echarts/components'
import {CanvasRenderer} from 'echarts/renderers'
import VChart from 'vue-echarts'

// подключаем только то, что действительно нужно
use([BarChart, TooltipComponent, LegendComponent, GridComponent, CanvasRenderer])

/* ------------  входные данные -------------- */
const attempts = [
  {
    date: '2024-06-01',
    history: 25,
    literacy: 26,          // «грамотность чтения»
    mathLit: 22,           // «математическая грамотность»
    physics: 18,
    math: 28
  },
  {
    date: '2024-07-15',
    history: 28,
    literacy: 24,
    mathLit: 24,
    physics: 20,
    math: 30
  },
  {
    date: '2024-08-20',
    history: 30,
    literacy: 27,
    mathLit: 26,
    physics: 22,
    math: 32
  },
  {
    date: '2024-10-05',
    history: 32,
    literacy: 28,
    mathLit: 28,
    physics: 24,
    math: 33
  },
  {
    date: '2024-11-15',
    history: 34,
    literacy: 29,
    mathLit: 30,
    physics: 25,
    math: 34
  }
]

/* ------------  конфигурация графика -------------- */
const subjects = [
  {key: 'history', name: 'История', color: '#3b5fb8'},
  {key: 'literacy', name: 'Чит. грамотность', color: '#8bc34a'},
  {key: 'mathLit', name: 'Матем. грамотность', color: '#ffc107'},
  {key: 'physics', name: 'Физика', color: '#ee6666'},
  {key: 'math', name: 'Математика', color: '#59b5f9'}
]

const entStackedOption = {
  tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
  legend: {top: 0},
  grid: {left: 120, right: 40, top: 40, bottom: 20},
  // ось Y — категории (даты), потому график горизонтальный
  yAxis: {
    type: 'category',
    data: attempts.map(a => a.date),
    inverse: true,                  // последние попытки сверху (как на картинке)
    axisTick: {show: false}
  },
  xAxis: {type: 'value', max: 140, name: 'Баллы'},
  series: subjects.map(s => ({
    name: s.name,
    type: 'bar',
    stack: 'total',
    label: {
      show: true,
      position: 'inside',
      formatter: ({value}) => (value ? value : '')
    },
    emphasis: {focus: 'series'},
    itemStyle: {color: s.color},
    data: attempts.map(a => a[s.key])
  }))
}
</script>
