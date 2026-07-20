Playwright + JavaScript

✅ Cucumber + Gherkin

✅ Page Objects

✅ API Testing

✅ SQL

✅ K6 Performance

✅ GitHub Actions CI/CD

✅ Reports HTML (estilo Allure)

✅ Screenshots automáticos

✅ Logs

✅ Evidências organizadas

✅ Clean Code

✅ SOLID (onde fizer sentido)

✅ Estrutura utilizada em empresas


Automacaonibo-playwright-framework/
│
├── .github/
│   └── workflows/
│
├── config/
│
├── features/
│   └── login.feature
│
├── hooks/
│
├── pages/
│
├── steps/
│
├── support/
│
├── api/
│
├── database/
│
├── performance/
│   └── k6/
│
├── evidencias/
│   ├── screenshots/
│   ├── logs/
│   ├── videos/
│   └── traces/
│
├── reports/
│
├── tests/
│
├── test-results/
│
├── package.json
└── playwright.config.js

Utilizamos:
    • @cucumber/cucumber → BDD
    • playwright → Automação Web
    • gherkin → Linguagem de negócio
Bibliotecas que usaremos durante todo o projeto:
    • dotenv
    • cross-env
    • multiple-cucumber-html-reporter
    • winston (logs)
    • allure (se decidirmos complementar o relatório)
    • eslint
    • prettier
