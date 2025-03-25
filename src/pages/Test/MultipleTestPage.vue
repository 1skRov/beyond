<script>
import TopicItem from "@/pages/Test/TopicItem.vue";

export default {
  name: "MultipleTestPage",
  components: {TopicItem},
  data() {
    return {
      multipleTopics: [
        {
          iconTheme: "fi fi-sr-function",
          iconName: "fi fi-rs-square-root",
          shadowColor: "rgba(148,157,250,0.31)",
          bg: "linear-gradient(to bottom right, #6889FF, #C668FF)",
          border: "border-indigo-100",
          iconColor: "text-gray-300",
          topic: "Математика-Физика",
          testCount: "14"
        },
        {
          iconTheme: "fi fi-sr-globe",
          iconName: "fi fi-rs-map-marker",
          shadowColor: "#22c55e50",
          bg: "linear-gradient(to bottom right, #FDC639, #FF7C60)",
          border: "border-green-100",
          iconColor: "text-gray-300",
          topic: "Математика-География",
          testCount: "10"
        },
        {
          iconTheme: "fi fi-tr-react",
          iconName: "fi fi-rs-flask",
          shadowColor: "#60a5fa50",
          bg: "linear-gradient(to bottom right, #FF9E68, #FF68DE)",
          border: "border-blue-100",
          iconColor: "text-gray-300",
          topic: "Биология-Химия",
          testCount: "12"
        },
        {
          iconTheme: "fi fi-sr-dna",
          iconName: "fi fi-rs-leaf",
          shadowColor: "#34d39950",
          bg: "linear-gradient(to bottom right, #5B7FFF, #33CCFC)",
          border: "border-emerald-100",
          iconColor: "text-gray-300",
          topic: "Биология-География",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-tr-scroll-document-story",
          iconName: "fi fi-rs-book",
          shadowColor: "#f8717150",
          bg: "linear-gradient(to bottom right, #22C55E, #A3E635)",
          border: "border-red-100",
          iconColor: "text-gray-300",
          topic: "Всемирная история-Иностранный язык",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-rs-scroll-old",
          iconName: "fi fi-bs-earth-americas",
          shadowColor: "#fb923c50",
          bg: "linear-gradient(to bottom right, #A855F7, #EC4899)",
          border: "border-orange-100",
          iconColor: "text-gray-300",
          topic: "География + Иностранный язык",
          testCount: "9"
        },
      ],
    }
  }
}
</script>

<template>
  <div class="flex gap-2 w-full overflow-x-auto no-scrollbar py-3">
    <TopicItem
        :isMultiple="true"
        v-for="(topic, index) in multipleTopics"
        :key="index"
        :icon-theme="topic.iconTheme"
        :icon-name="topic.iconName"
        :shadow-color="topic.shadowColor"
        :bg="topic.bg"
        :border="topic.border"
        :icon-color="topic.iconColor"
        :topic="topic.topic"
        :test-count="topic.testCount"
    />
  </div>
</template>

<style scoped>

</style>