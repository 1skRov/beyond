<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CreateUniversity from "@/pages/University/CreateUniversity.vue";
import { getUniversityList } from "@/services/universityService.js";

const universities = ref([]);
const selectedCity = ref();
const showCreateUniversity = ref(false);
const value = ref(50);

const loadUniversities = async () => {
  try {
    universities.value = await getUniversityList();
  } catch (err) {
    console.error("Ошибка при получении списка университетов:", err);
  }
};

onMounted(() => {
  loadUniversities();
});

const router = useRouter();

function goToUniversity(u) {
  router.push({ name: 'UniversityItem', params: { id: u.id } });
}

const cities = ref([
  { name: 'Астана', code: 'AST' },
  { name: 'Алматы', code: 'ALM' },
  { name: 'Актау', code: 'AKT' },
  { name: 'Шымкент', code: 'SHM' },
  { name: 'Караганда', code: 'KRG' }
]);

const onCreated = () => {
  loadUniversities();
};
</script>
<template>
  <div class="un">
    <!-- <div class="filters">
      <div class="filter-item">
        <span>Название университета</span>
        <AutoComplete size="small" class="w-full md:w-56"/>
      </div>
      <div class="filter-item">
        <span>Выберите город</span>
        <Select v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56"
                size="small"/>
      </div>
      <div class="filter-item">
        <span>Наличие общежития</span>
        <div class="flex gap-2 items-center h-[35px]">
          <Checkbox v-model="pizza" inputId="obj" value="Cheese"/>
          <label for="obj"> С общежитием </label>
        </div>
      </div>
      <div class="filter-item">
        <span>Цена обучения до</span>
        <div class="flex gap-2.5 items-center h-[35px]">
          <Slider v-model="value" size="small" class="w-full md:w-56"/>
          <p>{{ value }}т</p>
        </div>
      </div>
      <div class="flex items-center">
        <Button @click="showCreateUniversity = true" size="small">Добавить университет</Button>
      </div>
    </div> -->
    <div class="list">
      <div class="university-item" v-for="u in universities" :key="u.name" @click="goToUniversity(u)">
        <div class="image">
          <img v-if="u?.photo_url" :src="u.photo_url" alt="">
          <i v-else class="fi fi-br-image-slash"></i>
        </div>
        <div class="content">
          <p class="text-sm font-semibold leading-none text-slate-700">{{ u.name }}</p>
          <p class="text-xs text-blue-800 w-full font-medium flex items-center gap-2">
            <i class="fi fi-rr-marker" style="font-size: 12px;"></i>
            {{ u.location || "город не указан" }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <CreateUniversity v-model:visible="showCreateUniversity" @created="onCreated"></CreateUniversity>
</template>
<style scoped lang="scss">
.un {
  @apply w-full flex flex-col gap-3 h-full;

  .filters {
    @apply w-full py-2 px-3 bg-white rounded-md flex gap-10;

    .filter-item {
      @apply flex flex-col gap-0.5;

      span {
        font-size: 11px;
        @apply text-slate-500 font-medium;
      }
    }
  }

  .list {
    @apply grid grid-cols-4 gap-4 w-full bg-white px-3 py-2 rounded-md;

    .university-item {
      @apply flex flex-col rounded-md gap-1 w-full h-[340px] max-h-[340px] cursor-pointer p-2;

      .image {
        @apply w-full h-[250px] min-h-[250px] rounded-md overflow-hidden flex items-center justify-center border border-blue-100;

        img {
          @apply w-full h-full rounded-md;
        }

        i {
          font-size: 30px;
          @apply text-blue-900;
        }
      }

      .content {
        @apply flex flex-col justify-between h-full px-1.5 pb-1.5 mt-1;
      }

      &:hover {
        @apply bg-blue-100;
      }
    }
  }
}
</style>