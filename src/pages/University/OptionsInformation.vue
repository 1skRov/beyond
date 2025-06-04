<script>
import {
  createdormitories,
  createFaculty,
  deleteFaculty,
  getFacultyList,
  updateFaculty,
  createDepartments, getDepartmentsList, getFacultyById, deleteDepartments
} from "@/services/universityService.js";

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
      activeCafedraFacultyId: null,
      cafedraName: "",
      departments: [],
      facultyMap: {},
    }
  },
  mounted() {
    this.getFaculty();
  },
  methods: {
    async caf() {
      this.value = 3;
      await this.getDepartments();
    },
    async getFaculty() {
      try {
        const list = await getFacultyList();
        this.faculty = list;

        this.facultyMap = {};
        for (const f of list) {
          this.facultyMap[f.id] = f.name;
        }
      } catch (err) {
        console.error("Ошибка при получении списка факультетов", err);
      }
    },
    async deleteFaculty(id) {
      try {
        await deleteFaculty(id);
        await this.getFaculty();
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
        await this.getFaculty();
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
        await this.getFaculty();
      } catch (err) {
        console.error("Ошибка при создании факультета:", err);
      }
    },
    showCafedraInput(facultyId) {
      this.activeCafedraFacultyId = facultyId;
      this.cafedraName = "";
    },
    async createCafedra(facultyId) {
      try {
        const payload = {
          faculty_id: facultyId,
          name: this.cafedraName,
        };
        await createDepartments(payload);
        this.activeCafedraFacultyId = null;
        this.cafedraName = "";
        await this.getFaculty();
      } catch (err) {
        console.error("Ошибка при создании кафедры:", err);
      }
    },
    async getDepartments() {
      try {
        this.departments = await getDepartmentsList();
      } catch (err) {
        console.error("Ошибка при кафедры:", err);
      }
    },
    async deleteCaf(id) {
      try {
        await deleteDepartments(id);
        await this.getDepartments();
      } catch (err) {
        console.error("Ошибка при удалении кафедры:", err);
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
      <button @click="caf">Кафедры</button>
    </div>

    <div v-if="value === 0" class="w-full h-full">
      <div class="flex flex-col gap-3">
        <div
            v-for="f in faculty"
            :key="f.id"
            class="flex flex-col bg-slate-50 px-3 py-2 rounded-md shadow-sm"
        >
          <div class="flex items-center justify-between">
            <p class="text-slate-700 font-medium">{{ f.name }}</p>
            <div class="flex gap-1">
              <button
                  class="icon-btn bg-red-100 text-red-600"
                  @click="deleteFaculty(f.id)"
                  v-tooltip.top="'Удалить факультет'"
              >
                <i class="fi fi-rr-trash text-xs"></i>
              </button>
              <button
                  class="icon-btn bg-yellow-100 text-yellow-600"
                  @click="startUpdateFaculty(f)"
                  v-tooltip.top="'Редактировать данные факультета'"
              >
                <i class="fi fi-rr-refresh text-xs"></i>
              </button>
              <button
                  class="icon-btn bg-blue-100 text-blue-600"
                  @click="showCafedraInput(f.id)"
                  v-tooltip.top="'Добавить кафедру'"
              >
                <i class="fi fi-rr-plus-small text-xs"></i>
              </button>
            </div>
          </div>

          <div v-if="activeCafedraFacultyId === f.id" class="mt-2 flex items-center gap-2">
            <InputText v-model="cafedraName" placeholder="Название кафедры" class="w-full" size="small"/>
            <Button size="small" @click="createCafedra(f.id)">Создать</Button>
          </div>
        </div>
      </div>

      <div v-if="isUpdateMode" class="flex items-center gap-2 mt-4">
        <InputText v-model="facultyName" placeholder="Новое название факультета" class="w-full" size="small"/>
        <Button size="small" @click="updateFacultySubmit">Обновить</Button>
      </div>

      <div class="mt-5">
        <Button size="small" @click="toggleCreate" class="w-full">Создать факультет</Button>
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
    <div v-else-if="value === 3">
      <table class="w-full border border-slate-300 text-sm">
        <thead class="bg-blue-100 text-blue-900 font-medium">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Кафедра</th>
          <th class="p-2 border border-slate-300 text-left">Факультет</th>
          <th class="p-2 border border-slate-300 text-left">Действие</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="d in departments" :key="d.id">
          <td class="p-2 border border-slate-200">{{ d.name }}</td>
          <td class="p-2 border border-slate-200">{{ facultyMap[d.faculty_id] || "—" }}</td>
          <td class="p-2 border border-slate-200">
            <button class="icon-btn bg-red-100 text-red-600" @click="deleteCaf(d.id)">
              <i class="fi fi-rr-trash text-xs"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
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