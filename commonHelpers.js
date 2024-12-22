import"./assets/mobileMenu-cedb4834.js";import{A as r}from"./assets/vendor-8f98089f.js";const s="/evoplay-beachside-town/assets/sprite-85c88726.svg",i=[{title:"How do I start playing the game?",content:"Simply download Beachside Town from Google Play, create your town, and begin merging items to build your dream beach escape!"},{title:"Is the game free to play?",content:"Yes, Beachside Town is free to download and play with optional in-app purchases for faster progress and special items."},{title:"Can I play the game offline?",content:"Yes, you can enjoy Beachside Town without an internet connection. Play anytime and anywhere!"},{title:"How do I unlock new areas in the game?",content:"As you progress through levels, completing tasks and merging resources, you`ll unlock new areas and exciting beachside locations to build and explore."},{title:"What are quests in Beachside Town?",content:"Quests are tasks given by the characters in your town that you can complete for rewards like resources, decorations, and new locations."},{title:"Can I customize my beach town?",content:"Absolutely! You can design your town by placing buildings, decorating with items, and shaping the landscape to your liking."}],c=document.querySelector("ul.faq-list");function l(e){c.innerHTML=p(e)}const u=`<button class="arrow-button" aria-label="arrow for open or close text"><svg class="arrow-icon js-down" width="20" height="10"><use href="${s}#arrow-accordion"></use></svg></button>`;function d({content:e}){return`<div class="faq-list-content-box ac-panel"><p class="faq-list-content ac-text">${e}</p></div>`}function p(e){let t="";return e.forEach(a=>{const o=d(a),n=`<li class="faq-list-item ac"><div class="faq-list-header-box ac-header ac-trigger"><h5 class="faq-list-header">${a.title}</h5>${u}</div>${o}</li>`;t+=n}),t}const h={showMultiple:!0,beforeOpen:function(e){e.querySelector(".js-down").setAttribute("transform","rotate(180)")},beforeClose:function(e){e.querySelector(".js-down").setAttribute("transform","rotate(0)")}};l(i);new r(".accordion-container-faq",h);
//# sourceMappingURL=commonHelpers.js.map
