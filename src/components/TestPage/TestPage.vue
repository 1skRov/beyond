<template>
  <div>
    <h2>Выбери тему теста</h2>
    <input v-model="topic" placeholder="Введите тему..." />
    <button @click="startTest">Создать тест</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTestStore } from '@/store/testStore';
import { useRouter } from 'vue-router';

const topic = ref('');
const store = useTestStore();
const router = useRouter();

const startTest = async () => {
  await store.generateTest(topic.value);
  router.push('/quiz');
};
</script>
