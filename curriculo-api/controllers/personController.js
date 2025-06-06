const Person = require('../models/person');

exports.getAll = async (req, res) => {
  try {
    const people = await Person.findAll();
    if (people.length === 0) {
      return res.status(200).json({ message: 'Nenhuma pessoa cadastrada ainda.' });
    }
    res.status(200).json(people);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    res.status(500).json({ error: 'Erro ao buscar pessoas.' });
  }
};

exports.createPerson = async (req, res) => {
  try {
    console.log('POST /api/pessoas - corpo da requisição:', req.body);

    const { nome, email, telefone, profissao, formacao } = req.body;

    if (!nome || !email || !telefone || !profissao || !formacao) {
      console.log('Campos obrigatórios faltando:', req.body);
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const newPerson = await Person.create({ nome, email, telefone, profissao, formacao });
    console.log('Pessoa criada com sucesso:', newPerson.toJSON());
    res.status(201).json(newPerson);
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    res.status(500).json({ error: 'Erro ao criar pessoa.' });
  }
};
