<script>

import TestChart from "@/pages/Test/TestChart.vue";

export default {
  name: "SingleTestPage",
  components: {TestChart},
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
      options: ['С временем', 'Без времени'],
      visible: false,
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
  <div class="w-full flex gap-3 mt-3">
    <div class="test-list">
      <p class="">Список предметов</p>
      <div class="test-folder">
        <div class="test-folder-item" v-for="t in testItems">
          <div class="folder-icon">
            <i class="fi fi-sr-folder-minus"></i>
          </div>
          <div class="folder-content">
            <p class="name-test">{{ t.name }}</p>
            <div class="flex gap-3">
              <span class="update-time">обновлено 12.12.2005</span>
              <span class="rating"><i class="fi fi-rr-star"></i>{{ t.rating }}</span>
              <span class="count-user">{{ t.countUser }} прошли</span>
            </div>
            <div class="flex justify-between  items-center">
              <div class="flex gap-3">
                <div class="rounded w-3 h-3 bg-green-400"></div>
                <div class="rounded w-3 h-3 bg-yellow-400"></div>
                <div class="rounded w-3 h-3 bg-red-400"></div>
              </div>
              <div class="rounded-md px-1.5 py-1 bg-yellow-100 text-slate-800 font-medium">вопросов
                {{ t.questionsCount }}
              </div>
            </div>
            <div class="w-full justify-end flex mt-2">
              <button @click="visible = true"><i class="fi fi-rr-arrow-up-right-from-square"></i>начать тестирование
              </button>
            </div>
          </div>
        </div>
        <div class="card flex justify-center">
          <Dialog v-model:visible="visible" modal header="Математика" :style="{ width: '35rem' }">
            <div class="flex gap-2.5">
              <div class="flex flex-col gap-1">
                <span>Выберите уровень сложности</span>
                <div class="flex items-center gap-2">
                  <Checkbox inputId="ingredient1" name="pizza" value="Cheese"/>
                  <label for="ingredient1"> Легкий </label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox inputId="ingredient2" name="pizza" value="Mushroom"/>
                  <label for="ingredient2"> Средний </label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox inputId="ingredient3" name="pizza" value="Pepper"/>
                  <label for="ingredient3"> Сложный </label>
                </div>
              </div>
            </div>
            <div>
              Введите сколько вопросов должно быть в тесте
            </div>
            <div>Данный тест включает в себя следующие темы, вы можете убрать темы которые вам не подходят</div>
            <div class="w-full justify-end flex mt-2">
              <button
                  class="px-3 py-1.5 rounded-md text-sm text-blue-50 bg-blue-900 flex justify-end items-center gap-3"
                  @click="startTest"><i class="fi fi-rr-arrow-up-right-from-square"></i>начать тестирование
              </button>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
    <div class="rounded-md bg-white w-full h-full overflow-auto p-3">
      <p class="text-lg font-medium text-blue-900">История тестов по этому предмету</p>
      <div><TestChart></TestChart></div>
    </div>
  </div>
  <div>
  </div>
</template>

<style scoped lang="scss">
.test-list {
  width: 45%;
  @apply p-3 h-full overflow-y-auto bg-white rounded-md max-w-[450px];
  p {
    @apply text-blue-900 font-medium text-lg mb-3;
  }

  .test-folder {
    @apply flex flex-col gap-2;
    .test-folder-item {
      @apply p-2 rounded-md flex gap-2 border border-blue-100 duration-200 ease-in cursor-pointer;
      .folder-icon {
        @apply bg-blue-100 rounded-md flex items-center justify-center;
        width: 52px;
        min-width: 52px;
        height: 52px;
        min-height: 52px;

        i {
          font-size: 24px;
          @apply text-blue-900;
        }
      }

      .folder-content {
        @apply w-full;
        .name-test {
          @apply text-slate-800 m-0 mb-1.5;
        }

        .update-time {
          @apply text-slate-800;
        }

        .rating {
          @apply flex gap-2 items-center text-slate-800;
          i {
            font-size: 11px;
            @apply text-yellow-500;
          }
        }

        button {
          @apply px-3 py-1.5 rounded-md text-sm text-blue-50 bg-blue-900 flex justify-end;
          @apply flex items-center gap-3;
          i {
            font-size: 14px;
          }
        }
      }

      &:hover {
        @apply bg-blue-100;
        .folder-icon {
          @apply bg-blue-900;
          i {
            @apply text-blue-100;
          }
        }
      }
    }
  }
}
</style>