(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"07a4":function(e,t,i){"use strict";var a=i("2b0e"),n=i("2f62");a["default"].use(n["a"]),t["a"]=new n["a"].Store({state:{selectedTreeElement:null,isRetryLocate:!1,geolocDisabled:!1,isDirectionMode:!1,itineraryStartTreeElt:"-1",isNavigationMode:!1,isSelectDepartureOnMap:!1,isSelectArrivalOnMap:!1,isNoDirectionOnChange:!1,isTreeSelectOpen:!1},mutations:{setSelectedTreeElement:function(e,t){e.selectedTreeElement=t},setRetryLocate:function(e,t){e.isRetryLocate=t},setGeolocDisabled:function(e,t){e.geolocDisabled=t},setDirectionMode:function(e,t){e.isDirectionMode=t},setItineraryStartTreeElt:function(e,t){e.itineraryStartTreeElt=t},setNavigationMode:function(e,t){e.isNavigationMode=t},setSelectDepartureOnMap:function(e,t){e.isSelectDepartureOnMap=t},setSelectArrivalOnMap:function(e,t){e.isSelectArrivalOnMap=t},setNoDirectionOnChange:function(e,t){e.isNoDirectionOnChange=t},setTreeSelectOpen:function(e,t){e.isTreeSelectOpen=t}}})},"713b":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{staticClass:"noDoubleTap",attrs:{view:"lHr Lpr lFr",onClick:"{e => e.preventDefault()}"}},[i("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),i("q-header",{staticClass:"noDoubleTap",attrs:{elevated:"",id:"Qheader"}},[i("q-toolbar",{staticClass:"q-pa-xs",attrs:{id:"upperToolbar"}},[e.isDirections||e.isNavigation?i("q-btn",{staticClass:"backBtn",attrs:{padding:"5px",flat:"",color:"white",size:"lg",icon:"fas fa-arrow-left"},on:{click:e.cancelDir}}):e._e(),e.isNavigation?i("div",{staticClass:"q-ml-sm"},[e._v("\n        Vers :\n        "),i("div",{staticClass:"navArrivalNameDiv"},[e._v("\n          "+e._s(e.navArrivalName)+"\n        ")])]):e._e(),i("div",{staticClass:"researchTree"},[e.isDirections?i("treeselect",{staticClass:"treeSelectElement q-pb-xs",class:e.getClassTreeSelectDeparture(),attrs:{id:"treeSelectDeparture",multiple:!1,clearable:!1,searchable:!0,disabled:!1,"open-on-click":!0,"open-on-focus":!0,"clear-on-select":!0,"close-on-select":!0,"always-open":!1,"append-to-body":!1,options:e.treeSelectEltOnMap,limit:3,"max-height":200,"flatten-search-results":!1,autoLoadRootOptions:!1,placeholder:"Sélectionner un élément"},on:{open:e.onOpenTreeSelectDeparture,close:e.onCloseTreeSelectDeparture},model:{value:e.startElement,callback:function(t){e.startElement=t},expression:"startElement"}}):e._e(),e.isNavigation?e._e():i("treeselect",{staticClass:"treeSelectElement",class:e.getClassTreeSelectArrival(),attrs:{id:"treeSelectArrival",multiple:!1,clearable:!1,searchable:!0,disabled:!1,"open-on-click":!0,"open-on-focus":!0,"clear-on-select":!0,"close-on-select":!0,"always-open":!1,"append-to-body":!1,options:e.isDirections?e.treeSelectEltOnMap:e.types,limit:3,"max-height":200,"flatten-search-results":!1,placeholder:"Sélectionner un élément"},on:{open:e.onOpenTreeSelectArrival,close:e.onCloseTreeSelectArrival},model:{value:e.selectedElement,callback:function(t){e.selectedElement=t},expression:"selectedElement"}})],1),e.isDirections?i("q-btn",{staticClass:"exchangeBtn",attrs:{padding:"5px",flat:"",color:"white",size:"lg",icon:"fas fa-exchange-alt"},on:{click:e.exchangeDir}}):e._e(),e.isDirections||e.isNavigation?e._e():i("q-btn",{attrs:{padding:"1px",flat:"",color:"white",size:"28px",icon:"img:statics\\QrCode.png"},on:{click:function(t){e.showQrCode=!e.showQrCode}}}),i("QrCodeGenerator",{attrs:{showDialog:e.showQrCode}})],1)],1),i("q-page-container",[i("router-view")],1)],1)},n=[],r=(i("28a5"),i("6b54"),i("6762"),i("2fdb"),i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("5df3"),i("f400"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-dialog",{attrs:{persistent:""},model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[i("q-card",[i("q-toolbar",[i("q-avatar",[i("q-icon",{attrs:{name:"fas fa-qrcode"}})],1),i("q-toolbar-title",[e._v("QrCode")]),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),i("q-card-section",{attrs:{id:"qrCodeContainer"}},[i("canvas",{attrs:{id:"qrCodeCanvas"}})]),i("q-card-actions",{attrs:{align:"center"}},[i("q-btn",{attrs:{icon:"fas fa-copy",label:"Copier dans le presse-papier",color:"primary","no-caps":""},on:{click:e.copyToClipboardClick}})],1)],1)],1)}),s=[],l=i("c4a7"),o=i.n(l),c=i("cdde"),d={name:"QrCodeDialog",props:{showDialog:null},data:function(){return{isDialog:!1,qrCode:null}},created:function(){},watch:{showDialog:function(){this.isDialog=!0,setTimeout((function(){var e=document.getElementById("qrCodeCanvas");this.qrCode=new o.a({element:e,background:"white",backgroundAlpha:.8,foreground:"black",foregroundAlpha:.8,level:"H",size:Math.min(e.offsetWidth,560),value:document.location.origin})}),0)}},methods:{copyToClipboardClick:function(){var e=this;Object(c["a"])(document.location.origin).then((function(){e.$q.notify({message:"Lien copié dans le presse-papier."})})).catch((function(){}))}}},p=d,u=i("2877"),h=i("eebe"),m=i.n(h),v=i("24e8"),f=i("f09f"),g=i("65c6"),S=i("cb32"),D=i("0016"),b=i("6ac5"),T=i("9c40"),E=i("a370"),C=i("4b7e"),O=i("7f67"),M=Object(u["a"])(p,r,s,!1,null,null,null),y=M.exports;m()(M,"components",{QDialog:v["a"],QCard:f["a"],QToolbar:g["a"],QAvatar:S["a"],QIcon:D["a"],QToolbarTitle:b["a"],QBtn:T["a"],QCardSection:E["a"],QCardActions:C["a"]}),m()(M,"directives",{ClosePopup:O["a"]});var w=i("ca17"),A=i.n(w),q=(i("542c"),i("07a4")),Q={name:"MainLayout",components:{QrCodeGenerator:y,Treeselect:A.a},data:function(){return{types:[],treeSelectEltOnMap:[{id:0,label:"Sélectionner un élément sur la carte"},{id:-1,label:"Ma position"}],store:q["a"],showQrCode:!1,eltLabelsById:new Map,navArrivalName:"arrivée"}},created:function(){var e=this,t=[],i="https://privamap-dev.azurewebsites.net/api/elementType/all",a={method:"GET",redirect:"follow"};fetch(i,a).then((function(e){return e.text()})).then((function(i){t=JSON.parse(i).ElementTypes;for(var a=0;a<t.length;a++){for(var n=[],r=0;r<t[a].Elements.length;r++){var s={id:t[a].id+"-"+t[a].Elements[r].id,label:t[a].Elements[r].name};e.eltLabelsById.set(t[a].Elements[r].id,t[a].Elements[r].name),n.push(s)}var l={id:t[a].id,label:t[a].name,children:n};e.types.push(l)}e.treeSelectEltOnMap=e.treeSelectEltOnMap.concat(e.types),t.length>0&&(e.selectedElement=t[0].id)})).catch((function(e){return console.log("error",e)}))},computed:{isDirections:function(){return this.store.state.isDirectionMode},isNavigation:function(){return this.store.state.isNavigationMode},isGeolocDisabled:function(){return this.store.state.geolocDisabled},selectedElement:{get:function(){return this.store.state.selectedTreeElement},set:function(e){0===e?(this.isDirections&&(this.isSelectArrivalOnMap=!0,this.isSelectDepartureOnMap=!1),this.store.commit("setSelectedTreeElement",null)):(this.store.commit("setSelectedTreeElement",e),e&&e.toString().includes("-")&&parseInt(e)>0?this.navArrivalName=this.eltLabelsById.get(parseInt(e.split("-")[1])):-1===parseInt(e)&&(this.navArrivalName="Ma position"))}},startElement:{get:function(){return this.store.state.itineraryStartTreeElt},set:function(e){0===e?(this.isDirections&&(this.isSelectDepartureOnMap=!0,this.isSelectArrivalOnMap=!1),this.store.commit("setItineraryStartTreeElt",null)):this.store.commit("setItineraryStartTreeElt",e)}},isSelectDepartureOnMap:{get:function(){return this.store.state.isSelectDepartureOnMap},set:function(e){this.store.commit("setSelectDepartureOnMap",e)}},isSelectArrivalOnMap:{get:function(){return this.store.state.isSelectArrivalOnMap},set:function(e){this.store.commit("setSelectArrivalOnMap",e)}}},watch:{isGeolocDisabled:function(e){var t=[{id:0,label:"Sélectionner un élément sur la carte"}];e?(t.push({id:-1,label:"Ma position",isDisabled:!0}),"-1"===this.startElement&&(this.startElement="1-112"),"-1"===this.selectedElement&&(this.selectedElement="1-112")):t.push({id:-1,label:"Ma position"}),this.treeSelectEltOnMap=t.concat(this.types)}},methods:{cancelDir:function(){this.store.commit("setDirectionMode",!1),this.store.commit("setNavigationMode",!1),this.isSelectArrivalOnMap=!1;var e=document.getElementById("treeSelectArrival");e.classList.remove("highlightTreeSelect"),this.isSelectDepartureOnMap=!1;var t=document.getElementById("treeSelectDeparture");t.classList.remove("highlightTreeSelect")},getClassTreeSelectDeparture:function(){var e=this.isSelectDepartureOnMap?"highlightTreeSelect":"";return this.isDirections&&(""!==e&&(e+=" "),e+="directionTreeSelectDeparture"),e},getClassTreeSelectArrival:function(){var e=this.isSelectArrivalOnMap?"highlightTreeSelect":"";return this.isDirections&&(""!==e&&(e+=" "),e+="directionTreeSelectArrival"),e},onOpenTreeSelectArrival:function(e){if(this.isDirections){var t=document.getElementById("treeSelectDeparture");t.classList.remove("highlightTreeSelect")}else this.store.commit("setTreeSelectOpen",!0)},onOpenTreeSelectDeparture:function(e){var t=document.getElementById("treeSelectArrival");t.classList.remove("highlightTreeSelect")},onCloseTreeSelectArrival:function(e){if(this.isSelectDepartureOnMap){var t=document.getElementById("treeSelectDeparture");t.classList.add("highlightTreeSelect")}this.isDirections||this.store.commit("setTreeSelectOpen",!1)},onCloseTreeSelectDeparture:function(e){if(this.isSelectArrivalOnMap){var t=document.getElementById("treeSelectArrival");t.classList.add("highlightTreeSelect")}},exchangeDir:function(){this.store.commit("setNoDirectionOnChange",!0);var e=this.startElement;this.startElement=this.selectedElement,this.selectedElement=e}}},N=Q,k=i("4d5a"),x=i("e359"),I=i("09e3"),L=Object(u["a"])(N,a,n,!1,null,null,null);t["default"]=L.exports;m()(L,"components",{QLayout:k["a"],QHeader:x["a"],QToolbar:g["a"],QBtn:T["a"],QPageContainer:I["a"]})}}]);