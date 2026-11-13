// Security test for Free Tier Radar's XSS shield (run: node security-test.js)
function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
function escUrl(u) {
  try {
    const url = new URL(u, 'https://example.com');
    return /^https?:$/.test(url.protocol) ? esc(url.href) : '#';
  } catch { return '#'; }
}

const results = [];
const t = (name, pass, detail) => results.push((pass ? 'PASS' : 'FAIL') + ' | ' + name + (detail ? ' -> ' + detail : ''));

// 1. script injection in text fields
const xss = '<img src=x onerror=alert(1)>';
t('text escape blocks tags', !esc(xss).includes('<'), esc(xss).slice(0, 50));
t('quote escape blocks attr breakouts', esc('"\'') === '&quot;&#39;');

// 2. javascript: URL blocked in links
t('javascript: url blocked', escUrl('javascript:alert(1)') === '#');
t('data: url blocked', escUrl('data:text/html,<script>alert(1)</script>') === '#');
t('https url allowed', escUrl('https://vercel.com/pricing').startsWith('https://'));

// 3. current dataset is clean (no raw html chars that would change rendering)
const d = require('./data/services.json');
t('dataset has 15 services', d.services.length === 15, String(d.services.length));
t('dataset contains no raw < or >', !d.services.some(s => /[<>]/.test(JSON.stringify(s))));

// 4. no secrets anywhere in dataset
t('dataset contains no secret-looking strings',
  !d.services.some(s => /(sk-[A-Za-z0-9]{20,}|api[_-]?key|ghp_|AIza[0-9A-Za-z_-]{30,})/i.test(JSON.stringify(s))));

console.log(results.join('\n'));
console.log(results.some(r => r.startsWith('FAIL')) ? 'OVERALL: FAIL' : 'OVERALL: ALL PASS');
