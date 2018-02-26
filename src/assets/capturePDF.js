const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  await page.goto('https://haoxp.xyz/resume', {
    waitUntil: 'networkidle2'
  })
  await page.pdf({
    path: './resume.pdf'
  })

  await browser.close()
})()
