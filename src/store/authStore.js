import { defineStore } from 'pinia';
import { saveToken, removeToken, extractUserId, getToken } from '@/services/tokenService';
import { login as apiLogin, fetchUser } from '@/services/userService';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: getToken(),
    userId: extractUserId(),
    user: null,
    loading: false,
    error: ''
  }),

  actions: {
    async login(credentials) {
      this.loading = true;
      this.error = '';

      try {
        const { data } = await apiLogin(credentials);
        const { token } = data;
        saveToken(token);

        this.token = token;
        this.userId = extractUserId();
        await this.loadProfile();
      } catch (e) {
        this.error = e.response?.data?.detail || 'Auth error';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      removeToken();
      this.$reset();
    },

    async loadProfile() {
      if (!this.userId) return;
      const { data } = await fetchUser(this.userId);
      this.user = data;
    }
  }
});
