"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{6713:function(e,t,n){n.d(t,{J:function(){return r}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWUzM2Q5ZjIwZjlhNmU0ZTcxNGU2N2FlM2JjZTdhNSIsInN1YiI6IjY0Nzg5ZjI1MDc2Y2U4MDEyOGZiY2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgp-whkIrWAK4eHf9B-LgEQ9c39n98ES3eZ_2XSy_lo"}}},1247:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),c=n(4687),i=n.n(c),s=n(6713),o=n(2791),h=n(7689),u=n(1502),l=n(184);t.default=function(e){var t=e.setIsLoading,n=(0,o.useState)([]),c=(0,a.Z)(n,2),p=c[0],f=c[1],d=(0,h.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(d,"/credits?language=en-US"),s.J);case 4:if(!(n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:throw new Error("Opps!");case 13:e.prev=13,e.t0=e.catch(1),console.log("Oops! ".concat(e.t0.message," \ud83d\ude12"));case 16:return e.prev=16,t(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return f(e.cast)}))}),[d,t]),(0,l.jsx)("ul",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:(null===p||void 0===p?void 0:p.length)>0?p.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{loading:"lazy",src:a?"https://image.tmdb.org/t/p/original".concat(a):u,alt:n,width:200}),(0,l.jsx)("h4",{children:n}),(0,l.jsx)("p",{children:"character:"}),(0,l.jsx)("h5",{children:r})]},t)})):(0,l.jsx)("p",{children:"We don't have any casts for this movie \ud83d\ude12"})})}},1502:function(e,t,n){e.exports=n.p+"static/media/no-image.d77901617b3f0b5c179d.png"}}]);
//# sourceMappingURL=247.684f495f.chunk.js.map