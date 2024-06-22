"use strict";(self.webpackChunkcrochetnest=self.webpackChunkcrochetnest||[]).push([[828],{8032:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return m},M:function(){return L},P:function(){return E},_:function(){return o},a:function(){return n},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(7294),s=(a(2369),a(5697)),i=a.n(s);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(s[a]=e[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,s){return void 0===s&&(s={}),n({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},s,{opacity:t?1:0})})}function d(e,t,a,r,s,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${s}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,n({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:s,alt:i="",shouldLoad:l}=e,c=o(e,h);return r.createElement("img",n({},c,{decoding:"async",loading:s,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,i=o(e,y);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,n({},i,t,{sizes:l,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),c):c};var v;f.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},b.displayName="Picture",b.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(b,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",n({},a))};E.displayName="Placeholder",E.propTypes={fallback:s.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(b,n({},e)),r.createElement("noscript",null,r.createElement(b,n({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),n=3;n<r;n++)s[n-3]=arguments[n];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(s)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:i().object.isRequired,alt:x},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],$=new Set;let O,q;const j=function(e){let{as:t="div",image:s,style:i,backgroundColor:u,className:d,class:g,onStartLoad:p,onLoad:m,onError:h}=e,y=o(e,I);const{width:f,height:b,layout:v}=s,w=c(f,b,v),{style:E,className:L}=w,k=o(w,T),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);g&&(d=g);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,f,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(S);if(q&&$.has(S))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=a(n({isLoading:!0,isLoaded:$.has(S),image:s},y)),$.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=o(C.current,S,$,i,p,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{$.has(S)&&q&&(C.current.innerHTML=q(n({isLoading:$.has(S),isLoaded:$.has(S),image:s},y)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[s]),(0,r.createElement)(t,n({},k,{style:n({},E,i,{backgroundColor:u}),className:`${L}${d?` ${d}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));A.propTypes=N,A.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function G(e){return function(t){let{src:a,__imageData:s,__error:i}=t,l=o(t,R);return i&&console.warn(i),s?r.createElement(e,n({image:s},l)):(console.warn("Image not loaded",a),null)}}const P=G((function(e){let{as:t="div",className:a,class:s,style:i,image:l,loading:g="lazy",imgClassName:p,imgStyle:h,backgroundColor:y,objectFit:f,objectPosition:b}=e,v=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),h=n({objectFit:f,objectPosition:b,backgroundColor:y},h);const{width:w,height:x,layout:N,images:I,placeholder:T,backgroundColor:$}=l,O=c(w,x,N),{style:q,className:j}=O,A=o(O,C),R={fallback:void 0,sources:[]};return I.fallback&&(R.fallback=n({},I.fallback,{srcSet:I.fallback.srcSet?S(I.fallback.srcSet):void 0})),I.sources&&(R.sources=I.sources.map((e=>n({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,n({},A,{style:n({},q,i,{backgroundColor:y}),className:`${j}${a?` ${a}`:""}`}),r.createElement(m,{layout:N,width:w,height:x},r.createElement(E,n({},d(T,!1,N,w,x,$,f,b))),r.createElement(L,n({"data-gatsby-image-ssr":"",className:p},v,u("eager"===g,!1,R,g,h)))))})),_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:x,width:_,height:_,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=W;const F=G(A);F.displayName="StaticImage",F.propTypes=W},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,n=new RegExp("^"+i.source),o=new RegExp(i.source+s.source,"gu"),l=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,s)=>{let i=!1,n=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=n,n=!0,l++):n&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=n,n=!1,i=!0):(i=r(c)===c&&s(c)!==c,o=n,n=s(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(n,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6090:function(e,t,a){a.d(t,{y:function(){return r}});const r=e=>{const{allGoogleSpreadsheetPetitsAnimauxProducts:t}=e;return t.edges.map((e=>{const t=e.node,{currencyCode:a,description:r,id:s,materials:i,price:n,quantity:o,prices:l,title:c,tags:u,images:d,etsyAffiliateLink:g,urlSuffix:p}=t,m=(u||"").split(","),h=[];if(t.variation1Name){const e={name:t.variation1Name,values:t.variation1Values.split(",")};h.push(e)}if(t.variation2Name){const e={name:t.variation2Name,values:t.variation2Values.split(",")};h.push(e)}const y=[t.image1Gatsby,t.image2Gatsby,t.image3Gatsby,t.image4Gatsby,t.image5Gatsby,t.image6Gatsby,t.image7Gatsby,t.image8Gatsby,t.image9Gatsby,t.image10Gatsby].filter((e=>e)).map((e=>e.childImageSharp.gatsbyImageData));return{currencyCode:a,etsyAffiliateLink:g,description:r,id:s,materials:i,price:parseFloat(n),priceIds:l?JSON.parse(l):[],quantity:o,title:c,tags:m,variations:h,images:d?JSON.parse(d):[],gatsbyImages:y,urlSuffix:p}}))}}}]);
//# sourceMappingURL=4b6cb7e12fa064ff9f40fa72fad5fee1f86f1f2e-8e58b3c50fcd1c04994e.js.map