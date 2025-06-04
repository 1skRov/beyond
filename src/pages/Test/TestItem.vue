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
      this.selectedAnswers[questionId] = Array.isArray(answers) ? answers : (answers ? [answers] : []);
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
      clearInterval(this.timer);
      const results = {
        totalQuestions: this.questions.length,
        correctCount: 0,
        incorrectCount: 0,
        unansweredCount: 0,
        wrongAnswersDetails: []
      };

      this.questions.forEach(question => {
        const userAnswers = this.selectedAnswers[question.id] || [];
        const correctAnswers = question.answers.filter(a => a.correct).map(a => a.text);

        if (userAnswers.length === 0) {
          results.unansweredCount++;
          results.wrongAnswersDetails.push({
            id: question.id,
            questionText: question.text,
            allOptions: question.answers,
            userSelected: [],
            correctOptions: correctAnswers,
            questionType: question.type
          });
        } else {
          let isCorrect = false;
          if (question.type === 'single') {
            isCorrect = userAnswers.length === 1 && correctAnswers.includes(userAnswers[0]);
          } else {
            isCorrect = userAnswers.length === correctAnswers.length &&
              userAnswers.every(ua => correctAnswers.includes(ua)) &&
              correctAnswers.every(ca => userAnswers.includes(ca));
          }

          if (isCorrect) {
            results.correctCount++;
          } else {
            results.incorrectCount++;
            results.wrongAnswersDetails.push({
              id: question.id,
              questionText: question.text,
              allOptions: question.answers,
              userSelected: userAnswers,
              correctOptions: correctAnswers,
              questionType: question.type
            });
          }
        }
      });
      localStorage.setItem('testResults', JSON.stringify(results));
      this.$router.push({ name: 'Result' });
    },
    formatTime(seconds) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  }
};
</script>

<template>
  <div class="flex justify-between w-full items-center mb-5">
    <b class="text-lg text-gray-600">Математика</b>
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
              @update:answers="updateAnswers(question.id, $event)" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <div class="flex mt-1.5 gap-2 justify-center">
      <Button v-for="(question, index) in questions" :key="question.id" @click="value = index" rounded
        :label="String(index + 1)" class="w-8 h-8 p-0" :outlined="value !== index" />
    </div>
  </div>
  <div class="flex justify-between items-center mt-5">
    <p class="text-xs text-gray-500">После истечения времени тест автоматически завершится, даже если вы не успели
      отметить все вопросы</p>
    <p class="text-xs font-medium text-gray-700">Оставшееся время: <span class="font-bold"
        style="letter-spacing: 1.5px; font-size: 15px;">{{ formatTime(timeLeft) }}</span></p>
    <Button label="Завершить тест" severity="warn" variant="outlined" size="small" @click="finishTest" />
  </div>
</template>