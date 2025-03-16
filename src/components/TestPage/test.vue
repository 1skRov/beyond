<template>
  <div>
    <h1 v-if="test">{{ test.title }}</h1>
    <p v-else>Загрузка...</p>

    <div v-if="questions.length">
      <div v-for="question in questions" :key="question.id">
        <p>{{ question.question }}</p>
        <ul>
          <li v-for="option in question.options" :key="option">
            <input
                type="radio"
                :name="`question-${question.id}`"
                :value="option"
                v-model="answers[question.id]"
            />
            {{ option }}
          </li>
        </ul>
      </div>
      <button @click="submitTest">Завершить тест</button>
    </div>
  </div>
</template>

<script>
import { dataStore } from "@/store/store.js";

export default {
  data() {
    return {
      test: null,
      questions: [],
      answers: {},
      testCompleted: false
    };
  },
  async created() {
    await dataStore.load(); // Загружаем данные в store
    const testId = parseInt(this.$route.params.id);
    this.test = dataStore.tests.find(t => t.id === testId);

    if (this.test) {
      this.questions = dataStore.questions.filter(q => this.test.questions.includes(q.id));
    }
  },
  methods: {
    submitTest() {
      console.log("Ответы пользователя:", this.answers);
      this.testCompleted = true;
      this.$router.push(`/results/${this.$route.params.id}`);
    }
  }
};
</script>
