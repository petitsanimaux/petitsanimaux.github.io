"use strict";(self.webpackChunkwedding=self.webpackChunkwedding||[]).push([[998],{9793:function(e,t,n){n.r(t),n.d(t,{Head:function(){return M},default:function(){return b}});var r=n(7294),a=n(1476),o=n(5593),l=n(6952),s=(e,t)=>{const n=i(e);if(!t)return n;const r=i(t);return{left:n.left-r.left,top:n.top-r.top,right:n.right-r.left,bottom:n.bottom-r.top,width:n.width,height:n.height}},i=e=>{const t=e.getBoundingClientRect();let n=0,r=0,a=e.parentElement;for(;a;)n+=a.scrollLeft,r+=a.scrollTop,a=a.parentElement;const o=t.left+n,l=t.top+r;return{left:o,top:l,right:o+t.width,bottom:l+t.height,width:t.width,height:t.height}},c=(e,t,n)=>{const r=((e,t)=>{const n=window.getComputedStyle(e).getPropertyValue(`scroll-padding-${t}`);if("auto"===n)return 0;const r=`Unsupported scroll padding value, expected <length> or <percentage> value, received ${n}`;if(n.endsWith("px")){const e=parseInt(n);return u(!Number.isNaN(e),r),e}if(n.endsWith("%")){const t=parseInt(n);return u(!Number.isNaN(t),r),e.clientWidth/100*t}throw new d(r)})(e,n),a=((e,t)=>{const n=window.getComputedStyle(e).getPropertyValue(`scroll-margin-${t}`),r=`Unsupported scroll margin value, expected <length> value, received ${n}`;u(n.endsWith("px"),r);const a=parseInt(n);return u(!Number.isNaN(a),r),a})(t,n),o=s(t,t.parentElement);return Math.min(r+a,o[n])};function u(e,t){if(!e)throw new d(t)}var d=class extends Error{constructor(e){super(`[react-snap-carousel]: ${e}`)}},m=n(9689);var h=e=>{const{color:t=""}=e;return r.createElement("div",{"aria-label":"Arrow Button",className:"Arrow "+(e.isLeft?"LeftArrow":"RightArrow")+" "+t})};const p=e=>{const{isLeft:t,onClick:n}=e,a=t?"ScrollButton Left":"ScrollButton Right";return r.createElement(m.Z,{className:a,variant:"unstyled",onClick:n},r.createElement(h,{isLeft:t,color:"pink"}))},g=e=>{const{activePageIndex:t,scrollRef:n,goTo:a,snapPointIndexes:o,next:l,prev:i,pages:d}=(({axis:e="x",initialPages:t=[]}={})=>{const n="x"===e?"width":"height",a="x"===e?"scrollWidth":"scrollHeight",o="x"===e?"clientWidth":"clientHeight",l="x"===e?"left":"top",i="x"===e?"right":"bottom",d="x"===e?"scrollLeft":"scrollTop",[m,h]=(0,r.useState)(null),[{pages:p,activePageIndex:g},f]=(0,r.useState)({pages:t,activePageIndex:0}),E=(0,r.useCallback)((e=>{if(!m)return;if(Math.floor(m[a]-m[d])<=m[o])return void f({pages:e,activePageIndex:e.length-1});const t=Array.from(m.children),n=m.getBoundingClientRect(),r=e.map((e=>{const r=e[0],a=t[r];u(a instanceof HTMLElement,"Expected HTMLElement");const o=c(m,a,l),s=a.getBoundingClientRect()[l]-n[l]-o;return Math.abs(s)})),s=Math.min(...r),i=r.indexOf(s);f({pages:e,activePageIndex:i})}),[m,o,l,a,d]),v=(0,r.useCallback)((()=>{if(!m)return;const e=Array.from(m.children),t=m.getBoundingClientRect();let r;const a=e.reduce(((e,a,o)=>{u(a instanceof HTMLElement,"Expected HTMLElement");const d=e[e.length-1],h=s(a,a.parentElement);if(!d||h[i]-r>Math.ceil(t[n])){e.push([o]);const t=c(m,a,l);r=h[l]-t}else d.push(o);return e}),[]);E(a)}),[E,m,n,i,l,d]);(0,r.useLayoutEffect)((()=>{v()}),[v]),(0,r.useEffect)((()=>{const e=()=>{v()};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[v]),(0,r.useEffect)((()=>{if(!m)return;const e=()=>{E(p)};return m.addEventListener("scroll",e),()=>{m.removeEventListener("scroll",e)}}),[E,p,m]);const x=e=>{if(!m)return;const t=p[e];if(!t)return;const n=Array.from(m.children)[t[0]];if(!(n instanceof HTMLElement))return;const r=c(m,n,l);m.scrollTo({behavior:"smooth",[l]:s(n,n.parentElement)[l]-r})},w=(0,r.useMemo)((()=>new Set(p.map((e=>e[0])))),[p]);return{prev:()=>{x(g-1)},next:()=>{x(g+1)},goTo:x,refresh:v,pages:p,activePageIndex:g,snapPointIndexes:w,scrollRef:h}})(),m=t===d.length-1,h=0===t,g=e=>()=>{e?h?a(d.length-1):i():m?a(0):l()},f=d.length>0?d[0].length:0,E=Math.max(t*f-f,0),v=Math.min(E+f+f,e.children.length-1);return r.createElement("div",{className:"Carousel"},r.createElement("ul",{className:"CarouselContainer",ref:n,style:{display:"flex",overflow:"auto",scrollSnapType:"x mandatory"}},e.children.map(((e,t)=>r.createElement("li",{className:"CarouselImage",style:{scrollSnapAlign:o.has(t)?"start":""},key:t},t>=E&&t<=v&&r.createElement(r.Fragment,null,e))))),r.createElement(p,{isLeft:!0,onClick:g(!0)}),r.createElement(p,{isLeft:!1,onClick:g(!1)}))};var f=e=>0===e.children.length?null:r.createElement(g,e),E=n(1883),v=n(8032);var x=e=>{const t=(0,E.useStaticQuery)("1713222366"),{allGooglePhotosPhoto:n}=t,a=n.nodes[0];return r.createElement(v.G,{image:(0,v.c)(a.file),alt:"Crochet Nest Banner"})},w=n(6677),y=n(2124);var C=e=>{const{node:t}=e;return r.createElement("div",{className:"PetitsAnimauxCardContainer"},r.createElement("div",{className:"PetitsAnimauxCard"},r.createElement(w.Z,{className:"PetitsAnimauxCardLink",href:"/product/"+t.id,useTheming:!1},r.createElement("div",{className:"PetitsAnimauxCardImage"},r.createElement(v.G,{image:(0,v.c)(t.coverPhoto.file),alt:t.name})),r.createElement(l.H3,{className:"PetitsAnimauxCardTitle"},t.name),t.dimensions.map(((e,t)=>r.createElement("p",{className:"PetitsAnimauxDescription",key:t},e)))),r.createElement(y.Z,{stripeUrl:t.stripeUrl}," USD $",t.price)))};const P=e=>{const{productMetadata:t}=e,{metadata:n,products:a}=t;return 0===a.length?null:r.createElement("div",{key:t.type},r.createElement(l.H2,null,n.title),r.createElement(f,null,a.map((e=>r.createElement(C,{key:e.id,node:e})))))};var N=e=>{const{productTypeMapping:t,products:n,photos:a}=e,o=(0,r.useMemo)((()=>{const e={};n.forEach((n=>{const{category:r}=n;t[r]&&(e[r]||(e[r]=[]),e[r].push({...n,coverPhoto:a.find((e=>(e.description||"").trim()===n.coverPhotoId.trim())),dimensions:[n.length?"Length: "+n.length:null,n.width?"Width: "+n.width:null,n.height?"Height: "+n.height:null].filter((e=>e))}))}));return Object.keys(e).filter((t=>e[t].length>0)).map((n=>({type:n,products:e[n],metadata:t[n]})))}),[t,n,a]);return r.createElement("div",{className:"PetitsAnimauxSection"},r.createElement(x,null),r.createElement(l.H1,null,"Products"),o.map((e=>r.createElement(P,{key:e.type,productMetadata:e}))))};const L={"@context":"http://schema.org/","@type":"Organization",name:"CrochetNest",logo:"https://crochetnest.com/icons/icon-512x512.png",url:"https://crochetnest.com/",description:"Discover the unique items that Crochet Nests creates. We sell the best crochet products."};function M(e){return r.createElement(o.Z,Object.assign({},e,{data:{page:{name:"Crochet Nest Home"}}}))}var b=e=>{const{allGoogleSpreadsheetPetitsAnimauxCategories:t,allGoogleSpreadsheetPetitsAnimauxProducts:n,allGooglePhotosPhoto:o}=e.data,l=r.useMemo((()=>{const e={};return t.nodes.forEach((t=>{e[t.category]={title:t.title}})),e}),[t]),s=n.nodes,i=r.useMemo((()=>o.nodes.filter((e=>e.description))),[o]);return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement(N,Object.assign({},e,{productTypeMapping:l,products:s,photos:i}))),r.createElement("script",{type:"application/ld+json"},JSON.stringify(L)))}}}]);
//# sourceMappingURL=component---src-templates-home-js-48492699c9a0b6514610.js.map