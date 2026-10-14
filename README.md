# Prado Fit — Landing page

Landing page de vendas do **Prado Fit — Guia de Emagrecimento de 30 Dias** (R$ 14,90).
Página estática (HTML + CSS + JS, sem build), responsiva e otimizada para celular.

## Estrutura

```
index.html            página
assets/css/style.css  estilos (paleta em variáveis no topo do arquivo)
assets/js/main.js     link do checkout, animações e barra de compra no celular
assets/img/           imagens (capa do PDF)
```

## Configurar o checkout da Cakto

Abra `assets/js/main.js` e troque o valor da variável:

```js
const LINK_CHECKOUT_CAKTO = "https://pay.cakto.com.br/SEU-LINK-AQUI";
```

Todos os botões de compra (classe `js-checkout`) passam a usar esse link.
Enquanto o valor provisório estiver lá, os botões rolam até a seção da oferta.

## Usar a capa original do PDF

Exporte a capa do PDF como imagem e salve em `assets/img/capa-prado-fit.jpg`
(proporção A4, ex.: 1200 × 1697 px). Ela substitui automaticamente a capa
desenhada em CSS no topo da página, no celular do mockup e no card da oferta.

## Cores

A paleta fica nas variáveis `:root` no início de `assets/css/style.css`
(`--green-800` é a cor principal, `--cta` a cor dos botões de compra).
Ajuste os valores para reproduzir exatamente as cores do PDF.

## Publicar

Qualquer hospedagem estática serve (GitHub Pages, Netlify, Vercel, Hostinger…):
basta enviar `index.html` e a pasta `assets/`.
