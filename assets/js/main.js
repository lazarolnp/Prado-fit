/* ==========================================================
   CONFIGURAÇÃO DO CHECKOUT — CAKTO
   Substitua o valor abaixo pelo link real do checkout da Cakto.
   Todos os botões de compra (.js-checkout) usam este link.
   ========================================================== */
const LINK_CHECKOUT_CAKTO = "https://pay.cakto.com.br/SEU-LINK-AQUI";

(function () {
  "use strict";

  // Enquanto o link provisório estiver configurado, os botões levam até a oferta.
  const linkConfigurado = !/SEU-LINK-AQUI/.test(LINK_CHECKOUT_CAKTO);

  document.querySelectorAll(".js-checkout").forEach(function (btn) {
    if (linkConfigurado) {
      btn.setAttribute("href", LINK_CHECKOUT_CAKTO);
      btn.setAttribute("rel", "noopener");
    }
  });

  if (!linkConfigurado) {
    console.warn("[Prado Fit] Defina LINK_CHECKOUT_CAKTO em assets/js/main.js com o link real da Cakto.");
  }

  // Ano no rodapé
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Animações de entrada discretas
  const reveals = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Barra de compra fixa no celular: aparece depois da primeira dobra
  // e some quando a oferta ou a chamada final estão visíveis.
  const sticky = document.getElementById("stickyCta");
  const hero = document.querySelector(".hero");
  const hideZones = [document.getElementById("oferta"), document.getElementById("final")];
  if (sticky && hero && "IntersectionObserver" in window) {
    let pastHero = false;
    const zoneVisible = new Set();
    const update = function () {
      const show = pastHero && zoneVisible.size === 0;
      sticky.classList.toggle("is-shown", show);
      sticky.setAttribute("aria-hidden", show ? "false" : "true");
      const link = sticky.querySelector("a");
      if (link) link.tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(function (entries) {
      pastHero = !entries[0].isIntersecting;
      update();
    }).observe(hero);
    const zoneObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) zoneVisible.add(e.target); else zoneVisible.delete(e.target);
      });
      update();
    });
    hideZones.forEach(function (z) { if (z) zoneObserver.observe(z); });
  }
})();
