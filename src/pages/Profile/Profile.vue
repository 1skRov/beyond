<script setup>
const API_BASE = 'http://195.133.194.73/app2';

import DayHead from "@/pages/Test/DayHead.vue";
import TestCharts from "@/pages/Profile/TestCharts.vue";
import { ref, onMounted } from "vue";
import UserShowDrawer from "@/pages/Profile/UserShowDrawer.vue";
import { getUserById } from "@/services/userService";
import { getUserIdFromToken } from "@/utils/jwt";

const programs = [
  'Программная инженерия',
  'Информационная безопасность',
  'Математическое и компьютерное моделирование',
  'Финансовая аналитика',
  'Цифровой маркетинг',
  'Искусственный интеллект и машинное обучение',
  'Робототехника и автоматизация',
  'Дизайн пользовательских интерфейсов',
  'Медиа и коммуникации',
  'Экономика и управление',
  'Государственное и муниципальное управление',
  'Юриспруденция и цифровое право',
  'Образовательные технологии',
  'Экологическая инженерия',
  'Биоинформатика и биотехнологии'
];

const user = ref(null);
const editdrawer = ref(false);
const openEdit = () => {
  editdrawer.value = true;
  console.log("test");
};

async function fetchUser() {
  const userId = getUserIdFromToken();
  if (!userId) return;
  try {
    user.value = await getUserById(userId);
  } catch (err) {
    console.error("Ошибка загрузки профиля:", err);
  }
}
onMounted(fetchUser);

function formatDate(dateStr) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  return date.toLocaleDateString("ru-RU");
}
</script>

<template>
  <div class="profile">
    <div class="profile-head">
      <div class="profile-image">
        <img :src="`${API_BASE}${user?.photo_url}`" :alt="`${API_BASE}${user?.photo_url}`">
      </div>
      <div class="user-info">
        <div class="info-head">
          <div class="name-login">
            <p>{{ user?.name || "-" }} {{ user?.surname || "-" }}</p>
            <span>{{ user?.username || "-" }}</span>
          </div>
          <div class="redact-buttons">
            <button v-tooltip="'Редактировать профиль'" @click="openEdit"><i class="fi fi-sr-file-edit"></i></button>
          </div>
        </div>
        <div class="info-body">
          <div class="info-block">
            <div class="flex gap-2 items-center">
              <i class="fi fi-sr-calendar text-blue-900" style="font-size: 20px;"></i>
              <div class="flex flex-col">
                <span class="label">дата рождения</span>
                <p class="value">{{ formatDate(user?.birth_date) || "-" }}</p>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <i class="fi fi-ss-house-chimney-window text-blue-900" style="font-size: 20px;"></i>
              <div class="flex flex-col">
                <span class="label">Город</span>
                <p class="value">{{ user?.city || "-" }}</p>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <i class="fi fi-sr-envelope text-blue-900" style="font-size: 20px;"></i>
              <div class="flex flex-col">
                <span class="label">почта</span>
                <p class="value">{{ user?.email || "-" }}</p>
              </div>
            </div>
          </div>
          <div class="info-block">
            <div class="flex flex-col">
              <span class="label">id</span>
              <p class="value">{{ user?.id || "-" }}</p>
            </div>
            <div class="flex flex-col">
              <span class="label">школа</span>
              <p class="value">{{ user?.school || "-" }}</p>
            </div>
            <div class="flex flex-col">
              <span class="label">класс</span>
              <p class="value">{{ user?.class_level || "-" }}</p>
            </div>
          </div>
          <div class="info-block">
            <div class="flex flex-col">
              <span class="label">Регистрация в системе</span>
              <p class="value">{{ formatDate(user?.created_at) }}</p>
            </div>
            <div class="flex flex-col">
              <span class="label">Обновление профиля</span>
              <p class="value">{{ formatDate(user?.updated_at) || "Еще не было обновлений" }}</p>
            </div>
            <div class="flex flex-col">
              <span class="label">Роль</span>
              <p class="value">{{ user?.role }}</p>
            </div>
          </div>
          <div class="info-block">
            <div class="flex flex-col">
              <span class="label">Профильный предмет 1</span>
              <p class="value">{{ user?.profile_subjects?.[0] || "-" }}</p>
            </div>
            <div class="flex flex-col">
              <span class="label">Профильные предмет 2</span>
              <p class="value">{{ user?.profile_subjects?.[1] || "-" }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="day-head">
      <div class="w-full flex justify-between mb-5">
        <p class="font-semibold text-lg">Активность пользователя в сети</p>
      </div>
      <div class="flex gap-10">
        <DayHead></DayHead>
        <div class="flex flex-col gap-3">
          <button>2025</button>
          <button>2024</button>
          <button>2023</button>
        </div>
      </div>
    </div>
    <div class="interests">
      <div class="w-full flex justify-between mb-5">
        <p class="font-semibold text-lg">Интересующие специальности</p>
        <button class="bg-blue-200 text-blue-900 font-medium px-3 rounded-md">Изменить список</button>
      </div>
      <div class="list">
        <div class="list-item" v-for="p in programs">
          <i class="fi fi-sr-bookmark text-purple-500" style="font-size: 12px;"></i>
          <p class="text-sm text-purple-600 m-0">{{ p }}</p>
        </div>
      </div>
    </div>
    <div class="test-results">
      <p class="font-semibold text-lg">Результаты ЕНТ</p>
      <TestCharts v-if="user?.ent_scores?.length" :ent="user.ent_scores" />
    </div>
  </div>
  <UserShowDrawer :visible="editdrawer" :userData="user" @update:visible="editdrawer = $event" @updated="fetchUser" />
</template>

<style scoped>
.profile {
  @apply w-full h-full;
}

.profile-head {
  @apply w-full px-2 py-2.5 rounded-md flex gap-3 bg-white;

  .profile-image {
    @apply overflow-hidden;
    min-width: 140px;
    width: 140px;
    height: 180px;
    min-height: 180px;

    img {
      @apply rounded-md w-full h-full object-cover;
    }
  }

  .user-info {
    @apply flex flex-col w-full;

    .info-head {
      @apply w-full flex justify-between;

      .name-login {
        p {
          @apply text-2xl text-blue-900 font-semibold;
        }

        span {
          @apply font-medium;
        }
      }

      .redact-buttons {
        button {
          @apply rounded-full w-8 h-8 bg-blue-200 flex items-center justify-center;

          i {
            @apply text-blue-900 leading-none ml-px text-sm;
          }

          &:hover {
            @apply bg-blue-100;
          }
        }
      }
    }

    .info-body {
      @apply flex justify-between items-center w-full h-full py-1.5;

      .info-block {
        @apply flex flex-col justify-between h-full mt-1;

        .label {
          @apply text-xs text-slate-500 font-medium;
        }

        .value {
          @apply font-medium text-sm m-0;
        }
      }
    }
  }
}

.day-head {
  @apply w-full py-2 px-2.5 rounded-md mt-3 bg-white;

  button {
    @apply rounded-md py-0.5 px-4 text-sm text-blue-900;
    @apply bg-blue-100 font-medium;
    letter-spacing: 1px;
  }
}

.interests {
  @apply w-full rounded-md py-2 px-2.5 mt-3;
  background: #f2f7fa;

  .list {
    @apply w-full flex flex-wrap justify-center gap-x-2 gap-y-1.5;

    .list-item {
      @apply flex items-center gap-2 rounded-md px-3 py-1 bg-pink-200 font-medium text-sm;
    }
  }
}

.test-results {
  @apply w-full px-2.5 py-2 rounded-md mt-3;
  background: #f2f7fa;
}
</style>