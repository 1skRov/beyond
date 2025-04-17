<script>
import CourseContent from "@/pages/Courses/courseContentSidebar.vue";
import CourseItem from "@/pages/Courses/CourseItem.vue";

export default {
  name: "CourseItemPage",
  components: {CourseItem, CourseContent}
}
</script>

<template>
  <div class="flex gap-2 w-full h-full p-2 overflow-hidden rounded-lg">
    <div class="course-sidebar">
      <course-content></course-content>
    </div>
    <div class="course-content">
      <course-item></course-item>
    </div>
    <div class="course-info">
    </div>
  </div>
</template>

<style scoped>
.course-sidebar {
  width: 25%;
  min-width: 400px;
  @apply overflow-y-auto;
}

.course-content {
  @apply bg-blue-50 w-full;
}

.course-info {
  width: 25%;
  min-width: 25%;
  @apply bg-indigo-100;
}
</style>