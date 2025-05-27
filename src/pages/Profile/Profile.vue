<script setup>
import DayHead from "@/pages/Test/DayHead.vue";

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
]
</script>

<template>
  <div class="profile">
    <div class="profile-head">
      <div class="profile-image">
        <img src="@/assets/images/user1.webp" alt="">
      </div>
      <div class="user-info">
        <div class="info-head">
          <div class="name-login">
            <p>Элизабет Олсен</p>
            <span>lizzie_olsen</span>
          </div>
          <div class="redact-buttons">
            <button v-tooltip="'Редактировать профиль'"><i class="fi fi-sr-file-edit"></i></button>
          </div>
        </div>
        <div class="info-body">
          <div class="info-block">
            <div class="flex gap-2 items-center">
              <i class="fi fi-sr-calendar text-blue-600" style="font-size: 20px;"></i>
              <div class="flex flex-col">
                <span class="label">дата рождения</span>
                <p class="value">19.12.1997</p>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <i class="fi fi-ss-house-chimney-window text-blue-600" style="font-size: 20px;"></i>
              <div class="flex flex-col">
                <span class="label">Город</span>
                <p class="value">Шымкент</p>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <i class="fi fi-sr-envelope text-blue-600" style="font-size: 20px;"></i>
              <div class="flex flex-col">
                <span class="label">почта</span>
                <p class="value">aslfnaslfnas@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="info-block">
            <div class="flex flex-col">
              <span class="label">id</span>
              <p class="value">asldfhasdad-adhaidhbaoddj</p>
            </div>
            <div class="flex flex-col">
              <span class="label">школа</span>
              <p class="value">Аль Фараби</p>
            </div>
            <div class="flex flex-col">
              <span class="label">класс</span>
              <p class="value">Аль Фараби</p>
            </div>
          </div>
          <div class="info-block">
            <div class="flex flex-col">
              <span class="label">Регистрация в системе</span>
              <p class="value">12,12,1293</p>
            </div>
            <div class="flex flex-col">
              <span class="label">Обновление профиля</span>
              <p class="value">13,12,2003</p>
            </div>
            <div class="flex flex-col">
              <span class="label">Роль</span>
              <p class="value">Абитуриент</p>
            </div>
          </div>
          <div class="info-block">
            <div class="flex flex-col">
              <span class="label">Профильный предмет 1</span>
              <p class="value">фыафывы</p>
            </div>
            <div class="flex flex-col">
              <span class="label">Профильные предмет 2</span>
              <p class="value">физика</p>
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
        <button class="bg-blue-600 text-slate-50 font-medium px-3 rounded-md">Изменить список</button>
      </div>
      <div class="list">
        <div class="list-item" v-for="p in programs">
          <i class="fi fi-sr-bookmark text-blue-600 text-xs"></i>
          <p class="text-sm text-blue-600 m-0">{{ p }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  @apply w-full h-full;
}

.profile-head {
  @apply w-full px-2 py-2.5 rounded-md flex gap-3;
  background: #f2f7fa;
  //background-image: radial-gradient(ellipse 75% 65% at 80% 55%, #d0e8c9 0%, rgba(225, 236, 230, 0) 70%),
  //radial-gradient(ellipse 75% 65% at 20% 80%, #b2d0e8 0%, rgba(228, 225, 234, 0) 70%);
  //color: #2f3542;

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
          @apply text-2xl text-blue-600 font-semibold;
        }

        span {
          @apply font-medium;
        }
      }

      .redact-buttons {
        button {
          @apply rounded-full w-8 h-8 bg-blue-600 flex items-center justify-center;

          i {
            @apply text-slate-50 leading-none ml-px text-sm;
          }

          &:hover {
            @apply bg-blue-500;
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
  @apply w-full py-2 px-2.5 rounded-md mt-3;
  background: #f2f7fa;

  button {
    @apply rounded-md py-0.5 px-4 text-sm text-slate-50;
    @apply bg-blue-600 font-medium;
    letter-spacing: 1px;
  }
}

.interests {
  @apply w-full rounded-md py-2 px-2.5 mt-3;
  background: #f2f7fa;

  .list {
    @apply w-full flex flex-wrap justify-center gap-x-2 gap-y-1.5;

    .list-item {
      @apply flex items-center gap-2 rounded-md px-3 py-1 bg-blue-600 text-slate-50 font-medium text-sm;
      background: #b7d1f3;
    }
  }
}
</style>