<script>
export default {
  name: "MainTestPage",
  data() {
    return {
      optionsPicker: ["Тесты по предметам", "Комплексные тесты"],
      valueToRouteMap: {
        "Тесты по предметам": "single-tests",
        "Комплексные тесты": "multiple-tests"
      }
    };
  },
  watch: {
    valuePicker(newValue) {
      const routeName = this.valueToRouteMap[newValue];
      if (routeName) {
        this.$router.push({ name: routeName });
      }
    }
  },
  computed: {
    valuePicker: {
      get() {
        const currentRoute = this.$route.name;
        if (currentRoute === 'single-tests') return "Тесты по предметам";
        if (currentRoute === 'multiple-tests') return "Комплексные тесты";
        return "Тесты по предметам";
      },
      set(value) {
        const routeName = this.valueToRouteMap[value];
        if (routeName) {
          this.$router.push({ name: routeName });
        }
      }
    }
  }
};
</script>

<template>
  <div class="test-page">
    <SelectButton v-model="valuePicker" :options="optionsPicker" size="small"/>
    <router-view />
  </div>
</template>
