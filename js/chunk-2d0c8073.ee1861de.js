(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8073"],{"52aa":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$q.platform.is.mobile?a("div",[a("ContactView")],1):a("div",[a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-3"}),a("div",{staticClass:"col-6"},[a("ContactView")],1),a("div",{staticClass:"col-3"})])])},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-page",{staticClass:"q-pa-md q-pt-xl"},[a("q-input",{attrs:{outlined:"",label:"Write your email"},model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}}),a("q-space"),a("q-input",{staticClass:"q-my-xl",attrs:{outlined:"",type:"textarea",label:"Your message"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("q-btn",{staticClass:"text-right",attrs:{color:"black","icon-right":"send",label:"Send"},on:{click:function(e){return t.sendMail,!1}}})],1)],1)},i=[],o={name:"about",data:function(){return{mail:"",text:""}},methods:{sendMail:function(){var t="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jbenitollorens@gmail.com&su=prueba&body=Esto+es+una+prueba";window.location.href=t}}},c=o,r=a("2877"),u=a("fe09"),p=Object(r["a"])(c,s,i,!1,null,null,null),m=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QPage:u["n"],QInput:u["i"],QSpace:u["s"],QBtn:u["a"]});var d={name:"contact",components:{ContactView:m}},b=d,f=Object(r["a"])(b,n,l,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0c8073.ee1861de.js.map