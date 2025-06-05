exports.getAll = (req, res) => {
  // Mesmo sem dados ainda, você pode deixar isso funcionando:
  res.status(200).json({ message: 'Nenhuma pessoa cadastrada ainda.' });
};

exports.createPerson = (req, res) => {
  // Mais tarde vamos salvar no banco, mas por enquanto só isso:
  res.status(201).json({ message: 'Pessoa criada (ainda sem salvar no banco).' });
};
