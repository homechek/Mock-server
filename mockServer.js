const express = require('express'); // Подключаем Express
const app = express(); // Создаем приложение
const port = 3001; // Выбираем порт, на котором будет работать сервер

app.use(express.json()); // Говорим, что будем работать с JSON (формат данных)

app.get('/', (req, res) => { // Когда кто-то зайдет на главную страницу
    res.json({ status: 'success', message: 'Mock Server is running' }); // Отвечаем сообщением
});

app.post('/test', (req, res) => { // Когда кто-то отправит данные на адрес /test
    const { first, second } = req.body; // Берем данные из запроса
    if (typeof first === 'number' && typeof second === 'number') { // Проверяем, что это числа
        return res.json({ status: 'success', summ: first + second }); // Возвращаем сумму
    } else {
        return res.status(400).json({ status: 'error', message: 'Invalid payload. Please provide two numbers.' }); // Ошибка, если данные некорректные
    }
});

app.listen(port, () => { // Запускаем сервер
    console.log(`Mock server is running at http://localhost:${port}`); // Говорим, что сервер запустился
});