(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),c=a.n(r),i=a(3),l=a(14),o=a.n(l),u=a(2),m=a.n(u),d=a(15),p=a.n(d),f=function(e){var t={chart:{type:"line"},title:{text:"Apple Inc."},subtitle:{text:"(NASDAQ: AAPL): 100 days"},plotOptions:{series:{marker:{enabled:!1}}},yAxis:{title:{text:"Price USD"}},xAxis:{labels:{enabled:!1}},series:[{name:"Price USD",data:e.data}]};return s.a.createElement(p.a,{highcharts:m.a,options:t})},g=function(e){var t=e.message;return s.a.createElement("div",{className:"message",id:"message"},t)},b=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(i.a)(c,2),u=l[0],m=l[1];return s.a.useEffect((function(){console.log("effect"),function(e,t){o.a.get("/api/data").then((function(t){return e(t.data)})).catch((function(e){t(JSON.stringify(e.response.data.error)),console.log(e)}))}(r,m)}),[]),void 0!==a?s.a.createElement("div",null,u?s.a.createElement(g,{message:u}):s.a.createElement(f,{data:a})):s.a.createElement("div",null,u?s.a.createElement(g,{message:u}):"Loading...")};a(38);c.a.render(s.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8e41a379.chunk.js.map