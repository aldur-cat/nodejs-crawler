const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const csv = fs.readFileSync('csv/data.csv');
const records = parse(csv.toString('utf-8'));
records.map((item, index) => {
  console.log(item, index);
});
