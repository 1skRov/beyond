<script>
export default {
  name: "TopicItem",
  props: ["isMultiple", "iconName", "iconColor", "iconTheme", "topic", "testCount", "shadowColor", "bg", "border"],
  data() {
    return {
      isHovered: false,
    }
  },
  computed: {
    hoverStyle() {
      return this.isHovered ? {boxShadow: `0px 10px 20px ${this.shadowColor}`} : {};
    },
    backgroundStyle() {
      // Проверяем, передан ли градиент или Tailwind-класс
      if (this.bg.includes("linear-gradient") || this.bg.includes("#")) {
        return {backgroundImage: this.bg};
      }
      return {}; // Если Tailwind-класс, ничего не делаем
    }
  }
}
</script>

<template>
  <div class="content"
       :class="[border, !bg.includes('linear-gradient') && !bg.includes('#') ? bg : '']"
       :style="[hoverStyle, backgroundStyle]"
       @mouseover="isHovered = true"
       @mouseleave="isHovered = false">
    <div class="absolute -bottom-1.5 -right-1" style="transform: rotate(-20deg);">
      <i :class="iconTheme" class="text-gray-300" style="font-size: 65px; line-height: 0;"></i>
    </div>
    <div class="inside-info">
      <div class="icon">
        <i :class="[iconName, iconColor]"></i>
      </div>
      <div class="title z-10"><b :class="isMultiple ? 'text-gray-200' : 'text-gray-700'">{{ topic }}</b></div>
      <div class="const" :class="isMultiple ? 'text-gray-200' : 'text-gray-700'">{{ testCount }} тестов</div>
    </div>
  </div>
</template>

<style scoped>
.content {
  min-width: 220px;
  width: 220px;
  @apply relative hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 overflow-hidden rounded-lg border;

  .inside-info {
    @apply p-3 flex flex-col gap-1.5;

    .icon {
      @apply flex justify-between;

      i {
        font-size: 25px;
        line-height: 0;
      }
    }

    .title {
      @apply text-gray-700;
      font-size: 16px;
    }

    .const {
      @apply text-xs font-medium;
    }
  }
}
</style>
