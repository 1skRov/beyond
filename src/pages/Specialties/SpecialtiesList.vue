<script>
import {createSpecialties, getSpecialtiesList, getEducation} from "@/services/specialtiesServices.js";

export default {
  name: "SpecialtiesList",
  data() {
    return {
      specialties: [],
      education: [],
    }
  },
  mounted() {
    this.getS();
  },
  methods: {
    async getS() {
      this.specialties = await getSpecialtiesList();
      this.education = await getEducation();
    }
  }
}
</script>

<template>
  <div class="w-full p-3 bg-white rounded-md mb-3">Добавить</div>
  <div class="w-full p-3 bg-white rounded-md">
    <pre>{{education}}</pre>
    <DataTable :value="specialties" tableStyle="min-width: 50rem">
      <Column field="name" header="Название"></Column>
      <Column field="description" header="описание"></Column>
      <Column field="min_score" header="проходной балл"></Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>