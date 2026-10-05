# 🛍️ Ignite Shop

E-commerce desenvolvido com **Next.js e TypeScript**, integrado à **Stripe** para gerenciamento de produtos e criação de sessões de checkout.

A aplicação apresenta um fluxo completo de compra, permitindo visualizar produtos, acessar seus detalhes, adicionar itens ao carrinho e iniciar o processo de checkout através da Stripe.

O projeto foi desenvolvido durante a trilha **Ignite da Rocketseat**, com foco na prática de conceitos do ecossistema Next.js e na integração com serviços externos.

## 🚀 Features

* Catálogo de produtos
* Página individual de produto
* Navegação entre produtos
* Carrinho de compras
* Visualização rápida do carrinho
* Adição e remoção de produtos
* Cálculo do valor total do carrinho
* Integração com Stripe
* Criação de sessão de checkout
* Redirecionamento para checkout da Stripe
* Integração com API Routes do Next.js
* Geração estática de páginas
* Atualização incremental dos dados com ISR
* Slider de produtos
* Interface estilizada e componentizada

## 🛠️ Technologies

### Front-end

* **Next.js**
* **React**
* **TypeScript**
* **Next/Image**
* **Keen Slider**

### State Management

* **React Context API**
* **React Hooks**

### Payments & API

* **Stripe**
* **Next.js API Routes**
* **Axios**

### UI & Styling

* **Stitches**
* **Radix UI**
* **Radix Colors**
* **Material UI**
* **Phosphor Icons**

## 🧠 Concepts Applied

Este projeto foi desenvolvido para praticar conceitos importantes utilizados na construção de aplicações web modernas:

* Server-side APIs com Next.js
* Static Site Generation (SSG)
* Dynamic Routes
* Incremental Static Regeneration (ISR)
* Integração com APIs externas
* Integração com serviços de pagamento
* Context API
* Gerenciamento de estado global
* Custom Hooks
* Componentização
* Reutilização de componentes
* TypeScript
* Formatação de valores monetários
* Carregamento otimizado de imagens
* Responsividade e estilização
* Separação de responsabilidades

## 💳 Stripe Integration

A aplicação utiliza a **Stripe** para disponibilizar os produtos e iniciar o processo de checkout.

O fluxo funciona da seguinte forma:

```text
Produtos
   ↓
Stripe API
   ↓
Catálogo de produtos
   ↓
Página de produto
   ↓
Carrinho
   ↓
API Route /api/checkout
   ↓
Stripe Checkout
```

A comunicação com a Stripe é realizada no lado do servidor através das API Routes do Next.js, evitando que informações sensíveis sejam expostas ao cliente.

> **Importante:** a chave secreta da Stripe deve ser armazenada em uma variável de ambiente e nunca diretamente no código-fonte.

Exemplo:

```env
STRIPE_SECRET_KEY=your_secret_key
```

## 📂 Project Structure

```text
src/
├── Components/       # Reusable UI components
├── assets/           # Images, icons and static assets
├── context/          # Global application state
├── lib/              # External service configuration
├── pages/            # Next.js pages and API routes
│   ├── api/          # Server-side API routes
│   ├── product/      # Dynamic product pages
│   ├── cart.tsx      # Shopping cart
│   └── index.tsx     # Product catalog
└── styles/           # Global styles and page styles
```

## ⚙️ Getting Started

### Prerequisites

Before starting, make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm
* A Stripe account for the payment integration

### Installation

Clone the repository:

```bash
git clone https://github.com/ReinaldoARamos/Ignite_Shop.git
```

Enter the project directory:

```bash
cd Ignite_Shop
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
STRIPE_SECRET_KEY=your_secret_key
```

Replace `your_secret_key` with your Stripe secret key.

### Running the project

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 📜 Available Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Starts the development server |
| `npm run build` | Creates the production build  |
| `npm run start` | Starts the production server  |
| `npm run lint`  | Runs the Next.js linter       |

## 🎯 Project Goals

The main goal of this project was to build a complete e-commerce experience while practicing concepts commonly used in modern web applications.

The project focuses particularly on:

* Building applications with Next.js
* Working with dynamic routes
* Consuming external APIs
* Integrating payment services
* Managing global application state
* Creating reusable React components
* Working with server-side functionality
* Understanding static generation and ISR
* Building a complete shopping flow

## 🔮 Possible Improvements

Future improvements could include:

* User authentication
* Persistent shopping cart
* Product quantity management
* Product search and filtering
* Product categories
* Order history
* Database integration
* Improved loading and error states
* Automated tests
* Improved accessibility
* Production deployment
* Webhooks for payment confirmation
* Order persistence after successful payment

## 👨‍💻 Author

**Reinaldo Aparecido Ramos**

Full-Stack Developer focused on building modern web applications with **React, Next.js, TypeScript and Node.js**.

* GitHub: https://github.com/ReinaldoARamos
* LinkedIn: https://www.linkedin.com/in/reinaldo-aparecido/
