# 🟪 Projeto Ágil com GitHub: Sistema de Autenticação

Este projeto simula o desenvolvimento de um mini sistema de autenticação, com foco no aprendizado de conceitos básicos de backend. Ele utiliza Node.js, Express, MySQL e bcrypt para registrar e autenticar usuários de forma simples. A estrutura segue boas práticas de organização de código, segurança de senhas e controle de versões com GitHub.

---

# 🟪 Objetivo

> Criar um sistema simples de autenticação de usuários, permitindo o registro seguro de contas e login com validação de credenciais, utilizando Node.js, Express, MySQL e bcrypt para garantir segurança e organização no backend.

---


# 🟪 Conceito do Projeto

Este repositório utiliza um **monorepo** para hospedar tanto o frontend quanto o backend da aplicação. A proposta é integrar o desenvolvimento das duas camadas de forma sincronizada, facilitando a gestão do projeto e o controle de qualidade.

---

# 🟪 Tecnologias utilizadas e Justificativa
🔙 **BACKEND**
- **Node.js + Express**: Estrutura leve e eficiente para criação de APIs REST.
- **MySQL**: Banco de dados relacional usado para armazenar os usuários.
- **Sequelize**: ORM para facilitar a integração com o MySQL.
- **bcrypt**: Utilizado para criptografar as senhas com segurança.
- **dotenv**: Gerencia variáveis de ambiente.
- **morgan**: Middleware para log das requisições HTTP no terminal.

🔜 **FRONTEND**
- **Next.js**: Framework React com suporte a rotas, SSR e estrutura otimizada.
- **React.js**: Biblioteca base para construção da interface do usuário.
- **React Query**: Gerencia cache e requisições de forma eficiente e reativa.
- **Axios**: Cliente HTTP usado para comunicação com a API backend.



# 🟪 Como iniciar o projeto?

🔙 **BACKEND**
1. Ligue o **XAMPP** ou outra ferramenta para visualização do banco de dados;
2. Crie um banco de dados chamado `login_db`;
3. Adicione um .env com as instruções do .env_example;
4. Digite `npm install` para instalar todas as **dependências** do projeto;
5. Digite `npm run dev` para ligar o backend.

🔜 **FRONTEND**
1. Adicione um .env com as instruções do .env_example;
2. Digite `npm install` para instalar todas as **dependências** do projeto;
3. Digite `npm run dev` para ligar o frontend.


# 🟪 Metodologias Utilizadas
Para organizar e acompanhar o desenvolvimento deste sistema, foram utilizadas práticas das metodologias ágeis, com foco em `Kanban` e `Scrum`:

🟪 **KANBAN**

Foi utilizado um quadro Kanban na aba Projects do GitHub para visualizar o progresso das tarefas de forma clara e organizada. As tarefas foram separadas em colunas como **A Fazer, Em Progresso e Concluído**, tanto para o backend quanto para o frontend.

🟪 **SCRUM**

Seguindo os princípios do Scrum, o projeto foi dividido em **ciclos curtos** (sprints), com foco em entregas **incrementais**. Cada sprint teve objetivos definidos, priorizando funcionalidades essenciais como a autenticação no backend e a integração com o frontend.

Essa abordagem permitiu maior organização, transparência e eficiência durante o desenvolvimento.
