"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{764:function(e,t,n){n.r(t);var r=n(439),a=n(791),s=n(243),c=n(759),o=n(87),i=n(737),l=n(184);t.default=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],h=(0,a.useState)([]),d=(0,r.Z)(h,2),m=d[0],p=d[1],f=(0,a.useState)(!1),v=(0,r.Z)(f,2),x=v[0],b=v[1],j=function(){s.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:c.$,query:n}}).then((function(e){0===e.data.results.length?b(!0):b(!1),p(e.data.results)})).catch((function(e){console.error("Error al realizar la b\xfasqueda",e)}))};return(0,l.jsxs)("section",{children:[(0,l.jsx)(i.Z,{showBackButton:!0}),(0,l.jsx)("h1",{children:"Search movies"}),(0,l.jsxs)("div",{className:"input-group mb-3",children:[(0,l.jsx)("input",{className:"form-control",type:"text",placeholder:"Search movies...",value:n,onChange:function(e){return u(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&j()}}),(0,l.jsx)("button",{className:"btn btn-outline-secondary",onClick:j,children:"Search"})]}),x&&(0,l.jsxs)("h4",{children:["No movie results found: ",(0,l.jsx)("span",{children:n})]})," ",(0,l.jsx)("ul",{className:"list-group ",children:m.map((function(e){return(0,l.jsx)("li",{className:"list-group-item",children:(0,l.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},759:function(e,t,n){n.d(t,{$:function(){return r}});var r="556d0227db193d329bc790cf6a0db419"}}]);
//# sourceMappingURL=764.bbe32879.chunk.js.map