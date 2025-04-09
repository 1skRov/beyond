<template>
  <div style="width: 100%; height: 100vh">
    <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        fit-view
        :node-types="customNodeTypes"
    >
      <template #node-custom="{ data }">
        <CustomNode :data="data" @open-drawer="openDrawer"/>
      </template>
      <Background/>
      <Controls/>
    </VueFlow>

    <Drawer v-model:visible="drawerVisible" position="right" :modal="true">
      <div class="p-4 space-y-4">
        <h2 class="text-xl font-bold">{{ selectedNode?.title }}</h2>

        <p class="text-sm text-gray-600" v-if="selectedNode?.description">
          {{ selectedNode.description }}
        </p>

        <div v-if="selectedNode?.tags?.length" class="flex flex-wrap gap-2">
      <span
          v-for="tag in selectedNode.tags"
          :key="tag"
          class="text-xs px-2 py-1 rounded bg-gray-200"
      >
        {{ tag === 'start' ? '🚀 Старт' : tag }}
      </span>
        </div>
        <AutoComplete v-model="selectedNode.status" dropdown :suggestions="statusOptions" @complete="updateNodeStatus" class="w-full"/>
      </div>
    </Drawer>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {
  VueFlow,
  MarkerType
} from '@vue-flow/core';
import {Background} from '@vue-flow/background';
import {Controls} from '@vue-flow/controls';
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
      // Центральный узел
      {
        id: '0',
        type: 'custom',
        label: 'История Казахстана',
        position: {x: 800, y: 50},
        data: {title: 'История Казахстана', tags: ['start'], status: 'not_started'}
      },

      // Основные ветки
      {
        id: '1',
        type: 'custom',
        label: 'Древность',
        position: {x: 250, y: 200},
        data: {title: 'Древность', status: 'not_started'}
      },
      {
        id: '2',
        type: 'custom',
        label: 'Средние века',
        position: {x: 700, y: 200},
        data: {title: 'Средние века', status: 'not_started', tags: ['персональная рекомендация'],}
      },
      {
        id: '3',
        type: 'custom',
        label: 'Колониальный период',
        position: {x: 1150, y: 200},
        data: {title: 'Колониальный период', status: 'not_started', tags: ['альтернатива'],}
      },
      {
        id: '4',
        type: 'custom',
        label: 'Современность',
        position: {x: 800, y: 500},
        data: {title: 'Современность', status: 'not_started'}
      },

      // Древность → потомки
      {
        id: '5',
        type: 'custom',
        label: 'Сакские племена',
        position: {x: 70, y: 350},
        data: {title: 'Сакские племена', status: 'not_started'}
      },
      {
        id: '6',
        type: 'custom',
        label: 'Гунны и хунну',
        position: {x: 250, y: 450},
        data: {title: 'Гунны и хунну', status: 'not_started'}
      },
      {
        id: '7',
        type: 'custom',
        label: 'Зарождение государственности',
        position: {x: 400, y: 450},
        data: {
          title: 'Зарождение государственности',
          status: 'not_started',
          tags: ['не обязательно, но интересно'],
          description: 'Переход от племенного строя к ранней государственности.',
        }
      },

      // Средние века → потомки
      {
        id: '8',
        type: 'custom',
        label: 'Тюркский каганат',
        position: {x: 500, y: 350},
        data: {title: 'Тюркский каганат', status: 'not_started'}
      },
      {
        id: '9',
        type: 'custom',
        label: 'Караханиды',
        position: {x: 680, y: 350},
        data: {title: 'Караханиды', status: 'not_started'}
      },
      {
        id: '10',
        type: 'custom',
        label: 'Золотая Орда',
        position: {x: 800, y: 350},
        data: {title: 'Золотая Орда', status: 'not_started'}
      },

      // Колониальный период → потомки
      {
        id: '11',
        type: 'custom',
        label: 'Присоединение к России',
        position: {x: 1050, y: 350},
        data: {title: 'Присоединение к России', status: 'not_started'}
      },
      {
        id: '12',
        type: 'custom',
        label: 'Восстание Кенесары',
        position: {x: 1150, y: 450},
        data: {title: 'Восстание Кенесары', status: 'not_started'}
      },
      {
        id: '13',
        type: 'custom',
        label: 'Реформы 1867-1868',
        position: {x: 1250, y: 550},
        data: {title: 'Реформы 1867-1868', status: 'not_started', tags: ['персональная рекомендация'],}
      },
      {
        id: '14',
        type: 'custom',
        label: 'Социально-экономические изменения',
        position: {x: 1350, y: 650},
        data: {title: 'Социально-экономические изменения', status: 'not_started'}
      },

      // Современность → потомки
      {
        id: '15',
        type: 'custom',
        label: 'КазССР',
        position: {x: 600, y: 650},
        data: {title: 'КазССР', status: 'not_started'}
      },
      {
        id: '16',
        type: 'custom',
        label: '1917 год в Казахстане',
        position: {x: 700, y: 650},
        data: {title: '1917 год в Казахстане', status: 'not_started'}
      },
      {
        id: '17',
        type: 'custom',
        label: 'Репрессии и голод',
        position: {x: 800, y: 800},
        data: {title: 'Репрессии и голод', status: 'not_started'}
      },
      {
        id: '18',
        type: 'custom',
        label: 'Декабрь 1986',
        position: {x: 950, y: 700},
        data: {title: 'Декабрь 1986', status: 'not_started'}
      },
      {
        id: '19',
        type: 'custom',
        label: 'Независимость Казахстана',
        position: {x: 1100, y: 650},
        data: {title: 'Независимость Казахстана', status: 'not_started'}
      },
      {
        id: '20',
        type: 'custom',
        label: 'Первая Конституция',
        position: {x: 800, y: 950},
        data: {title: 'Первая Конституция', status: 'not_started', tags: ['альтернатива'],}
      }
    ]);


    const edges = ref([
      {id: 'e0-1', source: '0', target: '1', markerEnd: MarkerType.ArrowClosed},
      {id: 'e0-2', source: '0', target: '2', markerEnd: MarkerType.ArrowClosed},
      {id: 'e0-3', source: '0', target: '3', markerEnd: MarkerType.ArrowClosed},
      {id: 'e0-4', source: '0', target: '4', markerEnd: MarkerType.ArrowClosed},

      {id: 'e1-5', source: '1', target: '5', markerEnd: MarkerType.ArrowClosed},
      {id: 'e1-6', source: '1', target: '6', markerEnd: MarkerType.ArrowClosed},
      {id: 'e1-7', source: '1', target: '7', markerEnd: MarkerType.ArrowClosed},

      {id: 'e2-8', source: '2', target: '8', markerEnd: MarkerType.ArrowClosed},
      {id: 'e2-9', source: '2', target: '9', markerEnd: MarkerType.ArrowClosed},
      {id: 'e2-10', source: '2', target: '10', markerEnd: MarkerType.ArrowClosed},

      {id: 'e3-11', source: '3', target: '11', markerEnd: MarkerType.ArrowClosed},
      {id: 'e3-12', source: '3', target: '12', markerEnd: MarkerType.ArrowClosed},
      {id: 'e3-13', source: '3', target: '13', markerEnd: MarkerType.ArrowClosed},
      {id: 'e3-14', source: '3', target: '14', markerEnd: MarkerType.ArrowClosed},

      {id: 'e4-15', source: '4', target: '15', markerEnd: MarkerType.ArrowClosed},
      {id: 'e4-16', source: '4', target: '16', markerEnd: MarkerType.ArrowClosed},
      {id: 'e4-17', source: '4', target: '17', markerEnd: MarkerType.ArrowClosed},
      {id: 'e4-18', source: '4', target: '18', markerEnd: MarkerType.ArrowClosed},
      {id: 'e4-19', source: '4', target: '19', markerEnd: MarkerType.ArrowClosed},
      {id: 'e19-20', source: '19', target: '20', markerEnd: MarkerType.ArrowClosed}
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
</style>
