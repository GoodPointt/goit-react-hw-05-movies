"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{6713:function(e,n,r){r.d(n,{J:function(){return t}});var t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWUzM2Q5ZjIwZjlhNmU0ZTcxNGU2N2FlM2JjZTdhNSIsInN1YiI6IjY0Nzg5ZjI1MDc2Y2U4MDEyOGZiY2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgp-whkIrWAK4eHf9B-LgEQ9c39n98ES3eZ_2XSy_lo"}}},2884:function(e,n,r){r.r(n);var t=r(5861),i=r(9439),s=r(4687),a=r.n(s),c=r(6713),o=r(2791),h=r(7689),l=r(1502),d=r(6795),u=r(8836),p=r(184);n.default=function(e){var n,r,s=e.setIsLoading,v=(0,o.useState)(null),f=(0,i.Z)(v,2),j=f[0],g=f[1],x=(0,h.UO)().movieId,m=(0,h.TH)(),w=(0,o.useRef)(null!==(n=null===(r=m.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/movies");return(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(x,"?language=en-US"),c.J);case 4:if(!(n=e.sent).ok){e.next=8;break}return r=n.json(),e.abrupt("return",r);case 8:throw new Error("Opps!");case 11:e.prev=11,e.t0=e.catch(1),d.Am.error("Oops! Something go wrong please try again later \ud83d\ude12");case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return g(e)}))}),[x,s]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.ao,{to:w.current,children:"Back to previous page"}),j&&(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{style:{display:"flex",gap:20},children:[(0,p.jsx)("img",{loading:"lazy",src:j.poster_path||j.backdrop_path?"https://image.tmdb.org/t/p/original".concat(j.poster_path||j.backdrop_path):l,alt:j.title||j.name,width:300}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[j.title||j.name,(0,p.jsxs)("span",{children:["(",j.release_date.substring(0,4),")"]})]}),(0,p.jsx)("h4",{children:"Raiting:"}),(0,p.jsxs)("p",{children:[j.vote_average.toFixed(),"/10"]}),(0,p.jsx)("h4",{children:"Genres:"}),(0,p.jsx)("p",{children:j.genres.reduce((function(e,n){return e+" "+n.name}),"")}),(0,p.jsx)("h4",{children:"Overview:"}),(0,p.jsx)("p",{children:j.overview})]})]})}),(0,p.jsxs)("nav",{children:[(0,p.jsx)(u.ao,{to:"cast",children:"Cast"}),(0,p.jsx)(u.ao,{to:"reviews",children:"Reviews"})]}),(0,p.jsx)(o.Suspense,{children:(0,p.jsx)(h.j3,{})})]})}},1502:function(e,n,r){e.exports=r.p+"static/media/no-image.d77901617b3f0b5c179d.png"}}]);
//# sourceMappingURL=884.75381694.chunk.js.map