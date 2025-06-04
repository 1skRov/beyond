<template>
  <div class="course-info-wrapper">
    <!-- Информация о самом курсе -->
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-blue-700 mb-2">
        О курсе
      </h3>
      <p class="text-gray-700 mb-4">
        {{ courseTitle || 'Название курса не указано' }}
      </p>
      <p class="text-gray-600 mb-4">
        {{ courseDescription || 'Описание курса отсутствует.' }}
      </p>

      <div v-if="tags && tags.length > 0">
        <h4 class="text-md font-medium text-blue-600 mb-2">Теги:</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in tags"
            :key="tag"
            class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <hr class="border-blue-200 mb-6" />

    <!-- Информация о выбранном уроке -->
    <div v-if="selectedLesson">
      <h3 class="text-xl font-semibold text-blue-700 mb-2">
        Текущий урок
      </h3>
      <p class="text-gray-800"><strong>Название:</strong> {{ selectedLesson.title }}</p>
      <p class="text-gray-800">
        <strong>Тип:</strong> {{ getLessonTypeDisplay(selectedLesson.type) }}
      </p>
      <p class="text-gray-800">
        <strong>Статус:</strong> {{ getLessonStatusDisplay(selectedLesson.status) }}
      </p>
    </div>
    <div v-else class="text-gray-500 italic">
      Урок не выбран.
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  courseTitle: String,
  courseDescription: String,
  tags: {
    type: Array,
    default: () => []
  },
  selectedLesson: {
    type: Object,
    default: null
  }
});

function getLessonTypeDisplay(type) {
  switch (type) {
    case 'video':
      return 'Видео';
    case 'image':
      return 'Изображение';
    case 'text':
      return 'Текст';
    case 'document':
      return 'Документ';
    default:
      return 'Неизвестно';
  }
}

function getLessonStatusDisplay(status) {
  switch (status) {
    case 'pending':
      return 'Не начат';
    case 'inProgress':
      return 'В процессе';
    case 'completed':
      return 'Завершён';
    default:
      return 'Неизвестно';
  }
}
</script>

<style scoped>
.course-info-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
