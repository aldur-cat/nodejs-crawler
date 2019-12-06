const xlsx = require('xlsx');

const workbook = xlsx.readFile('xlsx/data.xlsx');
const ws = workbook.Sheets.영화목록;
const records = xlsx.utils.sheet_to_json(ws); // TODO: 강좌에서 header 옵션 보여주기
records.map((items, index) => {
  console.log(items, index);
});
