// Importe o Express
const express = require('express');

// Crie um servidor Express
const app = express();

// Crie uma rota para obter uma imagem aleatória
app.get('/api/imagem', (req, res) => {
  // Crie uma lista de imagens
  const imagens = fs.readdirSync(__dirname + '/assets/img');

  // Selecione uma imagem aleatória
  const imagem = imagens[Math.floor(Math.random() * imagens.length)];

  // Retorne a imagem
  res.json({
    imagem: `/assets/img/${imagem}`,
  });
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
