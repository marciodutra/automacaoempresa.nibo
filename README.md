Nibo Automation Framework — Tecnologias e Recursos
1. Linguagem principal
JavaScript / Node.js

Uso:

Desenvolvimento dos testes automatizados
Scripts auxiliares do framework
Geração e manipulação de relatórios
Automação de tarefas

Versão utilizada:

Node.js v20.x

Recursos utilizados:

CommonJS (require)
Manipulação de arquivos (fs)
Scripts executados via npm
2. Automação Web
Playwright

Principal ferramenta de automação.

Uso:

Controle do navegador
Execução dos testes UI
Captura de evidências
Traces
Vídeos
Screenshots

Recursos utilizados:

✅ Chromium

✅ Navegação automática

✅ Localizadores

✅ Interações com elementos

✅ Esperas automáticas

✅ Captura de estado da aplicação

Exemplos de evidências geradas:

evidencias/
│
├── screenshots/
│
├── videos/
│
├── traces/
│
└── logs/
3. BDD
Cucumber

Framework utilizado para escrever cenários em linguagem natural.

Estrutura:

features/
│
├── registration.feature
├── organization.feature
└── Company.feature

Exemplo:

Given I access the login page
When I enter a valid email
Then I should see the my companies page displayed

Benefícios:

Aproxima QA e negócio
Facilita entendimento dos testes
Mantém documentação viva
4. Test Runner
Cucumber + Playwright

Integração responsável por:

Executar features
Associar steps
Controlar hooks
Gerar resultados JSON

Fluxo:

.feature
   |
   v
Step Definitions
   |
   v
Playwright
   |
   v
Sistema Nibo
   |
   v
Resultado JSON
5. Gerenciamento de dependências
NPM

Responsável por:

Instalação de pacotes
Scripts de execução
Controle das dependências

Exemplo:

{
 "scripts": {
   "test": "...",
   "report": "node generate-report.js"
 }
}
6. Relatórios
Multiple Cucumber HTML Reporter

Responsável pelo dashboard HTML.

Recursos:

✅ Dashboard visual

✅ Status dos testes

✅ Quantidade de cenários

✅ Tempo de execução

✅ Ambiente

✅ Features executadas

Estrutura:

reports/

├── cucumber-report.json

├── cucumber-report.html

└── index.html
7. Customização de relatório

Foi criado um mecanismo próprio:

patch/

└── style.css


scripts/

└── patch-reporter-css.js

Fluxo:

patch/style.css

       |
       v

patch-reporter-css.js

       |
       v

node_modules/
multiple-cucumber-html-reporter/
templates/style.css

Benefício:

Não perde personalização ao reinstalar dependências
Mantém padrão visual próprio
8. Evidências de teste

O framework possui coleta automática:

Screenshot

Uso:

Evidência visual
Falhas
Aprovação manual
Vídeo

Uso:

Reprodução da execução
Trace Viewer

Uso:

Investigação detalhada

Permite analisar:

DOM
Rede
Ações executadas
Tempo
Logs

Uso:

Auditoria
Debug
9. Testes de Performance
k6

Novo módulo integrado.

Estrutura:

performance/

└── k6/

    ├── config/

    │   └── environment.js

    ├── scenarios/

    │   ├── company-load.js
    │   ├── login-load.js
    │   ├── registration-load.js
    │   ├── spike-test.js
    │   └── stress-test.js

    ├── first-test.js
    ├── getOrganization.js
    ├── soak-test.js
    └── run-performance.ps1

Tipos de teste disponíveis:

Smoke Test

Objetivo:

Validar funcionamento básico

Exemplo:

1 usuário
1 execução
Load Test

Objetivo:

Validar comportamento sob carga esperada

Exemplo:

50 usuários virtuais
10 minutos
Stress Test

Objetivo:

Encontrar limite da aplicação
Spike Test

Objetivo:

Validar aumento repentino de usuários
Soak Test

Objetivo:

Validar estabilidade por longo período
10. Métricas coletadas

O k6 fornece:

Latência
avg response time
p90
p95
Erros
http_req_failed
Usuários virtuais
vus
Execuções
iterations
11. Integração Performance + Report

Hoje temos:

k6
 |
 |
 v
performance-summary.json
 |
 |
 v
generate-report.js
 |
 |
 v
Multiple Cucumber HTML Reporter
 |
 |
 v
index.html

Resultado:

Um único relatório contendo:

Testes UI
Testes Performance
12. Estrutura geral atual

Algo próximo disso:

automacaoempresa.nibo

│
├── features
│
├── steps
│
├── support
│
├── evidencias
│
├── reports
│
├── test-results
│
├── performance
│
│   └── k6
│
├── scripts
│
├── patch
│
├── generate-report.js
│
├── package.json
│
└── cucumber.js
Resumo profissional do framework

Hoje ele é um framework de automação E2E + API/Performance híbrido, utilizando:

Categoria	Tecnologia
Linguagem	JavaScript
Runtime	Node.js
Automação Web	Playwright
BDD	Cucumber
Relatórios	Multiple Cucumber HTML Reporter
Performance	k6
Evidências	Screenshot, Video, Trace, Logs
Gerenciamento	NPM
Customização	CSS próprio + Patch Script
Execução	Scripts automatizados

Um ponto importante: com a integração do k6 no mesmo relatório, o framework saiu de um framework de testes UI e virou uma estrutura mais próxima de um framework de qualidade completo, porque agora cobre:

teste funcional
teste de regressão
evidências
rastreabilidade
teste de carga
métricas de performance

O próximo passo natural (quando você quiser) seria documentar isso como arquitetura do framework e preparar para apresentação em portfólio/GitHub.
