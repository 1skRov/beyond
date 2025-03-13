<script setup>

import MainHeader from "@/components/MainComponents/MainHeader.vue";
</script>

<template>
  <div class="w-full">
    <main-header></main-header>
  </div>
  <div class="w-full h-full rounded overflow-hidden">
    <div class="image-container">
      <img src="https://images.gostudy.cz/images/2024/07/enu-im-gumileva-v-astane-.jpg" alt="ENU">
      <div class="gradient-overlay"></div>
      <div class="main-infos">
        <p class="name">Евразийский национальный университет имени Л.Н. Гумилёва (ЕНУ)</p>
        <p class="desc">Государственный университет</p>
        <div class="flex items-center gap-3.5 w-full">
          <button>официальный сайт</button>
          <button>фотогалерея</button>
        </div>
      </div>
      <div class="act-infos">
        <div class="bg-white rounded shadow-xl flex py-5">
          <div class="info-item">
            <p>Преподавателей</p>
            <div class="item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                      d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
                      fill="currentColor"></path>
                  <path opacity="0.4"
                        d="M19.5 7.5C19.5 8.88071 18.3807 10 17 10C15.6193 10 14.5 8.88071 14.5 7.5C14.5 6.11929 15.6193 5 17 5C18.3807 5 19.5 6.11929 19.5 7.5Z"
                        fill="currentColor"></path>
                  <path opacity="0.4"
                        d="M4.5 7.5C4.5 8.88071 5.61929 10 7 10C8.38071 10 9.5 8.88071 9.5 7.5C9.5 6.11929 8.38071 5 7 5C5.61929 5 4.5 6.11929 4.5 7.5Z"
                        fill="currentColor"></path>
                  <path
                      d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z"
                      fill="currentColor"></path>
                  <path opacity="0.4"
                        d="M22 16.5C22 17.8807 20.2091 19 18 19C15.7909 19 14 17.8807 14 16.5C14 15.1193 15.7909 14 18 14C20.2091 14 22 15.1193 22 16.5Z"
                        fill="currentColor"></path>
                  <path opacity="0.4"
                        d="M2 16.5C2 17.8807 3.79086 19 6 19C8.20914 19 10 17.8807 10 16.5C10 15.1193 8.20914 14 6 14C3.79086 14 2 15.1193 2 16.5Z"
                        fill="currentColor"></path>
                </g>
              </svg>
              <span>1500+</span>
            </div>
          </div>
          <div class="info-item">
            <p>Студентов</p>
            <div class="item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <circle opacity="0.4" cx="15" cy="6" r="3" fill="currentColor"></circle>
                  <ellipse opacity="0.4" cx="16" cy="17" rx="5" ry="3" fill="currentColor"></ellipse>
                  <circle cx="9.00098" cy="6" r="4" fill="currentColor"></circle>
                  <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill="currentColor"></ellipse>
                </g>
              </svg>
              <span>20 000+</span>
            </div>
          </div>
          <div class="info-item">
            <p>Город</p>
            <div class="item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
                        fill="currentColor"></path>
                  <path
                      d="M13.4227 17.3618L16.9348 8.19598C17.2164 7.46107 16.5389 6.78361 15.804 7.06521L6.63824 10.5773C5.80779 10.8955 5.78079 12.06 6.5981 12.3083L10.0751 13.3648C10.3455 13.447 10.553 13.6545 10.6352 13.9249L11.6917 17.4019C11.94 18.2192 13.1045 18.1922 13.4227 17.3618Z"
                      fill="currentColor"></path>
                </g>
              </svg>
              <span>г. Астана</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <p class="text-gray-600 w-full text-xl border-0 border-b border-gray-200">Про университет</p>
      <div class="flex p-10 justify-between">
        <div class="text-sm p-3 w-1/2 leading-8 text-gray-500">Евразийский национальный университет имени Л.Н. Гумилёва был основан в 1996 году по
          инициативе первого
          президента Казахстана Нурсултана Назарбаева. Университет назван в честь Льва Николаевича Гумилёва, известного
          историка и этнолога, разработавшего теорию пассионарности.
        </div>
        <div class="w-1/3 max-h-56 object-contain">
          <img
              src="data:image/jpeg;base64,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"
              alt="" class="w-full h-full">
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 50vh; /* Задай нужную высоту */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(6, 49, 123, 1) 10%, rgba(6, 49, 123, 0.8) 40%, rgba(6, 49, 123, 0.3) 70%);
}

.act-infos {
  @apply absolute flex justify-center w-full;
  bottom: -55px;
  z-index: 100;

  .info-item {
    @apply py-2 px-10;

    p {
      @apply text-gray-500 text-sm mb-2 text-center;
    }

    .item {
      @apply flex items-center gap-2.5;

      svg {
        fill: none;
        color: #003fb4;
        width: 35px;
        height: 35px;
      }

      span {
        @apply text-lg text-gray-500 font-medium;
      }
    }
  }

  .info-item + .info-item {
    @apply border-0 border-gray-200 border-l;
  }
}

.main-infos {
  @apply absolute top-0 left-0 w-1/2 h-full p-16 flex flex-col gap-3.5 items-center justify-center;

  .name {
    @apply text-white break-words font-semibold;
    font-size: 40px;
    letter-spacing: 1.5px;
    line-height: 60px;
  }

  .desc {
    @apply text-gray-200 text-sm text-left w-full;
    letter-spacing: 1.5px;
  }

  button {
    @apply bg-white border-none px-5 py-3 text-gray-700 text-sm font-medium;
  }
}

.about {
  @apply mt-20;
}
</style>