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
      this.$router.push({ name: "RoadItem" });
    }
  }
}
</script>

<template>
  <div class="w-full flex flex-wrap gap-3">
    <road-map-main-page v-for="m in map" :key="m.id" :title="m.title" :value="m.value" @click="go"></road-map-main-page>
    <router-view></router-view>
    <!--  <RoadFlow></RoadFlow>-->
  </div>
</template>

<style scoped>

</style>