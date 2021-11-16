const {chromium} = require('playwright');

(async () => {
   
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({path: 'google.png'});
    await browser.close();
    
  })();