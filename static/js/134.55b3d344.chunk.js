"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{6713:function(e,t,r){r.d(t,{J:function(){return n}});var n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWUzM2Q5ZjIwZjlhNmU0ZTcxNGU2N2FlM2JjZTdhNSIsInN1YiI6IjY0Nzg5ZjI1MDc2Y2U4MDEyOGZiY2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgp-whkIrWAK4eHf9B-LgEQ9c39n98ES3eZ_2XSy_lo"}}},1134:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),i=r(4687),s=r.n(i),c=r(6713),o=r(2791),u=r(1087),l=r(7689),h=r(1502),p=r(6795),d=r(8836),f=r(184);t.default=function(e){var t,r=e.setIsLoading,i=(0,u.useSearchParams)(),g=(0,a.Z)(i,2),m=g[0],v=g[1],x=(0,o.useState)([]),j=(0,a.Z)(x,2),y=j[0],I=j[1],b=null!==(t=m.get("search"))&&void 0!==t?t:"",w=(0,l.TH)();(0,o.useEffect)((function(){if(b){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(b,"&include_adult=false&language=en-US&page=1"),c.J);case 4:if(!(t=e.sent).ok){e.next=10;break}return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 10:throw new Error("Opps!");case 13:e.prev=13,e.t0=e.catch(1),p.Am.error("".concat(e.t0.message," Something go wrong, please try again later \ud83d\ude12"));case 16:return e.prev=16,r(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return 0===(null===e||void 0===e?void 0:e.results.length)?(v({}),I([]),p.Am.warn('Nothing found matching "'.concat(b,'"'))):I(null===e||void 0===e?void 0:e.results)}))}}),[b,r,v]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(d.ao,{to:"/",children:"Back to previous page"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;""!==e.target.elements[0].value.trim()?v({search:e.target.elements[0].value}):(v({}),I([]),p.Am.info("You should enter search query first!")),t.reset()},children:[(0,f.jsx)(d.Fy,{type:"text",placeholder:"Enter movie to search...",autoFocus:!0,name:"search"}),(0,f.jsx)(d.Yq,{type:"submit",children:"Search"})]}),(null===y||void 0===y?void 0:y.length)>0&&(0,f.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:15},children:y.map((function(e){var t=e.id,r=e.release_date,n=e.title,a=e.name,i=e.backdrop_path,s=e.poster_path;return(0,f.jsxs)(d.Gn,{to:"/movies/".concat(t),state:{from:w},children:[(0,f.jsx)("img",{loading:"lazy",src:s||i?"https://image.tmdb.org/t/p/original".concat(s||i):h,alt:n||a,width:200}),(0,f.jsx)("h4",{style:{maxWidth:200},children:n||a}),String(r).substring(0,4)]},t)}))})]})}},1502:function(e,t,r){e.exports=r.p+"static/media/no-image.d77901617b3f0b5c179d.png"}}]);
//# sourceMappingURL=134.55b3d344.chunk.js.map