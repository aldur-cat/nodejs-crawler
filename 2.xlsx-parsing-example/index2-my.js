const xlsx = require('xlsx');

const workbook = xlsx.readFile('xlsx/data.xlsx');

const ws = workbook.Sheets[workbook.SheetNames[0]];
console.log(ws['!ref']);
ws['!ref'] = ws['!ref'].split(':').map((v, i) => {
  if (i === 0) { return 'A2'; }
  return v;
}).join(':');
console.log(ws['!ref']);
const records = xlsx.utils.sheet_to_json(ws, { header: ['title','url']});
// console.log(records);

records.map((item, index) => {
  console.log(item, index);
});
