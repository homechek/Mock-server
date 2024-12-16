const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

// Папка, где хранятся JSON-файлы
const dataDir = path.join(__dirname, 'data');

// Обработка всех запросов по пути /api/:filename
app.get('/api/:filename', (req, res) => {
    const filename = req.params.filename; // Получаем имя файла из URL
    const filePath = path.join(dataDir, `${filename}.json`); // Создаем полный путь к файлу
    
    fs.readFile(filePath, 'utf8', (err, data) => { // Читаем файл
        if (err) {
            return res.status(404).json({ error: 'File not found' }); // Если файл не найден
        }
        res.json(JSON.parse(data)); // Отправляем содержимое файла в ответе
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
