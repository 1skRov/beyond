<template>
  <div>
    <h1>Каталог тестов</h1>
    <div v-for="subject in subjects" :key="subject.id">
      <h2>{{ subject.name }}</h2>
      <ul>
        <li v-for="test in getTestsBySubject(subject.id)" :key="test.id">
          <router-link :to="`/test/${test.id}`">{{ test.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { dataStore } from "@/store/store.js"; // Используем общий store

export default {
  data() {
    return {
      subjects: [],
      tests: []
    };
  },
  async created() {
    await dataStore.load(); // Загружаем данные в store
    this.subjects = dataStore.subjects;
    this.tests = dataStore.tests;
  },
  methods: {
    getTestsBySubject(subjectId) {
      return this.tests.filter(test => test.subject_id === subjectId);
    }
  }
};
</script>
