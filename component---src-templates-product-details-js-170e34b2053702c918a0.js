"use strict";(self.webpackChunkcrochetnest=self.webpackChunkcrochetnest||[]).push([[538],{8799:function(e,t,n){var a=n(7294);t.Z=e=>{const{data:t}=e;return a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})}},8842:function(e,t,n){n.d(t,{FH:function(){return a},eE:function(){return h},mt:function(){return u},pu:function(){return p}});const a="https://crochetnest.com/",r="https://crochetnest.com/icons/icon-512x512.png",l="Crochet Nest",i={"@type":"Offer",availability:"http://schema.org/InStock",price:"",priceCurrency:"USD",hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",returnFees:"Customer pays",returnPolicyCountry:"US",returnMethod:["https://schema.org/ReturnByMail"]},shippingDetails:{"@type":"OfferShippingDetails",shippingRate:{"@type":"MonetaryAmount",value:"10.00",currency:"USD"},shippingDestination:{"@type":"DefinedRegion",addressCountry:"US"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:0,maxValue:1,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:1,maxValue:5,unitCode:"DAY"}}}},s={"@type":"Rating",ratingValue:5,bestRating:5},o={"@type":"Person",name:""},c={"@type":"Review",reviewRating:s,datePublished:"",reviewBody:"",author:o},d={"@context":"https://www.schema.org","@type":"Product",brand:l,logo:r,name:"",category:"",image:"",description:"",aggregateRating:{"@type":"AggregateRating",ratingValue:"5.0",reviewCount:95},material:"Cotton",review:[]},u={"@context":"http://schema.org/","@type":"Organization",name:l,logo:r,url:a,description:"Discover the unique items that Crochet Nests creates. We sell the best crochet products.",sameAs:["https://www.instagram.com/_crochetnest/","https://www.etsy.com/shop/LeBirb","https://crochetnests.etsy.com"]},m={"@context":"http://schema.org/","@type":"OfferCatalog",itemListElement:[]};const h=e=>{const t=function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("-")}(new Date((new Date).setFullYear((new Date).getFullYear()+1))),n=e.reviews.map((e=>{const t={...s,ratingValue:e.starRating,bestRating:e.starRating},n={...o,name:e.reviewer};return{...c,reviewRating:t,author:n,reviewBody:e.message,datePublished:e.dateReviewed}}));return{...d,name:e.title,category:"crochet",image:e.images.length>0?e.images:"",description:e.whyYoullLove+" "+e.description,url:`${a}/product/${e.urlSuffix}/`,offers:{...i,price:e.price,priceValidUntil:t},review:n}},p=e=>({...m,itemListElement:e.map(((e,t)=>({"@type":"ListItem",position:`${t+1}`,url:`${a}/product/${e.urlSuffix}/`,name:e.title})))})},834:function(e,t,n){n.r(t),n.d(t,{Head:function(){return te},default:function(){return ne}});var a=n(7294),r=n(5593),l=n(9334),i=n(3938);n(1883);var s=n(6952),o=n(4769),c=n(6677);var d=e=>{const{etsyLink:t}=e;return a.createElement(c.Z,{variant:"pink",href:t},"Buy on Etsy")};var u=e=>{const{0:t,1:n}=(0,a.useState)(!1),{0:r,1:l}=(0,a.useState)(!1),{cart:u,updateQuantity:m}=(0,a.useContext)(i.Z),{id:h,isBeta:p,price:g,priceId:f,etsyAffiliateLink:v,shouldRedirectToCart:y,title:x}=e;if(p)return r?a.createElement(a.Fragment,null,a.createElement(s.H3,{align:"center",size:"sm",fontSize:"16px"},"Thanks! Check back soon for updates on this item."),a.createElement(c.Z,{variant:"pink",href:"https://crochetnests.etsy.com"},"Check out other items on Etsy")):a.createElement(o.z,{variant:"pink",disabled:!0,onClick:()=>{!function(){window.dataLayer=window.dataLayer||[],window.dataLayer.push(arguments)}("event",`interested-${x}`),l(!0)}},"I'm interested in this");return a.createElement(a.Fragment,null,a.createElement(d,{etsyLink:v}))},m=n(8032),h=(e,t)=>{const n=p(e);if(!t)return n;const a=p(t);return{left:n.left-a.left,top:n.top-a.top,right:n.right-a.left,bottom:n.bottom-a.top,width:n.width,height:n.height}},p=e=>{const t=e.getBoundingClientRect();let n=0,a=0,r=e.parentElement;for(;r;)n+=r.scrollLeft,a+=r.scrollTop,r=r.parentElement;const l=t.left+n,i=t.top+a;return{left:l,top:i,right:l+t.width,bottom:i+t.height,width:t.width,height:t.height}},g=(e,t,n)=>{const a=((e,t)=>{const n=window.getComputedStyle(e).getPropertyValue(`scroll-padding-${t}`);if("auto"===n)return 0;const a=`Unsupported scroll padding value, expected <length> or <percentage> value, received ${n}`;if(n.endsWith("px")){const e=parseInt(n);return f(!Number.isNaN(e),a),e}if(n.endsWith("%")){const t=parseInt(n);return f(!Number.isNaN(t),a),e.clientWidth/100*t}throw new v(a)})(e,n),r=((e,t)=>{const n=window.getComputedStyle(e).getPropertyValue(`scroll-margin-${t}`),a=`Unsupported scroll margin value, expected <length> value, received ${n}`;f(n.endsWith("px"),a);const r=parseInt(n);return f(!Number.isNaN(r),a),r})(t,n),l=h(t,t.parentElement);return Math.min(a+r,l[n])};function f(e,t){if(!e)throw new v(t)}var v=class extends Error{constructor(e){super(`[react-snap-carousel]: ${e}`)}},y=n(9689);var x=e=>{const{color:t=""}=e;return a.createElement("div",{"aria-label":"Arrow Button",role:"button",className:`Arrow ${e.isLeft?"LeftArrow":"RightArrow"} ${t}`})};const E=e=>{const{isLeft:t,onClick:n}=e,r=t?"ScrollButton Left":"ScrollButton Right";return a.createElement(y.Z,{className:r,variant:"unstyled",onClick:n},a.createElement(x,{isLeft:t,color:"pink"}))},w=e=>{const{0:t,1:n}=(0,a.useState)(!1);(0,a.useEffect)((()=>{n(!0)}),[n]);const{activePageIndex:r,scrollRef:l,goTo:i,snapPointIndexes:s,next:o,prev:c,pages:d}=(({axis:e="x",initialPages:t=[]}={})=>{const n="x"===e?"width":"height",r="x"===e?"scrollWidth":"scrollHeight",l="x"===e?"clientWidth":"clientHeight",i="x"===e?"left":"top",s="x"===e?"right":"bottom",o="x"===e?"scrollLeft":"scrollTop",[c,d]=(0,a.useState)(null),[{pages:u,activePageIndex:m},p]=(0,a.useState)({pages:t,activePageIndex:0}),v=(0,a.useCallback)((e=>{if(!c)return;if(Math.floor(c[r]-c[o])<=c[l])return void p({pages:e,activePageIndex:e.length-1});const t=Array.from(c.children),n=c.getBoundingClientRect(),a=e.map((e=>{const a=e[0],r=t[a];f(r instanceof HTMLElement,"Expected HTMLElement");const l=g(c,r,i),s=r.getBoundingClientRect()[i]-n[i]-l;return Math.abs(s)})),s=Math.min(...a),d=a.indexOf(s);p({pages:e,activePageIndex:d})}),[c,l,i,r,o]),y=(0,a.useCallback)((()=>{if(!c)return;const e=Array.from(c.children),t=c.getBoundingClientRect();let a;const r=e.reduce(((e,r,l)=>{f(r instanceof HTMLElement,"Expected HTMLElement");const o=e[e.length-1],d=h(r,r.parentElement);if(!o||d[s]-a>Math.ceil(t[n])){e.push([l]);const t=g(c,r,i);a=d[i]-t}else o.push(l);return e}),[]);v(r)}),[v,c,n,s,i,o]);(0,a.useLayoutEffect)((()=>{y()}),[y]),(0,a.useEffect)((()=>{const e=()=>{y()};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[y]),(0,a.useEffect)((()=>{if(!c)return;const e=()=>{v(u)};return c.addEventListener("scroll",e),()=>{c.removeEventListener("scroll",e)}}),[v,u,c]);const x=e=>{if(!c)return;const t=u[e];if(!t)return;const n=Array.from(c.children)[t[0]];if(!(n instanceof HTMLElement))return;const a=g(c,n,i);c.scrollTo({behavior:"smooth",[i]:h(n,n.parentElement)[i]-a})},E=(0,a.useMemo)((()=>new Set(u.map((e=>e[0])))),[u]);return{prev:()=>{x(m-1)},next:()=>{x(m+1)},goTo:x,refresh:y,pages:u,activePageIndex:m,snapPointIndexes:E,scrollRef:d}})(),u=r===d.length-1,m=0===r,p=e=>()=>{e?m?i(d.length-1):c():u?i(0):o()},v=d.length>0?d[0].length:0,y=Math.max(r*v-v,0),x=Math.min(y+v+v,e.children.length-1);return a.createElement("div",{className:"Carousel"},a.createElement("ul",{className:"CarouselContainer",ref:l,style:{display:"flex",overflow:"auto",scrollSnapType:"x mandatory"}},e.children.map(((e,n)=>a.createElement("li",{className:"CarouselImage",style:t?{scrollSnapAlign:s.has(n)?"start":""}:null,key:n},n>=y&&n<=x&&a.createElement(a.Fragment,null,e))))),a.createElement(E,{isLeft:!0,onClick:p(!0)}),a.createElement(E,{isLeft:!1,onClick:p(!1)}))};var b=e=>0===e.children.length?null:a.createElement(w,e),C=n(5227),k=n(1103),P=n(6554),N=n(9228),L=n(3179),I=n(9133),R=n(5432),S=n(5893),[F,B]=(0,C.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[D,T]=(0,C.k)({strict:!1,name:"FormControlContext"});(0,P.G)((function(e,t){const n=(0,N.jC)("Form",e),r=(0,L.Lr)(e),{getRootProps:l,htmlProps:i,...s}=function(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:l,isReadOnly:i,...s}=e,o=(0,a.useId)(),c=t||`field-${o}`,d=`${c}-label`,u=`${c}-feedback`,m=`${c}-helptext`,[h,p]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),[v,y]=(0,a.useState)(!1),x=(0,a.useCallback)(((e={},t=null)=>({id:m,...e,ref:(0,k.lq)(t,(e=>{e&&f(!0)}))})),[m]),E=(0,a.useCallback)(((e={},t=null)=>({...e,ref:t,"data-focus":(0,R.PB)(v),"data-disabled":(0,R.PB)(l),"data-invalid":(0,R.PB)(r),"data-readonly":(0,R.PB)(i),id:void 0!==e.id?e.id:d,htmlFor:void 0!==e.htmlFor?e.htmlFor:c})),[c,l,v,r,i,d]),w=(0,a.useCallback)(((e={},t=null)=>({id:u,...e,ref:(0,k.lq)(t,(e=>{e&&p(!0)})),"aria-live":"polite"})),[u]),b=(0,a.useCallback)(((e={},t=null)=>({...e,...s,ref:t,role:"group","data-focus":(0,R.PB)(v),"data-disabled":(0,R.PB)(l),"data-invalid":(0,R.PB)(r),"data-readonly":(0,R.PB)(i)})),[s,l,v,r,i]),C=(0,a.useCallback)(((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!l,isFocused:!!v,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:h,setHasFeedbackText:p,hasHelpText:g,setHasHelpText:f,id:c,labelId:d,feedbackId:u,helpTextId:m,htmlProps:s,getHelpTextProps:x,getErrorMessageProps:w,getRootProps:b,getLabelProps:E,getRequiredIndicatorProps:C}}(r),o=(0,R.cx)("chakra-form-control",e.className);return(0,S.jsx)(D,{value:s,children:(0,S.jsx)(F,{value:n,children:(0,S.jsx)(I.m.div,{...l({},t),className:o,__css:n.container})})})})).displayName="FormControl",(0,P.G)((function(e,t){const n=T(),a=B(),r=(0,R.cx)("chakra-form__helper-text",e.className);return(0,S.jsx)(I.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:a.helperText,className:r})})).displayName="FormHelperText";var _=(0,P.G)((function(e,t){var n;const a=(0,N.mq)("FormLabel",e),r=(0,L.Lr)(e),{className:l,children:i,requiredIndicator:s=(0,S.jsx)(H,{}),optionalIndicator:o=null,...c}=r,d=T(),u=null!=(n=null==d?void 0:d.getLabelProps(c,t))?n:{ref:t,...c};return(0,S.jsxs)(I.m.label,{...u,className:(0,R.cx)("chakra-form__label",r.className),__css:{display:"block",textAlign:"start",...a},children:[i,(null==d?void 0:d.isRequired)?s:o]})}));_.displayName="FormLabel";var H=(0,P.G)((function(e,t){const n=T(),a=B();if(!(null==n?void 0:n.isRequired))return null;const r=(0,R.cx)("chakra-form__required-indicator",e.className);return(0,S.jsx)(I.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:a.requiredIndicator,className:r})}));H.displayName="RequiredIndicator";var j=(0,P.G)((function(e,t){const{children:n,placeholder:a,className:r,...l}=e;return(0,S.jsxs)(I.m.select,{...l,ref:t,className:(0,R.cx)("chakra-select",r),children:[a&&(0,S.jsx)("option",{value:"",children:a}),n]})}));function M(e){const{isDisabled:t,isInvalid:n,isReadOnly:a,isRequired:r,...l}=function(e){var t,n,a;const r=T(),{id:l,disabled:i,readOnly:s,required:o,isRequired:c,isInvalid:d,isReadOnly:u,isDisabled:m,onFocus:h,onBlur:p,...g}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&f.push(r.feedbackId);(null==r?void 0:r.hasHelpText)&&f.push(r.helpTextId);return{...g,"aria-describedby":f.join(" ")||void 0,id:null!=l?l:null==r?void 0:r.id,isDisabled:null!=(t=null!=i?i:m)?t:null==r?void 0:r.isDisabled,isReadOnly:null!=(n=null!=s?s:u)?n:null==r?void 0:r.isReadOnly,isRequired:null!=(a=null!=o?o:c)?a:null==r?void 0:r.isRequired,isInvalid:null!=d?d:null==r?void 0:r.isInvalid,onFocus:(0,R.v0)(null==r?void 0:r.onFocus,h),onBlur:(0,R.v0)(null==r?void 0:r.onBlur,p)}}(e);return{...l,disabled:t,readOnly:a,required:r,"aria-invalid":(0,R.Qm)(n),"aria-required":(0,R.Qm)(r),"aria-readonly":(0,R.Qm)(a)}}j.displayName="SelectField";var q=(0,P.G)(((e,t)=>{var n;const a=(0,N.jC)("Select",e),{rootProps:r,placeholder:l,icon:i,color:s,height:o,h:c,minH:d,minHeight:u,iconColor:m,iconSize:h,...p}=(0,L.Lr)(e),[g,f]=function(e,t){const n={},a={};for(const[r,l]of Object.entries(e))t.includes(r)?n[r]=l:a[r]=l;return[n,a]}(p,L.oE),v=M(f),y={width:"100%",height:"fit-content",position:"relative",color:s},x={paddingEnd:"2rem",...a.field,_focus:{zIndex:"unset",...null==(n=a.field)?void 0:n._focus}};return(0,S.jsxs)(I.m.div,{className:"chakra-select__wrapper",__css:y,...g,...r,children:[(0,S.jsx)(j,{ref:t,height:null!=c?c:o,minH:null!=d?d:u,placeholder:l,...v,__css:x,children:e.children}),(0,S.jsx)(O,{"data-disabled":(0,R.PB)(v.disabled),...(m||s)&&{color:m||s},__css:a.icon,...h&&{fontSize:h},children:i})]})}));q.displayName="Select";var $=e=>(0,S.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,S.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),A=(0,I.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),O=e=>{const{children:t=(0,S.jsx)($,{}),...n}=e,r=(0,a.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,S.jsx)(A,{...n,className:"chakra-select__icon-wrapper",children:(0,a.isValidElement)(t)?r:null})};O.displayName="SelectIcon";var z=e=>{const{label:t,value:n,placeholder:r,values:l,onChange:i}=e;return a.createElement(a.Fragment,null,a.createElement(_,null,t,a.createElement(q,{bg:"white",value:n,variant:"filled",placeholder:r,onChange:e=>i(e.target.value)},l.map((e=>a.createElement("option",{bg:"white",key:e.value,value:e.value},e.name))))))},V=n(2489),Y=n(2757),G=n(2675);const U=()=>a.createElement(V.K,null,a.createElement(Y.X,{as:"h4",size:"md"},"Shipping"),a.createElement(G.x,null,"Made to order, will ship in 1 - 2 weeks."),a.createElement(G.x,null,"Note: Each item is made with highest care and attention to details. However due to the nature of handmade items, slight differences may show from the pictures."),a.createElement(G.x,null,"Ships from California!"),a.createElement(G.x,null,a.createElement("i",null,"Gentle use is recommended"))),W=e=>{const{photos:t,title:n}=e;return a.createElement("div",{className:"ProductDetailsPhotoCarousel"},a.createElement(b,null,t.map((e=>a.createElement("div",{className:"ProductDetailsSecondaryPhoto",key:e},a.createElement(m.G,{key:e,image:e,alt:n}))))))},Z=e=>{const{id:t,title:n,whyYoullLove:r,price:l,priceIds:i,etsyAffiliateLink:s,length:o,width:c,height:d,isBeta:m}=e,{0:h,1:p}=(0,a.useState)(m?0:i[0].id);return a.createElement("div",{className:"ProductDetailsProductDetails"},a.createElement(V.K,{className:"ProductDetailsPricingDetails"},a.createElement(Y.X,{as:"h1",size:"lg"},n),a.createElement(Y.X,{as:"h2",size:"md",variant:"nonBoldHeading"},"$",parseFloat(l).toFixed(2),"+ USD"),i.length>1&&a.createElement(z,{label:"Variations",value:h,placeholder:"Option",values:i.map((e=>({name:e.nickname,value:e.id}))),onChange:e=>p(e)}),a.createElement(u,{isBeta:m,title:n,id:t,priceId:h,shouldRedirectToCart:!0,etsyAffiliateLink:s}),a.createElement(Y.X,{as:"h3",size:"md"},"Why You'll Love It"),a.createElement(G.x,{as:"p",variant:"nonBoldHeading",className:"ProductDescription"},r),(c||o||d)&&a.createElement(a.Fragment,null,a.createElement(Y.X,{as:"h3",size:"md"},"Dimensions & More Info"),o&&a.createElement(G.x,{as:"p",variant:"nonBoldHeading",className:"ProductDescription"},"Length: ",o),c&&a.createElement(G.x,{as:"p",variant:"nonBoldHeading",className:"ProductDescription"},"Width: ",c),d&&a.createElement(G.x,{as:"p",variant:"nonBoldHeading",className:"ProductDescription"},"Height: ",d))),a.createElement(V.K,null,a.createElement(U,null)))},Q=e=>{const{title:t,gatsbyImages:n,isBeta:r}=e;return a.createElement("div",{className:"ProductDetailsPageContainer"},!r&&a.createElement(W,{photos:n,title:t}),a.createElement(Z,e))};var X=e=>{const{product:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement(Q,t)))},K=n(8799),J=n(8842),ee=n(6090);function te(e){const t=(0,ee.y)(e.data);let n,l="Cannot find the product";t.length>0&&(l=t[0].title),!t[0].isBeta&&t[0].gatsbyImages&&(n=`https://crochetnest.com${t[0].gatsbyImages[0].images.fallback.src}`);const i={page:{name:l,description:t[0].whyYoullLove?t[0].whyYoullLove:t[0].description,image:n,keywords:t[0].tags.join(",")}},s=`${J.FH}product/${t[0].urlSuffix}/`;return a.createElement(r.Z,Object.assign({},e,{data:i,canonicalUrl:s}))}var ne=e=>{const t=(0,ee.y)(e.data);if(0===t.length)return a.createElement(a.Fragment,null,"Cannot find the product.");const n=t[0];return a.createElement(a.Fragment,null,a.createElement(X,{product:n}),a.createElement(K.Z,{data:(0,J.eE)(n)}),a.createElement(K.Z,{data:J.mt}))}},2675:function(e,t,n){n.d(t,{x:function(){return c}});var a=n(6554),r=n(9228),l=n(3179),i=n(9133),s=n(5432);var o=n(5893),c=(0,a.G)((function(e,t){const n=(0,r.mq)("Text",e),{className:a,align:c,decoration:d,casing:u,...m}=(0,l.Lr)(e),h=function(e){const t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,o.jsx)(i.m.p,{ref:t,className:(0,s.cx)("chakra-text",e.className),...h,...m,__css:n})}));c.displayName="Text"}}]);
//# sourceMappingURL=component---src-templates-product-details-js-170e34b2053702c918a0.js.map