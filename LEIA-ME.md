# Franca Archive — site

Site de história das artes e do design. Você escreve os artigos em arquivos de
texto simples (Markdown) e o site se monta sozinho, com o design já pronto.

**Tese editorial:** *design é biografia* — dois eixos: **Quem Fez** (criadores) e
**Quem Inspirou** (musas e mecenas).

---

## Como escrever um artigo novo (o dia a dia)

1. Vá até a pasta `src/content/arquivo/`
2. Crie um arquivo novo terminando em `.md` — o nome vira o endereço.
   Ex.: `van-cleef-mystery-set.md` → francaarchive.com/arquivo/van-cleef-mystery-set
3. Cole o cabeçalho abaixo e escreva seu texto embaixo dele:

```markdown
---
titulo: "Título do artigo"
subtitulo: "Uma linha que resume a história."
eixo: "quem-fez"            # ou "quem-inspirou"
categoria: "Joalheria · Século XX"
data: 2026-06-26
periodo: "1933"            # opcional (datas da pessoa ou da peça)
leitura: "5 min"           # opcional
rascunho: false            # true = não aparece no site
---

Aqui começa o texto. Pode usar:

#### Subtítulo de seção

> Uma citação em destaque.

Parágrafos normais, **negrito**, *itálico* e [links](https://exemplo.com).
```

4. Salve, mande para o GitHub (passo abaixo) e o site atualiza sozinho.

Os dois artigos de exemplo já estão lá (`charlotte-perriand.md` e
`jeanne-toussaint.md`) — pode editar ou apagar quando quiser.

---

## Ver o site no seu computador (opcional)

Se um dia quiser testar localmente, precisa do Node.js instalado. Depois:

```
npm install
npm run dev
```

Abra o endereço que aparecer (geralmente http://localhost:4321).

---

## Publicar no ar (GitHub + Cloudflare Pages) — passo a passo

Faça uma vez. Depois, todo artigo novo no GitHub atualiza o site sozinho.

### 1. Subir para o GitHub
1. Crie uma conta em github.com
2. Crie um repositório novo chamado `franca-archive` (pode ser privado)
3. Suba os arquivos deste projeto para esse repositório
   (pelo site do GitHub: "Add file" → "Upload files", arraste tudo)

### 2. Conectar ao Cloudflare Pages
1. No painel da Cloudflare → menu lateral → **Workers & Pages**
2. **Create** → aba **Pages** → **Connect to Git**
3. Autorize o GitHub e escolha o repositório `franca-archive`
4. Nas configurações de build, preencha:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. **Save and Deploy** — em ~1 min o site fica no ar num endereço `.pages.dev`

### 3. Ligar ao francaarchive.com
1. Ainda no projeto em Pages → aba **Custom domains**
2. **Set up a custom domain** → digite `francaarchive.com`
3. Como o domínio já está na Cloudflare, ele configura o DNS sozinho
4. Pronto — o site responde em francaarchive.com

> Isso **não afeta** o seu e-mail info@francaarchive.com. Site e e-mail
> convivem no mesmo domínio sem conflito.

---

## Estrutura das pastas (para referência)

```
src/
  content/arquivo/   ← seus artigos .md  (é aqui que você escreve)
  pages/             ← páginas do site (início, eixos, sobre)
  layouts/           ← moldura (cabeçalho, rodapé)
  components/        ← peças reutilizáveis
  styles/global.css  ← o design
public/styles/       ← cópia do CSS servida ao site
```

Para mudar cores ou fontes, edite as variáveis no topo de
`public/styles/global.css` (e a cópia em `src/styles/global.css`).
