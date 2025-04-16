<script>
import CoursesList from "@/pages/Courses/coursesList.vue";
import AuthorList from "@/pages/Courses/AuthorList.vue";

export default {
  name: "MainCoursesPage",
  components: {AuthorList, CoursesList}
}
</script>

<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">Список курсов</Tab>
      <Tab value="1">Список авторов</Tab>
      <Tab value="1">В процессе</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <courses-list></courses-list>
      </TabPanel>
      <TabPanel value="1">
        <author-list></author-list>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<style scoped>

</style>