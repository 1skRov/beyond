<script>
import OptionsInformation from "@/pages/University/OptionsInformation.vue";
import {getUniversityById} from "@/services/universityService.js";

export default {
  name: "UniversityPage",
  components: {OptionsInformation},
  props: ['id'],
  data() {
    return {
      images: [],
      activeIndex: 0,
      univers: null,
      displayCustom: false,
      responsiveOptions: [
        {breakpoint: '1024px', numVisible: 5},
        {breakpoint: '768px', numVisible: 3},
        {breakpoint: '560px', numVisible: 1}
      ],
      isEdit: false,
    }
  },
  mounted() {
    this.images = Array.from({length: 6}, (_, i) => ({
      src: new URL(`@/assets/images/photo${i + 1}.jpg`, import.meta.url).href,
      alt: `Photo ${i + 1}`
    }));
    console.log('ID университета:', this.id);
    this.getInformationById();
  },
  methods: {
    async getInformationById() {
      this.univers = await getUniversityById(this.id);
      console.log("univers", this.univers);
    },
    edit() {
      this.isEdit = !this.isEdit;
    }
  }
}

</script>

<template>
  <div class="w-full h-full">
    <div class="university-main-info">
      <p class="u-title">{{ univers?.name }}</p>
      <div class="flex w-full gap-3">
        <div class="u-avatar">
          <div class="flex flex-col items-center justify-center w-full">
            <div class="p-3 rounded-lg w-48 h-48 border border-blue-800 flex items-center justify-center">
              <img v-if="univers?.photo_url" :src="univers?.photo_url" alt="">
              <i v-else class="fi fi-br-image-slash"></i>
            </div>
            <div class="font-medium mt-6 text-center text-xs text-blue-900 fonr-medium" style="letter-spacing: 1px">
              {{ univers?.name }}
            </div>
            <div class="font-medium mt-1 text-center text-blue-900" style="font-size: 10px; letter-spacing: 1.5px">
              {{ univers?.university_type }}
              университет.
            </div>
          </div>
          <div class="w-full flex flex-col justify-center items-center gap-4 mt-3">
            <div class="s-media">
              <a
                  v-if="univers?.email"
                  :href="`mailto:${univers.email}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="item"
              >
                <i class="fi fi-sr-envelope"></i>
              </a>
              <a
                  v-if="univers?.instagram_url"
                  :href="univers.instagram_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="item"
              >
                <i class="fi fi-brands-instagram"></i>
              </a>
              <a
                  v-if="univers?.facebook_url"
                  :href="univers.facebook_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="item"
              >
                <i class="fi fi-brands-facebook"></i>
              </a>
              <a
                  v-if="univers?.tiktok_url"
                  :href="univers.tiktok_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="item"
              >
                <i class="fi fi-brands-tik-tok"></i>
              </a>
            </div>
            <div class="open-web">
              <button><i class="fi fi-ss-site-alt"></i>официальный сайт</button>
              <button @click="edit">Редактировать</button>
            </div>
          </div>
        </div>
        <div class="u-main-info">
          <div class="info-item">
            <div class="item-icon bg-blue-100">
              <i class="fi fi-rr-information text-blue-900"></i>
            </div>
            <div>
              <p class="title text-blue-900">Краткая информация про
                университет</p>
              <div class="text" v-html="univers?.short_info">
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="item-icon bg-green-100">
              <i class="fi fi-ss-map-marker-home text-green-900"></i>
            </div>
            <div>
              <p class="title text-green-900">Расположение</p>
              <div class="text">
                {{ univers?.location }}
                <p class="m-0 leading-5 text-xs">
                  Телефон приемной комиссии:
                  <span class="font-medium">
                    {{ univers?.admission_phone }}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="item-icon bg-orange-100">
              <i class="fi fi-ss-user-graduate text-orange-900"></i>
            </div>
            <div>
              <p class="title text-orange-900">Образования</p>
              <div class="text">
                оплата обучения в год {{ univers?.costs }}
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="item-icon bg-indigo-100">
              <i class="fi fi-sr-globe text-indigo-900"></i>
            </div>
            <div>
              <p class="title text-indigo-900">Международное сотрудничество</p>
              <div class="text" v-html="univers?.international_partners">
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="item-icon bg-red-100">
              <i class="fi fi-sr-globe text-red-900"></i>
            </div>
            <div>
              <p class="title text-red-900">Достижения и рейтинги</p>
              <div class="text">---
              </div>
            </div>
          </div>
        </div>
        <div class="additional-info">
          <p class="text-sm text-gray-700 font-medium mb-3">Дополнительная информация</p>
          <div class="info" v-html="univers?.extra_info">
          </div>
        </div>
      </div>
    </div>
    <div class="options">
      <div class="options-1">
        <options-information :sport="univers?.sports" :Uid="univers?.id"></options-information>
      </div>
      <div class="options-2">
        <h1>Фотогалерея</h1>
        <div>
          <div class="card flex flex-wrap gap-2.5">
            <img src="@/assets/images/Без%20имени.jpg" alt="" style="width: 150px; height: 150px">
            <img src="@/assets/images/avwwfcawer.jpg" alt="" style="width: 150px; height: 150px">
            <img src="@/assets/images/erhgasdcfefwcwf.jpg" alt="" style="width: 150px; height: 150px">
            <img src="@/assets/images/sdfsdfsdfsdfsdfsdf.jpg" alt="" style="width: 150px; height: 150px">
            <img src="@/assets/images/sdfsdfsf.jpg" alt="" style="width: 150px; height: 150px">
            <img src="@/assets/images/wegwfaf.jpg" alt="" style="width: 150px; height: 150px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.university-main-info {
  .u-title {
    @apply py-2 text-2xl font-semibold;
  }

  .u-avatar {
    @apply bg-white rounded-md py-4 px-3 min-w-[280px];

    .s-media {
      @apply flex justify-center items-center gap-3;

      .item {
        @apply flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 duration-200 ease-in cursor-pointer;

        i {
          color: #eef4fa;
          font-size: 18px;
          @apply text-blue-900;
        }

        &:hover {
          @apply bg-blue-900;

          i {
            @apply text-blue-100;
          }
        }
      }
    }

    .open-web {
      @apply w-full justify-center flex flex-col gap-3;

      button {
        @apply border-none rounded-lg text-center py-2 text-xs w-full flex gap-1.5 justify-center items-center;
        @apply bg-blue-900 text-blue-100 font-medium border border-blue-50 duration-200 ease-in cursor-pointer;
      ;

        &:hover {
          @apply bg-blue-100 text-blue-900;
        }
      }
    }
  }

  .u-main-info {
    @apply p-3 rounded-md bg-white flex flex-col gap-1.5;

    .info-item {
      @apply flex gap-2;

      .item-icon {
        @apply rounded-md w-9 h-9 min-w-9 min-h-9 flex items-center justify-center;

        i {
          font-size: 16px;
        }
      }

      .title {
        @apply pb-1.5 m-0 font-medium text-base;
      }

      .text {
        @apply text-xs leading-5;
      }
    }
  }

  .additional-info {
    @apply bg-white rounded-md overflow-y-auto p-3 w-full;

    .info {
      @apply text-xs text-slate-800 leading-4;
    }
  }
}

.options {
  @apply flex w-full gap-3 py-4;
  .options-1 {
    @apply w-1/2 rounded-md bg-white p-3;
  }

  .options-2 {
    h1 {
      @apply text-xl text-blue-900 mb-3 font-medium;
    }

    @apply p-3 w-1/2 bg-white rounded-md;
  }
}
</style>