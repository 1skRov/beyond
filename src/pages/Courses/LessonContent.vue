<template>
  <div class="lesson-content-wrapper flex flex-col h-full">
    <div v-if="!lesson" class="flex-1 flex items-center justify-center text-blue-600">
      Пожалуйста, выберите урок слева.
    </div>

    <div v-else class="flex-1 flex flex-col">
      <!-- Заголовок урока -->
      <h2 class="text-2xl font-semibold text-blue-700 mb-4">
        {{ lesson.title }}
      </h2>

      <!-- Если тип — видео, то встраиваем iframe -->
      <div v-if="lesson.type === 'video'" class="relative w-full" style="padding-top: 56.25%">
        <iframe
          :src="youtubeEmbedUrl(lesson.content)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
        ></iframe>
      </div>

      <!-- Можно добавить условие для других типов (image, text, document) -->
      <div v-if="lesson.type === 'text'" class="prose prose-blue mt-4">
        <!-- Например, просто вывести текст из lesson.content -->
        <p v-html="lesson.content"></p>
      </div>

      <div v-if="lesson.type === 'image'" class="mt-4">
        <img :src="lesson.content" alt="Изображение урока" class="w-full rounded-md shadow-sm" />
      </div>

      <div v-if="lesson.type === 'document'" class="mt-4">
        <!-- Предположим, lesson.content — это ссылка на PDF -->
        <a
          :href="lesson.content"
          target="_blank"
          class="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow"
        >
          Открыть документ
        </a>
      </div>

      <!-- Раздел управления статусом урока (например, кнопки «Начать», «Завершить» и т.п.) -->
      <div class="flex items-center gap-4 mt-6">
        <span class="font-medium text-blue-600">Статус:</span>
        <button
          v-if="lesson.status !== 'inProgress'"
          @click="updateStatus('inProgress')"
          class="bg-blue-400 hover:bg-blue-500 text-white py-1 px-3 rounded-md transition"
        >
          Начать
        </button>
        <button
          v-if="lesson.status === 'inProgress'"
          @click="updateStatus('completed')"
          class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md transition"
        >
          Завершить
        </button>
        <span
          v-if="lesson.status === 'completed'"
          class="text-green-600 font-semibold ml-2"
        >
          Урок завершён
        </span>
      </div>

      <!-- Секция комментариев -->
      <div class="mt-8 flex-1 flex flex-col">
        <CommentSection
          :comments="lesson.comments"
          :lessonId="lesson.id"
          @add-comment="addComment"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CommentSection from './CommentSection.vue';

const props = defineProps({
  lesson: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['comment-added', 'lesson-status-updated-in-content']);

// Преобразует обычную ссылку YouTube (например, https://youtu.be/ABC123) в embed-формат
function youtubeEmbedUrl(rawUrl) {
  if (!rawUrl) return '';
  // Примерная логика: если ссылка вида «https://youtu.be/VIDEO_ID» или «https://www.youtube.com/watch?v=VIDEO_ID»
  // то сделаем «https://www.youtube.com/embed/VIDEO_ID»
  try {
    const url = new URL(rawUrl);
    let videoId = '';

    if (url.hostname.includes('youtu.be')) {
      videoId = url.pathname.slice(1);
    } else if (url.hostname.includes('youtube.com')) {
      videoId = url.searchParams.get('v');
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : rawUrl;
  } catch {
    return rawUrl;
  }
}

// Отправляем апдейт статуса наверх
function updateStatus(newStatus) {
  if (props.lesson && props.lesson.id) {
    emit('lesson-status-updated-in-content', { lessonId: props.lesson.id, newStatus });
  }
}

// Когда пользователь добавил комментарий в CommentSection
function addComment(payload) {
  // payload = { lessonId, text }
  emit('comment-added', payload);
}
</script>

<style scoped>
.lesson-content-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
