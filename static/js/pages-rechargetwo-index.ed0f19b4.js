(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-rechargetwo-index"],{"1af9":function(t,e,a){"use strict";a.r(e);var n=a("db7a"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"37a1":function(t,e,a){"use strict";a.r(e);var n=a("5ae7"),o=a("1af9");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("e3d2");var c=a("828b"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"fd4ecbe8",null,!1,n["a"],void 0);e["default"]=s.exports},5277:function(t,e,a){var n=a("5676");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("967d").default;o("a17d2958",n,!0,{sourceMap:!1,shadowMode:!1})},5676:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-fd4ecbe8]{background-color:#fff!important}body.?%PAGE?%[data-v-fd4ecbe8]{background-color:#fff!important}.word-wrap[data-v-fd4ecbe8]{display:flex;\n  /* 使用flex布局 */flex-wrap:wrap;\n  /* 允许换行 */word-break:break-all\n  /* 允许在任意字符间断开（可选，根据需求使用） */}[data-v-fd4ecbe8] .u-tag--primary{background-color:#ff571e;border-width:1px}[data-v-fd4ecbe8] .u-tag--large{height:38px;padding:0 25px}.prompt[data-v-fd4ecbe8]{margin-top:5px;font-size:40px;color:#cad0e6\n  /* 灰色文字 */}.prompt_text[data-v-fd4ecbe8]{color:#ff571e}.tabs[data-v-fd4ecbe8]{display:flex;\n  /* Use flexbox for horizontal layout */justify-content:space-between;margin-bottom:20px\n  /* Space between tabs and content */}.tabs uni-button[data-v-fd4ecbe8]{border-radius:0;padding:5px 10px;border:none;background-color:#f1f1f1;cursor:pointer;width:50%;font-size:14px}.tabs uni-button[data-v-fd4ecbe8]::after{border-radius:0}.tabs uni-button.active[data-v-fd4ecbe8]{background-color:#ccc}.tab-content[data-v-fd4ecbe8]{margin-top:20px}.tab-content p[data-v-fd4ecbe8]{font-size:12px}.flex[data-v-fd4ecbe8]{padding:0 5px;display:flex;justify-content:space-between}.usdtForm[data-v-fd4ecbe8]{padding:0 5px}.usdtForm .title[data-v-fd4ecbe8]{color:#23293f;font-size:12px;margin-bottom:10px}.usdtForm .text[data-v-fd4ecbe8]{color:#cad0e6;font-size:12px}.usdtForm .addressImg[data-v-fd4ecbe8]{width:300px;height:300px;margin:0 auto}.moneyWrap .moneyItem[data-v-fd4ecbe8]{border:1px solid #ff571e;text-align:center;white-space:nowrap;border-radius:5px;color:#ff571e;margin:0 5px;padding:5px 2px}.moneyWrap .moneyItem.on[data-v-fd4ecbe8]{background:#ff571e;color:#cad0e6}.moneyWrap .moneyItem .weui-input[data-v-fd4ecbe8]{width:100%;border:.026667rem solid #23293f}.fontDetail[data-v-fd4ecbe8]{margin:5px 0;padding:10px;font-size:18px}.current > span[data-v-fd4ecbe8]{margin:0 5px;color:#ff571e}',""]),t.exports=e},"5ae7":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uIcon:a("30ea").default,uInput:a("0357").default,uButton:a("74b9").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("tabBarPc",{attrs:{current:0}}),a("div",{staticStyle:{"background-color":"#fff"}},[a("div",{staticClass:"usdtForm pl pr",staticStyle:{width:"600px","background-color":"#fff",margin:"0 auto"}},[a("div",{staticClass:"weui_cells_title title",staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.$t("链名称:")))]),a("div",{staticClass:"moneyWrap"},[a("div",{staticClass:"flex justify-start title"},t._l(t.options,(function(e){return a("div",{key:e.id,class:["moneyItem","jsForAddrssItem","ripple",{on:t.selectedOption.id===e.id}],style:{width:"150px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectOption(e)}}},[t._v(t._s(t.$t(e.name)))])})),0)]),a("div",{staticClass:"weui_cells_title title"},[t._v(t._s(t.$t("入金地址:")))]),a("div",{staticClass:"flex justify-center"},[a("img",{staticClass:"addressImg borderRadius",attrs:{src:t.addressImg}})]),a("div",{staticClass:"weui_cells_title title"},[t._v(t._s(t.$t("入金链接:")))]),a("div",{staticClass:"text czlj",staticStyle:{display:"flex","margin-bottom":"10px"}},[a("span",{attrs:{id:"chongbiurl"}},[t._v(t._s(t.selectedOption.address))]),a("u-icon",{staticClass:"iconfont mr iconCopy",attrs:{name:"file-text-fill",size:"20"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText(t.selectedOption.address)}}})],1),a("u-input",{staticStyle:{"margin-bottom":"10px","border-color":"#ff571e!important"},attrs:{type:"text",placeholder:t.$t("请输入充值金额"),placeholderStyle:"{color:#ff571e}",color:"#ff571e"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.chainAmountChange.apply(void 0,arguments)}},model:{value:t.chainAmount,callback:function(e){t.chainAmount=e},expression:"chainAmount"}}),a("u-input",{staticStyle:{"border-color":"#ff571e!important"},attrs:{type:"text",placeholder:t.$t("请输入转账地址"),placeholderStyle:"{color:#ff571e}",color:"#ff571e"},model:{value:t.chainAddress,callback:function(e){t.chainAddress=e},expression:"chainAddress"}}),a("v-uni-view",{staticClass:"current pa ma fonb fontDetail "},[a("span",{staticClass:"ydyu",staticStyle:{"font-size":"15px"}},[t._v("≈")]),a("span",[t._v(t._s(t.chainAmountConvert))]),a("v-uni-label",{staticStyle:{color:"#cad0e6"}},[t._v("¥")])],1),a("v-uni-view",{staticStyle:{margin:"10px 10px"}},[a("u-button",{attrs:{type:"primary",text:t.$t("确定"),color:"#ff571e"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chainRecharge.apply(void 0,arguments)}}})],1)],1)])],1)},i=[]},db7a:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("bf0f"),a("2797"),a("aa9c"),a("fd3c");var o=a("aca2"),i=n(a("b4af")),c={data:function(){return{rechargeName:"",selectedAmount:100,otherAmount:"",radios:[{checked:!0,name:100},{checked:!1,name:1e3},{checked:!1,name:1e4},{checked:!1,name:1e5}],sysbank:{},currentTab:"online",options:[],addressImg:"",selectedOption:{},huilv:1,chainAmount:"",chainAddress:"",chainAmountConvert:"",rechargeUsdt:1}},mounted:function(){this.getPayInfo()},methods:{selectOption:function(t){this.addressImg=i.default.getBaseUrl()+t.img,this.huilv=t.huilv,this.selectedOption=t,this.chainAmount="",this.chainAddress="",this.chainAmountConvert=""},chainAmountChange:function(){this.chainAmountConvert=this.chainAmount*this.huilv},getPayInfo:function(){var t=this;(0,o.pay)().then((function(e){200===e.code?(t.radios=[],e.data.reg_push.forEach((function(e,a){t.radios.push({checked:0===a,name:e}),0===a&&(t.selectedAmount=e)})),t.rechargeUsdt=e.data.recharge_usdt,t.sysbank=e.data.sysbank,t.options=e.data.chain,e.data.chain.forEach((function(e,a){0===a&&t.selectOption(e)}))):t.$modal.error(t.$t(e.msg))}))},copyText:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:this.$t("复制成功"),icon:"success",duration:2e3})}})},radioClick:function(t){this.otherAmount="",this.radios.map((function(e,a){e.checked=e.name===t})),this.selectedAmount=t},selectedAmountInput:function(){this.otherAmount&&(this.selectedAmount=this.otherAmount)},emptyRadios:function(){this.radios.map((function(t,e){t.checked=!1})),this.selectedAmount=0},addTopUp:function(){var t=this;(0,o.paySubmit)({price:this.selectedAmount,pay_type:5,truename:this.rechargeName}).then((function(e){200===e.code?(console.log(e.msg),uni.reLaunch({url:"/pages/mine/record/deposit/index"})):(console.log(e.msg),t.$modal.msgError(t.$t(e.msg)))})).catch((function(t){}))},chainRecharge:function(){var t=this;(0,o.virtualRecharge)({dzmoneyhs:this.chainAmount,bpprice:this.chainAmountConvert,pid:this.selectedOption.id,usdturl:this.chainAddress}).then((function(e){200===e.code?(console.log(e.msg),uni.reLaunch({url:"/pages/mine/record/deposit/index"})):(console.log(e.msg),t.$modal.msgError(t.$t(e.msg)))})).catch((function(t){}))}}};e.default=c},e3d2:function(t,e,a){"use strict";var n=a("5277"),o=a.n(n);o.a}}]);