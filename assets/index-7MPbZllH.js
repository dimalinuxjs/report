(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s=document.querySelector(".report__tbody"),l=document.querySelector(".button"),a=[{id:0,name:"Чиликин"},{id:1,name:"Беспалов"},{id:2,name:"Ширин"},{id:3,name:"Ковшар"},{id:4,name:"Жалдак"},{id:5,name:"Поляков"},{id:6,name:"Рыбникова"},{id:7,name:"Сахаров"},{id:8,name:"Пушкин"},{id:9,name:"Кузнецов"},{id:10,name:"Демидов"},{id:11,name:"Дьяченко"},{id:12,name:"Котельников"},{id:13,name:"Фаустов"},{id:14,name:"Попов"},{id:15,name:"Милютин"},{id:16,name:"Романцев"},{id:17,name:"Хоменко"},{id:18,name:"Кочетова"},{id:19,name:"Макрушина"},{id:20,name:"Тихонова"}];let i=[];function m(n){i.includes(n)?i=i.filter(t=>t!=n):i.push(n)}function u(){const n=i.length<a.length?`
    Отсутствуют:

    ${a.filter(t=>!i.includes(t.id)).map(t=>`- ${t.name}

`).join("")}
    `:"Присутствуют все";navigator.clipboard.writeText(n.trim()),alert("Скопировано")}function p(n){s.innerHTML="",n.forEach(t=>{const o=document.createElement("tr");o.className="report__tr",o.innerHTML=`
        <td class="report__td report__td_name">
            ${t.name}
        </td>
        <td class="report__td report__td_here">
            <input class="report__here" type="checkbox" data-id="${t.id}"/>              
        </td>
          `,s.appendChild(o),o.querySelector(".report__here").addEventListener("change",e=>{m(e.target.dataset.id)})})}p(a);l.addEventListener("click",()=>u());
