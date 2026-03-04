const puppeteer = require('puppeteer');
const path = require('path');

const members = [
    { name: 'Vipin Krishna T.P', regNo: 'DSAXSPH017' },
    { name: 'Muhammed Sinan P.S', regNo: 'DSAXSPH015' },
    { name: 'Devadath C.M', regNo: 'DSAXSPH010' },
    { name: 'Hana', regNo: 'DSAXSPH004' },
    { name: 'Aparna T.M', regNo: 'DSAXSPH002' },
    { name: 'Kiran', regNo: 'DSAXSPH018' }
];

(async () => {
    console.log('🚀 Launching browser...');
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--allow-file-access-from-files'
        ]
    });

    const page = await browser.newPage();
    const filePath = 'file://' + path.resolve(__dirname, 'index.html');

    for (const member of members) {
        console.log(`\n📄 Processing: ${member.name} (${member.regNo})`);

        await page.goto(filePath, {
            waitUntil: 'networkidle0',
            timeout: 60000
        });

        // Inject member details into the DOM
        await page.evaluate((m) => {
            const coverName = document.getElementById('cover-name');
            const coverReg = document.getElementById('cover-reg');
            const certName = document.getElementById('cert-name');
            const declName = document.getElementById('decl-name');

            if (coverName) coverName.textContent = m.name;
            if (coverReg) coverReg.textContent = m.regNo;
            if (certName) certName.textContent = m.name;
            if (declName) declName.textContent = m.name;
        }, member);

        // Wait for fonts and styles to settle
        await new Promise(resolve => setTimeout(resolve, 2000));

        const fileName = `${member.name.replace(/ /g, '_')}_${member.regNo}.pdf`;
        console.log(`🖨️  Generating PDF: ${fileName}`);

        await page.pdf({
            path: fileName,
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            },
            displayHeaderFooter: false,
        });

        console.log(`✅ Saved: ${fileName}`);
    }

    await browser.close();
    console.log('\n✨ All 6 PDFs have been generated successfully!');
})();
