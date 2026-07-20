const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './reports',
    reportPath: './reports',

    pageTitle: 'Nibo Automation Report',

    reportName: 'Nibo Automation Framework',

    displayDuration: true,

    displayReportTime: true,

    metadata: {
        browser: {
            name: 'Chromium',
            version: 'Playwright'
        },
        device: 'Windows 11',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },

    customData: {
        title: 'Execution Information',
        data: [
            {
                label: 'Project',
                value: 'Automacao Nibo'
            },
            {
                label: 'Framework',
                value: 'Playwright + Cucumber'
            }
        ]
    }
});