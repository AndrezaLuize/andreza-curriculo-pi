const sequelize = require('../config/database'); 

sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch(err => console.error('Erro ao conectar com o banco:', err));

module.exports = sequelize;
