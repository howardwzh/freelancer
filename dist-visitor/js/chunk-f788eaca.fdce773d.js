(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f788eaca"],{"1bdc":function(t,a,e){"use strict";var i=e("6117"),s=e.n(i);s.a},6117:function(t,a,e){},ef35:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-base status"},[e("div",{staticClass:"container"},[e("nav-title",{attrs:{"deep-color":!1,title:"访客通行证"}}),e("div",{staticClass:"status-box"},[t._m(0),e("h6",[t._v("访问人")]),e("p",[t._v(t._s(t.data.name)+"  "),e("label",[t._v("手机号:")]),t._v(t._s(t.data.mobile))]),e("h6",[t._v("受访人")]),e("p",[t._v(t._s(t.data.visitName)+"  "),e("label",[t._v("手机号:")]),t._v(t._s(t.data.visitMobile))]),e("h6",[t._v("同行人")]),e("p",[t._v(t._s(t.data.together)+"人")]),e("h6",[t._v("来访时间")]),e("p",[t._v(t._s(t.data.visitDate)+" "+t._s(t.data.visitTimeStart)+" 至 "+t._s(t.data.visitTimeEnd))]),e("h6",[t._v("状态")]),e("p",[t._v(t._s(t.dictionary[t.data.status]))])]),e("el-button",{staticClass:"btn-fixed-bottom",attrs:{type:"primary"},on:{click:t.reFill}},[t._v("重新填写")])],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",[t._v("国慧安全智能校园"),e("br"),t._v("访客通行证")])}],n=e("a417"),r=e("cf45"),o={name:"Status",components:{},data:function(){return{data:{},dictionary:{1:"待审核",2:"待访问"}}},watch:{},created:function(){this.init()},methods:{init:function(){var t=this;if(this.$route.query.mobile){var a=Object(r["c"])("before"),e={mobile:this.$route.query.mobile,x:a.x};Object(n["a"])(e).then((function(a){0===a.code&&(t.data=a.data)}))}else{var i=localStorage.getItem("visitorData");this.data=i?JSON.parse(i):{}}},reFill:function(){localStorage.setItem("visitorData",JSON.stringify(this.data)),this.$router.push({path:"/fillMe",query:this.$route.query})}}},c=o,l=(e("1bdc"),e("2877")),u=Object(l["a"])(c,i,s,!1,null,null,null);a["default"]=u.exports}}]);