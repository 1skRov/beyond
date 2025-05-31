<template>
  <Drawer v-model:visible="visible" position="right" :modal="true" :dismissableMask="true" :header="header" :style="{ width: '500px' }">
    <div class="p-4 space-y-4">
      <div class="field">
        <label for="name">Имя</label>
        <InputText v-model="form.name" id="name" class="w-full" />
      </div>

      <div class="field">
        <label for="surname">Фамилия</label>
        <InputText v-model="form.surname" id="surname" class="w-full" />
      </div>

      <div class="field">
        <label for="username">Логин</label>
        <InputText v-model="form.username" id="username" class="w-full" />
      </div>

      <div class="field">
        <label for="email">Email</label>
        <InputText v-model="form.email" id="email" class="w-full" />
      </div>

      <div class="field">
        <label for="birth_date">Дата рождения</label>
        <InputText v-model="form.birth_date" id="birth_date" class="w-full" placeholder="YYYY-MM-DD" />
      </div>

      <div class="field">
        <label for="city">Город</label>
        <InputText v-model="form.city" id="city" class="w-full" />
      </div>

      <div class="field">
        <label for="school">Школа</label>
        <InputText v-model="form.school" id="school" class="w-full" />
      </div>

      <div class="field">
        <label for="class_level">Класс</label>
        <InputText v-model.number="form.class_level" id="class_level" class="w-full" type="number" />
      </div>

      <div class="field">
        <label for="profile_subjects">Профильные предметы</label>
        <InputText v-model="form.profile_subjects[0]" placeholder="Предмет 1" class="w-full mb-2" />
        <InputText v-model="form.profile_subjects[1]" placeholder="Предмет 2" class="w-full" />
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-2 p-4">
        <Button label="Сохранить" icon="pi pi-check" @click="onSave" />
        <Button label="Отмена" icon="pi pi-times" severity="danger" @click="$emit('update:visible', false)" />
      </div>
    </template>
  </Drawer>
</template>

<script setup>
import { ref, watch, reactive } from 'vue';
import { updateUser } from '@/services/userService';
import { getUserIdFromToken } from '@/utils/jwt';

const props = defineProps({
  visible: Boolean,
  userData: Object,
});
const emit = defineEmits(['update:visible', 'updated']);

const form = reactive({
  id: '',
  name: '',
  surname: '',
  username: '',
  email: '',
  birth_date: '',
  city: '',
  class_level: 0,
  school: '',
  profile_subjects: ['', ''],
});

watch(
  () => props.userData,
  (val) => {
    if (val) {
      Object.assign(form, JSON.parse(JSON.stringify(val)));
    }
  },
  { immediate: true }
);

function onSave() {
  const id = form.id || getUserIdFromToken();
  updateUser(id, form)
    .then(() => {
      emit('updated');
      emit('update:visible', false);
    })
    .catch((err) => {
      console.error('Ошибка обновления:', err);
    });
}

const header = 'Редактировать профиль';
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 0.25rem;
  font-weight: 500;
}
</style>
