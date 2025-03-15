<template>
  <div v-if="question">
    <h2>{{ question.text }}</h2>
    <div v-for="option in question.options" :key="option">
      <button @click="selectAnswer(option)">
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  question: Object,
  onAnswer: Function
});

const selectAnswer = (option) => {
  props.onAnswer(option);
};
</script>