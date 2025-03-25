<script>
import TopicItem from "@/pages/Test/TopicItem.vue";

export default {
  name: "SingleTestPage",
  components: {TopicItem},
  data(){
    return{
      topics: [
        {
          iconTheme: "fi fi-sr-function",
          iconName: "fi fi-rs-square-root",
          shadowColor: "#818cf850",
          bg: "bg-indigo-50",
          border: "border-indigo-100",
          iconColor: "text-indigo-500",
          topic: "Математика",
          testCount: "14"
        },
        {
          iconTheme: "fi fi-sr-globe",
          iconName: "fi fi-rs-map-marker",
          shadowColor: "#22c55e50",
          bg: "bg-green-50",
          border: "border-green-100",
          iconColor: "text-green-500",
          topic: "География",
          testCount: "10"
        },
        {
          iconTheme: "fi fi-tr-react",
          iconName: "fi fi-rs-flask",
          shadowColor: "#60a5fa50",
          bg: "bg-blue-50",
          border: "border-blue-100",
          iconColor: "text-blue-500",
          topic: "Физика",
          testCount: "12"
        },
        {
          iconTheme: "fi fi-sr-dna",
          iconName: "fi fi-rs-leaf",
          shadowColor: "#34d39950",
          bg: "bg-emerald-50",
          border: "border-emerald-100",
          iconColor: "text-emerald-500",
          topic: "Биология",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-tr-scroll-document-story",
          iconName: "fi fi-rs-book",
          shadowColor: "#f8717150",
          bg: "bg-red-50",
          border: "border-red-100",
          iconColor: "text-red-500",
          topic: "История Казахстана",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-rs-scroll-old",
          iconName: "fi fi-bs-earth-americas",
          shadowColor: "#fb923c50",
          bg: "bg-orange-50",
          border: "border-orange-100",
          iconColor: "text-orange-500",
          topic: "Всемирная история",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-rr-tubes",
          iconName: "fi fi-rs-flask",
          shadowColor: "#a855f750",
          bg: "bg-purple-50",
          border: "border-purple-100",
          iconColor: "text-purple-500",
          topic: "Химия",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-sr-language",
          iconName: "fi fi-rs-comment-alt",
          shadowColor: "#eab30850",
          bg: "bg-yellow-50",
          border: "border-yellow-100",
          iconColor: "text-yellow-500",
          topic: "English",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-sr-language",
          iconName: "fi fi-rs-comment-alt",
          shadowColor: "#84cc1650",
          bg: "bg-lime-50",
          border: "border-lime-100",
          iconColor: "text-lime-500",
          topic: "Казахский язык",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-sr-language",
          iconName: "fi fi-rs-comment-alt",
          shadowColor: "#ef444450",
          bg: "bg-rose-50",
          border: "border-rose-100",
          iconColor: "text-rose-500",
          topic: "Русский язык",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-sr-laptop",
          iconName: "fi fi-brands-visual-basic",
          shadowColor: "#3b82f650",
          bg: "bg-sky-50",
          border: "border-sky-100",
          iconColor: "text-sky-500",
          topic: "Информатика",
          testCount: "9"
        },
        {
          iconTheme: "fi fi-rs-compliance-document",
          iconName: "fi fi-rr-shield-check",
          shadowColor: "#facc1550",
          bg: "bg-amber-50",
          border: "border-amber-100",
          iconColor: "text-amber-500",
          topic: "Право",
          testCount: "9"
        },
      ],
    }
  },
  methods: {
    openTest(){
      console.log("test");
    }
  }
}
</script>

<template>
<div>
  <div class="flex gap-2 overflow-x-auto w-full py-3.5 no-scrollbar">
    <TopicItem
        :isMultiple="false"
        v-for="(topic, index) in topics"
        :key="index"
        :icon-theme="topic.iconTheme"
        :icon-name="topic.iconName"
        :shadow-color="topic.shadowColor"
        :bg="topic.bg"
        :border="topic.border"
        :icon-color="topic.iconColor"
        :topic="topic.topic"
        :test-count="topic.testCount"
        @click="openTest"
    />
  </div>
  <div>
    table
  </div>
</div>
</template>

<style scoped>
</style>