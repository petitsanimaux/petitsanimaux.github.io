"use strict";(self.webpackChunkcrochetnest=self.webpackChunkcrochetnest||[]).push([[932],{3938:function(e,t,n){const r=(0,n(7294).createContext)({cart:[],wipeCart:()=>{},updateQuantity:(e,t,n)=>{}});t.Z=r},5593:function(e,t,n){var r=n(7294);t.Z=function(e){var t,n;const a=(null==e||null===(t=e.data)||void 0===t||null===(n=t.page)||void 0===n?void 0:n.description)||"Find all the best crochet products here at the Crochet Nest!",o=`https://crochetnest.com${e.location.pathname}`;return r.createElement(r.Fragment,null,r.createElement("meta",{name:"theme-color",content:"#ffdbdf"}),r.createElement("title",null,e.data.page?e.data.page.name:"The Crochet Nest"),r.createElement("link",{rel:"canonical",href:o,"data-baseprotocol":"https:","data-basehost":"crochetnest.com"}),r.createElement("meta",{name:"description",content:a}))}},6952:function(e,t,n){n.d(t,{H1:function(){return s},H2:function(){return c},H3:function(){return i}});var r=n(7294),a=n(2757);const o=e=>t=>{const{center:n}=t;switch(e){case"h1":return r.createElement(a.X,Object.assign({as:"h1"},t),t.children);case"h2":return r.createElement(a.X,Object.assign({as:"h2"},t),t.children);case"h3":return r.createElement(a.X,Object.assign({as:"h3"},t),t.children);case"h4":return r.createElement(a.X,Object.assign({as:"h4"},t),t.children);case"h5":return r.createElement(a.X,Object.assign({as:"h5"},t),t.children);case"h6":return r.createElement(a.X,Object.assign({as:"h6"},t),t.children);default:return r.createElement(a.X,Object.assign({as:"p"},t),t.children)}},s=o("h1"),c=o("h2"),i=o("h3");o("h4"),o("h5"),o("h6")},9689:function(e,t,n){var r=n(7294);t.Z=e=>{const{ariaLabel:t,className:n="",onClick:a}=e;return r.createElement("button",{className:`${n} IconButton`.trim(),onClick:a,"aria-label":t},e.children)}},8951:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(7294),a=n(1883);var o=n(5227),[s,c]=(0,o.k)({strict:!1,name:"ButtonGroupContext"}),i=n(9133),l=n(5432),u=n(5893);function m(e){const{children:t,className:n,...a}=e,o=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,s=(0,l.cx)("chakra-button__icon",n);return(0,u.jsx)(i.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:s,children:o})}m.displayName="ButtonIcon";var d=n(1136);function h(e){const{label:t,placement:n,spacing:a="0.5rem",children:o=(0,u.jsx)(d.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:c,...m}=e,h=(0,l.cx)("chakra-button__spinner",s),p="start"===n?"marginEnd":"marginStart",f=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...c})),[c,t,p,a]);return(0,u.jsx)(i.m.div,{className:h,...m,__css:f,children:o})}function p(...e){return t=>{e.forEach((e=>{!function(e,t){if(null!=e)if("function"!=typeof e)try{e.current=t}catch(n){throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}else e(t)}(e,t)}))}}function f(...e){return(0,r.useMemo)((()=>p(...e)),e)}h.displayName="ButtonSpinner";var g=n(6554),v=n(9228),b=n(3179),y=(0,g.G)(((e,t)=>{const n=c(),a=(0,v.mq)("Button",{...n,...e}),{isDisabled:o=(null==n?void 0:n.isDisabled),isLoading:s,isActive:m,children:d,leftIcon:p,rightIcon:g,loadingText:y,iconSpacing:w="0.5rem",type:E,spinner:N,spinnerPlacement:C="start",className:k,as:S,...j}=(0,b.Lr)(e),I=(0,r.useMemo)((()=>{const e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}}),[a,n]),{ref:_,type:O}=function(e){const[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(S),L={rightIcon:g,leftIcon:p,iconSpacing:w,children:d};return(0,u.jsxs)(i.m.button,{ref:f(t,_),as:S,type:null!=E?E:O,"data-active":(0,l.PB)(m),"data-loading":(0,l.PB)(s),__css:I,className:(0,l.cx)("chakra-button",k),...j,disabled:o||s,children:[s&&"start"===C&&(0,u.jsx)(h,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:w,children:N}),s?y||(0,u.jsx)(i.m.span,{opacity:0,children:(0,u.jsx)(x,{...L})}):(0,u.jsx)(x,{...L}),s&&"end"===C&&(0,u.jsx)(h,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:w,children:N})]})}));function x(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)(m,{marginEnd:a,children:t}),r,n&&(0,u.jsx)(m,{marginStart:a,children:n})]})}y.displayName="Button";var w=n(4564),E=n.n(w);const N=new Set(["localhost","petitsanimaux.github.io","petitsanimaux","crochetnest.com","crochetnest"]);var C=e=>{const{disabled:t,href:n}=e;if(!n)return null;const o=n.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?!&//=]*)/gi);const s=o&&o.length>0?o[0]:n;return(e=>{const t=new(E())(e);return N.has(t.hostname)})(s)?r.createElement(y,Object.assign({as:a.Link,to:t?"#":s},e)," ",e.children):r.createElement(y,Object.assign({as:"a",target:"_blank",href:t?"#":s},e),e.children)}},9334:function(e,t,n){n.d(t,{Z:function(){return D}});var r=n(7294),a=n(381),o=n.n(a),s=n(8951),c=n(6952),i=n(2489);var l=function(){const e=o()().year();return r.createElement("footer",{className:"PageFooter"},r.createElement("div",{className:"PageFooterInner"},r.createElement("div",{className:"Resources"},r.createElement(c.H2,{size:"lg",color:"white"},"Connect"),r.createElement(i.K,{direction:"row"},r.createElement(s.Z,{size:"md",variant:"white",href:"https://www.instagram.com/_crochetnest/"},"Instagram"),r.createElement(s.Z,{size:"md",variant:"white",href:"https://www.etsy.com/shop/LeBirb"},"Etsy"))),r.createElement("p",{className:"CopyrightText"},`Copyright ${e} © CrochetNest. All rights reserved.`)))},u=n(1883),m=n(2757),d=n.p+"static/icon-cfe5bd73d75f65e7fef261f043cf2ce1.png",h=n(9689);var p=e=>r.createElement("div",{className:"CloseIcon"});const f="OPENING",g="OPEN",v="CLOSING",b="CLOSED",y=()=>r.createElement("div",{className:"DrawerOverlay"}),x=e=>{var t;const{state:n}=e,a=r.useRef(null),o=(null==a||null===(t=a.current)||void 0===t?void 0:t.offsetWidth)||380,s={marginLeft:n===b||n===v?`-${o}px`:"0"};return r.createElement("div",{ref:a,className:"DrawerContent",style:s},r.createElement("div",{className:"CloseButtonContainer"},r.createElement(h.Z,{onClick:e.onClose},r.createElement(p,null))),e.children)};var w=e=>{const{state:t,onClose:n}=e;r.useEffect((()=>(t!==b&&document.querySelector("body").classList.add("PreventScroll"),()=>{document.querySelector("body").classList.remove("PreventScroll")})),[t]);const a={visibility:t===b?"hidden":"visible"};return r.createElement("div",{className:"Drawer",style:a},r.createElement(y,null),r.createElement(x,{onClose:n,state:t},e.children))};var E=e=>{const t=`HamburgerLine ${e.iconColor}`.trim();return r.createElement("div",{className:"HamburgerMenu"},r.createElement("div",{className:t}),r.createElement("div",{className:t}),r.createElement("div",{className:t}))},N=n(6554),C=n(9228),k=n(3179),S=n(9133),j=n(5432),I=n(5893),_=(0,N.G)((function(e,t){const n=(0,C.mq)("Badge",e),{className:r,...a}=(0,k.Lr)(e);return(0,I.jsx)(S.m.span,{ref:t,className:(0,j.cx)("chakra-badge",e.className),...a,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})}));_.displayName="Badge";var O=n(3938);const L=()=>{const{cart:e}=(0,r.useContext)(O.Z),t=e.reduce(((e,t)=>e+t.quantity),0);return 0===t?null:r.createElement(_,{ml:"2",fontSize:"0.8em",colorScheme:"pink"},t)},z=e=>{let{leftHandLinks:t,rightHandLinks:n}=e;return r.createElement("div",{className:"DesktopNavigation"},r.createElement("img",{className:"BirdIcon",src:d}),r.createElement("nav",{className:"NavBar"},r.createElement("ul",null,t.map(((e,t)=>r.createElement("li",{key:t},r.createElement(u.Link,{color:"black.500",activeStyle:e.isActive?{color:"#ffb6be",fontWeight:"bold"}:{},to:e.href},r.createElement(m.X,{as:"h3",size:"sm",fontSize:"16px"},e.text)))))),r.createElement("ul",{className:"RightHandLinks"},n.map(((e,t)=>r.createElement("li",{key:t},r.createElement(u.Link,{color:"black.500",activeStyle:e.isActive?{color:"#ffb6be",fontWeight:"bold"}:{},to:e.href},e.text,"/cart"===e.href&&r.createElement(L,null))))))))};var B=()=>{const e=[{href:"/",text:"Home"}],t=[],{state:n,onOpen:a,onClose:o}=function(e){void 0===e&&(e=250);const{0:t,1:n}=(0,r.useState)(b);return{state:t,onOpen:()=>{t===b&&(n(f),setTimeout((()=>{n(g)}),e))},onClose:()=>{t===g&&(n(v),setTimeout((()=>{n(b)}),e))}}}();return r.createElement("nav",{className:"ConsolidatedNavBar"},r.createElement(z,{leftHandLinks:e,rightHandLinks:t}),r.createElement(h.Z,{className:"NavBarIcon",colorScheme:"black",onClick:a,ariaLabel:"Open Navigation"},r.createElement(E,{iconColor:"black"})),r.createElement(w,{state:n,onClose:o},r.createElement("ul",{className:"MobileNavBar"},[].concat(e,t).map(((e,t)=>r.createElement("li",{key:t},r.createElement(u.Link,{color:"black.500",activeStyle:e.isActive?{color:"#ffb6be",fontWeight:"bold"}:{},onClick:()=>{o()},to:e.href},e.text,"/cart"===e.href&&r.createElement(L,null))))))))};var A=e=>r.createElement(B,e),R=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];var H=n(6288),q=n(8554);function W(e){return"function"==typeof e}var Z=e=>function(...t){let n=[...t],r=t[t.length-1];var a;return a=r,(0,j.Kn)(a)&&R.every((e=>Object.prototype.hasOwnProperty.call(a,e)))&&n.length>1?n=n.slice(0,n.length-1):r=e,function(...e){return t=>e.reduce(((e,t)=>t(e)),t)}(...n.map((e=>t=>W(e)?e(t):function(...e){return q({},...e,U)}(t,e))))(r)},P=Z(H.rS);Z(H.wE);function U(e,t,n,r){if((W(e)||W(t))&&Object.prototype.hasOwnProperty.call(r,n))return(...n)=>{const r=W(e)?e(...n):e,a=W(t)?t(...n):t;return q({},r,a,U)}}var G=n(7342),$=n(7747);const M=(0,k.k0)({fontWeight:"300"}),X=P({components:{Heading:(0,k.fj)({variants:{nonBoldHeading:M}}),Button:(0,k.fj)({baseStyle:{},sizes:{},variants:{white:(0,k.k0)({border:"2px solid",borderColor:"white",color:"white"}),pink:(0,k.k0)({color:"white",backgroundColor:"rgb(240, 142, 128)"})},defaultProps:{}}),Link:(0,k.fj)({baseStyle:{},sizes:{},variants:{white:(0,k.k0)({border:"2px solid",borderColor:"white.500",color:"white.500"}),purple:(0,k.k0)({border:"2px solid",borderColor:"purple.500",color:"purple.500"})},defaultProps:{}})}});var D=e=>{const{cart:t,wipeCart:n,updateQuantity:a}=(()=>{const[e,t]=r.useState([]);return r.useEffect((()=>{const e=sessionStorage.getItem("cart");e&&t(JSON.parse(e))}),[]),{cart:e,updateQuantity:(n,r,a)=>{const o=e.filter((e=>e.priceId!==n));a>0&&o.push({priceId:n,id:r,quantity:a});const s=o.sort(((e,t)=>e.id<t.id?-1:e.id>t.id?1:0));sessionStorage.setItem("cart",JSON.stringify(s)),t(s)},wipeCart:()=>{sessionStorage.setItem("cart",JSON.stringify([])),t([])}}})();return r.createElement(G.x,{theme:X},r.createElement(O.Z.Provider,{value:{cart:t,wipeCart:n,updateQuantity:a}},r.createElement($.xu,null,r.createElement("main",{className:"MainSection"},r.createElement(A,null),r.createElement("div",{className:"MainSectionInner"},e.children)),r.createElement(l,null))))}},7129:function(e,t){var n=Object.prototype.hasOwnProperty;function r(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return null}}function a(e){try{return encodeURIComponent(e)}catch(t){return null}}t.stringify=function(e,t){t=t||"";var r,o,s=[];for(o in"string"!=typeof t&&(t="?"),e)if(n.call(e,o)){if((r=e[o])||null!=r&&!isNaN(r)||(r=""),o=a(o),r=a(r),null===o||null===r)continue;s.push(o+"="+r)}return s.length?t+s.join("&"):""},t.parse=function(e){for(var t,n=/([^=?#&]+)=?([^&]*)/g,a={};t=n.exec(e);){var o=r(t[1]),s=r(t[2]);null===o||null===s||o in a||(a[o]=s)}return a}},7418:function(e){e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},4564:function(e,t,n){var r=n(7418),a=n(7129),o=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,s=/[\n\r\t]/g,c=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,i=/:\d+$/,l=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,u=/^[a-zA-Z]:/;function m(e){return(e||"").toString().replace(o,"")}var d=[["#","hash"],["?","query"],function(e,t){return f(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};function p(e){"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?n.g=self:n.g={};var t,r=n.g.location||{},a={},o=typeof(e=e||r);if("blob:"===e.protocol)a=new v(unescape(e.pathname),{});else if("string"===o)for(t in a=new v(e,{}),h)delete a[t];else if("object"===o){for(t in e)t in h||(a[t]=e[t]);void 0===a.slashes&&(a.slashes=c.test(e.href))}return a}function f(e){return"file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function g(e,t){e=(e=m(e)).replace(s,""),t=t||{};var n,r=l.exec(e),a=r[1]?r[1].toLowerCase():"",o=!!r[2],c=!!r[3],i=0;return o?c?(n=r[2]+r[3]+r[4],i=r[2].length+r[3].length):(n=r[2]+r[4],i=r[2].length):c?(n=r[3]+r[4],i=r[3].length):n=r[4],"file:"===a?i>=2&&(n=n.slice(2)):f(a)?n=r[4]:a?o&&(n=n.slice(2)):i>=2&&f(t.protocol)&&(n=r[4]),{protocol:a,slashes:o||f(a),slashesCount:i,rest:n}}function v(e,t,n){if(e=(e=m(e)).replace(s,""),!(this instanceof v))return new v(e,t,n);var o,c,i,l,h,b,y=d.slice(),x=typeof t,w=this,E=0;for("object"!==x&&"string"!==x&&(n=t,t=null),n&&"function"!=typeof n&&(n=a.parse),o=!(c=g(e||"",t=p(t))).protocol&&!c.slashes,w.slashes=c.slashes||o&&t.slashes,w.protocol=c.protocol||t.protocol||"",e=c.rest,("file:"===c.protocol&&(2!==c.slashesCount||u.test(e))||!c.slashes&&(c.protocol||c.slashesCount<2||!f(w.protocol)))&&(y[3]=[/(.*)/,"pathname"]);E<y.length;E++)"function"!=typeof(l=y[E])?(i=l[0],b=l[1],i!=i?w[b]=e:"string"==typeof i?~(h="@"===i?e.lastIndexOf(i):e.indexOf(i))&&("number"==typeof l[2]?(w[b]=e.slice(0,h),e=e.slice(h+l[2])):(w[b]=e.slice(h),e=e.slice(0,h))):(h=i.exec(e))&&(w[b]=h[1],e=e.slice(0,h.index)),w[b]=w[b]||o&&l[3]&&t[b]||"",l[4]&&(w[b]=w[b].toLowerCase())):e=l(e,w);n&&(w.query=n(w.query)),o&&t.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==t.pathname)&&(w.pathname=function(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=n.length,a=n[r-1],o=!1,s=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),s++):s&&(0===r&&(o=!0),n.splice(r,1),s--);return o&&n.unshift(""),"."!==a&&".."!==a||n.push(""),n.join("/")}(w.pathname,t.pathname)),"/"!==w.pathname.charAt(0)&&f(w.protocol)&&(w.pathname="/"+w.pathname),r(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(~(h=w.auth.indexOf(":"))?(w.username=w.auth.slice(0,h),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=w.auth.slice(h+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(w.auth)),w.auth=w.password?w.username+":"+w.password:w.username),w.origin="file:"!==w.protocol&&f(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString()}v.prototype={set:function(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||a.parse)(t)),o[e]=t;break;case"port":o[e]=t,r(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,i.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(t){var s="pathname"===e?"/":"#";o[e]=t.charAt(0)!==s?s+t:t}else o[e]=t;break;case"username":case"password":o[e]=encodeURIComponent(t);break;case"auth":var c=t.indexOf(":");~c?(o.username=t.slice(0,c),o.username=encodeURIComponent(decodeURIComponent(o.username)),o.password=t.slice(c+1),o.password=encodeURIComponent(decodeURIComponent(o.password))):o.username=encodeURIComponent(decodeURIComponent(t))}for(var l=0;l<d.length;l++){var u=d[l];u[4]&&(o[u[1]]=o[u[1]].toLowerCase())}return o.auth=o.password?o.username+":"+o.password:o.username,o.origin="file:"!==o.protocol&&f(o.protocol)&&o.host?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},toString:function(e){e&&"function"==typeof e||(e=a.stringify);var t,n=this,r=n.host,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var s=o+(n.protocol&&n.slashes||f(n.protocol)?"//":"");return n.username?(s+=n.username,n.password&&(s+=":"+n.password),s+="@"):n.password?(s+=":"+n.password,s+="@"):"file:"!==n.protocol&&f(n.protocol)&&!r&&"/"!==n.pathname&&(s+="@"),(":"===r[r.length-1]||i.test(n.hostname)&&!n.port)&&(r+=":"),s+=r+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(s+=n.hash),s}},v.extractProtocol=g,v.location=p,v.trimLeft=m,v.qs=a,e.exports=v},2757:function(e,t,n){n.d(t,{X:function(){return l}});var r=n(6554),a=n(9228),o=n(3179),s=n(9133),c=n(5432),i=n(5893),l=(0,r.G)((function(e,t){const n=(0,a.mq)("Heading",e),{className:r,...l}=(0,o.Lr)(e);return(0,i.jsx)(s.m.h2,{ref:t,className:(0,c.cx)("chakra-heading",e.className),...l,__css:n})}));l.displayName="Heading"},7747:function(e,t,n){n.d(t,{xu:function(){return s}});var r=n(9133),a=n(6554),o=n(5893),s=(0,r.m)("div");s.displayName="Box";var c=(0,a.G)((function(e,t){const{size:n,centerContent:r=!0,...a}=e,c=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,o.jsx)(s,{ref:t,boxSize:n,__css:{...c,flexShrink:0,flexGrow:0},...a})}));c.displayName="Square",(0,a.G)((function(e,t){const{size:n,...r}=e;return(0,o.jsx)(c,{size:n,ref:t,borderRadius:"9999px",...r})})).displayName="Circle"},2489:function(e,t,n){n.d(t,{K:function(){return i}});var r=n(9133),a=n(5893),o=e=>(0,a.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});o.displayName="StackItem";var s=n(5432);Object.freeze(["base","sm","md","lg","xl","2xl"]);var c=n(7294);var i=(0,n(6554).G)(((e,t)=>{const{isInline:n,direction:i,align:l,justify:u,spacing:m="0.5rem",wrap:d,children:h,divider:p,className:f,shouldWrapChildren:g,...v}=e,b=n?"row":null!=i?i:"column",y=(0,c.useMemo)((()=>function(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(a=n,o=e=>r[e],Array.isArray(a)?a.map((e=>null===e?null:o(e))):(0,s.Kn)(a)?Object.keys(a).reduce(((e,t)=>(e[t]=o(a[t]),e)),{}):null!=a?o(a):null)};var a,o}({spacing:m,direction:b})),[m,b]),x=!!p,w=!g&&!x,E=(0,c.useMemo)((()=>{const e=function(e){return c.Children.toArray(e).filter((e=>(0,c.isValidElement)(e)))}(h);return w?e:e.map(((t,n)=>{const r=void 0!==t.key?t.key:n,s=n+1===e.length,i=g?(0,a.jsx)(o,{children:t},r):t;if(!x)return i;const l=(0,c.cloneElement)(p,{__css:y}),u=s?null:l;return(0,a.jsxs)(c.Fragment,{children:[i,u]},r)}))}),[p,y,x,w,g,h]),N=(0,s.cx)("chakra-stack",f);return(0,a.jsx)(r.m.div,{ref:t,display:"flex",alignItems:l,justifyContent:u,flexDirection:b,flexWrap:d,gap:x?void 0:m,className:N,...v,children:E})}));i.displayName="Stack"}}]);
//# sourceMappingURL=97b25cb4c9cf2ff9f28571f37c62c291e615900f-a15cb6785e949367aa53.js.map