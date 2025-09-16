# TOPFREIOS Websites

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/SEU_USUARIO/TOPFREIOS-websites)

> Repositório oficial do(s) site(s) da **TOPFREIOS**. Projeto focado em performance, acessibilidade, SEO e facilidade de manutenção.

---

## 📌 Sumário

* [Visão Geral](#-visão-geral)
* [Demonstração](#-demonstração)
* [Arquitetura e Pastas](#-arquitetura-e-pastas)
* [Tecnologias](#-tecnologias)
* [Pré-requisitos](#-pré-requisitos)
* [Como rodar localmente](#-como-rodar-localmente)
* [Scripts NPM](#-scripts-npm)
* [Variáveis de Ambiente](#-variáveis-de-ambiente)
* [Qualidade de Código](#-qualidade-de-código)
* [Testes](#-testes)
* [CI/CD](#-cicd)
* [Deploy](#-deploy)
* [Acessibilidade & SEO](#-acessibilidade--seo)
* [Roadmap](#-roadmap)
* [Contribuição](#-contribuição)
* [Changelog](#-changelog)
* [Licença](#-licença)
* [Contato](#-contato)

---

## 🎯 Visão Geral

Site institucional (e/ou landing pages) da **TOPFREIOS**, com ênfase em:

* **Velocidade** (Core Web Vitals)
* **Acessibilidade** (WCAG 2.1 AA)
* **SEO** (metadados, sitemap, schema.org)
* **Responsividade** (mobile-first)
* **Escalabilidade** (arquitetura modular)

> Este README serve como documentação profissional para devs e stakeholders.

---

## 🖥️ Demonstração

* **Produção**: *adicione o link aqui*
* **Homologação**: *adicione o link aqui*
* **Protótipo/Figma**: *adicione o link aqui*

*Screenshots (exemplos):*

| Home (Desktop)                                  | Home (Mobile)                                 |
| ----------------------------------------------- | --------------------------------------------- |
| ![Desktop](./docs/screenshots/home-desktop.png) | ![Mobile](./docs/screenshots/home-mobile.png) |

---

## 🧱 Arquitetura e Pastas

```
TOPFREIOS-websites/
├─ public/                # Assets públicos (imagens, ícones, favicon, robots.txt)
├─ src/
│  ├─ assets/             # Fonts, imagens otimizadas
│  ├─ components/         # Componentes reutilizáveis (Header, Footer, etc.)
│  ├─ pages/              # Páginas (Home, Serviços, Contato, …)
│  ├─ layouts/            # Layouts padrão
│  ├─ styles/             # CSS/Tailwind/SCSS
│  ├─ lib/                # Utils, helpers, hooks
│  ├─ data/               # Conteúdos estáticos (JSON/YAML)
│  └─ main.tsx/js         # Ponto de entrada
├─ docs/                  # Documentação, screenshots, diagramas
├─ tests/                 # Testes unitários/integração
├─ .editorconfig
├─ .eslintrc.cjs
├─ .prettierrc
├─ package.json
└─ README.md
```

> **Observação**: Estrutura pensada para aplicações SPA/SSG (Vite/Next). Para site 100% estático (HTML/CSS/JS puros), ajuste conforme necessário.

---

## 🧰 Tecnologias

* **Framework/Build**: Vite ou Next.js (SSG/ISR)
* **Linguagem**: TypeScript ou JavaScript
* **Estilos**: Tailwind CSS (ou SCSS)
* **Ícones**: Lucide/Phosphor
* **Lint/Format**: ESLint + Prettier + EditorConfig
* **Testes**: Vitest/Jest + Testing Library
* **Acessibilidade**: axe-core/lighthouse (auditorias)

> Se o projeto for somente HTML/CSS/JS, mantenha as seções relevantes e remova as não utilizadas.

---

## ✅ Pré-requisitos

* **Node.js** ≥ 18
* **npm** ≥ 9 (ou **pnpm**/**yarn**)

---

## ▶️ Como rodar localmente

### Opção A — Projeto com Vite (recomendado)

```bash
# 1) Instalar dependências
npm install

# 2) Rodar em desenvolvimento
npm run dev

# 3) Build de produção
npm run build

# 4) Pré-visualização do build
npm run preview
```

### Opção B — Site estático puro

Abra o arquivo `index.html` com uma extensão como **Live Server** no VS Code ou sirva com:

```bash
npx serve .
```

---

## 📜 Scripts NPM

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "test":
```
