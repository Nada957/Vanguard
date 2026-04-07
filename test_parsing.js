const fetch = require('node-fetch');

async function testParsing(sheetId) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
  const response = await fetch(url);
  const text = await response.text();
  
  const jsonStr = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/)?.[1];
  const data = JSON.parse(jsonStr);
  const rows = data.table.rows.map((row) => row.c.map((cell) => cell?.v));

  console.log("RAW ROWS (first 10):", JSON.stringify(rows.slice(0, 10), null, 2));

  const config = { active_theme: 1 };
  for (const row of rows) {
    if (!row || !row[0]) continue;
    const s = String(row[0]).trim().toLowerCase();
    const k = String(row[1]).trim().toLowerCase();
    const val = row[2];

    if (s.includes('config') && k.includes('theme')) {
      config.active_theme = Number(val) || 1;
      console.log(`FOUND THEME: ${val} -> ${config.active_theme}`);
    }
  }
}

const id = '1M_KsxkG-fuqTk92pcNYKE0R-3VVJkTzNsiHjp01TxGo';
testParsing(id);
