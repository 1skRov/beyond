export const dataStore = {
    subjects: [],
    tests: [],
    questions: [],
    async load() {
        if (this.subjects.length && this.tests.length && this.questions.length) return;

        try {
            const subjectsResponse = await fetch('/src/db/subjects.json');
            if (!subjectsResponse.ok) throw new Error("Ошибка загрузки предметов");
            this.subjects = await subjectsResponse.json();

            const testsResponse = await fetch('/src/db/tests.json');
            if (!testsResponse.ok) throw new Error("Ошибка загрузки тестов");
            this.tests = await testsResponse.json();

            const questionsResponse = await fetch('/src/db/questions.json');
            if (!questionsResponse.ok) throw new Error("Ошибка загрузки вопросов");
            this.questions = await questionsResponse.json();
        } catch (error) {
            console.error(error.message);
        }
    }
};
