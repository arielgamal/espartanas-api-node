# Espartanas API

API do Espartanas, um aplicativo de treinos para mulheres, com planos premium e pagamentos. É um produto próprio, ainda em desenvolvimento, e este repositório é a sua API em Node.js. Todo o código foi escrito à mão, sem auxílio de IA.

O aplicativo (React Native) fica em outro repositório; esta API é consumida por ele.

## O que a API faz

- **Contas**: cadastro com validação de CPF e de senha forte, confirmação de conta por código enviado por e-mail, login com JWT, troca de senha, atualização de perfil e upload de avatar.
- **Treinos**: divisões de treino, três níveis (iniciante, intermediário e avançado) e treinos organizados por mês, com vídeos de exercícios.
- **Premium**: planos mensal, trimestral, semestral e anual, convertidos em dias de premium; contagem regressiva automática e período de teste gratuito.
- **Pagamentos**: cartão de crédito, Pix (com QR code) e boleto, integrados ao Asaas, com confirmação automática por webhook.
- **Suporte**: formulário "fale conosco" enviado por e-mail.

## Fluxo de pagamento

1. Ao validar a conta pelo código do e-mail, o usuário é cadastrado como cliente no Asaas e o `asaas_id` fica salvo.
2. O usuário escolhe um plano e a forma de pagamento. A API cria a cobrança no Asaas e registra o pedido na tabela `payments`, com os dias de premium correspondentes.
3. No Pix, a API devolve o QR code; no boleto, os dados da cobrança; no cartão, a resposta já pode vir confirmada.
4. O Asaas chama o webhook `/payments-webhook` quando o pagamento é confirmado (`PAYMENT_CONFIRMED`) ou recebido (`PAYMENT_RECEIVED`). A API marca o pedido como confirmado e credita os dias de premium na conta.
5. Uma rotina agendada desconta um dia de premium por vez e devolve a conta ao plano gratuito quando os dias acabam.

## Tecnologias

- Node.js e Express
- Sequelize com MySQL (migrations e seeds incluídas)
- JWT e bcrypt
- Yup para validação de dados
- Multer para upload de imagens
- Nodemailer para e-mails
- node-schedule para rotinas agendadas
- Asaas (sandbox) para pagamentos

## Rotas principais

| Método | Rota | Descrição | Acesso |
|---|---|---|---|
| POST | `/user` | Cria usuário | público |
| POST | `/auth` | Login, devolve JWT | público |
| PUT | `/validate_account` | Valida a conta com o código do e-mail | público |
| GET | `/plans` | Lista os planos | público |
| POST | `/payments-webhook` | Recebe eventos do Asaas | Asaas |
| GET | `/me` | Dados do usuário logado | login |
| PUT | `/update_user` | Atualiza perfil | login |
| POST | `/update_avatar` | Envia avatar | login |
| GET | `/premium_status` | Dias de premium restantes | login |
| POST | `/payment_credit` | Pagamento com cartão | login |
| POST | `/payment_pix` | Pagamento com Pix | login |
| POST | `/payment_boleto` | Pagamento com boleto | login |
| GET | `/iniciante/:mes/:divisao` | Treinos do nível iniciante | premium |
| GET | `/intermediario/:mes/:divisao` | Treinos do nível intermediário | premium |
| GET | `/avancado/:mes/:divisao` | Treinos do nível avançado | premium |
| GET | `/video/iniciante/:mes` | Vídeos do nível iniciante | premium |

As rotas estão em `src/routes.js`, separadas em três blocos: públicas, que exigem login e que exigem conta premium.

## Estrutura

```
src/
├── apps/
│   ├── controllers/   # Auth, usuários, treinos, vídeos, premium, pagamentos, suporte
│   ├── middlewares/   # JWT, premium, validação de schema, CPF, upload
│   ├── models/        # Users, Workouts, Videos, Plans, Payments, divisões e níveis
│   └── services/      # Crédito de dias premium
├── database/migrations/
├── schema/            # Schemas de validação (Yup)
├── utils/             # Cliente do Asaas, e-mail, token
├── routes.js
└── server.js
```

## Como rodar

1. Instale as dependências: `npm install`
2. Copie `.env.example` para `.env` e preencha os valores (banco MySQL, segredo do JWT, token do Asaas sandbox e credenciais de e-mail)
3. Rode as migrations e seeds: `npx sequelize-cli db:migrate`
4. Suba a API: `npm run dev`

## Em desenvolvimento

- Recuperação de senha (a rota existe, o fluxo ainda não está fechado)
- Autenticação do webhook do Asaas
- Rotas administrativas de cadastro de treinos e vídeos
- Ajuste do agendamento da contagem de premium para rodar uma vez por dia
