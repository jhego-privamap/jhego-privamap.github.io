(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"07a4":function(e,t,o){"use strict";var i=o("2b0e"),s=o("2f62");i["a"].use(s["a"]),t["a"]=new s["a"].Store({state:{importedDataGeoJSON:null,isImageEditor:!1,isPolygonEditor:!1,isPolylineEditor:!1,imageLayers:[],modifyImageById:null,isInfoPanelDisplayed:!1,isRouteLevel:!1,selectedRouteDirection:2,routesList:[],pointsGeometry:[],selectedElementType:null},mutations:{setImportedDataGeoJSON:function(e,t){console.log("setImportedDataGeoJSON triggered with"),console.log(t),e.importedDataGeoJSON=t},setImageEditor:function(e,t){console.log("setImageEditor triggered with"),console.log(t),e.isImageEditor=t},setPolygonEditor:function(e,t){console.log("setPolygonEditor triggered with"),console.log(t),e.isPolygonEditor=t},setRouteEditor:function(e,t){console.log("setRouteEditor triggered with"),console.log(t),e.isPolylineEditor=t},setImageLayers:function(e,t){console.log("setImageLayers triggered with"),console.log(t),e.imageLayers=t},setModifyImageById:function(e,t){console.log("setModifyImageById triggered with"),console.log(t),e.modifyImageById=t},setInfoPanelDisplayed:function(e,t){console.log("setInfoPanelDisplayed triggered with"),console.log(t),e.isInfoPanelDisplayed=t},setRouteLevel:function(e,t){console.log("setRouteLevel triggered with"),console.log(t),e.isRouteLevel=t},setSelectedRouteDirection:function(e,t){console.log("setSelectedRouteDirection triggered with"),console.log(t),e.selectedRouteDirection=t},setRoutesList:function(e,t){console.log("setRoutesList triggered with"),console.log(t),e.routesList=t},setPointsGeometry:function(e,t){console.log("setPointsGeometry triggered with"),console.log(t),e.pointsGeometry=t},setSelectedElementType:function(e,t){console.log("setSelectedElementType triggered with"),console.log(t),e.selectedElementType=t}}})},"56c3":function(e,t,o){e.exports=o.p+"img/logoPrivaMapWhiteNoBackground.a1e60c85.png"},"713b":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:"",id:"Qheader"}},[i("q-toolbar",[e.imageEditorMode?e._e():i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:e.leftDrawerOpen?"arrow_back_ios":"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),i("q-toolbar-title",[i("div",{staticClass:"gt-sm inline page-title"},[e._v("\n          PrivaMap\n        ")])]),i("q-btn",{staticClass:"buttonColor-left save-btn",attrs:{align:"center",icon:"save",label:"Enregistrer",disabled:e.isSaveDisabled()},on:{click:e.saveInformations}})],1)],1),i("q-drawer",{staticClass:"mainMenuBackground",attrs:{width:220,breakpoint:700,bordered:""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[i("div",[i("q-btn",{staticClass:"lt-sm inline",staticStyle:{position:"absolute",top:"9px",right:"-10px",background:"transparent"},attrs:{flat:"",dense:"",round:"",icon:"arrow_back_ios","text-color":"primary","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),i("q-list",[i("q-item-label",{attrs:{header:""}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-2"},[i("q-img",{attrs:{src:o("56c3")}})],1),i("div",{staticClass:"col-9 icon-container"},[i("q-img",{staticClass:"vertical-center",attrs:{src:o("ce7b")}})],1)])]),i("q-separator"),e.isFirstLevel?i("div",[i("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"fas fa-images",label:"Gérer les images"},on:{click:e.manageImages}}),i("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"mdi-map-marker-multiple",label:"Gérer les éléments"},on:{click:e.manageElements}}),i("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"las la-draw-polygon",label:"Gérer les formes"},on:{click:e.manageShapes}}),i("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"fas fa-shapes",label:"Gérer le décor"},on:{click:e.manageBackground}}),i("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"timeline",label:"Gérer les chemins"},on:{click:e.manageRoutes}}),i("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"file_download",label:"Importer"},on:{click:e.showDialogImportKML}}),i("import-dialog",{attrs:{dialogOptions:e.dialogKMLOptions},on:{importedData:e.importDataGeoJSON}})],1):i("div",[i("q-btn",{staticClass:"full-width q-mt-md text-white",attrs:{flat:"",dense:"",align:"left",icon:"arrow_back_ios",label:"Retour","aria-label":"Back"},on:{click:e.backToFirstLevel}})],1),e.isImageLevel?i("div",[i("q-list",{staticClass:"bg-white text-primary",attrs:{bordered:""}},[i("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Images")]),e._l(e.imageList,(function(t){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(o){return e.editImageById(t.id)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{color:"primary","text-color":"white"}},[e._v("\n                  2\n                ")])],1),i("q-item-section",[i("q-item-label",[e._v("ID : "+e._s(t.id))]),i("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("opacité : 90%")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"edit",color:"primary"}})],1)],1)}))],2)],1):e._e(),e.isElementLevel?i("div",[i("q-list",{staticClass:"bg-white text-primary image-list",attrs:{bordered:""}},[i("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Éléments")])],1)],1):e._e(),e.isShapeLevel?i("div",[i("q-list",{staticClass:"bg-white text-primary image-list",attrs:{bordered:""}},[i("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Formes")])],1)],1):e._e(),e.isBackgroundLevel?i("div",[i("q-list",{staticClass:"bg-white text-primary image-list",attrs:{bordered:""}},[i("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Décor")])],1)],1):e._e(),e.isRouteLevel?i("div",[i("q-list",{staticClass:"bg-white text-primary image-list",attrs:{bordered:""}},[i("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Chemins")])],1)],1):e._e(),i("div",{staticClass:"fixed-bottom",staticStyle:{color:"white","text-align":"center"}},[e._v("PrivaMap Studio v"+e._s(e.version))])],1)],1)]),i("q-page-container",[i("router-view")],1)],1)},s=[],a=(o("7f7f"),o("6b54"),o("06db"),o("e526")),l=o("07a4"),n={name:"MainLayout",components:{"import-dialog":a["a"]},data:function(){return{leftDrawerOpen:!1,version:"0.0.1",dialogKMLOptions:{},store:l["a"],imageEditorMode:!1,isFirstLevel:!0,isImageLevel:!1,isElementLevel:!1,isShapeLevel:!1,isBackgroundLevel:!1,imageList:[]}},created:function(){this.imageEditorMode=this.isImageEditor},computed:{isImageEditor:function(){return l["a"].state.isImageEditor},imageLayers:function(){return l["a"].state.imageLayers},isRouteLevel:function(){return l["a"].state.isRouteLevel},selectedElementType:function(){return this.store.state.selectedElementType},selectedRouteDirection:function(){return this.store.state.selectedRouteDirection},routesList:function(){return this.store.state.routesList},pointsGeometry:function(){return this.store.state.pointsGeometry}},watch:{isImageEditor:function(e){this.imageEditorMode=e,e&&(this.leftDrawerOpen=!1)},imageLayers:function(e){this.imageList=e}},methods:{isSaveDisabled:function(){return!((this.isShapeLevel||this.isBackgroundLevel)&&null!==this.selectedElementType||this.isRouteLevel)},importDataGeoJSON:function(e){this.store.commit("setImportedDataGeoJSON",e)},showDialogImportKML:function(){this.dialogKMLOptions={placeholder:"Ficher KML ou GeoJSON",acceptedFormats:".kml, .json"}},manageImages:function(){this.isFirstLevel=!1,this.isImageLevel=!0},manageElements:function(){console.log("manageElements"),this.isFirstLevel=!1,this.isElementLevel=!0},manageShapes:function(){console.log("manageShapes"),this.isFirstLevel=!1,this.isShapeLevel=!0,this.store.commit("setPolygonEditor",!0)},manageBackground:function(){console.log("manageBackground"),this.isFirstLevel=!1,this.isBackgroundLevel=!0,this.store.commit("setPolygonEditor",!0)},manageRoutes:function(){console.log("manageRoutes"),this.isFirstLevel=!1,this.store.commit("setRouteLevel",!0),this.store.commit("setRouteEditor",!0)},backToFirstLevel:function(){this.isFirstLevel=!0,this.isImageLevel=!1,this.isElementLevel=!1,this.isShapeLevel=!1,this.isBackgroundLevel=!1,this.store.commit("setRouteLevel",!1),this.store.commit("setPolygonEditor",!1)},editImageById:function(e){console.log("editImageById"),console.log(e),this.store.commit("setModifyImageById",e)},saveInformations:function(){if(console.log("saveInformations"),this.isShapeLevel||this.isBackgroundLevel){console.log("this.selectedElementType"),console.log(this.selectedElementType.value.id);for(var e="https://privamap-dev.azurewebsites.net/api/shape/import",t=new FormData,o=JSON.parse(this.store.state.importedDataGeoJSON),i={type:{id:this.selectedElementType.value.id.toString(),name:this.selectedElementType.value.name,description:this.selectedElementType.value.description},elements:[]},s=0;s<o.features.length;s++){var a={name:o.features[s].properties.name,shortname:o.features[s].properties.shortname?o.features[s].properties.shortname:o.features[s].properties.name,description:o.features[s].properties.description?o.features[s].properties.description:"",issue:"3",geometry:o.features[s].geometry};i.elements.push(a)}console.log("importedDataFormated"),console.log(JSON.stringify(i)),t.append("json",JSON.stringify(i));var l={method:"POST",body:t,redirect:"follow"};fetch(e,l).then((function(e){return e.text()})).then((function(e){console.log("result import"),console.log(e)})).catch((function(e){return console.log("error",e)})),this.store.commit("setInfoPanelDisplayed",!1)}else this.isRouteLevel&&(console.log("saveInformations"),console.log("this.routesList"),console.log(this.routesList),console.log("this.pointsGeometry"),console.log(this.pointsGeometry))}}},r=n,c=o("2877"),d=o("eebe"),m=o.n(d),A=o("4d5a"),p=o("e359"),g=o("65c6"),u=o("9c40"),f=o("6ac5"),h=o("9404"),v=o("1c1c"),b=o("0170"),y=o("068f"),w=o("eb85"),L=o("66e5"),O=o("4074"),q=o("cb32"),k=o("0016"),I=o("09e3"),S=o("714f"),C=Object(c["a"])(r,i,s,!1,null,null,null);t["default"]=C.exports;m()(C,"components",{QLayout:A["a"],QHeader:p["a"],QToolbar:g["a"],QBtn:u["a"],QToolbarTitle:f["a"],QDrawer:h["a"],QList:v["a"],QItemLabel:b["a"],QImg:y["a"],QSeparator:w["a"],QItem:L["a"],QItemSection:O["a"],QAvatar:q["a"],QIcon:k["a"],QPageContainer:I["a"]}),m()(C,"directives",{Ripple:S["a"]})},ce7b:function(e,t){e.exports="data:image/png;base64,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"},e526:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-dialog",{attrs:{persistent:""},model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[o("q-card",[o("q-toolbar",[o("q-avatar",[o("q-icon",{attrs:{name:"file_download"}})],1),o("q-toolbar-title",[e._v("Selectionner le fichier à importer")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),o("q-card-section",[o("q-file",{attrs:{color:"primary",filled:"",accept:e.acceptedFormats,label:e.placeholder},on:{rejected:e.onRejected},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"insert_drive_file"}})]},proxy:!0}]),model:{value:e.fileModel,callback:function(t){e.fileModel=t},expression:"fileModel"}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),o("q-btn",{attrs:{flat:"",loading:e.progress,color:"primary",disabled:!e.fileModel},on:{click:e.importFile},scopedSlots:e._u([{key:"loading",fn:function(){return[o("q-spinner-facebook",{staticClass:"on-center"})]},proxy:!0}])},[e._v("\n        Import\n        ")])],1)],1)],1)},s=[],a=(o("7f7f"),o("28a5"),o("e94f")),l={name:"ImportDialog",props:{dialogOptions:{type:Object,importedData:null}},data:function(){return{isDialog:!1,fileModel:null,progress:!1,fileText:"",acceptedFormats:".png",placeholder:"File",image:null}},watch:{dialogOptions:function(e){this.placeholder=e.placeholder,this.acceptedFormats=e.acceptedFormats,this.fileModel=null,this.progress=!1,this.isDialog=!0},fileModel:function(e){console.log("fileModel"),console.log(e)}},methods:{onRejected:function(e){this.$q.notify({type:"negative",message:"Given file is not in a supported format"})},importFile:function(){var e=this;if(this.progress=!0,console.log("this.fileModel"),console.log(this.fileModel),this.fileModel.size>2e7)this.$q.notify({type:"negative",message:"Given file is too large to be imported"}),this.progress=!1;else{var t=this.fileModel.name.split("."),o=t[t.length-1],i=new FileReader;"kml"===o||"json"===o?(i.addEventListener("load",(function(t){if(e.fileText=t.target.result,"kml"===o){var i=(new DOMParser).parseFromString(e.fileText,"text/xml");e.importedData=JSON.stringify(Object(a["kml"])(i))}else e.importedData=e.fileText;e.$emit("importedData",e.importedData),e.progress=!1,e.isDialog=!1})),i.readAsText(this.fileModel)):(this.$emit("importedData",this.fileModel),this.progress=!1,this.isDialog=!1)}}}},n=l,r=o("2877"),c=o("eebe"),d=o.n(c),m=o("24e8"),A=o("f09f"),p=o("65c6"),g=o("cb32"),u=o("0016"),f=o("6ac5"),h=o("9c40"),v=o("a370"),b=o("7d53"),y=o("4b7e"),w=o("e669"),L=o("7f67"),O=Object(r["a"])(n,i,s,!1,null,null,null);t["a"]=O.exports;d()(O,"components",{QDialog:m["a"],QCard:A["a"],QToolbar:p["a"],QAvatar:g["a"],QIcon:u["a"],QToolbarTitle:f["a"],QBtn:h["a"],QCardSection:v["a"],QFile:b["a"],QCardActions:y["a"],QSpinnerFacebook:w["a"]}),d()(O,"directives",{ClosePopup:L["a"]})}}]);