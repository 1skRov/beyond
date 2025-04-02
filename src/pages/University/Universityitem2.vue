<script>
import OptionsInformation from "@/pages/University/OptionsInformation.vue";

export default {
  name: "UniversityPage",
  components: {OptionsInformation},
  data(){
    return {
      images: [],
      activeIndex: 0,
      displayCustom: false,
      responsiveOptions: [
        { breakpoint: '1024px', numVisible: 5 },
        { breakpoint: '768px', numVisible: 3 },
        { breakpoint: '560px', numVisible: 1 }
      ]
    }
  },
  mounted() {
    this.images = Array.from({ length: 6 }, (_, i) => ({
      src: new URL(`@/assets/images/photo${i + 1}.jpg`, import.meta.url).href,
      alt: `Photo ${i + 1}`
    }));
  },
  methods: {
    imageClick(index) {
      this.activeIndex = index;
      this.displayCustom = true;
    }
  }
}

</script>

<template>
  <div>
    <div class="un-top">
      <p class="u-title">Евразийский национальный университет имени Л.Н. Гумилёва (ЕНУ)
      </p>
      <div class="flex w-full h-full gap-2">
        <div class="main-info">
          <div class="rounded-lg p-3" style="background: #DDE2EF;">
            <p class="pb-1.5 m-0 font-medium" style="font-size: 13px; color: #53586A">Краткая информация про
              университет</p>
            <p class="m-0 leading-5 text-xs">Евразийский национальный университет имени Л.Н. Гумилёва был основан в 1996
              году по инициативе первого президента Казахстана Нурсултана Назарбаева. Университет назван в честь Льва
              Николаевича Гумилёва, известного историка и этнолога, разработавшего теорию пассионарности.
            </p>
          </div>
          <div class="rounded-lg bg-emerald-50 p-3">
            <p class="pb-1.5 m-0 font-medium" style="font-size: 13px; color: #09203D">Расположение</p>
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-2">
                <p class="m-0 leading-5 text-xs">г. Астана, ул. Сатпаева 2
                </p>
                <p class="m-0 leading-5 text-xs">Телефон приемной комиссии: <span
                    class="font-medium">+7 (7172) 709-500</span>
                </p>
              </div>
              <div class="rounded-lg w-10 h-10 flex items-center justify-center"
                   style="color: #09203D; background: #BBEED3;">
                <i class="fi fi-ss-map-marker-home text-xl leading-none"></i>
              </div>
            </div>
          </div>
          <div class="rounded-lg bg-orange-50 p-3">
            <p class="text-orange-700 pb-1.5 m-0 font-medium" style="font-size: 13px;">Образования</p>
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-2">
                <div class="flex gap-2.5 items-center">
                  <p class="m-0 text-xs">Бакалавриат</p>
                  <p class="text-gray-500 font-medium tracking-wide m-0 text-xs">4 года</p>
                  <p class="text-gray-500 font-medium tracking-wide m-0 text-xs">от 980 000</p>
                </div>
                <div class="flex gap-2.5">
                  <p class="m-0 text-xs">Магистратура</p>
                  <p class="text-gray-500 font-medium tracking-wide m-0 text-xs">4 года</p>
                  <p class="text-gray-500 font-medium tracking-wide m-0 text-xs">от 980 000</p>
                </div>
                <div class="flex gap-2.5">
                  <p class="m-0 text-xs">Докторантура</p>
                  <p class="text-gray-500 font-medium tracking-wide m-0 text-xs">4 года</p>
                  <p class="text-gray-500 font-medium tracking-wide m-0 text-xs">от 980 000</p>
                </div>
              </div>
              <div class="rounded-lg bg-orange-200 text-orange-700 w-10 h-10 flex items-center justify-center">
                <i class="fi fi-ss-user-graduate text-xl leading-none"></i>
              </div>
            </div>
          </div>
          <div class="rounded-lg p-3" style="background: #FCF6F5;">
            <p class="pb-1.5 m-0 font-medium" style="font-size: 13px; color: #990011">Достижения и рейтинги</p>
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-2">
                <p class="m-0 leading-5 text-xs">Рейтинг QS №321
                </p>
                <p class="m-0 leading-5 text-xs">Рейтинг THE №1501
                </p>
              </div>
              <div class="rounded-lg w-10 h-10 flex items-center justify-center"
                   style="color: #FCF6F5; background: #990011;">
                <i class="fi fi-sr-globe text-xl leading-none"></i>
              </div>
            </div>
          </div>
          <div class="rounded-lg p-3 bg-blue-50">
            <p class="pb-1.5 m-0 font-medium" style="font-size: 13px; color: #00246B">Международное сотрудничество</p>
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-2">
                <p class="m-0 leading-5 text-xs">Программы обмена студентов (Erasmus+, DAAD, Mevlana)
                </p>
                <p class="m-0 leading-5 text-xs">Партнёрство с более чем 300 вузами (США, Европа, Азия)
                </p>
                <p class="m-0 leading-5 text-xs">Двойные дипломы с ведущими университетами мира
                </p>
              </div>
              <div class="rounded-lg w-10 h-10 flex items-center justify-center"
                   style="color: #00246B; background: #CADCFC;">
                <i class="fi fi-sr-globe text-xl leading-none"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="additional-info">
          <p class="text-sm text-gray-700 font-medium mb-3">Дополнительная информация</p>
          <div class="info">
            <p>Количество студентов: 20 000+</p>
            <p>Количество преподавателей: 1500+</p>
            <p>Лидер в сфере образования и науки Казахстана. Широкая международная сеть партнёров. Современные научные
              лаборатории. Выпускники работают в правительстве, бизнесе, международных организациях</p>
            <p>ЕНУ сотрудничает с зарубежными университетами, предлагая академическую мобильность и двойные
              дипломы. </p>
            <p>ЕНУ – один из ведущих научных центров Казахстана.
            </p>
            <p>Университет выпускает международные научные журналы. </p>
            <p>Стипендии и гранты. Государственные гранты. Международные гранты и стипендии. Поддержка талантливых
              студентов</p>
          </div>
        </div>
        <div class="un-avatar">
          <div class="flex flex-col items-center justify-center w-full">
            <div class="p-3 rounded-lg w-48 h-48" style="border: 1px solid #8FAADF">
              <img
                  src="data:image/jpeg;base64,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"
                  alt="">
            </div>
            <div class="font-medium mt-6 text-center" style="font-size: 12px; letter-spacing: 1.5px; color: #1B3579">
              Евразийский
              национальный университет имени Л.Н. Гумилёва (ЕНУ)
            </div>
            <div class="font-medium mt-1 text-center" style="font-size: 10px; letter-spacing: 1.5px; color: #1B3579">
              Государственный
              ВУЗ.год основания
              1996
            </div>
          </div>
          <div class="w-full flex flex-col justify-center items-center gap-4">
            <div class="s-media">
              <div class="item">
                <i class="fi fi-brands-instagram"></i>
              </div>
              <div class="item">
                <i class="fi fi-brands-facebook"></i>
              </div>
              <div class="item">
                <i class="fi fi-brands-tik-tok"></i>
              </div>
            </div>
            <div class="open-web">
              <button><i class="fi fi-ss-site-alt"></i>официальный сайт</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="options">
      <div class="options-1">
        <h1>Информация по опциям</h1>
        <div class="rounded-lg">
<options-information></options-information>
        </div>
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

<style scoped>
i {
  display: block;
}

.un-top {
  @apply flex flex-col;
  min-height: 50vh;

  .u-title {
    letter-spacing: 1.5px;
    font-size: 25px;
    line-height: 60px;
    @apply font-semibold;
  }

  .main-info {
    @apply flex flex-col gap-2;
    min-width: 40%;
    width: 40%;
  }

  .additional-info {
    min-width: 40%;
    width: 40%;
    @apply bg-gray-50 rounded overflow-y-auto p-3;

    .info {
      @apply text-xs text-gray-600;

      p {
        @apply my-1;
      }
    }
  }

  .un-avatar {
    @apply w-full py-3 px-12 rounded flex flex-col items-center justify-center gap-10;
    background: #e8f0f8;
    color: #8FAADF;

    .s-media {
      @apply flex justify-center items-center gap-3;

      .item {
        @apply flex items-center justify-center w-9 h-9 rounded-full;
        background: #1b3579;

        i {
          color: #eef4fa;
          width: 18px;
          height: 18px;
          @apply -mr-0.5;
        }
      }
    }

    .open-web {
      @apply w-full justify-center flex;

      button {
        @apply border-none rounded-lg text-center py-2 text-xs w-full flex gap-1.5 justify-center items-center;
        background: #1b3579;
        border: 1px solid #e8f0f8;
        color: #eef4fa;

        i {
          @apply -mb-1;
        }
      }
    }
  }
}

.options {
  @apply flex w-full gap-2.5 py-4;

  h1 {
    @apply text-gray-600 font-medium;
  }

  .options-1 {
    @apply w-1/2;
  }

  .options-2 {
    @apply p-3 w-1/2;
  }
}
</style>