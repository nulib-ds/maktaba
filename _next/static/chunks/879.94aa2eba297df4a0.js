(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{6078:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Map_Map}}),n(9369),n(9429),n(3656);var r=n(5715),i=n(9635),o=n(2013),a=n(5996),c=n(577),s=n(2604),u=n(1830),l=n(7294),p=n(6873),f=n(5243),h=n.n(f),d=n(1664),b=n.n(d),g=(0,n(2854).zo)("div",{height:"100vh",position:"relative",zIndex:"0",".map-container":{height:"100%",width:"100%",figure:{width:"100%",margin:"0",padding:"0"}},figure:{img:{width:"100%",maxHeight:"200px"},video:{display:"none"}}}),j=n(9499),m=n(6835),y=n(6864);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,j.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n(5732);var x=(0,n(8806).Au)(function(e,t){var n=(0,y.Z)({},e),r={},i={};Object.entries(n).forEach(function(e){var t=(0,m.Z)(e,2),n=t[0],o=t[1];return n.startsWith("on")?i[n]=o:r[n]=o});var o=h().markerClusterGroup(r);return Object.entries(i).forEach(function(e){var t=(0,m.Z)(e,2),n=t[0],r=t[1],i="cluster".concat(n.substring(2).toLowerCase());o.on(i,r)}),{instance:o,context:_objectSpread(_objectSpread({},t),{},{layerContainer:o})}}),O=n(7459),getLabel=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";if(!e)return["Untitled"];if("string"==typeof e)return[e];if(!e[t]){var n=Object.getOwnPropertyNames(e);if(n.length>0)return e[n[0]]}return e[t]},v=n(5893),Map_Map=function(e){var t=e.manifests,n={defaultBounds:[[51.505,-.09]],icon:{iconUrl:"images/marker-icon.png",iconSize:[24,36],iconAnchor:[12,36]},tileLayers:[{name:"OpenStreetMap",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}]},f=n.tileLayers,d=n.defaultBounds,j=(0,l.useRef)(null),m=h().icon(n.icon),y=(0,l.useState)(d),w=y[0],P=y[1];return(0,l.useEffect)(function(){var e=(0,O.z)(t);e.length>0&&P(e)},[t]),(0,l.useEffect)(function(){j.current&&w&&j.current.fitBounds(w)},[j,w]),(0,v.jsx)(g,{children:(0,v.jsxs)(r.h,{className:"map-container",bounds:w,scrollWheelZoom:!1,ref:j,children:[(0,v.jsx)(i.et,{position:"topright",children:f.map(function(e,t){return 0===t?(0,v.jsx)(i.et.BaseLayer,{name:e.name,checked:!0,children:(0,v.jsx)(o.I,{url:e.url,attribution:e.attribution})},t):(0,v.jsx)(i.et.BaseLayer,{name:e.name,children:(0,v.jsx)(o.I,{url:e.url,attribution:e.attribution})},t)})}),(0,v.jsx)(x,{children:(0,v.jsx)(a.$,{children:t.map(function(e){return e.features.map(function(t,n){return(0,v.jsx)(c.J,{position:[t.geometry.coordinates[1],t.geometry.coordinates[0]],icon:m,children:(0,v.jsx)(s.G,{children:(0,v.jsx)("figure",{children:(0,v.jsxs)(b(),{href:e.slug,children:[(0,v.jsx)(u.Thumbnail,{thumbnail:e.thumbnail})," ",(0,v.jsx)("figcaption",{children:(0,v.jsx)(p.Z,{className:"slide-inner",isFlex:!0,children:(0,v.jsx)(u.Label,{label:getLabel(t.properties.label),as:"span",className:"slide-label"})})})]})})})},n)})})})})]})})}},2868:function(){},4777:function(){},9830:function(){},209:function(){}}]);