async function testFetch() {
  const url = "https://docs.google.com/spreadsheets/d/1M_KsxkG-fuqTk92pcNYKE0R-3VVJkTzNsiHjp01TxGo/gviz/tq?tqx=out:json";
  try {
    const response = await fetch(url);
    const text = await response.text();
    console.log("STATUS:", response.status);
    console.log("OUTPUT START:", text.substring(0, 150));
  } catch (err) {
    console.error("ERROR:", err);
  }
}
testFetch();
