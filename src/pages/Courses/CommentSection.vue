<template>
    <div class="comment-section-wrapper flex flex-col h-full">
        <h4 class="text-lg font-semibold text-blue-700 mb-4">
            Комментарии ({{ commentsCount }})
        </h4>

        <!-- Список комментариев -->
        <div v-if="comments && comments.length > 0" class="comments-list flex-1 overflow-y-auto pr-4 space-y-4">
            <div v-for="(comment, idx) in comments" :key="comment.timestamp + '-' + idx"
                class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-blue-800">{{ comment.user }}</span>
                    <span class="text-sm text-gray-500">{{ formatDate(comment.timestamp) }}</span>
                </div>
                <p class="text-gray-700 whitespace-pre-wrap">{{ comment.text }}</p>
            </div>
        </div>

        <div v-else class="text-gray-500 italic mb-4">
            Нет комментариев. Будьте первым!
        </div>

        <!-- Форма добавления нового комментария -->
        <div class="mt-4">
            <label class="block text-blue-700 font-medium mb-1" for="newComment">Оставить комментарий</label>
            <textarea id="newComment" v-model="newCommentText" rows="3"
                class="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Ваш комментарий..."></textarea>
            <button @click="submitComment" :disabled="!newCommentText.trim()"
                class="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50 transition">
                Отправить
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    comments: {
        type: Array,
        default: () => []
    },
    lessonId: {
        type: [String, Number],
        required: true
    }
});

const emit = defineEmits(['add-comment']);

const newCommentText = ref('');

// Количество комментариев (ноль, если нет)
const commentsCount = computed(() => (props.comments ? props.comments.length : 0));

function formatDate(timestamp) {
    if (!timestamp) return '';
    try {
        return new Date(timestamp).toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch {
        return timestamp;
    }
}

function submitComment() {
    const text = newCommentText.value.trim();
    if (text) {
        emit('add-comment', { lessonId: props.lessonId, text });
        newCommentText.value = '';
    }
}
</script>

<style scoped>
.comment-section-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.comments-list {
    /* Отступ справа, чтобы не пересекался со скроллом */
}
</style>
