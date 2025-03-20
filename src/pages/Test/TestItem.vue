<script>
import QuestionItem from "@/pages/Test/QuestionItem.vue";
import questionsData from "@/db/question2.json";

export default {
  name: "TestItem",
  components: { QuestionItem },
  data() {
    return {
      value: 0,
      questions: [],
      selectedAnswers: {},
      timeLeft: 4800,
      timer: null
    };
  },
  async mounted() {
    this.questions = questionsData;
    if (this.questions.length > 0) {
      this.value = 0;
    }
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    updateAnswers(questionId, answers) {
      this.selectedAnswers[questionId] = answers;
    },
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          this.finishTest();
        }
      }, 1000);
    },
    finishTest() {
      alert("Время вышло! Тест завершен.");
    },
    formatTime(seconds) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
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
      <Tabs v-model:value="value" scrollable>
        <TabList>
          <Tab v-for="(question, index) in questions" :key="question.id" :value="index" class="text-xs">
            Вопрос {{ index + 1 }}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel v-for="(question, index) in questions" :key="question.id" :value="index">
            <QuestionItem :question="question" :selectedAnswers="selectedAnswers[question.id] || []"
                          @update:answers="updateAnswers(question.id, $event)"/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <div class="flex mt-1.5 gap-2 justify-center">
      <Button v-for="(question, index) in questions" :key="question.id" @click="value = index" rounded
              :label="index + 1"
              class="w-8 h-8 p-0" :outlined="value !== index"/>
    </div>
  </div>
  <div class="flex justify-between items-center mt-5">
    <p class="text-xs text-gray-500">После истечения времени тест автоматически завершится даже если вы не успели
      отметить все вопросы</p>
    <p class="text-xs font-medium text-gray-700">оставшееся время <span
        class="font-bold" style="letter-spacing: 1.5px; font-size: 15px;">{{ formatTime(timeLeft) }}</span></p>
    <Button label="Завершить тест" severity="warn" variant="outlined" size="small" @click="finishTest"/>
  </div>
</template>
