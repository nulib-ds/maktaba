(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4681:function(e,t,r){"use strict";r.d(t,{Z:function(){return Related_Related}});var n=r(218);r(7294);var i=(0,r(9288).zo)("section",{padding:"$gr4 0"}),l=r(7118),a=r(5893),Related_Related=function(e){var t=e.collections,r=e.title,o=void 0===r?"Related Works":r;return(0,a.jsxs)(i,{children:[o&&(0,a.jsx)(n.Z,{as:"h2",children:o}),t.map(function(e){return(0,a.jsx)(l.Z,{iiifContent:e},e)})]})}},6421:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return O},default:function(){return pages}});var n,i=r(9499),l=r(4731),a=r(4729);r(4614),r(55),r(4661),r(9812);var o=r(67),s=r(1830),c=r(7294);function isObject(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function extend(e,t){let r=["__proto__","constructor","prototype"];Object.keys(t).filter(e=>0>r.indexOf(e)).forEach(r=>{void 0===e[r]?e[r]=t[r]:isObject(t[r])&&isObject(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:extend(e[r],t[r]):e[r]=t[r]})}function needsNavigation(e={}){return e.navigation&&void 0===e.navigation.nextEl&&void 0===e.navigation.prevEl}function needsPagination(e={}){return e.pagination&&void 0===e.pagination.el}function needsScrollbar(e={}){return e.scrollbar&&void 0===e.scrollbar.el}function uniqueClasses(e=""){let t=e.split(" ").map(e=>e.trim()).filter(e=>!!e),r=[];return t.forEach(e=>{0>r.indexOf(e)&&r.push(e)}),r.join(" ")}let d=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function isChildSwiperSlide(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}let updateOnVirtualData=e=>{e&&!e.destroyed&&e.params.virtual&&(!e.params.virtual||e.params.virtual.enabled)&&(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function useIsomorphicLayoutEffect(e,t){return"undefined"==typeof window?(0,c.useEffect)(e,t):(0,c.useLayoutEffect)(e,t)}let u=(0,c.createContext)(null),p=(0,c.createContext)(null);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let f=(0,c.forwardRef)(function(e,t){let{className:r,tag:n="div",wrapperTag:i="div",children:l,onSwiper:a,...s}=void 0===e?{}:e,u=!1,[f,h]=(0,c.useState)("swiper"),[g,v]=(0,c.useState)(null),[b,w]=(0,c.useState)(!1),m=(0,c.useRef)(!1),x=(0,c.useRef)(null),E=(0,c.useRef)(null),y=(0,c.useRef)(null),_=(0,c.useRef)(null),S=(0,c.useRef)(null),O=(0,c.useRef)(null),j=(0,c.useRef)(null),C=(0,c.useRef)(null),{params:P,passedParams:k,rest:N,events:$}=function(e={},t=!0){let r={on:{}},n={},i={};extend(r,o.ZP.defaults),extend(r,o.ZP.extendedDefaults),r._emitClasses=!0,r.init=!1;let l={},a=d.map(e=>e.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(o=>{void 0!==e[o]&&(a.indexOf(o)>=0?isObject(e[o])?(r[o]={},i[o]={},extend(r[o],e[o]),extend(i[o],e[o])):(r[o]=e[o],i[o]=e[o]):0===o.search(/on[A-Z]/)&&"function"==typeof e[o]?t?n[`${o[2].toLowerCase()}${o.substr(3)}`]=e[o]:r.on[`${o[2].toLowerCase()}${o.substr(3)}`]=e[o]:l[o]=e[o])}),["navigation","pagination","scrollbar"].forEach(e=>{!0===r[e]&&(r[e]={}),!1===r[e]&&delete r[e]}),{params:r,passedParams:i,rest:l,events:n}}(s),{slides:R,slots:z}=function(e){let t=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return c.Children.toArray(e).forEach(e=>{if(isChildSwiperSlide(e))t.push(e);else if(e.props&&e.props.slot&&r[e.props.slot])r[e.props.slot].push(e);else if(e.props&&e.props.children){let n=function processChildren(e){let t=[];return c.Children.toArray(e).forEach(e=>{isChildSwiperSlide(e)?t.push(e):e.props&&e.props.children&&processChildren(e.props.children).forEach(e=>t.push(e))}),t}(e.props.children);n.length>0?n.forEach(e=>t.push(e)):r["container-end"].push(e)}else r["container-end"].push(e)}),{slides:t,slots:r}}(l),onBeforeBreakpoint=()=>{w(!b)};Object.assign(P.on,{_containerClasses(e,t){h(t)}});let initSwiper=()=>{Object.assign(P.on,$),u=!0;let e={...P};if(delete e.wrapperClass,E.current=new o.ZP(e),E.current.virtual&&E.current.params.virtual.enabled){E.current.virtual.slides=R;let e={cache:!1,slides:R,renderExternal:v,renderExternalUpdate:!1};extend(E.current.params.virtual,e),extend(E.current.originalParams.virtual,e)}};x.current||initSwiper(),E.current&&E.current.on("_beforeBreakpoint",onBeforeBreakpoint);let attachEvents=()=>{!u&&$&&E.current&&Object.keys($).forEach(e=>{E.current.on(e,$[e])})},detachEvents=()=>{$&&E.current&&Object.keys($).forEach(e=>{E.current.off(e,$[e])})};return(0,c.useEffect)(()=>()=>{E.current&&E.current.off("_beforeBreakpoint",onBeforeBreakpoint)}),(0,c.useEffect)(()=>{!m.current&&E.current&&(E.current.emitSlidesClasses(),m.current=!0)}),useIsomorphicLayoutEffect(()=>{if(t&&(t.current=x.current),x.current)return E.current.destroyed&&initSwiper(),function({el:e,nextEl:t,prevEl:r,paginationEl:n,scrollbarEl:i,swiper:l},a){needsNavigation(a)&&t&&r&&(l.params.navigation.nextEl=t,l.originalParams.navigation.nextEl=t,l.params.navigation.prevEl=r,l.originalParams.navigation.prevEl=r),needsPagination(a)&&n&&(l.params.pagination.el=n,l.originalParams.pagination.el=n),needsScrollbar(a)&&i&&(l.params.scrollbar.el=i,l.originalParams.scrollbar.el=i),l.init(e)}({el:x.current,nextEl:S.current,prevEl:O.current,paginationEl:j.current,scrollbarEl:C.current,swiper:E.current},P),a&&a(E.current),()=>{E.current&&!E.current.destroyed&&E.current.destroy(!0,!1)}},[]),useIsomorphicLayoutEffect(()=>{attachEvents();let e=function(e,t,r,n,i){let l=[];if(!t)return l;let addKey=e=>{0>l.indexOf(e)&&l.push(e)};if(r&&n){let e=n.map(i),t=r.map(i);e.join("")!==t.join("")&&addKey("children"),n.length!==r.length&&addKey("children")}let a=d.filter(e=>"_"===e[0]).map(e=>e.replace(/_/,""));return a.forEach(r=>{if(r in e&&r in t){if(isObject(e[r])&&isObject(t[r])){let n=Object.keys(e[r]),i=Object.keys(t[r]);n.length!==i.length?addKey(r):(n.forEach(n=>{e[r][n]!==t[r][n]&&addKey(r)}),i.forEach(n=>{e[r][n]!==t[r][n]&&addKey(r)}))}else e[r]!==t[r]&&addKey(r)}}),l}(k,y.current,R,_.current,e=>e.key);return y.current=k,_.current=R,e.length&&E.current&&!E.current.destroyed&&function({swiper:e,slides:t,passedParams:r,changedParams:n,nextEl:i,prevEl:l,scrollbarEl:a,paginationEl:o}){let s,c,d,u,p,f,h,g;let v=n.filter(e=>"children"!==e&&"direction"!==e&&"wrapperClass"!==e),{params:b,pagination:w,navigation:m,scrollbar:x,virtual:E,thumbs:y}=e;n.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&b.thumbs&&!b.thumbs.swiper&&(s=!0),n.includes("controller")&&r.controller&&r.controller.control&&b.controller&&!b.controller.control&&(c=!0),n.includes("pagination")&&r.pagination&&(r.pagination.el||o)&&(b.pagination||!1===b.pagination)&&w&&!w.el&&(d=!0),n.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(b.scrollbar||!1===b.scrollbar)&&x&&!x.el&&(u=!0),n.includes("navigation")&&r.navigation&&(r.navigation.prevEl||l)&&(r.navigation.nextEl||i)&&(b.navigation||!1===b.navigation)&&m&&!m.prevEl&&!m.nextEl&&(p=!0);let destroyModule=t=>{e[t]&&(e[t].destroy(),"navigation"===t?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),b[t].prevEl=void 0,b[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),b[t].el=void 0,e[t].el=void 0))};if(n.includes("loop")&&e.isElement&&(b.loop&&!r.loop?f=!0:!b.loop&&r.loop?h=!0:g=!0),v.forEach(e=>{if(isObject(b[e])&&isObject(r[e]))extend(b[e],r[e]),("navigation"===e||"pagination"===e||"scrollbar"===e)&&"enabled"in r[e]&&!r[e].enabled&&destroyModule(e);else{let t=r[e];(!0===t||!1===t)&&("navigation"===e||"pagination"===e||"scrollbar"===e)?!1===t&&destroyModule(e):b[e]=r[e]}}),v.includes("controller")&&!c&&e.controller&&e.controller.control&&b.controller&&b.controller.control&&(e.controller.control=b.controller.control),n.includes("children")&&t&&E&&b.virtual.enabled&&(E.slides=t,E.update(!0)),n.includes("children")&&t&&b.loop&&(g=!0),s){let e=y.init();e&&y.update(!0)}c&&(e.controller.control=b.controller.control),d&&(e.isElement&&(!o||"string"==typeof o)&&((o=document.createElement("div")).classList.add("swiper-pagination"),e.el.shadowEl.appendChild(o)),o&&(b.pagination.el=o),w.init(),w.render(),w.update()),u&&(e.isElement&&(!a||"string"==typeof a)&&((a=document.createElement("div")).classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(a)),a&&(b.scrollbar.el=a),x.init(),x.updateSize(),x.setTranslate()),p&&(e.isElement&&(i&&"string"!=typeof i||((i=document.createElement("div")).classList.add("swiper-button-next"),e.el.shadowEl.appendChild(i)),l&&"string"!=typeof l||((l=document.createElement("div")).classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(l))),i&&(b.navigation.nextEl=i),l&&(b.navigation.prevEl=l),m.init(),m.update()),n.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),n.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),n.includes("direction")&&e.changeDirection(r.direction,!1),(f||g)&&e.loopDestroy(),(h||g)&&e.loopCreate(),e.update()}({swiper:E.current,slides:R,passedParams:k,changedParams:e,nextEl:S.current,prevEl:O.current,scrollbarEl:C.current,paginationEl:j.current}),()=>{detachEvents()}}),useIsomorphicLayoutEffect(()=>{updateOnVirtualData(E.current)},[g]),c.createElement(n,_extends({ref:x,className:uniqueClasses(`${f}${r?` ${r}`:""}`)},N),c.createElement(p.Provider,{value:E.current},z["container-start"],c.createElement(i,{className:function(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}(P.wrapperClass)},z["wrapper-start"],P.virtual?function(e,t,r){if(!r)return null;let getSlideIndex=e=>{let r=e;return e<0?r=t.length+e:r>=t.length&&(r-=t.length),r},n=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`},{from:i,to:l}=r,a=e.params.loop?-t.length:0,o=e.params.loop?2*t.length:t.length,s=[];for(let e=a;e<o;e+=1)e>=i&&e<=l&&s.push(t[getSlideIndex(e)]);return s.map((t,r)=>c.cloneElement(t,{swiper:e,style:n,key:`slide-${r}`}))}(E.current,R,g):R.map((e,t)=>c.cloneElement(e,{swiper:E.current,swiperSlideIndex:t})),z["wrapper-end"]),needsNavigation(P)&&c.createElement(c.Fragment,null,c.createElement("div",{ref:O,className:"swiper-button-prev"}),c.createElement("div",{ref:S,className:"swiper-button-next"})),needsScrollbar(P)&&c.createElement("div",{ref:C,className:"swiper-scrollbar"}),needsPagination(P)&&c.createElement("div",{ref:j,className:"swiper-pagination"}),z["container-end"]))});function swiper_slide_extends(){return(swiper_slide_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}f.displayName="Swiper";let h=(0,c.forwardRef)(function(e,t){let{tag:r="div",children:n,className:i="",swiper:l,zoom:a,lazy:o,virtualIndex:s,swiperSlideIndex:d,...p}=void 0===e?{}:e,f=(0,c.useRef)(null),[h,g]=(0,c.useState)("swiper-slide"),[v,b]=(0,c.useState)(!1);function updateClasses(e,t,r){t===f.current&&g(r)}useIsomorphicLayoutEffect(()=>{if(void 0!==d&&(f.current.swiperSlideIndex=d),t&&(t.current=f.current),f.current&&l){if(l.destroyed){"swiper-slide"!==h&&g("swiper-slide");return}return l.on("_slideClass",updateClasses),()=>{l&&l.off("_slideClass",updateClasses)}}}),useIsomorphicLayoutEffect(()=>{l&&f.current&&!l.destroyed&&g(l.getSlideClasses(f.current))},[l]);let w={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},renderChildren=()=>"function"==typeof n?n(w):n;return c.createElement(r,swiper_slide_extends({ref:f,className:uniqueClasses(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":s,onLoad:()=>{b(!0)}},p),a&&c.createElement(u.Provider,{value:w},c.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof a?a:void 0},renderChildren(),o&&!v&&c.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&c.createElement(u.Provider,{value:w},renderChildren(),o&&!v&&c.createElement("div",{className:"swiper-lazy-preloader"})))});h.displayName="SwiperSlide";var g=r(2765),v=r(9288),b=(0,v.zo)("div",{position:"absolute",width:"100%",height:"100%",zIndex:"0",backgroundColor:g.aeJ.slate12,".swiper":{backgroundColor:"transparent",width:"100%",height:"100%",position:"relative",overflow:"unset",".swiper-wrapper":{},".swiper-button-prev, .swiper-button-next":{color:g.aeJ.slate1},".swiper-pagination-bullet":{backgroundColor:g.BZJ.slateA7,opacity:"1"},".swiper-pagination-bullet-active":{backgroundColor:g.aeJ.slate1},".swiper-slide":{display:"flex",backgroundColor:g.aeJ.slate12,a:{display:"flex",color:"".concat(g.aeJ.slate12),textDecoration:"none","&:hover, &:focus":{color:"".concat(g.QNj.indigo11)}},figure:{width:"100%",position:"relative",margin:"0",padding:"0","img, video":{position:"absolute",width:"100%",height:"100%",objectFit:"cover"},"&::before":{backgroundColor:"$slate1",opacity:"0.92",color:"transparent",width:"100%",padding:"$gr3 0",fontSize:"$gr5",lineHeight:"1.15em",position:"absolute",zIndex:"3",bottom:"0",left:"0",content:"-",boxShadow:"-1px -1px 2px  ".concat(g.VS.slateA3)},figcaption:(n={position:"absolute",zIndex:"4",bottom:"0",left:"0",display:"flex",flexDirection:"column",alignItems:"flex-start",textAlign:"left",backgroundColor:"transparent",width:"100%",color:"$slate12"},(0,i.Z)(n,"> ".concat(a.N),{justifyContent:"flex-end"}),(0,i.Z)(n,".slide-label",{padding:"$gr3 0",fontFamily:"$display",fontSize:"$gr5",fontWeight:"400",display:"flex",marginRight:"$gr2",transition:"$canopyAll",letterSpacing:"-0.01em"}),n)}}}}),w=(0,v.zo)("div",{height:"calc(100vh - 61.25px)",minHeight:"300px",maxHeight:"500px",backgroundColor:g.aeJ.slate12,position:"relative",zIndex:"1"}),m=r(1664),x=r.n(m),E=r(5893),Hero_Hero=function(e){var t,r=e.collection;return r?(0,E.jsx)(b,{children:(0,E.jsx)(f,{autoplay:{delay:1e4,disableOnInteraction:!0,pauseOnMouseEnter:!0},effect:"fade",keyboard:{enabled:!0},loop:!0,modules:[o.pt,o.xW,o.N1,o.W_],navigation:(null==r?void 0:null===(t=r.items)||void 0===t?void 0:t.length)>1,slidesPerView:1,speed:200,children:r.items.map(function(e){return(0,E.jsx)(h,{children:(0,E.jsx)("figure",{children:(0,E.jsxs)(x(),{href:e.homepage[0].id,children:[(0,E.jsx)(s.Thumbnail,{thumbnail:e.thumbnail}),(0,E.jsx)("figcaption",{children:(0,E.jsx)(a.Z,{className:"slide-inner",isFlex:!0,children:(0,E.jsx)(s.Label,{label:e.label,as:"span",className:"slide-label"})})})]})})},e.id)})})}):(0,E.jsx)(E.Fragment,{})},y=r(7843),_=r(5014),S=r(4681);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var O=!0,pages=function(e){var t=e.featuredItems,r=e.frontMatter,n=e.metadataCollections,o=e.source;return(0,E.jsxs)(y.Z,{children:[r.showHero&&(0,E.jsx)(w,{children:(0,E.jsx)(Hero_Hero,{collection:t})}),(0,E.jsxs)(a.Z,{children:[(0,E.jsx)("div",{children:(0,E.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},o))}),r.showHighlighted&&(0,E.jsx)(S.Z,{collections:n,title:(0,_.EK)("homepageHighlightedWorks")})]})]})}},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6421)}])},55:function(){},4661:function(){},9812:function(){}},function(e){e.O(0,[412,409,971,642,339,928,389,731,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);