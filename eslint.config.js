export default [
    {
        ignores: ["**/node_modules/**"], // Игнорируемые файлы/директории
    },
    {
        files: ["**/*.js"], // Применять правила ко всем JS-файлам
        languageOptions: {
            ecmaVersion: 2022, // Версия ECMAScript
            sourceType: "module", // Тип модуля
        },
        rules: {
            "no-unused-vars": "error", // Пример правила
            "no-console": "warn", // Пример правила
        },
    },
];