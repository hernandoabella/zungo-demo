"use client";

import { useEffect } from "react";
import { zungoCss, zungoBody, zungoScript } from "@/lib/zungoContent";

const heroCss = `
.hero{position:relative;overflow:hidden;padding:90px 0 100px;background:radial-gradient(1200px 600px at 80% 30%,#5a0a3f 0%,transparent 55%),radial-gradient(900px 500px at 10% 80%,#1a3a12 0%,transparent 60%),linear-gradient(135deg,#050505 0%,#0d0a0e 45%,#1a0c17 100%)}
.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:46px 46px;mask-image:radial-gradient(ellipse at center,black 40%,transparent 85%);pointer-events:none}
.hero:after{content:"";position:absolute;width:520px;height:520px;border-radius:50%;right:-220px;top:-60px;background:radial-gradient(circle,#d00091 0%,#d00091 15%,transparent 70%);filter:blur(60px);opacity:.35;pointer-events:none}
.hero-image img{max-height:700px !important;box-shadow:0 30px 100px #000c,0 0 80px #d0009122}
.hero-grid{gap:60px;align-items:center}
.float-wa{display:inline-flex;align-items:center;gap:4px;padding:14px 20px;border-radius:999px;transition:transform .2s,box-shadow .2s}
.float-wa:hover{transform:translateY(-3px);box-shadow:0 12px 40px #000c}
.float-wa svg{flex-shrink:0}
.kicker::before{content:"";display:inline-block;width:12px;height:12px;margin-right:8px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b5ed35'%3E%3Cpath d='M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.4 5.7 20.8 8 13.6 2 9.2h7.6z'/%3E%3C/svg%3E") no-repeat center/contain;vertical-align:middle}

.cart-pill{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}
.cart-pill svg{flex-shrink:0}
.toast{bottom:96px;max-width:90vw;text-align:center;line-height:1.4}
.add-btn{width:100%;margin-top:14px}

.cart-item{display:grid;grid-template-columns:40px 1fr auto;gap:12px;align-items:center;padding:14px 0;border-bottom:1px solid var(--line)}
.qty-badge{width:36px;height:36px;border-radius:50%;background:var(--lime);color:#111;display:flex;align-items:center;justify-content:center;font-weight:1000;font-size:1rem;flex-shrink:0;box-shadow:0 4px 12px #b5ed3544}
.cart-item-info strong{display:block;font-size:.95rem;line-height:1.2}
.cart-item-info small{color:#aaa;font-size:.8rem;margin-top:3px;display:block}
.qty-controls{display:flex;gap:6px;align-items:center}
.qty-btn{width:30px;height:30px;border-radius:50%;border:1px solid #ffffff44;background:#1f1b1f;color:#fff;cursor:pointer;font-weight:900;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:background .15s,border-color .15s}
.qty-btn:hover{background:var(--pink);border-color:var(--pink)}
.remove{background:none;border:0;color:#ff82d7;cursor:pointer;font-size:1.05rem;padding:4px;line-height:1}
@media (max-width: 480px){
  .cart-item{grid-template-columns:36px 1fr auto;gap:8px}
  .qty-badge{width:32px;height:32px;font-size:.9rem}
  .qty-btn{width:26px;height:26px;font-size:.9rem}
}
@media (max-width: 800px){
  .nav{min-height:64px;gap:12px}
  .nav-actions{gap:8px}
  .cart-pill{padding:8px 12px;font-size:.82rem}
  .cart-pill svg{width:16px;height:16px;margin-right:4px}
  .menu-toggle{padding:8px 10px}
  .hero{padding:56px 0 64px}
  .hero-grid{gap:24px}
  .hero-image img{max-height:420px !important}
  .section-head h2{letter-spacing:-1px}
  .product-photo img{height:260px}
  .gallery-grid img{height:240px}
  .lightbox img{max-width:96vw;max-height:80vh}
}
@media (max-width: 480px){
  .wrap{width:94%}
  .hero h1{font-size:clamp(2.9rem,15vw,4.2rem)}
  .product-body{padding:16px}
  .btn{padding:13px 18px;font-size:.9rem}
  .topbar{font-size:.7rem;letter-spacing:1px}
}
.lightbox{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:100;align-items:center;justify-content:center;padding:24px;cursor:zoom-out}
.lightbox.open{display:flex}
.lightbox img{max-width:92vw;max-height:92vh;border-radius:18px;box-shadow:0 30px 100px #000;object-fit:contain}
.product-photo img,.gallery-grid img,.ingredient-card img{cursor:zoom-in}
`;

export default function ZungoLanding() {
  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = zungoScript
      .replace(/\bconst\s+WHATSAPP\b/g, "var WHATSAPP")
      .replace(/\blet\s+cart\b/g, "var cart");
    document.body.appendChild(script);
    const extra = document.createElement("script");
    extra.textContent = `
      function openLightbox(src){var lb=document.getElementById('lightbox');var im=document.getElementById('lightboxImg');im.src=src;lb.classList.add('open');document.body.style.overflow='hidden';}
      function closeLightbox(){var lb=document.getElementById('lightbox');lb.classList.remove('open');document.body.style.overflow='';}
      document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLightbox();});
      function attachZoom(){document.querySelectorAll('.product-photo img,.gallery-grid img,.ingredient-card img').forEach(function(img){img.addEventListener('click',function(){openLightbox(img.src);});});}
      if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',attachZoom);}else{attachZoom();}
    `;
    document.body.appendChild(extra);
    return () => {
      script.remove();
      extra.remove();
    };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: zungoCss }} />
      <style dangerouslySetInnerHTML={{ __html: heroCss }} />
      <div dangerouslySetInnerHTML={{ __html: zungoBody }} />
    </>
  );
}
