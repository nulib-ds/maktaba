(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{3235:function(e,r,t){"use strict";t.d(r,{Z:function(){return Card_Card}});var n=t(7178),o=t(9499),i=t(9288),a=(0,i.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),c=(0,i.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),s=(0,i.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,o.Z)({color:"$indigo10"},"".concat(c),{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}))}),l=t(3093),d=t(8522),u=t(6225),p=t(3817),f=(0,i.zo)("img",(0,o.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0},"&.loaded",{opacity:1})),g=(0,i.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"}),v=t(7294),b=t(6010),getResourceImage=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(t,"/").concat(r,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(t,"/").concat(r,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(t,"/").concat(r,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(t,"/").concat(r,"/0/default.jpg")},h=t(5893),Figure_Figure=function(e){var r=e.alt,t=e.resource,n=e.region,o=void 0===n?"full":n,i=e.size,a=void 0===i?"400,":i,c=e.isCover,s=(0,v.useState)(),l=s[0],d=s[1],u=(0,v.useState)(!1),p=u[0],y=u[1],j=(0,v.useRef)(null);return(0,v.useEffect)(function(){var e;d(getResourceImage(t,a,o)),null!=j&&j.current&&null!=j&&null!==(e=j.current)&&void 0!==e&&e.complete&&y(!0)},[]),(0,h.jsx)(g,{children:(0,h.jsx)(f,{alt:r,src:l,ref:j,style:void 0!==c&&c?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return y(!0)},className:(0,b.Z)("source",p&&"loaded")})})},y=t(1830),j=t(1664),m=t.n(j),x=t(9769),w=t(8956),O=t(2708),Card_Card=function(e){var r=e.resource,t=1,o=r.label,i=r.homepage,f=r.thumbnail,g=(0,w.J)(f),v=g.width,b=g.height;v&&b&&(t=v/b);var j=(0,O.YD)(),S=j.ref,$=j.inView,P=(0,x.i)(o);return(0,h.jsx)(s,{ref:S,children:(0,h.jsxs)(m(),{href:i&&i[0].id?i[0].id:"",children:[(0,h.jsx)(n.f,{ratio:t,children:(0,h.jsx)(c,{children:(0,h.jsx)(l.A,{transition:{duration:1},children:$&&r&&(0,h.jsx)(d.X,{features:u.H,children:(0,h.jsx)(p.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,h.jsx)(Figure_Figure,{resource:f,alt:P})})})})})}),(0,h.jsx)(a,{children:(0,h.jsx)(y.Label,{label:o,as:"h4"})})]})})}},2929:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(9499),o=t(3235),i=t(827),a=t(9288),c=(0,a.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),s=(0,a.zo)(i.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}});t(7294);var l=t(5893),d=t(7668),Grid=function(e){var r,t=e.children,o=(r={default:6},(0,n.Z)(r,d.b.xl,5),(0,n.Z)(r,d.b.lg,4),(0,n.Z)(r,d.b.md,4),(0,n.Z)(r,d.b.sm,3),(0,n.Z)(r,d.b.xs,2),r);return(0,l.jsx)(s,{breakpointCols:o,className:"canopy-grid",columnClassName:"canopy-grid-column",children:t})};Grid.Item=function(e){var r=e.item;return r?(0,l.jsx)(c,{children:(0,l.jsx)(o.Z,{resource:r},r.id)}):(0,l.jsx)(l.Fragment,{})};var u=Grid},7333:function(e,r,t){"use strict";t.d(r,{Z:function(){return MDX}});var n=t(9499),o=t(3305),i=t(7294),a=t(9288),c=t(5893),s=(0,a.zo)("blockquote",{fontWeight:"300",color:"$slate11",padding:"$gr1 0"}),Markdown_Blockquote=function(e){var r=e.children;return(0,c.jsx)(s,{children:r})},l=t(5407),d=t(1664),u=t.n(d);u();var p=t(3235);t(6803),t(7058),t(3981);var f=t(633),MDX_Card=function(e){var r=e.iiifContent,t=(0,i.useState)(),n=t[0],o=t[1];return((0,i.useEffect)(function(){var e=f.find(function(e){return e.id===r});e&&o({id:r,type:"Manifest",label:e.label,thumbnail:e.thumbnail,homepage:[{id:"/works/".concat(e.slug),label:e.label,type:"Text"}]})},[r]),n)?(0,c.jsx)(p.Z,{resource:n}):null},g=t(2765),v=(0,a.zo)("div",{position:"relative",button:{position:"absolute",marginTop:"-$gr2",right:"$gr3"}}),b=(0,a.zo)("pre",{backgroundColor:"$indigo3",padding:"$gr3",borderRadius:"5px",lineHeight:"1.382em",overflowX:"scroll",overflowY:"visible",boxShadow:"inset 1px 1px 2px  ".concat(g.EhR.indigoA3),zIndex:"0"}),h=(0,a.zo)("code",{backgroundColor:"$indigo3",padding:"3px $gr1",borderRadius:"5px",fontSize:"$gr3",color:"$indigo11",boxShadow:"1px 1px 1px  ".concat(g.EhR.indigoA6)}),y=t(7795),j=t(2469),m=t(640),x=t.n(m),w={plain:{color:"var(--colors-indigo12)",fontSize:.9*t(5049).hO,fontFamily:"Menlo, monospace"},styles:[{types:["boolean","string"],style:{color:"var(--colors-indigo10)"}},{types:["operator"],style:{color:"var(--colors-indigo11)"}},{types:["punctuation"],style:{color:"var(--colors-indigo8)"}}]};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Code_Code=function(e){var r=e.children,t=e.language;return(0,c.jsx)(y.ZP,_objectSpread(_objectSpread({},y.lG),{},{theme:w,code:r,language:t,children:function(e){var t=e.style,n=e.tokens,o=e.getLineProps,i=e.getTokenProps;return(0,c.jsxs)(v,{children:[(0,c.jsxs)(l.O,{buttonSize:"tiny",buttonType:"primary","aria-label":"Copy Code",onClick:function(){x()(r)},css:{display:"flex",alignItems:"center"},children:["Copy\xa0",(0,c.jsx)(j.TIy,{})]}),(0,c.jsx)(b,{style:t,children:n.map(function(e,r){return(0,c.jsx)("div",_objectSpread(_objectSpread({},o({line:e,key:r})),{},{children:e.map(function(e,t){return(0,c.jsx)("span",_objectSpread({},i({token:e,key:t})),r)})}),r)})})]})}}))},O=t(218),S=t(3448),$=t(2929),P=t(5152),Z=t.n(P)()(function(){return Promise.all([t.e(318),t.e(401),t.e(77)]).then(t.bind(t,5077)).then(function(e){return e.Scroll})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}}),_=t(7118),C=t(1522),D={showTitle:!0,showIIIFBadge:!1,informationPanel:{open:!1,renderToggle:!1}},k=t(859);function MDX_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function MDX_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?MDX_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):MDX_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var z=MDX_objectSpread({h1:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h1"},e))},h2:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h2",id:(0,k.getSlug)(null==e?void 0:e.children)},e))},h3:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h3"},e))},h4:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h4"},e))},h5:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h5"},e))},code:function(e){return(0,c.jsx)(h,MDX_objectSpread({},e))},blockquote:function(e){return(0,c.jsx)(Markdown_Blockquote,MDX_objectSpread({},e))},pre:function(e){var r,t,n,o,i,a=null==e?void 0:null===(r=e.children)||void 0===r?void 0:null===(t=r.props)||void 0===t?void 0:t.children,s=null==e?void 0:null===(n=e.children)||void 0===n?void 0:null===(o=n.props)||void 0===o?void 0:null===(i=o.className)||void 0===i?void 0:i.replace("language-","");return(0,c.jsx)(Code_Code,{language:s,children:null==a?void 0:a.trim()})}},{Button:function(e){var r=e.buttonType,t=e.children,n=e.href,o=e.target;return(0,c.jsx)(l.O,{href:n,buttonType:r,as:n?u():"button",target:o,children:t})},ButtonWrapper:l.W,Card:MDX_Card,ReferencedItems:function(){var e,r=(0,i.useContext)(S.Z);return(0,c.jsx)($.Z,{children:null===(e=r.referencedManifests)||void 0===e?void 0:e.map(function(e,r){return(0,c.jsx)(MDX_Card,{iiifContent:e},"card-".concat(e,"-").concat(r))})})},Scroll:function(e){var r=e.iiifContent;return(0,c.jsx)(Z,{iiifContent:r,offset:120})},Slider:function(e){var r=e.iiifContent;return(0,c.jsx)(_.Z,{iiifContent:r})},Viewer:function(e){var r=e.iiifContent,t=e.options;return(0,c.jsx)(C.Z,{iiifContent:r,options:void 0===t?D:t})}}),MDX=function(e){return(0,c.jsx)(o.R,MDX_objectSpread(MDX_objectSpread({},e),{},{components:z}))}},218:function(e,r,t){"use strict";t.d(r,{Z:function(){return Heading_Heading}}),t(7294);var n=(0,t(9288).zo)("h2",{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level=h1]":{margin:"$gr4 0",fontSize:"$gr8",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.02em",lineHeight:"1.1","@sm":{fontSize:"$gr7"}},"&[data-level=h2]":{margin:"$gr5 0 $gr4",fontSize:"$gr7",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.01em","@sm":{fontSize:"$gr5"}},"&[data-level=h3]":{margin:"$gr5 0 $gr3",color:"$slate11",fontSize:"$gr6",fontWeight:"300",fontFamily:"$sans",letterSpacing:"-0.01em","@sm":{fontSize:"$gr4"}},"&[data-level=h4]":{},"&[data-level=h5]":{},"&[data-level=h6]":{}}),o=t(5893),Heading_Heading=function(e){var r=e.as,t=void 0===r?"h2":r,i=e.css,a=e.id,c=e.isHidden,s=e.children;return(0,o.jsx)(n,{as:t,isHidden:void 0!==c&&c,"data-level":t,css:void 0===i?{}:i,id:a,children:(0,o.jsx)(o.Fragment,{children:s})})}},7118:function(e,r,t){"use strict";t.d(r,{Z:function(){return Viewer_Slider}});var n,o,i=t(9499);t(4614);var a=t(9897);t(7294);var c=(0,t(9288).zo)("div",(n={marginBottom:"$gr5","@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}}},(0,i.Z)(n,"& .clover-slider-header-label",{fontSize:"$gr6",fontFamily:"$sans",fontWeight:"300 !important",letterSpacing:"-0.01em"}),(0,i.Z)(n,"& .clover-slider-header-summary",{display:"block",fontSize:"$gr3 !important",color:"$slate11 "}),(0,i.Z)(n,"& .clover-slider-header-view-all",{color:"$slate1"}),(0,i.Z)(n,".swiper-slide",{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}}),(0,i.Z)(n,"figure",{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"2px 2px 5px #0001"}}),(0,i.Z)(n,"figcaption",{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"}}),(0,i.Z)(n,"& a figcaption, & a:visited figcaption",{color:"$slate12"}),(0,i.Z)(n,"& a:hover figcaption, & a:focus figcaption",{color:"$indigo11"}),n)),s=t(4430),l=t(5049),d=t(7668),u=t(5893),spaceBetween=function(e){return l.hO*(0,s.gr)(e)},p=(o={},(0,i.Z)(o,d.b.xxs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,i.Z)(o,d.b.xs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,i.Z)(o,d.b.sm,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(1)}),(0,i.Z)(o,d.b.md,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(2)}),(0,i.Z)(o,d.b.lg,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),(0,i.Z)(o,d.b.xl,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),o),Viewer_Slider=function(e){var r=e.iiifContent;return(0,u.jsx)(c,{children:(0,u.jsx)(a.default,{iiifContent:r,options:{breakpoints:p}})})}},1522:function(e,r,t){"use strict";var n=t(9499);t(7294);var o=t(5152),i=t.n(o),a=t(5893);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var c=i()(function(){return Promise.all([t.e(318),t.e(401),t.e(77)]).then(t.bind(t,5077)).then(function(e){return e.Viewer})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}}),s={colors:{accent:"var(--colors-indigo10)",accentAlt:"var(--colors-indigo11)",accentMuted:"var(--colors-indigo8)",primary:"var(--colors-slate12)",primaryAlt:"var(--colors-slate12)",primaryMuted:"var(--colors-slate10)",secondary:"var(--colors-slate1)",secondaryAlt:"var(--colors-slate3)",secondaryMuted:"var(--colors-slate2)"},fonts:{sans:"var(--canopy-sans-font)",display:"var(--canopy-display-font)"}},l={canvasBackgroundColor:"var(--colors-slate4)",canvasHeight:"600px",openSeadragon:{gestureSettingsMouse:{scrollToZoom:!1}},informationPanel:{open:!1,renderAbout:!1,renderToggle:!1},showTitle:!1,showIIIFBadge:!1};r.Z=function(e){var r=e.iiifContent,t=e.options;return(0,a.jsx)(c,{iiifContent:r,options:_objectSpread(_objectSpread({},l),t),customTheme:s})}},3448:function(e,r,t){"use strict";var n=t(7294).createContext({referencedManifests:[]});r.Z=n},859:function(e,r,t){var n=t(930);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){n(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var o=t(3984),i={lower:!0,strict:!0,trim:!0};function getSlug(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.substring(0,r)}(o(e,i),100)}e.exports={getSlug:getSlug,getUniqueSlug:function(e,r){var t,o=getSlug(e),i=(t=r[o])?t+1:1;return{slug:i>1?"".concat(o,"-").concat(i):o,allSlugs:_objectSpread(_objectSpread({},r),{},n({},o,i))}}}},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Date","slug":"date","values":[]},{"label":"Subject","slug":"subject","values":[]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"Rushd al-ghāfil","summary":"Manuscript circa 1800","metadata":""}]')}}]);