import{f as m,i as f}from"./assets/vendor-651d7991.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=document.querySelector("#datetime-picker"),c=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");c.addEventListener("click",q);let u=0;c.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){if(u=o[0],o[0]<Date.now()){f.show({class:"error-svg",icon:"error-svg",theme:"dark",message:"Please choose a date in the future",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3});return}else c.disabled=!1}};m("#datetime-picker",b);function v(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),d=Math.floor(o%864e5%36e5/6e4),l=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:d,seconds:l}}function i(o){return String(o).padStart(2,"0")}function q(){const o=setInterval(()=>{const n=u-Date.now(),r=v(n);y.textContent=i(r.days),p.textContent=i(r.hours),g.textContent=i(r.minutes),S.textContent=i(r.seconds)},1e3);setTimeout(()=>{clearInterval(o)},u-Date.now()),h.disabled=!0,c.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map
