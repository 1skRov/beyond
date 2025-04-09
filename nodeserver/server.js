//node server.js

import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import {OpenAI} from 'openai';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// GPT
const openai = new OpenAI({
    apiKey: '', // ЗАМЕНИ на свой ключ
});
// Загрузка вопросов
const questionsRaw = await fs.readFile('./question2.json', 'utf-8');
const questions = JSON.parse(questionsRaw);

app.post('/explain', async (req, res) => {
    try {
        const wrongIds = req.body.wrongAnswers;

        const wrongQuestions = questions.filter(q => wrongIds.includes(q.id));

        const messages = [
            {
                role: 'system',
                content: 'Ты помогаешь объяснять ошибки на математическом тесте школьникам. Отвечай понятно и по существу.',
            },
            {
                role: 'user',
                content: `Вот список вопросов, на которые пользователь ответил неправильно. Объясни, почему их неправильные ответы неверны, и укажи, какой ответ правильный и почему. Ответ дай в виде массива объектов {id, explanation}:

${JSON.stringify(wrongQuestions, null, 2)}
        `,
            },
        ];

        const gptResponse = await openai.chat.completions.create({
            model: 'gpt-4',
            messages,
            temperature: 0.7,
        });

        const reply = gptResponse.choices[0].message.content;
        res.json({result: reply});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Ошибка при объяснении'});
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
