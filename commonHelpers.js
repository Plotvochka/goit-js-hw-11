import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const d="44853483-1a0be7ea41176b8922a4359bd",f="https://pixabay.com/api/";function m(t){const r=`${f}?key=${d}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Failed to fetch images");return o.json()})}function p(t){const r=document.getElementById("gallery"),o=t.map(s=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
                <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
            </a>
            <div class="info">
                <p>Likes: <br /><span>${s.likes}</span></p>
                <p>Views: <br /><span>${s.views}</span></p>
                <p>Comments: <br /><span>${s.comments}</span></p>
                <p>Downloads: <br /><span>${s.downloads}</span></p>
            </div>
        </li>
    `).join("");r.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){const t=document.getElementById("gallery");t.innerHTML=""}function g(){const t=document.getElementById("loader");t.style.display="block"}function c(){const t=document.getElementById("loader");t.style.display="none"}c();const i=document.getElementById("search-form");i.addEventListener("submit",function(t){t.preventDefault();const r=i.elements.query.value.trim();if(console.log(r),r===""){l.warning({title:"Warning",message:"Please enter a search query."});return}y(),g(),m(r).then(o=>{if(o.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(o.hits)}).catch(o=>{l.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{c()})});
//# sourceMappingURL=commonHelpers.js.map
