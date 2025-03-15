<template>
  <div>
    <h2>Тест по теме: {{ store.topic }}</h2>
    <div v-for="(question, index) in store.questions" :key="index">
      <h3>{{ question.question }}</h3>
      <div v-for="option in question.options" :key="option">
        <label>
          <input
              type="radio"
              :name="'question-' + index"
              :value="option"
              v-model="store.userAnswers[index]"
          />
          {{ option }}
        </label>
      </div>
    </div>
    <button @click="submitAnswers">Отправить ответы</button>
  </div>
</template>

<script setup>
import {useTestStore} from '@/store/testStore';
import {useRouter} from 'vue-router';

const store = useTestStore();
const router = useRouter();

const submitAnswers = async () => {
  await store.checkAnswers();
  router.push('/results');
};
</script>
