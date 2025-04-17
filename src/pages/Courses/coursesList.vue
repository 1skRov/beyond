<script>
import CourseFilters from "@/pages/Courses/CourseFilters.vue";

export default {
  name: "coursesList",
  components: {CourseFilters},
  data() {
    return {
      courses: [
        {
          name: "Высшая математика: основы и практика",
          author: "Иван Петров",
          authorImage: "data:image/jpeg;base64,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",
          duration: "20",
          rating: "4.8",
        },
        {
          name: "Физика для начинающих: механика",
          author: "Александр Сидоров",
          authorImage: "",
          duration: "20",
          rating: "4.6",
        },
        {
          name: "Русская литература XIX века",
          author: "Мария Ковалева",
          authorImage: "",
          duration: "20",
          rating: "4.9",
        },
      ],
      drawerVisible: false,
      courseItem: null,
      tags: [
        "История",
        "История Казахстана",
        "Шёлковый путь",
        "Казахское ханство",
        "СССР",
        "Независимость",
        "Археология",
        "Этнография",
        "Культура",
        "Государственность",
        "Политика",
        "Экономика",
        "Образование",
        "Современность",
        "Исторические источники",
        "Монгольское нашествие",
        "Золотая Орда",
        "Революция 1917",
        "Индустриализация",
        "Репрессии",
        "Вторая мировая война",
        "Независимый Казахстан",
        "Конституция",
        "Торговля",
        "Цивилизации",
        "Хронология",
        "Геополитика",
        "Национальное самосознание"
      ]
    }
  },
  methods: {
    openDrawer(item) {
      this.drawerVisible = true;
      this.courseItem = item;
    },
    startCourse(){
      this.$router.push({ name: "CoursesItem" });
    }
  }
}
</script>

<template>
  <div class="course-filters">
    <course-filters></course-filters>
  </div>
  <table class="w-full">
    <tr>
      <th align="left">Курс</th>
      <th align="left">Автор</th>
      <th align="left">Продолжительность</th>
      <th align="left">Рейтинг</th>
      <th align="left"></th>
    </tr>
    <tr v-for="(c, index) in courses" :key="index">
      <td>{{ c.name }}</td>
      <td>
        <div class="flex items-center gap-2">
          <img
              v-if="c.authorImage"
              :src="c.authorImage"
              alt="author"
              class="w-8 h-8 rounded-full object-cover"
          />
          <i v-else class="fi fi-rr-circle-user block text-blue-500 text-2xl -mb-1"></i>
          {{ c.author }}
        </div>
      </td>
      <td>{{ c.duration }} ч.</td>
      <td>
        <div class="flex gap-2 items-center">
          {{ c.rating }}<i class="fi fi-sr-star text-yellow-500 text-xs block -mb-0.5"></i>
        </div>
      </td>
      <td>
        <Button class="flex items-center text-xs gap-2" size="small" @click="openDrawer(c)"><i
            class="fi fi-rr-info block"></i></Button>
      </td>
    </tr>
  </table>
  <Drawer v-model:visible="drawerVisible" position="right" :modal="true" style="width: 50vw">
    <template #header>
      <p class="text-lg">{{courseItem.name}}</p>
    </template>
    <Accordion value="0">
      <AccordionPanel value="0">
        <AccordionHeader>Информация про автора</AccordionHeader>
        <AccordionContent>
          <div class="flex gap-2 items-center text-slate-500">
            <img
                v-if="courseItem.authorImage"
                :src="courseItem.authorImage"
                alt="author"
                class="w-8 h-8 rounded-full object-cover"
            />
            <i v-else class="fi fi-rr-circle-user block text-blue-500 text-2xl -mb-1"></i>
            {{ courseItem.author }}
          </div>
          <div class="pt-2 text-slate-500">Преподаватель истории казахстана</div>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Информация про курс</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <p class="my-3">Курс содержит следующие теги</p>
            <div class="flex flex-wrap gap-2">
              <div v-for="t in tags" class="rounded-full py-1 px-2 bg-indigo-100 text-indigo-600 cursor-pointer hover:bg-indigo-200 hover:text-indigo-800">
                {{t}}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>Содержание курса</AccordionHeader>
        <AccordionContent>

        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader>Отзывы</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    <template #footer>
      <div class="flex justify-end">
        <Button label="Перейти к курсу" size="small" @click="startCourse"></Button>
      </div>
    </template>
  </Drawer>
</template>

<style scoped>
th {
  @apply text-gray-400 font-medium pb-2;
}

td {
  @apply border-0 border-solid border-b border-gray-200 py-2.5 cursor-pointer text-gray-600;
  font-size: 15px;
}

tr:hover {
  @apply bg-blue-50;
}

img {
  vertical-align: middle;
}
.info-item {
  @apply py-2 border-0 border-b border-gray-200;
}
</style>