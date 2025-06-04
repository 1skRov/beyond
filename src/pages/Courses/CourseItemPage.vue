<template>
  <!-- Корневая обёртка: min-h-screen, светло-голубой фон и флекс-контейнер -->
  <div class="min-h-screen bg-blue-50 flex">
    <!-- Левый сайдбар (CourseSidebar) -->
    <div class="w-1/4 bg-white shadow-md overflow-y-auto">
      <!-- Оборачиваем в p-4, чтобы был одинаковый padding -->
      <div class="p-4">
        <CourseSidebar :courseData="course" @lesson-selected="handleLessonSelected"
          @lesson-status-changed="handleLessonStatusUpdate" />
      </div>
    </div>

    <!-- Центральный контент: видео/контент урока + комментарии -->
    <div class="flex-1 mx-4 my-4 bg-white shadow-md overflow-y-auto rounded-lg">
      <LessonContent :lesson="selectedLesson" @comment-added="handleAddComment"
        @lesson-status-updated-in-content="handleLessonStatusUpdate" />
    </div>

    <!-- Правый информационный блок (CourseInfoPanel) -->
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

// Вместо сервиса localStorageService просто читаем/пишем напрямую JSON из файла
import initialCourseDataFromFile from '@/db/course-data.json';

const COURSE_STORAGE_KEY = 'kazakhstanHistoryUserProgress';

const course = ref({
  courseTitle: '',
  courseDescription: '',
  tags: [],
  stages: []
});
const selectedLesson = ref(null);

// При монтировании пытаемся загрузить курс из localStorage, иначе — из JSON-файла
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

  // Можно сразу поставить первый урок, если хочется
  // if (course.value.stages?.[0]?.lessons?.[0]) {
  //   selectedLesson.value = course.value.stages[0].lessons[0];
  // }
});

// Каждый раз, когда меняется course, перезаписываем в localStorage
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

// Функция для обновления статуса урока внутри структуры course
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
    // Пересчитаем progress: сколько % уроков завершено
    const completedCount = lessons.filter((l) => l.status === 'completed').length;
    stage.progress = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;
    return { ...stage, lessons };
  });

  if (lessonFound) {
    return { ...course.value, stages: updatedStages };
  }
  return course.value;
}

// Функция для добавления комментария в нужный урок
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

// Когда пользователь кликает в Sidebar на урок
function handleLessonSelected(lesson) {
  selectedLesson.value = lesson;
}

// Когда приходит событие «урок поменял статус» (либо из Sidebar, либо из контента)
function handleLessonStatusUpdate({ lessonId, newStatus }) {
  const updated = updateLessonStatus(lessonId, newStatus);
  course.value = updated;

  // Если в данный момент выбран этот урок, обновляем его копию
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

// Когда приходит событие «добавлен комментарий» из LessonContent
function handleAddComment({ lessonId, text }) {
  const updated = addCommentToLesson(lessonId, text);
  course.value = updated;

  // Если добавили комментарий к выбранному сейчас уроку, обновляем selectedLesson
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
/* Если захотите ещё глобальный blue-gradient-фон или что-то, можно сюда */
</style>
