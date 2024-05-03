(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{4259:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return i}});var r,n,o="refresh",u="navigate",a="restore",l="server-patch",f="prefetch",c="fast-refresh",i="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4113:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(579),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9218:function(e,t,r){"use strict";var n=r(930),o=r(5696),u=r(3323),a=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});var l=r(8754)._(r(7294)),f=r(4822),c=r(860),i=r(6258),s=r(5195),d=r(5146),p=r(3896),v=r(5364),b=r(7313),y=r(4113),h=r(6524),O=r(4259),g=new Set;function prefetch(e,t,r,n,o,u){if(u||(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(a))return;g.add(a)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}var _=l.default.forwardRef(function(e,t){var r,n,i=e.href,g=e.as,_=e.children,j=e.prefetch,m=void 0===j?null:j,P=e.passHref,C=e.replace,E=e.shallow,M=e.scroll,T=e.locale,R=e.onClick,S=e.onMouseEnter,k=e.onTouchStart,w=e.legacyBehavior,A=void 0!==w&&w,I=u(e,a);r=_,A&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var L=l.default.useContext(p.RouterContext),N=l.default.useContext(v.AppRouterContext),x=null!=L?L:N,U=!L,D=!1!==m,K=null===m?O.PrefetchKind.AUTO:O.PrefetchKind.FULL,H=l.default.useMemo(function(){if(!L){var e=formatStringOrUrl(i);return{href:e,as:g?formatStringOrUrl(g):e}}var t=o((0,f.resolveHref)(L,i,!0),2),r=t[0],n=t[1];return{href:r,as:g?(0,f.resolveHref)(L,g):n||r}},[L,i,g]),F=H.href,B=H.as,V=l.default.useRef(F),q=l.default.useRef(B);A&&(n=l.default.Children.only(r));var z=A?n&&"object"==typeof n&&n.ref:t,G=o((0,b.useIntersection)({rootMargin:"200px"}),3),Y=G[0],J=G[1],Q=G[2],W=l.default.useCallback(function(e){(q.current!==B||V.current!==F)&&(Q(),q.current=B,V.current=F),Y(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[B,z,F,Q,Y]);l.default.useEffect(function(){x&&J&&D&&prefetch(x,F,B,{locale:T},{kind:K},U)},[B,F,J,T,D,null==L?void 0:L.locale,x,U,K]);var X={ref:W,onClick:function(e){A||"function"!=typeof R||R(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),x&&!e.defaultPrevented&&function(e,t,r,n,o,u,a,f,i,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!i&&!(0,c.isLocalURL)(r)))){e.preventDefault();var d,navigate=function(){var e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:f,scroll:e}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};i?l.default.startTransition(navigate):navigate()}}(e,x,F,B,C,E,M,T,U,D)},onMouseEnter:function(e){A||"function"!=typeof S||S(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),x&&(D||!U)&&prefetch(x,F,B,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:K},U)},onTouchStart:function(e){A||"function"!=typeof k||k(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),x&&(D||!U)&&prefetch(x,F,B,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:K},U)}};if((0,s.isAbsoluteUrl)(B))X.href=B;else if(!A||P||"a"===n.type&&!("href"in n.props)){var Z=void 0!==T?T:null==L?void 0:L.locale,$=(null==L?void 0:L.isLocaleDomain)&&(0,y.getDomainLocale)(B,Z,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);X.href=$||(0,h.addBasePath)((0,d.addLocale)(B,Z,null==L?void 0:L.defaultLocale))}return A?l.default.cloneElement(n,X):l.default.createElement("a",_objectSpread(_objectSpread({},I),X),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7313:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});var o=r(7294),u=r(3001),a="function"==typeof IntersectionObserver,l=new Map,f=[];function useIntersection(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!a,i=n((0,o.useState)(!1),2),s=i[0],d=i[1],p=(0,o.useRef)(null),v=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(a){if(!c&&!s){var e,n,o,i,v=p.current;if(v&&v.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=f.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},f.push(r),l.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(i=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(i.delete(v),o.unobserve(v),0===i.size){o.disconnect(),l.delete(n);var e=f.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&f.splice(e,1)}}}}else if(!s){var b=(0,u.requestIdleCallback)(function(){return d(!0)});return function(){return(0,u.cancelIdleCallback)(b)}}},[c,r,t,s,p.current]),[v,s,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(9218)},1163:function(e,t,r){e.exports=r(1951)}}]);