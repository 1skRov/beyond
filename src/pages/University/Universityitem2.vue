<script setup>

</script>

<template>
  <div class="un-top">
    <p class="u-title">Евразийский национальный университет имени Л.Н. Гумилёва (ЕНУ)
    </p>
    <div class="flex w-full h-full">
      <div class="main-info">
        <div class="rounded-lg bg-gray-50 border border-gray-200 p-1.5">
          <em class="text-gray-700 pb-1.5" style="font-size: 13px;">Краткая информация про университет</em>
          <p class="m-0 leading-5 text-xs">Евразийский национальный университет имени Л.Н. Гумилёва был основан в 1996
            году по инициативе первого президента Казахстана Нурсултана Назарбаева. Университет назван в честь Льва
            Николаевича Гумилёва, известного историка и этнолога, разработавшего теорию пассионарности.
          </p>
        </div>
        <div class="rounded-lg bg-green-50 border border-green-200 p-1.5">
          <p class="text-green-700 pb-1.5 m-0 font-medium" style="font-size: 13px;">Расположение</p>
          <div class="flex justify-between">
            <div class="flex flex-col gap-2">
              <p class="m-0 leading-5 text-xs">г. Астана, ул. Сатпаева 2
              </p>
              <p class="m-0 leading-5 text-xs">Телефон приемной комиссии: <span
                  class="font-medium">+7 (7172) 709-500</span>
              </p>
            </div>
            <div class="rounded-lg bg-green-200 text-green-700 w-10 h-10 flex items-center justify-center">
              <i class="fi fi-ss-map-marker-home text-xl leading-none"></i>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-orange-50 border border-orenge-200 p-1.5">
          <p class="text-orange-700 pb-1.5 m-0 font-medium" style="font-size: 13px;">Образования</p>
          <div class="flex justify-between">
            <div class="flex flex-col gap-2">
              <p class="m-0 leading-5 text-xs">Бакалавриат <span></span>
              </p>
              <p class="m-0 leading-5 text-xs">Магистратура
              </p>
              <p class="m-0 leading-5 text-xs">Докторантура
              </p>
            </div>
            <div class="rounded-lg bg-orange-200 text-orange-700 w-10 h-10 flex items-center justify-center">
              <i class="fi fi-ss-user-graduate text-xl leading-none"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="additional-info">---</div>
      <div class="un-avatar"></div>
    </div>
  </div>
</template>

<style scoped>
i {
  display: block;
}

.un-top {
  @apply flex flex-col;
  height: 50vh;

  .u-title {
    letter-spacing: 1.5px;
    font-size: 25px;
    @apply font-semibold;
  }

  .main-info {
    @apply p-2.5 flex flex-col gap-2;
    min-width: 35%;
    width: 35%;
    border: 1px solid blue;
  }

  .additional-info {
    @apply bg-red-50;
    min-width: 35%;
    width: 35%;
  }

  .un-avatar {
    @apply w-full bg-purple-50;
  }
}
</style>