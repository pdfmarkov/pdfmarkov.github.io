(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],h=0,d=[];h<i.length;h++)a=i[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0968":function(e,t,r){},1838:function(e,t,r){"use strict";r("c658")},2125:function(e,t,r){},"2c2c":function(e,t,r){},"3e4d":function(e,t,r){},"3eb7":function(e,t,r){"use strict";r("0968")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("logo"),r("router-view"),r("basement")],1)},s=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"logo"}},[r("div",{attrs:{id:"logo_box"}},[r("a",{attrs:{href:"https://drive.google.com/file/d/1wYfd6IqQWkF7nGqvGRXAvJnHeAsAXRyh/view?usp=sharing"}},[e._v("Lab 4, Var 10113")])]),r("div",{attrs:{id:"logo_btn_panel"}},[r("div",{attrs:{id:"logo_btn"}})])])}],c=(r("c5b8"),r("2877")),l={},u=Object(c["a"])(l,a,i,!1,null,null,null),h=u.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"basement"}})},g=[],f=(r("cb3d"),{}),p=Object(c["a"])(f,d,g,!1,null,null,null),m=p.exports;document.title="Lab.4, Markov/Tarasenko";var b={name:"app",components:{logo:h,basement:m}},v=b,w=(r("034f"),Object(c["a"])(v,o,s,!1,null,null,null)),k=w.exports,y=r("8c4f"),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isAuthorized?r("basic",{attrs:{access:e.accessTokenName,refresh:e.refreshTokenName}}):e._e()],1)},_=[],T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"basic"}},[r("div",{attrs:{id:"top-container"}},[r("div",{staticClass:"inlines__align--center",attrs:{id:"area-container"}},[r("div",{attrs:{id:"area-subcontainer"}},[r("canvas",{ref:"area",attrs:{id:"area",width:"600",height:"600"},on:{click:e.checkArea}},[e._v(" Canvas not supported ")])])]),r("div",{attrs:{id:"form-container"}},[r("form",{attrs:{id:"result"}},[r("fieldset",{ref:"x",attrs:{title:"Значение параметра x должно быть целым числом в пределах -5 до 3"}},[r("label",[e._v("x")]),r("label",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.result.x,expression:"result.x"}],attrs:{required:"true"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.result,"x",t.target.multiple?r:r[0])}}},e._l(e.xValues,(function(t){return r("option",[e._v(e._s(t))])})),0)])]),r("fieldset",{ref:"y",attrs:{title:"Значение параметра y должно быть целым число в интервале от -3 до 5"}},[r("label",[e._v("y")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.y,expression:"result.y"}],attrs:{type:"text",placeholder:"y in (-3, 5)",maxlength:9,required:"true"},domProps:{value:e.result.y},on:{input:function(t){t.target.composing||e.$set(e.result,"y",t.target.value)}}})])]),r("fieldset",{ref:"r",attrs:{title:"Значение параметра r должно быть целым числом в пределах от 1 до 3"}},[r("label",[e._v("r")]),r("label",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.result.r,expression:"result.r"}],attrs:{required:"true"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.result,"r",t.target.multiple?r:r[0])}}},e._l(e.xValues,(function(t){return r("option",[e._v(e._s(t))])})),0)])]),r("fieldset",{staticClass:"inlines__align--center"},[r("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.check(t)}}},[e._v("проверить")]),r("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.recountClarity(t)}}},[e._v("перерасчет")]),r("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.signout(t)}}},[e._v("выйти")])]),r("fieldset",{staticClass:"inlines__align--center"},[r("label",[e._v("Temperature: "+e._s(e.temp)+"°C ")]),r("br"),r("label",[e._v("Clarity: "+e._s(e.clarity.toFixed(2))+" ")]),r("br"),e._l(4,(function(t){return r("label",[e._v(" Zone №"+e._s(t)+": "+e._s(e.numberOfDots[t-1])+" "),r("br")])}))],2)])])]),e.isLoading?r("loader"):e.results.length?r("resultscontainer",{attrs:{results:e.results}}):r("p",{staticClass:"empty-results"},[e._v("результаты отсутствуют")])],1)},S=[],O=(r("99af"),r("cb29"),r("caad"),r("b0c0"),r("b680"),r("d3b7"),r("ac1f"),r("2532"),r("1276"),r("96cf"),r("1da1")),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"resultscontainer"}},[r("table",{attrs:{id:"results"}},[e._m(0),r("tbody",{staticClass:"table__body"},e._l(e.results,(function(t){return r("tr",[r("td",[r("div",{staticClass:"scrollable"},[e._v(e._s(t.x))])]),r("td",{staticClass:"special-width"},[r("div",{staticClass:"scrollable special-width"},[e._v(e._s(t.y))])]),r("td",[r("div",{staticClass:"scrollable"},[e._v(e._s(t.r))])]),r("td",[r("div",{staticClass:"scrollable"},[e._v(e._s(t.hit?"yes":"no"))])]),r("td",[r("div",[r("label",{staticStyle:{color:"white"},style:{backgroundColor:"rgba("+t.rgba+")",borderRadius:"20px",paddingLeft:"8px",paddingRight:"8px"}},[e._v(" "+e._s("rgba("+t.rgba+")")+" ")])])])])})),0)])])},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{staticClass:"table__head"},[r("tr",[r("th",[e._v("x")]),r("th",[e._v("y")]),r("th",[e._v("r")]),r("th",[e._v("результат")]),r("th",[e._v("цвет")])])])}],j={name:"resultscontainer",props:["results"],data:function(){return{dateOptions:{localeMatcher:"best fit",hour12:!1,formatMatcher:"best fit",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}}}},N=j,$=(r("ebbf"),Object(c["a"])(N,C,R,!1,null,null,null)),A=$.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loader"}},[r("div",{staticClass:"lds-facebook"},[r("div"),r("div"),r("div")])])}],P=(r("f482"),{}),D=Object(c["a"])(P,E,L,!1,null,null,null),z=D.exports,M="http://localhost:41143/",I=["1","2","3"],V=4,H=.45,q={name:"basic",components:{resultscontainer:A,loader:z},props:["access","refresh"],data:function(){return{rValues:I,xValues:["-5","-4","-3","-2","-1","0"].concat(I),yMinimal:"-3",yMaximum:"5",result:{x:"",y:"",r:"",rgba:""},results:[],isLoading:!0,queries:{add:"main/app/add",refresh:"api/refresh/token",retrieve:"main/app/dots/all"},counter:4,temp:0,clarity:.9,numberOfDots:[0,0,0,0]}},computed:{radius:function(){return this.result.r},isNotChecked:function(){return!(void 0!==this.result.x&&null!==this.result.x&&this.result.x.length>0&&void 0!==this.result.y&&null!==this.result.y&&this.result.y.length>0&&void 0!==this.result.r&&null!==this.result.r&&this.result.r.length>0)}},methods:{toDoSomeCrazyShit:function(e){for(var t=this.chooseZone(e,!0),r=[],n=1;n<=3;n++)r[n-1]=+this.numberOfDots[(t+n)%4];return this.getColor(Math.abs(this.temp)*r[0]%255,Math.abs(this.temp)*r[1]%255,Math.abs(this.temp)*r[2]%255,this.clarity)},getWeather:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("fetching weather"),e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&appid=504d1497dc89eed937d925a1d46eebd8").catch((function(){alert("Error while getting weather. Check your connection")}));case 3:if(t=e.sent,console.log("check weather resp"),!t.ok){e.next=13;break}return console.log("check weather data"),e.next=9,t.json();case 9:r=e.sent,r?(console.log("temp: "+r.main.temp+", name: "+r.name),this.temp=r.main.temp-273.15):console.error("empty response body"),e.next=14;break;case 13:console.error("bad response ".concat(t.status," ").concat(t.statusText));case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),recountClarity:function(){console.log("recount clarity"),this.results.length?(this.clarity=+(this.results.length%30*.01+.35*(this.clarity+Math.random())).toFixed(2),this.redraw(this.radius),this.changeAllClarity(),this.drawDots(this.results),console.log("recount new clarity: "+this.clarity)):console.log("no any results in the table")},changeAllClarity:function(){for(var e=this.results.length-1;e>=0;--e)this.results[e].rgba=this.changeClarity(this.results[e])},changeClarity:function(e){return e.rgba.split(",")[0]+","+e.rgba.split(",")[1]+","+e.rgba.split(",")[2]+","+this.clarity},getColor:function(e,t,r,n){return"".concat(e,",").concat(t,",").concat(r,",").concat(n)},chooseZone:function(e,t){if(console.log(t?"getting zone of dot":"setting new dots in the number of zone "),e.x>0)if(e.y>0){if(t)return 0;this.numberOfDots[0]++}else if(e.y<0){if(t)return 3;this.numberOfDots[3]++}else{if(t)return 0;this.numberOfDots[0]++,this.numberOfDots[3]++}else if(e.x<0)if(e.y>0){if(t)return 1;this.numberOfDots[1]++}else if(e.y<0){if(t)return 2;this.numberOfDots[2]++}else{if(t)return 1;this.numberOfDots[1]++,this.numberOfDots[2]++}else if(e.y>0){if(t)return 0;this.numberOfDots[0]++,this.numberOfDots[1]++}else if(e.y<0){if(t)return 2;this.numberOfDots[2]++,this.numberOfDots[3]++}else{if(t)return 0;this.numberOfDots[0]++,this.numberOfDots[1]++,this.numberOfDots[2]++,this.numberOfDots[3]++}},translateTo:function(e,t,r,n){return console.log("length: ".concat(r,", real coordinate: ").concat(e,", field size: ").concat(t,", proportion: ").concat(n)),r*(e-t/2)/(t*n)},translateFrom:function(e,t,r,n){return t*(e*n/r+.5)},drawRectangle:function(e,t,r,n){e.fillRect(t-n/2,r-n,n/2,n)},drawTriangle:function(e,t,r,n){e.beginPath(),e.moveTo(t,r),e.lineTo(t,r+n),e.lineTo(t+n,r),e.closePath(),e.stroke(),e.fill()},drawQuadrant:function(e,t,r,n){e.beginPath(),e.arc(t,r,n,-Math.PI/2,0,!1),e.lineTo(t,r),e.closePath(),e.stroke(),e.fill()},drawArea:function(e,t,r,n,o){t.strokeStyle="#3399FF",t.fillStyle="#3399FF",console.log("canvas: ".concat(e,", ctx: ").concat(t,", x: ").concat(r,", y: ").concat(n,", radius: ").concat(o)),console.log("drawing rectangle"),this.drawRectangle(t,r,n,o),console.log("drawing triangle"),this.drawTriangle(t,r,n,o),console.log("drawing quadrant"),this.drawQuadrant(t,r,n,o)},drawVerticalLine:function(e,t,r,n){e.fillRect(t,r,2,n)},drawHorizontalLine:function(e,t,r,n){e.fillRect(t,r,n,2)},drawLines:function(e,t,r,n){e.strokeStyle="#000000",e.fillStyle="#000000",console.log("draw horizontal line"),this.drawHorizontalLine(e,0,r,n),console.log("draw vertical line"),this.drawVerticalLine(e,t,0,n)},drawHorizontalArrow:function(e,t,r,n){e.beginPath(),e.moveTo(t,r),e.lineTo(t-n,r-n/2),e.lineTo(t-n,r+n/2),e.closePath(),e.fill(),e.stroke()},drawSignedHorizontalArrow:function(e,t,r,n,o){e.fillText(o,t-n,r-n),this.drawHorizontalArrow(e,t,r,n)},drawVerticalArrow:function(e,t,r,n){e.beginPath(),e.moveTo(t,r),e.lineTo(t-n/2,r+n),e.lineTo(t+n/2,r+n),e.closePath(),e.fill(),e.stroke()},drawSignedVerticalArrow:function(e,t,r,n,o){e.fillText(o,t+n,r+n),this.drawVerticalArrow(e,t,r,n)},drawArrows:function(e,t,r,n){e.strokeStyle="#000000",e.fillStyle="#000000",console.log("drawing horizontal arrow"),this.drawHorizontalArrow(e,t,0,n),console.log("drawing vertical arrow"),this.drawVerticalArrow(e,2*t,r,n)},drawSignedArrows:function(e,t,r,n){e.strokeStyle="#000000",e.fillStyle="#000000",console.log("drawing signed horizontal arrow"),this.drawSignedHorizontalArrow(e,2*t,r,n,"x"),console.log("drawing signed vertical arrow"),this.drawSignedVerticalArrow(e,t,0,n,"y")},drawSignedHorizontalNotch:function(e,t,r,n,o){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillText(o,t+n,r+n/2),this.drawHorizontalLine(e,t-n/2,r,n)},drawSignedVerticalNotch:function(e,t,r,n,o){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillText(o,t-n,r-n),this.drawVerticalLine(e,t,r-n/2,n)},tempdraw:function(e){console.log("drawing template");var t=this.$refs.area,r=t.getContext("2d"),n=t.width,o=t.height,s=n*H;console.log("canvas: (".concat(n,":").concat(o,")"));var a="sans-serif",i=n/38;r.font="".concat(i,"px ").concat(a),console.log("clearing canvas"),r.clearRect(0,0,n,o),console.log("drawing working area"),this.drawArea(t,r,n/2,o/2,s),console.log("drawing coordinate lines"),this.drawLines(r,n/2,o/2,n),console.log("drawing direction arrows"),this.drawSignedArrows(r,n/2,o/2,s/20),console.log("drawing notches"),console.log("drawing horizontal notches"),this.drawSignedHorizontalNotch(r,n/2,o/2+s,s/20,"-R"),this.drawSignedHorizontalNotch(r,n/2,o/2+s/2,s/20,"-R/2"),this.drawSignedHorizontalNotch(r,n/2,o/2-s/2,s/20,"R/2"),this.drawSignedHorizontalNotch(r,n/2,o/2-s,s/20,"R"),console.log("drawing vertical notches"),this.drawSignedVerticalNotch(r,n/2-s,o/2,s/20,"-R"),this.drawSignedVerticalNotch(r,n/2-s/2,o/2,s/20,"-R/2"),this.drawSignedVerticalNotch(r,n/2+s/2,o/2,s/20,"R/2"),this.drawSignedVerticalNotch(r,n/2+s,o/2,s/20,"R"),console.log("template has drown")},basedraw:function(e){console.log("drawing with real radius");var t=this.$refs.area,r=t.getContext("2d"),n=t.width,o=t.height,s=n*H;console.log("canvas: (".concat(n,":").concat(o,")"));var a="sans-serif",i=n/38;r.font="".concat(i,"px ").concat(a),console.log("clearing canvas"),r.clearRect(0,0,n,o),console.log("drawing working area"),this.drawArea(t,r,n/2,o/2,e*s/4),console.log("drawing coordinate lines"),this.drawLines(r,n/2,o/2,n),console.log("drawing direction arrows"),this.drawSignedArrows(r,n/2,o/2,s/20),console.log("drawing notches"),console.log("drawing horizontal notches");for(var c=-4;c<=4;c+=.5){var l=o/2+s,u=2*s/8;0!==c&&this.drawSignedHorizontalNotch(r,n/2,l-(4+c)*u,s/20,c+"")}console.log("drawing vertical notches");for(var h=-4;h<=4;h+=.5){var d=n/2-s,g=2*s/8;this.drawSignedVerticalNotch(r,d+(4+h)*g,o/2,s/20,h+"")}console.log("basic has drown")},redraw:function(e){!e||e<=0?this.tempdraw("R"):this.basedraw(e)},testX:function(e){return console.log("x values: ".concat(this.xValues)),this.xValues.includes(e)},testY:function(e){var t=/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/,r=parseFloat(e);console.log("parsed value: ".concat(r));var n=t.test(e);console.log("float?: ".concat(n)),console.log("not NaN?: ".concat(!isNaN(r)));var o=r<=this.yMaximum;console.log("less?: ".concat(o));var s=r>=this.yMinimal;return console.log("more?: ".concat(s)),n&&!isNaN(r)&&o&&s},testR:function(e){return console.log("r values: ".concat(this.rValues)),this.rValues.includes(e)},fetchToken:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,s,a,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("fetching tokens from server..."),e.next=3,fetch(M+this.queries.refresh,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({refreshToken:localStorage.getItem("refreshToken")})}).catch((function(){alert("Error while getting token. Check your connection")}));case 3:if(r=e.sent,console.log("check if response is ok"),!r.ok){e.next=14;break}return console.log("successful fetching new token"),console.log("getting json object..."),e.next=10,r.json();case 10:if(n=e.sent,n){for(localStorage.setItem("accessToken",n.accessToken),window.location.reload(),t=t.bind(this),console.log("repeating losed operation..."),o=i.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=i[a];t(s)}else console.error("empty response body");e.next=17;break;case 14:console.error("bad response ".concat(r.status," ").concat(r.statusText)),console.log("redirecting to login-page..."),this.signout();case 17:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),fetchResult:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("provided valid data"),console.log("new result is ready to send: ".concat(this.result)),console.log("sending data..."),e.next=5,fetch(M+this.queries.add,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",shell_token:localStorage.getItem("accessToken")},body:JSON.stringify(this.result)}).catch((function(){alert("Error while getting response. Check your connection")}));case 5:if(t=e.sent,console.log("request sent -- checking if response is ok (201)"),201!==t.status){e.next=40;break}return console.log("response is ok (201 created)"),console.log("getting respond object from the server..."),e.prev=10,e.next=13,t.json();case 13:if(r=e.sent,!r){e.next=26;break}if(n=r.hit,void 0===n||null===n){e.next=23;break}console.log("query evaluation finished"),this.chooseZone(this.result,!1),this.results=this.results.concat([{x:this.result.x,y:this.result.y,r:this.result.r,hit:n,rgba:this.toDoSomeCrazyShit(this.result)}]),this.drawDots(this.results),e.next=24;break;case 23:throw new Error('bad repond object [field "hit" not provided]');case 24:e.next=28;break;case 26:o=new Error("bad respond object [provided empty result]"),o.data=r;case 28:e.next=35;break;case 30:e.prev=30,e.t0=e["catch"](10),console.error(e.t0),console.error("bad respond object: ".concat(e.t0.data)),alert("bad respond object: ".concat(e.t0.data));case 35:return e.prev=35,console.log("fetching new result finished"),e.finish(35);case 38:e.next=49;break;case 40:if(403!==t.status){e.next=48;break}return console.error("access token expired"),alert("access token expired"),console.log("fetching new token pair..."),e.next=46,this.fetchToken(this.fetchResult);case 46:e.next=49;break;case 48:console.error("bad response ".concat(t.statusText," : ").concat(t.status));case 49:console.log("response status: ".concat(t.status));case 50:case"end":return e.stop()}}),e,this,[[10,30,35,38]])})));function t(){return e.apply(this,arguments)}return t}(),drawDots:function(e){if(this.redraw(this.radius),console.log("previous results: ".concat(e)),e.length)for(var t=5,r=this.$refs.area,n=r.getContext("2d"),o=r.width,s=r.height,a=t,i=0;i<e.length;i++){console.log("putting dot: ".concat(e[i])),console.log("x: ".concat(e[i].x,"; y: ").concat(e[i].y)),console.log("color for this dot is "+this.results[i].rgba),n.fillStyle="rgba("+this.results[i].rgba+")",n.globalAlpha=1-1/a,console.log("counter: ".concat(a,"; alpha set to: ").concat(n.globalAlpha)),console.log("translating coordinates");var c=this.translateFrom(e[i].x,o,V,H),l=this.translateFrom(-e[i].y,s,V,H);if(console.log("translated: x: ".concat(c," y: ").concat(l)),console.log("putting dots"),n.beginPath(),n.arc(c,l,o*H/100,0,2*Math.PI,!0),n.fill(),n.stroke(),n.closePath(),n.globalAlpha=1,console.log("counter: ".concat(a,"; alpha restored to: ").concat(n.globalAlpha)),5===++a)break}else console.log("no any results in the table")},check:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r="",console.log("--- x testing ---"),this.testX(this.result.x)||(r+=this.$refs.x.title+";\n"),console.log("--- y testing ---"),this.testY(this.result.y)||(r+=this.$refs.y.title+";\n"),console.log("--- r testing ---"),this.testR(this.result.r)||(r+=this.$refs.r.title+";\n"),console.log("=== total testing ==="),!r.length){e.next=13;break}console.error("Errors[".concat(r.length,"]: ").concat(r)),alert(r),e.next=16;break;case 13:return console.log("fetching new result..."),e.next=16,this.fetchResult();case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkArea:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,s,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("current radius: ".concat(this.result.r)),console.log("check if radius set"),this.result.r){e.next=7;break}console.log("radius not set"),alert("Не установлено свойство радиуса области"),e.next=33;break;case 7:if(this.testR(this.result.r)){e.next=12;break}console.log("invalid radius value"),alert(this.$refs.r.title),e.next=33;break;case 12:return console.log("valid radius value"),r=this.$refs.area,n=r.getBoundingClientRect(),console.log("canvas: (".concat(r.clientWidth,":").concat(r.clientHeight,")")),console.log("getting x coordinate"),o=t.clientX-n.left,console.log("mouse x: ".concat(o)),console.log("translating to x value"),s=this.translateTo(o,r.clientWidth,V,H),console.log("x translated to: ".concat(s)),this.result.x=s,console.log("getting y coordinate"),a=t.clientY-n.top,console.log("mouse y: ".concat(a)),console.log("translating to y value"),i=-this.translateTo(a,r.clientHeight,V,H),console.log("y translated to: ".concat(i)),this.result.y=i,console.log("fetching new result"),e.next=33,this.fetchResult();case 33:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),signout:function(e){console.log("close current session..."),localStorage.clear(),document.getElementById("logo_btn").innerHTML="",this.$router.push({name:"auth-page"}),window.scrollTo(0,0)},retrieve:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getWeather();case 2:return console.log("getting results with unique token..."),e.next=5,fetch(M+this.queries.retrieve,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",shell_token:localStorage.getItem("accessToken")},body:JSON.stringify(this.accessToken)});case 5:if(t=e.sent,console.log("check if response is ok"),!t.ok){e.next=17;break}return console.log("response is ok"),console.log("getting the json object..."),e.next=12,t.json();case 12:for(r=e.sent,this.results=r,n=0;n<this.results.length;n++)console.log("Dot №"+n),this.chooseZone(this.results[n],!1),this.results[n].rgba=this.toDoSomeCrazyShit(this.results[n]);e.next=24;break;case 17:if("403"!==t.status){e.next=23;break}return console.log("access token expired..."),e.next=21,this.fetchToken(this.retrieve);case 21:e.next=24;break;case 23:console.error("bad response ".concat(t.status," ").concat(t.statusText));case 24:this.isLoading=!1;case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createExitButton:function(){if(""===document.getElementById("logo_btn").innerHTML){var e=document.createElement("a");e.innerHTML="Выйти",e.setAttribute("class","btn logo_btn"),e.onclick=this.signout;var t=document.getElementById("logo_btn");t.appendChild(e)}}},mounted:function(){this.getWeather(),this.retrieve(),this.redraw(this.radius)},watch:{radius:function(e){this.redraw(this.radius),this.radius>0&&this.drawDots(this.results)}}},F=q,J=(r("61e5"),Object(c["a"])(F,T,S,!1,null,null,null)),B=J.exports,U={name:"start",components:{basic:B},data:function(){return{accessTokenName:"accessToken",refreshTokenName:"refreshToken"}},computed:{access:function(){return localStorage.getItem("accessToken")},refresh:function(){return localStorage.getItem("refreshToken")},isAuthorized:function(){return!(void 0===this.access||null===this.access||""===this.access)}}},W=U,X=(r("1838"),Object(c["a"])(W,x,_,!1,null,"da3dce3c",null)),Z=X.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("startup",{attrs:{access:e.accessTokenName,refresh:e.refreshTokenName}}),e.isAuthorized?e._e():r("hat")],1)},Q=[],G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"startup"}},[r("loging",{attrs:{access:e.access,refresh:e.refresh}})],1)},K=[],ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"hat"}},[e._l(e.authors,(function(e){return[r("author",{attrs:{name:e.name,surname:e.surname,group:e.group,variant:e.variant,imageURL:e.imageURL,profileLink:e.profileLink}})]}))],2)},te=[],re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"author"}},[r("a",{attrs:{href:e.profileLink}},[r("div",{staticClass:"author-logo"},[r("img",{attrs:{src:e.imageURL,width:"100%"}})]),r("div",{staticClass:"author-info"},[r("h3",{staticClass:"text__title"},[e._v(e._s(e.name)+" "+e._s(e.surname))]),r("h4",{staticClass:"text__subtitle"},[e._v("группа: "+e._s(e.group)+" "),r("br"),e._v(" вариант: "+e._s(e.variant))])])])])},ne=[],oe={name:"author",props:["name","surname","group","variant","imageURL","profileLink"]},se=oe,ae=(r("d487"),Object(c["a"])(se,re,ne,!1,null,null,null)),ie=ae.exports,ce={name:"hat",data:function(){return{authors:[{name:"Петр",surname:"Марков",group:"P3210",variant:"10113",imageURL:"https://avatars0.githubusercontent.com/u/12988105?s=460&u=a7e09f04ee917e60702fb3e6bab0baf381032863&v=4",profileLink:"https://github.com/pdfmarkov"},{name:"Влад",surname:"Тарасенко",group:"P3210",variant:"10113",imageURL:"https://avatars3.githubusercontent.com/u/58933887?s=460&u=7b6e989c1545420a06b4dc55ff1265c873f9ce18&v=4",profileLink:"https://github.com/VladislavByITMO"}]}},components:{author:ie}},le=ce,ue=(r("c021"),Object(c["a"])(le,ee,te,!1,null,null,null)),he=ue.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loging"}},[r("div",{attrs:{id:"login-form"}},[r("fieldset",[r("label",[e._v("логин")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.login,expression:"user.login"}],attrs:{type:"text",placeholder:"login",title:"имя пользователя",required:"true",autocomplete:"username"},domProps:{value:e.user.login},on:{input:function(t){t.target.composing||e.$set(e.user,"login",t.target.value)}}})]),r("fieldset",[r("label",[e._v("пароль")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"password (min 10 symbols)",title:"пароль",required:"true",autocomplete:"current-password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),r("a",{attrs:{id:"err_message"}}),r("fieldset",{staticClass:"separated"},[r("button",{staticClass:"btn",attrs:{title:"Кнопка для входа в существующий аккаунт",disabled:e.isNotFilled},on:{click:e.signin}},[e._v("Войти")]),r("button",{staticClass:"btn",attrs:{title:"Кнопка для создания нового аккаунта",disabled:e.isNotFilled},on:{click:e.signup}},[e._v("Зарегистрироваться")])])])])},ge=[],fe=(r("a4d3"),r("e01a"),"http://localhost:41143/"),pe={name:"loging",props:["access","refresh"],data:function(){return{user:{login:"",password:""},minPasswordLength:8,queries:{signin:"api/aunt/sign_in",register:"api/aunt/register"}}},computed:{isNotFilled:function(){return!(void 0!==this.user.login&&null!==this.user.login&&void 0!==this.user.password&&null!==this.user.password&&this.user.login.length>0&&this.user.password.length>=this.minPasswordLength)}},methods:{createMessage:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.error(t),r=document.getElementById("err_message"),r.innerText=t;case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),signin:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("sign in account:"),console.log("user: ".concat(this.user)),console.log("fetching tokens from server..."),e.next=5,fetch(fe+this.queries.signin,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.user)}).catch((function(){alert("Error while authentication. Check your connection")}));case 5:return r=e.sent,n=null,e.prev=7,e.next=10,r.json();case 10:n=e.sent,e.next=17;break;case 13:return e.prev=13,e.t0=e["catch"](7),console.error(e.t0),e.abrupt("return");case 17:console.log("check if response is ok (200)"),r.ok?(console.log("response 200; get token"),console.log("response body: ".concat(n)),n?(console.log("got user access-token"),console.log("got user refresh-token"),localStorage.setItem("accessToken",n.accessToken),localStorage.setItem("refreshToken",n.refreshToken),this.$session.set(this.access,n.accessToken),this.$session.set(this.refresh,n.refreshToken),this.$router.push({name:"app-page"})):(console.log("bad data: expected { accessToken, refreshToken }"),this.createMessage("*".concat(n)))):this.createMessage("*".concat(n.description));case 19:case"end":return e.stop()}}),e,this,[[7,13]])})));function t(t){return e.apply(this,arguments)}return t}(),signup:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("sign up new account:"),console.log("user: ".concat(this.user)),console.log("fetching tokens from server..."),e.next=5,fetch(fe+this.queries.register,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.user)}).catch((function(){alert("Error while getting token. Check your connection")}));case 5:return r=e.sent,console.log("sent request"),console.log("check if status 201"),n=null,e.prev=9,e.next=12,r.json();case 12:n=e.sent,e.next=19;break;case 15:return e.prev=15,e.t0=e["catch"](9),console.error(e.t0),e.abrupt("return");case 19:201===r.status?(console.log("user created"),console.log("response body: ".concat(JSON.stringify(n))),n?(console.log("got user access-token"),console.log("get user refresh-token"),localStorage.setItem("accessToken",n.accessToken),localStorage.setItem("refreshToken",n.refreshToken),this.$session.set(this.access,n.accessToken),this.$session.set(this.refresh,n.refreshToken),this.$router.push({name:"app-page"})):console.log("bad data: expected { accessToken, refreshToken }")):this.createMessage("*".concat(n.description));case 20:case"end":return e.stop()}}),e,this,[[9,15]])})));function t(t){return e.apply(this,arguments)}return t}()}},me=pe,be=(r("3eb7"),Object(c["a"])(me,de,ge,!1,null,null,null)),ve=be.exports,we={name:"startup",props:["access","refresh"],components:{hat:he,loging:ve}},ke=we,ye=(r("c0b1"),Object(c["a"])(ke,G,K,!1,null,null,null)),xe=ye.exports,_e={name:"registration",components:{startup:xe,hat:he},data:function(){return{accessTokenName:"accessToken",refreshTokenName:"refreshToken"}},computed:{access:function(){return localStorage.getItem("accessToken")},refresh:function(){return localStorage.getItem("refreshToken")},isAuthorized:function(){return!(void 0===this.access||null===this.access||""===this.access)}}},Te=_e,Se=(r("bbcd"),Object(c["a"])(Te,Y,Q,!1,null,"f7d9ef1c",null)),Oe=Se.exports,Ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"content"}},[r("h1",[e._v(e._s(e.errorCode))]),r("h2",[e._v(e._s(e.errorMessage))]),r("hr"),r("router-link",{attrs:{to:"/auth",id:"backHome"}},[e._v("Вернуться на главную страницу")])],1)},Re=[],je={name:"error_container",props:{errorCode:String,errorMessage:String}},Ne=je,$e=(r("beba"),Object(c["a"])(Ne,Ce,Re,!1,null,"ac7782c8",null)),Ae=$e.exports;n["a"].use(y["a"]);var Ee=new y["a"]({mode:"history",routes:[{path:"/",name:"default-page",component:Oe,beforeEnter:function(e,t,r){null!==localStorage.getItem("refreshToken")||null!==localStorage.getItem("accessToken")?r({name:"app-page"}):r({name:"auth-page"})}},{path:"/auth",name:"auth-page",component:Oe,beforeEnter:function(e,t,r){localStorage.getItem("accessToken")&&localStorage.getItem("refreshToken")?r({name:"app-page"}):r()}},{path:"/app",name:"app-page",component:Z,beforeEnter:function(e,t,r){localStorage.getItem("accessToken")&&localStorage.getItem("refreshToken")?r():r({name:"error-page-app"})}},{path:"/*",name:"error-page",component:Ae,props:{default:!0,errorCode:"404",errorMessage:"Данной страницы не сущуствует. Повторите авторизацию!"}},{path:"/error",name:"error-page-app",component:Ae,props:{default:!0,errorCode:"401",errorMessage:"У вас нет доступа к приложению. Сначала авторизуйтесь!"}}]}),Le=r("7207"),Pe=r.n(Le);n["a"].config.productionTip=!1,n["a"].use(Pe.a),new n["a"]({router:Ee,render:function(e){return e(k)}}).$mount("#app")},"61e5":function(e,t,r){"use strict";r("2c2c")},"6d0b":function(e,t,r){},"702a":function(e,t,r){},"85ec":function(e,t,r){},ab6e:function(e,t,r){},bbcd:function(e,t,r){"use strict";r("ab6e")},beb9:function(e,t,r){},beba:function(e,t,r){"use strict";r("3e4d")},c021:function(e,t,r){"use strict";r("e0ca")},c0b1:function(e,t,r){"use strict";r("702a")},c5b8:function(e,t,r){"use strict";r("6d0b")},c658:function(e,t,r){},cb3d:function(e,t,r){"use strict";r("beb9")},d487:function(e,t,r){"use strict";r("2125")},def8:function(e,t,r){},e0ca:function(e,t,r){},ebbf:function(e,t,r){"use strict";r("fe67")},f482:function(e,t,r){"use strict";r("def8")},fe67:function(e,t,r){}});
//# sourceMappingURL=app.b1451f89.js.map