<!-- src/pages/Auth/Register.vue -->
<template>
  <div class="register-page">
    <h2>Регистрация пользователя</h2>

    <form @submit.prevent="onSubmit" class="register-form">
      <div class="form-group">
        <label for="username">Имя пользователя</label>
        <input
          type="text"
          id="username"
          v-model="form.username"
          placeholder="Придумайте username"
          required
        />
      </div>

      <div class="form-group">
        <label for="name">Имя</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Ваше имя"
          required
        />
      </div>

      <div class="form-group">
        <label for="surname">Фамилия</label>
        <input
          type="text"
          id="surname"
          v-model="form.surname"
          placeholder="Ваша фамилия"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="example@domain.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="birth_date">Дата рождения</label>
        <input
          type="date"
          id="birth_date"
          v-model="form.birth_date"
          required
        />
      </div>

      <div class="form-group">
        <label for="role">Роль</label>
        <input
          type="text"
          id="role"
          v-model="form.role"
          placeholder="Например, user или admin"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          placeholder="Введите пароль"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Повторите пароль</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="Подтвердите пароль"
          required
        />
      </div>

      <div v-if="errorMsg" class="error">{{ errorMsg }}</div>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "Загрузка..." : "Зарегистрироваться" }}
      </button>

      <p class="to-login">
        Уже есть аккаунт?
        <router-link to="/login">Войти</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { registerUser } from "@/api/auth.js";

const router = useRouter();

// Объект с полями регистрации
const form = ref({
  username: "",
  name: "",
  surname: "",
  email: "",
  birth_date: "",
  role: "",
  password: "",
});

const confirmPassword = ref("");
const errorMsg = ref("");
const isSubmitting = ref(false);

async function onSubmit() {
  // Проверка совпадения паролей
  if (form.value.password !== confirmPassword.value) {
    errorMsg.value = "Пароли не совпадают.";
    return;
  }
  // Добавим дополнительные проверки: длина пароля, формат e-mail и т.д.
  if (form.value.password.length < 6) {
    errorMsg.value = "Пароль должен быть не менее 6 символов.";
    return;
  }
  if (!form.value.email.includes("@")) {
    errorMsg.value = "Введите корректный e-mail.";
    return;
  }

  errorMsg.value = "";
  isSubmitting.value = true;

  try {
    // Отправляем POST /register
    await registerUser({
      username: form.value.username,
      name: form.value.name,
      surname: form.value.surname,
      email: form.value.email,
      birth_date: form.value.birth_date,
      role: form.value.role,
      password: form.value.password,
    });

    // Если регистрация успешна, переводим на страницу логина
    router.replace({ name: "Login" });
  } catch (err) {
    console.error(err);
    if (err.response && err.response.data) {
      // bэкенд мог вернуть { message, errors: { ... } }
      errorMsg.value = err.response.data.message || "Ошибка регистрации.";
    } else {
      errorMsg.value = err.message || "Ошибка сети, попробуйте позже.";
    }
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.register-page {
  max-width: 500px;
  margin: 80px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.register-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.register-form .form-group {
  margin-bottom: 15px;
}

.register-form label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.register-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.register-form button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #67c23a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.register-form button:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
}

.error {
  color: #f56c6c;
  margin-bottom: 10px;
}

.to-login {
  margin-top: 15px;
  text-align: center;
}

.to-login a {
  color: #67c23a;
  text-decoration: none;
}
</style>
