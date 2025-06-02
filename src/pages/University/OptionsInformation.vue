<script>
import {createFaculty, getFacultyList} from "@/services/universityService.js";

export default {
  name: "OptionsInformation",
  props: ["sport", "Uid"],
  data() {
    return {
      value: 0,
      faculty: null,
      showInput: false,
      facultyName: "",
    }
  },
  mounted() {
    this.getFaculty()
  },
  methods: {
    toggleCreate() {
      this.showInput = true;
    },
    async getFaculty() {
      try {
        this.faculty = await getFacultyList();
      } catch (err) {
        console.error("Ошибка при получении списка факультетов", err);
      }
    },
    async createFaculty() {
      try {
        const payload = {
          university_id: this.Uid,
          name: this.facultyName,
        };
        await createFaculty(payload);
        this.facultyName = "";
        this.showInput = false;
      } catch (err) {
        console.error("Ошибка при создании факультета:", err);
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="flex my-2 gap-3">
      <button @click="value = 0">Факультеты</button>
      <button @click="value = 1">Общежитие</button>
      <button @click="value = 2">Спорт</button>
      <button @click="value = 3">Кафедры</button>
    </div>

    <div v-if="value === 0">
      <pre>{{ faculty}}</pre>
      <Button size="small" @click="toggleCreate">Создать факультет</Button>
      <div v-if="showInput" class="flex items-center gap-2">
        <InputText v-model="facultyName" placeholder="Название факультета" class="w-64"/>
        <Button size="small" @click="createFaculty">Отправить</Button>
      </div>
    </div>
    <p v-else-if="value === 1">
      общага
    </p>
    <p v-else-if="value === 2" v-html="sport">
    </p>
    <p v-else-if="value === 3">
      кафедра
    </p>
  </div>
</template>

<style scoped lang="scss">
button {
  @apply border-none w-[120px] py-1.5 bg-blue-900 text-blue-100 text-sm font-medium rounded-md duration-200 ease-in cursor-pointer;

  &:hover {
    @apply bg-blue-100 text-blue-900;
  }
}

.active {
  @apply bg-red-100;
}
</style>