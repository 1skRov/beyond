<template>
  <div class="custom-node" :class="[statusClass]" @click="openDrawer">
    <h3>{{ data.title }}</h3>
    <div class="tags">
      <span v-for="tag in data.tags" :key="tag" :class="['tag', tagClass(tag)]">
        {{ tag === 'start' ? '🚀 Старт' : tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomNode',
  props: ['data'],
  emits: ['open-drawer'],
  computed: {
    statusClass() {
      switch (this.data.status) {
        case 'in_progress': return 'in-progress';
        case 'completed': return 'completed';
        default: return 'not-started';
      }
    }
  },
  methods: {
    openDrawer() {
      this.$emit('open-drawer', this.data);
    },
    tagClass(tag) {
      const lower = tag.toLowerCase();
      if (lower === 'персональная рекомендация') return 'tag-indigo';
      if (lower === 'не обязательно, но интересно') return 'tag-gray';
      if (lower === 'альтернатива') return 'tag-yellow';
      if (lower === 'start') return 'tag-start';
      return '';
    }
  }
};
</script>

<style scoped>
.custom-node {
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.not-started {
  background-color: #e0f2fe; /* sky */
}
.in-progress {
  background-color: #fed7aa; /* orange-200 */
}
.completed {
  background-color: #e5e7eb; /* gray-200 */
}
.tags {
  margin-top: 0.5rem;
}
.tag {
  display: inline-block;
  margin: 4px 4px 0 0;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
  background: #f3f4f6;
}
.tag-indigo { background: #c7d2fe; }
.tag-gray   { background: #d1d5db; }
.tag-yellow { background: #fde68a; }
.tag-start  { background: #93c5fd; font-weight: bold; }
</style>
