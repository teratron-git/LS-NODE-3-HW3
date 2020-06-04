const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views', 'pages'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT || 3000, function () {
  console.log(`Сервер запущен на порту ${server.address().port}`);
});
