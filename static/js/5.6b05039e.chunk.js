(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{41:function(e,t,c){"use strict";var a=c.p+"static/media/error.5bfd7105.gif",n=c(2);t.a=function(){return Object(n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})}},43:function(e,t,c){"use strict";var a=c(4),n=c.n(a),r=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t,c,r,s){var i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,fetch(t,{method:c,body:r,headers:s});case 4:if((i=e.sent).ok){e.next=7;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 7:return e.next=9,i.json();case 9:return o=e.sent,a(!1),e.abrupt("return",o);case 14:throw e.prev=14,e.t0=e.catch(1),a(!1),j(e.t0.message),e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,c,a,n){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=1d5cd1c31c3cb686a9f38fbb57e3023b",j=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u),"GET",null,{"Content-Type":"application/json"});case 3:return a=e.sent,e.abrupt("return",a.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters?name=").concat(t,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(d));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u),"GET",null,{"Content-Type":"application/json"});case 2:return a=e.sent,e.abrupt("return",d(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return{id:e.id,name:e.name,description:x(f(e.description)),thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},m=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u),"GET",null,{"Content-Type":"application/json"});case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:50,e.next=3,c("".concat(l,"comics?limit=8&offset=").concat(t,"&").concat(u),"GET",null,{"Content-Type":"application/json"});case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.title,description:e.description||"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,price:e.prices[0].price?e.prices[0].price+"$":"No price",pageCount:e.pageCount?e.pageCount+" pages":"No information about the number of pages",language:e.textObjects.language||"en-us"}},f=function(e){return""!==e?e:"There is no description"},x=function(e){return e.length>210?e.slice(0,210)+"...":e};return{loading:t,error:a,clearError:o,getAllCharacters:j,getCharacterByName:h,getCharacter:b,getAllComics:p,getComic:m}}},45:function(e,t,c){"use strict";var a=c(11),n=c(14),r=c(15),s=c(16),i=c(0),o=c(41),l=c(2),u=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(n.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(i.Component);t.a=u},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},71:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(0),r=c(23),s=c(41),i=c(43),o=(c(58),c.p+"static/media/mjolnir.61f31e18.png"),l=c(2),u=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"unset"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],j=t[1],h=Object(i.a)(),b=h.loading,d=h.error,m=h.getCharacter,p=h.clearError;Object(n.useEffect)((function(){f()}),[]);var O=function(e){j(e)},f=function(){p();var e=Math.floor(400*Math.random()+1011e3);m(e).then(O)},x=d?Object(l.jsx)(s.a,{}):null,_=b?Object(l.jsx)(r.a,{}):null,v=b||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[x,_,v,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:f,disabled:b,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(4),b=c.n(h),d=c(8),m=c(7),p=c(82),O=c(83),f=(c(59),function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),o=c[0],u=c[1],j=Object(n.useState)(!1),h=Object(a.a)(j,2),f=h[0],x=h[1],_=Object(n.useState)(1155),v=Object(a.a)(_,2),g=v[0],N=v[1],k=Object(n.useState)(!1),y=Object(a.a)(k,2),w=y[0],C=y[1],E=Object(i.a)(),S=E.loading,T=E.error,F=E.getAllCharacters;Object(n.useEffect)((function(){q(g,!0)}),[]);var q=function(e,t){x(!t),F(e).then(A)},A=function(){var e=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=!1,t.length<9&&(c=!0),u((function(e){return[].concat(Object(d.a)(e),Object(d.a)(t))})),x((function(e){return!1})),N((function(e){return e+9})),C((function(e){return c}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=Object(n.useRef)([]),I=function(e){G.current.forEach((function(e){return e.classList.remove("char__item_selected")})),G.current[e].classList.add("char__item_selected"),G.current[e].focus()};var R=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(l.jsx)(p.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return G.current[c]=e},onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),I(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(O.a,{component:null,children:c})})}(o),B=T?Object(l.jsx)(s.a,{}):null,D=S&&!f?Object(l.jsx)(r.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[B,D,R,Object(l.jsx)("button",{disabled:f,style:{display:w?"none":"block"},className:"button button__main button__long",onClick:function(){return q(g)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),x=(c(60),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),_=(c(61),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(o={objectFit:"unset"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),v=function(e){var t=Object(n.useState)(null),c=Object(a.a)(t,2),o=c[0],u=c[1],j=Object(i.a)(),h=j.loading,b=j.error,d=j.getCharacter,m=j.clearError;Object(n.useEffect)((function(){p()}),[e.charId]);var p=function(){var t=e.charId;t&&(m(),d(t).then(O))},O=function(e){u(e)},f=o||h||b?null:Object(l.jsx)(x,{}),v=b?Object(l.jsx)(s.a,{}):null,g=h?Object(l.jsx)(r.a,{}):null,N=h||b||!o?null:Object(l.jsx)(_,{char:o});return Object(l.jsxs)("div",{className:"char__info",children:[f,v,g,N]})},g=c(45),N=c.p+"static/media/vision.067d4ae1.png",k=c(75),y=c(76),w=c(12),C=(c(71),function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],o=Object(i.a)(),u=o.loading,j=o.error,h=o.getCharacterByName,b=o.clearError,d=function(e){r(e)},m=j?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(s.a,{})}):null,p=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(w.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(k.d,{initialValues:{charName:""},validationSchema:y.a({charName:y.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,b(),h(t).then(d)},children:Object(l.jsxs)(k.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(k.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:u,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(k.a,{component:"div",className:"char__search-error",name:"charName"})]})}),p,m]})});t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g.a,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(g.a,{children:Object(l.jsx)(f,{onCharSelected:function(e){r(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(g.a,{children:Object(l.jsx)(v,{charId:c})}),Object(l.jsx)(g.a,{children:Object(l.jsx)(C,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.6b05039e.chunk.js.map