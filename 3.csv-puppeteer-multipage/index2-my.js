const parse = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');
const fs = require('fs');
const puppeteer = require('puppeteer');

const csv = fs.readFileSync('csv/data.csv');
const records = parse(csv.toString('utf-8'));

const crawler = async () => {
  const result = [];
  const browser = await puppeteer.launch();
  await Promise.all(records.map(async (item, index) => {
    result[index] = item;
    const page = await browser.newPage();
    await page.goto(item[1]);
    const text = await page.evaluate(() => {
      const score = document.querySelector('.score.score_left .star_score');
      return score.textContent;
    });
    if (text) {
      console.log(item[0], '평점', text.trim());
      result[index][2] = text.trim();
    }
    await page.waitFor(3000);
    await page.close();
  }));
  await browser.close();
  const str = stringify(result);
  fs.writeFileSync('csv/result2.csv', str);
};
crawler();
