# Espartanas API

API do Espartanas, um app de treinos. Cuida de cadastro e login de usuários, validação de conta por e-mail, treinos, vídeos, planos premium e pagamentos pelo Asaas.

## Tecnologias

- Node.js e Express
- Sequelize com MySQL
- JWT e bcrypt
- Nodemailer
- Asaas (sandbox)

## Como rodar

1. Instale as dependências: `npm install`
2. Copie `.env.example` para `.env` e preencha os valores
3. Rode as migrations: `npx sequelize-cli db:migrate`
4. Suba a API: `npm run dev`
