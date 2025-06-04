<script>
import { defineComponent, ref, watch, onMounted, computed } from 'vue';
import { VueFlow, MarkerType, useVueFlow } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import CustomNode from './CustomNode.vue'; // Убедитесь, что путь правильный
import { INITIAL_NODES_DATA } from '@/config/staticRoadmaps'; // Путь к данным

import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown'; // Более подходящий для выбора статуса

export default defineComponent({
  name: 'RoadmapViewPage',
  components: {
    VueFlow,
    Background,
    Controls,
    CustomNode,
    Drawer,
    Button,
    InputText,
    Textarea,
    Dropdown,
  },
  props: {
    roadmapId: { // Принимаем ID из роутера
      type: String,
      required: true,
    }
  },
  setup(props) {
    const { addNodes, addEdges, findNode } = useVueFlow(); // Получаем методы для управления графом

    const nodes = ref([]);
    const edges = ref([]);

    const drawerVisible = ref(false);
    // selectedNodeData будет содержать копию данных узла для редактирования
    const selectedNodeData = ref({ title: '', description: '', tag: '', status: 'not_started' });
    const selectedNodeId = ref(null); // ID редактируемого узла

    const statusOptions = ref([
      { label: 'Не начат', value: 'not_started' },
      { label: 'В процессе', value: 'in_progress' },
      { label: 'Завершён', value: 'completed' },
      { label: 'Отложен', value: 'on_hold' } // Добавим опциональный статус
    ]);

    const customNodeTypes = { custom: CustomNode };

    // Динамические ключи для localStorage
    const STORAGE_KEY_NODES = computed(() => `vueflow-nodes-${props.roadmapId}`);
    const STORAGE_KEY_EDGES = computed(() => `vueflow-edges-${props.roadmapId}`);

    const saveToLocalStorage = () => {
      localStorage.setItem(STORAGE_KEY_NODES.value, JSON.stringify(nodes.value));
      localStorage.setItem(STORAGE_KEY_EDGES.value, JSON.stringify(edges.value));
    };

    const loadFromLocalStorage = () => {
      const storedNodes = localStorage.getItem(STORAGE_KEY_NODES.value);
      const storedEdges = localStorage.getItem(STORAGE_KEY_EDGES.value);

      if (storedNodes && storedNodes !== '[]') { // Проверяем, что не пустой массив
        nodes.value = JSON.parse(storedNodes);
      } else if (INITIAL_NODES_DATA[props.roadmapId]?.nodes) {
        nodes.value = JSON.parse(JSON.stringify(INITIAL_NODES_DATA[props.roadmapId].nodes)); // Глубокое копирование
      } else {
        // Fallback, если нет ни в localStorage, ни в INITIAL_NODES_DATA (например, для динамически созданных)
        nodes.value = [{ id: 'initial-node', type: 'custom', label: 'Начальный узел', position: { x: 100, y: 100 }, data: { title: 'Начальный узел', tag: 'Старт', status: 'not_started', description: 'Начните отсюда' } }];
      }

      if (storedEdges && storedEdges !== '[]') {
        edges.value = JSON.parse(storedEdges);
      } else if (INITIAL_NODES_DATA[props.roadmapId]?.edges) {
        edges.value = JSON.parse(JSON.stringify(INITIAL_NODES_DATA[props.roadmapId].edges)); // Глубокое копирование
      } else {
        edges.value = [];
      }
    };

    onMounted(() => {
      loadFromLocalStorage();
    });

    // Следим за изменениями ID роадмапа, чтобы перезагрузить данные
    watch(() => props.roadmapId, () => {
      loadFromLocalStorage();
    }, { immediate: true });


    watch([nodes, edges], () => {
      saveToLocalStorage();
    }, { deep: true });

    const generateUniqueId = (prefix = 'node') => {
      return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    const addNodeHandler = ({ parentId, parentPosition }) => {
      if (!parentId) {
        console.error("Parent ID is undefined. Cannot add node.");
        return;
      }

      const newId = generateUniqueId('n');
      const newEdgeId = generateUniqueId('e');

      const newNode = {
        id: newId,
        type: 'custom',
        label: `Новый узел ${newId.substring(0,5)}`, // Короткий label для отображения
        position: {
          x: parentPosition.x + Math.random() * 100 - 50, // Немного смещаем
          y: parentPosition.y + 120,                      // Ниже родителя
        },
        data: {
          title: `Новый узел`,
          description: '',
          tag: 'Новый',
          status: 'not_started',
        },
      };

      const newEdge = {
        id: newEdgeId,
        source: parentId,
        target: newId,
        markerEnd: MarkerType.ArrowClosed,
      };

      addNodes([newNode]); // Используем метод из useVueFlow
      addEdges([newEdge]); // Используем метод из useVueFlow

      // Опционально: сразу открываем Drawer для нового узла
      openDrawerForEditing(newId);
    };

    const openDrawerForEditing = (nodeId) => {
      const node = findNode(nodeId); // Находим узел через useVueFlow
      if (node) {
        selectedNodeId.value = nodeId;
        // Клонируем данные для редактирования, чтобы не менять оригинал до сохранения
        selectedNodeData.value = { ...node.data };
        drawerVisible.value = true;
      } else {
        console.error("Node not found for editing:", nodeId);
      }
    };

    const saveNodeChanges = () => {
      if (selectedNodeId.value) {
        const nodeToUpdate = findNode(selectedNodeId.value);
        if (nodeToUpdate) {
          // Обновляем данные узла
          nodeToUpdate.data = { ...selectedNodeData.value };
          // Обновляем label, если он зависит от title
          nodeToUpdate.label = selectedNodeData.value.title || 'Без названия';
        }
      }
      drawerVisible.value = false;
      saveToLocalStorage(); // Сохраняем изменения
    };


    return {
      nodes,
      edges,
      drawerVisible,
      selectedNodeData, // Для v-model в Drawer
      statusOptions,
      customNodeTypes,
      openDrawerForEditing, // Это теперь для открытия на редактирование
      addNodeHandler,
      saveNodeChanges,
    };
  }
});
</script>

<template>
  <div style="width: 100%; height: calc(100vh - 60px); background: #fff;"> <VueFlow
      v-model:nodes="nodes"
      v-model:edges="edges"
      fit-view-on-init
      :node-types="customNodeTypes"
      class="vue-flow-container"
  >
    <template #node-custom="customNodeProps">
      <CustomNode
          :id="customNodeProps.id"
          :data="customNodeProps.data"
          :position="customNodeProps.position"
          @open-drawer="openDrawerForEditing(customNodeProps.id)"
          @add-node="addNodeHandler({ parentId: customNodeProps.id, parentPosition: customNodeProps.position })"
      />
    </template>

    <Background pattern-color="#aaa" gap="16" />
    <Controls />
  </VueFlow>

    <Drawer
        v-model:visible="drawerVisible"
        header="Редактировать узел"
        position="right"
        :modal="true"
        class="node-drawer w-full md:w-1/3 lg:w-1/4"
    >
      <div class="p-fluid flex flex-col h-full">
        <div class="field mb-4">
          <label for="nodeTitle" class="block text-900 font-medium mb-2">Название</label>
          <InputText id="nodeTitle" v-model="selectedNodeData.title" class="w-full" />
        </div>

        <div class="field mb-4">
          <label for="nodeDescription" class="block text-900 font-medium mb-2">Описание</label>
          <Textarea id="nodeDescription" v-model="selectedNodeData.description" rows="5" class="w-full" />
        </div>

        <div class="field mb-4">
          <label for="nodeTag" class="block text-900 font-medium mb-2">Тег</label>
          <InputText id="nodeTag" v-model="selectedNodeData.tag" class="w-full" />
        </div>

        <div class="field mb-4">
          <label for="nodeStatus" class="block text-900 font-medium mb-2">Статус</label>
          <Dropdown
              id="nodeStatus"
              v-model="selectedNodeData.status"
              :options="statusOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Выберите статус"
              class="w-full"
          />
        </div>

        <div class="mt-auto">
          <Button label="Сохранить" icon="pi pi-check" @click="saveNodeChanges" class="w-full" />
        </div>
      </div>
    </Drawer>
  </div>
</template>

<style>
/* Глобальные стили для VueFlow компонентов, если нужно */
.vue-flow__controls {
  right: 15px;
  left: auto;
}
.node-drawer .p-drawer-content {
  display: flex;
  flex-direction: column;
}
/* Стили из вашего примера */
.p-4 { padding: 1rem; }
.space-y-4 > *:not(:last-child) { margin-bottom: 1rem; }
.text-xl { font-size: 1.25rem; }
.font-bold { font-weight: 700; }
.text-sm { font-size: 0.875rem; }
.text-gray-600 { color: #4b5563; }
.flex { display: flex; }
.flex-wrap { flex-wrap: wrap; }
.gap-2 { gap: 0.5rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.rounded { border-radius: 0.25rem; }
.bg-gray-200 { background-color: #e5e7eb; }
.w-full { width: 100%; }

/* Убедитесь, что стили для кастомного узла не конфликтуют */
.custom-node {
  /* ... ваши стили CustomNode ... */
}
</style>