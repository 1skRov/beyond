<script setup>
const university = [
    {
        "name": "Назарбаев Университет",
        "admission_phone": "+7 (7172) 70 90 22",
        "email": "nu@nu.edu.kz",
        "location": "Астана",
        "photo_url": ""
    },
    {
        "name": "Евразийский национальный университет им. Л.Н. Гумилева",
        "admission_phone": "+7 (7172) 70 90 22",
        "email": "enu@enu.kz",
        "location": "Астана",
        "photo_url": ""
    },
    {
        "name": "Казахский национальный университет им. аль-Фараби",
        "admission_phone": "+7 (727) 377 33 30",
        "email": "info@kaznu.kz",
        "location": "Алматы",
        "photo_url": ""
    },
    {
        "name": "Казахстанско-Британский технический университет",
        "admission_phone": "+7 (727) 357 42 51",
        "email": "kense@kbtu.kz",
        "location": "Алматы",
        "photo_url": ""
    },
    {
        "name": "Университет Нархоз",
        "admission_phone": "+7 (727) 377 11 11",
        "email": "info@narxoz.kz",
        "location": "Алматы",
        "photo_url": ""
    },
    {
        "name": "Астана IT Университет",
        "admission_phone": "+7 (7172) 64 57 10",
        "email": "info@astanait.edu.kz",
        "location": "Астана",
        "photo_url": ""
    },
    {
        "name": "Университет им. Ш. Есенова (Yessenov University)",
        "admission_phone": "+7 (7292) 788 788",
        "email": "admission@yu.edu.kz",
        "location": "Актау",
        "photo_url": ""
    },
    {
        "name": "Казахский агротехнический университет им. С. Сейфуллина",
        "admission_phone": "+7 (7172) 317 547",
        "email": "office@kazatu.kz",
        "location": "Астана",
        "photo_url": ""
    },
    {
        "name": "Казахский национальный педагогический университет им. Абая",
        "admission_phone": "+7 (727) 291 57 68",
        "email": "info@kaznpu.kz",
        "location": "Алматы",
        "photo_url": ""
    },
    {
        "name": "Казахский национальный аграрный исследовательский университет",
        "admission_phone": "+7 (727) 264 06 13",
        "email": "info@kaznaru.edu.kz",
        "location": "Алматы",
        "photo_url": ""
    },
    {
        "name": "Казахский университет международных отношений и мировых языков им. Абылай хана",
        "admission_phone": "+7 (727) 292 08 00",
        "email": "kazumo@ablaikhan.kz",
        "location": "Алматы",
        "photo_url": ""
    },
]

</script>
<template>
    <div class="un">
        <div class="filters">filters</div>
        <div class="list">
            <div class="university-item" v-for="u in university">
                <div class="image">
                    <img src="@/assets/images/wegwfaf.jpg" alt="">
                </div>
                <div class="content"></div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.un {
    @apply w-full flex flex-col gap-3 h-full;

    .filters {
        @apply w-full py-2 px-3 bg-white rounded-md;
    }

    .list {
        @apply w-full bg-white px-3 py-2 rounded-md flex flex-wrap items-start;
    

        .university-item {
            @apply flex flex-col border border-slate-200 rounded-md px-2 py-1.5 gap-1 w-[240px];
            box-sizing: border-box;

            .image {
                max-width: 220px;
                max-height: 120px;
                width: 220px;

                img {
                    object-fit: contain;
                }
            }
        }
    }
}
</style>