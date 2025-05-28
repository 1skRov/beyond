<!-- src/pages/Auth/RegisterPage.vue -->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { register } from '@/services/authService';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({
  username: '',
  password: '',
  email: '',
  name: '',
  surname: '',
  birth_date: '',
  role: 'student'
});
const loading = ref(false);
const error = ref('');
const success = ref(false);

async function submit() {
  error.value = '';
  try {
    loading.value = true;
    await register(form);
    success.value = true;
    setTimeout(() => router.replace('/login'), 2000);
  } catch (e) {
    error.value = e.response?.data?.detail || 'Ошибка регистрации';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <form @submit.prevent="submit"
          class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 class="text-2xl font-semibold text-center text-sky-700 mb-6">Регистрация</h1>

      <div class="grid grid-cols-1 gap-4">
        <input v-model="form.username" placeholder="Логин" class="input"/>
        <input v-model="form.email"    type="email" placeholder="E-mail" class="input"/>
        <input v-model="form.name"     placeholder="Имя" class="input"/>
        <input v-model="form.surname"  placeholder="Фамилия" class="input"/>
        <input v-model="form.birth_date" type="date" placeholder="Дата рождения" class="input"/>
        <input v-model="form.password" type="password" placeholder="Пароль" class="input"/>
      </div>

      <button type="submit"
              :disabled="loading"
              class="mt-6 bg-sky-600 hover:bg-sky-700 text-white w-full py-2 rounded">
        {{ loading ? 'Создаём...' : 'Зарегистрироваться' }}
      </button>

      <p v-if="error"   class="mt-4 text-red-600 text-sm">{{ error }}</p>
      <p v-if="success" class="mt-4 text-green-600 text-sm">✓ Аккаунт создан, перенаправляем…</p>
    </form>
  </div>
</template>

<style scoped>
.input { @apply border rounded w-full px-3 py-2; }
</style>
