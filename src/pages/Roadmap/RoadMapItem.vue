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
      createDate: "",
      rating: "",
      countUsers: ""
    };
  },

  mounted() {
    this.loadAuthor();
  },

  methods: {
    onClick() {
      this.$emit("click", this.road.id);
    },
    onDelete() {
      this.$emit("delete", this.road.id);
    },
    async loadAuthor() {
      try {
        const user = await getUserById(this.road.user_id);
        this.authorName = user.username;
      } catch (err) {
        console.error("Ошибка при загрузке автора:", err);
        this.authorName = "—";
      }
      this.createDate = this.formatDate(this.road.created_at);
      this.rating = this.road.votes_sum;
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
  <tr>
    <td class="p-2 border border-slate-200">{{ road.title }}</td>

    <td class="p-2 border border-slate-200">
      {{ authorName || "Загрузка..." }}
    </td>

    <td class="p-2 border border-slate-200">{{ createDate }}</td>

    <td class="p-2 border border-slate-200">{{ rating }}</td>

    <td class="p-2 border border-slate-200">{{ countUsers }}</td>

    <td class="p-2 border border-slate-200">
      <div class="flex gap-3">
        <button
            class="icon-btn bg-red-100 text-red-600 rounded-md px-2 py-1"
            @click.stop="onDelete"
        >
          <i class="fi fi-rr-trash text-xs"></i>
        </button>

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
</style>
