<script>
import CoursesList from "@/pages/Courses/coursesList.vue";

export default {
  name: "MainCoursesPage",
  components: {CoursesList}
}
</script>

<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">Список курсов</Tab>
      <Tab value="1">Список авторов</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <courses-list></courses-list>
      </TabPanel>
      <TabPanel value="1">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<style scoped>

</style>