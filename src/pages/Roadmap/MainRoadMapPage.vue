<script>
import RoadMapMainPage from "@/pages/Roadmap/RoadMapItem.vue";
import {getRoadmap, deleteRoadmap, createRoadmap} from "@/services/roadmapServices.js";
import {getUserIdFromToken} from "@/utils/jwt.js";

export default {
  name: "MainRoadMapPage",
  components: {RoadMapMainPage},

  data() {
    return {
      roadMapTitle: "",
      roadList: [],
      user_id: ""
    };
  },

  async mounted() {
    this.user_id = getUserIdFromToken();
    await this.fetchAllRoadmaps();
  },

  methods: {
    async fetchAllRoadmaps() {
      try {
        this.roadList = await getRoadmap();
      } catch (err) {
        console.error("Ошибка при получении списка роадмапов:", err);
      }
    },

    goToRoadmap(id) {
      this.$router.push({name: "RoadItem", params: {id}});
    },

    async deleteRoadmapHandler(id) {
      try {
        await deleteRoadmap(id);
        await this.fetchAllRoadmaps();
      } catch (err) {
        console.error("Ошибка при удалении роадмапа:", err.response || err);
      }
    },

    async createRoadmap() {
      if (!this.roadMapTitle.trim()) {
        return alert("Введите название маршрута");
      }
      try {
        const payload = {
          title: this.roadMapTitle,
          user_id: this.user_id
        };
        await createRoadmap(payload);
        this.roadMapTitle = "";
        await this.fetchAllRoadmaps();
      } catch (err) {
        console.error("Ошибка при создании роадмапа:", err.response || err);
      }
    }
  }
};
</script>

<template>
  <div class="w-full h-full p-3 bg-white">
    <div class="mb-4 flex items-center gap-2">
      <InputText
          v-model="roadMapTitle"
          placeholder="Название маршрута"
          size="small"
          class="w-64"
      />
      <Button size="small" @click="createRoadmap">
        Добавить образовательный маршрут
      </Button>
    </div>

    <table class="w-full border border-slate-300 text-sm">
      <thead class="bg-blue-100 text-blue-900 font-medium">
      <tr>
        <th class="p-2 border border-slate-300 text-left">Название</th>
        <th class="p-2 border border-slate-300 text-left">Автор</th>
        <th class="p-2 border border-slate-300 text-left">Создан</th>
        <th class="p-2 border border-slate-300 text-left">Рейтинг</th>
        <th class="p-2 border border-slate-300 text-left">Пользователи</th>
        <th class="p-2 border border-slate-300 text-left">Действие</th>
      </tr>
      </thead>
      <tbody>
      <road-map-main-page
          v-for="r in roadList"
          :key="r.id"
          :road="r"
          @click="goToRoadmap"
          @delete="deleteRoadmapHandler"
      />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
