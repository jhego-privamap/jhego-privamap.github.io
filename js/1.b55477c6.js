(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"07a4":function(e,t,i){"use strict";var n=i("2b0e"),o=i("2f62");n["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{selectedTreeElement:null,isRetryLocate:!1,geolocDisabled:!1,isDirectionMode:!1,itineraryStartTreeElt:"-1",isNavigationMode:!1,selectDepartureOnMap:0,selectArrivalOnMap:0,isNoDirectionOnChange:!1,isTreeSelectOpen:!1,isNavigationImage:!1,remainingDistance:0,isShowQrCode:!1,qrCodeURL:""},mutations:{setSelectedTreeElement:function(e,t){e.selectedTreeElement=t},setRetryLocate:function(e,t){e.isRetryLocate=t},setGeolocDisabled:function(e,t){e.geolocDisabled=t},setDirectionMode:function(e,t){e.isDirectionMode=t},setItineraryStartTreeElt:function(e,t){e.itineraryStartTreeElt=t},setNavigationMode:function(e,t){e.isNavigationMode=t},setSelectDepartureOnMap:function(e,t){e.selectDepartureOnMap=t},setSelectArrivalOnMap:function(e,t){e.selectArrivalOnMap=t},setNoDirectionOnChange:function(e,t){e.isNoDirectionOnChange=t},setTreeSelectOpen:function(e,t){e.isTreeSelectOpen=t},setNavigationImage:function(e,t){e.isNavigationImage=t},setRemainingDistance:function(e,t){e.remainingDistance=t},setShowQrDialog:function(e,t){console.log("setShowQrDialog triggered with"),console.log(t),e.isShowQrCode=t},setQrCodeURL:function(e,t){console.log("setQrCodeURL triggered with"),console.log(t),e.qrCodeURL=t}}})},"0e66":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"noDoubleTap",attrs:{onClick:"{e => e.preventDefault()}"}},[i("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("map-component")],1)])])},o=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex mapPage noDoubleTap",attrs:{sync:"",onClick:"{e => e.preventDefault()}"}},[i("geoLocErrorNotif"),i("q-card",{staticStyle:{flex:"1"},attrs:{id:"map"}},[i("div",{attrs:{id:"navImageContainer"}}),i("MglMap",{staticStyle:{height:"calc(var(--vh, 1vh) * 100 - 81px)"},attrs:{id:"mapElement",logoPosition:"bottom-right",accessToken:e.accessToken,mapStyle:e.mapStyle,center:e.center,zoom:e.zoom,maxZoom:17.5,trackResize:!0,attributionControl:!1,antialias:!0},on:{load:e.load}},[i("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!0,showZoom:!1}}),i("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!1}}),i("MglScaleControl",{attrs:{position:"bottom-left"}}),i("MglAttributionControl",{attrs:{position:"top-left",customAttribution:"PrivaMap"}}),i("q-page-sticky",{staticClass:"mapButtonsFab mapbox-ctrl"},[i("q-btn",{staticClass:"centerFloatingBtn",attrs:{square:"",size:"17px",padding:"xs",color:"mapButton"},on:{click:function(t){return e.centerMap()}}}),i("q-btn",{attrs:{square:"",size:"17px",padding:"xs",icon:"location_on",color:"mapButton"},on:{click:function(t){return e.centerUserLoc()}}})],1),e.isDirections&&e.routePath?i("q-page-sticky",{staticClass:"startDirectionsBtn"},[i("q-btn",{attrs:{square:"",padding:"xs",color:"mapButton",label:e.isDirLoading?"Chargement...":"Démarrer"},on:{click:function(t){return e.confirmDirections()}}})],1):e._e()],1),e.isLoading?i("q-banner",{staticClass:"text-white bg-secondary",attrs:{id:"loadingBanner","inline-actions":""},scopedSlots:e._u([{key:"avatar",fn:function(){return[i("q-spinner-gears",{attrs:{color:"white",size:"5vh"}})]},proxy:!0}],null,!1,144345241)},[e._v("\n      "+e._s(e.loadingText)+"\n      ")]):e._e(),i("q-expansion-item",{staticStyle:{visibility:"hidden"},attrs:{id:"infoBanner","expand-icon":"ion-add","header-class":"bg-primary text-white","expand-icon-toggle":""},on:{"after-show":e.setMapMaxHeight,"before-hide":e.setMapMaxHeight},scopedSlots:e._u([{key:"header",fn:function(){return[i("q-item-section",{staticClass:"col-2",attrs:{id:"infoBannerIcon"}},[e.isDefaultTypeIcon?i("q-icon",{attrs:{name:"assignment",color:"white",size:"1.715em"}}):i("q-icon",{attrs:{color:"white",size:"1.715em"}},[i("svg",{attrs:{id:"infoBannerSVG",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}})])],1),i("q-item-section",{attrs:{id:"infoBannerText"}},[i("div",{staticClass:"row",attrs:{id:"infoBannerName"}},[e._v(e._s(e.infoName))]),i("div",{staticClass:"row",attrs:{id:"infoBannerShortName"}},[e._v(e._s(e.infoShortName))])]),i("q-item-section",{attrs:{side:""}},[i("div",{staticClass:"row items-center infoBannerBtns"},[i("q-btn",{staticClass:"infoBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:e.expandedInfo?"fas fa-chevron-down":"info_outline"},on:{click:function(t){return e.toggleInfoDesc()}}}),i("q-btn",{staticClass:"dirBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-directions"},on:{click:function(t){return e.startDirection()}}}),i("q-btn",{staticClass:"closeBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-times"},on:{click:function(t){return e.onClickCloseInfoBanner()}}})],1)])]},proxy:!0}]),model:{value:e.expandedInfo,callback:function(t){e.expandedInfo=t},expression:"expandedInfo"}},[i("q-card",[i("q-card-section",{staticClass:"q-pa-none",attrs:{id:"infoContent"}},[i("q-btn",{attrs:{id:"shareQrCodeBtn",color:"primary",size:"lg",icon:"mdi-qrcode",label:"Partager"},on:{click:function(t){return e.shareQrCode()}}}),i("q-list",{attrs:{bordered:""}},e._l(e.descGroups,(function(t,n){return i("div",{key:n},[i("q-expansion-item",{ref:"",refInFor:!0,attrs:{group:"infoContentGroup",label:t.title,"header-class":"bg-light-grey text-primary descTitle"},on:{show:function(i){return e.loadDescImages(t.id,n)},"after-show":function(t){e.isInfoOnTransition=!1}},model:{value:t.isExpanded,callback:function(i){e.$set(t,"isExpanded",i)},expression:"descGroup.isExpanded"}},[i("q-card",[t.text?i("q-card-section",[e._v("\n                    "+e._s(t.text)+"\n                  ")]):e._e(),e.descImagesLoaded&&e.displayedImages.length&&!e.isInfoOnTransition?i("q-card-section",{staticClass:"row"},e._l(e.displayedImages,(function(e,t){return i("div",{key:t,staticClass:"rounded-borders descImage q-ma-xs"},[i("q-img",{directives:[{name:"img",rawName:"v-img",value:{src:"data:"+e.fileType+";base64,"+e.image,sourceButton:!1},expression:"{src: 'data:'+ displayedImage.fileType + ';base64,' + displayedImage.image,\n                      sourceButton: false\n                      }"}],attrs:{src:"data:"+e.fileType+";base64,"+e.image,ratio:1,"spinner-color":"primary"}})],1)})),0):t.numberOfPictures?i("q-card-section",{staticClass:"row"},e._l(t.numberOfPictures,(function(e){return i("div",{key:e,staticClass:"rounded-borders descImage q-ma-xs"},[i("q-skeleton",{attrs:{height:"100%",square:""}})],1)})),0):e._e()],1)],1),i("q-separator")],1)})),0),0==e.descGroups.length?i("div",{staticClass:"q-ma-md"},[e._v("\n            Aucune information disponible.\n          ")]):e._e()],1)],1)],1),i("div",{staticClass:"popupBtnContainer",attrs:{id:"popupBtnContainer"}},[i("q-btn",{staticClass:"popupBtn",attrs:{color:"accent",icon:"fas fa-sign-in-alt"},on:{click:e.enterBuilding}})],1),i("q-inner-loading",{attrs:{showing:e.isDirLoading}},[i("q-spinner-gears",{attrs:{size:"20vmin",color:"primary"}})],1)],1)],1)},s=[],r=(i("ac4d"),i("8a81"),i("1c4c"),i("551c"),i("a34a")),c=i.n(r),l=(i("96cf"),i("c973")),d=i.n(l),u=(i("7f7f"),i("28a5"),i("6b54"),i("6762"),i("2fdb"),i("ac6a"),i("cadf"),i("06db"),i("5df3"),i("f400"),i("ac6d"),i("cb43"),i("409f")),p=i.n(u),h=i("7fd5"),m=i("aa1a"),g=i.n(m),f=i("8f76"),v=i.n(f),y=i("aeff"),I=i.n(y),b=i("feb7"),S=i("792c"),E=i.n(S),L=i("7ceb"),T=i("f3f3"),M=i.n(T),D=i("3b74"),k=i.n(D),C=i("5eb8"),x=i.n(C),w=i("ba32"),B=i.n(w),N=i("07a4"),O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.geolocationDisabled&&!e.noGeolocBannerReduced?i("q-banner",{staticClass:"text-white bg-red",attrs:{id:"noGeolocationBanner","inline-actions":""}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[e._v("\n        Votre position n'a pas pu être détectée. "+e._s(e.locationErrorText)+"\n      ")]),i("div",{staticClass:"col-4"},[i("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.reduceGeolocBanner}},[e._v("\n          Réduire\n        ")]),i("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.retryLocate}},[e._v("\n          Réessayer\n        ")])],1)])]):e._e(),e.noGeolocBannerReduced?i("q-page-sticky",{staticClass:"geolocErrorBtn",attrs:{position:"top-left",offset:e.posOffset}},[i("q-btn",{attrs:{fab:"",icon:"gps_off",color:"red",dense:"",size:"xs",padding:"xs"},on:{click:e.expandGeolocBanner}})],1):e._e()],1)},P=[],G={name:"GeoLocErrorNotif",props:{showDialog:null},data:function(){return{store:N["a"],geolocationDisabled:!1,locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",noGeolocBannerReduced:!1,posOffset:[15,45]}},created:function(){},computed:{isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled},isNavigationImage:function(){return this.store.state.isNavigationImage}},watch:{geolocDisabled:function(e){this.geolocationDisabled=e},isNavigationImage:function(e){if(e&&this.geolocDisabled){var t=this;setTimeout((function(){t.noGeolocBannerReduced=!0;var e=document.getElementById("navImageContainer").offsetHeight,i=45+e;t.posOffset=[15,i]}),500)}else this.posOffset=[15,45]}},methods:{retryLocate:function(){this.store.commit("setRetryLocate",!0)},reduceGeolocBanner:function(){this.noGeolocBannerReduced=!0},expandGeolocBanner:function(){this.noGeolocBannerReduced=!1}}},R=G,A=i("2877"),q=i("eebe"),F=i.n(q),z=i("54e1"),_=i("9c40"),j=i("de5e"),Q=Object(A["a"])(R,O,P,!1,null,null,null),U=Q.exports;F()(Q,"components",{QBanner:z["a"],QBtn:_["a"],QPageSticky:j["a"]});var H=i("e192"),J=i.n(H),V=i("2b0e"),Z=i("11a1"),X=i("3f3d");function Y(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=$(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function $(e,t){if(e){if("string"===typeof e)return W(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?W(e,t):void 0}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}V["default"].use(Z["a"]);var K={props:["type"],components:{MglMap:X["b"],MglAttributionControl:X["a"],MglNavigationControl:X["c"],MglScaleControl:X["d"],GeoLocErrorNotif:U},data:function(){return{store:N["a"],accessToken:"pk.eyJ1IjoianVseXVzcyIsImEiOiJja2E2amxxOW0wN245MnhvaHU5OHRrM25rIn0.JFf7wbHPb7AwEvXK45h47g",mapStyle:"mapbox://styles/mapbox/light-v10",zoom:parseFloat("13.25"),center:[parseFloat("3.153204729474396"),parseFloat("50.21899024777983")],selectedElement:"",imageList:[],isMapLoaded:!1,shapesGeojson:null,isTreeSelectLoaded:!1,isLoading:!0,loadingText:"Chargement en cours...",locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",infoName:"",infoShortName:"",expandedInfo:!1,itineraryStartEltId:-1,routePath:null,noZoom:!1,userPos:null,selectedElementId:null,userLocation:{latitude:null,longitude:null},displayedEltsType:null,descGroups:[],descImagesLoaded:!1,displayedImages:[],isInfoOnTransition:!1,isDefaultTypeIcon:!0,dictIconById:new Map,isGeolocChecked:!1,isShapesLoaded:!1,isURLChecked:!1,isDirLoading:!1,selectedFeat:null,selectedDestFeat:null,currentPopup:null,isPopup:!1}},created:function(){this.geolocateTimerFreq=500;var e=document.createElement("div");e.className="endMarkerIcon",this.endMarker=new J.a.Marker({element:e,anchor:"bottom"});var t=document.createElement("div");t.className="startMarkerIcon",this.startMarker=new J.a.Marker({element:t,anchor:"center",pitchAlignment:"map"});var i=document.createElement("div");i.className="locNavMarkerIcon",this.locNavMarker=new J.a.Marker({element:i,anchor:"center",pitchAlignment:"map",rotationAlignment:"map"});var n=document.createElement("div");n.className="locMarkerIcon",this.locMarker=new J.a.Marker({element:n,anchor:"center",pitchAlignment:"map",rotationAlignment:"map"});var o=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(o,"px"));var a=this;window.addEventListener("orientationchange",(function(e){setTimeout((function(){a.resizeMap()}),500)})),window.addEventListener("resize",(function(e){a.map&&setTimeout((function(){a.setMapMaxHeight()}),500)}))},beforeDestroy:function(){clearInterval(this.geolocateTimer)},computed:{selectedTreeElement:function(){return this.store.state.selectedTreeElement},isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled},isDirections:function(){return this.store.state.isDirectionMode},isNavigation:function(){return this.store.state.isNavigationMode},itineraryStartTreeElt:function(){return this.store.state.itineraryStartTreeElt},isTreeSelectOpen:function(){return this.store.state.isTreeSelectOpen},selectDepartureOnMap:{get:function(){return this.store.state.selectDepartureOnMap},set:function(e){this.store.commit("setSelectDepartureOnMap",e)}},selectArrivalOnMap:{get:function(){return this.store.state.selectArrivalOnMap},set:function(e){this.store.commit("setSelectArrivalOnMap",e)}},isNoDirectionOnChange:{get:function(){return this.store.state.isNoDirectionOnChange},set:function(e){this.store.commit("setNoDirectionOnChange",e)}},isNavigationImage:{get:function(){return this.store.state.isNavigationImage},set:function(e){this.store.commit("setNavigationImage",e)}},remainingDistance:{get:function(){return this.store.state.remainingDistance},set:function(e){this.store.commit("setRemainingDistance",e)}},isShowQrCode:{get:function(){return this.store.state.isShowQrCode},set:function(e){this.store.commit("setShowQrDialog",e)}},qrCodeURL:{get:function(){return this.store.state.qrCodeURL},set:function(e){this.store.commit("setQrCodeURL",e)}}},watch:{geolocDisabled:function(e){this.setMapMaxHeight()},isRetryLocate:function(e){this.locateMe()},isTreeSelectOpen:function(e){e&&(this.expandedInfo=!1)},isDirections:function(e){e?this.hideUserLoc():(this.map.getSource("directionPath").setData({type:"Feature",geometry:null}),this.isNavigation||(this.endMarker.remove(),this.startMarker.remove(),this.store.commit("setSelectedTreeElement",null))),this.setMapMaxHeight(),this.currentPopup&&this.currentPopup._onClose()},isNavigation:function(e){e||(this.map.getSource("directionPathNavigation").setData({type:"Feature",geometry:null}),this.map.getSource("navDestination").setData({type:"Feature",geometry:null}),this.isDirections||(this.endMarker.remove(),this.startMarker.remove(),this.locNavMarker.remove(),this.store.commit("setSelectedTreeElement",null),this.unselectElement(),this.map.setPitch(0)),this.isNavigationImage&&(document.getElementById("navigationImage").remove(),this.isNavigationImage=!1)),this.setMapMaxHeight()},userLocation:{deep:!0,handler:function(e){if(this.isNavigation){var t=Object(b["point"])([e.longitude,e.latitude]),i=E()(this.routePath,t),n=this.routePath.features[0].geometry.coordinates,o=Object(b["point"])(n[n.length-1]),a=Object(b["lineString"])(this.routePath.features[0].geometry.coordinates),s=Object(L["a"])(i,o,a),r=x()(s);if(this.remainingDistance=+r.toPrecision(2),this.easeMarkerTo(i),this.selectedTreeElement.toString().includes("-")&&-1!==this.selectedTreeElement&&r<.5&&!this.isNavigationImage){var c=this.selectedTreeElement.toString().split("-")[1];this.addNavigationImage(c)}}}},itineraryStartTreeElt:function(e){if(e){if(this.itineraryStartEltId=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e,this.isDirections&&this.selectedTreeElement.toString().includes("-")){var t=this.selectedTreeElement.toString().includes("-")&&parseInt(this.selectedTreeElement)>0?parseInt(this.selectedTreeElement.split("-")[1]):this.selectedTreeElement;this.getDirections(this.itineraryStartEltId,t)}}else void 0!==this.map&&this.selectDepartureOnMap&&(this.loadShapes(this.selectDepartureOnMap),this.displayedEltsType=this.selectDepartureOnMap)},selectedTreeElement:function(e){if(this.selectedElement=e,this.isTreeSelectLoaded=!0,e&&void 0!==this.map&&"-1"!==e.toString()){if(e.toString().includes("-")){this.expandedInfo=!1;var t=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e;this.displayedEltsType&&this.displayedEltsType===e.toString().split("-")[0]?this.selectElement(t):this.loadShapes(e.toString().split("-")[0],t)}else{if(!this.isNavigation)if(this.displayedEltsType&&this.displayedEltsType===e){var i=p()(this.shapesGeojson);this.map.fitBounds([[i[0],i[1]],[i[2],i[3]]])}else this.loadShapes(e);this.closeInfoBanner()}this.displayedEltsType=e.toString().split("-")[0]}else"-1"===e.toString()?this.getDirections(this.itineraryStartEltId,"-1"):void 0===e&&void 0!==this.map&&this.selectArrivalOnMap&&(this.loadShapes(this.selectArrivalOnMap),this.displayedEltsType=this.selectArrivalOnMap)}},methods:{load:function(e){var t=this,i=e.map;this.map=i,this.map.addSource("GIGN",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GIGN",type:"raster",source:"GIGN",minzoom:0,maxzoom:20}),this.map.addSource("GeoportailFrance.PlanIGN.Uni",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GeoportailFrance.PlanIGN.Uni",type:"raster",source:"GeoportailFrance.PlanIGN.Uni",minzoom:0,maxzoom:20}),this.isMapLoaded=!0,this.setLoading(!0,"Chargement des images...");var n="https://privamap-dev.azurewebsites.net/api/imageLayer/all",o={method:"GET",redirect:"follow"};fetch(n,o).then((function(e){return e.text()})).then((function(e){JSON.parse(e).ImageLayers&&(t.imageList=JSON.parse(e).ImageLayers),t.addAllImages(),t.addElementsLayer(),t.setLoading(!0,"Chargement des éléments..."),t.loadShapes(t.selectedElement)})).catch((function(e){return console.log("error",e)})),this.geolocateTimer=setInterval((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t.successGeolocation,t.errorGeolocation):t.isGeolocChecked=!0}),this.geolocateTimerFreq)},selectElement:function(e){var t,i=this.map.getSource("buildings")._data.features,n=Y(i);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(e===parseInt(o.properties.elementId)){if(this.selectPolygon(o),this.dictIconById.has(o.properties.typeId)){this.isDefaultTypeIcon=!1;var a=this.dictIconById.get(o.properties.typeId);this.setAsTypeIcon(a)}else this.isDefaultTypeIcon=!0,this.loadTypeIcon(o.properties.typeId);if(this.isDirections||this.isNavigation)this.isDirections&&this.itineraryStartTreeElt&&this.getDirections(this.itineraryStartEltId,e);else{if(!this.noZoom){var s=p()(o.geometry);this.map.fitBounds([[s[0],s[1]],[s[2],s[3]]],{padding:{top:10,bottom:30,left:20,right:20}})}console.log("this.isPopup"),console.log(this.isPopup),this.isPopup||this.currentPopup&&this.currentPopup._onClose(),this.isPopup=!1;var r=this;setTimeout((function(){r.showInfoBanner(o.properties.elementId,o.properties.name,o.properties.shortname,o.geometry.coordinates[0][0],o.properties.description),r.noZoom=!1}),0)}break}}}catch(c){n.e(c)}finally{n.f()}},loadTypeIcon:function(e){var t=this,i="https://privamap-dev.azurewebsites.net/api/elementType/"+e,n={method:"GET",redirect:"follow"};fetch(i,n).then((function(e){return e.text()})).then((function(i){if(i=JSON.parse(i),i.elementTypeStyle.icon){t.isDefaultTypeIcon=!1;var n="data:"+i.elementTypeStyle.icon.fileType+";base64,"+i.elementTypeStyle.icon.image;t.dictIconById.set(e,n),t.setAsTypeIcon(n)}else t.isDefaultTypeIcon=!0})).catch((function(e){return console.log("error",e)}))},setAsTypeIcon:function(e){var t=new XMLHttpRequest;t.open("GET",e);var i=this;t.addEventListener("load",(function(e){var t=e.target.response,n=new DOMParser,o=n.parseFromString(t,"image/svg+xml");o.rootElement.setAttribute("preserveAspectRatio","xMidYMid meet"),o.rootElement.id="infoBannerSVG",i.typeIcon="";var a=document.getElementById("infoBannerSVG"),s=a.parentNode;s.replaceChild(o.rootElement,a)})),t.send(null)},onClickBuilding:function(e){this.expandedInfo=!1,this.isDirections||(this.noZoom=!0);var t=e.features[0];if(1===t.properties.typeId&&!this.isDirections&&!this.isNavigation){this.isPopup=!0,this.currentPopup=new B.a({closeButton:!0,anchor:"bottom",offset:[0,10],openingAnimation:{duration:1e3,easing:"easeOutElastic"},closingAnimation:{duration:200,easing:"easeInBack"}}),this.currentPopup.setLngLat(e.lngLat);var i=document.getElementById("popupBtnContainer").cloneNode(!0);i.getElementsByTagName("button").item(0).onclick=this.enterBuilding,this.currentPopup.setDOMContent(i),this.currentPopup.addTo(this.map)}var n=t.properties.typeId+"-"+t.properties.elementId;this.isDirections||this.isNavigation||this.store.commit("setSelectedTreeElement",n),this.isDirections&&(this.selectArrivalOnMap?this.store.commit("setSelectedTreeElement",n):this.selectDepartureOnMap&&this.store.commit("setItineraryStartTreeElt",n)),this.selectPolygon(t)},selectPolygon:function(e){this.selectedFeat=e,null!==this.selectedPolygonId&&this.map.removeFeatureState({source:"buildings",id:this.selectedPolygonId}),this.selectedPolygonId=e.id,this.map.setFeatureState({source:"buildings",id:this.selectedPolygonId},{clicked:!0})},showInfoBanner:function(e,t,i,n,o,a){var s=this;this.displayedImages=[],document.getElementById("infoBanner").style.visibility="visible",this.infoName=t,this.infoShortName=i;var r="https://privamap-dev.azurewebsites.net/api/element/"+e+"/descriptions",c={method:"GET",redirect:"follow"};fetch(r,c).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),s.descGroups=e.Descriptions,s.descGroups.sort(te)})).catch((function(e){return console.log("error",e)})),this.setMapMaxHeight()},onClickCloseInfoBanner:function(){this.closeInfoBanner(),this.unselectElement()},closeInfoBanner:function(){this.expandedInfo=!1;for(var e=0;e<this.descGroups.length;e++)this.descGroups[e].isExpanded=!1;document.getElementById("infoBanner").style.visibility="hidden",this.setMapMaxHeight()},unselectElement:function(){null!==this.selectedPolygonId&&this.map.removeFeatureState({source:"buildings",id:this.selectedPolygonId}),this.store.commit("setSelectedTreeElement",null),this.currentPopup&&this.currentPopup._onClose()},toggleInfoDesc:function(){this.expandedInfo=!this.expandedInfo},centerMap:function(){var e=[parseFloat("3.176841877913972"),parseFloat("50.228915906493086")],t=[parseFloat("3.1289118208060813"),parseFloat("50.21034240381536")],i=new J.a.LngLatBounds(e,t);this.map.fitBounds(i)},addAllImages:function(){if(this.isMapLoaded)for(var e=null,t=0;t<this.imageList.length;t++)e={type:"image",url:"data:"+this.imageList[t].fileType+";base64,"+this.imageList[t].image,coordinates:[[parseFloat(this.imageList[t].topLeftLng),parseFloat(this.imageList[t].topLeftLat)],[parseFloat(this.imageList[t].topRightLng),parseFloat(this.imageList[t].topRightLat)],[parseFloat(this.imageList[t].bottomRightLng),parseFloat(this.imageList[t].bottomRightLat)],[parseFloat(this.imageList[t].bottomLeftLng),parseFloat(this.imageList[t].bottomLeftLat)]]},this.map.addSource("image"+this.imageList[t].id,e),this.map.addLayer({id:"imageLayer"+this.imageList[t].id,type:"raster",source:"image"+this.imageList[t].id,layout:{},paint:{"raster-opacity":1}})},addElementsLayer:function(){this.map.addSource("buildings",{type:"geojson",data:null});var e={id:"buildings",type:"fill",source:"buildings",layout:{},paint:{"fill-color":["case",["boolean",["feature-state","clicked"],!1],"#2f52a0","#088"],"fill-opacity":["case",["boolean",["feature-state","clicked"],!1],1,.8]}};this.map.addLayer(e),this.map.addSource("elementLabels",{type:"geojson",data:null});var t={id:"elementLabels",type:"symbol",source:"elementLabels",layout:{"icon-image":"custom-marker","text-field":["get","shortname"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,0],"text-anchor":"center"},paint:{"text-color":"#FFFFFF","text-opacity":["case",["<",["get","area"],5500],0,1]},minzoom:13.5};this.map.addLayer(t);var i=this.map;this.map.on("mouseenter","buildings",(function(){i.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave","buildings",(function(){i.getCanvas().style.cursor=""})),this.map.on("click","buildings",this.onClickBuilding),this.map.addSource("directionPath",{type:"geojson",data:null}),this.map.addLayer({id:"directionPath",type:"line",source:"directionPath",paint:{"line-color":"#00CD9A","line-width":7,"line-opacity":1},layout:{"line-cap":"round","line-join":"round"}}),this.map.addSource("directionPathNavigation",{type:"geojson",data:null}),this.map.addLayer({id:"directionPathNavigation",type:"fill",source:"directionPathNavigation",paint:{"fill-color":"#56BFEC","fill-opacity":1},layout:{}}),this.map.addSource("navDestination",{type:"geojson",data:null});var n={id:"navDestination",type:"fill",source:"navDestination",layout:{},paint:{"fill-color":"#fca311","fill-opacity":1}};this.map.addLayer(n);var o={id:"navDestinationBorderBack",type:"line",source:"navDestination",layout:{},paint:{"line-color":"#3d405b","line-width":3},minzoom:16.5};this.map.addLayer(o);var a={id:"navDestinationBorder",type:"line",source:"navDestination",layout:{},paint:{"line-color":"#e07a5f","line-width":3,"line-dasharray":[1,2]},minzoom:16.5};this.map.addLayer(a),this.map.addSource("posAccuracyCircle",{type:"geojson",data:null});var s={id:"posAccuracyCircle",type:"fill",source:"posAccuracyCircle",layout:{},paint:{"fill-color":"#61C1D2","fill-opacity":.4}};this.map.addLayer(s)},loadShapes:function(){var e=d()(c.a.mark((function e(t,i){var n,o,a=this;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isMapLoaded||!this.isTreeSelectLoaded){e.next=5;break}return n="https://privamap-dev.azurewebsites.net/api/elementType/"+t+"/elements",o={method:"GET",redirect:"follow"},e.next=5,fetch(n,o).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e);for(var t=e.Elements,n={type:"FeatureCollection",features:[]},o={type:"FeatureCollection",features:[]},s=0;s<t.length;s++)for(var r=0;r<t[s].Shapes.length;r++){var c={type:"Feature",geometry:t[s].Shapes[r].json,id:t[s].Shapes[r].id,properties:{elementId:t[s].id,name:t[s].name,shortname:t[s].shortname,description:t[s].description,typeName:e.ElementTypeStyle.name,typeId:e.ElementTypeStyle.id,indication:t[s].indication}};n.features.push(c);var l=M()(t[s].Shapes[r].json);l.properties.area=k()(t[s].Shapes[r].json),l.properties.shortname=t[s].shortname,o.features.push(l)}if(a.shapesGeojson=n,a.map.getSource("buildings").setData(a.shapesGeojson),a.map.getSource("elementLabels").setData(o),a.setLoading(!1),i||a.noZoom)i&&a.selectElement(i);else{a.noZoom=!1;var d=p()(a.shapesGeojson);a.map.fitBounds([[d[0],d[1]],[d[2],d[3]]])}a.isShapesLoaded=!0,a.isURLChecked||a.urlCheck()})).catch((function(e){return console.log("error",e)}));case 5:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}(),resizeMap:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),this.map.resize()},successGeolocation:function(e){if(this.userLocation.latitude=e.coords.latitude,this.userLocation.longitude=e.coords.longitude,!this.isDirections&&!this.isNavigation){this.locMarker.setLngLat([e.coords.longitude,e.coords.latitude]).addTo(this.map);var t=Object(h["a"])(Object(b["point"])([e.coords.longitude,e.coords.latitude]),e.coords.accuracy/1e3);this.map.getSource("posAccuracyCircle").setData(t)}this.isURLChecked||(this.isGeolocChecked=!0,this.urlCheck())},errorGeolocation:function(){this.store.commit("setGeolocDisabled",!0),this.isURLChecked||(this.isGeolocChecked=!0,this.urlCheck())},setLoading:function(e,t){t&&(this.loadingText=t),this.isLoading=e,this.setMapMaxHeight()},locateMe:function(){var e=this;return d()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.closeInfoBanner(),e.setLoading(!0,"Recherche de la position..."),e.store.commit("setGeolocDisabled",!1),t.prev=3,t.next=6,e.getLocation();case 6:e.location=t.sent,e.setLoading(!1),e.store.commit("setRetryLocate",!1),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](3),e.setLoading(!1),e.reloadPage();case 15:case"end":return t.stop()}}),t,null,[[3,11]])})))()},getLocation:function(){return d()(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){"geolocation"in navigator||t(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition((function(t){e(t)}),(function(e){t(e)}))})));case 1:case"end":return e.stop()}}),e)})))()},reloadPage:function(){document.location.reload()},startDirection:function(e){this.store.commit("setDirectionMode",!0);var t=this.selectedTreeElement.toString().includes("-")&&parseInt(this.selectedTreeElement)>0?parseInt(this.selectedTreeElement.split("-")[1]):this.selectedTreeElement;this.getDirections(this.itineraryStartEltId,t),this.closeInfoBanner()},getDirections:function(e,t){var i=this;if(this.isNoDirectionOnChange)this.isNoDirectionOnChange=!1;else{this.isDirLoading=!0;var n="";if(e>0&&t>0)n="https://privamap-dev.azurewebsites.net/api/route/elm_"+e+"/elm_"+t;else{navigator.geolocation.getCurrentPosition(this.successGeolocation,this.errorGeolocation);var o=0,a=t;-1===parseInt(t)&&(o=1,a=e),n="https://privamap-dev.azurewebsites.net/api/route/"+this.userLocation.latitude+"/"+this.userLocation.longitude+"/elm_"+a+"/"+o}var s={method:"GET",redirect:"follow"};fetch(n,s).then((function(e){return e.text()})).then((function(e){if(i.isDirections){i.routePath=JSON.parse(e),i.map.getSource("directionPath").setData(i.routePath);var t=p()(i.routePath);i.map.fitBounds([[t[0],t[1]],[t[2],t[3]]],{padding:{top:10,bottom:30,left:20,right:20}});var n=i.routePath.features[0].geometry.coordinates;i.endMarker.setLngLat(n[n.length-1]).addTo(i.map),i.startMarker.setLngLat(n[0]).addTo(i.map),i.isDirLoading=!1}})).catch((function(e){return console.log("error",e)}))}},confirmDirections:function(){var e=d()(c.a.mark((function e(){var t,i,n,o,a,s,r,l,d,u,p,m,f,v,y,I;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(h["a"])(this.routePath,.003),this.map.getSource("directionPathNavigation").setData(t.features[0]),!this.selectedTreeElement.toString().includes("-")||-1===this.selectedTreeElement){e.next=37;break}if(i=this.selectedTreeElement.toString().split("-")[1],"2"!==this.selectedTreeElement.toString().split("-")[0]){e.next=29;break}return this.noZoom=!0,e.next=8,this.loadShapes(this.selectedTreeElement.toString().split("-")[0]);case 8:this.displayedEltsType=this.selectedTreeElement.toString().split("-")[0],n=this.map.getSource("buildings")._data.features,o=Y(n),e.prev=11,o.s();case 13:if((a=o.n()).done){e.next=20;break}if(s=a.value,parseInt(s.properties.elementId)!==parseInt(i)){e.next=18;break}return this.selectedDestFeat=s,e.abrupt("break",20);case 18:e.next=13;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](11),o.e(e.t0);case 25:return e.prev=25,o.f(),e.finish(25);case 28:this.map.getSource("navDestination").setData(this.selectedDestFeat);case 29:r=this.routePath.features[0].geometry.coordinates,l=Object(b["point"])(r[0]),d=Object(b["point"])(r[r.length-1]),u=Object(b["lineString"])(this.routePath.features[0].geometry.coordinates),p=Object(L["a"])(l,d,u),m=x()(p),this.remainingDistance=+m.toPrecision(2),m<.5&&this.addNavigationImage(i);case 37:f=this.routePath.features[0].geometry.coordinates[0],v=Object(b["point"])(f),y=Object(b["point"])(this.routePath.features[0].geometry.coordinates[1]),I=g()(v,y),this.map.flyTo({center:f,zoom:17,pitch:60,bearing:I}),this.locNavMarker.setRotation(I),this.store.commit("setDirectionMode",!1),this.store.commit("setNavigationMode",!0),this.locNavMarker.setLngLat(this.startMarker.getLngLat()).addTo(this.map);case 46:case"end":return e.stop()}}),e,this,[[11,22,25,28]])})));function t(){return e.apply(this,arguments)}return t}(),addNavigationImage:function(e){var t=this,i="https://privamap-dev.azurewebsites.net/api/element/"+e+"/navigation",n={method:"GET",redirect:"follow"};fetch(i,n).then((function(e){return e.text()})).then((function(e){var i=JSON.parse(e);if(i.image){var n="data:"+i.fileType+";base64,"+i.image,o=n,a=new XMLHttpRequest,s=t;a.open("GET",o),a.addEventListener("load",(function(e){var t=e.target.response,i=new DOMParser,n=i.parseFromString(t,"image/svg+xml");n.rootElement.id="navigationImage";var o=n.querySelectorAll('*[id^="dock_"]');o.forEach((function(e,t,i){e.innerHTML=parseInt(s.selectedDestFeat.properties.indication)+parseInt(e.id.split("_")[1])})),n.rootElement.setAttribute("preserveAspectRatio","xMidYMid meet"),!s.isNavigationImage&&s.isNavigation&&(document.getElementById("navImageContainer").prepend(n.rootElement),s.isNavigationImage=!0,setTimeout((function(){s.setMapMaxHeight()}),500))})),a.send(null)}})).catch((function(e){return console.log("error",e)}))},easeMarkerTo:function(e){var t=this.locNavMarker.getLngLat(),i=Object(b["point"])([t.lng,t.lat]),n=Object(b["point"])(e.geometry.coordinates),o=Object(b["lineString"])(this.routePath.features[0].geometry.coordinates);this.markerRoute=Object(L["a"])(i,n,o),this.isBacktracking=!1;var a=E()(this.routePath,i),s=E()(this.routePath,n);a.properties.location>s.properties.location&&(this.isBacktracking=!0);var r=ee(this.markerRoute);if(!(r<.003)){var c=[];this.markerAnimSteps=50;for(var l=0;l<r;l+=r/this.markerAnimSteps){var d=I()(this.markerRoute,l);this.isBacktracking?c.unshift(d.geometry.coordinates):c.push(d.geometry.coordinates)}this.markerRoute.geometry.coordinates=c,this.counter=0,this.animateMarker(this.counter)}},animateMarker:function(){this.locNavMarker.setLngLat(this.markerRoute.geometry.coordinates[this.counter]);var e,t=Object(b["point"])(this.markerRoute.geometry.coordinates[this.counter>=this.markerAnimSteps?this.counter-1:this.counter]),i=Object(b["point"])(this.markerRoute.geometry.coordinates[this.counter>=this.markerAnimSteps?this.counter:this.counter+1]);e=this.isBacktracking?g()(i,t):g()(t,i),this.locNavMarker.setRotation(e),this.map.easeTo({center:this.markerRoute.geometry.coordinates[this.counter],bearing:e}),this.counter<this.markerAnimSteps&&requestAnimationFrame(this.animateMarker),this.counter=this.counter+1},loadDescImages:function(e,t){var i=this;if(this.isInfoOnTransition=!0,this.displayedImages=[],this.descGroups[t].images)this.displayedImages=this.descGroups[t].images;else{this.descImagesLoaded=!1;var n="https://privamap-dev.azurewebsites.net/api/description/"+e+"/pictures",o={method:"GET",redirect:"follow"};fetch(n,o).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),i.displayedImages=e.Pictures,i.descGroups[t].images=e.Pictures,i.descImagesLoaded=!0})).catch((function(e){return console.log("error",e)}))}},urlCheck:function(){if(this.$route.params.destId&&this.isGeolocChecked&&this.isShapesLoaded){this.isURLChecked=!0;var e=this.$route.params.destId;if(e.split("-").length>1){var t=-1;this.geolocDisabled&&(t="1-112");var i=parseInt(e.split("-")[1]);this.store.commit("setSelectedTreeElement",e),this.store.commit("setItineraryStartTreeElt",t),this.store.commit("setDirectionMode",!0),this.getDirections(t,i)}}},shareQrCode:function(){this.qrCodeURL="/#/to"+this.selectedTreeElement,this.isShowQrCode=!0},centerUserLoc:function(){var e=this.map.getSource("posAccuracyCircle")._data,t=p()(e);this.map.fitBounds(t)},hideUserLoc:function(){this.locMarker.remove(),this.map.getSource("posAccuracyCircle").setData({type:"Feature",geometry:null})},enterBuilding:function(){this.currentPopup._onClose();var e=this.selectedTreeElement.split("-")[1],t="https://privamap-dev.azurewebsites.net/api/element/"+e+"/sons",i={method:"GET",redirect:"follow"};fetch(t,i).then((function(e){return e.text()})).then((function(e){console.log("result"),console.log(e)})).catch((function(e){return console.log("error",e)}));var n=p()(this.selectedFeat.geometry);this.map.fitBounds([[n[0],n[1]],[n[2],n[3]]]),this.closeInfoBanner(),this.unselectElement()},setMapMaxHeight:function(){var e=0,t=16;"hidden"!==document.getElementById("infoBanner").style.visibility&&!1===this.expandedInfo||this.isLoading?(e+=54,t+=54):"hidden"!==document.getElementById("infoBanner").style.visibility&&!0===this.expandedInfo&&(e+=document.getElementById("infoBanner").offsetHeight,t+=54);var i=document.getElementById("upperToolbar").offsetHeight;if(e+=i,t+=i,this.isNavigationImage){var n=document.getElementById("navImageContainer").offsetHeight;e+=n?n+6:150}document.getElementById("mapElement").style.height="calc(100vh - 16px - "+e+"px)",document.getElementById("mapElement").style.height="calc(var(--vh, 1vh) * 100 - 16px - "+e+"px)",document.documentElement.style.setProperty("--elth","".concat(t,"px")),this.map.resize()}}};function ee(e){var t=0;if(e.geometry.coordinates&&e.geometry.coordinates.length>0)for(var i=e.geometry.coordinates,n=0;n<i.length-1;n++){var o=Object(b["point"])(i[n]),a=Object(b["point"])(i[n+1]),s=v()(o,a);t+=s}return t}function te(e,t){return e.priority<t.priority?-1:e.priority>t.priority?1:0}var ie=K,ne=i("9989"),oe=i("f09f"),ae=i("cf57"),se=i("3b73"),re=i("4074"),ce=i("0016"),le=i("a370"),de=i("1c1c"),ue=i("068f"),pe=i("293e"),he=i("eb85"),me=i("74f7"),ge=Object(A["a"])(ie,a,s,!1,null,null,null),fe=ge.exports;F()(ge,"components",{QPage:ne["a"],QCard:oe["a"],QPageSticky:j["a"],QBtn:_["a"],QBanner:z["a"],QSpinnerGears:ae["a"],QExpansionItem:se["a"],QItemSection:re["a"],QIcon:ce["a"],QCardSection:le["a"],QList:de["a"],QImg:ue["a"],QSkeleton:pe["a"],QSeparator:he["a"],QInnerLoading:me["a"]});var ve={components:{"map-component":fe},name:"PageIndex"},ye=ve,Ie=Object(A["a"])(ye,n,o,!1,null,null,null);t["default"]=Ie.exports;F()(Ie,"components",{QPage:ne["a"]})},cb43:function(e,t,i){}}]);