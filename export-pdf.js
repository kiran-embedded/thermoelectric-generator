const puppeteer = require('puppeteer');
const path = require('path');

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

    // Load the HTML file
    const filePath = 'file://' + path.resolve(__dirname, 'index.html');
    console.log('📄 Loading:', filePath);

    await page.goto(filePath, {
        waitUntil: 'networkidle0',
        timeout: 60000
    });

    // Wait for fonts and images to fully render
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('🖨️  Generating PDF...');
    await page.pdf({
        path: 'project-report.pdf',
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

    await browser.close();
    console.log('✅ PDF saved as: project-report.pdf');
})();
