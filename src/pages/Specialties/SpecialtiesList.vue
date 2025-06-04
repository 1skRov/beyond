<script>
import {
  createSpecialties,
  getSpecialtiesList,
  getEducation,
  getSpecialtiesById
} from "@/services/specialtiesServices.js";

export default {
  name: "SpecialtiesList",
  data() {
    return {
      specialties: [],
      education: [],
    }
  },
  mounted() {
    this.getEducation();
  },
  methods: {
    async getEducation() {
      this.education = await getEducation();
    },
    async getS(id) {
      return this.specialties = await getSpecialtiesById(id,);
    }
  }
}
</script>

<template>
  <div class="w-full p-3 bg-white rounded-md mb-3">Добавить</div>
  <div class="w-full p-3 bg-white rounded-md">
    <DataTable :value="education" tableStyle="min-width: 50rem">
      <Column field="code" header="Код"></Column>
      <Column field="name" header="Название"></Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>
