<!-- файл: src/pages/Roadmap/RoadMapItem.vue -->
<script>
import {getUserById} from "@/services/userService";

export default {
  name: "RoadMapMainPage",
  props: {
    road: {
      type: Object,
      required: true
    }
  },
  emits: ["click", "delete"],

  data() {
    return {
      authorName: null,
      createDate: "",     // сюда можно записывать отформатированную дату
      rating: "",
      countUsers: ""
    };
  },

  mounted() {
    this.loadAuthor();
  },

  methods: {
    onClick() {
      // Эмитим переход к деталям
      this.$emit("click", this.road.id);
    },
    onDelete() {
      // Эмитим событие удаления наверх, передавая id этого роадмапа
      this.$emit("delete", this.road.id);
    },
    async loadAuthor() {
      try {
        // Предполагаем, что getUserById возвращает объект вида { id, username, ... }
        const user = await getUserById(this.road.user_id);
        this.authorName = user.username;
      } catch (err) {
        console.error("Ошибка при загрузке автора:", err);
        this.authorName = "—";
      }
      // Форматируем дату создания
      this.createDate = this.formatDate(this.road.created_at);
      // Заполняем остальные поля, если нужно
      this.rating = this.road.votes_sum;           // или: `${this.road.votes_sum} (${this.road.votes_count})`
      this.countUsers = this.road.participants_count;
    },
    formatDate(isoStr) {
      if (!isoStr) return "—";
      const dt = new Date(isoStr);
      return dt.toLocaleDateString("ru-RU");
    }
  }
};
</script>

<template>
  <!-- Здесь любая разметка, в данном случае таблица строка -->
  <tr>
    <!-- Название роадмапа -->
    <td class="p-2 border border-slate-200">{{ road.title }}</td>

    <!-- Автор (выполнено асинхронно в mounted) -->
    <td class="p-2 border border-slate-200">
      {{ authorName || "Загрузка..." }}
    </td>

    <!-- Дата создания (уже отформатирована в mounted) -->
    <td class="p-2 border border-slate-200">{{ createDate }}</td>

    <!-- Рейтинг -->
    <td class="p-2 border border-slate-200">{{ rating }}</td>

    <!-- Количество участников -->
    <td class="p-2 border border-slate-200">{{ countUsers }}</td>

    <!-- Действия: Удалить и Перейти -->
    <td class="p-2 border border-slate-200">
      <div class="flex gap-3">
        <!-- Кнопка «Удалить» -->
        <button
            class="icon-btn bg-red-100 text-red-600 rounded-md px-2 py-1"
            @click.stop="onDelete"
        >
          <i class="fi fi-rr-trash text-xs"></i>
        </button>

        <!-- Кнопка «Перейти» -->
        <button
            class="icon-btn bg-blue-100 text-blue-900 px-2 py-1 rounded-md"
            @click.stop="onClick"
        >
          Перейти
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped lang="scss">
/* чисто стили – можно оставить без изменений */
</style>
