const puppeteer = require("puppeteer");

(async () => {
  console.log("begin capture");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true
  });
  const page = await browser.newPage();
  await page.goto("https://haoxp.xyz/resume", {
    waitUntil: "networkidle0"
  });
  await page.pdf({
    path: "/tmp/resume_Xiangpeng_Hao.pdf"
  });

  await page.goto("https://haoxp.xyz/resume?simple=1", {
    waitUntil: "networkidle0"
  });
  await page.pdf({
    path: "/tmp/resume_Xiangpeng_Hao_single_page.pdf"
  });

  await browser.close();
  console.log(
    "done caturing pdf, saving result to /tmp/resume_Xiangpeng_Hao.pdf.pdf"
  );
})();
