"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{6713:function(e,t,n){n.d(t,{J:function(){return r}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWUzM2Q5ZjIwZjlhNmU0ZTcxNGU2N2FlM2JjZTdhNSIsInN1YiI6IjY0Nzg5ZjI1MDc2Y2U4MDEyOGZiY2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgp-whkIrWAK4eHf9B-LgEQ9c39n98ES3eZ_2XSy_lo"}}},1134:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),s=n(4687),i=n.n(s),c=n(6713),o=n(2791),u=n(1087),l=n(7689),h=n(1502),d=n(6795),p=n(8836),f=n(184);t.default=function(e){var t,n=e.setIsLoading,s=(0,u.useSearchParams)(),m=(0,a.Z)(s,2),g=m[0],v=m[1],j=(0,o.useState)([]),x=(0,a.Z)(j,2),y=x[0],I=x[1],b=null!==(t=g.get("search"))&&void 0!==t?t:"",_=(0,l.TH)();(0,o.useEffect)((function(){if(b){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(b,"&include_adult=false&language=en-US&page=1"),c.J);case 4:if(!(t=e.sent).ok){e.next=10;break}return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:throw new Error("Opps!");case 13:e.prev=13,e.t0=e.catch(1),d.Am.error("".concat(e.t0.message," Something go wrong, please try again later \ud83d\ude12"));case 16:return e.prev=16,n(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return 0===(null===e||void 0===e?void 0:e.results.length)?(v({}),I([]),d.Am.warn('Nothing found matching "'.concat(b,'"'))):I(null===e||void 0===e?void 0:e.results)}))}}),[b,n,v]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(p.ao,{to:"/",children:"Back to previous page"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;""!==e.target.elements[0].value.trim()?v({search:e.target.elements[0].value}):(v({}),I([]),d.Am.info("You should enter search query first!")),t.reset()},children:[(0,f.jsx)(p.Fy,{type:"text",placeholder:"Enter movie to search...",autoFocus:!0,name:"search"}),(0,f.jsx)(p.Yq,{type:"submit",children:"Search"})]}),(null===y||void 0===y?void 0:y.length)>0&&(0,f.jsx)(p.CK,{children:y.map((function(e){var t=e.id,n=e.release_date,r=e.title,a=e.name,s=e.backdrop_path,i=e.poster_path;return(0,f.jsx)(p.oH,{children:(0,f.jsxs)(p.Gn,{to:"/movies/".concat(t),state:{from:_},children:[(0,f.jsx)(p.Th,{loading:"lazy",src:i||s?"https://image.tmdb.org/t/p/original".concat(i||s):h,alt:r||a,width:200}),(0,f.jsx)("div",{className:"content",children:(0,f.jsxs)("h4",{className:"title",children:[r||a," (",String(n).substring(0,4),")"]})})]})},t)}))})]})}},1502:function(e,t,n){e.exports=n.p+"static/media/no-image.d77901617b3f0b5c179d.png"}}]);
//# sourceMappingURL=134.2cfea3a3.chunk.js.map