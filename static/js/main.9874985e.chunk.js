(this.webpackJsonpethe_design=this.webpackJsonpethe_design||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),i=n(0),o=n.n(i),r=(n(40),n(5)),l=n(24),c=n.n(l),d=n(25),s=n.n(d),u=(n(41),function(){var e="rgb(26,26,26)",t=Object(i.useState)("/"===window.location.pathname&&window.pageYOffset<5?"hsla(0,0,96, 1)":e),n=Object(a.a)(t,2),l=(n[0],n[1]),d=Object(i.useState)(58.67),u=Object(a.a)(d,2),h=u[0],m=u[1],g=Object(i.useState)(0),p=Object(a.a)(g,2),v=p[0],f=p[1],E=Object(i.useState)(window.innerWidth),y=Object(a.a)(E,2),b=y[0],w=y[1];return console.log(b,"screenWidth"),Object(i.useEffect)((function(){window.addEventListener("resize",(function(e){w(window.innerWidth)})),window.addEventListener("scroll",(function(e){f(window.pageYOffset),console.log(v,"offset")})),document.getElementById("header2").addEventListener("wheel",(function(e){"100vh"===h&&e.preventDefault()}))})),o.a.createElement("div",{id:"header2",style:{height:h,backgroundColor:v<5&&h<60&&"/"===window.location.pathname?"rgb(244,244,244)":e}},o.a.createElement("div",{id:"header-items2"},o.a.createElement(r.a,{to:"/"},o.a.createElement("img",{src:c.a,id:"logo2",style:{filter:v>=5||"100vh"===h||"/"!==window.location.pathname?"invert(1)":"invert(0)"}})),o.a.createElement("img",{src:s.a,style:{display:b<1024?"flex":"none"},id:"menu2",onClick:function(){m(58.67===h?"100vh":58.67)}}),o.a.createElement("div",{id:"nav-links",style:b<1024?{display:"none"}:v>=5||"100vh"===h||"/"!==window.location.pathname?{filter:"invert(1)",display:"flex"}:{filter:"invert(0)",display:"flex"}},o.a.createElement(r.a,{to:"/vision",className:"nav-link"},o.a.createElement("h4",{style:{fontSize:16,fontWeight:600,color:"black"}},"vision")),o.a.createElement(r.a,{to:"/values",className:"nav-link"},o.a.createElement("h4",{style:{fontSize:16,fontWeight:600,color:"black"}},"values")),o.a.createElement(r.a,{to:"/lyn",className:"nav-link"},o.a.createElement("h4",{style:{fontSize:16,fontWeight:600,color:"black"}},"people")))),o.a.createElement("div",{id:"nav-options"},o.a.createElement(r.a,{to:"/vision",className:"nav-option",onClick:function(){m(58.67),l(e)}},o.a.createElement("h2",null,"Vision")),o.a.createElement(r.a,{to:"/values",className:"nav-option",onClick:function(){m(58.67),l(e)}},o.a.createElement("h2",null,"Values")),o.a.createElement(r.a,{to:"/lyn",className:"nav-option",onClick:function(){m(58.67),l(e)}},o.a.createElement("h2",null,"People"))))})},,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),i=n.n(a),o=(n(42),n(20)),r=n.n(o),l=n(5),c=function(e){return i.a.createElement("div",{id:"footer",style:{display:"/"!==window.location.pathname?"none":"flex"}},i.a.createElement(l.a,{to:"/values",id:"next-link",className:"nav-option"},i.a.createElement("h2",{id:"next-text"},"Our Values"),i.a.createElement("img",{id:"little-arrow",src:r.a,height:31,width:17})))}},,,function(e,t,n){e.exports=n.p+"static/media/little-arrow.f1fb22b5.png"},function(e,t,n){e.exports=n.p+"static/media/values-down-arrow.29337b1b.png"},,function(e,t){},function(e,t,n){e.exports=n.p+"static/media/logo.7e91c6e4.png"},function(e,t,n){e.exports=n.p+"static/media/menu.55103c59.png"},,function(e,t,n){},function(e,t,n){e.exports=n(44)},,,,,function(e,t,n){},,function(e,t,n){},,,,,function(e,t,n){},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAEhJREFUKBVjZMAC/gMBTJgRCGBsGM0EY5BCD3JNLEA/1+PzDzZ5RuSQwqcZWY6sgGABmtCAbAqUjSyGzAZLY0QcSBTZyUMwcgG/TBSQ00Z3vAAAAABJRU5ErkJggg=="},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),l=n(3),c=(n(33),n(21)),d=n.n(c),s=(n(34),n(12)),u=n.n(s),h=(n(35),n(27),n(16)),m=n(7),g=n(23),p=n.n(g),v=Object(m.b)({view:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{overlay:"none",aboveFold:"flex",menu:"menu",header:"invert(0)",opacity:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEFAULT":return{overlay:"none",aboveFold:"flex",menu:"menu",header:"invert(0)",opacity:0};case"OVERLAY":return{overlay:"flex",aboveFold:"none",menu:"close",header:"invert(1)",opacity:1,ePosition:"fixed"};case"FRONT":return{overlay:"none",aboveFold:"flex",menu:"menu",header:"invert(0)"};case"VALUES":return{overlay:"none",aboveFold:"flex",menu:"menu",header:"invert(1)"};default:return e}},values:p.a,header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{headerInvert:"invert(0)",backgroundColor:"rgba(0,0,0,0)",mode:"start",headerHeight:"62px",display:"none",opacity:0,zIndex:-10},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEFAULTHEADER":return Object.assign({},{headerInvert:"invert(0)",backgroundColor:"rgba(0,0,0,0)",mode:"default",headerHeight:"62px",display:"none",opacity:0,zIndex:-10});case"VALUESHEADER":return Object.assign({},{headerInvert:"invert(1)",backgroundColor:"rgba(0,0,0,0)",mode:"default",headerHeight:"62px",display:"none",opacity:0,zIndex:-10});case"INVERTHEADER":return Object.assign({},{headerInvert:"invert(1)",backgroundColor:"rgba(0,0,0,0)",mode:"invert",headerHeight:"62px",display:"none",opacity:0,zIndex:-10});case"SCROLLHEADER":return{headerInvert:"invert(1)",backgroundColor:"rgb(26, 26, 26)",mode:"scroll",headerHeight:"62px",display:"none",opacity:0,zIndex:-10};case"MENUHEADER":return{headerInvert:"invert(1)",backgroundColor:"rgb(26,26,26)",mode:"menu",headerHeight:"100vh",display:"flex",opacity:1,zIndex:10};default:return e}},matterNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{engagementWeight:900,identityWeight:500,expectationWeight:500,informationWeight:500,engagementBorder:"2px solid black"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ENGAGEMENT_NAV":return{engagementWeight:900,identityWeight:500,expectationWeight:500,informationWeight:500,engagementBorder:"2px solid black"};case"IDENTITY_NAV":return{engagementWeight:500,identityWeight:900,expectationWeight:500,informationWeight:500,identityBorder:"2px solid black"};case"EXPECTATION_NAV":return{engagementWeight:500,identityWeight:500,expectationWeight:900,informationWeight:500,expectationBorder:"2px solid black"};case"INFORMATION_NAV":return{engagementWeight:500,identityWeight:500,expectationWeight:500,informationWeight:900,informationBorder:"2px solid black"};default:return e}}}),f=n(46),E=n(47),y=n(15),b=n(17),w=(Object(a.lazy)((function(){return n.e(5).then(n.bind(null,76))})),Object(a.lazy)((function(){return n.e(4).then(n.bind(null,75))}))),A=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,72))})),x=Object(a.lazy)((function(){return n.e(8).then(n.t.bind(null,73,7))})),O=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,77))}));Object(a.lazy)((function(){return n.e(6).then(n.bind(null,74))}));r.a.render(i.a.createElement(h.a,{store:Object(m.c)(v)},i.a.createElement(f.a,null,i.a.createElement("div",{id:"routes"},i.a.createElement(E.a,{path:"/",component:y.a}),i.a.createElement(a.Suspense,{fallback:i.a.createElement("div",{style:{height:1,borderColor:"red",borderWidth:2}},i.a.createElement("p",{style:{color:"white",fontSize:200}},"'loading'"))},i.a.createElement(E.a,{exact:"true",path:"/",component:O}),i.a.createElement(E.a,{exact:"true",path:"/values",component:function(){var e=["Openness","Service","Evaluation","experience","renounce","enjoy","diligence"],t=["Only by embracing the unknown and staying open are we free to find solutions we can\u2019t initially imagine.","We try to empathize with the experiences of others, and help out where we can.","We regularly assess the productive value of things and adjust accordingly. We\u2019re not that cool with convention.","Experience is all we really have. We don\u2019t take our\u2019s or others\u2019 lightly.","We live for the process more than the result. And somehow, the result is usually better for it.","We try to find joy in whatever we do.","If something is worth doing, its worth doing wholeheartedly."],n=Object(a.useState)(0),o=Object(l.a)(n,2),r=o[0],c=o[1],s=Object(a.useState)(e[r]),h=Object(l.a)(s,2),m=(h[0],h[1],Object(a.useState)(t[r])),g=Object(l.a)(m,2),p=(g[0],g[1],Object(a.useState)(0)),v=Object(l.a)(p,2);v[0],v[1];u()((function(){c(r-1)}),300,{trailing:!0}),u()((function(){c(r+1)}),3e3,{leading:!0});return Object(a.useEffect)((function(){document.getElementById("value-title").style.opacity=1,document.getElementById("value-text").style.opacity=1;var e=function e(t){document.getElementById("value-title").style.opacity=0,document.getElementById("value-text").style.opacity=0,setTimeout((function(){return t.deltaY>0?c(r+1):c(r-1)}),500),window.removeEventListener("wheel",e)};setTimeout((function(){window.addEventListener("wheel",e)}),1500)})),i.a.createElement("div",{id:"page_value"},i.a.createElement("div",{id:"value-con"},i.a.createElement("h3",{id:"value-title"},e[r]),i.a.createElement("p",{id:"value-text"},t[r]," "),i.a.createElement("h2",null,"0".concat(r+1),"/07"),i.a.createElement("img",{src:d.a})))}}),i.a.createElement(E.a,{exact:"true",path:"/bill_q",component:A}),i.a.createElement(E.a,{exact:"true",path:"/bill_app",component:x}),i.a.createElement(E.a,{exact:"true",path:"/lyn",component:w}),i.a.createElement(E.a,{path:"/",component:b.a}))))),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.9874985e.chunk.js.map