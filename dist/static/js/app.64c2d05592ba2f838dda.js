webpackJsonp([1],{N1oV:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAKNJREFUOBGl1VEKhDAMRVHrTrpSx43apVRfGAvB1LzEgojIPeaj1GX5r9baD9f9HLpLfBy94QoiRYLeN/XFUvZaKzXNqsL74QLZSQoacwq8ICYR4AsygCyigAzyAKKICUSQKcAirwCDuICH2DsRFbncCbxd+gp4MYacAkw8BdjYBCLxA4jGCsjEA8jGAnyJAdg7kTjKEI+FKeRITxzrGgn+ExCfVZqyhyNp420AAAAASUVORK5CYII="},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n=a("Xxa5"),r=a.n(n),i=a("exGp"),o=a.n(i),l=a("mtWM"),c={name:"App",data:function(){return{filter:"全部",sort_option:"推荐排序",listback_png:a("N1oV"),shops:[],default_sorted_shops:[],all_tags:[]}},created:function(){var t=o()(r.a.mark(function t(s){var a,e,n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("https://serious-playing.com.cn:3000/api/1.0/shop/findAll");case 3:if(0==(a=t.sent).data.code){for(this.$data.shops=a.data.data.sort(function(t,s){return s.weight-t.weight}),this.$data.default_sorted_shops=this.$data.shops,e=[],n=0;n<this.$data.shops.length;n++)for(i=0;i<this.$data.shops[n].tags.length;i++)e.push(this.$data.shops[n].tags[i]);this.$data.all_tags=e.filter(function(t,s){return e.indexOf(t)==s})}else alert("商户获取失败");t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("网络错误"+t.t0.message);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(s){return t.apply(this,arguments)}}(),methods:{changesreid:function(){if(console.log(this.$data.filter),"全部"==this.$data.filter)this.$data.shops=this.$data.default_sorted_shops;else{for(var t=[],s=0;s<this.$data.default_sorted_shops.length;s++)this.$data.default_sorted_shops[s].tags.includes(this.$data.filter)&&t.push(this.$data.default_sorted_shops[s]);this.$data.shops=t}},changesortid:function(){var t=o()(r.a.mark(function t(){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("用户数最多"!=this.$data.sort_option){t.next=4;break}this.$data.shops.sort(function(t,s){return s.user_n-t.user_n}),t.next=13;break;case 4:if("推荐排序"!=this.$data.sort_option){t.next=13;break}if(!this.$data.default_sorted_shops){t.next=9;break}this.$data.shops=this.$data.default_sorted_shops,t.next=13;break;case 9:return t.next=11,l.get("https://serious-playing.com.cn:3000/api/1.0/shop/findAll");case 11:0==(s=t.sent).data.code&&(this.$data.shops=s.data.data,this.$data.default_sorted_shops=s.data.data);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("body",[a("h2",{staticClass:"clearfix title"},[a("div",[a("span",{staticClass:"sresel"},[t._v("筛选")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"sresel typeSel",on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.filter=s.target.multiple?a:a[0]},t.changesreid]}},[a("option",[t._v("全部")]),t._v(" "),t._l(t.all_tags,function(s){return a("option",{key:s},[t._v("\n          "+t._s(s)+"\n        ")])})],2)])]),t._v(" "),a("p",{staticClass:"tip"},[t._v("据大数据统计，同时申请5家，下款成功率接近99%")]),t._v(" "),t._l(t.shops,function(s){return a("ul",{key:s.name,staticClass:"loanlist"},[a("li",{staticClass:"clearfix"},[a("a",{attrs:{href:s.url}},[a("img",{staticClass:"loan l",attrs:{src:s.logo_url}}),t._v(" "),a("div",{staticClass:"l loanbox"},[a("h3",[t._v(t._s(s.name)+"\n            "),a("em",{staticClass:"label"},[t._v(" "+t._s(s.tags[0])+" ")])]),t._v(" "),a("p",{staticClass:"msgp"},[t._v(" "+t._s(s.describe)+"\n            "),a("img",{staticClass:"r listback",attrs:{src:t.listback_png}})]),t._v(" "),a("p",{staticClass:"clearfix nump"},[a("span",{staticClass:"l"},[t._v("额度范围：\n              "),a("b",[t._v(t._s(s.loan_range[0])+" - "+t._s(s.loan_range[1]))])]),t._v(" "),a("span",{staticClass:"r"},[a("b",[t._v(" "+t._s(s.user_n)+" ")]),t._v("人成功申请")])])]),t._v(" "),""==s.feature?a("i"):"人气必选"==s.feature?a("i",{staticClass:"icon icon1"},[t._v(" "+t._s(s.feature))]):"不查征信"==s.feature?a("i",{staticClass:"icon icon2"},[t._v(" "+t._s(s.feature))]):t._e()])])])})],2)},staticRenderFns:[]};var d=a("VU/8")(c,p,!1,function(t){a("OXzX")},null,null).exports;e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:d},template:"<App/>"})},OXzX:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.64c2d05592ba2f838dda.js.map