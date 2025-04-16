<script>

export default {
  name: "AuthorList",
  data(){
    return{
      authors: [
        { name: "Иван Петров", image: "/images/balloon.svg" },
        { name: "Мария Ковалева", image: "/images/user1.webp" },
        { name: "Александр Сидоров", image: "" },
        { name: "Елена Орлова", image: "/images/balloon2.svg" },
        { name: "Дмитрий Ким", image: "" },
        { name: "Анна Смирнова", image: "/images/balloon3.svg" },
        { name: "Олег Власов", image: "" },
        { name: "Наталья Иванова", image: "" },
        { name: "Павел Токарев", image: "/images/balloon4.svg" },
        { name: "Оксана Ким", image: "" },
        { name: "Тимур Нурланов", image: "/images/balloon5.svg" }
      ],
      aVisible: false,
    }
  },
  methods: {
    openAuthor(){
      this.aVisible = !this.aVisible;
    }
  }
}
</script>

<template>
<div class="w-full items-center justify-center flex flex-wrap">
  <div @click="openAuthor" v-for="a in authors" class="m-5 flex flex-col gap-2 items-center justify-center cursor-pointer" v-tooltip.top="'Нажмите что увидеть информацию'">
    <Avatar v-if="a.image" :image="a.image" class="border-2 border-blue-200" size="xlarge" shape="circle"/>
    <Avatar v-else icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
    <p>{{a.name}}</p>
  </div>
  <Drawer v-model:visible="aVisible" position="right" :modal="true">
    <template #header>
      <div class="flex items-center gap-2">
        <Avatar image="/images/user1.webp" shape="circle" size="xlarge" />
        <span class="font-bold">Amy Elsner</span>
      </div>
    </template>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <template #footer>
      <div class="flex items-center gap-2">
        footer
      </div>
    </template>
  </Drawer>
</div>
</template>

<style scoped>

</style>