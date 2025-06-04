<template>
  <div class="course-sidebar-wrapper">
    <div
      v-if="!courseData || !courseData.stages || courseData.stages.length === 0"
      class="text-center text-blue-600 py-8"
    >
      Загрузка данных курса...
    </div>
    <PanelMenu
      v-else
      :model="formattedStages"
      class="bg-white border border-blue-200 rounded-md shadow-sm"
    />
  </div>
</template>

<script setup>
import { computed, h } from 'vue';
import PanelMenu from 'primevue/panelmenu';
import ProgressBar from 'primevue/progressbar';
import Badge from 'primevue/badge';

const props = defineProps({
  courseData: Object
});
const emit = defineEmits(['lesson-selected', 'lesson-status-changed']);

function getLessonStatusIcon(status) {
  switch (status) {
    case 'completed':
      return 'pi pi-check-circle';
    case 'inProgress':
      return 'pi pi-spin pi-spinner';
    default:
      return 'pi pi-circle-off';
  }
}

function getStatusSeverity(status) {
  switch (status) {
    case 'completed':
      return 'success';
    case 'inProgress':
      return 'info';
    default:
      return 'secondary';
  }
}

const formattedStages = computed(() => {
  if (!props.courseData || !props.courseData.stages) return [];

  return props.courseData.stages.map((stage) => {
    return {
      key: stage.id,
      label: stage.title,
      data: stage,
      items: stage.lessons.map((lesson) => {
        return {
          key: lesson.id,
          label: lesson.title,
          icon: getLessonStatusIcon(lesson.status),
          command: () => emit('lesson-selected', lesson),
          template: (item, options) => {
            const statusText =
              lesson.status === 'completed'
                ? 'Завершено'
                : lesson.status === 'inProgress'
                ? 'В процессе'
                : 'Не начат';

            return h(
              'a',
              {
                class: options.className,
                role: 'menuitem',
                onClick: () => emit('lesson-selected', lesson)
              },
              [
                h('span', { class: item.icon + ' ' + options.iconClassName }),
                h('span', { class: options.labelClassName }, item.label),
                h(Badge, {
                  value: statusText,
                  severity: getStatusSeverity(lesson.status),
                  style: 'margin-left: auto; font-size: 0.75rem;'
                })
              ]
            );
          }
        };
      }),
      template: (item, options) => {
        return h(
          'a',
          {
            class: options.className,
            role: 'menuitem',
            'aria-expanded': options.expanded,
            onClick: options.onClick
          },
          [
            h('span', {
              class: options.iconClassName,
              classList: {
                'pi-angle-right': !options.expanded,
                'pi-angle-down': options.expanded
              }
            }),
            h('span', { class: options.labelClassName }, item.label),
            h(ProgressBar, {
              value: item.data.progress,
              style: 'height: 6px; width: 40px; margin-left: auto;',
              showValue: false
            })
          ]
        );
      }
    };
  });
});
</script>

<style scoped>
.course-sidebar-wrapper {
  padding: 1rem;
}
/* Можно при желании внутри :deep() подкрасить PrimeVue-CSS, но базово Tailwind-окружение задаётся в App.vue */
</style>
