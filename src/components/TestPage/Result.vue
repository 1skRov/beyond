<template>
  <div>
    <h2>Результаты</h2>
    <div v-for="(result, index) in store.results" :key="index">
      <p>{{ result.question }}</p>
      <p>Твой ответ: {{ result.userAnswer }}</p>
      <p v-if="result.isCorrect" style="color: green;">✅ Правильно</p>
      <p v-else style="color: red;">❌ Неправильно, правильный ответ: {{ result.correctAnswer }}</p>
    </div>
    <button @click="restartTest">Пройти еще раз</button>
  </div>
</template>

<script setup>
import {useTestStore} from '@/store/testStore';
import {useRouter} from 'vue-router';

const store = useTestStore();
const router = useRouter();

const restartTest = () => {
  store.resetTest();
  router.push('/');
};
</script>
