const express = require('express');

const app = express();

app.get('/api/imagem', (req, res) => {
  const imagens = fs.readdirSync(__dirname + '/assets/img');

  const imagem = imagens[Math.floor(Math.random() * imagens.length)];

  res.json({
    imagem: `/assets/img/${imagem}`,
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
