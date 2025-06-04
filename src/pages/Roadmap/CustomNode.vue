<template>
  <div class="custom-node" :class="nodeClass">
    <div class="node-header">
      <div class="node-title">{{ data.title }}</div>
      <!-- При клике вызываем addNode, передаём nodeId наверх -->
      <button @click.stop="addNode" class="add-node-btn">+</button>
      <!-- При клике открываем Drawer -->
      <button @click.stop="openDrawer" class="edit-node-btn">...</button>
    </div>
    <div v-if="data.tags && data.tags.length" class="node-tags">
      <span
          v-for="tag in data.tags"
          :key="tag"
          class="node-tag"
          :class="{
          'node-tag-start': tag === 'start',
          'node-tag-recommendation': tag === 'персональная рекомендация',
          'node-tag-alternative': tag === 'альтернатива',
          'node-tag-optional': tag === 'не обязательно, но интересно'
        }"
      >
        {{ tag === 'start' ? 'Старт' : tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  nodeId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['open-drawer', 'add-node']);

// Открываем Drawer и передаём в него объект data
const openDrawer = () => {
  emit('open-drawer', props.data);
};

// Добавляем новый узел, передаём наверх nodeId родителя
const addNode = () => {
  emit('add-node', props.nodeId);
};

// Классы для рамки в зависимости от статуса
const nodeClass = computed(() => {
  return {
    'status-not_started': props.data.status === 'not_started',
    'status-in_progress': props.data.status === 'in_progress',
    'status-completed': props.data.status === 'completed',
  };
});
</script>

<style scoped>
.custom-node {
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 10px 15px;
  min-width: 180px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
  position: relative;
  transition: border-color 0.3s ease;
}

.node-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.node-title {
  font-weight: bold;
  color: #333;
  flex-grow: 1;
  text-align: left;
}

.add-node-btn, .edit-node-btn {
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.2s;
  flex-shrink: 0;
}

.edit-node-btn {
  background: #6c757d;
}

.add-node-btn:hover {
  background: #0056b3;
}

.edit-node-btn:hover {
  background: #5a6268;
}

.node-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin-top: 5px;
}

.node-tag {
  font-size: 0.7em;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #e0e0e0;
  color: #555;
}

.node-tag-start {
  background-color: #d4edda;
  color: #155724;
}

.node-tag-recommendation {
  background-color: #ffeeba;
  color: #856404;
}

.node-tag-alternative {
  background-color: #cce5ff;
  color: #004085;
}

.node-tag-optional {
  background-color: #f8d7da;
  color: #721c24;
}

.status-not_started {
  border-color: #dc3545;
}

.status-in_progress {
  border-color: #ffc107;
}

.status-completed {
  border-color: #28a745;
}
</style>
