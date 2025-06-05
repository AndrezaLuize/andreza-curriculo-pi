
require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/personRoutes');
require('./models');

app.use(express.json());
app.use('/api/pessoas', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
