(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"07a4":function(e,t,a){"use strict";var o=a("2b0e"),n=a("2f62");o["default"].use(n["a"]),t["a"]=new n["a"].Store({state:{elementsByType:null},mutations:{setElementsByType:function(e,t){console.log("setElementsByType triggered with"),console.log(t),e.elementsByType=t}}})},"713b":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHr Lpr lFr"}},[a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}}),a("q-header",{attrs:{elevated:"",id:"Qheader"}},[a("q-toolbar",[a("treeselect",{staticStyle:{width:"100%"},attrs:{name:"demo",multiple:!1,clearable:!0,searchable:!0,disabled:!1,"open-on-click":!0,"open-on-focus":!0,"clear-on-select":!0,"close-on-select":!0,"always-open":!1,"append-to-body":!1,options:e.types,limit:3,"max-height":200,"flatten-search-results":!0,placeholder:"Place"},model:{value:e.selectedElement,callback:function(t){e.selectedElement=t},expression:"selectedElement"}}),a("q-btn",{attrs:{flat:"",round:"",color:"white",size:"lg",icon:"img:statics\\QrCode.png"},on:{click:function(t){e.showQrCode=!e.showQrCode}}}),a("QrCodeGenerator",{attrs:{showDialog:e.showQrCode}})],1)],1),a("q-page-container",[a("router-view")],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("q-avatar",{attrs:{icon:"playlist_add_check",color:"primary","text-color":"white"}}),a("span",{staticClass:"q-ml-sm"},[e._v(e._s(this.validText))])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Annuler",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary"},on:{click:function(t){return e.validate()}}},[e._v(e._s(this.validButton))])],1)],1)],1)],1)},n=[],l=(a("f559"),a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{attrs:{persistent:""},model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[a("q-card",[a("q-toolbar",[a("q-avatar",[a("q-icon",{attrs:{name:"fas fa-qrcode"}})],1),a("q-toolbar-title",[e._v("QrCode")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),a("q-card-section",{attrs:{id:"qrCodeContainer"}},[a("canvas",{attrs:{id:"qrCodeCanvas"}})]),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{icon:"fas fa-copy",label:"Copier dans le presse-papier",color:"primary","no-caps":""},on:{click:e.copyToClipboardClick}})],1)],1)],1)}),i=[],s=a("c4a7"),r=a.n(s),c=a("cdde"),u={name:"QrCodeDialog",props:{showDialog:null},data:function(){return{isDialog:!1,qrCode:null}},created:function(){},watch:{showDialog:function(){this.isDialog=!0,setTimeout((function(){var e=document.getElementById("qrCodeCanvas");this.qrCode=new r.a({element:e,background:"white",backgroundAlpha:.8,foreground:"black",foregroundAlpha:.8,level:"H",size:Math.min(e.offsetWidth,560),value:document.location.origin})}),0)}},methods:{copyToClipboardClick:function(){var e=this;Object(c["a"])(document.location.origin).then((function(){e.$q.notify({message:"Lien copié dans le presse-papier."})})).catch((function(){}))}}},d=u,p=a("2877"),m=a("eebe"),h=a.n(m),v=a("24e8"),f=a("f09f"),g=a("65c6"),b=a("cb32"),q=a("0016"),y=a("6ac5"),w=a("9c40"),Q=a("a370"),C=a("4b7e"),T=a("7f67"),D=Object(p["a"])(d,l,i,!1,null,null,null),E=D.exports;h()(D,"components",{QDialog:v["a"],QCard:f["a"],QToolbar:g["a"],QAvatar:b["a"],QIcon:q["a"],QToolbarTitle:y["a"],QBtn:w["a"],QCardSection:Q["a"],QCardActions:C["a"]}),h()(D,"directives",{ClosePopup:T["a"]});var x=a("ca17"),k=a.n(x),I=(a("542c"),a("07a4")),S=a("18d6"),A={name:"MainLayout",components:{QrCodeGenerator:E,Treeselect:k.a},data:function(){return{button:"Valider le contrôle",boolean:!0,selectedElement:"",types:[],leftDrawerOpen:!1,rightDrawerOpen:!1,version:"0.0.1",confirm:!1,store:I["a"],object:[],validText:"Voulez-vous valider la maintenance ?",validButton:"Enregistrer et quitter le site",textInfos:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula leo quis mi vulputate faucibus. Aenean quis odio pharetra, rhoncus enim a, dignissim nisl.",showQrCode:!1}},created:function(){var e=this;console.log("main layout created function start"),this.$q.localStorage.set("object",["","","","",""]);var t=[],a="https://privamap.azurewebsites.net/api/elementType/all",o={method:"GET",redirect:"follow"};fetch(a,o).then((function(e){return e.text()})).then((function(a){console.log("fetch all element types then start"),a=JSON.parse(a).ElementTypes;var o=null;console.log("result.length"),console.log(a.length);for(var n=0;n<a.length;n++)o={label:a[n].name,value:a[n]},t.push(o);e.store.commit("setElementsByType",t),console.log("elementTypes"),console.log(t);for(var l=0;l<t.length;l++){for(var i=[],s=0;s<t[l].value.Elements.length;s++){var r={id:t[l].value.id+"-"+t[l].value.Elements[s].id,label:t[l].value.Elements[s].name};i.push(r)}var c={id:t[l].value.id,label:t[l].label,children:i};e.types.push(c)}console.log("this.types"),console.log(e.types),t.length>0&&(console.log("set value of tree select to first element"),e.selectedElement=t[0].value.id),console.log("fetch all element types then end")})).catch((function(e){return console.log("error",e)})),this.timer=setInterval((function(){var t=e.$q.localStorage.getItem("rightDrawerOpen");e.rightDrawerOpen=!0===t,e.$q.localStorage.getItem("leave")?e.button="Valider la sortie":e.button="Valider le contrôle",e.object=e.$q.localStorage.getItem("object"),null!==e.object&&(e.object[0].startsWith("Déf")?e.textInfos="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ...":e.textInfos="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula leo quis mi vulputate faucibus. Aenean quis odio pharetra, rhoncus enim a, dignissim nisl.")}),100),console.log("main layout created function end")},watch:{selectedElement:function(e){S["a"].set("objectId",e)}},methods:{verify:function(){this.confirm=!0,this.$q.localStorage.getItem("leave")?(this.boolean=!0,this.validText="Avez-vous quitté le site ?",this.validButton="Confirmer"):(this.boolean=!1,this.validText="Voulez-vous valider la maintenance du "+this.object[0]+"?",this.validButton="Enregistrer et quitter le site")},validate:function(){this.$q.localStorage.set("valid",!0),this.confirm=!0,this.rightDrawerOpen=!1,this.$q.localStorage.getItem("leave")?this.$q.notify({type:"positive",message:"Vous avez quitté le site."}):this.$q.notify({type:"positive",message:"La maintenance du "+this.object[0]+" a bien été validée."})},close:function(){this.$q.localStorage.set("rightDrawerOpen",!1)}}},$=A,j=a("4d5a"),B=a("e359"),_=a("9404"),L=a("1c1c"),O=a("0170"),z=a("068f"),V=a("eb85"),N=a("09e3"),P=Object(p["a"])($,o,n,!1,null,null,null);t["default"]=P.exports;h()(P,"components",{QLayout:j["a"],QHeader:B["a"],QToolbar:g["a"],QBtn:w["a"],QToolbarTitle:y["a"],QDrawer:_["a"],QList:L["a"],QItemLabel:O["a"],QImg:z["a"],QSeparator:V["a"],QAvatar:b["a"],QIcon:q["a"],QPageContainer:N["a"],QDialog:v["a"],QCard:f["a"],QCardSection:Q["a"],QCardActions:C["a"]}),h()(P,"directives",{ClosePopup:T["a"]})}}]);