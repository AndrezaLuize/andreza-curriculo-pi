require('dotenv').config();
console.log("HOST do banco:", process.env.DB_HOST);

const express = require('express');
const app = express();
const routes = require('./routes/personRoutes');
require('./models');

app.use(express.json());

// Rota raiz para teste simples
app.get('/', (req, res) => {
  res.send('API do Currículo está no ar!');
});

// Rota principal da API
app.use('/api/pessoas', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
