<script>
import QuestionItem from "@/pages/Test/QuestionItem.vue";
import questionsData from "@/db/question2.json";

export default {
  name: "TestItem",
  components: { QuestionItem },
  data() {
    return {
      value: 0, // Изменено: используем число вместо строки
      questions: [],
      selectedAnswers: {}
    };
  },
  async mounted() {
    this.questions = questionsData;
    if (this.questions.length > 0) {
      this.value = 0; // Убедимся, что первый вопрос активен
    }
  },
  methods: {
    updateAnswers(questionId, answers) {
      this.selectedAnswers[questionId] = answers;
    }
  }
};
</script>

<template>
  <div class="flex justify-between w-full items-center mb-5">
    <b class="text-lg text-gray-600">Математика. Основы тригонометрии</b>
    <p class="text-sm text-gray-600 font-medium">Евгений Шевченко</p>
  </div>
  <div class="border flex flex-col justify-between p-2.5 rounded-lg" style="min-height: 87vh; height: 87vh">
    <div>
      <Tabs v-model:value="value">
        <TabList>
          <Tab v-for="(question, index) in questions" :key="question.id" :value="index" class="text-xs">
            Вопрос {{ index + 1 }}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel v-for="(question, index) in questions" :key="question.id" :value="index">
            <QuestionItem :question="question" :selectedAnswers="selectedAnswers[question.id] || []"
                          @update:answers="updateAnswers(question.id, $event)" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <div class="flex mt-1.5 gap-2 justify-end">
      <Button v-for="(question, index) in questions" :key="question.id" @click="value = index" rounded :label="index + 1"
              class="w-8 h-8 p-0" :outlined="value !== index" />
    </div>
  </div>
  <div class="flex justify-between items-center mt-5">
    <p class="text-xs text-gray-500">После истечения времени тест автоматически завершится даже если вы не успели отметить все вопросы</p>
    <p class="text-xs font-medium text-gray-700">оставшееся время <span class="text-sm font-bold">1час 20минут</span></p>
    <Button label="Завершить тест" severity="warn" variant="outlined" size="small"/>
  </div>
</template>
