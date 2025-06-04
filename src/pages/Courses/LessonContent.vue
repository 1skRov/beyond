<template>
    <pre>{{ lesson }}</pre>
  <div class="lesson-content-wrapper flex flex-col h-full">
    <div v-if="!lesson" class="flex-1 flex items-center justify-center text-blue-600">
      Пожалуйста, выберите урок слева.
    </div>

    <div v-else class="flex-1 flex flex-col">
      <h2 class="text-2xl font-semibold text-blue-700 mb-4">
        {{ lesson.title }}
      </h2>

      <div v-if="lesson.type === 'video'" class="relative w-full" style="padding-top: 56.25%">
        <iframe
          v-if="isYouTubeLink(lesson.contentUrl)"
          :src="youtubeEmbedUrl(lesson.contentUrl)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
        ></iframe>
        <video
          v-else
          controls
          class="absolute top-0 left-0 w-full h-full rounded-md shadow-lg bg-black"
        >
          <source :src="lesson.contentUrl" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>

      <div v-if="lesson.type === 'text'" class="prose prose-blue mt-4">
        <div v-html="lesson.content"></div>
      </div>

      <div v-if="lesson.type === 'image'" class="mt-4">
        <img :src="lesson.contentUrl" alt="Изображение урока" class="w-full rounded-md shadow-sm" />
      </div>

      <div v-if="lesson.type === 'document'" class="mt-4">
        <a
          :href="lesson.contentUrl"
          target="_blank"
          class="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow"
        >
          Открыть документ
        </a>
      </div>

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
        <span v-if="lesson.status === 'completed'" class="text-green-600 font-semibold ml-2">
          Урок завершён
        </span>
      </div>

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
import { defineProps, defineEmits } from 'vue'
import CommentSection from './CommentSection.vue'

const props = defineProps({
  lesson: {
    type: Object,
    default: null
  }
})
const emit = defineEmits(['comment-added', 'lesson-status-updated-in-content'])

function updateStatus(newStatus) {
  if (props.lesson && props.lesson.id) {
    emit('lesson-status-updated-in-content', {
      lessonId: props.lesson.id,
      newStatus
    })
  }
}

function addComment(payload) {
  emit('comment-added', payload)
}

function isYouTubeLink(rawUrl) {
  if (!rawUrl) return false
  try {
    const u = new URL(rawUrl)
    return u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')
  } catch {
    return false
  }
}

function youtubeEmbedUrl(rawUrl) {
  if (!rawUrl) return ''
  try {
    const u = new URL(rawUrl)
    let id = ''
    if (u.hostname.includes('youtu.be')) {
      id = u.pathname.slice(1)
    } else {
      id = u.searchParams.get('v') || u.pathname.split('/').pop()
    }
    return id ? `https://www.youtube.com/embed/${id}` : rawUrl
  } catch {
    return rawUrl
  }
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
