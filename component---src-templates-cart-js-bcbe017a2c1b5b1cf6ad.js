"use strict";(self.webpackChunkwedding=self.webpackChunkwedding||[]).push([[681],{6090:function(e,t,n){n.d(t,{i:function(){return r}});const r=(e,t)=>({...e,coverPhoto:t.find((t=>(t.description||"").trim()===e.coverPhotoId.trim())),dimensions:[e.length?"Length: "+e.length:null,e.width?"Width: "+e.width:null,e.height?"Height: "+e.height:null].filter((e=>e))})},3442:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return x}});var r=n(7294),i=n(5593),a=n(5785),c="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,u=function(e){return null!==s||(s=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(l),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(c,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();r&&e?console.warn(l):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(c).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(i){return void n(i)}else t(null)}))),s},d=Promise.resolve().then((function(){return u(null)})),m=!1;d.catch((function(e){m||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m=!0;var r=Date.now();return d.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.52.1",startTime:t})}(r,n),r}(e,t,r)}))};const h="price_1NAPJrBLdrhwtT8MG1ExlgPh";var f=function(e){const{lineItems:t}=e,[n,i]=r.useState(null);return r.useEffect((()=>{!async function(){const e=await p("pk_live_51MbzZWBLdrhwtT8MQVnLB1gU0MwJOrOtPZDvLSoUNHryAm0P1je9wct7pWxtNmEhhxtOazi64BrcuF7jptOvZnVj00fSmORI80");i(e)}()}),[]),r.createElement("button",{disabled:!n||0===t.length,onClick:async()=>{if(!n)return;const{error:e}=await n.redirectToCheckout({lineItems:[{price:h,quantity:1}].concat((0,a.Z)(t)),mode:"payment",billingAddressCollection:"required",shippingAddressCollection:{allowedCountries:["US"]},successUrl:"https://crochetnest.com/success",cancelUrl:"https://crochetnest.com/cancel"})}},"Buy")},w=n(6952),v=n(8032);var g=e=>{const{product:t,updateQuantity:n,priceId:i,id:a,quantity:c}=e,{coverPhoto:o,name:l,price:s}=t;return r.createElement("div",{className:"PetitsAnimauxCartItem"},r.createElement("div",{className:"PetitsAnimauxCardImage"},r.createElement(v.G,{image:(0,v.c)(o.file),alt:l})),r.createElement("div",{className:"PetitsAnimauxCardTitleHeader"},r.createElement(w.H2,null,l),r.createElement(w.H3,null,"$",s)),r.createElement("div",{className:"PetitsAnimauxCartQuantityController"},r.createElement("button",{onClick:()=>{n(i,a,c-1)}},"-"),r.createElement("span",null,c),r.createElement("button",{onClick:()=>{n(i,a,c+1)}},"+")),r.createElement("button",{onClick:()=>{n(i,a,0)}},"Delete"))},E=n(4615),y=n(3938);var P=e=>{const{products:t}=e,n=(0,E.ZP)(E.hn.CART),{cart:i,updateQuantity:a}=(0,r.useContext)(y.Z);return n?r.createElement("div",null,i.map((e=>{const{id:n,priceId:i,quantity:a}=e,c=t.find((e=>e.id===n));return r.createElement(g,{key:n,id:n,priceId:i,quantity:a,product:c})})),r.createElement(f,{lineItems:i.map((e=>({price:e.priceId,quantity:e.quantity})))})):null},S=n(5953),C=n(6090);function b(e){const{allGoogleSpreadsheetPetitsAnimauxProducts:t}=e.data,n={page:{name:t.nodes[0].name}};return r.createElement(i.Z,Object.assign({},e,{data:n}))}var x=e=>{const{allGoogleSpreadsheetPetitsAnimauxProducts:t,allGooglePhotosPhoto:n}=e.data,i=t.nodes.map((e=>(0,C.i)(e,n.nodes)));return r.createElement(S.Z,null,r.createElement(P,{products:i}))}}}]);
//# sourceMappingURL=component---src-templates-cart-js-bcbe017a2c1b5b1cf6ad.js.map