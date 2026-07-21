const fs = require('fs');
const path = require('path');

const reportsDir = './reports/features';

const files = fs
    .readdirSync(reportsDir)
    .filter(file => file.endsWith('.html'));


function createLink(label, filePath, text) {

    const relativePath = '../../' + filePath.replace(/\\/g, '/');

    return `${label}: <a href="${relativePath}" target="_blank">${text}</a>`;

}


files.forEach(fileName => {

    const file = path.join(reportsDir, fileName);

    console.log(`Processando: ${fileName}`);


    let html = fs.readFileSync(file, 'utf8');


    console.log('Screenshot:', html.includes('Screenshot:'));
    console.log('Trace:', html.includes('Trace:'));
    console.log('Video:', html.includes('Video:'));


    html = html.replace(

        /Screenshot:\s*(evidencias\/screenshots\/[^\s<]+)/g,

        (_, screenshotPath) =>
            createLink(
                'Screenshot',
                screenshotPath,
                '🖼️ Abrir Screenshot'
            )

    );


    html = html.replace(

        /Trace:\s*(evidencias\/traces\/[^\s<]+)/g,

        (_, tracePath) =>
            createLink(
                'Trace',
                tracePath,
                '📦 Abrir Trace'
            )

    );


    html = html.replace(

        /Log:\s*(evidencias\/logs\/[^\s<]+)/g,

        (_, logPath) =>
            createLink(
                'Log',
                logPath,
                '📄 Abrir Log'
            )

    );


    html = html.replace(

        /Video:\s*(evidencias\/videos\/[^\s<]+)/g,

        (_, videoPath) =>
            createLink(
                'Video',
                videoPath,
                '🎥 Abrir Vídeo'
            )

    );


    fs.writeFileSync(file, html);

    console.log(`OK: ${fileName}`);

});


console.log('Todos os relatórios foram atualizados.');