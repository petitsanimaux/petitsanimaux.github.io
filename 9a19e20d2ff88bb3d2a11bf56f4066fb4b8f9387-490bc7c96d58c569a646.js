"use strict";(self.webpackChunkwedding=self.webpackChunkwedding||[]).push([[176],{8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return h},M:function(){return w},P:function(){return N},_:function(){return o},a:function(){return l},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return i}});var n=a(7294),r=(a(2369),a(5697)),s=a.n(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),l({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,g);return n.createElement(n.Fragment,null,n.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:i}=e,c=o(e,f);return n.createElement("img",l({},c,{decoding:"async",loading:r,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=o(e,y);const i=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(v,l({},s,t,{sizes:i,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:i})})),c):c};var b;v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const C=["fallback"],N=function(e){let{fallback:t}=e,a=o(e,C);return t?n.createElement(E,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",l({},a))};N.displayName="Placeholder",N.propTypes={fallback:r.string,sources:null==(b=E.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const w=function(e){return n.createElement(n.Fragment,null,n.createElement(E,l({},e)),n.createElement("noscript",null,n.createElement(E,l({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=E.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],L=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),l=3;l<n;l++)r[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],H=new Set;let P,A;const R=function(e){let{as:t="div",image:r,style:s,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=o(e,T);const{width:y,height:v,layout:E}=r,b=u(y,v,E),{style:C,className:N}=b,w=o(b,O),k=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const L=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,y,v);return(0,n.useEffect)((()=>{P||(P=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void H.add(S);if(A&&H.has(S))return;let t,n;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:H.has(S),image:r},f)),H.has(S)||(t=requestAnimationFrame((()=>{k.current&&(n=o(k.current,S,H,s,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{H.has(S)&&A&&(k.current.innerHTML=A(l({isLoading:H.has(S),isLoaded:H.has(S),image:r},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,l({},w,{style:l({},C,s,{backgroundColor:c}),className:N+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));q.propTypes=I,q.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function F(e){return function(t){let{src:a,__imageData:r,__error:s}=t,i=o(t,j);return s&&console.warn(s),r?n.createElement(e,l({image:r},i)):(console.warn("Image not loaded",a),null)}}const B=F((function(e){let{as:t="div",className:a,class:r,style:s,image:i,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:v}=e,E=o(e,k);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=l({objectFit:y,objectPosition:v,backgroundColor:f},p);const{width:b,height:C,layout:x,images:I,placeholder:T,backgroundColor:O}=i,H=u(b,C,x),{style:P,className:A}=H,R=o(H,S),q={fallback:void 0,sources:[]};return I.fallback&&(q.fallback=l({},I.fallback,{srcSet:I.fallback.srcSet?L(I.fallback.srcSet):void 0})),I.sources&&(q.sources=I.sources.map((e=>l({},e,{srcSet:L(e.srcSet)})))),n.createElement(t,l({},R,{style:l({},P,s,{backgroundColor:f}),className:A+(a?" "+a:"")}),n.createElement(h,{layout:x,width:b,height:C},n.createElement(N,l({},m(T,!1,x,b,C,O,y,v))),n.createElement(w,l({"data-gatsby-image-ssr":"",className:g},E,d("eager"===c,!1,q,c,p)))))})),M=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),_={src:s().string.isRequired,alt:x,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};B.displayName="StaticImage",B.propTypes=_;const D=F(q);D.displayName="StaticImage",D.propTypes=_},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),o=new RegExp(s.source+r.source,"gu"),i=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,r)=>{let s=!1,l=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,o=l,l=!0,i++):l&&o&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=l,l=!1,s=!0):(s=n(c)===c&&r(c)!==c,o=l,l=r(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8930:function(e,t,a){a.d(t,{cn:function(){return n}});const n=function(e,t){void 0===t&&(t="");const{className:a=""}=e;return(a+" "+t).trim()}},3938:function(e,t,a){const n=(0,a(7294).createContext)({cart:[],deleteFromCart:e=>{},updateQuantity:(e,t,a)=>{}});t.Z=n},4615:function(e,t,a){a.d(t,{hn:function(){return r}});var n=a(7294);const r={CART:"CART"},s={[r.CART]:!0};t.ZP=e=>{const{0:t,1:a}=(0,n.useState)(s);return(0,n.useEffect)((()=>{const e={};Object.keys(r).forEach((t=>{e[t]=Boolean(s[t]||sessionStorage.getItem(t))})),a(e)}),[]),Boolean(t[e])}},5593:function(e,t,a){var n=a(7294);t.Z=function(e){var t,a;const r=(null==e||null===(t=e.data)||void 0===t||null===(a=t.page)||void 0===a?void 0:a.description)||"Find all the best crochet products here at the Crochet Nest!",s="https://crochetnest.com"+e.location.pathname;return n.createElement(n.Fragment,null,n.createElement("meta",{name:"theme-color",content:"#ffdbdf"}),n.createElement("title",null,e.data.page?e.data.page.name:"The Crochet Nest"),n.createElement("link",{rel:"canonical",href:s,"data-baseprotocol":"https:","data-basehost":"crochetnest.com"}),n.createElement("meta",{name:"description",content:r}))}},6952:function(e,t,a){a.d(t,{H1:function(){return l},H2:function(){return o},H3:function(){return i}});var n=a(7294),r=a(8930);const s=e=>t=>{switch(e){case"h1":return n.createElement("h1",{className:(0,r.cn)(t,"HeadingText H1")},t.children);case"h2":return n.createElement("h2",{className:(0,r.cn)(t,"HeadingText H2")},t.children);case"h3":return n.createElement("h3",{className:(0,r.cn)(t,"HeadingText H3")},t.children);case"h4":return n.createElement("h4",{className:(0,r.cn)(t,"HeadingText H4")},t.children);case"h5":return n.createElement("h5",{className:(0,r.cn)(t,"HeadingText H5")},t.children);case"h6":return n.createElement("h6",{className:(0,r.cn)(t,"HeadingText H6")},t.children);default:return n.createElement("p",{className:(0,r.cn)(t,"HeadingText")},t.children)}},l=s("h1"),o=s("h2"),i=s("h3");s("h4"),s("h5"),s("h6")},9689:function(e,t,a){var n=a(7294);t.Z=e=>{const{ariaLabel:t,className:a="",onClick:r}=e;return n.createElement("button",{className:(a+" IconButton").trim(),onClick:r,"aria-label":t},e.children)}},5953:function(e,t,a){a.d(t,{Z:function(){return L}});var n=a(7294),r=a(381),s=a.n(r);var l=function(){const e=s()().year();return n.createElement("footer",{className:"PageFooter"},n.createElement("div",{className:"PageFooterInner"},n.createElement("p",null,"Copyright "+e+" © CrochetNest. All rights reserved.")))};var o=function(){return n.createElement("div",{className:"NotificationBar"},n.createElement("p",null,"All plushies and life-size cockatiel crochet items are made to order and ship out in 1-2 weeks! Orders with keychains are shipped out within 3-5 days."))},i=a(1883),c=a(8032);var u=()=>{const e=(0,i.useStaticQuery)("1713222366"),{allGooglePhotosPhoto:t}=e,a=t.nodes[0];return n.createElement("div",{className:"HomeBannerImageContainer"},n.createElement(c.G,{image:(0,c.c)(a.file),alt:"Crochet Nest Banner"}))},d=a(9689);var m=e=>n.createElement("div",{className:"CloseIcon"});const g="OPENING",p="OPEN",h="CLOSING",f="CLOSED",y=()=>n.createElement("div",{className:"DrawerOverlay"}),v=e=>{var t;const{state:a}=e,r=n.useRef(null),s=(null==r||null===(t=r.current)||void 0===t?void 0:t.offsetWidth)||380,l={marginLeft:a===f||a===h?"-"+s+"px":"0"};return n.createElement("div",{ref:r,className:"DrawerContent",style:l},n.createElement("div",{className:"CloseButtonContainer"},n.createElement(d.Z,{onClick:e.onClose},n.createElement(m,null))),e.children)};var E=e=>{const{state:t,onClose:a}=e;n.useEffect((()=>(t!==f&&document.querySelector("body").classList.add("PreventScroll"),()=>{document.querySelector("body").classList.remove("PreventScroll")})),[t]);const r={visibility:t===f?"hidden":"visible"};return n.createElement("div",{className:"Drawer",style:r},n.createElement(y,null),n.createElement(v,{onClose:a,state:t},e.children))};var b=e=>{const t=("HamburgerLine "+e.iconColor).trim();return n.createElement("div",{className:"HamburgerMenu"},n.createElement("div",{className:t}),n.createElement("div",{className:t}),n.createElement("div",{className:t}))},C=a(4615);const N=e=>{let{links:t}=e;return n.createElement("div",{className:"DesktopNavigation"},n.createElement("nav",{className:"NavBar"},n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",{key:t},n.createElement(i.Link,{color:"black.500",activeStyle:e.isActive?{color:"#ffb6be",fontWeight:"bold"}:{},to:e.href},e.text)))))))};var w=e=>{let{hamburgerIconColor:t="white"}=e;const a=[{href:"/",text:"Home"}];(0,C.ZP)("CART")&&a.push({href:"/cart",text:"Cart"});const{state:r,onOpen:s,onClose:l}=function(e){void 0===e&&(e=250);const{0:t,1:a}=(0,n.useState)(f);return{state:t,onOpen:()=>{t===f&&(a(g),setTimeout((()=>{a(p)}),e))},onClose:()=>{t===p&&(a(h),setTimeout((()=>{a(f)}),e))}}}();return n.createElement("nav",{className:"ConsolidatedNavBar"},n.createElement(N,{links:a}),n.createElement(d.Z,{className:"NavBarIcon",colorScheme:"black",onClick:s,ariaLabel:"Open Navigation"},n.createElement(b,{iconColor:"black"})),n.createElement(E,{state:r,onClose:l},n.createElement("ul",{className:"MobileNavBar"},a.map(((e,t)=>n.createElement("li",{key:t},n.createElement(i.Link,{color:"black.500",activeStyle:e.isActive?{color:"#ffb6be",fontWeight:"bold"}:{},onClick:()=>{l()},to:e.href},e.text)))))))};var k=e=>n.createElement(w,e),S=a(3938);var L=e=>{const{cart:t,deleteFromCart:a,updateQuantity:r}=(()=>{const[e,t]=n.useState([]);return n.useEffect((()=>{const e=sessionStorage.getItem("cart");e&&t(JSON.parse(e))}),[]),{cart:e,updateQuantity:(a,n,r)=>{const s=e.filter((e=>e.priceId!==a));r>0&&s.push({priceId:a,id:n,quantity:r});const l=s.sort(((e,t)=>e.id<t.id?-1:e.id>t.id?1:0));sessionStorage.setItem("cart",JSON.stringify(l)),t(l)}}})();return n.createElement(S.Z.Provider,{value:{cart:t,deleteFromCart:a,updateQuantity:r}},n.createElement(n.Fragment,null,n.createElement(o,null),n.createElement("main",{className:"MainSection"},n.createElement(u,null),n.createElement(k,null),n.createElement("div",{className:"MainSectionInner"},e.children)),n.createElement(l,null)))}}}]);
//# sourceMappingURL=9a19e20d2ff88bb3d2a11bf56f4066fb4b8f9387-490bc7c96d58c569a646.js.map