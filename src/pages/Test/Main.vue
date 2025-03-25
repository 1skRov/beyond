<script>
import TopicItem from "@/pages/Test/TopicItem.vue";
import SingleTestPage from "@/pages/Test/SingleTestPage.vue";
import MultipleTestPage from "@/pages/Test/MultipleTestPage.vue";
// import {useRouter} from "vue-router";
export default {
  name: "MainTestPage",
  components: {MultipleTestPage, SingleTestPage, TopicItem},
  data() {
    return {
      valuePicker: "Тесты по предметам",
      optionsPicker: ["Тесты по предметам", "Комплексные тесты"],
    }
  },
}

</script>

<template>
  <div class="test-page">
    <SelectButton v-model="valuePicker" :options="optionsPicker"/>
    <div v-if="valuePicker === 'Тесты по предметам'">
      <single-test-page></single-test-page>
    </div>
    <div v-else>
      <multiple-test-page></multiple-test-page>
    </div>
  </div>
</template>

<style scoped>
.test-page {

}
</style>