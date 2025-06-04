import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { OpenAI } from 'openai';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '5mb' }));

const apiKey = process.env.VITE_OPENAI_API_KEY || "ВАШ_КЛЮЧ_API_OPENAI";

if (!apiKey || apiKey === "ВАШ_КЛЮЧ_API_OPENAI") {
    console.error("КРИТИЧЕСКАЯ ОШИБКА: Ключ API OpenAI не настроен. Установите переменную окружения VITE_OPENAI_API_KEY или укажите его в коде.");
}

const openai = new OpenAI({
    apiKey: apiKey,
});

app.post('/explain', async (req, res) => {
    try {
        const detailedWrongAnswers = req.body.detailedWrongAnswers;

        if (!detailedWrongAnswers || detailedWrongAnswers.length === 0) {
            return res.json({ result: JSON.stringify([]) });
        }

        const promptContent = `Ты — дружелюбный и опытный репетитор по математике.
Пользователь прошел тест и допустил ошибки или не ответил на некоторые вопросы. Для каждого вопроса из списка ниже:
1.  Внимательно прочти текст вопроса: "questionText".
2.  Посмотри, какой ответ выбрал пользователь: "userSelected". Это будет массив текстовых значений. Если массив пуст, значит пользователь не ответил на этот вопрос.
3.  Определи ПРАВИЛЬНЫЙ ответ (или ответы) из "correctOptions". Это также массив текстовых значений.
4.  Если пользователь ответил на вопрос:
    а.  Объясни, ПОЧЕМУ ВЫБОР ПОЛЬЗОВАТЕЛЯ ("userSelected") НЕВЕРЕН. Сравни его с "correctOptions".
    б.  Укажи, какой ответ является ПРАВИЛЬНЫМ ("correctOptions").
    в.  Дай ПОДРОБНОЕ И ПОНЯТНОЕ ОБЪЯСНЕНИЕ, почему правильный ответ является верным. Объясняй как школьнику простым языком. Если это формула, напомни её. Если это логическая задача, объясни ход мыслей.
5.  Если пользователь НЕ ОТВЕТИЛ на вопрос ("userSelected" пуст):
    а.  Укажи, что пользователь не дал ответа.
    б.  Укажи, какой ответ является ПРАВИЛЬНЫМ ("correctOptions").
    в.  Дай ПОДРОБНОЕ И ПОНЯТНОЕ ОБЪЯСНЕНИЕ правильного решения.
6.  Ответ для каждого вопроса должен быть четко структурирован. Используй Markdown для лучшей читаемости (например, для формул используй синтаксис LaTeX внутри знаков доллара $, списков, выделения жирным **текст** или курсивом *текст*).

Вот вопросы для анализа:
${JSON.stringify(detailedWrongAnswers, null, 2)}

Предоставь свой ответ СТРОГО в виде массива объектов JSON. Каждый объект в массиве должен иметь следующую структуру:
{
  "id": идентификатор_вопроса_из_входных_данных,
  "explanation": "полное_объяснение_для_этого_вопроса_в_формате_Markdown"
}
Убедись, что весь твой ответ является валидным JSON массивом. Не добавляй никакого текста до или после этого JSON массива.
`;

        const messages = [
            {
                role: 'system',
                content: 'Ты — полезный ассистент-репетитор по математике. Твоя задача — помочь школьникам понять их ошибки. Твои объяснения должны быть ясными, подробными, ободряющими и отформатированы с использованием Markdown. Весь ответ должен быть валидным JSON массивом объектов.',
            },
            {
                role: 'user',
                content: promptContent,
            },
        ];

        const gptResponse = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages,
            temperature: 0.6,
        });

        let reply = gptResponse.choices[0].message.content;
        const jsonMatch = reply.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            reply = jsonMatch[0];
        } else {
            console.warn("GPT не вернул чистый JSON массив. Ответ:", reply);
            try {
                JSON.parse(reply);
            } catch (parseError) {
                console.error("Ответ GPT не является валидным JSON:", parseError);
                reply = JSON.stringify([{ id: "error", explanation: "Ошибка: AI вернул невалидный формат данных. Пожалуйста, попробуйте еще раз." }]);
            }
        }
        res.json({ result: reply });
    } catch (err) {
        console.error("Ошибка в маршруте /explain:", err.message);
        console.error("Стек вызовов:", err.stack);
        if (err.response && err.response.data) {
            console.error("Ошибка API OpenAI:", err.response.data);
        }
        res.status(500).json({ error: 'Ошибка при генерации объяснения: ' + err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});