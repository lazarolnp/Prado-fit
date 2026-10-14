# Prado Fit — Landing page

Landing page de vendas do **Prado Fit — Guia de Emagrecimento de 30 Dias** (R$ 14,90).
Página estática (HTML + CSS + JS, sem build), responsiva e otimizada para celular.

## Estrutura

```
index.html            página
assets/css/style.css  estilos (paleta em variáveis no topo do arquivo)
assets/js/main.js     link do checkout, animações e barra de compra no celular
assets/img/           capa e páginas exportadas do PDF original (JPG + WebP)
```

## Configurar o checkout da Cakto

Abra `assets/js/main.js` e troque o valor da variável:

```js
const LINK_CHECKOUT_CAKTO = "https://pay.cakto.com.br/SEU-LINK-AQUI";
```

Todos os botões de compra (classe `js-checkout`) passam a usar esse link.
Enquanto o valor provisório estiver lá, os botões rolam até a seção da oferta.

## Identidade visual

A capa (`capa-prado-fit`) e as páginas exibidas na seção "O que você recebe"
foram exportadas do PDF original. As cores são as do PDF e ficam nas variáveis
`:root` no início de `assets/css/style.css` (`--pf-green`, `--pf-teal`,
`--pf-orange`, `--pf-blue`, `--pf-purple`, `--pf-coral`…).

O botão de compra usa o laranja do PDF em tom mais escuro (`--cta: #bb5814`)
para garantir contraste legível com o texto branco.

## Publicar

Qualquer hospedagem estática serve (GitHub Pages, Netlify, Vercel, Hostinger…):
basta enviar `index.html` e a pasta `assets/`.
