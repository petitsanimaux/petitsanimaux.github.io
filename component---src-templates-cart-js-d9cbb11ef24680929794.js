"use strict";(self.webpackChunkcrochetnest=self.webpackChunkcrochetnest||[]).push([[681],{9140:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return S}});var r=n(7294),a=(n(5593),n(6952)),i=n(5785);var c=e=>r.createElement("button",Object.assign({className:"Button"},e),e.children),s="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,d=function(e){return null!==l||(l=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(u),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(s,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();r&&e?console.warn(u):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(s).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else t(null)}))),l},m=Promise.resolve().then((function(){return d(null)})),p=!1;m.catch((function(e){p||console.warn(e)}));const f="price_1Na90aBLdrhwtT8MK1dBtUmy";var v=function(e){const{lineItems:t}=e,[n,a]=r.useState(null);return r.useEffect((()=>{!async function(){const e=await function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];p=!0;var r=Date.now();return m.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.52.1",startTime:t})}(r,n),r}(e,t,r)}))}("pk_live_51MbzZWBLdrhwtT8MQVnLB1gU0MwJOrOtPZDvLSoUNHryAm0P1je9wct7pWxtNmEhhxtOazi64BrcuF7jptOvZnVj00fSmORI80");a(e)}()}),[]),r.createElement(c,{disabled:!n||0===t.length,onClick:async()=>{if(!n)return;const{error:e}=await n.redirectToCheckout({lineItems:[{price:f,quantity:1}].concat((0,i.Z)(t)),mode:"payment",billingAddressCollection:"required",shippingAddressCollection:{allowedCountries:["US"]},successUrl:"https://crochetnest.com/success",cancelUrl:"https://crochetnest.com/"})}},"Checkout")},w=n(8032);var y=e=>{const{product:t,updateQuantity:n,priceId:i,id:c,quantity:s}=e,{name:o,price:u}=t;return r.createElement("div",{className:"PetitsAnimauxCartItem"},r.createElement("div",{className:"PetitsAnimauxCardImage"},r.createElement(w.G,{image:t.gatsbyImages[0],alt:o})),r.createElement("div",{className:"PetitsAnimauxCardTitleHeader"},r.createElement(a.H2,null,o),r.createElement(a.H3,null,"$",u)),r.createElement("div",{className:"PetitsAnimauxCartQuantityControllerContainer"},r.createElement("button",{className:"PetitsAnimauxCartQuantityButton",onClick:()=>{n(i,c,s-1)}},"-"),r.createElement("div",{className:"PetitsAnimauxCartQuantityInput"},s),r.createElement("button",{className:"PetitsAnimauxCartQuantityButton",onClick:()=>{n(i,c,s+1)}},"+")))},h=n(3938);var E=e=>{const{products:t}=e,{cart:n,updateQuantity:i}=(0,r.useContext)(h.Z);if(0===n.length)return r.createElement("div",{className:"CartPage"},"Add some items to your cart!");const c=n.reduce(((e,n)=>{const r=t.find((e=>e.id===n.id));return e+n.quantity*r.price}),0);return r.createElement("div",{className:"CartPage"},n.map((e=>{const{id:n,priceId:a,quantity:c}=e,s=t.find((e=>e.id===n));return r.createElement(y,{key:n,id:n,priceId:a,quantity:c,product:s,updateQuantity:i})})),r.createElement("div",{className:"TotalPrice"},r.createElement(a.H2,null,"Total: $",c)),r.createElement(v,{lineItems:n.map((e=>({price:e.priceId,quantity:e.quantity})))}))},C=n(9334),g=n(6090);function b(e){}var S=e=>{const t=(0,g.y)(e.data);return r.createElement(C.Z,null,r.createElement(E,{products:t}))}}}]);
//# sourceMappingURL=component---src-templates-cart-js-d9cbb11ef24680929794.js.map