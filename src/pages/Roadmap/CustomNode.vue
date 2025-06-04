<template>
  <div class="custom-node" :class="nodeClass">
    <div class="node-header">
      <div class="node-title">{{ data.title }}</div>
      <button @click.stop="addNode" class="add-node-btn">+</button>
      <button @click.stop="openDrawer" class="edit-node-btn">…</button>
    </div>
    <div v-if="data.tag" class="node-tag">{{ data.tag }}</div>
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

const openDrawer = () => {
  emit('open-drawer', props.nodeId);
};

const addNode = () => {
  emit('add-node', props.nodeId);
};

const nodeClass = computed(() => ({
  'status-not_started': props.data.status === 'not_started',
  'status-in_progress': props.data.status === 'in_progress',
  'status-completed': props.data.status === 'completed'
}));
</script>

<style scoped>
.custom-node {
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 10px 15px;
  min-width: 160px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: border-color 0.3s;
  font-family: Arial, sans-serif;
}

.node-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.node-title {
  font-weight: bold;
  color: #333;
  flex-grow: 1;
  text-align: left;
}

.add-node-btn,
.edit-node-btn {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  cursor: pointer;
  margin-left: 4px;
  transition: background-color 0.2s;
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

.node-tag {
  font-size: 0.75em;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #e2e8f0;
  color: #334155;
  text-align: center;
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
