<template>
  <div class="custom-node" :class="[statusClass]" @click="openDrawer">
    <h3>{{ data.title }}</h3>
    <div class="tags">
      <span v-for="tag in data.tags" :key="tag" :class="['tag', tagClass(tag)]">
        {{ tag === 'start' ? 'Старт' : tag }}
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
        case 'in_progress':
          return 'in-progress';
        case 'completed':
          return 'completed';
        default:
          return 'not-started';
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
  @apply rounded-md px-3 py-2 cursor-pointer;
  transition: 0.3s ease;
}

.not-started {
  @apply bg-blue-100 text-blue-900 font-medium;
}

.in-progress {
  @apply bg-orange-500 text-slate-800 font-medium;
}

.completed {
  @apply bg-slate-300;
}

.tags {
  margin-top: 0.5rem;
}

.tag {
  @apply rounded-md mt-2 mr-2 text-xs;
}

.tag-indigo {
  @apply bg-indigo-200 text-indigo-600 px-1.5;
}

.tag-gray {
  @apply bg-gray-200 text-gray-600 px-1.5;
}

.tag-yellow {
  @apply bg-yellow-100 text-yellow-600 px-1.5;
}

.tag-start {
  @apply bg-green-100 text-green-600 px-1.5;
}
</style>
