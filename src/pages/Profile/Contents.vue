<script setup>

</script>

<template>
  <div class="content">
    <div style="position: absolute; top:-32px; left:306px; background: #a7e0fe; width: 25px; height: 25px;"></div>
    <div style="position: absolute; top:-32px; left:306px; background: white; width: 25px; height: 25px; z-index: 1; border-radius: 0 0 70% 0;"></div>
    <div style="position: absolute; top:0; left:306px; background: #a7e0fe; width: 25px; height: 25px;"></div>
    <div style="position: absolute; top:0; left:306px; background: #063058; width: 25px; height: 25px; z-index: 1; border-radius: 0 70% 0 0;"></div>
    <div class="absolute px-20 rounded-2xl" style="background: #a7e0fe; left: 331px; top: -36px">
      <div class="px-10 py-5 gap-24 flex">
        <div class="active"><span>Обо мне</span></div>
        <div><span>Цель</span></div>
        <div><span>Редактировать</span></div>
      </div>
    </div>
    <div style="position: absolute; top:-32px; right:195px; background: #a7e0fe; width: 25px; height: 25px;"></div>
    <div style="position: absolute; top:-32px; right:195px; background: white; width: 25px; height: 25px; z-index: 1; border-radius: 0 0 0 70%;"></div>
    <div style="position: absolute; top:0; right:195px; background: #a7e0fe; width: 25px; height: 25px;"></div>
    <div style="position: absolute; top:0;  right:195px; background: #063058; width: 25px; height: 25px; z-index: 1; border-radius: 70% 0 0 0;"></div>
    <div class="personal-info">
      <div class="flex justify-between relative">
        <div class="info-block">
          <p class="m-0 text-gray-400 text-xs mb-1.5">Личная информация</p>
          <div class="option">
            <p class="info">имя</p>
            <p class="item">Elizabeth</p>
          </div>
          <div class="option">
            <p class="info">фамилия</p>
            <p class="item">Chase Olsen</p>
          </div>
          <div class="option">
            <p class="info">возраст</p>
            <p class="item">36 лет</p>
          </div>
          <div class="option">
            <p class="info">дата рождения</p>
            <p class="item">16 фев. 1989</p>
          </div>
          <div class="option">
            <p class="info">город</p>
            <p class="item">Los Angeles</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="info-block">
          <p class="m-0 text-gray-400 text-xs mb-3.5">Профильные предметы</p>
          <div class="option">
            <p class="pred">История Казахстана</p>
          </div>
          <div class="option">
            <p class="pred">Грамотность чтения</p>
          </div>
          <div class="option">
            <p class="pred">Математическая грамотность</p>
          </div>
          <div class="option">
            <p class="pred">Физика</p>
          </div>
          <div class="option">
            <p class="pred">Математика</p>
          </div>
        </div>
        <div class="info-block">
          <p class="m-0 text-gray-400 text-xs mb-3.5">Интересующие специальности</p>
          <div class="spec-tag"><span class="font-bold pr-1.5">+</span>Учитель Математики</div>
          <br>
          <br>
          <div class="spec-tag"><span class="font-bold pr-1.5">+</span>Учитель Физики</div>
          <br>
          <br>
          <div class="spec-tag"><span class="font-bold pr-1.5">+</span>Математика и Статистика</div>
          <br>
          <br>
          <div class="spec-tag"><span class="font-bold pr-1.5">+</span>Информационные технологии</div>
          <br>
        </div>
        <div class="info-block">
          <p class="m-0 text-gray-400 text-xs mb-1.5">Учебное заведение</p>
          <div class="option">
            <p class="info">школа</p>
            <p class="item">Campbell Hall School</p>
          </div>
          <div class="option">
            <p class="info">класс</p>
            <p class="item">11</p>
          </div>
          <div class="option">
            <p class="info">Село/город</p>
            <p class="item">Город</p>
          </div>
          <div class="option">
            <p class="info">Наличие квоты</p>
            <p class="item">Есть</p>
          </div>
        </div>
      </div>
      <div class="flex mt-5 justify-between">
        <div class="ent-result">
          <p class="m-0 text-gray-400 text-xs mb-1.5">Тестирования за 16 янв. 2024г</p>
          <div class="ent-item">
            <p class="name">История Казахстана</p>
            <p class="ball"><span>10</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Грамотность чтения</p>
            <p class="ball"><span>7</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Математическая грамотность</p>
            <p class="ball"><span>3</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Математика</p>
            <p class="ball"><span>24</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Физика</p>
            <p class="ball"><span>20</span>/ 15</p>
          </div>
          <div class="flex w-full justify-end text-xs text-gray-400">67 баллов из 140</div>
        </div>
        <div class="ent-result">
          <p class="m-0 text-gray-400 text-xs mb-1.5">Тестирования за 16 янв. 2024г</p>
          <div class="ent-item">
            <p class="name">История Казахстана</p>
            <p class="ball"><span>10</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Грамотность чтения</p>
            <p class="ball"><span>7</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Математическая грамотность</p>
            <p class="ball"><span>3</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Математика</p>
            <p class="ball"><span>24</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Физика</p>
            <p class="ball"><span>20</span>/ 15</p>
          </div>
          <div class="flex w-full justify-end text-xs text-gray-400">67 баллов из 140</div>
        </div>
        <div class="ent-result">
          <p class="m-0 text-gray-400 text-xs mb-1.5">Тестирования за 16 янв. 2024г</p>
          <div class="ent-item">
            <p class="name">История Казахстана</p>
            <p class="ball"><span>10</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Грамотность чтения</p>
            <p class="ball"><span>7</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Математическая грамотность</p>
            <p class="ball"><span>3</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Математика</p>
            <p class="ball"><span>24</span>/ 15</p>
          </div>
          <div class="ent-item">
            <p class="name">Физика</p>
            <p class="ball"><span>20</span>/ 15</p>
          </div>
          <div class="flex w-full justify-end text-xs text-gray-400">67 баллов из 140</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  @apply inline-flex w-full relative;
  border-top: 7px solid #a7e0fe;
  background: #063058;
}
.personal-info {
  @apply mt-10 w-full p-3;
  .info-block {
    background: rgba( 39, 65, 105);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 2;
    @apply px-5 pt-3.5 pb-5 w-64 rounded h-auto;
  }
  .option {
    @apply py-2 block;
    p {
      @apply m-0;
    }
    .info {
      @apply text-xs text-gray-400;
    }
    .item {
      @apply text-sm text-gray-700 pl-1.5;
      color: #fed6bd;
    }
  }
  .option + .option {
    @apply border-0 border-t border-solid border-gray-600;
  }
}
.line, .line1, .line2 {
  content: '';
  height: 2px;
  width: 55px;
  background: rgba(255, 255, 255, 0.2);
}
.line {
  position: absolute;
  left: 254px;
  top: 38px;
}
.line1 {
  position: absolute;
  left: 560px;
  top: 118px;
}
.line2 {
  position: absolute;
  right: 254px;
  top: 238px;
}
.pred {
  color: #8abbd5;
  @apply m-0 text-sm;
  letter-spacing: 1.25px;
}
.spec-tag {
  @apply rounded-2xl px-3.5 py-1.5 inline;
  font-size: 11px;
  background: #fed6bd;
}
.ent-result {
  @apply px-5 pt-3.5 pb-5 rounded h-auto;
  background: rgba( 39, 65, 105);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2;
}
.ent-item {
  @apply py-2.5 flex justify-between text-xs;
  p {
    margin: 0;
  }
  .name {
    @apply text-gray-300 text-sm mr-3;
  }
  .ball {
    @apply text-gray-400 font-medium;
    span {
      color: #fed6bd;
    }
  }
}
.ent-item + .ent-item {
  @apply border-0 border-t border-solid border-gray-600;
            }
</style>