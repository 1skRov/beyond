<script>
import {createFaculty, deleteFaculty, getFacultyList, updateFaculty} from "@/services/universityService.js";

export default {
  name: "OptionsInformation",
  props: ["sport", "Uid"],
  data() {
    return {
      value: 0,
      faculty: [],
      showInput: false,
      isUpdateMode: false,
      facultyName: "",
      editableFacultyId: null,
    }
  }
  ,
  mounted() {
    this.getFaculty()
  },
  methods: {
    async getFaculty() {
      try {
        this.faculty = await getFacultyList();
      } catch (err) {
        console.error("Ошибка при получении списка факультетов", err);
      }
    },
    async deleteFaculty(id) {
      try {
        await deleteFaculty(id);
        await this.getFaculty(); // обновление списка
      } catch (err) {
        console.error("Ошибка при удалении факультета", err);
      }
    },
    startUpdateFaculty(faculty) {
      this.isUpdateMode = true;
      this.facultyName = faculty.name;
      this.editableFacultyId = faculty.id;
    },
    async updateFacultySubmit() {
      try {
        const payload = {
          name: this.facultyName,
          university_id: this.Uid
        };
        await updateFaculty(this.editableFacultyId, payload);
        this.facultyName = "";
        this.editableFacultyId = null;
        this.isUpdateMode = false;
        await this.getFaculty(); // обновление списка
      } catch (err) {
        console.error("Ошибка при обновлении факультета", err);
      }
    },
    toggleCreate() {
      this.showInput = true;
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
        await this.getFaculty(); // обновление списка
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

    <div v-if="value === 0" class="w-full h-full">
      <div class="flex flex-col">
        <div v-for="f in faculty" :key="f.id" class="flex gap-2 items-center">
          <p class="text-slate-600">{{ f.name }}</p>
          <div class="rounded-md text-red-600 bg-red-100 w-5 h-5 flex items-center justify-center"
               @click="deleteFaculty(f.id)">
            <i class="fi fi-rr-trash" style="font-size: 12px;"></i>
          </div>
          <div class="rounded-md text-yellow-600 bg-yellow-100 w-5 h-5 flex items-center justify-center"
               @click="startUpdateFaculty(f)">
            <i class="fi fi-rr-refresh" style="font-size: 12px;"></i>
          </div>
        </div>
      </div>

      <div v-if="isUpdateMode" class="flex items-center gap-2 mt-2 w-full">
        <InputText v-model="facultyName" placeholder="Новое название факультета" class="w-full" size="small"/>
        <Button size="small" @click="updateFacultySubmit">Обновить</Button>
      </div>
      <div class="w-full flex justify-end mt-3">
        <Button size="small" @click="toggleCreate" class="flex w-full">Создать факультет</Button>
      </div>
      <div v-if="showInput" class="flex items-center gap-2 mt-2">
        <InputText v-model="facultyName" placeholder="Название факультета" class="w-full" size="small"/>
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