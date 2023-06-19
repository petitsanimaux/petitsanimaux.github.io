"use strict";(self.webpackChunkwedding=self.webpackChunkwedding||[]).push([[102],{2032:function(e,t,n){var r=n(7294);t.Z=e=>r.createElement("button",Object.assign({className:"Button"},e),e.children)},3225:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(3938),o=n(2032);var c=e=>{const{0:t,1:n}=(0,r.useState)(!1),{cart:c,updateQuantity:i}=(0,r.useContext)(a.Z),{id:s,priceId:l}=e;if(!l)return null;const u=t?"Adding":"Add to cart";return r.createElement(o.Z,{disabled:t,onClick:()=>{const e=c.find((e=>e.priceId===l));i(l,s,e?e.quantity+1:1),n(!0),setTimeout((()=>{n(!1)}),400)}},u)};var i=e=>{const{id:t,priceId:n}=e;return r.createElement(c,{priceId:n,id:t})}},8799:function(e,t,n){var r=n(7294);t.Z=e=>{const{data:t}=e;return r.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})}},2271:function(e,t,n){n.r(t),n.d(t,{Head:function(){return I},default:function(){return M}});var r=n(7294),a=n(5953),o=n(5593),c=n(6952),i=(e,t)=>{const n=s(e);if(!t)return n;const r=s(t);return{left:n.left-r.left,top:n.top-r.top,right:n.right-r.left,bottom:n.bottom-r.top,width:n.width,height:n.height}},s=e=>{const t=e.getBoundingClientRect();let n=0,r=0,a=e.parentElement;for(;a;)n+=a.scrollLeft,r+=a.scrollTop,a=a.parentElement;const o=t.left+n,c=t.top+r;return{left:o,top:c,right:o+t.width,bottom:c+t.height,width:t.width,height:t.height}},l=(e,t,n)=>{const r=((e,t)=>{const n=window.getComputedStyle(e).getPropertyValue(`scroll-padding-${t}`);if("auto"===n)return 0;const r=`Unsupported scroll padding value, expected <length> or <percentage> value, received ${n}`;if(n.endsWith("px")){const e=parseInt(n);return u(!Number.isNaN(e),r),e}if(n.endsWith("%")){const t=parseInt(n);return u(!Number.isNaN(t),r),e.clientWidth/100*t}throw new d(r)})(e,n),a=((e,t)=>{const n=window.getComputedStyle(e).getPropertyValue(`scroll-margin-${t}`),r=`Unsupported scroll margin value, expected <length> value, received ${n}`;u(n.endsWith("px"),r);const a=parseInt(n);return u(!Number.isNaN(a),r),a})(t,n),o=i(t,t.parentElement);return Math.min(r+a,o[n])};function u(e,t){if(!e)throw new d(t)}var d=class extends Error{constructor(e){super(`[react-snap-carousel]: ${e}`)}},m=n(9689);var p=e=>{const{color:t=""}=e;return r.createElement("div",{"aria-label":"Arrow Button",role:"button",className:"Arrow "+(e.isLeft?"LeftArrow":"RightArrow")+" "+t})};const h=e=>{const{isLeft:t,onClick:n}=e,a=t?"ScrollButton Left":"ScrollButton Right";return r.createElement(m.Z,{className:a,variant:"unstyled",onClick:n},r.createElement(p,{isLeft:t,color:"pink"}))},g=e=>{const{0:t,1:n}=(0,r.useState)(!1);(0,r.useEffect)((()=>{n(!0)}),[n]);const{activePageIndex:a,scrollRef:o,goTo:c,snapPointIndexes:s,next:d,prev:m,pages:p}=(({axis:e="x",initialPages:t=[]}={})=>{const n="x"===e?"width":"height",a="x"===e?"scrollWidth":"scrollHeight",o="x"===e?"clientWidth":"clientHeight",c="x"===e?"left":"top",s="x"===e?"right":"bottom",d="x"===e?"scrollLeft":"scrollTop",[m,p]=(0,r.useState)(null),[{pages:h,activePageIndex:g},f]=(0,r.useState)({pages:t,activePageIndex:0}),E=(0,r.useCallback)((e=>{if(!m)return;if(Math.floor(m[a]-m[d])<=m[o])return void f({pages:e,activePageIndex:e.length-1});const t=Array.from(m.children),n=m.getBoundingClientRect(),r=e.map((e=>{const r=e[0],a=t[r];u(a instanceof HTMLElement,"Expected HTMLElement");const o=l(m,a,c),i=a.getBoundingClientRect()[c]-n[c]-o;return Math.abs(i)})),i=Math.min(...r),s=r.indexOf(i);f({pages:e,activePageIndex:s})}),[m,o,c,a,d]),v=(0,r.useCallback)((()=>{if(!m)return;const e=Array.from(m.children),t=m.getBoundingClientRect();let r;const a=e.reduce(((e,a,o)=>{u(a instanceof HTMLElement,"Expected HTMLElement");const d=e[e.length-1],p=i(a,a.parentElement);if(!d||p[s]-r>Math.ceil(t[n])){e.push([o]);const t=l(m,a,c);r=p[c]-t}else d.push(o);return e}),[]);E(a)}),[E,m,n,s,c,d]);(0,r.useLayoutEffect)((()=>{v()}),[v]),(0,r.useEffect)((()=>{const e=()=>{v()};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[v]),(0,r.useEffect)((()=>{if(!m)return;const e=()=>{E(h)};return m.addEventListener("scroll",e),()=>{m.removeEventListener("scroll",e)}}),[E,h,m]);const x=e=>{if(!m)return;const t=h[e];if(!t)return;const n=Array.from(m.children)[t[0]];if(!(n instanceof HTMLElement))return;const r=l(m,n,c);m.scrollTo({behavior:"smooth",[c]:i(n,n.parentElement)[c]-r})},y=(0,r.useMemo)((()=>new Set(h.map((e=>e[0])))),[h]);return{prev:()=>{x(g-1)},next:()=>{x(g+1)},goTo:x,refresh:v,pages:h,activePageIndex:g,snapPointIndexes:y,scrollRef:p}})(),g=a===p.length-1,f=0===a,E=e=>()=>{e?f?c(p.length-1):m():g?c(0):d()},v=p.length>0?p[0].length:0,x=Math.max(a*v-v,0),y=Math.min(x+v+v,e.children.length-1);return r.createElement("div",{className:"Carousel"},r.createElement("ul",{className:"CarouselContainer",ref:o,style:{display:"flex",overflow:"auto",scrollSnapType:"x mandatory"}},e.children.map(((e,n)=>r.createElement("li",{className:"CarouselImage",style:t?{scrollSnapAlign:s.has(n)?"start":""}:null,key:n},n>=x&&n<=y&&r.createElement(r.Fragment,null,e))))),r.createElement(h,{isLeft:!0,onClick:E(!0)}),r.createElement(h,{isLeft:!1,onClick:E(!1)}))};var f=e=>0===e.children.length?null:r.createElement(g,e),E=n(1883),v=n(3225),x=n(8032);const y=e=>{const{coverPhoto:t,name:n}=e;return r.createElement("div",{className:"PetitsAnimauxCardImage"},r.createElement(x.G,{image:(0,x.c)(t.file),alt:n}))},w=e=>{const{dimensions:t}=e;return r.createElement(r.Fragment,null,t.map(((e,t)=>r.createElement("p",{className:"PetitsAnimauxDescription",key:t},e))))};var C=e=>{const{node:t}=e,{id:n,price:a,priceId:o,stripeUrl:i}=t,s=t.name.trim(),l=("/product/"+n).trim();return r.createElement("div",{className:"PetitsAnimauxCardContainer"},r.createElement("div",{className:"PetitsAnimauxCard"},r.createElement(E.Link,{className:"PetitsAnimauxCardLink",to:l},r.createElement(y,{coverPhoto:t.coverPhoto,name:s}),r.createElement(c.H3,{className:"PetitsAnimauxCardTitle"},s),r.createElement(w,{dimensions:t.dimensions})),r.createElement(v.Z,{stripeUrl:i,price:a,priceId:o,id:n})))};const N=e=>{const{productMetadata:t}=e;if(!t)return null;const{products:n}=t;return 0===n.length?null:r.createElement("div",{key:t.type},r.createElement(f,null,n.map((e=>r.createElement(C,{key:e.id,node:e})))))};var P=e=>{const{categoryName:t,productTypeMapping:n,products:a,photos:o}=e,i=(0,r.useMemo)((()=>{const e={};a.forEach((t=>{const{category:r}=t;n[r]&&(e[r]||(e[r]=[]),e[r].push({...t,coverPhoto:o.find((e=>(e.description||"").trim()===t.coverPhotoId.trim())),dimensions:[t.length?"Length: "+t.length:null,t.width?"Width: "+t.width:null,t.height?"Height: "+t.height:null].filter((e=>e))}))}));return Object.keys(e).filter((t=>e[t].length>0)).map((t=>({type:t,products:e[t],metadata:n[t]})))}),[n,a,o]);return r.createElement("div",{className:"CategoryPage"},r.createElement(c.H1,null,"Shop for ",t),r.createElement(N,{productMetadata:i[0]}))},L=n(8799);const b={"@context":"http://schema.org/","@type":"Organization",name:"CrochetNest",logo:"https://crochetnest.com/icons/icon-512x512.png",url:"https://crochetnest.com/",description:"Discover the unique items that Crochet Nests creates. We sell the best crochet products."};function I(e){const t={page:{name:e.pageContext.categoryName}};return r.createElement(o.Z,Object.assign({},e,{data:t}))}var M=e=>{const{allGoogleSpreadsheetPetitsAnimauxCategories:t,allGoogleSpreadsheetPetitsAnimauxProducts:n,allGooglePhotosPhoto:o}=e.data,c=r.useMemo((()=>{const e={};return t.nodes.forEach((t=>{e[t.category]={title:t.title}})),e}),[t]),i=n.nodes,s=r.useMemo((()=>o.nodes.filter((e=>e.description))),[o]);return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement(P,Object.assign({},e,{categoryName:e.pageContext.categoryName,productTypeMapping:c,products:i,photos:s}))),r.createElement(L.Z,{data:b}))}}}]);
//# sourceMappingURL=component---src-templates-category-js-466a814c64c34be8c896.js.map