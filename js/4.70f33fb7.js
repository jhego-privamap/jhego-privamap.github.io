(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"07a4":function(e,t,o){"use strict";var a=o("2b0e"),n=o("2f62");a["default"].use(n["a"]),t["a"]=new n["a"].Store({state:{selectedTreeElement:null,isRetryLocate:!1,geolocDisabled:!1,isDirectionMode:!1,itineraryStartTreeElt:"1-112"},mutations:{setSelectedTreeElement:function(e,t){console.log("setSelectedTreeElement triggered with"),console.log(t),e.selectedTreeElement=t},setRetryLocate:function(e,t){console.log("setRetryLocate triggered with"),console.log(t),e.isRetryLocate=t},setGeolocDisabled:function(e,t){console.log("setGeolocDisabled triggered with"),console.log(t),e.geolocDisabled=t},setDirectionMode:function(e,t){console.log("setDirectionMode triggered with"),console.log(t),e.isDirectionMode=t},setItineraryStartTreeElt:function(e,t){console.log("setItineraryStartTreeElt triggered with"),console.log(t),e.itineraryStartTreeElt=t}}})},"713b":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-layout",{staticClass:"noDoubleTap",attrs:{view:"lHr Lpr lFr",onClick:"{e => e.preventDefault()}"}},[o("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),o("q-header",{staticClass:"noDoubleTap",attrs:{elevated:"",id:"Qheader"}},[o("q-toolbar",{staticClass:"q-pa-xs",attrs:{id:"upperToolbar"}},[e.isDirections?o("q-btn",{staticClass:"backBtn",attrs:{padding:"5px",flat:"",color:"white",size:"lg",icon:"fas fa-arrow-left"},on:{click:e.cancelDir}}):e._e(),o("div",{staticClass:"researchTree"},[e.isDirections?o("treeselect",{staticClass:"treeSelectElement q-pb-xs",attrs:{multiple:!1,clearable:!0,searchable:!0,disabled:!1,"open-on-click":!0,"open-on-focus":!0,"clear-on-select":!0,"close-on-select":!0,"always-open":!1,"append-to-body":!1,options:e.types,limit:3,"max-height":200,"flatten-search-results":!0,placeholder:"Place"},model:{value:e.startElement,callback:function(t){e.startElement=t},expression:"startElement"}}):e._e(),o("treeselect",{staticClass:"treeSelectElement",attrs:{multiple:!1,clearable:!0,searchable:!0,disabled:!1,"open-on-click":!0,"open-on-focus":!0,"clear-on-select":!0,"close-on-select":!0,"always-open":!1,"append-to-body":!1,options:e.types,limit:3,"max-height":200,"flatten-search-results":!0,placeholder:"Place"},model:{value:e.selectedElement,callback:function(t){e.selectedElement=t},expression:"selectedElement"}})],1),e.isDirections?o("q-btn",{staticClass:"exchangeBtn",attrs:{padding:"5px",flat:"",color:"white",size:"lg",icon:"fas fa-exchange-alt"}}):e._e(),e.isDirections?e._e():o("q-btn",{attrs:{padding:"1px",flat:"",color:"white",size:"28px",icon:"img:statics\\QrCode.png"},on:{click:function(t){e.showQrCode=!e.showQrCode}}}),o("QrCodeGenerator",{attrs:{showDialog:e.showQrCode}})],1)],1),o("q-page-container",[o("router-view")],1)],1)},n=[],r=(o("7f7f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-dialog",{attrs:{persistent:""},model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[o("q-card",[o("q-toolbar",[o("q-avatar",[o("q-icon",{attrs:{name:"fas fa-qrcode"}})],1),o("q-toolbar-title",[e._v("QrCode")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),o("q-card-section",{attrs:{id:"qrCodeContainer"}},[o("canvas",{attrs:{id:"qrCodeCanvas"}})]),o("q-card-actions",{attrs:{align:"center"}},[o("q-btn",{attrs:{icon:"fas fa-copy",label:"Copier dans le presse-papier",color:"primary","no-caps":""},on:{click:e.copyToClipboardClick}})],1)],1)],1)}),s=[],l=o("c4a7"),i=o.n(l),c=o("cdde"),d={name:"QrCodeDialog",props:{showDialog:null},data:function(){return{isDialog:!1,qrCode:null}},created:function(){},watch:{showDialog:function(){this.isDialog=!0,setTimeout((function(){var e=document.getElementById("qrCodeCanvas");this.qrCode=new i.a({element:e,background:"white",backgroundAlpha:.8,foreground:"black",foregroundAlpha:.8,level:"H",size:Math.min(e.offsetWidth,560),value:document.location.origin})}),0)}},methods:{copyToClipboardClick:function(){var e=this;Object(c["a"])(document.location.origin).then((function(){e.$q.notify({message:"Lien copié dans le presse-papier."})})).catch((function(){}))}}},u=d,p=o("2877"),f=o("eebe"),h=o.n(f),m=o("24e8"),g=o("f09f"),b=o("65c6"),w=o("cb32"),C=o("0016"),v=o("6ac5"),E=o("9c40"),D=o("a370"),y=o("4b7e"),T=o("7f67"),q=Object(p["a"])(u,r,s,!1,null,null,null),Q=q.exports;h()(q,"components",{QDialog:m["a"],QCard:g["a"],QToolbar:b["a"],QAvatar:w["a"],QIcon:C["a"],QToolbarTitle:v["a"],QBtn:E["a"],QCardSection:D["a"],QCardActions:y["a"]}),h()(q,"directives",{ClosePopup:T["a"]});var k=o("ca17"),x=o.n(k),S=(o("542c"),o("07a4")),_={name:"MainLayout",components:{QrCodeGenerator:Q,Treeselect:x.a},data:function(){return{types:[],store:S["a"],showQrCode:!1}},created:function(){var e=this,t=[],o="https://privamap-dev.azurewebsites.net/api/elementType/all",a={method:"GET",redirect:"follow"};fetch(o,a).then((function(e){return e.text()})).then((function(o){t=JSON.parse(o).ElementTypes;for(var a=0;a<t.length;a++){for(var n=[],r=0;r<t[a].Elements.length;r++){var s={id:t[a].id+"-"+t[a].Elements[r].id,label:t[a].Elements[r].name};n.push(s)}var l={id:t[a].id,label:t[a].name,children:n};e.types.push(l)}t.length>0&&(e.selectedElement=t[0].id)})).catch((function(e){return console.log("error",e)}))},computed:{isDirections:function(){return this.store.state.isDirectionMode},selectedElement:{get:function(){return this.store.state.selectedTreeElement},set:function(e){this.store.commit("setSelectedTreeElement",e)}},startElement:{get:function(){return this.store.state.itineraryStartTreeElt},set:function(e){this.store.commit("setItineraryStartTreeElt",e)}}},watch:{},methods:{cancelDir:function(){this.store.commit("setDirectionMode",!1)}}},L=_,M=o("4d5a"),z=o("e359"),B=o("09e3"),G=Object(p["a"])(L,a,n,!1,null,null,null);t["default"]=G.exports;h()(G,"components",{QLayout:M["a"],QHeader:z["a"],QToolbar:b["a"],QBtn:E["a"],QPageContainer:B["a"]})}}]);