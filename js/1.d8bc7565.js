(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"07a4":function(e,t,o){"use strict";var i=o("2b0e"),n=o("2f62");i["default"].use(n["a"]),t["a"]=new n["a"].Store({state:{selectedTreeElement:null,isRetryLocate:!1,geolocDisabled:!1,isDirectionMode:!1,itineraryStartTreeElt:"-1",isNavigationMode:!1,isSelectDepartureOnMap:!1,isSelectArrivalOnMap:!1},mutations:{setSelectedTreeElement:function(e,t){console.log("setSelectedTreeElement triggered with"),console.log(t),e.selectedTreeElement=t},setRetryLocate:function(e,t){console.log("setRetryLocate triggered with"),console.log(t),e.isRetryLocate=t},setGeolocDisabled:function(e,t){console.log("setGeolocDisabled triggered with"),console.log(t),e.geolocDisabled=t},setDirectionMode:function(e,t){console.log("setDirectionMode triggered with"),console.log(t),e.isDirectionMode=t},setItineraryStartTreeElt:function(e,t){console.log("setItineraryStartTreeElt triggered with"),console.log(t),e.itineraryStartTreeElt=t},setNavigationMode:function(e,t){console.log("setNavigationMode triggered with"),console.log(t),e.isNavigationMode=t},setSelectDepartureOnMap:function(e,t){console.log("setSelectDepartureOnMap triggered with"),console.log(t),e.isSelectDepartureOnMap=t},setSelectArrivalOnMap:function(e,t){console.log("setSelectArrivalOnMap triggered with"),console.log(t),e.isSelectArrivalOnMap=t}}})},"0e66":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"noDoubleTap",attrs:{onClick:"{e => e.preventDefault()}"}},[o("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("map-component")],1)])])},n=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"flex mapPage noDoubleTap",attrs:{sync:"",onClick:"{e => e.preventDefault()}"}},[o("geoLocErrorNotif"),o("q-card",{staticStyle:{flex:"1"},attrs:{id:"map"}},[o("MglMap",{staticStyle:{height:"calc(var(--vh, 1vh) * 100 - 81px)"},attrs:{id:"mapElement",logoPosition:"bottom-right",accessToken:e.accessToken,mapStyle:e.mapStyle,center:e.center,zoom:e.zoom,maxZoom:16.75,trackResize:!0,attributionControl:!1},on:{load:e.load}},[o("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!0,showZoom:!1}}),o("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!1}}),o("MglScaleControl",{attrs:{position:"bottom-left"}}),o("MglAttributionControl",{attrs:{position:"top-left",customAttribution:"PrivaMap"}}),o("MglGeolocateControl",{attrs:{position:"bottom-right",trackUserLocation:!0}}),o("q-page-sticky",{staticClass:"mapButtonsFab mapbox-ctrl"},[o("q-btn",{attrs:{square:"",padding:"xs",color:"mapButton"},on:{click:function(t){return e.centerMap()}}}),o("div",{staticClass:"mapButtonsFabBottomDiv"})],1),e.isDirections&&e.routePath?o("q-page-sticky",{staticClass:"startDirectionsBtn"},[o("q-btn",{attrs:{square:"",padding:"xs",color:"mapButton",label:"Démarrer"},on:{click:function(t){return e.confirmDirections()}}})],1):e._e()],1),e.isLoading?o("q-banner",{staticClass:"text-white bg-secondary",attrs:{id:"loadingBanner","inline-actions":""},scopedSlots:e._u([{key:"avatar",fn:function(){return[o("q-spinner-gears",{attrs:{color:"white",size:"5vh"}})]},proxy:!0}],null,!1,144345241)},[e._v("\n      "+e._s(e.loadingText)+"\n      ")]):e._e(),o("q-expansion-item",{staticStyle:{visibility:"hidden"},attrs:{id:"infoBanner","expand-icon":"ion-add","header-class":"bg-primary text-white","expand-icon-toggle":""},on:{"after-show":e.setMapMaxHeight,"before-hide":e.setMapMaxHeight},scopedSlots:e._u([{key:"header",fn:function(){return[o("q-item-section",{staticClass:"col-2",attrs:{id:"infoBannerIcon"}},[o("q-icon",{attrs:{name:"location_city",color:"white",size:"1.715em"}})],1),o("q-item-section",{attrs:{id:"infoBannerText"}},[o("div",{staticClass:"row",attrs:{id:"infoBannerName"}},[e._v(e._s(e.infoName))]),o("div",{staticClass:"row",attrs:{id:"infoBannerShortName"}},[e._v(e._s(e.infoShortName))])]),o("q-item-section",{attrs:{side:""}},[o("div",{staticClass:"row items-center infoBannerBtns"},[o("q-btn",{staticClass:"infoBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:e.expandedInfo?"fas fa-chevron-down":"info_outline"},on:{click:function(t){return e.toggleInfoDesc()}}}),o("q-btn",{staticClass:"dirBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-directions"},on:{click:function(t){return e.startDirection()}}}),o("q-btn",{staticClass:"closeBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-times"},on:{click:function(t){return e.closeInfoBanner()}}})],1)])]},proxy:!0}]),model:{value:e.expandedInfo,callback:function(t){e.expandedInfo=t},expression:"expandedInfo"}},[o("q-card",[o("q-card-section",{attrs:{id:"infoContent"}},[e._v("\n          "+e._s(e.infoDescText)+"\n        ")])],1)],1)],1)],1)},s=[],r=(o("551c"),o("a34a")),l=o.n(r),c=(o("96cf"),o("c973")),d=o.n(c),u=(o("7f7f"),o("28a5"),o("6b54"),o("06db"),o("6762"),o("2fdb"),o("ac6d"),o("cb43"),o("409f")),m=o.n(u),p=o("7fd5"),h=o("07a4"),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.geolocationDisabled&&!e.noGeolocBannerReduced?o("q-banner",{staticClass:"text-white bg-red",attrs:{id:"noGeolocationBanner","inline-actions":""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-8"},[e._v("\n        Votre position n'a pas pu être détectée. "+e._s(e.locationErrorText)+"\n      ")]),o("div",{staticClass:"col-4"},[o("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.reduceGeolocBanner}},[e._v("\n          Réduire\n        ")]),o("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.retryLocate}},[e._v("\n          Réessayer\n        ")])],1)])]):e._e(),e.noGeolocBannerReduced?o("q-page-sticky",{staticClass:"geolocErrorBtn",attrs:{position:"top-left",offset:[15,45]}},[o("q-btn",{attrs:{fab:"",icon:"gps_off",color:"red",dense:"",size:"xs",padding:"xs"},on:{click:e.expandGeolocBanner}})],1):e._e()],1)},f=[],v={name:"GeoLocErrorNotif",props:{showDialog:null},data:function(){return{store:h["a"],geolocationDisabled:!1,locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",noGeolocBannerReduced:!1}},created:function(){},computed:{isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled}},watch:{geolocDisabled:function(e){this.geolocationDisabled=e}},methods:{retryLocate:function(){this.store.commit("setRetryLocate",!0)},reduceGeolocBanner:function(){this.noGeolocBannerReduced=!0},expandGeolocBanner:function(){this.noGeolocBannerReduced=!1}}},y=v,S=o("2877"),b=o("eebe"),L=o.n(b),M=o("54e1"),E=o("9c40"),x=o("de5e"),I=Object(S["a"])(y,g,f,!1,null,null,null),D=I.exports;L()(I,"components",{QBanner:M["a"],QBtn:E["a"],QPageSticky:x["a"]});var w=o("e192"),T=o.n(w),B=o("3f3d"),C={props:["type"],components:{MglMap:B["c"],MglAttributionControl:B["a"],MglNavigationControl:B["d"],MglGeolocateControl:B["b"],MglScaleControl:B["e"],GeoLocErrorNotif:D},data:function(){return{store:h["a"],accessToken:"pk.eyJ1IjoianVseXVzcyIsImEiOiJja2E2amxxOW0wN245MnhvaHU5OHRrM25rIn0.JFf7wbHPb7AwEvXK45h47g",mapStyle:"mapbox://styles/mapbox/light-v10",zoom:13.25,center:[3.153204729474396,50.21899024777983],selectedElement:"1",imageList:[],isMapLoaded:!1,shapesGeojson:null,isTreeSelectLoaded:!1,isLoading:!0,loadingText:"Chargement en cours...",locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",infoName:"",infoShortName:"",infoDescText:"Aucune information disponible.",expandedInfo:!1,timer:null,itineraryStartEltId:-1,routePath:null,noZoom:!1,userPos:null}},created:function(){this.$q.localStorage.set("objectId",""),this.selectedElement="";var e=document.createElement("div");e.className="endMarkerIcon",this.endMarker=new T.a.Marker({element:e,anchor:"bottom"});var t=document.createElement("div");t.className="startMarkerIcon",this.startMarker=new T.a.Marker({element:t,anchor:"center",pitchAlignment:"map"});var o=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(o,"px"));var i=this;window.addEventListener("orientationchange",(function(e){setTimeout((function(){i.resizeMap()}),500)}))},beforeDestroy:function(){clearInterval(this.timer)},computed:{selectedTreeElement:function(){return this.store.state.selectedTreeElement},isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled},isDirections:function(){return this.store.state.isDirectionMode},isNavigation:function(){return this.store.state.isNavigationMode},itineraryStartTreeElt:function(){return this.store.state.itineraryStartTreeElt},isSelectDepartureOnMap:{get:function(){return this.store.state.isSelectDepartureOnMap},set:function(e){this.store.commit("setSelectDepartureOnMap",e)}},isSelectArrivalOnMap:{get:function(){return this.store.state.isSelectArrivalOnMap},set:function(e){this.store.commit("setSelectArrivalOnMap",e)}}},watch:{geolocDisabled:function(e){this.setMapMaxHeight()},isRetryLocate:function(e){this.locateMe()},isDirections:function(e){e||(this.map.getSource("directionPath").setData({type:"Feature",geometry:null}),this.isNavigation||(this.endMarker.remove(),this.startMarker.remove(),this.store.commit("setSelectedTreeElement",null))),this.setMapMaxHeight()},isNavigation:function(e){e||(this.map.getSource("directionPathNavigation").setData({type:"Feature",geometry:null}),this.isDirections||(this.endMarker.remove(),this.startMarker.remove(),this.store.commit("setSelectedTreeElement",null))),this.setMapMaxHeight()},itineraryStartTreeElt:function(e){e&&(this.itineraryStartEltId=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e,this.isDirections&&this.selectedTreeElement.toString().includes("-")&&this.getDirections(this.itineraryStartEltId,parseInt(this.selectedTreeElement.split("-")[1])))},selectedTreeElement:function(e){var t=this;if(console.log("selectedTreeElement watch"),console.log(e),this.selectedElement=e,e&&!this.isTreeSelectLoaded&&(this.isTreeSelectLoaded=!0,this.loadShapes(e)),e&&!(e<=0)&&void 0!==this.map)if(e.toString().includes("-"))this.expandedInfo=!1,this.elmts.forEach((function(o){if(parseInt(e.split("-")[1])===o.id){var i=o.Shapes[0].json;if(i.properties={elementId:o.id},t.map.getSource("selectedBuildings").setData(i),t.isDirections||t.isNavigation){if(t.isDirections&&t.itineraryStartTreeElt.toString().includes("-")){var n=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e;t.getDirections(t.itineraryStartEltId,n)}}else{if(!t.noZoom){var a=m()(o.Shapes[0].json);t.map.fitBounds([[a[0],a[1]],[a[2],a[3]]],{padding:{top:10,bottom:30,left:20,right:20}})}var s=t;setTimeout((function(){s.showInfoBanner(o.name,o.shortname,o.Shapes[0].json.coordinates[0][0],o.description),s.noZoom=!1}),0)}}}));else{if(this.shapesGeojson&&!this.isDirections&&!this.isNavigation){var o=m()(this.shapesGeojson);this.map.fitBounds([[o[0],o[1]],[o[2],o[3]]])}this.closeInfoBanner()}}},methods:{load:function(e){var t=this,o=e.map;this.map=o;var i=this;setTimeout((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(i.successGeolocation,i.errorGeolocation):this.store.commit("setGeolocDisabled",!0)}),1e3),this.map.addSource("GIGN",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GIGN",type:"raster",source:"GIGN",minzoom:0,maxzoom:20}),this.isMapLoaded=!0,this.setLoading(!0,"Chargement des images...");var n="https://privamap-dev.azurewebsites.net/api/imageLayer/all",a={method:"GET",redirect:"follow"};fetch(n,a).then((function(e){return e.text()})).then((function(e){JSON.parse(e).ImageLayers&&(t.imageList=JSON.parse(e).ImageLayers),t.addAllImages(),t.addElementsLayer(),t.setLoading(!0,"Chargement des éléments..."),t.loadShapes(t.selectedElement)})).catch((function(e){return console.log("error",e)}))},onClickBuilding:function(e){this.expandedInfo=!1,this.noZoom=!0;var t=e.features[0],o=t.properties.typeId+"-"+t.properties.elementId;this.isDirections||this.isNavigation||this.store.commit("setSelectedTreeElement",o),this.isDirections&&(this.isSelectArrivalOnMap?this.store.commit("setSelectedTreeElement",o):this.isSelectDepartureOnMap&&this.store.commit("setItineraryStartTreeElt",o)),this.map.getSource("selectedBuildings").setData(t)},showInfoBanner:function(e,t,o,i,n){document.getElementById("infoBanner").style.visibility="visible",this.infoName=e,this.infoShortName=t,this.infoDescText=i||"Aucune information disponible",this.setMapMaxHeight()},closeInfoBanner:function(){this.expandedInfo=!1,document.getElementById("infoBanner").style.visibility="hidden",this.setMapMaxHeight(),this.map.getSource("selectedBuildings").setData({type:"Feature",geometry:null}),this.store.commit("setSelectedTreeElement",null)},toggleInfoDesc:function(){this.expandedInfo=!this.expandedInfo},centerMap:function(){this.map.flyTo({center:this.center,zoom:this.zoom,bearing:0,pitch:0})},addAllImages:function(){if(this.isMapLoaded)for(var e=null,t=0;t<this.imageList.length;t++)e={type:"image",url:"data:"+this.imageList[t].fileType+";base64,"+this.imageList[t].image,coordinates:[[parseFloat(this.imageList[t].topLeftLng),parseFloat(this.imageList[t].topLeftLat)],[parseFloat(this.imageList[t].topRightLng),parseFloat(this.imageList[t].topRightLat)],[parseFloat(this.imageList[t].bottomRightLng),parseFloat(this.imageList[t].bottomRightLat)],[parseFloat(this.imageList[t].bottomLeftLng),parseFloat(this.imageList[t].bottomLeftLat)]]},this.map.addSource("image"+this.imageList[t].id,e),this.map.addLayer({id:"imageLayer"+this.imageList[t].id,type:"raster",source:"image"+this.imageList[t].id,layout:{},paint:{"raster-opacity":1}})},addElementsLayer:function(){this.map.addSource("buildings",{type:"geojson",data:null});var e={id:"buildings",type:"fill",source:"buildings",layout:{},paint:{"fill-color":"#088","fill-opacity":.8}};this.map.addLayer(e);var t=this.map;this.map.on("mouseenter","buildings",(function(){t.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave","buildings",(function(){t.getCanvas().style.cursor=""})),this.map.on("click","buildings",this.onClickBuilding),this.map.addSource("selectedBuildings",{type:"geojson",data:null}),this.map.addLayer({id:"selectedBuildings",type:"fill",source:"selectedBuildings",layout:{},paint:{"fill-color":"#2f52a0","fill-opacity":1}}),this.map.addSource("directionPath",{type:"geojson",data:null}),this.map.addLayer({id:"directionPath",type:"line",source:"directionPath",paint:{"line-color":"#00CD9A","line-width":7,"line-opacity":1},layout:{"line-cap":"round","line-join":"round"}}),this.map.addSource("directionPathNavigation",{type:"geojson",data:null}),this.map.addLayer({id:"directionPathNavigation",type:"fill",source:"directionPathNavigation",paint:{"fill-color":"#56BFEC","fill-opacity":1},layout:{}})},loadShapes:function(e){var t=this;if(this.isMapLoaded&&this.isTreeSelectLoaded){var o="https://privamap-dev.azurewebsites.net/api/elementType/"+e+"/elements",i={method:"GET",redirect:"follow"};fetch(o,i).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e);for(var o=e.Elements,i={type:"FeatureCollection",features:[]},n=0;n<o.length;n++)for(var a=0;a<o[n].Shapes.length;a++){var s={type:"Feature",geometry:o[n].Shapes[a].json,id:o[n].Shapes[a].id,properties:{elementId:o[n].id,name:o[n].name,shortname:o[n].shortname,description:o[n].description,typeName:e.ElementTypeStyle.name,typeId:e.ElementTypeStyle.id}};i.features.push(s)}t.elmts=o,t.shapesGeojson=i,t.map.getSource("buildings").setData(t.shapesGeojson),t.setLoading(!1)})).catch((function(e){return console.log("error",e)}))}},resizeMap:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),this.map.resize()},successGeolocation:function(e){this.userPos=[e.coords.longitude,e.coords.latitude];var t=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0);t.click()},errorGeolocation:function(){console.log("errorGeolocation"),this.store.commit("setGeolocDisabled",!0),document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0).disabled=!0},setLoading:function(e,t){t&&(this.loadingText=t),this.isLoading=e,this.setMapMaxHeight()},locateMe:function(){var e=this;return d()(l.a.mark((function t(){var o;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.closeInfoBanner(),e.setLoading(!0,"Recherche de la position..."),e.store.commit("setGeolocDisabled",!1),t.prev=3,t.next=6,e.getLocation();case 6:e.location=t.sent,o=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0),o.disabled=!1,o.click(),e.setLoading(!1),e.store.commit("setRetryLocate",!1),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),e.setLoading(!1),e.reloadPage();case 18:case"end":return t.stop()}}),t,null,[[3,14]])})))()},getLocation:function(){return d()(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){"geolocation"in navigator||t(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition((function(t){e(t)}),(function(e){t(e)}))})));case 1:case"end":return e.stop()}}),e)})))()},reloadPage:function(){document.location.reload()},startDirection:function(e){var t=this.map.getSource("selectedBuildings")._data;console.log("selectedFeature"),console.log(t),this.store.commit("setDirectionMode",!0),this.getDirections(this.itineraryStartEltId,t.properties.elementId),this.closeInfoBanner()},getDirections:function(e,t){var o=this,i="";e>0&&t>0?i="https://privamap-dev.azurewebsites.net/api/route/elm_"+e+"/elm_"+t:(navigator.geolocation.getCurrentPosition(this.successGeolocation,this.errorGeolocation),t=-1===e?t:e,i="https://privamap-dev.azurewebsites.net/api/route/"+this.userPos[1]+"/"+this.userPos[0]+"/elm_"+t);var n={method:"GET",redirect:"follow"};fetch(i,n).then((function(e){return e.text()})).then((function(e){console.log("result"),console.log(e),o.routePath=JSON.parse(e),o.map.getSource("directionPath").setData(o.routePath);var t=m()(o.routePath);o.map.fitBounds([[t[0],t[1]],[t[2],t[3]]],{padding:{top:10,bottom:30,left:20,right:20}}),console.log("this.routePath"),console.log(o.routePath);var i=o.routePath.features[0].geometry.coordinates;console.log("lineCoords[lineCoords.length - 1]"),console.log(i[i.length-1]),o.endMarker.setLngLat(i[i.length-1]).addTo(o.map),o.startMarker.setLngLat(i[0]).addTo(o.map)})).catch((function(e){return console.log("error",e)}))},confirmDirections:function(){console.log("this.routePath"),console.log(this.routePath);var e=Object(p["a"])(this.routePath,.004);console.log("bufferedLine"),console.log(e),this.map.getSource("directionPathNavigation").setData(e.features[0]);var t=this.routePath.features[0].geometry.coordinates[0];this.map.flyTo({center:t,zoom:17}),this.store.commit("setDirectionMode",!1),this.store.commit("setNavigationMode",!0)},setMapMaxHeight:function(){var e=0;"hidden"!==document.getElementById("infoBanner").style.visibility&&!1===this.expandedInfo||this.isLoading?e+=54:"hidden"!==document.getElementById("infoBanner").style.visibility&&!0===this.expandedInfo&&(e+=document.getElementById("infoBanner").offsetHeight),this.isDirections?e+=112:e+=65,document.getElementById("mapElement").style.height="calc(100vh - 16px - "+e+"px)",document.getElementById("mapElement").style.height="calc(var(--vh, 1vh) * 100 - 16px - "+e+"px)",this.map.resize()}}},N=C,G=o("9989"),k=o("f09f"),P=o("cf57"),R=o("3b73"),O=o("4074"),_=o("0016"),z=o("a370"),q=Object(S["a"])(N,a,s,!1,null,null,null),A=q.exports;L()(q,"components",{QPage:G["a"],QCard:k["a"],QPageSticky:x["a"],QBtn:E["a"],QBanner:M["a"],QSpinnerGears:P["a"],QExpansionItem:R["a"],QItemSection:O["a"],QIcon:_["a"],QCardSection:z["a"]});var j={components:{"map-component":A},name:"PageIndex"},F=j,H=Object(S["a"])(F,i,n,!1,null,null,null);t["default"]=H.exports;L()(H,"components",{QPage:G["a"]})},cb43:function(e,t,o){}}]);