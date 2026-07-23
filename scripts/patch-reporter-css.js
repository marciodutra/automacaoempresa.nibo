const fs = require('fs');
const path = require('path');

const origem = path.join(
  __dirname,
  '..',
  'patch',
  'style.css'
);

const destino = path.join(
  __dirname,
  '..',
  'node_modules',
  'multiple-cucumber-html-reporter',
  'templates',
  'style.css'
);


if (!fs.existsSync(origem)) {
  console.error('CSS customizado não encontrado:', origem);
  process.exit(1);
}


if (!fs.existsSync(destino)) {
  console.error('CSS do reporter não encontrado:', destino);
  process.exit(1);
}


fs.copyFileSync(origem, destino);

console.log('CSS do reporter atualizado com sucesso.');