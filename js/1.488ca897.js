(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"07a4":function(e,t,i){"use strict";var o=i("2b0e"),n=i("2f62");o["default"].use(n["a"]),t["a"]=new n["a"].Store({state:{selectedTreeElement:null,isRetryLocate:!1,geolocDisabled:!1,isDirectionMode:!1,itineraryStartTreeElt:"-1",isNavigationMode:!1,selectDepartureOnMap:0,selectArrivalOnMap:0,isNoDirectionOnChange:!1,isTreeSelectOpen:!1,isNavigationImage:!1,remainingDistance:0},mutations:{setSelectedTreeElement:function(e,t){e.selectedTreeElement=t},setRetryLocate:function(e,t){e.isRetryLocate=t},setGeolocDisabled:function(e,t){e.geolocDisabled=t},setDirectionMode:function(e,t){e.isDirectionMode=t},setItineraryStartTreeElt:function(e,t){e.itineraryStartTreeElt=t},setNavigationMode:function(e,t){e.isNavigationMode=t},setSelectDepartureOnMap:function(e,t){e.selectDepartureOnMap=t},setSelectArrivalOnMap:function(e,t){e.selectArrivalOnMap=t},setNoDirectionOnChange:function(e,t){e.isNoDirectionOnChange=t},setTreeSelectOpen:function(e,t){e.isTreeSelectOpen=t},setNavigationImage:function(e,t){e.isNavigationImage=t},setRemainingDistance:function(e,t){console.log("setRemainingDistance triggered with"),console.log(t),e.remainingDistance=t}}})},"0e66":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"noDoubleTap",attrs:{onClick:"{e => e.preventDefault()}"}},[i("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("map-component")],1)])])},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex mapPage noDoubleTap",attrs:{sync:"",onClick:"{e => e.preventDefault()}"}},[i("geoLocErrorNotif"),i("q-card",{staticStyle:{flex:"1"},attrs:{id:"map"}},[i("div",{attrs:{id:"navImageContainer"}}),i("MglMap",{staticStyle:{height:"calc(var(--vh, 1vh) * 100 - 81px)"},attrs:{id:"mapElement",logoPosition:"bottom-right",accessToken:e.accessToken,mapStyle:e.mapStyle,center:e.center,zoom:e.zoom,maxZoom:17.5,trackResize:!0,attributionControl:!1,antialias:!0},on:{load:e.load}},[i("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!0,showZoom:!1}}),i("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!1}}),i("MglScaleControl",{attrs:{position:"bottom-left"}}),i("MglAttributionControl",{attrs:{position:"top-left",customAttribution:"PrivaMap"}}),i("MglGeolocateControl",{attrs:{position:"bottom-right",trackUserLocation:!0}}),i("q-page-sticky",{staticClass:"mapButtonsFab mapbox-ctrl"},[i("q-btn",{attrs:{square:"",size:"17px",padding:"xs",color:"mapButton"},on:{click:function(t){return e.centerMap()}}}),i("div",{staticClass:"mapButtonsFabBottomDiv"})],1),e.isDirections&&e.routePath?i("q-page-sticky",{staticClass:"startDirectionsBtn"},[i("q-btn",{attrs:{square:"",padding:"xs",color:"mapButton",label:"Démarrer"},on:{click:function(t){return e.confirmDirections()}}})],1):e._e()],1),e.isLoading?i("q-banner",{staticClass:"text-white bg-secondary",attrs:{id:"loadingBanner","inline-actions":""},scopedSlots:e._u([{key:"avatar",fn:function(){return[i("q-spinner-gears",{attrs:{color:"white",size:"5vh"}})]},proxy:!0}],null,!1,144345241)},[e._v("\n      "+e._s(e.loadingText)+"\n      ")]):e._e(),i("q-expansion-item",{staticStyle:{visibility:"hidden"},attrs:{id:"infoBanner","expand-icon":"ion-add","header-class":"bg-primary text-white","expand-icon-toggle":""},on:{"after-show":e.setMapMaxHeight,"before-hide":e.setMapMaxHeight},scopedSlots:e._u([{key:"header",fn:function(){return[i("q-item-section",{staticClass:"col-2",attrs:{id:"infoBannerIcon"}},[i("q-icon",{attrs:{name:"location_city",color:"white",size:"1.715em"}})],1),i("q-item-section",{attrs:{id:"infoBannerText"}},[i("div",{staticClass:"row",attrs:{id:"infoBannerName"}},[e._v(e._s(e.infoName))]),i("div",{staticClass:"row",attrs:{id:"infoBannerShortName"}},[e._v(e._s(e.infoShortName))])]),i("q-item-section",{attrs:{side:""}},[i("div",{staticClass:"row items-center infoBannerBtns"},[i("q-btn",{staticClass:"infoBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:e.expandedInfo?"fas fa-chevron-down":"info_outline"},on:{click:function(t){return e.toggleInfoDesc()}}}),i("q-btn",{staticClass:"dirBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-directions"},on:{click:function(t){return e.startDirection()}}}),i("q-btn",{staticClass:"closeBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-times"},on:{click:function(t){return e.onClickCloseInfoBanner()}}})],1)])]},proxy:!0}]),model:{value:e.expandedInfo,callback:function(t){e.expandedInfo=t},expression:"expandedInfo"}},[i("q-card",[i("q-card-section",{staticClass:"q-pa-none",attrs:{id:"infoContent"}},[i("q-list",{attrs:{bordered:""}},e._l(e.descGroups,(function(t,o){return i("div",{key:o},[i("q-expansion-item",{attrs:{group:"infoContentGroup",label:t.title,"header-class":"bg-light-grey text-primary descTitle"},on:{show:function(i){return e.loadDescImages(t.id)}}},[i("q-card",[i("q-card-section",[e._v("\n                    "+e._s(t.text)+"\n                  ")])],1)],1),i("q-separator")],1)})),0),0==e.descGroups.length?i("div",[e._v("\n            Aucune information disponible.\n          ")]):e._e()],1)],1)],1)],1)],1)},s=[],r=(i("ac6a"),i("ac4d"),i("8a81"),i("5df3"),i("1c4c"),i("551c"),i("a34a")),c=i.n(r),l=(i("96cf"),i("c973")),d=i.n(l),m=(i("7f7f"),i("28a5"),i("6b54"),i("06db"),i("6762"),i("2fdb"),i("ac6d"),i("cb43"),i("409f")),u=i.n(m),h=i("7fd5"),p=i("aa1a"),g=i.n(p),f=i("8f76"),v=i.n(f),y=i("aeff"),b=i.n(y),I=i("feb7"),S=i("792c"),E=i.n(S),M=i("7ceb"),L=i("f3f3"),T=i.n(L),x=i("3b74"),D=i.n(x),C=i("5eb8"),k=i.n(C),w=i("07a4"),N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.geolocationDisabled&&!e.noGeolocBannerReduced?i("q-banner",{staticClass:"text-white bg-red",attrs:{id:"noGeolocationBanner","inline-actions":""}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[e._v("\n        Votre position n'a pas pu être détectée. "+e._s(e.locationErrorText)+"\n      ")]),i("div",{staticClass:"col-4"},[i("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.reduceGeolocBanner}},[e._v("\n          Réduire\n        ")]),i("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.retryLocate}},[e._v("\n          Réessayer\n        ")])],1)])]):e._e(),e.noGeolocBannerReduced?i("q-page-sticky",{staticClass:"geolocErrorBtn",attrs:{position:"top-left",offset:e.posOffset}},[i("q-btn",{attrs:{fab:"",icon:"gps_off",color:"red",dense:"",size:"xs",padding:"xs"},on:{click:e.expandGeolocBanner}})],1):e._e()],1)},O=[],B={name:"GeoLocErrorNotif",props:{showDialog:null},data:function(){return{store:w["a"],geolocationDisabled:!1,locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",noGeolocBannerReduced:!1,posOffset:[15,45]}},created:function(){},computed:{isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled},isNavigationImage:function(){return this.store.state.isNavigationImage}},watch:{geolocDisabled:function(e){this.geolocationDisabled=e},isNavigationImage:function(e){if(e){var t=this;setTimeout((function(){t.noGeolocBannerReduced=!0;var e=document.getElementById("navImageContainer").offsetHeight,i=45+e;t.posOffset=[15,i]}),500)}else this.posOffset=[15,45]}},methods:{retryLocate:function(){this.store.commit("setRetryLocate",!0)},reduceGeolocBanner:function(){this.noGeolocBannerReduced=!0},expandGeolocBanner:function(){this.noGeolocBannerReduced=!1}}},G=B,P=i("2877"),R=i("eebe"),A=i.n(R),_=i("54e1"),z=i("9c40"),j=i("de5e"),q=Object(P["a"])(G,N,O,!1,null,null,null),F=q.exports;A()(q,"components",{QBanner:_["a"],QBtn:z["a"],QPageSticky:j["a"]});var H=i("e192"),Q=i.n(H),J=i("3f3d");function U(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=V(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,a=!0,s=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){s=!0,n=e},f:function(){try{a||null==o.return||o.return()}finally{if(s)throw n}}}}function V(e,t){if(e){if("string"===typeof e)return X(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?X(e,t):void 0}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var Y={props:["type"],components:{MglMap:J["c"],MglAttributionControl:J["a"],MglNavigationControl:J["d"],MglGeolocateControl:J["b"],MglScaleControl:J["e"],GeoLocErrorNotif:F},data:function(){return{store:w["a"],accessToken:"pk.eyJ1IjoianVseXVzcyIsImEiOiJja2E2amxxOW0wN245MnhvaHU5OHRrM25rIn0.JFf7wbHPb7AwEvXK45h47g",mapStyle:"mapbox://styles/mapbox/light-v10",zoom:13.25,center:[3.153204729474396,50.21899024777983],selectedElement:"",imageList:[],isMapLoaded:!1,shapesGeojson:null,isTreeSelectLoaded:!1,isLoading:!0,loadingText:"Chargement en cours...",locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",infoName:"",infoShortName:"",expandedInfo:!1,itineraryStartEltId:-1,routePath:null,noZoom:!1,userPos:null,selectedElementId:null,userLocation:{latitude:null,longitude:null},geolocateControlIndex:null,displayedEltsType:null,descGroups:[]}},created:function(){var e=document.createElement("div");e.className="endMarkerIcon",this.endMarker=new Q.a.Marker({element:e,anchor:"bottom"});var t=document.createElement("div");t.className="startMarkerIcon",this.startMarker=new Q.a.Marker({element:t,anchor:"center",pitchAlignment:"map"});var i=document.createElement("div");i.className="locMarkerIcon",this.locMarker=new Q.a.Marker({element:i,anchor:"center",pitchAlignment:"map",rotationAlignment:"map"});var o=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(o,"px"));var n=this;window.addEventListener("orientationchange",(function(e){setTimeout((function(){n.resizeMap()}),500)})),window.addEventListener("resize",(function(e){n.map&&setTimeout((function(){n.setMapMaxHeight()}),500)}))},beforeDestroy:function(){clearInterval(this.geolocateTimer)},computed:{selectedTreeElement:function(){return this.store.state.selectedTreeElement},isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled},isDirections:function(){return this.store.state.isDirectionMode},isNavigation:function(){return this.store.state.isNavigationMode},itineraryStartTreeElt:function(){return this.store.state.itineraryStartTreeElt},isTreeSelectOpen:function(){return this.store.state.isTreeSelectOpen},selectDepartureOnMap:{get:function(){return this.store.state.selectDepartureOnMap},set:function(e){this.store.commit("setSelectDepartureOnMap",e)}},selectArrivalOnMap:{get:function(){return this.store.state.selectArrivalOnMap},set:function(e){this.store.commit("setSelectArrivalOnMap",e)}},isNoDirectionOnChange:{get:function(){return this.store.state.isNoDirectionOnChange},set:function(e){this.store.commit("setNoDirectionOnChange",e)}},isNavigationImage:{get:function(){return this.store.state.isNavigationImage},set:function(e){this.store.commit("setNavigationImage",e)}},remainingDistance:{get:function(){return this.store.state.remainingDistance},set:function(e){this.store.commit("setRemainingDistance",e)}}},watch:{geolocDisabled:function(e){this.setMapMaxHeight()},isRetryLocate:function(e){this.locateMe()},isTreeSelectOpen:function(e){e&&(this.expandedInfo=!1)},isDirections:function(e){e||(this.map.getSource("directionPath").setData({type:"Feature",geometry:null}),this.isNavigation||(this.endMarker.remove(),this.startMarker.remove(),this.store.commit("setSelectedTreeElement",null))),this.setMapMaxHeight()},isNavigation:function(e){e||(this.map.getSource("directionPathNavigation").setData({type:"Feature",geometry:null}),this.map.getSource("navDestination").setData({type:"Feature",geometry:null}),this.isDirections||(this.endMarker.remove(),this.startMarker.remove(),this.locMarker.remove(),this.map._controls[this.geolocateControlIndex].options.showAccuracyCircle=!0,this.map._controls[this.geolocateControlIndex].options.showUserLocation=!0,this.map._controls[this.geolocateControlIndex]._updateMarker(),this.store.commit("setSelectedTreeElement",null),this.map.setPitch(0),clearInterval(this.geolocateTimer)),this.isNavigationImage&&(document.getElementById("navigationImage").remove(),this.isNavigationImage=!1)),this.setMapMaxHeight()},userLocation:{deep:!0,handler:function(e){if(this.isNavigation){var t=Object(I["point"])([e.longitude,e.latitude]),i=E()(this.routePath,t),o=this.routePath.features[0].geometry.coordinates,n=Object(I["point"])(o[o.length-1]),a=Object(I["lineString"])(this.routePath.features[0].geometry.coordinates),s=Object(M["a"])(i,n,a),r=k()(s);if(this.remainingDistance=+r.toPrecision(2),this.easeMarkerTo(i),this.selectedElement.toString().includes("-")&&-1!==this.selectedElement&&r<.5&&!this.isNavigationImage){var c=this.selectedElement.toString().split("-")[1];this.addNavigationImage(c)}}}},itineraryStartTreeElt:function(e){if(e){if(this.itineraryStartEltId=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e,this.isDirections&&this.selectedTreeElement.toString().includes("-")){var t=this.selectedTreeElement.toString().includes("-")&&parseInt(this.selectedTreeElement)>0?parseInt(this.selectedTreeElement.split("-")[1]):this.selectedTreeElement;this.getDirections(this.itineraryStartEltId,t)}}else void 0!==this.map&&this.selectDepartureOnMap&&(this.loadShapes(this.selectDepartureOnMap),this.displayedEltsType=this.selectDepartureOnMap)},selectedTreeElement:function(e){if(console.log("selectedTreeElement"),console.log(e),this.selectedElement=e,this.isTreeSelectLoaded=!0,e&&void 0!==this.map){if(e.toString().includes("-")){this.expandedInfo=!1;var t=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e;this.displayedEltsType&&this.displayedEltsType===e.toString().split("-")[0]?this.selectElement(t):this.loadShapes(e.toString().split("-")[0],t)}else{if(!this.isNavigation)if(this.displayedEltsType&&this.displayedEltsType===e){var i=u()(this.shapesGeojson);this.map.fitBounds([[i[0],i[1]],[i[2],i[3]]])}else this.loadShapes(e);this.closeInfoBanner()}this.displayedEltsType=e.toString().split("-")[0]}else void 0===e&&void 0!==this.map&&this.selectArrivalOnMap&&(this.loadShapes(this.selectArrivalOnMap),this.displayedEltsType=this.selectArrivalOnMap)}},methods:{load:function(e){var t=this,i=e.map;this.map=i;var o=this;setTimeout((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(o.successGeolocation,o.errorGeolocation):this.store.commit("setGeolocDisabled",!0)}),1e3),this.map.addSource("GIGN",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GIGN",type:"raster",source:"GIGN",minzoom:0,maxzoom:20}),this.map.addSource("GeoportailFrance.PlanIGN.Uni",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GeoportailFrance.PlanIGN.Uni",type:"raster",source:"GeoportailFrance.PlanIGN.Uni",minzoom:0,maxzoom:20}),this.isMapLoaded=!0,this.setLoading(!0,"Chargement des images...");var n="https://privamap-dev.azurewebsites.net/api/imageLayer/all",a={method:"GET",redirect:"follow"};fetch(n,a).then((function(e){return e.text()})).then((function(e){JSON.parse(e).ImageLayers&&(t.imageList=JSON.parse(e).ImageLayers),t.addAllImages(),t.addElementsLayer(),t.setLoading(!0,"Chargement des éléments..."),t.loadShapes(t.selectedElement)})).catch((function(e){return console.log("error",e)})),this.$nextTick((function(){for(var e=0;e<t.map._controls.length;e++)void 0!==t.map._controls[e].options&&void 0!==t.map._controls[e].options.showAccuracyCircle&&(t.geolocateControlIndex=e)}))},selectElement:function(e){var t,i=this.map.getSource("buildings")._data.features,o=U(i);try{for(o.s();!(t=o.n()).done;){var n=t.value;if(e===parseInt(n.properties.elementId)){if(this.selectPolygon(n),this.isDirections||this.isNavigation)this.isDirections&&this.itineraryStartTreeElt&&this.getDirections(this.itineraryStartEltId,e);else{if(!this.noZoom){var a=u()(n.geometry);this.map.fitBounds([[a[0],a[1]],[a[2],a[3]]],{padding:{top:10,bottom:30,left:20,right:20}})}var s=this;setTimeout((function(){s.showInfoBanner(n.properties.elementId,n.properties.name,n.properties.shortname,n.geometry.coordinates[0][0],n.properties.description),s.noZoom=!1}),0)}break}}}catch(r){o.e(r)}finally{o.f()}},onClickBuilding:function(e){this.expandedInfo=!1,this.isDirections||(this.noZoom=!0);var t=e.features[0],i=t.properties.typeId+"-"+t.properties.elementId;this.isDirections||this.isNavigation||this.store.commit("setSelectedTreeElement",i),this.isDirections&&(this.selectArrivalOnMap?this.store.commit("setSelectedTreeElement",i):this.selectDepartureOnMap&&this.store.commit("setItineraryStartTreeElt",i)),this.selectPolygon(t)},selectPolygon:function(e){null!==this.selectedPolygonId&&this.map.removeFeatureState({source:"buildings",id:this.selectedPolygonId}),this.selectedPolygonId=e.id,this.map.setFeatureState({source:"buildings",id:this.selectedPolygonId},{clicked:!0})},showInfoBanner:function(e,t,i,o,n,a){var s=this;document.getElementById("infoBanner").style.visibility="visible";var r="https://privamap-dev.azurewebsites.net/api/element/"+e+"/descriptions",c={method:"GET",redirect:"follow"};fetch(r,c).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),s.descGroups=e.Descriptions,s.descGroups.sort(W)})).catch((function(e){return console.log("error",e)})),this.infoName=t,this.infoShortName=i,this.setMapMaxHeight()},onClickCloseInfoBanner:function(){this.closeInfoBanner(),this.unselectElement()},closeInfoBanner:function(){this.expandedInfo=!1,document.getElementById("infoBanner").style.visibility="hidden",this.setMapMaxHeight()},unselectElement:function(){null!==this.selectedPolygonId&&this.map.removeFeatureState({source:"buildings",id:this.selectedPolygonId}),this.store.commit("setSelectedTreeElement",null)},toggleInfoDesc:function(){this.expandedInfo=!this.expandedInfo},centerMap:function(){this.map.flyTo({center:this.center,zoom:this.zoom,bearing:0,pitch:0})},addAllImages:function(){if(this.isMapLoaded)for(var e=null,t=0;t<this.imageList.length;t++)e={type:"image",url:"data:"+this.imageList[t].fileType+";base64,"+this.imageList[t].image,coordinates:[[parseFloat(this.imageList[t].topLeftLng),parseFloat(this.imageList[t].topLeftLat)],[parseFloat(this.imageList[t].topRightLng),parseFloat(this.imageList[t].topRightLat)],[parseFloat(this.imageList[t].bottomRightLng),parseFloat(this.imageList[t].bottomRightLat)],[parseFloat(this.imageList[t].bottomLeftLng),parseFloat(this.imageList[t].bottomLeftLat)]]},this.map.addSource("image"+this.imageList[t].id,e),this.map.addLayer({id:"imageLayer"+this.imageList[t].id,type:"raster",source:"image"+this.imageList[t].id,layout:{},paint:{"raster-opacity":1}})},addElementsLayer:function(){this.map.addSource("buildings",{type:"geojson",data:null});var e={id:"buildings",type:"fill",source:"buildings",layout:{},paint:{"fill-color":["case",["boolean",["feature-state","clicked"],!1],"#2f52a0","#088"],"fill-opacity":["case",["boolean",["feature-state","clicked"],!1],1,.8]}};this.map.addLayer(e),this.map.addSource("elementLabels",{type:"geojson",data:null});var t={id:"elementLabels",type:"symbol",source:"elementLabels",layout:{"icon-image":"custom-marker","text-field":["get","shortname"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,0],"text-anchor":"center"},paint:{"text-color":"#FFFFFF","text-opacity":["case",["<",["get","area"],1e4],0,1]},minzoom:13.5};this.map.addLayer(t);var i=this.map;this.map.on("mouseenter","buildings",(function(){i.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave","buildings",(function(){i.getCanvas().style.cursor=""})),this.map.on("click","buildings",this.onClickBuilding),this.map.addSource("directionPath",{type:"geojson",data:null}),this.map.addLayer({id:"directionPath",type:"line",source:"directionPath",paint:{"line-color":"#00CD9A","line-width":7,"line-opacity":1},layout:{"line-cap":"round","line-join":"round"}}),this.map.addSource("directionPathNavigation",{type:"geojson",data:null}),this.map.addLayer({id:"directionPathNavigation",type:"fill",source:"directionPathNavigation",paint:{"fill-color":"#56BFEC","fill-opacity":1},layout:{}}),this.map.addSource("navDestination",{type:"geojson",data:null});var o={id:"navDestination",type:"fill",source:"navDestination",layout:{},paint:{"fill-color":"#fca311","fill-opacity":1}};this.map.addLayer(o);var n={id:"navDestinationBorderBack",type:"line",source:"navDestination",layout:{},paint:{"line-color":"#3d405b","line-width":3},minzoom:16.5};this.map.addLayer(n);var a={id:"navDestinationBorder",type:"line",source:"navDestination",layout:{},paint:{"line-color":"#e07a5f","line-width":3,"line-dasharray":[1,2]},minzoom:16.5};this.map.addLayer(a)},loadShapes:function(e,t){var i=this;if(this.isMapLoaded&&this.isTreeSelectLoaded){var o="https://privamap-dev.azurewebsites.net/api/elementType/"+e+"/elements",n={method:"GET",redirect:"follow"};fetch(o,n).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e);for(var o=e.Elements,n={type:"FeatureCollection",features:[]},a={type:"FeatureCollection",features:[]},s=0;s<o.length;s++)for(var r=0;r<o[s].Shapes.length;r++){var c={type:"Feature",geometry:o[s].Shapes[r].json,id:o[s].Shapes[r].id,properties:{elementId:o[s].id,name:o[s].name,shortname:o[s].shortname,description:o[s].description,typeName:e.ElementTypeStyle.name,typeId:e.ElementTypeStyle.id}};n.features.push(c);var l=T()(o[s].Shapes[r].json);l.properties.area=D()(o[s].Shapes[r].json),l.properties.shortname=o[s].shortname,a.features.push(l)}if(i.shapesGeojson=n,i.map.getSource("buildings").setData(i.shapesGeojson),i.map.getSource("elementLabels").setData(a),i.setLoading(!1),t)i.selectElement(t);else{var d=u()(i.shapesGeojson);i.map.fitBounds([[d[0],d[1]],[d[2],d[3]]])}})).catch((function(e){return console.log("error",e)}))}},resizeMap:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),this.map.resize()},successGeolocation:function(e){if(this.userLocation.latitude=e.coords.latitude,this.userLocation.longitude=e.coords.longitude,!this.isNavigation&&!this.isDirections){var t=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0);t.click()}},errorGeolocation:function(){this.store.commit("setGeolocDisabled",!0),document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0).disabled=!0},setLoading:function(e,t){t&&(this.loadingText=t),this.isLoading=e,this.setMapMaxHeight()},locateMe:function(){var e=this;return d()(c.a.mark((function t(){var i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.closeInfoBanner(),e.setLoading(!0,"Recherche de la position..."),e.store.commit("setGeolocDisabled",!1),t.prev=3,t.next=6,e.getLocation();case 6:e.location=t.sent,i=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0),i.disabled=!1,i.click(),e.setLoading(!1),e.store.commit("setRetryLocate",!1),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),e.setLoading(!1),e.reloadPage();case 18:case"end":return t.stop()}}),t,null,[[3,14]])})))()},getLocation:function(){return d()(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){"geolocation"in navigator||t(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition((function(t){e(t)}),(function(e){t(e)}))})));case 1:case"end":return e.stop()}}),e)})))()},reloadPage:function(){document.location.reload()},startDirection:function(e){this.store.commit("setDirectionMode",!0);var t=this.selectedTreeElement.toString().includes("-")&&parseInt(this.selectedTreeElement)>0?parseInt(this.selectedTreeElement.split("-")[1]):this.selectedTreeElement;this.getDirections(this.itineraryStartEltId,t),this.closeInfoBanner()},getDirections:function(e,t){var i=this;if(this.isNoDirectionOnChange)this.isNoDirectionOnChange=!1;else{var o="";if(e>0&&t>0)o="https://privamap-dev.azurewebsites.net/api/route/elm_"+e+"/elm_"+t;else{navigator.geolocation.getCurrentPosition(this.successGeolocation,this.errorGeolocation);var n=0,a=t;-1===parseInt(t)&&(n=1,a=e),o="https://privamap-dev.azurewebsites.net/api/route/"+this.userLocation.latitude+"/"+this.userLocation.longitude+"/elm_"+a+"/"+n}var s={method:"GET",redirect:"follow"};fetch(o,s).then((function(e){return e.text()})).then((function(e){i.routePath=JSON.parse(e),i.map.getSource("directionPath").setData(i.routePath);var t=u()(i.routePath);i.map.fitBounds([[t[0],t[1]],[t[2],t[3]]],{padding:{top:10,bottom:30,left:20,right:20}});var o=i.routePath.features[0].geometry.coordinates;i.endMarker.setLngLat(o[o.length-1]).addTo(i.map),i.startMarker.setLngLat(o[0]).addTo(i.map)})).catch((function(e){return console.log("error",e)}))}},confirmDirections:function(){var e=this,t=Object(h["a"])(this.routePath,.003);if(this.map.getSource("directionPathNavigation").setData(t.features[0]),this.selectedElement.toString().includes("-")&&-1!==this.selectedElement){var i=this.selectedElement.toString().split("-")[1];if("2"===this.selectedElement.toString().split("-")[0]){var o,n,a=this.map.getSource("buildings")._data.features,s=U(a);try{for(s.s();!(n=s.n()).done;){var r=n.value;if(parseInt(r.properties.elementId)===parseInt(i)){o=r;break}}}catch(S){s.e(S)}finally{s.f()}this.map.getSource("navDestination").setData(o)}var c=this.routePath.features[0].geometry.coordinates,l=Object(I["point"])(c[0]),d=Object(I["point"])(c[c.length-1]),m=Object(I["lineString"])(this.routePath.features[0].geometry.coordinates),u=Object(M["a"])(l,d,m),p=k()(u);this.remainingDistance=+p.toPrecision(2),p<.5&&this.addNavigationImage(i)}var f=this.routePath.features[0].geometry.coordinates[0],v=Object(I["point"])(f),y=Object(I["point"])(this.routePath.features[0].geometry.coordinates[1]),b=g()(v,y);this.map.flyTo({center:f,zoom:17,pitch:60,bearing:b}),this.locMarker.setRotation(b),this.store.commit("setDirectionMode",!1),this.store.commit("setNavigationMode",!0),this.geolocateTimer=setInterval((function(){e.isNavigation&&navigator.geolocation.getCurrentPosition(e.successGeolocation,e.errorGeolocation)}),500),this.map._controls[this.geolocateControlIndex].options.showAccuracyCircle=!1,this.map._controls[this.geolocateControlIndex].options.showUserLocation=!1,this.map._controls[this.geolocateControlIndex]._updateMarker(),this.locMarker.setLngLat(this.startMarker.getLngLat()).addTo(this.map)},addNavigationImage:function(e){var t=this,i="https://privamap-dev.azurewebsites.net/api/element/"+e+"/navigation",o={method:"GET",redirect:"follow"};fetch(i,o).then((function(e){return e.text()})).then((function(e){console.log("result image"),console.log(e);var i=JSON.parse(e);console.log("resultJSON"),console.log(i);var o="data:"+i.fileType+";base64,"+i.image;console.log("image"),console.log(o);var n=o,a=new XMLHttpRequest;a.open("GET",n),a.addEventListener("load",(function(e){var t=e.target.response,i=new DOMParser,o=i.parseFromString(t,"image/svg+xml");o.rootElement.id="navigationImage",o.rootElement.setAttribute("preserveAspectRatio","xMidYMid meet"),document.getElementById("navImageContainer").prepend(o.rootElement)})),a.send(null),t.isNavigationImage=!0;var s=t;setTimeout((function(){s.setMapMaxHeight()}),500)})).catch((function(e){return console.log("error",e)}))},easeMarkerTo:function(e){var t=this.locMarker.getLngLat(),i=Object(I["point"])([t.lng,t.lat]),o=Object(I["point"])(e.geometry.coordinates),n=Object(I["lineString"])(this.routePath.features[0].geometry.coordinates);this.markerRoute=Object(M["a"])(i,o,n);var a=Z(this.markerRoute);if(!(a<.003)){var s=[];this.markerAnimSteps=50;for(var r=0;r<a;r+=a/this.markerAnimSteps){var c=b()(this.markerRoute,r);s.push(c.geometry.coordinates)}this.markerRoute.geometry.coordinates=s,this.counter=0,this.counter=0,this.animateMarker(this.counter)}},animateMarker:function(){this.locMarker.setLngLat(this.markerRoute.geometry.coordinates[this.counter]);var e=g()(Object(I["point"])(this.markerRoute.geometry.coordinates[this.counter>=this.markerAnimSteps?this.counter-1:this.counter]),Object(I["point"])(this.markerRoute.geometry.coordinates[this.counter>=this.markerAnimSteps?this.counter:this.counter+1]));this.locMarker.setRotation(e),this.map.easeTo({center:this.markerRoute.geometry.coordinates[this.counter],bearing:e}),this.counter<this.markerAnimSteps&&requestAnimationFrame(this.animateMarker),this.counter=this.counter+1},loadDescImages:function(e){},setMapMaxHeight:function(){var e=0,t=16;if("hidden"!==document.getElementById("infoBanner").style.visibility&&!1===this.expandedInfo||this.isLoading?(e+=54,t+=54):"hidden"!==document.getElementById("infoBanner").style.visibility&&!0===this.expandedInfo&&(e+=document.getElementById("infoBanner").offsetHeight,t+=54),this.isDirections?(e+=112,t+=112):(e+=65,t+=65),this.isNavigationImage){var i=document.getElementById("navImageContainer").offsetHeight;e+=i?i+6:150}document.getElementById("mapElement").style.height="calc(100vh - 16px - "+e+"px)",document.getElementById("mapElement").style.height="calc(var(--vh, 1vh) * 100 - 16px - "+e+"px)",document.documentElement.style.setProperty("--elth","".concat(t,"px")),this.map.resize()}}};function Z(e){var t=0;if(e.geometry.coordinates&&e.geometry.coordinates.length>0)for(var i=e.geometry.coordinates,o=0;o<i.length-1;o++){var n=Object(I["point"])(i[o]),a=Object(I["point"])(i[o+1]),s=v()(n,a);t+=s}return t}function W(e,t){return e.priority<t.priority?-1:e.priority>t.priority?1:0}var $=Y,K=i("9989"),ee=i("f09f"),te=i("cf57"),ie=i("3b73"),oe=i("4074"),ne=i("0016"),ae=i("a370"),se=i("1c1c"),re=i("eb85"),ce=Object(P["a"])($,a,s,!1,null,null,null),le=ce.exports;A()(ce,"components",{QPage:K["a"],QCard:ee["a"],QPageSticky:j["a"],QBtn:z["a"],QBanner:_["a"],QSpinnerGears:te["a"],QExpansionItem:ie["a"],QItemSection:oe["a"],QIcon:ne["a"],QCardSection:ae["a"],QList:se["a"],QSeparator:re["a"]});var de={components:{"map-component":le},name:"PageIndex"},me=de,ue=Object(P["a"])(me,o,n,!1,null,null,null);t["default"]=ue.exports;A()(ue,"components",{QPage:K["a"]})},cb43:function(e,t,i){}}]);