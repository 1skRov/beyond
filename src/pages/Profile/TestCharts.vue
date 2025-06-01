<template>
  <v-chart v-if="entStackedOption" :option="entStackedOption" autoresize class="h-[500px] w-full" />
</template>

<script setup>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent, GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
import { computed } from 'vue'

use([BarChart, TooltipComponent, LegendComponent, GridComponent, CanvasRenderer])

const props = defineProps({ ent: Array })

const entStackedOption = computed(() => {
  if (!props.ent || !props.ent.length) return null

  const subjectsSet = new Set()
  props.ent.forEach(entry => {
    Object.keys(entry.scores || {}).forEach(subject => subjectsSet.add(subject))
  })
  const subjects = Array.from(subjectsSet).sort()

  const series = subjects.map(subject => ({
    name: subject,
    type: 'bar',
    stack: 'total',
    label: {
      show: true,
      position: 'inside',
      formatter: ({ value }) => (value ? value : '')
    },
    emphasis: { focus: 'series' },
    data: props.ent.map(entry => entry.scores?.[subject] ?? 0)
  }))

  const dates = props.ent.map(entry =>
    new Date(entry.submitted_at).toLocaleDateString('ru-RU')
  )

  return {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { top: 0 },
    grid: { left: 120, right: 40, top: 40, bottom: 20 },
    yAxis: {
      type: 'category',
      data: dates,
      inverse: true,
      axisTick: { show: false }
    },
    xAxis: { type: 'value', max: 140, name: 'Баллы' },
    series
  }
})
</script>
