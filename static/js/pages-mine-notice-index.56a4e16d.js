(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-notice-index"],{"02b7":function(t,e,n){"use strict";n.r(e);var a=n("9c79"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"068c":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.historynotice=function(){return(0,i.default)({url:"/api/index/historynotice",method:"get"})};var i=a(n("dfa7"))},"06c3":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("795c"),n("c9b5"),n("bf0f"),n("ab80"),n("c223");var a=n("068c"),i={data:function(){return{inform:"通知<br/>尊敬的会员您好，财务上班时间为上午10:00至晚上21:30 如需充值或提现请您在财务上班时间内申请提现以充值 其他时间段为财务下班时间无法进行充值与提现  如有带来不便之处 敬请谅解，谢谢  上海期货交易所将努力打造一个合规、安全、稳定的综合性金融科技平台。低风险，随存随取，投资小，回报率高，适合无经验者初次创业。 如需帮助，请联系平台在线客服！ <br> \n  请知悉！",notices:[]}},created:function(){this.getHistorynotice()},methods:{getHistorynotice:function(){var t=this;(0,a.historynotice)().then((function(e){200===e.code?t.notices=e.data.notices:t.$modal.error(e.msg)}))},formatDate:function(t){if(!t)return"";var e=new Date(1e3*t),n=e.getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");return"".concat(n,"-").concat(a,"-").concat(i)}}};e.default=i},1354:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("342f").default,uCell:n("09b3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{autoBack:!0,"bg-color":"#ff571e",leftIconColor:"#cad0e6",placeholder:!0,title:t.$t("平台公告"),titleStyle:"color:#cad0e6"}}),t._l(t.notices,(function(e){return n("u-cell",{attrs:{border:!1}},[n("v-uni-view",{staticClass:"u-slot-title",attrs:{slot:"title"},slot:"title"},[n("v-uni-view",{staticClass:"flex flex-direction align-start"},[n("v-uni-text",{staticClass:"u-cell-text h2"},[t._v(t._s(t.$t("平台公告")))]),n("v-uni-text",{staticClass:"u-cell-text nanoTitle"},[t._v(t._s(t.formatDate(e.time)))])],1)],1),n("v-uni-view",{staticClass:"u-slot-content ",attrs:{slot:"label"},slot:"label"},[n("v-uni-text",{staticStyle:{"font-size":"20px","line-height":"2",color:"#8686aa"}},[t._v(t._s(e.title))]),n("v-uni-rich-text",{staticStyle:{"font-size":"19px","line-height":"2",color:"#8686aa"},attrs:{nodes:e.content}})],1)],1)})),n("tabBar")],2)},r=[]},1432:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-status-bar",style:[this.style]},[this._t("default")],2)},i=[]},"1cc9":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uStatusBar:n("88b0").default,uIcon:n("30ea").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?n("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")}}):t._e(),n("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?n("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),n("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?n("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?n("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[n("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)]},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?n("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?n("u-icon",{attrs:{name:t.rightIcon,size:"20"}}):t._e(),t.rightText?n("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},r=[]},2631:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var a={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};e.default=a},"28d7":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2631")),r={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=r},"2d99":function(t,e,n){var a=n("368f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("54fbb998",a,!0,{sourceMap:!1,shadowMode:!1})},"342f":function(t,e,n){"use strict";n.r(e);var a=n("1cc9"),i=n("e607");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("ac88");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5302c461",null,!1,a["a"],void 0);e["default"]=u.exports},"368f":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.h2[data-v-187bb584]{font-size:24px;\n  /* 设置字体大小 */font-weight:700;\n  /* 设置字体加粗 */color:#cad0e6}.nanoTitle[data-v-187bb584]{color:#8686aa;font-size:12px;padding-bottom:4px}',""]),t.exports=e},"3d0d":function(t,e,n){"use strict";n.r(e);var a=n("8853"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"3d7e":function(t,e,n){var a=n("d80c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("209dbc0c",a,!0,{sourceMap:!1,shadowMode:!1})},"565f":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uCell:n("09b3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"work-container",staticStyle:{width:"100%","min-height":"calc(100vh)","background-color":"#fff"}},[n("tabBarPc",{attrs:{current:0}}),t._l(t.notices,(function(e){return n("u-cell",{staticStyle:{width:"1140px",margin:"0 auto"},attrs:{border:!1}},[n("v-uni-view",{staticClass:"u-slot-title",attrs:{slot:"title"},slot:"title"},[n("v-uni-view",{staticClass:"flex flex-direction align-start"},[n("v-uni-text",{staticClass:"u-cell-text nanoTitle"},[t._v(t._s(t.formatDate(e.time)))])],1)],1),n("v-uni-view",{staticClass:"u-slot-content ",attrs:{slot:"label"},slot:"label"},[n("v-uni-text",{staticStyle:{"font-size":"20px","line-height":"2",color:"#8686aa"}},[t._v(t._s(e.title))]),n("v-uni-rich-text",{staticStyle:{"font-size":"19px","line-height":"2",color:"#8686aa"},attrs:{nodes:e.content}})],1)],1)}))],2)},r=[]},"5c15":function(t,e,n){"use strict";n.r(e);var a=n("565f"),i=n("d032");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("991c");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"663a56e9",null,!1,a["a"],void 0);e["default"]=u.exports},"60b4":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-5302c461], uni-scroll-view[data-v-5302c461], uni-swiper-item[data-v-5302c461]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-5302c461]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-5302c461]{display:flex;flex-direction:row;align-items:center;height:44px;background-color:#9acafc;position:relative;justify-content:center}.u-navbar__content__left[data-v-5302c461], .u-navbar__content__right[data-v-5302c461]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-5302c461]{left:0}.u-navbar__content__left--hover[data-v-5302c461]{opacity:.7}.u-navbar__content__left__text[data-v-5302c461]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-5302c461]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-5302c461]{right:0}.u-navbar__content__right__text[data-v-5302c461]{font-size:15px;margin-left:3px}',""]),t.exports=e},6349:function(t,e,n){"use strict";n.r(e);var a=n("06c3"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"7f22":function(t,e,n){"use strict";var a=n("2d99"),i=n.n(a);i.a},"84c8":function(t,e,n){var a=n("ce83");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("200229fa",a,!0,{sourceMap:!1,shadowMode:!1})},8853:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c448")),r={name:"u-status-bar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},computed:{style:function(){var t={};return t.height=uni.$u.addUnit(uni.$u.sys().statusBarHeight,"px"),t.backgroundColor=this.bgColor,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=r},"88b0":function(t,e,n){"use strict";n.r(e);var a=n("1432"),i=n("3d0d");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("e189");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"186edb96",null,!1,a["a"],void 0);e["default"]=u.exports},9916:function(t,e,n){"use strict";n.r(e);var a=n("1354"),i=n("6349");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7f22");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"187bb584",null,!1,a["a"],void 0);e["default"]=u.exports},"991c":function(t,e,n){"use strict";var a=n("3d7e"),i=n.n(a);i.a},"9c79":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("5c47"),n("0506");var i=a(n("5c15")),r=a(n("9916")),o={onShow:function(){var t=navigator.userAgent.toLowerCase();/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|midp|rv:1.2.3.4|ucweb/.test(t)?(console.log("移动端"),this.type=!1):(console.log("PC端"),this.type=!0)},components:{pc:i.default,movement:r.default},data:function(){return{type:!0}},created:function(){},methods:{}};e.default=o},a2e3:function(t,e,n){var a=n("60b4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("23529e06",a,!0,{sourceMap:!1,shadowMode:!1})},a7d4:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("795c"),n("c9b5"),n("bf0f"),n("ab80"),n("c223");var a=n("068c"),i={data:function(){return{inform:"通知<br/>尊敬的会员您好，财务上班时间为上午10:00至晚上21:30 如需充值或提现请您在财务上班时间内申请提现以充值 其他时间段为财务下班时间无法进行充值与提现  如有带来不便之处 敬请谅解，谢谢  上海期货交易所将努力打造一个合规、安全、稳定的综合性金融科技平台。低风险，随存随取，投资小，回报率高，适合无经验者初次创业。 如需帮助，请联系平台在线客服！ <br> \n  请知悉！",notices:[]}},created:function(){this.getHistorynotice()},methods:{getHistorynotice:function(){var t=this;(0,a.historynotice)().then((function(e){200===e.code?t.notices=e.data.notices:t.$modal.error(e.msg)}))},formatDate:function(t){if(!t)return"";var e=new Date(1e3*t),n=e.getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");return"".concat(n,"-").concat(a,"-").concat(i)}}};e.default=i},ac88:function(t,e,n){"use strict";var a=n("a2e3"),i=n.n(a);i.a},c448:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{bgColor:{type:String,default:uni.$u.props.statusBar.bgColor}}};e.default=a},ce83:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-status-bar[data-v-186edb96]{width:100%}',""]),t.exports=e},d032:function(t,e,n){"use strict";n.r(e);var a=n("a7d4"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},d80c:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.h2[data-v-663a56e9]{font-size:24px;\n  /* 设置字体大小 */font-weight:700;\n  /* 设置字体加粗 */color:#cad0e6}.nanoTitle[data-v-663a56e9]{color:#8686aa;font-size:12px;padding-bottom:4px}',""]),t.exports=e},e189:function(t,e,n){"use strict";var a=n("84c8"),i=n.n(a);i.a},e607:function(t,e,n){"use strict";n.r(e);var a=n("28d7"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},e711:function(t,e,n){"use strict";n.r(e);var a=n("fad0"),i=n("02b7");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"04040d03",null,!1,a["a"],void 0);e["default"]=u.exports},fad0:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"normal-login-container"},[e("pc",{directives:[{name:"show",rawName:"v-show",value:this.type,expression:"type"}]}),e("movement",{directives:[{name:"show",rawName:"v-show",value:!this.type,expression:"!type"}]})],1)},i=[]}}]);