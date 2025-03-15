import { defineStore } from 'pinia';
import axios from 'axios';

export const useTestStore = defineStore('test', {
    state: () => ({
        topic: '',
        questions: [],
        userAnswers: [],
        results: null
    }),
    actions: {
        async generateTest(topic) {
            try {
                this.topic = topic;
                // Важно: указываем URL бекенда http://localhost:3000.
                // Если у вас в .env PORT=3000, значит сервер крутится там.
                const response = await axios.post('http://localhost:3000/api/generate-quiz', { topic });
                this.questions = response.data.questions;
                // Заполняем массив ответов пользователя null-ами
                this.userAnswers = new Array(this.questions.length).fill(null);
            } catch (error) {
                console.error('Ошибка при генерации теста:', error);
            }
        },

        async checkAnswers() {
            try {
                // То же самое: шлём на http://localhost:3000/api/check-answers
                const response = await axios.post('http://localhost:3000/api/check-answers', {
                    topic: this.topic,
                    questions: this.questions,
                    userAnswers: this.userAnswers
                });
                this.results = response.data.results;
            } catch (error) {
                console.error('Ошибка при проверке ответов:', error);
            }
        },

        resetTest() {
            this.topic = '';
            this.questions = [];
            this.userAnswers = [];
            this.results = null;
        }
    }
});
