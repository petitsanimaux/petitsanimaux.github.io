"use strict";(self.webpackChunkwedding=self.webpackChunkwedding||[]).push([[681],{6090:function(e,t,n){n.d(t,{i:function(){return r}});const r=(e,t)=>({...e,coverPhoto:t.find((t=>(t.description||"").trim()===e.coverPhotoId.trim())),dimensions:[e.length?"Length: "+e.length:null,e.width?"Width: "+e.width:null,e.height?"Height: "+e.height:null].filter((e=>e))})},2032:function(e,t,n){var r=n(7294);t.Z=e=>r.createElement("button",Object.assign({className:"Button"},e),e.children)},3442:function(e,t,n){n.r(t),n.d(t,{Head:function(){return x},default:function(){return A}});var r=n(7294),a=n(5593),i=n(5785),c=n(2032),o="https://js.stripe.com/v3",l=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,s="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,d=function(e){return null!==u||(u=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(s),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(l.test(n.src))return n}return null}();r&&e?console.warn(s):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else t(null)}))),u},m=Promise.resolve().then((function(){return d(null)})),p=!1;m.catch((function(e){p||console.warn(e)}));var h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];p=!0;var r=Date.now();return m.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.52.1",startTime:t})}(r,n),r}(e,t,r)}))};const f="price_1NAPJrBLdrhwtT8MG1ExlgPh";var v=function(e){const{lineItems:t}=e,[n,a]=r.useState(null);return r.useEffect((()=>{!async function(){const e=await h("pk_live_51MbzZWBLdrhwtT8MQVnLB1gU0MwJOrOtPZDvLSoUNHryAm0P1je9wct7pWxtNmEhhxtOazi64BrcuF7jptOvZnVj00fSmORI80");a(e)}()}),[]),r.createElement(c.Z,{disabled:!n||0===t.length,onClick:async()=>{if(!n)return;const{error:e}=await n.redirectToCheckout({lineItems:[{price:f,quantity:1}].concat((0,i.Z)(t)),mode:"payment",billingAddressCollection:"required",shippingAddressCollection:{allowedCountries:["US"]},successUrl:"https://crochetnest.com/success",cancelUrl:"https://crochetnest.com/cancel"})}},"Checkout")},w=n(6952),g=n(8032);var E=e=>{const{product:t,updateQuantity:n,priceId:a,id:i,quantity:c}=e,{coverPhoto:o,name:l,price:s}=t;return r.createElement("div",{className:"PetitsAnimauxCartItem"},r.createElement("div",{className:"PetitsAnimauxCardImage"},r.createElement(g.G,{image:(0,g.c)(o.file),alt:l})),r.createElement("div",{className:"PetitsAnimauxCardTitleHeader"},r.createElement(w.H2,null,l),r.createElement(w.H3,null,"$",s)),r.createElement("div",{className:"PetitsAnimauxCartQuantityController"},r.createElement("button",{onClick:()=>{n(a,i,c-1)}},"-"),r.createElement("span",null,c),r.createElement("button",{onClick:()=>{n(a,i,c+1)}},"+")),r.createElement("button",{onClick:()=>{n(a,i,0)}},"Delete"))},y=n(4615),P=n(3938);var C=e=>{const{products:t}=e,n=(0,y.ZP)(y.hn.CART),{cart:a,updateQuantity:i}=(0,r.useContext)(P.Z);return n?0===a.length?r.createElement("div",{className:"CartPage"},"Add some items to your cart!"):r.createElement("div",{className:"CartPage"},a.map((e=>{const{id:n,priceId:a,quantity:c}=e,o=t.find((e=>e.id===n));return r.createElement(E,{key:n,id:n,priceId:a,quantity:c,product:o,updateQuantity:i})})),r.createElement(v,{lineItems:a.map((e=>({price:e.priceId,quantity:e.quantity})))})):null},S=n(5953),b=n(6090);function x(e){const{allGoogleSpreadsheetPetitsAnimauxProducts:t}=e.data,n={page:{name:t.nodes[0].name}};return r.createElement(a.Z,Object.assign({},e,{data:n}))}var A=e=>{const{allGoogleSpreadsheetPetitsAnimauxProducts:t,allGooglePhotosPhoto:n}=e.data,a=t.nodes.map((e=>(0,b.i)(e,n.nodes)));return r.createElement(S.Z,null,r.createElement(C,{products:a}))}}}]);
//# sourceMappingURL=component---src-templates-cart-js-fc5079a3cc407be787cb.js.map