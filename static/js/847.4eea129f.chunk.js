"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{847:function(e,t,n){n.r(t);var r=n(439),i=n(791),c=n(689),s=n(243),a=n(759),o=n(737),l=n(87),d=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,i.useState)(null),n=(0,r.Z)(t,2),h=n[0],u=n[1];if((0,i.useEffect)((function(){s.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:a.$}}).then((function(e){u(e.data)})).catch((function(e){console.error("Error al obtener detalles de la pel\xedcula",e)}))}),[e]),!h)return(0,d.jsx)("div",{children:"Cargando..."});var p=h.genres.map((function(e){return e.name}));return(0,d.jsxs)("section",{children:[(0,d.jsx)(o.Z,{showBackButton:!0}),(0,d.jsxs)("div",{style:{display:"flex",gridGap:"15px"},children:[(0,d.jsx)("img",{className:"img-thumbnail",style:{width:"250px"},src:"https://image.tmdb.org/t/p/w500/".concat(h.poster_path),alt:h.title}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:h.title}),(0,d.jsx)("p",{children:"User Score ".concat(h.vote_count)}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:h.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{style:{display:"flex"},children:p.map((function(e,t){return(0,d.jsx)("li",{children:e},t)}))})]})]}),(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsx)(l.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast ..."}),(0,d.jsx)(l.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews ..."}),(0,d.jsx)(c.j3,{})]})}},759:function(e,t,n){n.d(t,{$:function(){return r}});var r="556d0227db193d329bc790cf6a0db419"}}]);
//# sourceMappingURL=847.4eea129f.chunk.js.map