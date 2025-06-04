<script>
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';

export default {
  name: "QuestionItem",
  components: { RadioButton, Checkbox },
  props: {
    question: Object,
    selectedAnswers: {
      type: [Array, String, null],
      default: () => ([])
    }
  },
  data() {
    return {
      chosenAnswers: this.question.type === 'single'
        ? (Array.isArray(this.selectedAnswers) ? this.selectedAnswers[0] : this.selectedAnswers)
        : [...this.selectedAnswers]
    };
  },
  watch: {
    chosenAnswers: {
      handler(newValue) {
        this.$emit("update:answers", newValue);
      },
      deep: true
    },
    selectedAnswers: {
      handler(newVal) {
        if (this.question.type === 'single') {
          this.chosenAnswers = Array.isArray(newVal) ? newVal[0] : newVal;
        } else {
          if (JSON.stringify(this.chosenAnswers) !== JSON.stringify(newVal)) {
            this.chosenAnswers = [...newVal];
          }
        }
      },
      deep: true
    }
  }
};
</script>

<template>
  <div>
    <p class="m-0 border-b pb-2 text-gray-700 text-base">{{ question.text }}</p>
    <div class="flex flex-col gap-3 mt-4">
      <div v-for="(answer, index) in question.answers" :key="index"
        class="flex items-center gap-2.5 p-2 rounded-md hover:bg-indigo-50 transition-colors">
        <RadioButton v-if="question.type === 'single'" v-model="chosenAnswers" :inputId="question.id + '_' + index"
          :name="'question_' + question.id" :value="answer.text" />
        <Checkbox v-else v-model="chosenAnswers" :inputId="question.id + '_' + index" :value="answer.text" />
        <label :for="question.id + '_' + index" class="text-gray-800 cursor-pointer">{{ answer.text }}</label>
      </div>
    </div>
  </div>
</template>