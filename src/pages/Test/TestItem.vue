<script>
export default {
  name: "TestItem",
  data() {
    return {
      scrollableTabs: Array.from({length: 50}, (_, i) => ({
        title: `Tab ${i + 1}`,
        content: `Tab ${i + 1} Content`,
        value: `${i}`
      }))
    };
  }
}
</script>

<template>
  <div class="flex justify-between w-full items-center mb-5">
    <b class="text-lg text-gray-600">Математика. Основы тригонометрии</b>
    <p class="text-sm text-gray-600 font-medium">Евгений Шевченко</p>
  </div>
  <div class="border" style="min-height: 85vh">
    <Tabs value="0" scrollable>
      <TabList>
        <Tab v-for="tab in scrollableTabs" :key="tab.title" :value="tab.value">
          {{ tab.title }}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in scrollableTabs" :key="tab.content" :value="tab.value">
          <p class="m-0">{{ tab.content }}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
  <div class="flex justify-between items-center mt-5">
    <p class="text-xs text-gray-500">После истечения времени тест автоматически завершится даже если вы не успели отметить все вопросы</p>
    <p class="text-xs font-medium text-gray-700">оставшееся время <span class="text-sm font-bold">1час 20минут</span></p>
  </div>
</template>

<style scoped>

</style>