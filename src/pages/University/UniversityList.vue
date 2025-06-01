<script setup>
const universities = [
    {
        name: "Назарбаев Университет",
        location: "Астана",
        photoUrl: "",
        tuitionPerYear: 2800000,
        facultiesCount: 8
    },
    {
        name: "Евразийский национальный университет им. Л.Н. Гумилева",
        location: "Астана",
        photoUrl: "",
        tuitionPerYear: 750000,
        facultiesCount: 13
    },
    {
        name: "Казахский национальный университет им. аль-Фараби",
        location: "Алматы",
        photoUrl: "",
        tuitionPerYear: 800000,
        facultiesCount: 16
    },
    {
        name: "Казахстанско-Британский технический университет",
        location: "Алматы",
        photoUrl: "",
        tuitionPerYear: 1600000,
        facultiesCount: 6
    },
    {
        name: "Университет Нархоз",
        location: "Алматы",
        photoUrl: "",
        tuitionPerYear: 1000000,
        facultiesCount: 5
    },
    {
        name: "Астана IT Университет",
        location: "Астана",
        photoUrl: "",
        tuitionPerYear: 1100000,
        facultiesCount: 4
    },
    {
        name: "Университет им. Ш. Есенова (Yessenov University)",
        location: "Актау",
        photoUrl: "",
        tuitionPerYear: 700000,
        facultiesCount: 7
    },
    {
        name: "Казахский агротехнический университет им. С. Сейфуллина",
        location: "Астана",
        photoUrl: "",
        tuitionPerYear: 650000,
        facultiesCount: 9
    },
    {
        name: "Казахский национальный педагогический университет им. Абая",
        location: "Алматы",
        photoUrl: "",
        tuitionPerYear: 750000,
        facultiesCount: 10
    },
    {
        name: "Казахский национальный аграрный исследовательский университет",
        location: "Алматы",
        photoUrl: "",
        tuitionPerYear: 680000,
        facultiesCount: 11
    },
    {
        name: "Казахский университет международных отношений и мировых языков им. Абылай хана",
        location: "Алматы",
        photoUrl: "",
        tuitionPerYear: 720000,
        facultiesCount: 6
    }
];

import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const value = ref(50);

import { useRouter } from 'vue-router';

const router = useRouter();

function goToUniversity(u) {
    router.push({ name: 'UniversityItem' });
}


</script>
<template>
    <div class="un">
        <div class="filters">
            <div class="filter-item">
                <span>Название университета</span>
                <AutoComplete size="small" class="w-full md:w-56" />
            </div>
            <div class="filter-item">
                <span>Выберите город</span>
                <Select v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56"
                    size="small" />
            </div>
            <div class="filter-item">
                <span>Наличие общежития</span>
                <div class="flex gap-2 items-center h-[35px]">
                    <Checkbox v-model="pizza" inputId="obj" value="Cheese" />
                    <label for="obj"> С общежитием </label>
                </div>
            </div>
            <div class="filter-item">
                <span>Цена обучения до</span>
                <div class="flex gap-2.5 items-center h-[35px]">
                    <Slider v-model="value" size="small" class="w-full md:w-56" />
                    <p>{{ value }}т</p>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="university-item" v-for="u in universities" :key="u.name" @click="goToUniversity(u)">
                <div class="image">
                    <img src="@/assets/images/wegwfaf.jpg" alt="">
                </div>
                <div class="content">
                    <p class="text-sm font-semibold leading-none text-slate-700">{{ u.name }}</p>
                    <p class=" text-xs text-blue-800 w-full font-medium flex justify-between"><span
                            class="flex gap-1 items-center"><i class="fi fi-rr-marker" style="font-size: 12px;"></i>{{
                                u.location }}</span><span>{{ u.tuitionPerYear }}т в
                            год</span></p>
                </div>
            </div>
        </div>
        <router-view />
    </div>
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
                @apply w-full h-[250px] min-h-[250px] rounded-md overflow-hidden;

                img {
                    @apply w-full h-full rounded-md;
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