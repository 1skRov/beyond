<template>
  <div class="min-h-screen bg-blue-50 flex">
    <div class="w-1/4 bg-white shadow-md overflow-y-auto">
      <div class="p-4">
        <CourseSidebar :courseData="course" @lesson-selected="handleLessonSelected"
          @lesson-status-changed="handleLessonStatusUpdate" />
      </div>
    </div>

    <div class="flex-1 mx-4 my-4 bg-white shadow-md overflow-y-auto rounded-lg">
      <LessonContent :lesson="selectedLesson" @comment-added="handleAddComment"
        @lesson-status-updated-in-content="handleLessonStatusUpdate" />
    </div>

    <div class="w-1/4 bg-white shadow-md overflow-y-auto">
      <div class="p-4">
        <CourseInfoPanel :courseTitle="course.courseTitle" :courseDescription="course.courseDescription"
          :tags="course.tags" :selectedLesson="selectedLesson" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import CourseSidebar from './CourseSidebar.vue';
import LessonContent from './LessonContent.vue';
import CourseInfoPanel from './CourseInfoPanel.vue';

import initialCourseDataFromFile from '@/db/course-data.json';

const COURSE_STORAGE_KEY = 'kazakhstanHistoryUserProgress';

const course = ref({
  courseTitle: '',
  courseDescription: '',
  tags: [],
  stages: []
});
const selectedLesson = ref(null);

onMounted(() => {
  const stored = localStorage.getItem(COURSE_STORAGE_KEY);
  if (stored) {
    try {
      course.value = JSON.parse(stored);
    } catch (e) {
      console.error('Не удалось распарсить localStorage, загружаем из файла.', e);
      course.value = JSON.parse(JSON.stringify(initialCourseDataFromFile));
    }
  } else {
    course.value = JSON.parse(JSON.stringify(initialCourseDataFromFile));
  }
});

watch(
  course,
  (newVal) => {
    try {
      localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(newVal));
    } catch (e) {
      console.error('Ошибка при сохранении в localStorage', e);
    }
  },
  { deep: true }
);

function updateLessonStatus(lessonId, newStatus) {
  let lessonFound = false;

  const updatedStages = course.value.stages.map((stage) => {
    const lessons = stage.lessons.map((lesson) => {
      if (lesson.id === lessonId) {
        lesson.status = newStatus;
        lessonFound = true;
      }
      return lesson;
    });
    const completedCount = lessons.filter((l) => l.status === 'completed').length;
    stage.progress = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;
    return { ...stage, lessons };
  });

  if (lessonFound) {
    return { ...course.value, stages: updatedStages };
  }
  return course.value;
}

function addCommentToLesson(lessonId, commentText, user = 'Пользователь') {
  let commentAdded = false;

  const updatedStages = course.value.stages.map((stage) => {
    const lessons = stage.lessons.map((lesson) => {
      if (lesson.id === lessonId) {
        if (!lesson.comments) {
          lesson.comments = [];
        }
        lesson.comments.push({
          user,
          text: commentText,
          timestamp: new Date().toISOString()
        });
        commentAdded = true;
      }
      return lesson;
    });
    return { ...stage, lessons };
  });

  if (commentAdded) {
    return { ...course.value, stages: updatedStages };
  }
  return course.value;
}
function handleLessonSelected(lesson) {
  selectedLesson.value = lesson;
}

function handleLessonStatusUpdate({ lessonId, newStatus }) {
  const updated = updateLessonStatus(lessonId, newStatus);
  course.value = updated;

  if (selectedLesson.value && selectedLesson.value.id === lessonId) {
    const foundStage = updated.stages.find((st) =>
      st.lessons.some((l) => l.id === lessonId)
    );
    if (foundStage) {
      selectedLesson.value = {
        ...foundStage.lessons.find((l) => l.id === lessonId)
      };
    }
  }
}

function handleAddComment({ lessonId, text }) {
  const updated = addCommentToLesson(lessonId, text);
  course.value = updated;

  if (selectedLesson.value && selectedLesson.value.id === lessonId) {
    const foundStage = updated.stages.find((st) =>
      st.lessons.some((l) => l.id === lessonId)
    );
    if (foundStage) {
      selectedLesson.value = {
        ...foundStage.lessons.find((l) => l.id === lessonId)
      };
    }
  }
}
</script>

<style>
</style>
