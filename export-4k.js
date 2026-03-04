const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const slides = [
        { html: 'unified-project-slide.html', output: 'unified-visualization-4k.png' },
        { html: 'circuit-diagram-slide.html', output: 'circuit-diagram-4k.png' }
    ];

    console.log('🚀 Launching browser for 4K Multi-Slide Export...');
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--allow-file-access-from-files',
            '--force-device-scale-factor=1'
        ]
    });

    const page = await browser.newPage();

    // Set Viewport to 4K resolution (3840x2160)
    await page.setViewport({
        width: 3840,
        height: 2160,
        deviceScaleFactor: 1
    });

    for (const slide of slides) {
        const filePath = 'file://' + path.resolve(__dirname, slide.html);
        console.log(`📄 Loading Slide: ${slide.html}`);

        await page.goto(filePath, {
            waitUntil: 'networkidle0',
            timeout: 60000
        });

        // Wait for fonts and images to fully render
        console.log(`⏳ Rendering high-resolution assets for ${slide.output}...`);
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Capture screenshot at 4K
        console.log(`📸 Capturing 4K screenshot: ${slide.output}`);
        await page.screenshot({
            path: slide.output,
            type: 'png',
            fullPage: false
        });
        console.log(`✅ Success! ${slide.output} saved.`);
    }

    await browser.close();
    console.log('🎉 All slides exported to 4K PNG successfully!');
})();
