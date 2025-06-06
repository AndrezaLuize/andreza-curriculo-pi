const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Person = sequelize.define('Person', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profissao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  formacao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  
});

module.exports = Person;
