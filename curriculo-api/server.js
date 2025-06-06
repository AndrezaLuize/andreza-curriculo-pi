require('dotenv').config();
console.log("HOST do banco:", process.env.DB_HOST);

const express = require('express');
const app = express();
const routes = require('./routes/personRoutes');
const sequelize = require('./config/database'); // importe sua instância sequelize
require('./models'); // certifica que os models são carregados

app.use(express.json());

// Rota raiz para teste simples
app.get('/', (req, res) => {
  res.send('API do Currículo está no ar!');
});

// Rota principal da API
app.use('/api/pessoas', routes);

const PORT = process.env.PORT || 3000;

// Sincroniza o banco e só depois inicia o servidor
sequelize.sync({ alter: true })  // alter:true atualiza a tabela para refletir models
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });
