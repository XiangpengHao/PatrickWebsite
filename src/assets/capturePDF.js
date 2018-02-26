const puppeteer = require('puppeteer');

(async () => {
  console.log('begin capture')
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  await page.goto('https://haoxp.xyz/resume', {
    waitUntil: 'networkidle0'
  })
  await page.pdf({
    path: '/tmp/resume.pdf'
  })

  await browser.close()
  console.log('done caturing pdf, saving result to /tmp/resume.pdf')
})()
