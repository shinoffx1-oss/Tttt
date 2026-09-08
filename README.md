# Free Fire Like API + Web Tester

Projeto com o backend Flask da API e uma página pronta para publicar no GitHub Pages.

## 1. Backend

Entre em `backend/` e instale as dependências:

```bash
pip install -r requirements.txt
```

Rode localmente:

```bash
flask --app app run
```

A API aceita:

```text
GET /like?uid=123456789&region=BR
GET /like?uid=123456789&region=IND
GET /like?uid=123456789&region=EUROPE
```

Se `region` não for enviado, o comportamento antigo de detecção automática é mantido.

## 2. Frontend no GitHub Pages

Publique somente a pasta `frontend/` em um repositório do GitHub e ative GitHub Pages.

No site, informe a URL pública do backend e escolha BR, IND ou EUROPE.

> Nunca coloque os arquivos `*_config.json` nem senhas/tokens no frontend ou em um repositório público.
