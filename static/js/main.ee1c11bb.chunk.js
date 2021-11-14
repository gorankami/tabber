(this.webpackJsonptabber=this.webpackJsonptabber||[]).push([[0],{14:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(5),a=n.n(i),u=(n(14),n(3)),o=n(4),l=n(2);function s(t){var e=function(t){return t.reduce((function(t,e){return Math.max(t,null===e?0:e.length)}),0)}(t);if(!e)return null;var n="--";return n=n.substring(0,e),t.map((function(t){return null===t?n:t.length<e?"-".concat(t):t}))}function j(t){var e=["-","-","-","-","-","-"];return t.forEach((function(t){t.forEach((function(t,n){return e[n]+="".concat(t,"-")}))})),e}var b="data SET_BUFFER",d="data SET_KEY_HOLD",f="data SET_IS_MULTIPLE_ON",O="data UNDO",h="data ADD_LINE",p="data COMPLETE_SECTION",x="data SET_TITLE",g=function(){return{sections:[],buffer:Array(6).fill(null),keyHold:null,isMultipleOn:!1,currentSection:[],title:""}};var v=function(t){return{type:b,payload:t}},y=function(t){return{type:f,payload:t}},S=function(t){return{type:h,payload:t}},m=function(){return{type:O}},E=function(t){return t.data.sections},k=function(t){return t.data.buffer},C=function(t){return t.data.isMultipleOn},A=function(t){return j(t.data.currentSection)},T=function(t){return t.data.title},w=["e","B","G","D","A","E"],L=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];function F(t,e){return L[(e+function(t){switch(t){case w[0]:case w[5]:return 7;case w[1]:return 2;case w[2]:return 10;case w[3]:return 5;case w[4]:return 0;default:return""}}(t))%12]}var I=n(0);function _(){var t=Object(u.c)(k),e=Object(u.b)(),n=Object(u.c)(C);return Object(I.jsx)("table",{style:{userSelect:"none",textAlign:"center"},children:Object(I.jsx)("tbody",{children:B((function(r,c){var i=n?Object(o.a)(t):Array(6).fill(null);i[r]=c.toString(),e(n?v(i):S(i))}))})})}function B(t){for(var e=[Object(I.jsx)("tr",{children:Array.from(Array(25).keys()).map((function(t){return Object(I.jsx)("th",{children:t})}))})],n=function(n){for(var r=[],c=3,i=function(e){c*=.96;var i=w[n]+e;r.push(Object(I.jsx)("td",{onClick:function(){return t(n,e)},style:{width:e?c+"em":"1em"},className:[3,5,7,9,12,15,17,19,21].includes(e)?"gray-cell":"",children:F(w[n],e)},i))},a=0;a<=24;a++)i(a);e.push(Object(I.jsxs)("tr",{children:[r,Object(I.jsx)("td",{style:{width:"20px",textAlign:"center"},onClick:function(){return t(n,"x")},children:"x"})]},n))},r=0;r<6;r++)n(r);return e}function D(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,c=Object(r.useRef)();Object(r.useEffect)((function(){c.current=e}),[e]),Object(r.useEffect)((function(){if(n&&n.addEventListener){var e=function(t){return c.current(t)};return n.addEventListener(t,e),function(){n.removeEventListener(t,e)}}}),[t,n])}function M(){var t=Object(u.b)(),e=Object(u.c)(k);return D("keydown",(function(e){"Shift"===e.key&&t(y(!0))})),D("keyup",(function(n){"Backspace"===n.key&&t(m()),"Shift"===n.key&&(t(y(!1)),e.find((function(t){return null!==t}))&&(t(S(e)),t(v(Array(6).fill(null)))))})),Object(I.jsx)(I.Fragment,{})}var N="|\n|\n|\n|\n|\n|",P={display:"flex",flexWrap:"wrap"},H={marginLeft:"0.2em",color:"orange",fontWeight:"bold",textAlign:"right",width:"15px"};function G(){var t=Object(u.c)(k),e=Object(u.c)(A),n=Object(u.c)(E);return Object(I.jsxs)("div",{style:P,children:[Object(I.jsx)("pre",{children:w.join("\n")}),Object(I.jsx)("pre",{children:N}),n.map((function(t){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("pre",{children:j(t).join("\n")}),Object(I.jsx)("pre",{children:N})]})})),Object(I.jsx)("pre",{children:e.join("\n")}),Object(I.jsx)("pre",{style:H,children:t.join("\n")})]})}function U(t,e){return Object(I.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:e})}var J={float:"right",width:"20em",textAlign:"right"};function K(){return Object(I.jsxs)("div",{style:J,children:["This app is open source under ",U("https://github.com/gorankami/tabber/blob/main/LICENSE","MIT license"),", and is hosted at ",U("https://github.com/gorankami/tabber","GitHub")]})}function R(){var t=Object(u.b)(),e=Object(u.c)(T);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"no-print",children:[Object(I.jsx)(M,{}),Object(I.jsx)(K,{}),Object(I.jsx)("p",{children:"Click on a fret to add it to the tab"}),Object(I.jsx)("p",{children:"Hold SHIFT and click multiple strings to add a chord"}),Object(I.jsx)("p",{children:"Press BACKSPACE to remove last vertical array"}),Object(I.jsx)(_,{}),Object(I.jsx)("button",{onClick:function(){t(m())},children:"Backspace"}),Object(I.jsx)("button",{onClick:function(){t({type:p})},children:"Complete section"}),Object(I.jsx)("button",{onClick:function(){return window.print()},children:"Print"}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsxs)("label",{children:["Title: ",Object(I.jsx)("input",{onChange:function(e){var n;t((n=e.target.value,{type:x,payload:n}))}})]}),!e&&Object(I.jsx)("h3",{style:{color:"gray"},children:"untitled"})]}),e&&Object(I.jsx)("h3",{children:e}),Object(I.jsx)(G,{})]})}var W=n(6),Y=Object(W.a)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g(),e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case b:return Object(l.a)(Object(l.a)({},t),{},{buffer:r});case d:return Object(l.a)(Object(l.a)({},t),{},{keyHold:r});case f:return Object(l.a)(Object(l.a)({},t),{},{isMultipleOn:r});case O:var c=Object(o.a)(t.sections);if(!t.currentSection.length&&!c.length)return t;if(t.currentSection.length)return Object(l.a)(Object(l.a)({},t),{},{currentSection:t.currentSection.slice(0,-1)});var i=c.pop();return Object(l.a)(Object(l.a)({},t),{},{sections:c,currentSection:i});case h:return Object(l.a)(Object(l.a)({},t),{},{currentSection:[].concat(Object(o.a)(t.currentSection),[s(r)])});case p:return t.currentSection.length?Object(l.a)(Object(l.a)({},t),{},{sections:[].concat(Object(o.a)(t.sections),[t.currentSection]),currentSection:[]}):t;case x:return Object(l.a)(Object(l.a)({},t),{},{title:r});default:return t}}}),q=Y,z=Object(W.b)(q);function Q(){return Object(I.jsx)(u.a,{store:z,children:Object(I.jsx)(R,{})})}var V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))};a.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(Q,{})}),document.getElementById("root")),V()}},[[22,1,2]]]);
//# sourceMappingURL=main.ee1c11bb.chunk.js.map