(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21726d"],{c604:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{margin:"20px"}},[a("el-card",{staticClass:"bots-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Bot list")])]),a("el-table",{attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"70"}}),a("el-table-column",{attrs:{prop:"uid",label:"UID"}}),a("el-table-column",{attrs:{label:"IP"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ip))]),a("br"),a("span",[e._v(e._s(t.row.country))])]}}])}),a("el-table-column",{attrs:{prop:"win_ver",label:"Win"}}),a("el-table-column",{attrs:{prop:"username",label:"User"}}),a("el-table-column",{attrs:{prop:"computername",label:"Comp"}}),a("el-table-column",{attrs:{prop:"cpu_name",label:"CPU"}}),a("el-table-column",{attrs:{prop:"gpu_name",label:"GPU"}}),a("el-table-column",{attrs:{prop:"ram_amount",label:"RAM"}}),a("el-table-column",{attrs:{prop:"screen_resolution",label:"Display"}}),a("el-table-column",{attrs:{label:"Joined"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("timeago")(t.row.joined)))])]}}])}),a("el-table-column",{attrs:{label:"Status"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isOnline(t.row.seen)?a("el-tag",{attrs:{type:"success"}},[e._v("Online")]):a("el-tag",{attrs:{type:"danger"}},[e._v("Offline")])]}}])})],1)],1)],1)},r=[],l=(a("96cf"),a("1da1")),o=a("365c"),s={data:function(){return{isLoading:!1,tableData:[]}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateData();case 2:case"end":return t.stop()}}),t)})))()},filters:{timeago:function(e){var t=Math.round(+new Date/1e3)-e,a=60,n=60*a,r=24*n,l=30*r,o=365*r;return t<a?Math.round(t)+"s ago":t<n?Math.round(t/a)+"m ago":t<r?Math.round(t/n)+"h ago":t<l?Math.round(t/r)+"d ago":t<o?Math.round(t/l)+" months ago":Math.round(t/o)+" years ago"}},methods:{isOnline:function(e){return Math.round(+new Date/1e3)-e<60},updateData:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,o["a"].getBotsData();case 3:e.tableData=t.sent,e.isLoading=!1;case 5:case"end":return t.stop()}}),t)})))()}}},u=s,i=a("2877"),c=Object(i["a"])(u,n,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21726d.9728d884.js.map