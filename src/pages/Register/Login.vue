<!-- src/pages/Auth/Login.vue -->
<template>
  <div class="login-page">
    <h2>Вход в систему</h2>

    <form @submit.prevent="onSubmit" class="login-form">
      <div class="form-group">
        <label for="username">Имя пользователя</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Введите ваш username"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Введите ваш пароль"
          required
        />
      </div>

      <div v-if="errorMsg" class="error">{{ errorMsg }}</div>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "Загрузка..." : "Войти" }}
      </button>

      <p class="to-register">
        Ещё нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginUser } from "@/api/auth.js";

const router = useRouter();

const username = ref("");
const password = ref("");
const errorMsg = ref("");
const isSubmitting = ref(false);

async function onSubmit() {
  if (!username.value || !password.value) {
    errorMsg.value = "Пожалуйста, заполните оба поля.";
    return;
  }

  isSubmitting.value = true;
  errorMsg.value = "";

  try {
    // Вызываем функцию loginUser, которая возвращает Promise с данными ответа.
    const data = await loginUser({
      username: username.value,
      password: password.value,
    });

    // Предположим, бэкенд возвращает { token: "...JWT..." }
    // Если у вас иная структура, поправьте поле ниже.
    const token = data.token || data.accessToken || data.jwt;
    if (!token) {
      throw new Error("В ответе нет JWT-токена");
    }

    // Сохраняем токен в localStorage
    localStorage.setItem("jwt", token);

    // Устанавливаем дефолтный заголовок Authorization для всех axios-запросов дальше
    // (если вы везде используете axios.create, нужно продублировать туда)
    // window.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // либо, если вы подключаете axios глобально:
    // import axios from "axios"; axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Перенаправляем пользователя в защищённую часть, например, на профиль
    router.replace({ name: "Profile" });
  } catch (err) {
    console.error(err);
    // Если bэкенд вернул ошибку в формате { message: "...", errors: { ... } }
    if (err.response && err.response.data) {
      // Попробуем вывести из err.response.data какой-нибудь удобочитаемый текст
      errorMsg.value = err.response.data.message || "Не удалось войти. Проверьте данные.";
    } else {
      errorMsg.value = err.message || "Ошибка сети, попробуйте снова.";
    }
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.login-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form .form-group {
  margin-bottom: 15px;
}

.login-form label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.login-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.login-form button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-form button:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

.error {
  color: #d9534f;
  margin-bottom: 10px;
}

.to-register {
  margin-top: 15px;
  text-align: center;
}

.to-register a {
  color: #409eff;
  text-decoration: none;
}
</style>
