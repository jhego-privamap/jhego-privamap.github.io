(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"07a4":function(e,t,i){"use strict";i("ac6a"),i("cadf"),i("06db"),i("5df3"),i("f400");var o=i("2b0e"),s=i("2f62");o["a"].use(s["a"]),t["a"]=new s["a"].Store({state:{importedDataGeoJSON:null,isImageEditor:!1,isShapesEditor:!1,isPolylineEditor:!1,imageLayers:[],modifyImageById:null,isInfoPanelDisplayed:!1,isRouteLevel:!1,selectedRouteDirection:2,routesList:new Map,thresholdsList:new Map,editableLayers:[],selectedElementType:null,deletedElements:{points:[],routes:[],landings:[]},elementTypes:[]},mutations:{setImportedDataGeoJSON:function(e,t){e.importedDataGeoJSON=t},setImageEditor:function(e,t){e.isImageEditor=t},setShapesEditor:function(e,t){e.isShapesEditor=t},setRouteEditor:function(e,t){e.isPolylineEditor=t},setImageLayers:function(e,t){e.imageLayers=t},setModifyImageById:function(e,t){e.modifyImageById=t},setInfoPanelDisplayed:function(e,t){e.isInfoPanelDisplayed=t},setRouteLevel:function(e,t){e.isRouteLevel=t},setSelectedRouteDirection:function(e,t){console.log("setSelectedRouteDirection triggered with"),console.log(t),e.selectedRouteDirection=t},setRoutesList:function(e,t){e.routesList=t},setThresholdsList:function(e,t){e.thresholdsList=t},setEditableLayers:function(e,t){e.editableLayers=t},setSelectedElementType:function(e,t){e.selectedElementType=t},setDeletedElements:function(e,t){console.log("setDeletedElements triggered with"),console.log(t),e.deletedElements=t},setElementTypes:function(e,t){console.log("setElementTypes triggered with"),console.log(t),e.elementTypes=t}}})},"56c3":function(e,t,i){e.exports=i.p+"img/logoPrivaMapWhiteNoBackground.a1e60c85.png"},"713b":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("q-header",{attrs:{elevated:"",id:"Qheader"}},[o("q-toolbar",[e.imageEditorMode?e._e():o("q-btn",{attrs:{flat:"",dense:"",round:"",icon:e.leftDrawerOpen?"arrow_back_ios":"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),o("q-toolbar-title",[o("div",{staticClass:"gt-sm inline page-title"},[e._v("\n          PrivaMap\n        ")])]),o("q-btn",{staticClass:"buttonColor-left save-btn",attrs:{align:"center",icon:"save",label:"Enregistrer",disabled:e.isSaveDisabled()},on:{click:e.saveInformations}})],1)],1),o("q-drawer",{staticClass:"mainMenuBackground",attrs:{width:220,breakpoint:700,bordered:""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[o("div",[o("q-btn",{staticClass:"lt-sm inline",staticStyle:{position:"absolute",top:"9px",right:"-10px",background:"transparent"},attrs:{flat:"",dense:"",round:"",icon:"arrow_back_ios","text-color":"primary","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),o("q-list",[o("q-item-label",{attrs:{header:""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-2"},[o("q-img",{attrs:{src:i("56c3")}})],1),o("div",{staticClass:"col-9 icon-container"},[o("q-img",{staticClass:"vertical-center",attrs:{src:i("ce7b")}})],1)])]),o("q-separator"),e.isFirstLevel?o("div",[o("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"fas fa-images",label:"Gérer les images"},on:{click:e.manageImages}}),o("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"mdi-map-marker-multiple",label:"Gérer les éléments"},on:{click:e.manageElements}}),o("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"fas fa-shapes",label:"Gérer le décor"},on:{click:e.manageBackground}}),o("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"timeline",label:"Gérer les chemins"},on:{click:e.manageRoutes}}),o("q-btn",{staticClass:"full-width q-mt-md buttonColor-left",attrs:{align:"between",icon:"file_download",label:"Importer"},on:{click:e.showDialogImportKML}}),o("import-dialog",{attrs:{dialogOptions:e.dialogKMLOptions},on:{importedData:e.importDataGeoJSON}})],1):o("div",[o("q-btn",{staticClass:"full-width q-mt-md text-white",attrs:{flat:"",dense:"",align:"left",icon:"arrow_back_ios",label:"Retour","aria-label":"Back"},on:{click:e.backToFirstLevel}})],1),e.isImageLevel?o("div",[o("q-list",{staticClass:"bg-white text-primary",attrs:{bordered:""}},[o("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Images")]),e._l(e.imageList,(function(t){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(i){return e.editImageById(t.id)}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{attrs:{color:"primary","text-color":"white"}},[e._v("\n                  2\n                ")])],1),o("q-item-section",[o("q-item-label",[e._v("ID : "+e._s(t.id))]),o("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("opacité : 90%")])],1),o("q-item-section",{attrs:{side:""}},[o("q-icon",{attrs:{name:"edit",color:"primary"}})],1)],1)}))],2)],1):e._e(),e.isElementLevel?o("div",[o("q-list",{staticClass:"bg-white text-primary image-list",attrs:{bordered:""}},[o("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Éléments")])],1)],1):e._e(),e.isBackgroundLevel?o("div",[o("q-list",{staticClass:"bg-white text-primary image-list",attrs:{bordered:""}},[o("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Décor")])],1)],1):e._e(),e.isRouteLevel?o("div",[o("q-list",{staticClass:"bg-white text-primary image-list",attrs:{bordered:""}},[o("q-item-label",{staticClass:"text-white buttonColor-left list-header",attrs:{header:""}},[e._v("Chemins")])],1)],1):e._e(),o("div",{staticClass:"fixed-bottom",staticStyle:{color:"white","text-align":"center"}},[e._v("PrivaMap Studio v"+e._s(e.version))])],1)],1)]),o("q-page-container",[o("router-view")],1)],1)},s=[],a=(i("7f7f"),i("6b54"),i("06db"),i("e526")),n=i("07a4"),l={name:"MainLayout",components:{"import-dialog":a["a"]},data:function(){return{leftDrawerOpen:!1,version:"0.0.1",dialogKMLOptions:{},store:n["a"],imageEditorMode:!1,isFirstLevel:!0,isImageLevel:!1,isElementLevel:!1,isBackgroundLevel:!1,imageList:[]}},created:function(){this.imageEditorMode=this.isImageEditor},computed:{isImageEditor:function(){return n["a"].state.isImageEditor},imageLayers:function(){return n["a"].state.imageLayers},isRouteLevel:function(){return n["a"].state.isRouteLevel},selectedElementType:function(){return this.store.state.selectedElementType},selectedRouteDirection:function(){return this.store.state.selectedRouteDirection},routesList:function(){return this.store.state.routesList},thresholdsList:function(){return this.store.state.thresholdsList},editableLayers:function(){return this.store.state.editableLayers},importedDataGeoJSON:function(){return this.store.state.importedDataGeoJSON},deletedElements:{get:function(){return this.store.state.deletedElements},set:function(e){this.store.commit("setDeletedElements",e)}}},watch:{isImageEditor:function(e){this.imageEditorMode=e,e&&(this.leftDrawerOpen=!1)},imageLayers:function(e){this.imageList=e}},methods:{isSaveDisabled:function(){return!((this.isShapeLevel||this.isBackgroundLevel)&&null!==this.selectedElementType||this.isRouteLevel||null!==this.importedDataGeoJSON)},importDataGeoJSON:function(e){this.store.commit("setImportedDataGeoJSON",e)},showDialogImportKML:function(){this.dialogKMLOptions={placeholder:"Ficher KML ou GeoJSON",acceptedFormats:".kml, .json"}},manageImages:function(){this.isFirstLevel=!1,this.isImageLevel=!0},manageElements:function(){console.log("manageElements"),this.isFirstLevel=!1,this.isElementLevel=!0,this.store.commit("setShapesEditor",!0)},manageBackground:function(){console.log("manageBackground"),this.isFirstLevel=!1,this.isBackgroundLevel=!0,this.store.commit("setShapesEditor",!0)},manageRoutes:function(){console.log("manageRoutes"),this.isFirstLevel=!1,this.store.commit("setRouteLevel",!0),this.store.commit("setRouteEditor",!0)},backToFirstLevel:function(){this.isFirstLevel=!0,this.isImageLevel=!1,this.isElementLevel=!1,this.isShapeLevel=!1,this.isBackgroundLevel=!1,this.store.commit("setRouteLevel",!1),this.store.commit("setShapesEditor",!1)},editImageById:function(e){console.log("editImageById"),console.log(e),this.store.commit("setModifyImageById",e)},saveInformations:function(){if(console.log("saveInformations"),this.isShapeLevel||this.isBackgroundLevel||null!==this.importedDataGeoJSON){console.log("this.selectedElementType"),console.log(this.selectedElementType.value.id);for(var e="https://privamap-dev.azurewebsites.net/api/shape/import",t=new FormData,i=JSON.parse(this.store.state.importedDataGeoJSON),o={type:{id:this.selectedElementType.value.id.toString(),name:this.selectedElementType.value.name,description:this.selectedElementType.value.description},elements:[]},s=0;s<i.features.length;s++){var a={name:i.features[s].properties.name,shortname:i.features[s].properties.shortname?i.features[s].properties.shortname:i.features[s].properties.name,description:i.features[s].properties.description?i.features[s].properties.description:"",issue:"3",geometry:i.features[s].geometry};o.elements.push(a)}console.log("importedDataFormated"),console.log(JSON.stringify(o)),t.append("json",JSON.stringify(o));var n={method:"POST",body:t,redirect:"follow"};fetch(e,n).then((function(e){return e.text()})).then((function(e){console.log("result import"),console.log(e)})).catch((function(e){return console.log("error",e)})),this.store.commit("setInfoPanelDisplayed",!1)}else if(this.isRouteLevel){console.log("this.deletedElements"),console.log(this.deletedElements);var l=[];this.routesList.forEach((function(e,t){var i={tempId:t,direction:e.direction,point1TempId:e.point1,point2TempId:e.point2,distance:e.distance};l.push(i)})),console.log("linesList"),console.log(l);for(var r=[],c=0;c<this.editableLayers.length;c++){var d=this.editableLayers[c];d._latlng&&r.push({lat:d._latlng.lat,lng:d._latlng.lng,tempId:d._leaflet_id,id:d.options.defId?d.options.defId:-1})}var m=[];console.log("this.thresholdsList"),console.log(this.thresholdsList),this.thresholdsList.forEach((function(e,t){var i={eltId:e.elementId,pointTempId:e.pointId,pointId:-1};m.push(i)}));var p={updated:{routesList:l,pointsList:r,thresholdsList:m},deleted:this.deletedElements};console.log("routesAndPointsJson"),console.log(p),console.log("JSON.stringify(routesAndPointsJson"),console.log(JSON.stringify(p));var A="https://privamap-dev.azurewebsites.net/api/route/import",u=new FormData;u.append("json",JSON.stringify(p));var f={method:"POST",body:u,redirect:"follow"};fetch(A,f).then((function(e){return e.text()})).then((function(e){console.log("result import"),console.log(e)})).catch((function(e){return console.log("error",e)}))}}}},r=l,c=i("2877"),d=i("eebe"),m=i.n(d),p=i("4d5a"),A=i("e359"),u=i("65c6"),f=i("9c40"),g=i("6ac5"),h=i("9404"),v=i("1c1c"),b=i("0170"),y=i("068f"),L=i("eb85"),w=i("66e5"),O=i("4074"),q=i("cb32"),E=i("0016"),k=i("09e3"),S=i("714f"),I=Object(c["a"])(r,o,s,!1,null,null,null);t["default"]=I.exports;m()(I,"components",{QLayout:p["a"],QHeader:A["a"],QToolbar:u["a"],QBtn:f["a"],QToolbarTitle:g["a"],QDrawer:h["a"],QList:v["a"],QItemLabel:b["a"],QImg:y["a"],QSeparator:L["a"],QItem:w["a"],QItemSection:O["a"],QAvatar:q["a"],QIcon:E["a"],QPageContainer:k["a"]}),m()(I,"directives",{Ripple:S["a"]})},ce7b:function(e,t){e.exports="data:image/png;base64,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"},e526:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-dialog",{attrs:{persistent:""},model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[i("q-card",[i("q-toolbar",[i("q-avatar",[i("q-icon",{attrs:{name:"file_download"}})],1),i("q-toolbar-title",[e._v("Selectionner le fichier à importer")]),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),i("q-card-section",[i("q-file",{attrs:{color:"primary",filled:"",accept:e.acceptedFormats,label:e.placeholder},on:{rejected:e.onRejected},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"insert_drive_file"}})]},proxy:!0}]),model:{value:e.fileModel,callback:function(t){e.fileModel=t},expression:"fileModel"}})],1),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),i("q-btn",{attrs:{flat:"",loading:e.progress,color:"primary",disabled:!e.fileModel},on:{click:e.importFile},scopedSlots:e._u([{key:"loading",fn:function(){return[i("q-spinner-facebook",{staticClass:"on-center"})]},proxy:!0}])},[e._v("\n        Import\n        ")])],1)],1)],1)},s=[],a=(i("7f7f"),i("28a5"),i("e94f")),n={name:"ImportDialog",props:{dialogOptions:{type:Object,importedData:null}},data:function(){return{isDialog:!1,fileModel:null,progress:!1,fileText:"",acceptedFormats:".png",placeholder:"File",image:null}},watch:{dialogOptions:function(e){this.placeholder=e.placeholder,this.acceptedFormats=e.acceptedFormats,this.fileModel=null,this.progress=!1,this.isDialog=!0},fileModel:function(e){console.log("fileModel"),console.log(e)}},methods:{onRejected:function(e){this.$q.notify({type:"negative",message:"Given file is not in a supported format"})},importFile:function(){var e=this;if(this.progress=!0,console.log("this.fileModel"),console.log(this.fileModel),this.fileModel.size>2e7)this.$q.notify({type:"negative",message:"Given file is too large to be imported"}),this.progress=!1;else{var t=this.fileModel.name.split("."),i=t[t.length-1],o=new FileReader;"kml"===i||"json"===i?(o.addEventListener("load",(function(t){if(e.fileText=t.target.result,"kml"===i){var o=(new DOMParser).parseFromString(e.fileText,"text/xml");e.importedData=JSON.stringify(Object(a["kml"])(o))}else e.importedData=e.fileText;e.$emit("importedData",e.importedData),e.progress=!1,e.isDialog=!1})),o.readAsText(this.fileModel)):(this.$emit("importedData",this.fileModel),this.progress=!1,this.isDialog=!1)}}}},l=n,r=i("2877"),c=i("eebe"),d=i.n(c),m=i("24e8"),p=i("f09f"),A=i("65c6"),u=i("cb32"),f=i("0016"),g=i("6ac5"),h=i("9c40"),v=i("a370"),b=i("7d53"),y=i("4b7e"),L=i("e669"),w=i("7f67"),O=Object(r["a"])(l,o,s,!1,null,null,null);t["a"]=O.exports;d()(O,"components",{QDialog:m["a"],QCard:p["a"],QToolbar:A["a"],QAvatar:u["a"],QIcon:f["a"],QToolbarTitle:g["a"],QBtn:h["a"],QCardSection:v["a"],QFile:b["a"],QCardActions:y["a"],QSpinnerFacebook:L["a"]}),d()(O,"directives",{ClosePopup:w["a"]})}}]);