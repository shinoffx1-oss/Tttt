const api = document.querySelector('#api');
const uid = document.querySelector('#uid');
const result = document.querySelector('#result');
const send = document.querySelector('#send');
let region = 'BR';

document.querySelectorAll('.region').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.region').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); region = btn.dataset.region;
}));

api.value = localStorage.getItem('ff_api_url') || '';
api.addEventListener('change', () => localStorage.setItem('ff_api_url', api.value.trim().replace(/\/$/,'')));

send.addEventListener('click', async () => {
  const base = api.value.trim().replace(/\/$/, '');
  const id = uid.value.trim();
  if (!base) return result.textContent = 'Informe a URL da sua API.';
  if (!/^\d+$/.test(id)) return result.textContent = 'Informe um UID numérico válido.';
  send.disabled = true; result.textContent = 'Enviando...';
  try {
    const url = `${base}/like?uid=${encodeURIComponent(id)}&region=${encodeURIComponent(region)}`;
    const res = await fetch(url);
    const text = await res.text();
    let data; try { data = JSON.parse(text); } catch { data = text; }
    result.textContent = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
  } catch (e) {
    result.textContent = 'Erro ao conectar. Verifique a URL da API e se o CORS está habilitado.\n\n' + e.message;
  } finally { send.disabled = false; }
});
