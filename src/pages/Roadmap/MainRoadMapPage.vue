<script>
import RoadFlow from "@/pages/Roadmap/Flo.vue";
import RoadMapMainPage from "@/pages/Roadmap/RoadMapItem.vue";

export default {
  name: "MainRoadMapPage",
  components: {RoadMapMainPage, RoadFlow},
  data() {
    return {
      map:
          [
            {title: "Механика", value: 75},
            {title: "Геометрия", value: 60},
            {title: "Алгебра", value: 0},
            {title: "Гидростатика", value: 40},
            {title: "Химические реакции", value: 0},
            {title: "Орфография", value: 70},
            {title: "История Казахстана", value: 55},
            {title: "Биосфера", value: 30},
            {title: "Лексика", value: 100},
            {title: "Электродинамика", value: 0},
            {title: "Грамматика", value: 82},
            {title: "Анатомия человека", value: 65},
            {title: "Социальная философия", value: 25},
            {title: "Экономика", value: 78},
            {title: "Культура Казахстана", value: 90}

          ]
    }
  },
  methods: {
    go() {
      this.$router.push({name: "RoadItem"});
    }
  }
}
</script>

<template>
  <div class="w0full h-full">
    <div class="p-3 bg-white rounded-md flex mb-3 w-full">
      <div class="flex flex-col gap-0.5">
        <span class="text-slate-700 text-xs">Поиск</span>
        <AutoComplete size="small" class="w-full"/>
      </div>
      <div class="flex items-center justify-end w-full">
        <button>создать маршрут</button>
      </div>
    </div>
    <div class="w-full h-full p-3 bg-white rounded-md">
      <div class="w-full flex flex-wrap items-start gap-3">
        <road-map-main-page v-for="m in map" :key="m.id" :title="m.title" :value="m.value"
                            @click="go"></road-map-main-page>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply px-3 py-1.5 rounded-md text-sm text-blue-50 bg-blue-900 flex justify-end;
  @apply flex items-center gap-3;

  i {
    font-size: 14px;
  }
}
</style>