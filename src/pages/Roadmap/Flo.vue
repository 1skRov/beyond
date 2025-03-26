<template>
  <div style="width: 100%; height: 100vh">
    <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        fit-view
        :node-types="customNodeTypes"
    >
      <template #node-custom="{ data }">
        <CustomNode :data="data" @open-drawer="openDrawer" />
      </template>
      <Background />
      <Controls />
    </VueFlow>

    <Drawer v-model:visible="drawerVisible" position="right" :modal="true">
      <h3>{{ selectedNode?.title }}</h3>
      <Dropdown
          v-model="selectedNode.status"
          :options="statusOptions"
          placeholder="Выберите статус"
          option-label="label"
          option-value="value"
          class="w-full mt-3"
          @change="updateNodeStatus"
      />
    </Drawer>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {
  VueFlow,
  MarkerType
} from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import CustomNode from './CustomNode.vue';

export default defineComponent({
  components: {
    VueFlow,
    Background,
    Controls,
    CustomNode,
  },
  setup() {
    const nodes = ref([
      {
        id: '1',
        type: 'custom',
        label: 'Введение в колониальную эпоху',
        position: { x: 100, y: 100 },
        data: {
          title: 'Введение в колониальную эпоху',
          description: 'Основы колониального периода в истории Казахстана.',
          tags: ['start'],
          materials: [],
          status: 'not_started',
          difficulty: 'easy'
        },
      },
      {
        id: '2',
        type: 'custom',
        label: 'Восстание Кенесары',
        position: { x: 400, y: 50 },
        data: {
          title: 'Восстание Кенесары',
          description: 'Антиколониальное движение 1837–1847 гг.',
          tags: ['персональная рекомендация'],
          materials: [],
          status: 'not_started',
          difficulty: 'medium'
        },
      },
      {
        id: '3',
        type: 'custom',
        label: 'Административные реформы',
        position: { x: 400, y: 150 },
        data: {
          title: 'Административные реформы',
          description: 'Изменения управления в 19 веке.',
          tags: [],
          materials: [],
          status: 'in_progress',
          difficulty: 'medium'
        },
      },
      {
        id: '4',
        type: 'custom',
        label: 'Ислам и просвещение',
        position: { x: 700, y: 20 },
        data: {
          title: 'Ислам и просвещение',
          description: 'Распространение исламского образования.',
          tags: ['не обязательно, но интересно'],
          materials: [],
          status: 'not_started',
          difficulty: 'easy'
        },
      },
      {
        id: '5',
        type: 'custom',
        label: 'Реформы 1867-1868 гг.',
        position: { x: 700, y: 100 },
        data: {
          title: 'Реформы 1867-1868',
          description: 'Изменение административного устройства.',
          tags: ['альтернатива'],
          materials: [],
          status: 'not_started',
          difficulty: 'hard'
        },
      },
      {
        id: '6',
        type: 'custom',
        label: 'Экономические изменения',
        position: { x: 700, y: 180 },
        data: {
          title: 'Экономические изменения',
          description: 'Развитие торговли и землевладения.',
          tags: [],
          materials: [],
          status: 'completed',
          difficulty: 'medium'
        },
      },
      {
        id: '7',
        type: 'custom',
        label: 'Культура и письменность',
        position: { x: 1000, y: 100 },
        data: {
          title: 'Культура и письменность',
          description: 'Формирование казахской идентичности.',
          tags: ['персональная рекомендация'],
          materials: [],
          status: 'not_started',
          difficulty: 'easy'
        },
      }
    ]);


    const edges = ref([
      { id: 'e1-2', source: '1', target: '2', markerEnd: MarkerType.ArrowClosed },
      { id: 'e1-3', source: '1', target: '3', markerEnd: MarkerType.ArrowClosed },
      { id: 'e2-4', source: '2', target: '4', markerEnd: MarkerType.ArrowClosed },
      { id: 'e2-5', source: '2', target: '5', markerEnd: MarkerType.ArrowClosed },
      { id: 'e3-6', source: '3', target: '6', markerEnd: MarkerType.ArrowClosed },
      { id: 'e6-7', source: '6', target: '7', markerEnd: MarkerType.ArrowClosed }
    ]);


    const drawerVisible = ref(false);
    const selectedNode = ref({});
    const statusOptions = [
      {label: 'Не начат', value: 'not_started'},
      {label: 'В процессе', value: 'in_progress'},
      {label: 'Завершён', value: 'completed'}
    ];

    const updateNodeStatus = () => {
      const index = nodes.value.findIndex(n => n.data.title === selectedNode.value.title);
      if (index !== -1) {
        nodes.value[index].data.status = selectedNode.value.status;
      }
    };

    const openDrawer = (data) => {
      selectedNode.value = {...data};
      drawerVisible.value = true;
    };

    const customNodeTypes = {custom: CustomNode};

    return {
      nodes,
      edges,
      drawerVisible,
      selectedNode,
      statusOptions,
      openDrawer,
      updateNodeStatus,
      customNodeTypes
    };
  }
});
</script>

<style>
/* PrimeVue или Tailwind стили можно подключить здесь */
</style>
