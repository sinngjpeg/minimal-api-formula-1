# 🏎️ F1 Minimal API

Uma API minimalista construída com **Node.js**, **TypeScript** e **Fastify**, que fornece informações sobre **times** e **pilotos** da **Fórmula 1**.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/f1-minimal-api.git

# Acesse a pasta do projeto
cd f1-minimal-api

# Instale as dependências
npm install

# Iniciar o servidor em modo de desenvolvimento
npm run start:dev 
```
## 📚 Endpoints
### GET /teams
- Retorna a lista de todas as equipes da Fórmula 1.

```bash
[
  {
    "id": 1,
    "name": "Red Bull Racing",
    "base": "Milton Keynes, United Kingdom"
  },
  ...
]
```

### GET /drivers
- Retorna a lista de todos os pilotos da Fórmula 1.

Exemplo de resposta:

```bash
[
  {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  },
  ...
]
```
---
### 📄 Licença
Este projeto está licenciado sob a Licença MIT.
