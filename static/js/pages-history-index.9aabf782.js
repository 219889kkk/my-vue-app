(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-history-index"],{"0a85":function(t,e,n){"use strict";n.r(e);var i=n("38fd"),a=n("ede7");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3561");var r=n("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"377af777",null,!1,i["a"],void 0);e["default"]=s.exports},1171:function(t,e,n){"use strict";n.r(e);var i=n("9834"),a=n("7b07");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5d49");var r=n("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"c496bc48",null,!1,i["a"],void 0);e["default"]=s.exports},"1ee3":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */h3[data-v-377af777]{font-weight:500;line-height:1.1;font-size:24px!important}.popup-container[data-v-377af777]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;z-index:1000}.popup-content[data-v-377af777]{background-color:#fff;padding:20px;border-radius:10px;width:80%;max-width:500px;color:#fff}.close-btn[data-v-377af777]{margin-top:20px;padding:10px 20px;background-color:#ff571e;color:#fff;border:none;border-radius:5px;cursor:pointer}',""]),t.exports=e},"1fa1":function(t,e,n){var i=n("74c2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("0bcdcf80",i,!0,{sourceMap:!1,shadowMode:!1})},3561:function(t,e,n){"use strict";var i=n("68da"),a=n.n(i);a.a},"38fd":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uCellGroup:n("1171").default,uCell:n("09b3").default,uniIcons:n("f87e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"work-container",staticStyle:{width:"100%","min-height":"calc(100vh)","background-color":"#fff"}},[n("tabBarPc",{attrs:{current:0}}),n("v-uni-view",{staticClass:"content",staticStyle:{width:"1160px","background-color":"#fff",margin:"65px auto 0"}},[n("v-uni-view",{staticStyle:{margin:"20px 0"}},[n("h3",[t._v(t._s(t.$t("历史记录")))])]),n("u-cell-group",t._l(t.data,(function(e){return n("u-cell",{key:e.oid},[n("v-uni-view",{staticClass:"flex flex-direction text-left",staticStyle:{color:"#8686aa","font-size":"12px"},attrs:{slot:"label"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showOrderDetails(e)}},slot:"label"},[n("v-uni-view",[t._v(t._s(t.$t("完成"))),n("uni-icons",{attrs:{color:"#8686aa","custom-prefix":"iconfont",size:"12",type:"icon-xiangyou"}})],1),n("v-uni-view",{staticClass:"flex justify-between"},[n("v-uni-view",{staticClass:"margin-top-sm"},[t._v(t._s("买跌"==e.ostyle?t.$t("买跌"):t.$t("买涨"))+"："+t._s(e.fee)+"￥")]),n("v-uni-view",{staticClass:"margin-top-sm",staticStyle:{color:"#8686aa","font-size":"12px"}},[t._v(t._s(t.$t("手续费"))+"："+t._s(e.sx_fee))])],1),n("v-uni-view",{staticClass:"flex justify-between"},[n("v-uni-view",{staticClass:"margin-top-sm"},[t._v(t._s(t.$t("买入点位"))+"："+t._s(e.buyprice))]),n("v-uni-view",{staticClass:"margin-top-sm text-right",staticStyle:{color:"red","font-size":"12px"}},[t._v(t._s(t.$t("平仓点位"))+"："+t._s(e.sellprice)+"￥")])],1),n("v-uni-view",{staticClass:"flex justify-between"},[n("v-uni-view",{staticClass:"margin-top-sm"},[t._v(t._s(t.$t("提交时间"))+"："+t._s(t.parseTime(e.selltime)))]),n("v-uni-view",{staticClass:"margin-top-sm",staticStyle:{color:"red","font-size":"12px"}},[t._v(t._s(t.$t("本单"))+t._s(1==e.is_win?t.$t("赢"):t.$t("输"))+"："+t._s(1==e.is_win?"":"-")+"\n\t\t\t\t\t\t\t"+t._s(e.ploss)+"￥")])],1)],1)],1)})),1)],1),t.showPopup?n("div",{staticClass:"popup-container"},[n("div",{staticClass:"popup-content"},[n("v-uni-view",{staticClass:"header-section flex flex-direction justify-center align-center text-center"},[n("v-uni-text",{staticStyle:{color:"#181e34"}},[t._v(t._s(t.popupData.ptitle))]),n("v-uni-text",{staticStyle:{"font-size":"9rem","font-weight":"bold",color:"#ff571e"}},[t._v(t._s(t.popupData.fee)+"￥")]),n("v-uni-text",{staticStyle:{color:"#181e34"}},[t._v(t._s(t.$t("交易成功")))])],1),n("hr"),n("v-uni-view",{staticStyle:{"font-size":"20px",margin:"10px 10px",color:"#8686aa"}},t._l(t.orderDetails,(function(e,i){return n("v-uni-view",{key:i,staticClass:"flex justify-between"},[n("v-uni-text",{staticStyle:{color:"#181e34"}},[t._v(t._s(t.$t(i))+":")]),n("v-uni-text",{staticStyle:{color:"#181e34"}},[t._v(t._s(e))])],1)})),1),n("v-uni-button",{staticClass:"close-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopup.apply(void 0,arguments)}}},[t._v(t._s(t.$t("关闭")))])],1)]):t._e()],1)},o=[]},4002:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.orderHistory=function(t){return(0,a.default)({url:"/api/order/orderlist",method:"get",data:t})},e.orderHold=function(t){return(0,a.default)({url:"/api/order/ajaxorder_list",method:"get",data:t})},e.orderInfo=function(t){return(0,a.default)({url:"/api/order/orderinfo",method:"get",params:t})};var a=i(n("dfa7"))},"5d49":function(t,e,n){"use strict";var i=n("1fa1"),a=n.n(i);a.a},"68da":function(t,e,n){var i=n("1ee3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("4fc69281",i,!0,{sourceMap:!1,shadowMode:!1})},"74c2":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-c496bc48], uni-scroll-view[data-v-c496bc48], uni-swiper-item[data-v-c496bc48]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-cell-group[data-v-c496bc48]{flex:1}.u-cell-group__title[data-v-c496bc48]{padding:16px 16px 8px}.u-cell-group__title__text[data-v-c496bc48]{font-size:15px;line-height:16px;color:#303133}.u-cell-group__wrapper[data-v-c496bc48]{position:relative}',""]),t.exports=e},"7b07":function(t,e,n){"use strict";n.r(e);var i=n("cde3"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},9834:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uLine:n("6075").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-cell-group",class:[t.customClass],style:[t.$u.addStyle(t.customStyle)]},[t.title?n("v-uni-view",{staticClass:"u-cell-group__title"},[t._t("title",[n("v-uni-text",{staticClass:"u-cell-group__title__text"},[t._v(t._s(t.title))])])],2):t._e(),n("v-uni-view",{staticClass:"u-cell-group__wrapper"},[t.border?n("u-line"):t._e(),t._t("default")],2)],1)},o=[]},af05:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:{type:String,default:uni.$u.props.cellGroup.title},border:{type:Boolean,default:uni.$u.props.cellGroup.border}}};e.default=i},c3df:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c223");i(n("b4af"));var a=n("4002"),o={data:function(){return{data:[],showPopup:!1,popupData:{},orderDetails:{}}},created:function(){this.fetchOrderHistory()},methods:{fetchOrderHistory:function(){var t=this;(0,a.orderHistory)().then((function(e){200===e.code?t.data=e.data.data:t.$modal.error(e.msg)}))},showOrderDetails:function(t){var e=this;(0,a.orderInfo)({oid:t.oid}).then((function(t){200===t.code&&(e.popupData=t.data,e.orderDetails={"类型":1===t.data.ostyle?e.$t("买跌"):e.$t("买涨"),"时间":e.getSecondsDifference(new Date(1e3*t.data.buytime),new Date(1e3*t.data.selltime))+"秒","盈亏":t.data.ploss+"￥","手续费":t.data.sx_fee,"成交价":t.data.buyprice,"结算价":t.data.sellprice,"下单时间":e.parseTime(new Date(1e3*t.data.buytime)),"平仓时间":e.parseTime(new Date(1e3*t.data.selltime))},e.showPopup=!0)}))},closePopup:function(){this.showPopup=!1},parseTime:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())},getSecondsDifference:function(t,e){return((e-t)/1e3).toFixed(0)}}};e.default=o},cde3:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("af05")),o={name:"u-cell-group",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default]};e.default=o},ede7:function(t,e,n){"use strict";n.r(e);var i=n("c3df"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);