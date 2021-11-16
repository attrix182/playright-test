const {chromium} = require('playwright');

(async () => {
   
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://github.com/xchanmolx');

    const content = await page.textContent('[itemprop="name"]');

    console.log(content);
    
    await browser.close();
    
  })();