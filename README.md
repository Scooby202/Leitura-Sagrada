# PLATAFORMA DE ANOTAÇÕES BÍBLICAS ( LEITURA )

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=v19.2.4&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=backend&message=json-server&color=orange&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

> Status do Site Web: :warning: (em desenvolvimento)

### Índice 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Páginas](#páginas)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  A presente aplicação consiste em um sistema web estruturado para o registro, gerenciamento e catalogação de anotações e reflexões pessoais associadas a passagens bíblicas. O projeto foi concebido com o objetivo de aplicar conceitos avançados de desenvolvimento front-end na biblioteca React, utilizando rotinas modernas de manipulação de formulários, controle de estados assíncronos e integração com serviços locais para persistência de dados.
</p>

## Páginas

:heavy_check_mark: **Módulos de Autenticação e Segurança**: 
Compreende as interfaces de Login, Cadastro de Usuário (Registrar) e Fluxo de Redefinição de Credenciais (Esqueceu a Senha e Nova Senha). Estas páginas integram validações estritas de strings e conferência de igualdade de caracteres para integridade dos dados antes do envio ao banco.

:heavy_check_mark: **Página Principal (Home / Espaço de Leitura)**:
Interface central dedicada à exibição dos textos selecionados e ao gerenciamento direto dos blocos de anotações vinculados a cada passagem.

:heavy_check_mark: **Página de Gerenciamento de Conta**:
Área destinada à visualização do perfil do usuário autenticado e persistência de dados de sessão através de armazenamento local (*localStorage*).

## Pré-requisitos

:warning: **Node.js** (Ambiente de execução JavaScript - Versão LTS recomendada)  
:warning: **NPM** (Gerenciador de pacotes nativo do Node.js)

## Como rodar a aplicação :arrow_forward:

Para configurar o ambiente localmente e executar tanto a interface do usuário quanto o servidor de dados estruturados, siga os passos descritos no terminal de comando abaixo:

1. Clonar o repositório correspondente ao projeto:
```bash
git clone [https://github.com/Scooby202/Processo-Trainee.git](https://github.com/Scooby202/Processo-Trainee.git)

Navegar até o diretório raiz do projeto descompactado:
cd leitura
Instalar o conjunto completo de dependências declaradas no manifesto do projeto:
npm install
Inicializar o servidor de banco de dados fictício (JSON Server) para disponibilizar os endpoints da API:
npm run server
Inicializar o ambiente de desenvolvimento local (Vite/React):
npm run dev
Bibliotecas e Dependências do EcossistemaAs seguintes bibliotecas de terceiros foram instaladas para a correta orquestração dos recursos da aplicação:React Router DOM (Roteamento de Aplicação de Página Única):
