<template>
  <div class="custom-node" :class="tagClass">
    <h3>{{ data.title }}</h3>
    <p>{{ data.description }}</p>

    <div class="tags">
      <span v-for="tag in data.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <div class="actions">
      <button @click="openMaterials">Открыть</button>
      <button v-if="data.type === 'mandatory'">Изучить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomNode',
  props: ['data'],
  computed: {
    tagClass() {
      if (this.data.tags.includes('обязательный')) return 'mandatory';
      if (this.data.tags.includes('дополнительно')) return 'additional';
      if (this.data.tags.includes('персонально')) return 'personal';
      return '';
    }
  },
  methods: {
    openMaterials() {
      alert(`Открываем материалы по теме: ${this.data.title}`);
    }
  }
};
</script>

<style scoped>
.custom-node {
  border-radius: 8px;
  padding: 1rem;
  background: #f4f4f4;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.mandatory { border-left: 5px solid #22c55e; }
.additional { border-left: 5px solid #3b82f6; }
.personal   { border-left: 5px solid #f97316; }
.tag {
  background: #eee;
  margin: 0 4px;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}
.actions {
  margin-top: 0.5rem;
}
.actions button {
  margin-right: 8px;
}
</style>