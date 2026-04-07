// Using global fetch (available in Node 18+)
async function debugRows() {
  const SHEET_ID = '1M_KsxkG-fuqTk92pcNYKE0R-3VVJkTzNsiHjp01TxGo';
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
  
  try {
    const response = await fetch(url);
    const text = await response.text();
    const jsonStr = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/)?.[1];
    const data = JSON.parse(jsonStr);
    
    data.table.rows.forEach((row, i) => {
      const cells = row.c.map(c => c ? (c.v !== undefined ? c.v : c.f) : null);
      console.log(`ROW ${i}:`, JSON.stringify(cells));
    });

  } catch (err) {
    console.error("ERROR:", err);
  }
}
debugRows();
