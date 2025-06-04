<template>
  <div style="width: 100%; height: 100vh; background: #fff;">
    <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        fit-view
        :node-types="customNodeTypes"
        class="vue-flow-container"
    >
      <!-- Указываем, что у нас есть кастомный тип узла -->
      <template #node-custom="{ data, id }">
        <!-- Пробрасываем data и nodeId -->
        <CustomNode
            :data="data"
            :node-id="id"
            @open-drawer="openDrawer"
            @add-node="addNodeHandler"
        />
      </template>

      <Background/>
      <Controls/>
    </VueFlow>

    <Drawer
        v-model:visible="drawerVisible"
        position="right"
        :modal="true"
        class="node-drawer"
    >
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
            {{ tag === 'start' ? 'Старт' : tag }}
          </span>
        </div>
        <AutoComplete
            v-model="selectedNode.status"
            dropdown
            :suggestions="filteredStatusOptions"
            @complete="searchStatus"
            @item-select="updateNodeStatus"
            placeholder="Выберите статус"
            class="w-full"
        />
      </div>
    </Drawer>
  </div>
</template>

<script>
import {defineComponent, ref, watch, onMounted} from 'vue';
import {VueFlow, MarkerType} from '@vue-flow/core';
import {Background} from '@vue-flow/background';
import {Controls} from '@vue-flow/controls';
import CustomNode from './CustomNode.vue';
import Drawer from 'primevue/drawer';
import AutoComplete from 'primevue/autocomplete';

export default defineComponent({
  components: {
    VueFlow,
    Background,
    Controls,
    CustomNode,
    Drawer,
    AutoComplete,
  },
  setup() {
    const nodes = ref([]);
    const edges = ref([]);

    const drawerVisible = ref(false);
    const selectedNode = ref({});
    const statusOptions = ref([
      {label: 'Не начат', value: 'not_started'},
      {label: 'В процессе', value: 'in_progress'},
      {label: 'Завершён', value: 'completed'}
    ]);
    const filteredStatusOptions = ref(statusOptions.value);

    const customNodeTypes = {custom: CustomNode};

    // Ключи для localStorage
    const STORAGE_KEY_NODES = 'vueflow-nodes';
    const STORAGE_KEY_EDGES = 'vueflow-edges';

    const saveToLocalStorage = () => {
      localStorage.setItem(STORAGE_KEY_NODES, JSON.stringify(nodes.value));
      localStorage.setItem(STORAGE_KEY_EDGES, JSON.stringify(edges.value));
    };

    const loadFromLocalStorage = () => {
      const storedNodes = localStorage.getItem(STORAGE_KEY_NODES);
      const storedEdges = localStorage.getItem(STORAGE_KEY_EDGES);

      if (storedNodes) {
        nodes.value = JSON.parse(storedNodes);
      } else {
        // Если первый запуск, подставляем базовый набор узлов
        nodes.value = [
          {
            id: '0',
            type: 'custom',
            label: 'История Казахстана',
            position: {x: 800, y: 50},
            data: {title: 'История Казахстана', tags: ['start'], status: 'not_started'}
          },
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
            data: {title: 'Средние века', status: 'not_started', tags: ['персональная рекомендация']}
          },
          {
            id: '3',
            type: 'custom',
            label: 'Колониальный период',
            position: {x: 1150, y: 200},
            data: {title: 'Колониальный период', status: 'not_started', tags: ['альтернатива']}
          },
          {
            id: '4',
            type: 'custom',
            label: 'Современность',
            position: {x: 800, y: 500},
            data: {title: 'Современность', status: 'not_started'}
          },
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
              description: 'Переход от племенного строя к ранней государственности.'
            }
          },
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
            data: {title: 'Реформы 1867-1868', status: 'not_started', tags: ['персональная рекомендация']}
          },
          {
            id: '14',
            type: 'custom',
            label: 'Социально-экономические изменения',
            position: {x: 1350, y: 650},
            data: {title: 'Социально-экономические изменения', status: 'not_started'}
          },
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
            data: {title: 'Первая Конституция', status: 'not_started', tags: ['альтернатива']}
          }
        ];
      }

      if (storedEdges) {
        edges.value = JSON.parse(storedEdges);
      } else {
        edges.value = [
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
        ];
      }
    };

    onMounted(() => {
      loadFromLocalStorage();
    });

    watch([nodes, edges], () => {
      saveToLocalStorage();
    }, {deep: true});

    // Логика добавления нового узла
    const addNodeHandler = (parentId) => {
      if (!parentId) {
        console.error("Parent ID is undefined. Cannot add node.");
        return;
      }

      const parentNode = nodes.value.find(n => n.id === parentId);
      if (!parentNode) {
        console.error("Parent node not found with ID:", parentId);
        return;
      }

      // Генерация уникального числового ID
      const maxId = Math.max(...nodes.value.map(n => parseInt(n.id, 10) || 0));
      const newId = (maxId + 1).toString();

      // Расставляем позицию чуть ниже и чуть случайно по X
      const newPosition = {
        x: parentNode.position.x + (Math.random() * 80 - 40),
        y: parentNode.position.y + 150,
      };

      const newNode = {
        id: newId,
        type: 'custom',
        label: `Новый узел ${newId}`,
        position: newPosition,
        data: {
          title: `Новый узел ${newId}`,
          status: 'not_started',
          description: `Описание для нового узла ${newId}.`,
          tags: []
        },
      };

      const newEdge = {
        id: `e${parentId}-${newId}`,
        source: parentId,
        target: newId,
        markerEnd: MarkerType.ArrowClosed,
      };

      nodes.value.push(newNode);
      edges.value.push(newEdge);

      // Опционально: сразу открываем Drawer для нового узла
      openDrawer(newNode.data);
    };

    // Открытие Drawer: клонируем data (чтобы не мутировать напрямую)
    const openDrawer = (data) => {
      selectedNode.value = {...data};
      drawerVisible.value = true;
    };

    // Обновление статуса узла (по id лучше, а не по title)
    const updateNodeStatus = (event) => {
      const newStatus = event.value ? event.value.value : event.target.value;

      // Найдём узел не по title, а по тому, какое поле передаётся из Drawer
      // Можно хранить в selectedNode ещё и id, но пока покажу вариант по title
      const nodeToUpdate = nodes.value.find(n => n.data.title === selectedNode.value.title);
      if (nodeToUpdate) {
        nodeToUpdate.data.status = newStatus;
        saveToLocalStorage();
      }
    };

    // Фильтрация для AutoComplete
    const searchStatus = (event) => {
      const query = event.query.trim().toLowerCase();
      filteredStatusOptions.value = statusOptions.value.filter(option =>
          option.label.toLowerCase().includes(query)
      );
    };

    return {
      nodes,
      edges,
      drawerVisible,
      selectedNode,
      statusOptions,
      filteredStatusOptions,
      customNodeTypes,
      openDrawer,
      updateNodeStatus,
      addNodeHandler,
      searchStatus,
    };
  }
});
</script>

<style>
.vue-flow-container {
  /* ваши стили, если нужны */
}

.node-drawer .p-drawer-content {
  padding: 20px;
}

.p-4 {
  padding: 1rem;
}

.space-y-4 > *:not(:last-child) {
  margin-bottom: 1rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-bold {
  font-weight: 700;
}

.text-sm {
  font-size: 0.875rem;
}

.text-gray-600 {
  color: #4b5563;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-2 {
  gap: 0.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.w-full {
  width: 100%;
}
</style>
