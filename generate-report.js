const fs = require("fs");
const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./reports",

    reportPath: "./reports",

    pageTitle: "Nibo Automation Report",

    reportName: "Nibo Automation Framework",

    displayDuration: true,

    displayReportTime: true,

    displayFooter: false,

    customCss: "./custom.css",

    metadata: {
        browser: {
            name: "Chromium",
            version: "Playwright"
        },
        device: "Windows 11",
        platform: {
            name: "Windows",
            version: "11"
        }
    },

    customData: {
        title: "Execution Information",
        data: [
            {
                label: "Project",
                value: "Automacao Nibo"
            },
            {
                label: "Framework",
                value: "Playwright + Cucumber"
            }
        ]
    }

});

const summaryPath = "./performance/results/performance-summary.json";
const reportPath = "./reports/index.html";

if (fs.existsSync(summaryPath) && fs.existsSync(reportPath)) {

    const summary = JSON.parse(fs.readFileSync(summaryPath, "utf8"));

    let html = fs.readFileSync(reportPath, "utf8");

    html = html.replace(
    /<div class="footer">[\s\S]*?<\/div>/,
    ""
);

    const performanceSection = `

<div class="row">

    <div class="col-md-12">

        <div class="panel panel-default">

            <div class="panel-heading">
                <h3 class="panel-title">
                    Performance Tests (k6)
                </h3>
            </div>


            <div class="panel-body">


                <table class="table table-bordered table-striped">

                    <tbody>

                        <tr>
                            <th>Virtual Users</th>
                            <td>${summary.vus}</td>
                        </tr>


                        <tr>
                            <th>Duration</th>
                            <td>${summary.duration}</td>
                        </tr>


                        <tr>
                            <th>Iterations</th>
                            <td>${summary.iterations}</td>
                        </tr>


                        <tr>
                            <th>Average Response</th>
                            <td>${summary.avg}</td>
                        </tr>


                        <tr>
                            <th>P95</th>
                            <td>${summary.p95}</td>
                        </tr>


                        <tr>
                            <th>Failed Requests</th>
                            <td>${summary.failed}</td>
                        </tr>


                    </tbody>


                </table>


            </div>

        </div>

    </div>

</div>

`;

    html = html.replace(
    "Maintained by Wasiq Bhamla",
    performanceSection + "Maintained by Wasiq Bhamla"
);

    fs.writeFileSync(reportPath, html);

    console.log("Performance adicionada ao relatório.");

} else {

    console.log("Resumo de performance não encontrado.");

}