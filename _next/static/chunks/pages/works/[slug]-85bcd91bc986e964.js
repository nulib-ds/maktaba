(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6202:function(e,s,c){"use strict";c.d(s,{Z:function(){return Related_Related}});var i,a,l=c(218);c(7294);var t=c(9288),m=(0,t.zo)("section",{padding:"$gr4 0"}),o=c(9499);c(4614);var u=c(9897),n=(0,t.zo)("div",(i={marginBottom:"$gr5","@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}}},(0,o.Z)(i,"& .clover-slider-header-label",{fontSize:"$gr6",fontFamily:"$sans",fontWeight:"300 !important",letterSpacing:"-0.01em"}),(0,o.Z)(i,"& .clover-slider-header-summary",{display:"block",fontSize:"$gr3 !important",color:"$slate11 "}),(0,o.Z)(i,"& .clover-slider-header-view-all",{color:"$slate1"}),(0,o.Z)(i,".swiper-slide",{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}}),(0,o.Z)(i,"figure",{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"2px 2px 5px #0001"}}),(0,o.Z)(i,"figcaption",{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"}}),(0,o.Z)(i,"& a figcaption, & a:visited figcaption",{color:"$slate12"}),(0,o.Z)(i,"& a:hover figcaption, & a:focus figcaption",{color:"$indigo11"}),i)),d=c(4430),x=c(5049),g=c(7668),z=c(5893),spaceBetween=function(e){return x.hO*(0,d.gr)(e)},r=(a={},(0,o.Z)(a,g.b.xxs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,o.Z)(a,g.b.xs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,o.Z)(a,g.b.sm,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(1)}),(0,o.Z)(a,g.b.md,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(2)}),(0,o.Z)(a,g.b.lg,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),(0,o.Z)(a,g.b.xl,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),a),Viewer_Slider=function(e){var s=e.collectionId;return(0,z.jsx)(n,{children:(0,z.jsx)(u.default,{iiifContent:s,options:{breakpoints:r}})})},Related_Related=function(e){var s=e.collections,c=e.title,i=void 0===c?"Related Works":c;return(0,z.jsxs)(m,{children:[i&&(0,z.jsx)(l.Z,{as:"h2",children:i}),s.map(function(e){return(0,z.jsx)(Viewer_Slider,{collectionId:e},e)})]})}},1098:function(e,s,c){"use strict";c.r(s),c.d(s,{__N_SSG:function(){return v},default:function(){return Work}});var i=c(4729),a=c(7843),l=c(6202),t=c(1522),m=c(1830),o=c(9288),u=(0,o.zo)("div",{}),n=(0,o.zo)("section",{maxWidth:"1280px",margin:"auto",position:"relative",paddingTop:"$gr3",".work-summary":{fontSize:"$gr5",fontFamily:"$sans",fontWeight:"300",color:"$slate11",marginBottom:"$gr4","@sm":{fontSize:"$gr4",marginBottom:"$gr4"}},"dl, .work-summary":{img:{maxHeight:"$gr5 !important",margin:"$gr1 0","@sm":{maxHeight:"$gr4 !important"}}}}),d=(0,o.zo)("div",{dl:{dt:{padding:"$gr3 0 $gr2",fontFamily:"$display"},dd:{padding:"0 0 $gr1",margin:"0"}}}),x=c(7058),g=c(218),z=c(1664),r=c.n(z),p=c(5893),Work_ManifestId=function(e){var s=e.manifestId;return(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:"IIIF Manifest"}),(0,p.jsx)("dd",{style:{wordBreak:"break-word"},children:(0,p.jsx)(r(),{href:s,children:s})})]})};c(7294);var ValueAsListItem=function(e){var s=e.searchParam,c=e.searchValues,i=e.value;if(!i)return(0,p.jsx)(p.Fragment,{});var a=null==c?void 0:c.find(function(e){return e.value===i});return(0,p.jsx)(r(),{href:"/search?".concat(s,"=").concat(encodeURIComponent(null==a?void 0:a.slug)),children:(0,p.jsx)("span",{dangerouslySetInnerHTML:{__html:i}})})},Inner=function(e){var s=e.manifest,c=s.id,i=s.label,a=s.metadata,l=s.requiredStatement,t=s.summary,o=x.map(function(e){return{Content:(0,p.jsx)(ValueAsListItem,{searchParam:e.slug,searchValues:e.values}),matchingLabel:{none:[e.label]}}});return(0,p.jsx)(n,{children:(0,p.jsxs)(u,{children:[(0,p.jsx)(g.Z,{as:"h1",children:(0,p.jsx)(m.Label,{label:i,as:"span"})}),t&&(0,p.jsx)(m.Summary,{summary:t,as:"p",className:"work-summary"}),(0,p.jsxs)(d,{children:[a&&(0,p.jsx)(m.Metadata,{customValueContent:o,metadata:a}),l&&(0,p.jsx)(m.RequiredStatement,{requiredStatement:l}),(0,p.jsx)(Work_ManifestId,{manifestId:c})]})]})})},v=!0;function Work(e){var s=e.manifest,c=e.related,m=s.id;return(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(t.Z,{iiifContent:m}),(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(Inner,{manifest:s}),(0,p.jsx)(l.Z,{collections:c})]})]})}},9529:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/[slug]",function(){return c(1098)}])},4614:function(){},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Subject","slug":"subject","values":[{"value":"Cayuse Indians","slug":"cayuse-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Chinookan Indians","slug":"chinookan-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Nez Perc\xe9 Indians","slug":"nez-perce-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Tlakluit Indians","slug":"tlakluit-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Umatilla Indians","slug":"umatilla-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Walla Walla Indians","slug":"walla-walla-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]}]},{"label":"Date","slug":"date","values":[{"value":"1910","slug":"1910","doc_count":70,"docs":[2,3,6,8,10,11,14,15,16,18,19,20,21,22,25,26,27,28,29,30,33,35,36,37,38,39,41,42,44,48,49,51,55,56,57,59,60,61,62,64,65,67,68,72,75,78,83,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,102,103,104,109,110,112,115,118]},{"value":"1909","slug":"1909","doc_count":26,"docs":[40,43,45,46,47,50,52,54,58,63,69,70,71,73,74,76,77,79,80,92,94,107,108,114,116,117]},{"value":"1905","slug":"1905","doc_count":12,"docs":[1,7,12,23,24,31,32,34,101,106,111,113]},{"value":"1911","slug":"1911","doc_count":7,"docs":[0,4,53,66,81,82,105]},{"value":"1903","slug":"1903","doc_count":2,"docs":[5,17]},{"value":"1899","slug":"1899","doc_count":1,"docs":[9]},{"value":"1900","slug":"1900","doc_count":1,"docs":[13]}]},{"label":"Dimensions","slug":"dimensions","values":[{"value":"46 x 32 cm [plate size]","slug":"46-x-32-cm-plate-size","doc_count":18,"docs":[1,7,9,13,17,23,24,27,45,69,78,79,101,106,111,116,117,118]},{"value":"13.5 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"135-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":5,"docs":[31,52,59,63,94]},{"value":"46 x 34 cm [plate size]","slug":"46-x-34-cm-plate-size","doc_count":5,"docs":[12,35,44,108,110]},{"value":"18.5 x 13.5 cm [image size], 23 x 17 cm [plate size]","slug":"185-x-135-cm-image-size-23-x-17-cm-plate-size","doc_count":4,"docs":[28,30,49,77]},{"value":"36 x 44 cm [plate size]","slug":"36-x-44-cm-plate-size","doc_count":4,"docs":[72,84,103,107]},{"value":"13.8 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"138-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":3,"docs":[43,71,74]},{"value":"18.2 x 12.6 cm [image size], 23 x 16 cm [plate size]","slug":"182-x-126-cm-image-size-23-x-16-cm-plate-size","doc_count":3,"docs":[10,55,62]},{"value":"18.3 x 12.5 cm [image size], 23 x 16 cm [plate size]","slug":"183-x-125-cm-image-size-23-x-16-cm-plate-size","doc_count":3,"docs":[68,83,97]},{"value":"18.3 x 12.6 cm [image size], 23 x 16 cm [plate size]","slug":"183-x-126-cm-image-size-23-x-16-cm-plate-size","doc_count":3,"docs":[6,41,51]},{"value":"18.6 x 11.9 cm [image size], 23 x 15 cm [plate size]","slug":"186-x-119-cm-image-size-23-x-15-cm-plate-size","doc_count":3,"docs":[11,60,93]},{"value":"18.6 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"186-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":3,"docs":[5,22,39]},{"value":"13.5 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"135-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":2,"docs":[88,92]},{"value":"13.6 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"136-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":2,"docs":[16,34]},{"value":"13.6 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"136-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":2,"docs":[58,76]},{"value":"18.2 x 12.5 cm [image size], 23 x 16 cm [plate size]","slug":"182-x-125-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[89,95]},{"value":"18.4 x 13.5 cm [image size], 23 x 16 cm [plate size]","slug":"184-x-135-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[3,33]},{"value":"18.5 x 11.9 cm [image size], 23 x 15 cm [plate size]","slug":"185-x-119-cm-image-size-23-x-15-cm-plate-size","doc_count":2,"docs":[48,61]},{"value":"18.5 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"185-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":2,"docs":[15,57]},{"value":"18.5 x 13.5 cm [image size], 23 x 16 cm [plate size]","slug":"185-x-135-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[21,104]},{"value":"18.6 x 12 cm [image size], 23 x 16 cm [plate size]","slug":"186-x-12-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[86,98]},{"value":"18.7 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"187-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":2,"docs":[18,29]},{"value":"34 x 44 cm [plate size]","slug":"34-x-44-cm-plate-size","doc_count":2,"docs":[109,112]},{"value":"36 x 43 cm [plate size]","slug":"36-x-43-cm-plate-size","doc_count":2,"docs":[32,46]},{"value":"12.5 x 18.2 cm [image size], 17 x 22 cm [plate size]","slug":"125-x-182-cm-image-size-17-x-22-cm-plate-size","doc_count":1,"docs":[40]},{"value":"13.5 x 18.3 cm [image size], 18 x 21 cm [plate size]","slug":"135-x-183-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[8]},{"value":"13.5 x 18.4 cm [image size], 18 x 21 cm [plate size]","slug":"135-x-184-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[2]},{"value":"13.7 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"137-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":1,"docs":[80]},{"value":"13.7 x 18.6 cm [image size], 18 x 21 cm [plate size]","slug":"137-x-186-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[42]},{"value":"13.9 x 18.5 cm [image size], 18 x 21 cm [plate size]","slug":"139-x-185-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[36]},{"value":"14 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"14-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":1,"docs":[64]},{"value":"14 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"14-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":1,"docs":[73]},{"value":"17.5 x 23.8 cm [image size], 18 x 24 cm [plate size]","slug":"175-x-238-cm-image-size-18-x-24-cm-plate-size","doc_count":1,"docs":[81]},{"value":"17.7 x 20.5 cm [image size], 18 x 21 cm [plate size]","slug":"177-x-205-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[4]},{"value":"18.1 x 8.4 cm [image size], 22 x 11 cm [plate size]","slug":"181-x-84-cm-image-size-22-x-11-cm-plate-size","doc_count":1,"docs":[26]},{"value":"18.2 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"182-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[70]},{"value":"18.2 x 12.6 cm [image size], 22 x 16 cm [plate size]","slug":"182-x-126-cm-image-size-22-x-16-cm-plate-size","doc_count":1,"docs":[102]},{"value":"18.3 x 12.5 cm [image size], 23 x 15 cm [plate size]","slug":"183-x-125-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[37]},{"value":"18.3 x 12.5 cm [image size], 23 x16 cm [plate size]","slug":"183-x-125-cm-image-size-23-x16-cm-plate-size","doc_count":1,"docs":[19]},{"value":"18.3 x 12.6 cm [image size], 23 x 15 cm [plate size]","slug":"183-x-126-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[38]},{"value":"18.4 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"184-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[100]},{"value":"18.4 x 12.6 cm [image size], 22 x 15 cm [plate size]","slug":"184-x-126-cm-image-size-22-x-15-cm-plate-size","doc_count":1,"docs":[75]},{"value":"18.5 x 12.7 cm [image size], 23 x 16 cm [plate size]","slug":"185-x-127-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[65]},{"value":"18.5 x 13.4 cm [image size], 23 x 16 cm [plate size]","slug":"185-x-134-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[50]},{"value":"18.5 x 13.5 cm [image size], 23 x17 cm [plate size]","slug":"185-x-135-cm-image-size-23-x17-cm-plate-size","doc_count":1,"docs":[91]},{"value":"18.5 x 13.6 cm [image size], 23 x 17 cm [plate size]","slug":"185-x-136-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[47]},{"value":"18.6 x 11.9 cm [image size], 23 x15 cm [plate size]","slug":"186-x-119-cm-image-size-23-x15-cm-plate-size","doc_count":1,"docs":[20]},{"value":"18.6 x 13.3 cm [image size], 23 x 16 cm [plate size]","slug":"186-x-133-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[99]},{"value":"18.6 x 13.5 cm [image size], 23 x 17 cm [plate size]","slug":"186-x-135-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[25]},{"value":"18.6 x 13.6 cm [image size], 23 x 16 cm [plate size]","slug":"186-x-136-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[90]},{"value":"18.6 x 13.6 cm [image size], 23 x 17 cm [plate size]","slug":"186-x-136-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[96]},{"value":"18.7 x 13.6 cm [image size], 23 x 17 cm [plate size]","slug":"187-x-136-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[67]},{"value":"18.8 x 9.8 cm [image size], 23 x 13 cm [plate size]","slug":"188-x-98-cm-image-size-23-x-13-cm-plate-size","doc_count":1,"docs":[87]},{"value":"18.8 x 9.9 cm [image size], 23 x 13 cm [plate size]","slug":"188-x-99-cm-image-size-23-x-13-cm-plate-size","doc_count":1,"docs":[54]},{"value":"33 x 25 cm","slug":"33-x-25-cm","doc_count":1,"docs":[0]},{"value":"33 x 44 cm [plate size]","slug":"33-x-44-cm-plate-size","doc_count":1,"docs":[115]},{"value":"34 x 46 cm [plate size]","slug":"34-x-46-cm-plate-size","doc_count":1,"docs":[114]},{"value":"45 x 31 cm [plate size]","slug":"45-x-31-cm-plate-size","doc_count":1,"docs":[113]},{"value":"45 x 32 cm [plate size]","slug":"45-x-32-cm-plate-size","doc_count":1,"docs":[56]},{"value":"46 x 30 cm [plate size]","slug":"46-x-30-cm-plate-size","doc_count":1,"docs":[85]},{"value":"46 x 31 cm [plate size]","slug":"46-x-31-cm-plate-size","doc_count":1,"docs":[14]}]}]')}},function(e){e.O(0,[412,409,971,897,41,995,774,888,179],function(){return e(e.s=9529)}),_N_E=e.O()}]);