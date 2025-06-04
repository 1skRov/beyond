<script>
import TestChart from "@/pages/Test/TestChart.vue";
import {
  createSubject,
  getSubjectsList,
  deleteSubject,
  createTopic,
  getTopicsBySubjectId,
  deleteTopicById
} from "@/services/testServices.js";


export default {
  name: "SingleTestPage",
  components: {
    TestChart,
    Drawer,
    Dropdown,
    InputText,
    Textarea,
    RadioButton,
    Button,
    Checkbox,
    Dialog,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
  },
  data() {
    return {
      testItems: [
        { name: "Математика", time: "40", questionsCount: "25", difficulty: { title: "средняя", type: "warn" }, countUser: "485", rating: "1.2" },
        { name: "Физика", time: "50", questionsCount: "30", difficulty: { title: "высокая", type: "danger" }, countUser: "320", rating: "4.8" },
        { name: "История Казахстана", time: "35", questionsCount: "20", difficulty: { title: "низкая", type: "success" }, countUser: "270", rating: "3.9" },
        { name: "География", time: "45", questionsCount: "28", difficulty: { title: "средняя", type: "warn" }, countUser: "410", rating: "4.0" },
        { name: "Информатика", time: "60", questionsCount: "35", difficulty: { title: "высокая", type: "danger" }, countUser: "540", rating: "4.7" }
      ],
      visible: false,

      value: 'С временем',
      selectedCity: null,
      cities: [{ name: 'Сложный', code: 'NY' }, { name: 'Простой', code: 'RM' }, { name: 'Средний', code: 'LDN' }], // Не используется, но было
      options: ['С временем', 'Без времени'],

      subName: "",
      topicName: "",
      subjects: [],
      allTopicsWithSubjectDetails: [],
      topics: [],

      isTestDrawerVisible: false,
      newTest: {
        id: null,
        subject: null,
        topic: null,
        question: "",
        options: [{ text: "", id: 1 }, { text: "", id: 2 }],
        correctAnswerId: null,
        image: null, video: null, audio: null, file: null,
      },
      createdTests: [],
      availableTopicsForSelectedSubject: [],
      testName: "",
    };
  },
  mounted() {
    this.fetchAllData();
    this.loadTestsFromLocalStorage();
  },
  watch: {
    'newTest.subject'(newSubject) {
      if (newSubject) {
        this.availableTopicsForSelectedSubject = this.allTopicsWithSubjectDetails.filter(
          topic => topic.subject_id === newSubject.id
        );
        this.newTest.topic = null;
      } else {
        this.availableTopicsForSelectedSubject = [];
        this.newTest.topic = null;
      }
    }
  },
  methods: {
    startTest() {
      const routeData = this.$router.resolve({ name: 'testItem' });
      window.open(routeData.href, '_blank');
    },
    async fetchAllData() {
      try {
        this.subjects = await getSubjectsList();
        await this.fetchAllTopics();
      } catch (error) {
        console.error("Ошибка при загрузке начальных данных:", error);
      }
    },
    async fetchAllTopics() {
      let allTopicsAccumulated = [];
      for (const subject of this.subjects) {
        try {
          const topicsForSubject = await getTopicsBySubjectId(subject.id);
          const topicsWithSubjectInfo = topicsForSubject.map(topic => ({
            ...topic,
            subjectName: subject.name,
            subject_id: subject.id
          }));
          allTopicsAccumulated = allTopicsAccumulated.concat(topicsWithSubjectInfo);
        } catch (error) {
          console.error(`Ошибка при загрузке тем для предмета ${subject.name}:`, error);
        }
      }
      this.allTopicsWithSubjectDetails = allTopicsAccumulated;
    },
    async createSub() {
      if (!this.subName || this.subName.trim() === "") {
        alert("Название предмета не может быть пустым");
        return;
      }
      const payload = { name: this.subName.trim() };
      try {
        await createSubject(payload);
        this.subName = "";
        await this.fetchAllData();
      } catch (err) {
        console.error("Ошибка при создании предмета:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Ошибка при создании предмета");
      }
    },
    async deleteSub(id) {
      try {
        await deleteSubject(id);
        await this.fetchAllData();
      } catch (err) {
        console.error("Ошибка при удалении предмета:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Не удалось удалить предмет. Возможно, с ним связаны темы или тесты.");
      }
    },
    async createNewTopicForSubject(subjectId) {
      if (!this.topicName || this.topicName.trim() === "") {
        alert("Название темы не может быть пустым");
        return;
      }
      const payload = { name: this.topicName.trim(), subject_id: subjectId };
      try {
        await createTopic(payload);
        this.topicName = "";
        await this.fetchAllTopics();
      } catch (err) {
        console.error("Ошибка при создании темы:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Ошибка при создании темы");
      }
    },
    async deleteExistingTopic(topicId) {
      try {
        await deleteTopicById(topicId);
        await this.fetchAllTopics();
      } catch (err) {
        console.error("Ошибка при удалении темы:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Не удалось удалить тему.");
      }
    },

    openTestDrawer() {
      this.resetNewTestForm();
      this.isTestDrawerVisible = true;
    },
    closeTestDrawer() {
      this.isTestDrawerVisible = false;
    },
    resetNewTestForm() {
      this.newTest = {
        id: Date.now(),
        subject: null, topic: null, question: "",
        options: [{ text: "", id: Date.now() + 1 }, { text: "", id: Date.now() + 2 }],
        correctAnswerId: null,
        image: null, video: null, audio: null, file: null,
      };
      this.availableTopicsForSelectedSubject = [];
    },
    addTestOption() {
      if (this.newTest.options.length < 6) {
        this.newTest.options.push({ text: "", id: Date.now() });
      }
    },
    removeTestOption(index) {
      if (this.newTest.options.length > 2) {
        const removedOption = this.newTest.options.splice(index, 1)[0];
        if (this.newTest.correctAnswerId === removedOption.id) {
          this.newTest.correctAnswerId = null;
        }
      }
    },
    handleFileUpload(event, type) {
      const file = event.target.files[0];
      if (file) {
        this.newTest[type] = { name: file.name, type: file.type };
      } else {
        this.newTest[type] = null;
      }
      event.target.value = null;
    },
    saveTest() {
      if (!this.newTest.subject || !this.newTest.topic || !this.newTest.question.trim()) {
        alert("Выберите предмет, тему и введите вопрос."); return;
      }
      if (this.newTest.options.some(opt => !opt.text.trim()) || this.newTest.options.length < 2) {
        alert("Все варианты ответов должны быть заполнены (минимум 2)."); return;
      }
      if (this.newTest.correctAnswerId === null) {
        alert("Выберите правильный вариант ответа."); return;
      }
      this.createdTests.push({ ...this.newTest });
      this.saveTestsToLocalStorage();
      this.closeTestDrawer();
    },
    loadTestsFromLocalStorage() {
      const tests = localStorage.getItem('createdTests');
      if (tests) this.createdTests = JSON.parse(tests);
    },
    saveTestsToLocalStorage() {
      localStorage.setItem('createdTests', JSON.stringify(this.createdTests));
    },
    deleteCreatedTest(testId) {
      this.createdTests = this.createdTests.filter(test => test.id !== testId);
      this.saveTestsToLocalStorage();
    },
  }
}
</script>

<template>
  <div class="w-full flex gap-3 mt-3">
    <Tabs value="0" class="w-full">
      <TabList>
        <Tab value="0">Список тестов</Tab>
        <Tab value="1">Изменить тесты</Tab>
      </TabList>
      <TabPanels class="w-full">
        <TabPanel value="0">
          <div class="w-full flex gap-3">
            <div class="test-list">
              <p class="">Список предметов</p>
              <div class="test-folder">
                <div class="test-folder-item" v-for="t in testItems" :key="t.name">
                  <div class="folder-icon"><i class="fi fi-sr-folder-minus"></i></div>
                  <div class="folder-content">
                    <p class="name-test">{{ t.name }}</p>
                    <div class="flex gap-3">
                      <span class="update-time">обновлено 12.12.2005</span>
                      <span class="rating"><i class="fi fi-rr-star"></i>{{ t.rating }}</span>
                      <span class="count-user">{{ t.countUser }} прошли</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="flex gap-3">
                        <div class="rounded w-3 h-3 bg-green-400"></div>
                        <div class="rounded w-3 h-3 bg-yellow-400"></div>
                        <div class="rounded w-3 h-3 bg-red-400"></div>
                      </div>
                      <div class="rounded-md px-1.5 py-1 bg-yellow-100 text-slate-800 font-medium">
                        вопросов {{ t.questionsCount }}
                      </div>
                    </div>
                    <div class="w-full justify-end flex mt-2">
                      <button @click="visible = true">
                        <i class="fi fi-rr-arrow-up-right-from-square"></i>начать тестирование
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
                          <Checkbox inputId="ingredient1" name="pizza" value="Cheese" />
                          <label for="ingredient1"> Легкий </label>
                        </div>
                        <div class="flex items-center gap-2">
                          <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" />
                          <label for="ingredient2"> Средний </label>
                        </div>
                        <div class="flex items-center gap-2">
                          <Checkbox inputId="ingredient3" name="pizza" value="Pepper" />
                          <label for="ingredient3"> Сложный </label>
                        </div>
                      </div>
                    </div>
                    <div>Введите сколько вопросов должно быть в тесте</div>
                    <div>Данный тест включает в себя следующие темы, вы можете убрать темы которые вам не подходят</div>
                    <div class="w-full justify-end flex mt-2">
                      <button
                        class="px-3 py-1.5 rounded-md text-sm text-blue-50 bg-blue-900 flex justify-end items-center gap-3"
                        @click="startTest">
                        <i class="fi fi-rr-arrow-up-right-from-square"></i>начать тестирование
                      </button>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
            <div class="rounded-md bg-white w-full h-full overflow-auto p-3">
              <p class="text-lg font-medium text-blue-900">История тестов по этому предмету</p>
              <div>
                <TestChart></TestChart>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="w-full flex flex-col">
            <p class="text-xl font-semibold mb-3">Управление предметами</p>
            <div class="flex gap-3 items-center my-3 p-4 bg-gray-50 rounded-lg shadow">
              <InputText size="small" placeholder="Название нового предмета" v-model="subName" @keyup.enter="createSub"
                class="flex-grow" />
              <Button label="Создать предмет" icon="pi pi-plus" @click="createSub" class="p-button-sm" />
            </div>
            <table class="w-full custom-table">
              <thead>
                <tr>
                  <th align="left">Предмет</th>
                  <th align="left">Создать тему для этого предмета</th>
                  <th align="left">Удалить предмет</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(subjectItem) in subjects" :key="subjectItem.id">
                  <td>{{ subjectItem.name }}</td>
                  <td>
                    <div class="flex gap-2 items-center my-1">
                      <InputText size="small" placeholder="Название новой темы" v-model="topicName"
                        @keyup.enter="createNewTopicForSubject(subjectItem.id)" class="flex-grow" />
                      <Button label="Создать тему" @click="createNewTopicForSubject(subjectItem.id)"
                        class="p-button-sm p-button-info p-button-outlined" />
                    </div>
                  </td>
                  <td>
                    <Button icon="pi pi-trash" severity="danger" @click="deleteSub(subjectItem.id)"
                      class="p-button-sm p-button-rounded" />
                  </td>
                </tr>
                <tr v-if="!subjects.length">
                  <td colspan="3" class="text-center py-3 text-gray-500">Предметы пока не созданы.</td>
                </tr>
              </tbody>
            </table>

            <p class="text-xl font-semibold mt-6 mb-3">Управление темами</p>
            <table class="w-full custom-table">
              <thead>
                <tr>
                  <th align="left">Название темы</th>
                  <th align="left">ID темы</th>
                  <th align="left">Относится к предмету</th>
                  <th align="left">Удалить тему</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(topic) in allTopicsWithSubjectDetails" :key="topic.id">
                  <td>{{ topic.name }}</td>
                  <td>{{ topic.id }}</td>
                  <td>{{ topic.subjectName }}</td>
                  <td>
                    <Button icon="pi pi-trash" severity="danger" @click="deleteExistingTopic(topic.id)"
                      class="p-button-sm p-button-rounded" />
                  </td>
                </tr>
                <tr v-if="!allTopicsWithSubjectDetails.length">
                  <td colspan="4" class="text-center py-3 text-gray-500">Темы пока не созданы или не загружены.</td>
                </tr>
              </tbody>
            </table>

            <div class="mt-6">
              <div class="flex justify-between items-center mb-3">
                <p class="text-xl font-semibold m-0">Управление тестами</p>
                <Button label="Создать новый тест" icon="pi pi-plus" @click="openTestDrawer" class="p-button-primary" />
              </div>
              <table class="w-full custom-table">
                <thead>
                  <tr>
                    <th align="left">Вопрос</th>
                    <th align="left">Предмет</th>
                    <th align="left">Тема</th>
                    <th align="left" class="w-24">Медиа</th>
                    <th align="left" class="w-20">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="test in createdTests" :key="test.id">
                    <td class="max-w-xs truncate" :title="test.question">{{ test.question }}</td>
                    <td>{{ test.subject?.name || 'N/A' }}</td>
                    <td>{{ test.topic?.name || 'N/A' }}</td>
                    <td class="text-center">
                      <span v-if="test.image" class="pi pi-image mr-1 text-teal-500" title="Изображение"></span>
                      <span v-if="test.video" class="pi pi-video mr-1 text-purple-500" title="Видео"></span>
                      <span v-if="test.audio" class="pi pi-volume-up mr-1 text-orange-500" title="Аудио"></span>
                      <span v-if="test.file" class="pi pi-file text-blue-500" title="Файл"></span>
                      <span v-if="!test.image && !test.video && !test.audio && !test.file"
                        class="text-gray-400">-</span>
                    </td>
                    <td>
                      <Button icon="pi pi-trash" severity="danger" @click="deleteCreatedTest(test.id)"
                        class="p-button-sm p-button-rounded" />
                    </td>
                  </tr>
                  <tr v-if="!createdTests.length">
                    <td colspan="5" class="text-center py-3 text-gray-500">Вы еще не создали ни одного теста.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <Drawer v-model:visible="isTestDrawerVisible" header="Создать новый тест" position="right" style="width: 500px;">
      <div class="p-fluid flex flex-col h-full">
        <div class="field mb-4">
          <label for="testSubject" class="font-semibold block mb-2">Предмет *</label>
          <Dropdown id="testSubject" v-model="newTest.subject" :options="subjects" optionLabel="name"
            placeholder="Выберите предмет" class="w-full" />
        </div>

        <div class="field mb-4">
          <label for="testTopic" class="font-semibold block mb-2">Тема *</label>
          <Dropdown id="testTopic" v-model="newTest.topic" :options="availableTopicsForSelectedSubject"
            optionLabel="name" placeholder="Выберите тему" class="w-full"
            :disabled="!newTest.subject || !availableTopicsForSelectedSubject.length" />
          <small v-if="newTest.subject && !availableTopicsForSelectedSubject.length && subjects.length > 0"
            class="p-error mt-1 block">Для выбранного предмета нет тем. Сначала создайте тему в таблице выше.</small>
        </div>

        <div class="field mb-4">
          <label for="testQuestion" class="font-semibold block mb-2">Текст вопроса *</label>
          <Textarea id="testQuestion" v-model="newTest.question" rows="3" class="w-full"
            placeholder="Введите ваш вопрос здесь..." />
        </div>

        <div class="field mb-4">
          <label class="font-semibold block mb-2">Варианты ответа (Отметьте правильный) *</label>
          <div v-for="(option, index) in newTest.options" :key="option.id" class="flex items-center mb-2 gap-2">
            <RadioButton v-model="newTest.correctAnswerId" :inputId="'option_correct_' + option.id" name="correctAnswer"
              :value="option.id" class="mr-2" />
            <InputText v-model="option.text" :placeholder="'Вариант ' + (index + 1)" class="flex-grow" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text"
              @click="removeTestOption(index)" :disabled="newTest.options.length <= 2" />
          </div>
          <Button label="Добавить вариант" icon="pi pi-plus" class="p-button-text p-button-sm mt-1"
            @click="addTestOption" :disabled="newTest.options.length >= 6" />
        </div>

        <div class="field mb-3">
          <label class="font-semibold block mb-2">Прикрепить файлы (опционально)</label>
          <div class="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <label for="imageUpload" class="text-sm block mb-1">Изображение:</label>
              <input type="file" id="imageUpload" @change="handleFileUpload($event, 'image')" accept="image/*"
                class="p-inputtext p-component w-full text-sm p-2">
              <span v-if="newTest.image" class="text-xs text-gray-600 block mt-1 truncate"
                :title="newTest.image.name">{{ newTest.image.name }}</span>
            </div>
            <div>
              <label for="videoUpload" class="text-sm block mb-1">Видео:</label>
              <input type="file" id="videoUpload" @change="handleFileUpload($event, 'video')" accept="video/*"
                class="p-inputtext p-component w-full text-sm p-2">
              <span v-if="newTest.video" class="text-xs text-gray-600 block mt-1 truncate"
                :title="newTest.video.name">{{ newTest.video.name }}</span>
            </div>
            <div>
              <label for="audioUpload" class="text-sm block mb-1">Аудио:</label>
              <input type="file" id="audioUpload" @change="handleFileUpload($event, 'audio')" accept="audio/*"
                class="p-inputtext p-component w-full text-sm p-2">
              <span v-if="newTest.audio" class="text-xs text-gray-600 block mt-1 truncate"
                :title="newTest.audio.name">{{ newTest.audio.name }}</span>
            </div>
            <div>
              <label for="fileUpload" class="text-sm block mb-1">Другой файл:</label>
              <input type="file" id="fileUpload" @change="handleFileUpload($event, 'file')"
                class="p-inputtext p-component w-full text-sm p-2">
              <span v-if="newTest.file" class="text-xs text-gray-600 block mt-1 truncate" :title="newTest.file.name">{{
                newTest.file.name }}</span>
            </div>
          </div>
        </div>

        <div class="mt-auto flex justify-end gap-2 pt-4 border-t border-gray-200">
          <Button label="Отмена" severity="secondary" @click="closeTestDrawer" class="p-button-outlined" />
          <Button label="Сохранить тест" icon="pi pi-check" @click="saveTest" />
        </div>
      </div>
    </Drawer>
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
          @apply px-3 py-1.5 rounded-md text-sm text-blue-50 bg-blue-900;
          @apply flex items-center justify-end gap-3; // Изменено justify-end

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

.custom-table {
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: 1px solid #e9ecef;
    padding: 0.75rem;
    text-align: left;
    font-size: 0.9rem;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }

  tbody tr:hover {
    background-color: #f1f5f9;
  }

  td.max-w-xs {
    max-width: 20rem;
  }
}

input[type="file"].p-inputtext {
  border: 1px solid #ced4da !important;
  border-radius: 6px !important;
  padding: 0 !important;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

input[type="file"].p-inputtext::file-selector-button {
  height: 100%;
  margin-right: .75rem;
  border: none;
  background: #6366f1;
  padding: .5rem .75rem;
  border-radius: 5px 0 0 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color .2s;
  font-weight: 500;
}

input[type="file"].p-inputtext::file-selector-button:hover {
  background: #4f46e5;
}
</style>