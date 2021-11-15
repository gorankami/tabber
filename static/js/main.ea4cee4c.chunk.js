(this.webpackJsonptabber=this.webpackJsonptabber||[]).push([[0],{10:function(e,t,n){e.exports={Tablature:"Tablature_Tablature__ZSR7P",bufferStyle:"Tablature_bufferStyle__1wU1B"}},12:function(e,t,n){e.exports={FretBoard:"FretBoard_FretBoard__3ffBY"}},13:function(e,t,n){e.exports={InfoPanel:"InfoPanel_InfoPanel__3VAV2"}},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),u=(n(18),n(3)),o=n(4),s=n(2);function l(e){var t=function(e){return e.reduce((function(e,t){return Math.max(e,null===t?0:t.length)}),0)}(e);if(!t)return null;var n="--";return n=n.substring(0,t),e.map((function(e){return null===e?n:e.length<t?"-".concat(e):e}))}function j(e){var t=["-","-","-","-","-","-"];return e.forEach((function(e){e.forEach((function(e,n){return t[n]+="".concat(e,"-")}))})),t}var b="data SET_BUFFER",d="data SET_KEY_HOLD",f="data SET_IS_MULTIPLE_ON",O="data UNDO",h="data ADD_LINE",p="data COMPLETE_SECTION",x="data SET_TITLE",v="data SET_ARE_NOTE_LABELS_SHOWN",S=function(){return{sections:[],buffer:Array(6).fill(null),keyHold:null,isMultipleOn:!1,currentSection:[],title:"",areNoteLabelsShown:!1}};var _=function(e){return{type:b,payload:e}},g=function(e){return{type:f,payload:e}},y=function(e){return{type:h,payload:e}},E=function(){return{type:O}},m=function(e){return e.data.sections},k=function(e){return e.data.buffer},P=function(e){return e.data.isMultipleOn},T=function(e){return j(e.data.currentSection)},C=function(e){return e.data.title},N=function(e){return e.data.areNoteLabelsShown},L=["e","B","G","D","A","E"],F=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];function w(e,t){return F[(t+function(e){switch(e){case L[0]:case L[5]:return 7;case L[1]:return 2;case L[2]:return 10;case L[3]:return 5;case L[4]:return 0;default:return""}}(e))%12]}var B=n(12),A=n.n(B),I=n(0);function D(){var e=Object(u.c)(k),t=Object(u.b)(),n=Object(u.c)(P),c=Object(u.c)(N);return Object(I.jsxs)("table",{className:A.a.FretBoard,children:[Object(I.jsx)("thead",{children:c&&Object(I.jsxs)("tr",{children:[Array.from(Array(25).keys()).map((function(e){return Object(I.jsx)("th",{children:e})})),Object(I.jsx)("th",{children:"Special"})]})}),Object(I.jsx)("tbody",{children:H((function(c,r){var a=n?Object(o.a)(e):Array(6).fill(null);a[c]=r.toString(),t(n?_(a):y(a))}),c)})]})}function H(e,t){for(var n=[],c=function(c){for(var r=[],a=4,i=function(n){a*=.96,r.push(Object(I.jsx)("td",{onClick:function(){return e(c,n)},style:{width:n?a+"em":"1em"},children:t&&w(L[c],n)},L[c]+n))},u=0;u<=24;u++)i(u);n.push(Object(I.jsxs)("tr",{children:[r,Object(I.jsx)("td",{onClick:function(){return e(c,"x")},children:"x"})]},c))},r=0;r<6;r++)c(r);return n}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=Object(c.useRef)();Object(c.useEffect)((function(){r.current=t}),[t]),Object(c.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return r.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}function R(){var e=Object(u.b)(),t=Object(u.c)(k);return M("keydown",(function(t){"Shift"===t.key&&e(g(!0))})),M("keyup",(function(n){"Backspace"===n.key&&e(E()),"Shift"===n.key&&(e(g(!1)),t.find((function(e){return null!==e}))&&(e(y(t)),e(_(Array(6).fill(null)))))})),Object(I.jsx)(I.Fragment,{})}var G=n(10),U=n.n(G),J="|\n|\n|\n|\n|\n|";function K(){var e=Object(u.c)(k),t=Object(u.c)(T),n=Object(u.c)(m);return Object(I.jsxs)("div",{className:U.a.Tablature,children:[Object(I.jsx)("pre",{children:L.join("\n")}),Object(I.jsx)("pre",{children:J}),n.map((function(e){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("pre",{children:j(e).join("\n")}),Object(I.jsx)("pre",{children:J})]})})),Object(I.jsx)("pre",{children:t.join("\n")}),Object(I.jsx)("pre",{className:U.a.bufferStyle,children:e.join("\n")})]})}var V=n(13),Y=n.n(V);function W(e,t){return Object(I.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:t})}function Z(){var e=Object(u.b)(),t=Object(u.c)(C),n=Object(u.c)(N);return Object(I.jsxs)("div",{className:Y.a.InfoPanel,children:[Object(I.jsxs)("label",{children:["Title: ",Object(I.jsx)("input",{value:t,onChange:function(t){var n;e((n=t.target.value,{type:x,payload:n}))}})]}),Object(I.jsx)("p",{children:"Click on a fret to add it to the tab"}),Object(I.jsx)("p",{children:"Hold SHIFT and click multiple strings to add a chord"}),Object(I.jsx)("p",{children:"Press BACKSPACE to remove last vertical array"}),Object(I.jsxs)("p",{children:["This app is open source under ",W("https://github.com/gorankami/tabber/blob/main/LICENSE","MIT license"),", and is hosted at ",W("https://github.com/gorankami/tabber","GitHub")]}),Object(I.jsx)("p",{children:Object(I.jsxs)("label",{children:[Object(I.jsx)("input",{type:"checkbox",checked:n,onChange:function(t){var n;e((n=t.target.checked,{type:v,payload:n}))}})," ","Show note labels"]})}),Object(I.jsx)("button",{onClick:function(){e(E())},children:"Backspace"}),Object(I.jsx)("button",{onClick:function(){e({type:p})},children:"Complete section"}),Object(I.jsx)("button",{onClick:function(){return window.print()},children:"Print"})]})}var q=n(5),z=n.n(q);function Q(){var e=Object(u.c)(C);return Object(I.jsxs)("div",{className:z.a.Page,children:[Object(I.jsx)(R,{}),Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:z.a.noPrint,children:Object(I.jsx)(D,{})}),Object(I.jsxs)("div",{className:z.a.print,children:[Object(I.jsx)("div",{children:!e&&Object(I.jsx)("h3",{className:z.a.untitled,children:"untitled"})}),Object(I.jsx)("div",{children:e&&Object(I.jsx)("h3",{children:e})}),Object(I.jsx)(K,{})]})]}),Object(I.jsx)("div",{className:z.a.noPrint,children:Object(I.jsx)(Z,{})})]})}var X=n(7),$=Object(X.a)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S(),t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case b:return Object(s.a)(Object(s.a)({},e),{},{buffer:c});case d:return Object(s.a)(Object(s.a)({},e),{},{keyHold:c});case f:return Object(s.a)(Object(s.a)({},e),{},{isMultipleOn:c});case O:var r=Object(o.a)(e.sections);if(!e.currentSection.length&&!r.length)return e;if(e.currentSection.length)return Object(s.a)(Object(s.a)({},e),{},{currentSection:e.currentSection.slice(0,-1)});var a=r.pop();return Object(s.a)(Object(s.a)({},e),{},{sections:r,currentSection:a});case h:return Object(s.a)(Object(s.a)({},e),{},{currentSection:[].concat(Object(o.a)(e.currentSection),[l(c)])});case p:return e.currentSection.length?Object(s.a)(Object(s.a)({},e),{},{sections:[].concat(Object(o.a)(e.sections),[e.currentSection]),currentSection:[]}):e;case x:return Object(s.a)(Object(s.a)({},e),{},{title:c});case v:return Object(s.a)(Object(s.a)({},e),{},{areNoteLabelsShown:c});default:return e}}}),ee=$,te=Object(X.b)(ee);function ne(){return Object(I.jsx)(u.a,{store:te,children:Object(I.jsx)(Q,{})})}var ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(ne,{})}),document.getElementById("root")),ce()},5:function(e,t,n){e.exports={Page:"Page_Page__RyEhf",untitled:"Page_untitled__3fjeD",print:"Page_print__3jHFv",noPrint:"Page_noPrint__1S4xJ"}}},[[26,1,2]]]);
//# sourceMappingURL=main.ea4cee4c.chunk.js.map