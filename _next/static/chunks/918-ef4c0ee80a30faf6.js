(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{1856:function(e,r,t){"use strict";t.d(r,{Z:function(){return Header_Header}});var n=t(2854),a=(0,n.zo)("div",{flexGrow:"1",display:"none",justifyContent:"flex-end",button:{display:"flex",flexDirection:"column",justifyContent:"center",background:"transparent",border:"none",fontSize:"$gr3",height:"calc(($gr1 * 2) + $gr4 + 1px)",cursor:"pointer"},"@sm":{display:"flex"}}),c=(0,n.zo)("div",{flexGrow:"1",display:"flex",justifyContent:"flex-end","@sm":{flexDirection:"column-reverse",backgroundColor:"var(--gray-1)",position:"absolute",width:"100%",padding:"$gr1 0 $gr3",overflow:"hidden",left:"0",top:"-10000px",boxShadow:"var(--shadow-4)"},variants:{showNav:{true:{top:"calc($gr4 + ($gr2 * 2))"}}}}),o=(0,n.zo)("div",{width:"100%",padding:"$gr1 $gr5",display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:"1rem",lineHeight:"1.5rem",alignItems:"center",zIndex:"1",boxShadow:"var(--shadow-4)",boxSizing:"border-box","@xl":{padding:"$gr1 $gr4"},"@lg":{padding:"$gr1 $gr4"},"@md":{padding:"$gr1 $gr4"},"@sm":{padding:"$gr1 $gr4"},"@xs":{padding:"$gr1 $gr3"},"@xxs":{padding:"$gr1 $gr3"}}),i=(0,n.zo)("header",{position:"fixed",width:"100%",zIndex:"10",top:"0",display:"flex",flexDirection:"column",transition:"$canopyOpacity",opacity:"1",backgroundColor:"var(--gray-1)",variants:{isVisible:{false:{opacity:"0"}}}}),s=t(7294),l=t(2469),d=t(1426),u=t(1664),g=t.n(u),p=t(29),f=t(7794),h=t.n(f),v=(0,t(6744).zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",paddingLeft:"$gr2",select:{color:"var(--gray-10)",background:"none",border:"none",fontFamily:"$display",fontSize:"$gr3",cursor:"pointer","&:hover, &:focus":{color:"var(--accent-11)"}}}),m=t(5014),x=t(7642),y=t(5893),Locale_Locale=function(){var e,r=(0,x.MQ)(),t=r.canopyState,n=r.canopyDispatch,a=t.locale,c=t.config,o=(e=(0,p.Z)(h().mark(function _callee(e){var r;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=n,t.next=3,(0,m.Kd)(null==c?void 0:c.locales,null==e?void 0:null===(r=e.target)||void 0===r?void 0:r.value);case 3:t.t1=t.sent,t.t2={locale:t.t1,type:"updateLocale"},(0,t.t0)(t.t2);case 6:case"end":return t.stop()}},_callee)})),function(r){return e.apply(this,arguments)});return(null==c?void 0:c.locales.length)<=1?null:(0,y.jsx)(v,{children:(0,y.jsx)("select",{onChange:o,children:null==c?void 0:c.locales.map(function(e){return(0,y.jsx)("option",{value:e.lang,selected:e.lang===a.lang,children:e.label},e.lang)})})})},b=(0,n.zo)("span",{maskImage:"linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.2) 50%, black 75% )",maskSize:"400%",maskPosition:"0%",display:"flex",height:"1.75rem",svg:{fill:"var(--gray-12)",color:"var(--gray-12)",stroke:"var(--gray-12)",height:"100%",transition:"$canopyAll"},"&:hover":{maskPosition:"100%",transition:"mask-position 0.618s ease, -webkit-mask-position 0.618s ease",svg:{fill:"var(--accent-10)",color:"var(--accent-10)",stroke:"var(--accent-10)"}}}),Logo=function(){return(0,y.jsx)(b,{children:(0,y.jsxs)("svg",{id:"maktaba-logo",viewBox:"0 0 659.16 118.76",children:[(0,y.jsx)("title",{children:"Maktaba مكتبة"}),(0,y.jsxs)("g",{children:[(0,y.jsx)("path",{d:"m401.28,77.44c2.18,1.96,4.51,3.03,7.1,3.4,2.22.31,4.48.49,6.72.47,3.77-.04,7.53-.23,11.29-.46,1.34-.08,2.67-.37,3.97-.7,1.22-.31,2.15-1.07,2.82-2.2.88-1.47,1.83-2.92,2.86-4.29.78-1.04,1.69-2.01,2.64-2.9,1.29-1.22,2.81-1.33,4.24-.25.8.6,1.46,1.42,2.11,2.2,1.26,1.5,2.46,3.06,3.71,4.58.95,1.14,2.19,1.74,3.63,2.13,4.67,1.27,9.41,1.22,14.14.68,1.64-.19,3.24-.85,4.81-1.43.57-.21,1.08-.75,1.46-1.26.6-.82,1.07-1.74,1.58-2.62.47-.81.88-1.67,1.41-2.44.36-.53.81-1.04,1.33-1.42,1.06-.77,2.37-.55,3.13.53.49.7.94,1.45,1.27,2.24,1.45,3.48,4.42,4.67,7.81,5.04,2.02.22,4.09.11,6.14.06,12.86-.29,25.71-.54,38.56-.94,8.76-.27,17.51-.74,26.26-1.18,2.74-.14,5.47-.46,8.2-.71.52-.05,1.03-.19,1.69-.32-.51-3.27-1.69-6.2-2.89-9.23-1.23,0-2.42-.08-3.6.01-3.1.24-6.2.51-9.29.85-6.88.76-13.74,1.64-20.62,2.33-5.54.55-11.09.94-16.65,1.3-4.13.26-8.27.19-12.37-.55-1.8-.32-3.28-1.19-4.55-2.49-2.37-2.42-3.61-5.23-3.12-8.67.2-1.4.68-2.68,1.45-3.87,1.77-2.74,3.89-5.13,6.5-7.13,3.48-2.66,6.81-5.52,10.26-8.21,1.94-1.51,4.06-2.76,6.34-3.72,1.29-.54,2.62-.93,4.05-.86.99.04,1.84.33,2.5,1.11.97,1.16,2.06,2.24,2.92,3.47,2.23,3.21,2.39,6.63.61,10.1-1.08,2.11-2.59,3.88-4.62,5.16-2.08,1.32-3.28,1.18-5.02-.54-.58-.58-1.12-1.2-1.71-1.77-1.52-1.47-2.85-1.81-4.67-.79-1.84,1.03-3.55,2.33-5.26,3.58-.67.49-.79,1.07-.86,2.25.94.64,2.05.71,3.14.77,5.04.28,10.07.12,15.09-.35,5.42-.51,10.84-1.02,16.25-1.62,5-.55,10-1.17,15-1.81,5.12-.65,10.22-1.37,15.33-2.06,1.29-.17,2.66.51,3.2,1.75,1.16,2.66,2.27,5.35,3.34,8.05,1.9,4.84,3.72,9.7,5.63,14.54.51,1.29,1.21,2.5,1.8,3.76.24.5.6.75,1.14.79,6.96.48,13.91.79,20.69-1.39.78-.25,1.34-.63,1.81-1.33,2.6-3.83,5.36-7.54,8.69-10.8,1.73-1.7,3.54-3.31,5.7-4.44,1.29-.68,2.67-1.26,4.08-1.63,2.7-.72,5.19-.06,7.42,1.6,2.05,1.52,3.47,3.56,4.73,5.74,1.23,2.13,2.43,4.27,3.72,6.36,1.45,2.34,3.11,4.52,5.23,6.31,1.26,1.06,1.82,2.52,2.06,4.08.1.65-.07,1.4-.33,2.02-.46,1.09-1.03,2.14-1.65,3.15-1.25,2.06-2.51,4.13-3.87,6.12-.66.97-1.52,1.82-2.34,2.67-.57.59-1.3.84-2.14.65-.99-.23-2.04-.35-2.97-.73-4.7-1.93-9.52-3.5-14.35-5.06-1.24-.4-2.47-.88-3.66-1.41-5.1-2.26-10.32-2.7-15.69-1.12-2.28.67-4.57,1.27-6.85,1.93-1.25.36-2.41.2-3.57-.34-2.17-1.01-4.1-2.39-5.98-3.85-1.16-.9-2.29-1.85-3.49-2.82-.23.26-.44.49-.64.72-1.14,1.36-2.41,2.58-4,3.39-.65.33-1.36.58-2.07.75-1.16.27-2.22.17-3.17-.75-.91-.88-1.94-1.63-2.99-2.35-1.35-.93-2.84-1.44-4.51-1.28-20.17,1.89-40.41,1.78-60.64,1.91-7.74.05-15.48.09-23.22.02-1.78-.02-3.56-.45-5.33-.77-1.08-.19-1.96-.77-2.57-1.73-.39-.62-.87-1.17-1.4-1.87-.63.63-1.25,1.2-1.81,1.83-.96,1.07-2.12,1.74-3.49,2.18-4.24,1.38-8.56,1.83-12.97,1.13-3.31-.53-6.29-1.79-8.69-4.49-.31.38-.59.7-.84,1.04-.77,1.02-1.67,1.88-2.73,2.62-1.64,1.14-3.4,1.69-5.4,1.7-4.34.02-8.68.16-13.02.21-5.53.07-11.06.13-16.59.14-3.33,0-6.6-.47-9.86-1.15-2.86-.6-5.26-1.99-7.32-4.02-.81-.8-1.56-1.68-2.38-2.57-.54.34-.91.57-1.28.81-1.44.93-2.88,1.87-4.33,2.8-2.05,1.31-4.32,1.94-6.71,2.19-6.46.68-12.92.63-19.38.1-2.81-.23-5.61-.61-8.39-1.1-1.93-.34-3.82-.96-5.29-2.41-4.85-4.81-4.13-10.62-.44-14.71,1.95-2.16,4.28-3.7,7.08-4.45,3.4-.9,6.84-1.65,10.25-2.47,2.98-.72,5.99-1.36,8.92-2.24,1.54-.46,3.03-1.24,4.42-2.09,2.12-1.29,3.36-3.25,3.34-5.8-.02-2.7-.12-5.4-.25-8.1-.12-2.66-.3-5.31-.48-7.97-.15-2.14.55-3.97,2.03-5.47,1.47-1.48,2.99-2.92,4.58-4.27.48-.4,1.27-.53,1.94-.59.68-.06,1.38.11,2.13.18.55,1.44.77,2.94.96,4.42.69,5.48,1.31,10.97,1.99,16.46.69,5.57,1.44,11.12,3.17,16.49.58,1.8,1.34,3.51,2.33,5.13.46.74,1.04,1.04,1.84.83,1.38-.37,2.76-.74,4.1-1.22,1.35-.48,2.64-1.12,3.97-1.65.53-.21,1.09-.38,1.65-.45,1.4-.18,1.97.4,1.89,1.83-.05.9-.39,1.7-1.01,2.32-.69.69-1.42,1.4-2.26,1.85-1.55.82-3.19,1.47-4.8,2.17-.51.23-1.04.41-1.76.69Zm-19.57-8.92c-2.27.79-4.43,1.66-6.66,2.29-4.71,1.33-9.46,2.54-14.2,3.79-1.19.31-1.6.68-1.61,1.53-.01.96.33,1.43,1.61,1.61,1.53.21,3.09.34,4.63.29,5.28-.16,10.48-1.06,15.67-1.96.95-.16,1.9-.34,2.82-.51-.78-2.43-1.52-4.71-2.27-7.04Zm255.01,14.77c.06-.07.12-.15.18-.22-.29-.53-.53-1.09-.87-1.58-1.06-1.54-2.16-3.07-3.25-4.59-.7-.97-1.67-1.51-2.85-1.31-2.94.49-4.76,2.42-6.29,4.96,4.42,1.29,8.78,1.88,13.08,2.74Z"}),(0,y.jsx)("path",{d:"m475.11,54.85c.77-1.88,2.1-3.14,3.59-4.25.82-.61,1.67-1.18,2.51-1.77,1.02-.72,2.13-.87,3.26-.39.82.35,1.64.77,2.34,1.31,1.77,1.35,3.18,3.05,4.39,4.91.45.7.49,1.38.15,2.08-.28.58-.61,1.16-1.01,1.67-1.56,1.99-3.51,3.52-5.65,4.84-1.32.82-2.53.71-3.79-.07-1.62-1.01-2.88-2.41-4.11-3.84-.56-.65-1.11-1.31-1.73-2.04-.23.29-.42.53-.6.78-1.69,2.26-3.83,4.01-6.26,5.43-1.14.67-2.29.69-3.34-.07-1.06-.76-2.08-1.59-3-2.5-.93-.91-1.71-1.98-2.6-2.94-.49-.53-.63-1.12-.59-1.8.09-1.42.68-2.64,1.69-3.58,1.1-1.03,2.32-1.93,3.49-2.88.29-.23.62-.4.91-.63,1.14-.92,2.39-.96,3.7-.46,1.57.6,2.8,1.68,3.91,2.89.93,1.02,1.78,2.12,2.75,3.28Z"}),(0,y.jsx)("path",{d:"m380.76,15.39c-1.75,2.88-4.2,4.99-7.1,6.61-1.05.58-2.08.6-3.01-.06-1.19-.85-2.32-1.79-3.39-2.79-.77-.72-1.35-1.65-2.11-2.39-1.08-1.06-1.06-2.3-.52-3.5.42-.95,1.02-1.91,1.78-2.6,1.39-1.25,2.93-2.35,4.48-3.41.97-.67,2.1-.57,3.18-.13,1.44.57,2.62,1.52,3.65,2.64,1.07,1.17,2.06,2.43,3.13,3.71.08-.15.21-.32.29-.52.45-1.13,1.15-2.1,2.08-2.85,1.37-1.1,2.78-2.15,4.24-3.13.95-.64,2.05-.58,3.06-.13.81.36,1.62.81,2.32,1.35,1.69,1.32,3.03,2.97,4.24,4.73.49.72.54,1.44.17,2.2-.23.48-.48.96-.8,1.37-1.74,2.22-3.85,3.99-6.34,5.32-.82.44-1.62.45-2.47.11-1.29-.52-2.3-1.42-3.22-2.41-1.25-1.34-2.44-2.74-3.66-4.12Z"}),(0,y.jsx)("path",{d:"m441.74,95.44c1.09.12,1.98.53,2.81,1.08,2.22,1.48,3.89,3.49,5.32,5.7.34.52.38,1.09.14,1.64-.25.56-.52,1.12-.89,1.6-1.68,2.22-3.79,3.94-6.2,5.31-.99.56-1.97.58-2.91.04-.81-.47-1.63-.98-2.28-1.64-1.32-1.33-2.57-2.75-3.78-4.2-.28-.34-.4-.89-.42-1.35-.05-1.24.42-2.35,1.22-3.26.73-.82,1.54-1.58,2.39-2.28.85-.7,1.76-1.34,2.7-1.91.57-.34,1.26-.49,1.89-.73Z"})]}),(0,y.jsxs)("g",{children:[(0,y.jsx)("path",{d:"m4.89,89.72v-53.21h12.24l16.27,33.22,16.12-33.22h12.24v53.21h-10.26v-35.73l-14.06,28.28h-8.13l-14.14-28.28v35.73H4.89Z"}),(0,y.jsx)("path",{d:"m80.37,90.63c-3.19,0-5.83-.52-7.91-1.56-2.08-1.04-3.61-2.43-4.6-4.18-.99-1.75-1.48-3.69-1.48-5.81,0-2.33.6-4.38,1.79-6.16,1.19-1.77,2.99-3.17,5.4-4.18,2.41-1.01,5.43-1.52,9.08-1.52h9.5c0-1.87-.25-3.43-.76-4.67-.51-1.24-1.29-2.17-2.36-2.77-1.06-.61-2.48-.91-4.26-.91-1.93,0-3.56.42-4.9,1.25-1.34.84-2.17,2.12-2.47,3.84h-9.96c.25-2.74,1.15-5.1,2.7-7.11,1.55-2,3.6-3.56,6.16-4.67,2.56-1.11,5.41-1.67,8.55-1.67,3.6,0,6.71.61,9.35,1.82,2.63,1.22,4.66,2.96,6.08,5.25,1.42,2.28,2.13,5.09,2.13,8.44v23.72h-8.67l-1.14-5.85c-.56,1.01-1.22,1.93-1.98,2.74s-1.65,1.52-2.66,2.13c-1.01.61-2.15,1.08-3.42,1.41-1.27.33-2.66.49-4.18.49Zm2.43-7.91c1.32,0,2.5-.24,3.53-.72,1.04-.48,1.94-1.14,2.7-1.98.76-.84,1.35-1.8,1.79-2.89.43-1.09.72-2.27.87-3.54v-.08h-7.83c-1.57,0-2.85.19-3.84.57s-1.71.93-2.17,1.63c-.46.71-.68,1.52-.68,2.43,0,1.01.23,1.85.68,2.51.46.66,1.11,1.17,1.98,1.52.86.36,1.85.53,2.96.53Z"}),(0,y.jsx)("path",{d:"m107.43,89.72v-54.73h10.26v54.73h-10.26Zm25.08,0l-16.34-20.98,14.67-17.33h12.09l-18.93,21.66v-8.13l21.28,24.78h-12.77Z"}),(0,y.jsx)("path",{d:"m164.06,89.72c-2.69,0-5.03-.42-7.03-1.25-2-.84-3.56-2.23-4.67-4.18-1.12-1.95-1.67-4.62-1.67-8.02v-16.27h-6.54v-8.59h6.54l1.14-10.41h9.12v10.41h10.11v8.59h-10.11v16.42c0,1.72.38,2.92,1.14,3.57.76.66,2.05.99,3.88.99h5.02v8.74h-6.92Z"}),(0,y.jsx)("path",{d:"m188.08,90.63c-3.19,0-5.83-.52-7.91-1.56-2.08-1.04-3.61-2.43-4.6-4.18-.99-1.75-1.48-3.69-1.48-5.81,0-2.33.6-4.38,1.79-6.16,1.19-1.77,2.99-3.17,5.4-4.18,2.41-1.01,5.43-1.52,9.08-1.52h9.5c0-1.87-.25-3.43-.76-4.67-.51-1.24-1.29-2.17-2.36-2.77-1.06-.61-2.48-.91-4.26-.91-1.93,0-3.56.42-4.9,1.25-1.34.84-2.17,2.12-2.47,3.84h-9.96c.25-2.74,1.15-5.1,2.7-7.11,1.55-2,3.6-3.56,6.16-4.67,2.56-1.11,5.41-1.67,8.55-1.67,3.6,0,6.71.61,9.35,1.82,2.63,1.22,4.66,2.96,6.08,5.25,1.42,2.28,2.13,5.09,2.13,8.44v23.72h-8.67l-1.14-5.85c-.56,1.01-1.22,1.93-1.98,2.74s-1.65,1.52-2.66,2.13c-1.01.61-2.15,1.08-3.42,1.41-1.27.33-2.66.49-4.18.49Zm2.43-7.91c1.32,0,2.5-.24,3.53-.72,1.04-.48,1.94-1.14,2.7-1.98.76-.84,1.35-1.8,1.79-2.89.43-1.09.72-2.27.87-3.54v-.08h-7.83c-1.57,0-2.85.19-3.84.57s-1.71.93-2.17,1.63c-.46.71-.68,1.52-.68,2.43,0,1.01.23,1.85.68,2.51.46.66,1.11,1.17,1.98,1.52.86.36,1.85.53,2.96.53Z"}),(0,y.jsx)("path",{d:"m237.79,90.63c-1.98,0-3.74-.25-5.28-.76-1.55-.51-2.91-1.2-4.11-2.09-1.19-.89-2.19-1.89-3-3l-1.14,4.94h-9.12v-54.73h10.26v21.74c1.22-1.77,2.82-3.26,4.83-4.45,2-1.19,4.5-1.79,7.49-1.79,3.55,0,6.7.87,9.46,2.62,2.76,1.75,4.94,4.13,6.54,7.15,1.6,3.02,2.39,6.47,2.39,10.38s-.8,7.22-2.39,10.26c-1.6,3.04-3.76,5.42-6.5,7.15-2.74,1.72-5.88,2.58-9.43,2.58Zm-2.43-8.97c2.03,0,3.81-.47,5.36-1.41,1.54-.94,2.75-2.23,3.61-3.88.86-1.65,1.29-3.56,1.29-5.74s-.43-4.12-1.29-5.82c-.86-1.7-2.07-3.01-3.61-3.95-1.55-.94-3.33-1.41-5.36-1.41s-3.74.47-5.28,1.41c-1.55.94-2.76,2.24-3.65,3.92-.89,1.67-1.33,3.6-1.33,5.78s.44,4.12,1.33,5.81c.89,1.7,2.1,3,3.65,3.92,1.54.91,3.3,1.37,5.28,1.37Z"}),(0,y.jsx)("path",{d:"m273.29,90.63c-3.19,0-5.83-.52-7.91-1.56-2.08-1.04-3.61-2.43-4.6-4.18-.99-1.75-1.48-3.69-1.48-5.81,0-2.33.59-4.38,1.79-6.16,1.19-1.77,2.99-3.17,5.4-4.18,2.41-1.01,5.44-1.52,9.08-1.52h9.5c0-1.87-.25-3.43-.76-4.67-.51-1.24-1.29-2.17-2.36-2.77-1.06-.61-2.48-.91-4.26-.91-1.93,0-3.56.42-4.9,1.25-1.34.84-2.17,2.12-2.47,3.84h-9.96c.25-2.74,1.15-5.1,2.7-7.11,1.54-2,3.6-3.56,6.16-4.67,2.56-1.11,5.41-1.67,8.55-1.67,3.6,0,6.71.61,9.35,1.82s4.66,2.96,6.08,5.25c1.42,2.28,2.13,5.09,2.13,8.44v23.72h-8.67l-1.14-5.85c-.56,1.01-1.22,1.93-1.98,2.74s-1.65,1.52-2.66,2.13c-1.01.61-2.15,1.08-3.42,1.41-1.27.33-2.66.49-4.18.49Zm2.43-7.91c1.32,0,2.5-.24,3.53-.72,1.04-.48,1.94-1.14,2.7-1.98.76-.84,1.36-1.8,1.79-2.89.43-1.09.72-2.27.87-3.54v-.08h-7.83c-1.57,0-2.85.19-3.84.57-.99.38-1.71.93-2.17,1.63-.46.71-.68,1.52-.68,2.43,0,1.01.23,1.85.68,2.51.46.66,1.11,1.17,1.98,1.52.86.36,1.85.53,2.96.53Z"})]})]})})},j=t(5324),w=t(9499),O=(0,n.zo)("form",{cursor:"select",margin:"0 $gr4",width:"100%","@sm":{width:"calc(100% - ($gr4 * 2))"},"@xs":{margin:"0 $gr3",width:"calc(100% - ($gr3 * 2))"},"&:focus-within":{svg:{color:"var(--accent-11)"}}}),$=t(1163);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,w.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Search_Search=function(){var e=(0,s.useState)(),r=e[0],t=e[1],n=(0,$.useRouter)(),a=(0,s.useRef)(null);return(0,s.useEffect)(function(){if(n){var e=n.query.q;e&&a.current&&(a.current.value=e),t(e)}},[n]),(0,y.jsx)(O,{onSubmit:function(e){e.preventDefault(),n.push({pathname:"/search",query:_objectSpread(_objectSpread({},n.query),{},{q:r})})},"data-testid":"search-form",children:(0,y.jsxs)(d.TextField.Root,{onChange:function(e){t(e.target.value)},ref:a,size:"3",style:{width:"100%"},variant:"surface",children:[(0,y.jsx)(d.TextField.Slot,{side:"left",pl:"3",children:(0,y.jsx)(l._Ve,{height:"20",width:"20"})}),(0,y.jsx)(d.TextField.Slot,{side:"right",pr:"1",gap:"0",children:(0,y.jsx)(d.Button,{size:"2",type:"submit",children:(0,m.EK)("searchButton")})})]})})},S=t(6441),Header_Header=function(){var e=(0,s.useState)(!1),r=e[0],t=e[1],n=(0,$.useRouter)(),u=n.pathname,p=n.query,f=(0,x.MQ)().canopyState.headerVisible,h=(0,S.Z)({relativePath:""}).navigation;return(0,s.useEffect)(function(){t(!1)},[u,p]),(0,y.jsx)(i,{isVisible:!!f||"/search"!==u,children:(0,y.jsxs)(o,{children:[(0,y.jsx)(g(),{href:"/",style:{color:"var(--gray-12)",textDecoration:"none"},children:(0,y.jsx)(d.Heading,{as:"h1",size:"5",weight:"medium",style:{fontFamily:"var(--canopy-display-font)"},children:(0,y.jsx)(Logo,{})})}),(0,y.jsx)(a,{children:(0,y.jsx)("button",{onClick:function(){return t(!r)},children:(0,y.jsx)(l.RYk,{})})}),(0,y.jsxs)(c,{showNav:r,children:[(0,y.jsx)(Search_Search,{}),h&&(0,y.jsx)(j.Z,{items:h}),(0,y.jsx)(Locale_Locale,{})]})]})})}},5324:function(e,r,t){"use strict";t.d(r,{Z:function(){return Nav_Nav}});var n,a,c,o=t(9499),i=t(2854),s=(0,i.zo)("div",{display:"flex",fontFamily:"$sans",flexGrow:"0",variants:{orientation:{horizontal:{justifyContent:"flex-end",a:{whiteSpace:"nowrap"}},vertical:{flexDirection:"column",alignItems:"flex-start",padding:"0 0 $gr4",a:(n={color:"var(--gray-11)",padding:"$gr1 0 ",marginBottom:"0"},(0,o.Z)(n,"&.active",{color:"var(--gray-12) !important",fontWeight:"700"}),(0,o.Z)(n,"&:hover",{color:"var(--accent-10)"}),n)}}},"@sm":{flexDirection:"column",alignItems:"flex-start",padding:"0 $gr3 $gr3"},a:(a={padding:"$gr1 $gr2",display:"inline-flex",color:"var(--gray-12)",borderRadius:"2rem",position:"relative",transition:"$canopyAll",fontSize:"$gr3","@sm":{padding:"0",transition:"none"}},(0,o.Z)(a,"&:hover",{color:"var(--accent-10)"}),(0,o.Z)(a,"&.active",{color:"var(--accent-11)"}),a)}),l=(0,i.zo)("nav",{position:"relative",display:"flex",flexDirection:"row",alignItems:"center",zIndex:"1",flexGrow:"0",fontWeight:"500",nav:(c={margin:"$gr1 0 $gr2",padding:"0 $gr3",borderLeft:"3px solid var(--gray-4)",fontWeight:"400"},(0,o.Z)(c,"& ".concat(s),{paddingBottom:"0"}),(0,o.Z)(c,"a:first-child",{paddingTop:0}),(0,o.Z)(c,"a:last-child",{paddingBottom:0}),c)}),d=t(9342),u=t(7294),g=t(1163),p=t(5893),ItemsLink=function(e){var r=e.path,t=e.subNavigation,n=e.text,a=(0,g.useRouter)(),c=(0,u.useRef)(null),o=a.query,i=a.pathname.replace(/\[.*\]/,null==o?void 0:o.slug);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{href:r,className:r===i?"active":"",onClick:function(e){var r=null==e?void 0:e.currentTarget.href,t=r.replace(/.*\#/,"");if(t!==r){e.preventDefault(),window.history.pushState({},"",r);var n=document.getElementById(t);n&&window.scrollTo({behavior:"smooth",top:(null==n?void 0:n.getBoundingClientRect().top)-document.body.getBoundingClientRect().top-50})}},ref:c,children:n}),t&&r===i&&(0,p.jsx)(Nav_Nav,{items:t,orientation:"vertical"})]})};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,o.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Nav_Items=function(e){var r=e.items,t=e.orientation,n=e.subNavigation;return(0,p.jsx)(s,{orientation:t,children:null==r?void 0:r.map(function(e){return(0,u.createElement)(ItemsLink,_objectSpread(_objectSpread({},e),{},{key:e.path,subNavigation:n}))})})},Nav_Nav=function(e){var r=e.items,t=e.orientation,n=e.subNavigation;return(0,p.jsx)(l,{children:(0,p.jsx)(Nav_Items,{items:r,orientation:void 0===t?"horizontal":t,subNavigation:n})})}},6873:function(e,r,t){"use strict";t.d(r,{N:function(){return o},Z:function(){return Shared_Container}});var n={default:"1200px",wide:"1440px"},a=t(2854),c=t(5893),o=(0,a.zo)("div",{margin:"0 auto",variants:{containerType:{default:{maxWidth:n.default},wide:{maxWidth:n.wide}},isFlex:{false:{},true:{display:"flex"}},isRelative:{false:{},true:{position:"relative"}}},width:"100%",boxSizing:"border-box",padding:"0 $gr5","@xxl":{padding:"0"},"@lg":{padding:"0 $gr4"},"@md":{padding:"0 $gr4"},"@sm":{padding:"0 $gr4"},"@xs":{padding:"0 $gr3"},"@xxs":{padding:"0 $gr3"}}),Shared_Container=function(e){var r=e.children,t=e.className,n=e.containerType,a=e.isFlex,i=e.isRelative,s=e.maxWidth;return(0,c.jsx)(o,{className:t,containerType:void 0===n?"default":n,css:s?{maxWidth:s}:{},isFlex:void 0!==a&&a,isRelative:void 0!==i&&i,children:r})}},9342:function(e,r,t){"use strict";var n=t(9499),a=t(1664),c=t.n(a),o=t(1426),i=t(5893);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}r.Z=function(e){return(0,i.jsx)(o.Link,{asChild:!0,children:(0,i.jsx)(c(),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},e))})}},8918:function(e,r,t){"use strict";t.d(r,{Z:function(){return layout}}),t(7294);var n=t(2854),a=(0,n.zo)("div",{display:"flex",justifyContent:"space-between",fontSize:"$gr2",fontWeight:"500"}),c=(0,n.zo)("footer",{padding:"$gr3 0",marginTop:"$gr6"});(0,n.zo)("a",{color:"var(--accent-11)",fill:"var(--accent-11)",display:"flex",alignItems:"center",textDecoration:"none",svg:{marginRight:"$gr2",height:"$gr2",color:"inherit",fill:"inherit"}});var o=t(6873),i=t(5893),Footer_Footer=function(){return(0,i.jsx)(c,{children:(0,i.jsx)(o.Z,{children:(0,i.jsx)(a,{children:"\xa0"})})})},s=t(1856),l=(0,t(6744).zo)("main",{margin:"0"}),Shared_Main=function(e){var r=e.children;return(0,i.jsx)(l,{children:r})},d=t(1571),layout=function(e){var r=e.children,t="dark"===(0,d.F)().theme?{accent:"var(--accent-9)",accentAlt:"var(--accent-a3)",primary:"var(--gray-1)",secondary:"var(--gray-12)"}:{accent:"var(--accent-11)",accentAlt:"var(--accent-a12)",primary:"var(--gray-12)",secondary:"var(--gray-1)"},a=(0,n.zo)("div",{"--colors-accent":t.accent,"--colors-accentAlt":t.accentAlt,"--colors-accentMuted":t.accent,"--colors-primary":t.primary,"--colors-primaryAlt":t.primary,"--colors-primaryMuted":t.primary,"--colors-secondary":t.secondary,"--colors-secondaryAlt":t.secondary,"--colors-secondaryMuted":t.secondary});return(0,i.jsxs)(a,{children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)(Shared_Main,{children:r}),(0,i.jsx)(Footer_Footer,{})]})}},6441:function(e,r,t){"use strict";var n=t(29),a=t(7794),c=t.n(a),o=t(7294);r.Z=function(e){var r=e.relativePath,a=(0,o.useState)(),i=a[0],s=a[1];return(0,o.useEffect)(function(){(0,n.Z)(c().mark(function _callee(){var e,n,a;return c().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,void 0!==r){c.next=3;break}return c.abrupt("return");case 3:return e="content/",n=r?"".concat(e).concat(r):e,c.next=7,t(9548)("./".concat(n,"_meta.json"));case 7:s(function transformObjectWithGetters(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.getOwnPropertyDescriptor(e,t);null!=n&&n.get?r[t]=n.get.call(e):r[t]="object"==typeof e[t]&&null!==e[t]?transformObjectWithGetters(e[t]):e[t]}return r}(null==(a=c.sent)?void 0:a.default)),c.next=16;break;case 12:c.prev=12,c.t0=c.catch(0),console.warn(c.t0),console.warn("The relative _meta.json file could not be found.");case 16:case"end":return c.stop()}},_callee,null,[[0,12]])}))()},[]),{navigation:i}}},4430:function(e,r,t){"use strict";t.d(r,{gr:function(){return gr}});var gr=function(e){return Math.pow(1.618,e)}},2854:function(e,r,t){"use strict";t.d(r,{zo:function(){return f}});var n=t(9499),a=t(4430),c={gr1:"0.611rem",gr2:"0.722rem",gr3:"0.833rem",gr4:"1rem",gr5:"1.177rem",gr6:"1.318rem",gr7:"calc(1rem * ".concat((0,a.gr)(1),")"),gr8:"calc(1rem * ".concat((0,a.gr)(2),")"),gr9:"calc(1rem * ".concat((0,a.gr)(3),")")},o=t(5093),i=t(7668),s={gr1:"calc(1rem / ".concat((0,a.gr)(2),")"),gr2:"calc(1rem / ".concat((0,a.gr)(1),")"),gr3:"1rem",gr4:"calc(1rem * ".concat((0,a.gr)(1),")"),gr5:"calc(1rem * ".concat((0,a.gr)(2),")"),gr6:"calc(1rem * ".concat((0,a.gr)(3),")"),gr7:"calc(1rem * ".concat((0,a.gr)(4),")"),gr8:"calc(1rem * ".concat((0,a.gr)(5),")"),gr9:"calc(1rem * ".concat((0,a.gr)(6),")"),gr10:"calc(1rem * ".concat((0,a.gr)(7),")"),gr11:"calc(1rem * ".concat((0,a.gr)(8),")"),gr12:"calc(1rem * ".concat((0,a.gr)(9),")")},l="cubic-bezier(0.1, 0.618, 0.382, 1.1)",d={canopyAll:"all ".concat(250,"ms ").concat(l),canopyOpacity:"opacity ".concat(250,"ms ").concat(l),canopySlideIn:"all ".concat(250*(0,a.gr)(2),"ms ").concat(l)},u=t(6744);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={fontSizes:_objectSpread({},c),fonts:_objectSpread({},o.ZP),sizes:_objectSpread({},s),space:_objectSpread({},s),transitions:_objectSpread({},d)},p=(0,u.Th)({theme:g,media:i.Z}),f=p.styled;(p.css,p.keyframes,p.createTheme)({colors:{}})},7668:function(e,r,t){"use strict";t.d(r,{b:function(){return n}});var n={xxs:334,xs:575,sm:767,md:991,lg:1199,xl:1439},a={xxs:"(max-width: ".concat(n.xxs,"px)"),xs:"(max-width: ".concat(n.xs,"px)"),sm:"(max-width: ".concat(n.sm,"px)"),md:"(max-width: ".concat(n.md,"px)"),lg:"(max-width: ".concat(n.lg,"px)"),xl:"(max-width: ".concat(n.xl,"px)"),xxl:"(min-width: ".concat(n.xl+1,"px)")};r.Z=a},9548:function(e,r,t){var n={"./content/_meta.json":[7005,5],"./content/essays/_meta.json":[7690,839]};function webpackAsyncContext(e){if(!t.o(n,e))return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r});var r=n[e],a=r[0];return t.e(r[1]).then(function(){return t.t(a,19)})}webpackAsyncContext.keys=function(){return Object.keys(n)},webpackAsyncContext.id=9548,e.exports=webpackAsyncContext}}]);