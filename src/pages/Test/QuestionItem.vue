<script>
export default {
  name: "QuestionItem",
  props: {
    question: Object,
    selectedAnswers: Array
  },
  data() {
    return {
      chosenAnswers: []
    };
  },
  watch: {
    chosenAnswers() {
      this.$emit("update:answers", this.chosenAnswers);
    }
  }
};
</script>

<template>
  <div>
    <p class="m-0 border-b pb-2">{{ question.text }}</p>
    <div class="flex flex-col gap-2 mt-4">
      <div v-for="(answer, index) in question.answers" :key="index" class="flex items-center gap-2.5">
        <RadioButton v-if="question.type === 'single'" v-model="chosenAnswers" :value="answer.text" />
        <Checkbox v-else v-model="chosenAnswers" :value="answer.text" />
        <label>{{ answer.text }}</label>
      </div>
    </div>
  </div>
</template>
