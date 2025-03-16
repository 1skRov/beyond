<template>
  <div>
    <h1>Результаты теста</h1>
    <ul v-if="questions.length">
      <li v-for="question in questions" :key="question.id">
        <p>{{ question.question }}</p>
        <p>Ваш ответ: {{ answers[question.id] || "Не отвечено" }}</p>
        <p :class="isCorrect(question) ? 'correct' : 'incorrect'">
          Правильный ответ: {{ question.options[question.answer] }}
        </p>
      </li>
    </ul>
    <button @click="$router.push('/')">Назад</button>
  </div>
</template>

<script>
import { dataStore } from "@/store/store.js";

export default {
  data() {
    return {
      test: null,
      questions: [],
      answers: {}
    };
  },
  async created() {
    await dataStore.load();
    const testId = parseInt(this.$route.params.id);
    this.test = dataStore.tests.find(t => t.id === testId);
    if (this.test) {
      this.questions = dataStore.questions.filter(q => this.test.questions.includes(q.id));
    }

    // Загружаем ответы из sessionStorage (если они там есть)
    this.answers = JSON.parse(sessionStorage.getItem(`answers-${testId}`)) || {};
  },
  methods: {
    isCorrect(question) {
      return this.answers[question.id] === question.options[question.answer];
    }
  }
};
</script>

<style>
.correct { color: green; }
.incorrect { color: red; }
</style>
