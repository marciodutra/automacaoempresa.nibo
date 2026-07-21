const {

    Before,
    After,
    setDefaultTimeout

} = require('@cucumber/cucumber');


const logger = require('../support/logger');
const fs = require('fs');


const {

    launchBrowser,
    closeBrowser,
    getPage,
    getContext

} = require('../support/browser');


setDefaultTimeout(30000);



Before(async function (scenario) {


    logger.info(
        `INICIANDO TESTE: ${scenario.pickle.name}`
    );


    await launchBrowser();


});



After(async function (scenario) {


    const page = getPage();

    const context = getContext();


    const scenarioName = scenario.pickle.name
        .replace(/[<>:"/\\|?*]/g, '')
        .replace(/\s+/g, '_');


    const screenshotPath =
        `evidencias/screenshots/${scenarioName}.png`;


    const tracePath =
        `evidencias/traces/${scenarioName}.zip`;



    if (page) {


        const screenshot = await page.screenshot({

            path: screenshotPath,

            fullPage: true

        });


        this.attach(

            screenshot,

            'image/png'

        );



        const video = page.video();


        if (video) {


            const originalVideo = await video.path();


            const finalVideo =
                `evidencias/videos/${scenarioName}.webm`;


            fs.copyFileSync(

                originalVideo,

                finalVideo

            );


            this.attach(

                fs.readFileSync(finalVideo),

                'video/webm'

            );


        }


    }



    if (context) {


        await context.tracing.stop({

            path: tracePath

        });



        this.attach(

            `Trace: ${tracePath}`

        );


    }



    const logPath =
        'evidencias/logs/test-execution.log';


    if (fs.existsSync(logPath)) {


        this.attach(

            fs.readFileSync(logPath),

            'text/plain'

        );


    }



    logger.info(

        `FINALIZANDO TESTE: ${scenarioName}`

    );



    await closeBrowser();


});