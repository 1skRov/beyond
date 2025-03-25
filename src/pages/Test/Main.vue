<script setup>
import TopicItem from "@/pages/Test/TopicItem.vue";
import SideBar from "@/components/MainComponents/SideBar.vue";
import {useRouter} from "vue-router";

const topics = [
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
];
const multipleTopics = [
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
];
const router = useRouter();
const goToTestList = () => {
  router.push("/test-list");
};

</script>

<template>
  <div class="">
<!--    <div class="sidebar-box">-->
<!--      <SideBar></SideBar>-->
<!--    </div>-->
    <div class="test-page border">
      <div class="single-test">
        <p>Тесты по предметам</p>
        <div class="flex gap-5 flex-wrap">
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
              @click="goToTestList"
          />
        </div>
      </div>
      <div class="multiple-test">
        <p>Комплексные тесты / тесты по нескольким предметам / ЕНТ</p>
        <div class="flex gap-5 flex-wrap">
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-box {

}

.test-page {
  @apply flex flex-col gap-10 w-full p-1.5;

  p {
    line-height: 30px;
    font-size: 20px;
    @apply w-full font-semibold border-0 border-b border-gray-200 mb-3;
  }

  .single-test {
    @apply w-full;
  }
}
</style>