<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { STATIC_ROADMAPS_LIST } from '@/config/staticRoadmaps'; // Путь к вашему файлу
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag'; // Для отображения тегов или статуса, если нужно

// Это компонент для строки таблицы, если вы хотите его оставить
// import RoadmapListItem from './RoadmapListItem.vue'; // Предполагаемое имя для вашей второй части кода

export default {
  name: "RoadmapListPage",
  components: { Button, DataTable, Column, Tag /*, RoadmapListItem */ },
  setup() {
    const router = useRouter();
    const roadList = ref([]);
    const user_id = ref("static_user"); // Или получите реального, если нужно для чего-то

    onMounted(() => {
      fetchAllRoadmaps();
    });

    const fetchAllRoadmaps = () => {
      // Загружаем статичные роадмапы
      roadList.value = STATIC_ROADMAPS_LIST.map(road => ({
        ...road,
        // Можно добавить вычисляемые или форматированные поля здесь, если нужно
        created_at_formatted: new Date(road.created_at).toLocaleDateString("ru-RU"),
      }));
    };

    const goToRoadmap = (roadmap) => {
      router.push({ name: "RoadItem", params: { roadmapId: roadmap.id } });
    };

    // Функциональность создания и удаления статичных карт не нужна,
    // но если хотите оставить возможность создавать ДИНАМИЧESКИЕ сверх этих,
    // то нужно будет адаптировать ваш старый код и localStorage.
    // Пока что удаляем, чтобы сфокусироваться на статике.

    return {
      roadList,
      user_id,
      goToRoadmap,
      // Format date directly in template or use a computed property if complex
    };
  },
};
</script>

<template>
  <div class="w-full h-full p-3 bg-white">
    <div class="mb-4">
      <h1 class="text-2xl font-semibold">Образовательные маршруты</h1>
    </div>

    <DataTable :value="roadList" responsiveLayout="scroll" class="p-datatable-sm">
      <Column field="title" header="Название" :sortable="true">
        <template #body="slotProps">
          <span class="font-semibold">{{ slotProps.data.title }}</span>
        </template>
      </Column>
      <Column field="author" header="Автор" :sortable="true"></Column>
      <Column field="created_at_formatted" header="Создан" :sortable="true"></Column>
      <Column field="votes_sum" header="Рейтинг" :sortable="true">
        <template #body="slotProps">
          <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
          {{ slotProps.data.votes_sum }}
        </template>
      </Column>
      <Column field="participants_count" header="Пользователи" :sortable="true">
        <template #body="slotProps">
          <i class="pi pi-users mr-1"></i>
          {{ slotProps.data.participants_count }}
        </template>
      </Column>
      <Column header="Действие">
        <template #body="slotProps">
          <Button
              label="Перейти"
              icon="pi pi-arrow-right"
              class="p-button-sm p-button-raised p-button-info"
              @click="goToRoadmap(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
/* Добавьте стили, если необходимо */
.p-datatable-sm .p-column-header-content {
  font-size: 0.9rem;
}
.p-datatable-sm .p-datatable-tbody > tr > td {
  padding: 0.6rem 0.8rem;
}
</style>