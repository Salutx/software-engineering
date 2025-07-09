# 📦 Projeto Ágil com GitHub: Sistema de Gerenciamento de Tarefas<br/>
<br/>
Este projeto simula o desenvolvimento de um sistema de gerenciamento de tarefas baseado em metodologias ágeis, como parte da disciplina de Engenharia de Software. A estrutura segue as boas práticas de versionamento, controle de qualidade e organização de projetos usando GitHub.<br/>
<br/>
---<br/>
<br/>
## 📌 Objetivo<br/>
<br/>
> _[Insira aqui a descrição clara e direta do objetivo do sistema, como por exemplo:]_<br/>
Criar um sistema que permita o gerenciamento ágil de tarefas, com acompanhamento de status em tempo real, priorização e controle do desempenho da equipe.<br/>
<br/>
---<br/>
<br/>
## 🧠 Conceito do Projeto<br/>
<br/>
Este repositório utiliza um **monorepo** para hospedar tanto o frontend quanto o backend da aplicação. A proposta é integrar o desenvolvimento das duas camadas de forma sincronizada, facilitando a gestão do projeto e o controle de qualidade.<br/>
<br/>
---<br/>
<br/>
## 📁 Estrutura do Projeto<br/>
<br/>
├── frontend/ # Aplicação web (interface)<br/>
│ ├── public/ # Arquivos estáticos<br/>
│ ├── src/ # Código-fonte da interface<br/>
│ │ ├── components/ # Componentes reutilizáveis<br/>
│ │ ├── pages/ # Telas do sistema<br/>
│ │ ├── services/ # Comunicação com a API<br/>
│ │ └── App.js # Componente principal<br/>
│ └── package.json # Dependências e scripts<br/>
│<br/>
├── backend/ # API e regras de negócio<br/>
│ ├── src/<br/>
│ │ ├── controllers/ # Lógica das rotas<br/>
│ │ ├── models/ # Modelos de dados<br/>
│ │ ├── routes/ # Definição das rotas<br/>
│ │ └── index.js # Ponto de entrada da aplicação<br/>
│ └── package.json # Dependências e scripts<br/>
│<br/>
├── .github/ # Configuração de GitHub Actions<br/>
│ └── workflows/<br/>
│ └── tests.yml # Pipeline de testes automatizados<br/>
│<br/>
├── docs/ # Documentação e UML<br/>
│ ├── casos-de-uso.drawio<br/>
│ └── diagrama-de-classes.drawio<br/>
│<br/>

