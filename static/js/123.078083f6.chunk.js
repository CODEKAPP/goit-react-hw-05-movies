"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{123:function(e,t,r){r.r(t);var n=r(439),c=r(791),a=r(689),s=r(243),i=r(759),o=r(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),r=(0,n.Z)(t,2),u=r[0],h=r[1];return(0,c.useEffect)((function(){s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:{api_key:i.$}}).then((function(e){h(e.data.results)})).catch((function(e){console.error("Error al obtener rese\xf1as",e)}))}),[e]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Rese\xf1as"}),(0,o.jsx)("ul",{children:u.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})]})}},759:function(e,t,r){r.d(t,{$:function(){return n}});var n="556d0227db193d329bc790cf6a0db419"}}]);
//# sourceMappingURL=123.078083f6.chunk.js.map