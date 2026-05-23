# Leitura-Sagrada — Plataforma de Anotações sobre a Biblía

O **Leitura-Sagrada** é projeto web para criação, organização e consulta de anotações sobre passagens da Bíblia. A aplicação fornece uma interface para registrar observações por livro, capítulo e versículo, gerenciar essas anotações.

---

## 📑 Estrutura de Páginas da Aplicação

A arquitetura de navegação foi projetada utilizando as capacidades de roteamento dinâmico do **React Router DOM**, dividindo-se nas seguintes visões principais:

### 1. Página Inicial
* **Descrição:** Pagina que usuario tem a acesso a todas os versículos da biblía.

### 2. Anotações
* **Descrição:** Exibição completa do acervo de anotações do usuário.

### 3. Pagina de conta
* **Descrição:** Pagina para fazer login, criar conta, esqueceu a senha e recuperação de senha.

---

## 🛠️ Escolhas Técnicas e Justificativas

O ecossistema tecnológico do projeto foi selecionado para garantir máxima performance de desenvolvimento (DX), modularidade e aderência às práticas modernas do desenvolvimento frontend:

### 1. React 19 & Vite
* **Vite:** o Vite foi escolhido como ferramenta de build devido ao seu servidor de desenvolvimento ultra-rápido baseado em *Esbuild* (com suporte nativo a Hot Module Replacement - HMR). Reduz o tempo de inicialização e empacotamento do código a quase zero.
* **React 19:** Utilização da versão mais recente da biblioteca, aproveitando os novos mecanismos de renderização e melhorias internas de concorrência, garantindo componentes altamente reativos e facilidade na manipulação de estados globais e locais.

### 2. React Router DOM (v7)
* **Justificativa:** Responsável pelo roteamento declarativo da aplicação Single Page Application (SPA). A versão 7 unifica os conceitos de loaders e actions, permitindo que os dados de cada página sejam buscados de forma paralela à renderização dos componentes, eliminando gargalos de carregamento (*spinners* infinitos) e melhorando drasticamente a experiência do usuário.

### 3. JSON Server
* **Justificativa:** Integrado no script de desenvolvimento (`npm run server`), o `json-server` simula uma API RESTful completa a partir de um arquivo local (`data/db.json`). 
* **Vantagem:** Permite o desenvolvimento assíncrono do frontend com operações completas de CRUD (`GET`, `POST`, `PUT`, `DELETE`), simulando cenários reais de latência de rede e requisições HTTP sem a necessidade imediata de implantar um backend robusto nas fases iniciais do projeto.

### 4. ESLint (Configuração Flat)
* **Justificativa:** Configurado através do padrão moderno `eslint.config.js`, garante a padronização do código entre a equipe, aplicando regras estritas para React Hooks e prevenindo bugs comuns em tempo de desenvolvimento.

---
## Como rodar a aplicação :arrow_forward:

Para configurar o ambiente localmente e executar tanto a interface do usuário quanto o servidor de dados estruturados, siga os passos descritos no terminal de comando abaixo:

1. Clonar o repositório correspondente ao projeto:

git clone [https://github.com/Scooby202/Processo-Trainee.git](https://github.com/Scooby202/Processo-Trainee.git)
```bash
Navegar até o diretório raiz do projeto descompactado:
cd leitura
Instalar o conjunto completo de dependências declaradas no manifesto do projeto:
npm install
Inicializar o servidor de banco de dados fictício (JSON Server) para disponibilizar os endpoints da API:
npm run server
Inicializar o ambiente de desenvolvimento local (Vite/React):
npm run dev
```

2.Bibliotecas e Dependências do Ecossistema
```bash
As seguintes bibliotecas de terceiros foram instaladas para a correta orquestração dos recursos da aplicação:

React Router DOM (Roteamento de Aplicação de Página Única): npm install react-router-dom

JSON Server (Simulador de API RESTful local): npm install json-server
```
