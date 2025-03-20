<script>
export default {
  name: "TestItem",
  data() {
    return {
      value: '0'
    };
  }
}
</script>

<template>
  <div class="flex justify-between w-full items-center mb-5">
    <b class="text-lg text-gray-600">Математика. Основы тригонометрии</b>
    <p class="text-sm text-gray-600 font-medium">Евгений Шевченко</p>
  </div>
  <div class="border flex flex-col justify-between p-2.5 rounded-lg" style="min-height: 87vh; height: 87vh">
    <div>
      <Tabs v-model:value="value">
        <TabList>
          <Tab value="0" class="text-xs">Вопрос 1</Tab>
          <Tab value="1" class="text-xs">Вопрос 2</Tab>
          <Tab value="2" class="text-xs">Вопрос 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0" style="border-bottom: 1px solid #e7e3e3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="flex flex-col gap-2 mt-4">
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0" style="border-bottom: 1px solid #e7e3e3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="flex flex-col gap-2 mt-4">
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0" style="border-bottom: 1px solid #e7e3e3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="flex flex-col gap-2 mt-4">
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
              <div class="flex items-center gap-2.5">
                <RadioButton name="pizza" value="Cheese"></RadioButton>
                <label>Lorem ipsum.</label>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <div class="flex mt-1.5 gap-2 justify-end">
      <Button @click="value = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="value !== '0'" />
      <Button @click="value = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="value !== '1'" />
      <Button @click="value = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="value !== '2'" />
    </div>
  </div>
  <div class="flex justify-between items-center mt-3">
    <p class="text-xs text-gray-500">После истечения времени тест автоматически завершится даже если вы не успели отметить все вопросы</p>
    <p class="text-xs font-medium text-gray-700">оставшееся время <span class="text-sm font-bold">1час 20минут</span></p>
    <Button label="Завершить тест" severity="warn" variant="outlined" size="small"/>
  </div>
</template>

<style scoped>

</style>