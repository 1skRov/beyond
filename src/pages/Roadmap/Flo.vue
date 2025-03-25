<template>
  <div style="width: 100%; height: 100vh">
    <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        fit-view
        :node-types="customNodeTypes"
    >
      <Background />
      <Controls />
    </VueFlow>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {
  VueFlow,
  MarkerType
} from '@vue-flow/core';
import CustomNode from './CustomNode.vue';
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'

export default defineComponent({
  components: { VueFlow, Background, Controls },
  setup() {
    const nodes = ref([
      {
        id: '1',
        type: 'custom',
        label: 'Восстание Кенесары Касымова',
        position: { x: 100, y: 100 },
        data: {
          title: 'Восстание Кенесары',
          description: 'Крупнейшее антиколониальное восстание в 1837–1847 гг.',
          tags: ['Обязательно', 'Теория', 'Практика'],
          materials: [
            { type: 'video', title: 'Лекция', url: '#' },
            { type: 'test', title: 'Тест', url: '#' }
          ],
          status: 'not_started',
          difficulty: 'medium'
        },
      },
      {
        id: '2',
        type: 'custom',
        label: 'Колониальная политика России',
        position: { x: 400, y: 100 },
        data: {
          title: 'Колониальная политика',
          description: 'Изучение административных и политических реформ 19 века.',
          tags: ['Рекомендовано', 'Теория'],
          materials: [
            { type: 'pdf', title: 'Доклад', url: '#' }
          ],
          status: 'in_progress',
          difficulty: 'easy'
        },
      },
      {
        id: '3',
        type: 'custom',
        label: 'Реформы 1867-1868 гг.',
        position: { x: 700, y: 100 },
        data: {
          title: 'Реформы 1867-1868',
          description: 'Законодательные изменения в управлении казахскими землями.',
          tags: ['Обязательно'],
          materials: [],
          status: 'not_started',
          difficulty: 'hard'
        },
      },
      {
        id: '4',
        type: 'custom',
        label: 'Восстание Сырыма Датова',
        position: { x: 100, y: 300 },
        data: {
          title: 'Сырым Датов',
          description: 'Один из ранних лидеров сопротивления.',
          tags: ['Дополнительно'],
          materials: [],
          status: 'completed',
          difficulty: 'easy'
        }
      },
      {
        id: '5',
        type: 'custom',
        label: 'Торговля в степи',
        position: { x: 400, y: 300 },
        data: {
          title: 'Экономика 19 века',
          description: 'Роль торговли и экономики в Казахстане.',
          tags: ['Рекомендовано', 'Теория'],
          status: 'not_started',
          difficulty: 'medium'
        }
      },
      {
        id: '6',
        type: 'custom',
        label: 'Просвещение и ислам',
        position: { x: 700, y: 300 },
        data: {
          title: 'Религия и образование',
          description: 'Исламизация и открытие медресе в 19 веке.',
          tags: ['Дополнительно'],
          status: 'not_started',
          difficulty: 'medium'
        }
      },
      {
        id: '7',
        type: 'custom',
        label: 'Письменность и культура',
        position: { x: 1000, y: 100 },
        data: {
          title: 'Культурное развитие',
          description: 'Расцвет казахской письменности и литературы.',
          tags: ['Теория'],
          status: 'not_started',
          difficulty: 'easy'
        }
      }
    ]);

    const edges = ref([
      { id: 'e1-2', source: '1', target: '2', markerEnd: MarkerType.ArrowClosed },
      { id: 'e2-3', source: '2', target: '3', markerEnd: MarkerType.ArrowClosed },
      { id: 'e1-4', source: '1', target: '4', markerEnd: MarkerType.ArrowClosed },
      { id: 'e2-5', source: '2', target: '5', markerEnd: MarkerType.ArrowClosed },
      { id: 'e3-6', source: '3', target: '6', markerEnd: MarkerType.ArrowClosed },
      { id: 'e6-7', source: '6', target: '7', markerEnd: MarkerType.ArrowClosed }
    ]);

    const customNodeTypes = {
      custom: CustomNode
    };

    return {
      nodes,
      edges,
      customNodeTypes
    };
  }
});
</script>

<style>
</style>