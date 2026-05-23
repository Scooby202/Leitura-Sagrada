# Leitura — Plataforma de Anotações sobre a Biblía

O **Leitura** é uma aplicação web moderna voltada para a organização, acompanhamento e catalogação de hábitos literários. Desenvolvido com foco em uma experiência de usuário fluida e responsiva, o projeto serve como um hub central para leitores registrarem seus progressos, avaliarem obras e gerenciarem suas estantes digitais.

---

## 📑 Estrutura de Páginas da Aplicação

A arquitetura de navegação foi projetada utilizando as capacidades de roteamento dinâmico do **React Router DOM**, dividindo-se nas seguintes visões principais:

### 1. Dashboard / Página Inicial
* **Descrição:** A central do usuário ao acessar o sistema. Apresenta métricas rápidas de leitura (livros lidos, páginas consumidas no mês, metas anuais) e um panorama dos livros que estão sendo lidos atualmente.
* **Componentes Principais:** Cards de estatísticas, carrossel ou lista de leituras ativas e atalhos rápidos para adicionar novas atividades.

### 2. Catálogo / Estante de Livros (`/livros` ou `/estante`)
* **Descrição:** Exibição completa do acervo do usuário, categorizado por status de leitura: *Lidos*, *Lendo*, *Quero Ler* e *Abandonados*.
* **Funcionalidades:** Filtros avançados por gênero, autor ou nota, ordenação cronológica ou alfabética, e busca textual em tempo real.

### 3. Detalhes do Livro (`/livros/:id`)
* **Descrição:** Uma visão aprofundada de uma obra específica cadastrada no banco de dados.
* **Funcionalidades:** Exibição da sinopse, ficha técnica (autor, editora, ano, páginas), histórico de sessões de leitura, notas de estudo e resenhas críticas personalizadas.

### 4. Registro de Progresso (`/progresso` ou formulários dedicados)
* **Descrição:** Interface dinâmica onde o leitor atualiza em qual página parou, permitindo calcular automaticamente a porcentagem de conclusão do livro e estimar o tempo restante para o término da obra.

---

## 🛠️ Escolhas Técnicas e Justificativas

O ecossistema tecnológico do projeto foi selecionado para garantir máxima performance de desenvolvimento (DX), modularidade e aderência às práticas modernas do desenvolvimento frontend:

### 1. React 19 & Vite
* **Vite:** Substituindo o legado *Create React App*, o Vite foi escolhido como ferramenta de build devido ao seu servidor de desenvolvimento ultra-rápido baseado em *Esbuild* (com suporte nativo a Hot Module Replacement - HMR). Reduz o tempo de inicialização e empacotamento do código a quase zero.
* **React 19:** Utilização da versão mais recente da biblioteca, aproveitando os novos mecanismos de renderização e melhorias internas de concorrência, garantindo componentes altamente reativos e facilidade na manipulação de estados globais e locais.

### 2. React Router DOM (v7)
* **Justificativa:** Responsável pelo roteamento declarativo da aplicação Single Page Application (SPA). A versão 7 unifica os conceitos de loaders e actions, permitindo que os dados de cada página sejam buscados de forma paralela à renderização dos componentes, eliminando gargalos de carregamento (*spinners* infinitos) e melhorando drasticamente a experiência do usuário.

### 3. JSON Server (Mock API)
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
