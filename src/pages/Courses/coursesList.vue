<script>
export default {
  name: "coursesList",
  data() {
    return {
      courses: [
        {
          image: "src/assets/images/user1.webp",
          name: "Высшая математика: основы и практика",
          author: "Иван Петров",
          rating: "4.8",
          difficulty: {title: "Сложный", type: "warning"},
        },
        {
          image: "src/assets/images/avwwfcawer.jpg",
          name: "Физика для начинающих: механика",
          author: "Александр Сидоров",
          rating: "4.6",
          difficulty: {title: "Средний", type: "info"},
        },
        {
          image: "src/assets/images/balloon.svg",
          name: "Русская литература XIX века",
          author: "Мария Ковалева",
          rating: "4.9",
          difficulty: {title: "Лёгкий", type: "success"},
        },
        {
          image: "src/assets/images/balloon.svg",
          name: "Всемирная история: от античности до современности",
          author: "Ольга Смирнова",
          rating: "4.7",
          difficulty: {title: "Средний", type: "info"},
        },
        {
          image: "src/assets/images/balloon2.svg",
          name: "Биология человека",
          author: "Дмитрий Лебедев",
          rating: "4.5",
          difficulty: {title: "Средний", type: "info"},
        },
        {
          image: "src/assets/images/balloon3.svg",
          name: "Органическая химия с нуля",
          author: "Алина Романова",
          rating: "4.3",
          difficulty: {title: "Сложный", type: "warning"},
        },
        {
          image: "src/assets/images/Без имени.jpg",
          name: "Английский для начинающих",
          author: "Виктория Белова",
          rating: "4.9",
          difficulty: {title: "Лёгкий", type: "success"},
        },
        {
          image: "src/assets/images/user1.webp",
          name: "Геометрия: от простого к сложному",
          author: "Николай Егоров",
          rating: "4.4",
          difficulty: {title: "Средний", type: "info"},
        },
        {
          image: "src/assets/images/it.webp",
          name: "Основы программирования на Python",
          author: "Елена Григорьева",
          rating: "4.9",
          difficulty: {title: "Лёгкий", type: "success"},
        },
        {
          image: "src/assets/images/economy.webp",
          name: "Экономика и финансовая грамотность",
          author: "Роман Никитин",
          rating: "4.6",
          difficulty: {title: "Средний", type: "info"},
        },
        {
          image: "src/assets/images/geography.webp",
          name: "География России",
          author: "Татьяна Шестакова",
          rating: "4.2",
          difficulty: {title: "Лёгкий", type: "success"},
        },
        {
          image: "src/assets/images/informatics.webp",
          name: "Информатика и основы алгоритмизации",
          author: "Антон Юрьев",
          rating: "4.7",
          difficulty: {title: "Сложный", type: "warning"},
        },
        {
          image: "src/assets/images/law.webp",
          name: "Право: базовые понятия",
          author: "Ирина Федорова",
          rating: "4.5",
          difficulty: {title: "Средний", type: "info"},
        },
        {
          image: "src/assets/images/philosophy.webp",
          name: "Введение в философию",
          author: "Сергей Алексеев",
          rating: "4.8",
          difficulty: {title: "Средний", type: "info"},
        },
        {
          image: "src/assets/images/art.webp",
          name: "История искусств: живопись и архитектура",
          author: "Наталья Васильева",
          rating: "4.9",
          difficulty: {title: "Лёгкий", type: "success"},
        },
        {
          image: "src/assets/images/art.webp",
          name: "История искусств: живопись и архитектура",
          author: "Наталья Васильева",
          rating: "4.9",
          difficulty: {title: "Лёгкий", type: "success"},
        }
      ],
      drawerVisible: false,
      selectedCourse: null
    }
  },
  methods: {
    openDrawer(course) {
      this.selectedCourse = course
      this.drawerVisible = true
    }
  }
}
</script>

<template>
  <div class="courses-list">
    <div v-for="c in courses" :key="c.name" class="course-item">
      <div class="image-container">
        <img :src="c.image" alt="course-image" class="w-full h-full object-cover" />
        <Tag :severity="c.difficulty.type" :value="c.difficulty.title" rounded class="absolute bottom-1 right-1" style="font-size: 11px; font-weight: 400; padding: 4px" />
        <div class="absolute top-1 right-1 cursor-pointer" @click="openDrawer(c)">
          <i class="fi fi-rr-info text-white"></i>
        </div>
      </div>
      <div class="info-container">
        <span class="course-name text-gray-600 font-medium">{{ c.name }}</span>
        <div class="flex gap-2 text-gray-500 font-medium text-xs">
          <div class="flex items-center gap-1.5">
            <i class="fi fi-rr-star text-xs text-yellow-500"></i>
            <span>{{ c.rating }}</span>
          </div>
          <span>{{ c.author }}</span>
        </div>
      </div>
    </div>
  </div>
  <Drawer v-model:visible="drawerVisible" position="right" :modal="true">
    <div v-if="selectedCourse">
      <p><strong>Название:</strong> {{ selectedCourse.name }}</p>
      <p><strong>Автор:</strong> {{ selectedCourse.author }}</p>
      <p><strong>Рейтинг:</strong> {{ selectedCourse.rating }}</p>
      <p><strong>Сложность:</strong> {{ selectedCourse.difficulty.title }}</p>
      <Button type="info" class="mt-4 w-full" size="small">Старт</Button>
    </div>
  </Drawer>
</template>

<style scoped>
.courses-list {
  @apply w-full h-full flex flex-wrap gap-2.5;
}

.course-item {
  @apply w-64 h-64 flex flex-col gap-1.5 rounded-lg overflow-hidden;
}

.image-container {
  height: 58%;
  min-height: 58%;
  @apply flex w-full relative;
}

.info-container {
  @apply p-1;
}
.course-name {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
}
</style>