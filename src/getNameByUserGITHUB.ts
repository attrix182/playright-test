const { chromium } = require('playwright');



(async () => {

  //Type User Github bellow
  const username = 'attrix182';

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`https://github.com/${username}`);
  const realname = await page.textContent('[itemprop="name"]');

  console.log(`Real name of ${username} is ${realname}`);

  await browser.close();

})();