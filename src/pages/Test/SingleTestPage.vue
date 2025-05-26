<script>

export default {
  name: "SingleTestPage",
  data() {
    return {
      topics: [
        {
          topic: "Математика",
          testCount: "140"
        },
        {
          topic: "География",
          testCount: "100"
        },
        {
          topic: "Физика",
          testCount: "120"
        },
        {
          topic: "Биология",
          testCount: "900"
        },
        {
          topic: "История Казахстана",
          testCount: "900"
        },
        {
          topic: "Всемирная история",
          testCount: "900"
        },
        {
          topic: "Химия",
          testCount: "900"
        },
        {
          topic: "English",
          testCount: "900"
        },
        {
          topic: "Казахский язык",
          testCount: "900"
        },
        {
          topic: "Русский язык",
          testCount: "900"
        },
        {
          topic: "Информатика",
          testCount: "900"
        },
        {
          topic: "Право",
          testCount: "900"
        },
      ],
      testItems: [
        {
          name: "Математика",
          time: "40",
          questionsCount: "25",
          difficulty: {title: "средняя", type: "warn"},
          countUser: "485",
          rating: "1.2",
        },
        {
          name: "Физика",
          time: "50",
          questionsCount: "30",
          difficulty: {title: "высокая", type: "danger"},
          countUser: "320",
          rating: "4.8"
        },
        {
          name: "История Казахстана",
          time: "35",
          questionsCount: "20",
          difficulty: {title: "низкая", type: "success"},
          countUser: "270",
          rating: "3.9"
        },
        {
          name: "География",
          time: "45",
          questionsCount: "28",
          difficulty: {title: "средняя", type: "warn"},
          countUser: "410",
          rating: "4.0"
        },
        {
          name: "Информатика",
          time: "60",
          questionsCount: "35",
          difficulty: {title: "высокая", type: "danger"},
          countUser: "540",
          rating: "4.7"
        }
      ],
      value: 'С временем',
      selectedCity: "null",
      cities: [
        {name: 'Сложный', code: 'NY'},
        {name: 'Простой', code: 'RM'},
        {name: 'Средний', code: 'LDN'},
      ],
      options: ['С временем', 'Без времени']
    }
  },
  methods: {
    startTest() {
      const routeData = this.$router.resolve({name: 'testItem'});
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<template>
  <div class="w-full flex gap-2">
    <div class="side-test-bar">
      <p class="text-slate-500 font-medium text-lg mb-3">Список предметов</p>
      <div class="test-folder">
        <div class="test-folder-item" v-for="t in topics">
          <div class="folder-icon">
            <i class="fi fi-sr-folder-minus"></i>
          </div>
          <div class="folder-content">
            <div><p class="font-medium py-1" style="font-size: 18px;">{{ t.topic }}</p><p class="text-xs text-slate-500">последнее обновление 12.12.2005</p></div>
            <p class="text-xs font-bold text-indigo-700">{{t.testCount}} <span class="font-normal">вопросов</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-3">
      <p class="text-slate-500 font-medium text-lg mb-3">Список тестов</p>
      <div class="flex flex-wrap gap-10">
        <div class="flex flex-col p-2.5 rounded w-36 h-auto relative" style="background: #ebedfa;" @click="startTest" v-tooltip="'Начать тестирование'">
          <div>
            <i class="fi fi-ss-folder-open" style="color: #51489c; font-size: 30px;"></i>
          </div>
          <div class="absolute top-1.5 right-1.5 text-xs py-1 px-1.5 text-indigo-700 font-medium bg-indigo-200 rounded-full">Сложная</div>
          <div class="text-slate-600 font-medium my-2.5">Вопросов: 48</div>
        </div>
        <div class="flex flex-col p-2.5 rounded w-36 h-auto relative" style="background: #ebedfa;" @click="startTest" v-tooltip="'Начать тестирование'">
          <div>
            <i class="fi fi-ss-folder-open" style="color: #51489c; font-size: 30px;"></i>
          </div>
          <div class="absolute top-1.5 right-1.5 text-xs py-1 px-1.5 text-indigo-700 font-medium bg-indigo-200 rounded-full">Средняя</div>
          <div class="text-slate-600 font-medium my-2.5">Вопросов: 108</div>
        </div>
        <div class="flex flex-col p-2.5 rounded w-36 h-auto relative" style="background: #ebedfa;" @click="startTest"
             v-tooltip="'Начать тестирование'">
          <div>
            <i class="fi fi-ss-folder-open" style="color: #51489c; font-size: 30px;"></i>
          </div>
          <div class="absolute top-1.5 right-1.5 text-xs py-1 px-1.5 text-indigo-700 font-medium bg-indigo-200 rounded-full">Легкая</div>
          <div class="text-slate-600 font-medium my-2.5">Вопросов: 68</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <!--    <button @click="startTest">start</button>-->
  </div>
</template>

<style scoped>
.side-test-bar {
  width: 45%;
  @apply py-3 h-full overflow-y-auto;
}

.test-folder {
  @apply flex flex-col gap-2.5 w-full;
}

.test-folder-item {
  @apply w-full flex rounded-lg gap-2 cursor-pointer border border-slate-200 overflow-hidden h-16 pr-3;
}

.test-folder-item:hover {
  @apply shadow-md;
}

.folder-content {
  @apply w-full flex justify-between gap-1.5 text-slate-600 items-center;
}

.folder-icon {
  @apply p-2 bg-indigo-200 w-16 h-16 flex items-center justify-center rounded-lg;
  background: #f7f5ff;
}

.folder-icon i {
  @apply block;
  text-shadow: 10px 10px 20px rgba(57, 5, 243, 0.3);
  font-size: 30px;
  color: #3734a9;
}
</style>