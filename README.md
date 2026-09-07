# CodeFactory DevOps

Este projeto foi desenvolvido para a disciplina de **DevOps e Integração Contínua** do Centro Universitário Internacional Uninter.

A ideia do trabalho é colocar em prática os principais conceitos estudados na disciplina, utilizando ferramentas como Git, GitHub, Docker e Integração Contínua.

## Sobre o projeto

A CodeFactory Solutions é uma empresa fictícia que está passando por alguns problemas no seu processo de desenvolvimento.

Entre os principais problemas estão a falta de organização dos projetos, dificuldade para trabalhar em equipe, ausência de um padrão de versionamento, pouca documentação e erros que acabam aparecendo durante as atualizações dos sistemas.

Por isso, neste projeto foram aplicadas algumas práticas de DevOps com o objetivo de melhorar a organização, facilitar o trabalho entre os desenvolvedores e automatizar algumas etapas do desenvolvimento.

## Objetivo

O principal objetivo deste projeto é demonstrar, na prática, como a cultura DevOps pode ajudar a melhorar o desenvolvimento de software.

Durante o projeto serão aplicados os seguintes conceitos:

* Versionamento de código com Git;
* Utilização do GitHub como repositório remoto;
* Criação e utilização de branches;
* Utilização de Pull Requests;
* Realização de merges;
* Resolução de conflitos;
* Organização do projeto no GitHub;
* Utilização do Docker;
* Criação de uma pipeline de Integração Contínua;
* Utilização de testes automatizados.

## Tecnologias utilizadas

As principais tecnologias e ferramentas utilizadas neste projeto são:

* Git
* GitHub
* Docker
* GitHub Actions
* Node.js
* JavaScript
* Jest

Também serão utilizados alguns recursos disponíveis no GitHub, como:

* Issues;
* Labels;
* Milestones;
* Projects;
* Wiki;
* Insights.

## Estrutura do projeto

A estrutura do projeto foi organizada da seguinte forma:

```text
codefactory-devops/
│
├── src/
│   └── app.js
│
├── tests/
│   └── app.test.js
│
├── docs/
│   └── arquitetura.md
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
└── LICENSE
```

## Versionamento

O Git será utilizado para controlar as alterações realizadas no projeto.

O GitHub será utilizado como repositório remoto, permitindo armazenar o código, acompanhar o histórico de alterações e organizar melhor o desenvolvimento.

As principais branches utilizadas serão:

* `main`: contém a versão principal do projeto;
* `develop`: utilizada durante o desenvolvimento;
* `feature/*`: utilizada para criar novas funcionalidades.

Exemplo de fluxo:

```text
feature/task-api
      ↓
   develop
      ↓
     main
```

As alterações serão enviadas por meio de Pull Requests antes de serem integradas às branches principais.

## Padrão dos commits

Para manter o histórico do projeto mais organizado, os commits serão feitos com mensagens simples e claras.

Alguns exemplos:

```text
feat: adiciona cadastro de tarefas
fix: corrige erro na validação
docs: atualiza o README
test: adiciona testes da aplicação
build: adiciona configuração do Docker
ci: adiciona pipeline de integração contínua
```

## Recursos do GitHub

Durante o desenvolvimento também serão utilizados alguns recursos do GitHub para melhorar a organização do projeto.

### Issues

As Issues serão utilizadas para registrar as tarefas e funcionalidades que precisam ser desenvolvidas.

### Labels

As Labels serão utilizadas para identificar o tipo de cada tarefa, como:

* bug
* enhancement
* documentation
* docker
* ci
* testing

### Milestones

Os Milestones serão utilizados para agrupar as tarefas relacionadas a uma mesma etapa ou versão do projeto.

### Projects

O Projects será utilizado para organizar as tarefas visualmente, utilizando etapas como:

```text
Backlog → Todo → In Progress → Review → Done
```

### Wiki

A Wiki será utilizada para adicionar informações complementares sobre o projeto e sobre as ferramentas utilizadas.

### Insights

A área de Insights será utilizada para acompanhar o histórico e as atividades realizadas no repositório.

## Docker

O Docker será utilizado para criar um ambiente padronizado para a aplicação.

Com isso, o projeto poderá ser executado de forma semelhante em diferentes computadores, diminuindo problemas relacionados à configuração do ambiente.

## Integração Contínua

A Integração Contínua será feita utilizando o GitHub Actions.

A pipeline será configurada para executar algumas etapas automaticamente sempre que houver alterações no projeto, como:

* baixar o código;
* configurar o ambiente;
* instalar as dependências;
* executar os testes.

Dessa forma, é possível identificar erros mais rapidamente antes de integrar novas alterações ao projeto.

## Conclusão

Este projeto tem como objetivo demonstrar de forma prática a utilização de algumas ferramentas e conceitos relacionados à cultura DevOps.

A aplicação dessas práticas ajuda a melhorar a organização do projeto, o controle das alterações, a colaboração entre desenvolvedores e a automação de tarefas durante o desenvolvimento.
