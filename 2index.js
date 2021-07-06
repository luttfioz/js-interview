const p = { a: '2', b: '3' };
const t = { b: '15', c: '16' };

const summary = { ...p, ...t };
console.log(summary)