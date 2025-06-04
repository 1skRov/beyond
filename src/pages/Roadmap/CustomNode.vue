<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  id: { // ID узла, получаем от VueFlow
    type: String,
    required: true
  },
  data: { // Данные узла (title, description, tag, status)
    type: Object,
    required: true
  },
  position: { // Позиция узла, для передачи в addNodeHandler
    type: Object,
    required: true
  }
});

const emit = defineEmits(['open-drawer', 'add-node']);

const openNodeDrawer = () => {
  // Эмитим ID узла, чтобы родитель мог найти его данные
  emit('open-drawer', props.id);
};

const addNewNode = () => {
  // Эмитим ID родительского узла и его позицию
  emit('add-node', { parentId: props.id, parentPosition: props.position });
};

const nodeClass = computed(() => ({
  'status-not_started': !props.data.status || props.data.status === 'not_started',
  'status-in_progress': props.data.status === 'in_progress',
  'status-completed': props.data.status === 'completed',
  'status-on_hold': props.data.status === 'on_hold'
}));

const statusText = computed(() => {
  switch(props.data.status) {
    case 'in_progress': return 'В процессе';
    case 'completed': return 'Завершён';
    case 'on_hold': return 'Отложен';
    case 'not_started':
    default: return 'Не начат';
  }
});

</script>

<template>
  <div class="custom-node" :class="nodeClass">
    <div class="node-header">
      <div class="node-title" :title="data.title">{{ data.title || 'Без названия' }}</div>
      <div class="node-actions">
        <button @click.stop="addNewNode" class="action-btn add-btn" title="Добавить дочерний узел">
          <i class="pi pi-plus"></i>
        </button>
        <button @click.stop="openNodeDrawer" class="action-btn edit-btn" title="Редактировать узел">
          <i class="pi pi-pencil"></i>
        </button>
      </div>
    </div>
    <div v-if="data.tag" class="node-tag">{{ data.tag }}</div>
    <div class="node-status-badge">{{ statusText }}</div>
  </div>
</template>

<style scoped>
.custom-node {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 10px 12px;
  min-width: 180px;
  max-width: 220px; /* Ограничим ширину для лучшего вида */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: grab; /* Указываем, что узел можно перетаскивать */
}
.custom-node:active {
  cursor: grabbing;
}

.node-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.node-title {
  font-weight: 600;
  color: #333;
  flex-grow: 1;
  text-align: left;
  font-size: 0.95em;
  overflow: hidden; /* Обрезаем длинный текст */
  text-overflow: ellipsis; /* Добавляем многоточие */
  white-space: nowrap; /* Предотвращаем перенос строки */
  margin-right: 8px; /* Отступ от кнопок */
}

.node-actions {
  display: flex;
  align-items: center;
}

.action-btn {
  background: transparent;
  color: #555;
  border: 1px solid transparent; /* Для выравнивания */
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em; /* Размер иконки */
  cursor: pointer;
  margin-left: 4px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}
.action-btn .pi {
  font-size: 0.9rem;
}

.action-btn:hover {
  background-color: #f0f0f0;
  color: #007bff;
}

.add-btn:hover {
  color: #28a745; /* Зеленый для добавления */
}
.edit-btn:hover {
  color: #ffc107; /* Желтый для редактирования */
}


.node-tag {
  font-size: 0.7em;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #e9ecef;
  color: #495057;
  display: inline-block; /* Чтобы занимал только нужную ширину */
  margin-bottom: 6px;
  text-align: center;
}
.node-status-badge {
  font-size: 0.7em;
  padding: 2px 6px;
  border-radius: 10px; /* Более округлый */
  color: #fff;
  text-align: center;
  margin-top: 4px;
  font-weight: 500;
}

/* Цвета статусов */
.status-not_started { border-color: #6c757d; } /* Серый */
.status-not_started .node-status-badge { background-color: #6c757d; }

.status-in_progress { border-color: #007bff; } /* Синий */
.status-in_progress .node-status-badge { background-color: #007bff; }

.status-completed { border-color: #28a745; } /* Зеленый */
.status-completed .node-status-badge { background-color: #28a745; }

.status-on_hold { border-color: #ffc107; } /* Желтый */
.status-on_hold .node-status-badge { background-color: #ffc107; color: #212529;}


/* PrimeIcons если еще не подключены глобально */
/* @import url("https://unpkg.com/primeicons/primeicons.css"); */
</style>