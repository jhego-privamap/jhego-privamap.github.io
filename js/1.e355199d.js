(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"07a4":function(e,t,i){"use strict";var o=i("2b0e"),n=i("2f62");o["default"].use(n["a"]),t["a"]=new n["a"].Store({state:{selectedTreeElement:null,isRetryLocate:!1,geolocDisabled:!1,isDirectionMode:!1,itineraryStartTreeElt:"-1",isNavigationMode:!1,isSelectDepartureOnMap:!1,isSelectArrivalOnMap:!1,isNoDirectionOnChange:!1,isTreeSelectOpen:!1},mutations:{setSelectedTreeElement:function(e,t){e.selectedTreeElement=t},setRetryLocate:function(e,t){e.isRetryLocate=t},setGeolocDisabled:function(e,t){e.geolocDisabled=t},setDirectionMode:function(e,t){e.isDirectionMode=t},setItineraryStartTreeElt:function(e,t){e.itineraryStartTreeElt=t},setNavigationMode:function(e,t){e.isNavigationMode=t},setSelectDepartureOnMap:function(e,t){e.isSelectDepartureOnMap=t},setSelectArrivalOnMap:function(e,t){e.isSelectArrivalOnMap=t},setNoDirectionOnChange:function(e,t){e.isNoDirectionOnChange=t},setTreeSelectOpen:function(e,t){e.isTreeSelectOpen=t}}})},"0e66":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"noDoubleTap",attrs:{onClick:"{e => e.preventDefault()}"}},[i("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("map-component")],1)])])},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex mapPage noDoubleTap",attrs:{sync:"",onClick:"{e => e.preventDefault()}"}},[i("geoLocErrorNotif"),i("q-card",{staticStyle:{flex:"1"},attrs:{id:"map"}},[i("MglMap",{staticStyle:{height:"calc(var(--vh, 1vh) * 100 - 81px)"},attrs:{id:"mapElement",logoPosition:"bottom-right",accessToken:e.accessToken,mapStyle:e.mapStyle,center:e.center,zoom:e.zoom,maxZoom:16.75,trackResize:!0,attributionControl:!1,antialias:!0},on:{load:e.load}},[i("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!0,showZoom:!1}}),i("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!1}}),i("MglScaleControl",{attrs:{position:"bottom-left"}}),i("MglAttributionControl",{attrs:{position:"top-left",customAttribution:"PrivaMap"}}),i("MglGeolocateControl",{attrs:{position:"bottom-right",trackUserLocation:!0}}),i("q-page-sticky",{staticClass:"mapButtonsFab mapbox-ctrl"},[i("q-btn",{attrs:{square:"",size:"17px",padding:"xs",color:"mapButton"},on:{click:function(t){return e.centerMap()}}}),i("div",{staticClass:"mapButtonsFabBottomDiv"})],1),e.isDirections&&e.routePath?i("q-page-sticky",{staticClass:"startDirectionsBtn"},[i("q-btn",{attrs:{square:"",padding:"xs",color:"mapButton",label:"Démarrer"},on:{click:function(t){return e.confirmDirections()}}})],1):e._e()],1),e.isLoading?i("q-banner",{staticClass:"text-white bg-secondary",attrs:{id:"loadingBanner","inline-actions":""},scopedSlots:e._u([{key:"avatar",fn:function(){return[i("q-spinner-gears",{attrs:{color:"white",size:"5vh"}})]},proxy:!0}],null,!1,144345241)},[e._v("\n      "+e._s(e.loadingText)+"\n      ")]):e._e(),i("q-expansion-item",{staticStyle:{visibility:"hidden"},attrs:{id:"infoBanner","expand-icon":"ion-add","header-class":"bg-primary text-white","expand-icon-toggle":""},on:{"after-show":e.setMapMaxHeight,"before-hide":e.setMapMaxHeight},scopedSlots:e._u([{key:"header",fn:function(){return[i("q-item-section",{staticClass:"col-2",attrs:{id:"infoBannerIcon"}},[i("q-icon",{attrs:{name:"location_city",color:"white",size:"1.715em"}})],1),i("q-item-section",{attrs:{id:"infoBannerText"}},[i("div",{staticClass:"row",attrs:{id:"infoBannerName"}},[e._v(e._s(e.infoName))]),i("div",{staticClass:"row",attrs:{id:"infoBannerShortName"}},[e._v(e._s(e.infoShortName))])]),i("q-item-section",{attrs:{side:""}},[i("div",{staticClass:"row items-center infoBannerBtns"},[i("q-btn",{staticClass:"infoBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:e.expandedInfo?"fas fa-chevron-down":"info_outline"},on:{click:function(t){return e.toggleInfoDesc()}}}),i("q-btn",{staticClass:"dirBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-directions"},on:{click:function(t){return e.startDirection()}}}),i("q-btn",{staticClass:"closeBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-times"},on:{click:function(t){return e.onClickCloseInfoBanner()}}})],1)])]},proxy:!0}]),model:{value:e.expandedInfo,callback:function(t){e.expandedInfo=t},expression:"expandedInfo"}},[i("q-card",[i("q-card-section",{attrs:{id:"infoContent"}},[e._v("\n          "+e._s(e.infoDescText)+"\n        ")])],1)],1)],1)],1)},s=[],r=(i("551c"),i("a34a")),c=i.n(r),l=(i("96cf"),i("c973")),d=i.n(l),h=(i("7f7f"),i("28a5"),i("6b54"),i("06db"),i("6762"),i("2fdb"),i("ac6d"),i("cb43"),i("409f")),u=i.n(h),m=i("7fd5"),p=i("aa1a"),g=i.n(p),f=i("8f76"),v=i.n(f),y=i("aeff"),S=i.n(y),b=i("feb7"),I=i("792c"),L=i.n(I),E=i("7ceb"),M=i("07a4"),T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.geolocationDisabled&&!e.noGeolocBannerReduced?i("q-banner",{staticClass:"text-white bg-red",attrs:{id:"noGeolocationBanner","inline-actions":""}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[e._v("\n        Votre position n'a pas pu être détectée. "+e._s(e.locationErrorText)+"\n      ")]),i("div",{staticClass:"col-4"},[i("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.reduceGeolocBanner}},[e._v("\n          Réduire\n        ")]),i("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.retryLocate}},[e._v("\n          Réessayer\n        ")])],1)])]):e._e(),e.noGeolocBannerReduced?i("q-page-sticky",{staticClass:"geolocErrorBtn",attrs:{position:"top-left",offset:[15,45]}},[i("q-btn",{attrs:{fab:"",icon:"gps_off",color:"red",dense:"",size:"xs",padding:"xs"},on:{click:e.expandGeolocBanner}})],1):e._e()],1)},x=[],C={name:"GeoLocErrorNotif",props:{showDialog:null},data:function(){return{store:M["a"],geolocationDisabled:!1,locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",noGeolocBannerReduced:!1}},created:function(){},computed:{isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled}},watch:{geolocDisabled:function(e){this.geolocationDisabled=e}},methods:{retryLocate:function(){this.store.commit("setRetryLocate",!0)},reduceGeolocBanner:function(){this.noGeolocBannerReduced=!0},expandGeolocBanner:function(){this.noGeolocBannerReduced=!1}}},k=C,D=i("2877"),w=i("eebe"),B=i.n(w),N=i("54e1"),O=i("9c40"),P=i("de5e"),G=Object(D["a"])(k,T,x,!1,null,null,null),R=G.exports;B()(G,"components",{QBanner:N["a"],QBtn:O["a"],QPageSticky:P["a"]});var A=i("e192"),_=i.n(A),z=i("3f3d"),j={props:["type"],components:{MglMap:z["c"],MglAttributionControl:z["a"],MglNavigationControl:z["d"],MglGeolocateControl:z["b"],MglScaleControl:z["e"],GeoLocErrorNotif:R},data:function(){return{store:M["a"],accessToken:"pk.eyJ1IjoianVseXVzcyIsImEiOiJja2E2amxxOW0wN245MnhvaHU5OHRrM25rIn0.JFf7wbHPb7AwEvXK45h47g",mapStyle:"mapbox://styles/mapbox/light-v10",zoom:13.25,center:[3.153204729474396,50.21899024777983],selectedElement:"",imageList:[],isMapLoaded:!1,shapesGeojson:null,isTreeSelectLoaded:!1,isLoading:!0,loadingText:"Chargement en cours...",locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",infoName:"",infoShortName:"",infoDescText:"Aucune information disponible.",expandedInfo:!1,itineraryStartEltId:-1,routePath:null,noZoom:!1,userPos:null,selectedElementId:null,userLocation:{latitude:null,longitude:null},geolocateControlIndex:null}},created:function(){var e=document.createElement("div");e.className="endMarkerIcon",this.endMarker=new _.a.Marker({element:e,anchor:"bottom"});var t=document.createElement("div");t.className="startMarkerIcon",this.startMarker=new _.a.Marker({element:t,anchor:"center",pitchAlignment:"map"});var i=document.createElement("div");i.className="locMarkerIcon",this.locMarker=new _.a.Marker({element:i,anchor:"center",pitchAlignment:"map",rotationAlignment:"map"});var o=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(o,"px"));var n=this;window.addEventListener("orientationchange",(function(e){setTimeout((function(){n.resizeMap()}),500)}))},beforeDestroy:function(){clearInterval(this.geolocateTimer)},computed:{selectedTreeElement:function(){return this.store.state.selectedTreeElement},isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled},isDirections:function(){return this.store.state.isDirectionMode},isNavigation:function(){return this.store.state.isNavigationMode},itineraryStartTreeElt:function(){return this.store.state.itineraryStartTreeElt},isTreeSelectOpen:function(){return this.store.state.isTreeSelectOpen},isSelectDepartureOnMap:{get:function(){return this.store.state.isSelectDepartureOnMap},set:function(e){this.store.commit("setSelectDepartureOnMap",e)}},isSelectArrivalOnMap:{get:function(){return this.store.state.isSelectArrivalOnMap},set:function(e){this.store.commit("setSelectArrivalOnMap",e)}},isNoDirectionOnChange:{get:function(){return this.store.state.isNoDirectionOnChange},set:function(e){this.store.commit("setNoDirectionOnChange",e)}}},watch:{geolocDisabled:function(e){this.setMapMaxHeight()},isRetryLocate:function(e){this.locateMe()},isTreeSelectOpen:function(e){e&&(this.expandedInfo=!1)},isDirections:function(e){e||(this.map.getSource("directionPath").setData({type:"Feature",geometry:null}),this.isNavigation||(this.endMarker.remove(),this.startMarker.remove(),this.store.commit("setSelectedTreeElement",null))),this.setMapMaxHeight()},isNavigation:function(e){e||(this.map.getSource("directionPathNavigation").setData({type:"Feature",geometry:null}),this.isDirections||(this.endMarker.remove(),this.startMarker.remove(),this.locMarker.remove(),this.map._controls[this.geolocateControlIndex].options.showAccuracyCircle=!0,this.map._controls[this.geolocateControlIndex].options.showUserLocation=!0,this.map._controls[this.geolocateControlIndex]._updateMarker(),this.store.commit("setSelectedTreeElement",null),this.map.setPitch(0),clearInterval(this.geolocateTimer))),this.setMapMaxHeight()},userLocation:{deep:!0,handler:function(e){if(this.isNavigation){var t=Object(b["point"])([e.longitude,e.latitude]),i=L()(this.routePath,t);this.easeMarkerTo(i)}}},itineraryStartTreeElt:function(e){if(e&&(this.itineraryStartEltId=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e,this.isDirections&&this.selectedTreeElement.toString().includes("-"))){var t=this.selectedTreeElement.toString().includes("-")&&parseInt(this.selectedTreeElement)>0?parseInt(this.selectedTreeElement.split("-")[1]):this.selectedTreeElement;this.getDirections(this.itineraryStartEltId,t)}},selectedTreeElement:function(e){var t=this;if(this.selectedElement=e,e&&!this.isTreeSelectLoaded&&(this.isTreeSelectLoaded=!0,this.loadShapes(e)),e&&void 0!==this.map)if(e.toString().includes("-"))if(this.expandedInfo=!1,"-1"===e){var i=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e;this.getDirections(this.itineraryStartEltId,i)}else{var o=this.map.getSource("buildings")._data.features;o.forEach((function(i){if(parseInt(e.split("-")[1])===parseInt(i.properties.elementId))if(t.selectPolygon(i),t.isDirections||t.isNavigation){if(t.isDirections&&t.itineraryStartTreeElt){var o=e.toString().includes("-")&&parseInt(e)>0?parseInt(e.split("-")[1]):e;t.getDirections(t.itineraryStartEltId,o)}}else{if(!t.noZoom){var n=u()(i.geometry);t.map.fitBounds([[n[0],n[1]],[n[2],n[3]]],{padding:{top:10,bottom:30,left:20,right:20}})}var a=t;setTimeout((function(){a.showInfoBanner(i.properties.name,i.properties.shortname,i.geometry.coordinates[0][0],i.properties.description),a.noZoom=!1}),0)}}))}else{if(this.shapesGeojson&&!this.isDirections&&!this.isNavigation){var n=u()(this.shapesGeojson);this.map.fitBounds([[n[0],n[1]],[n[2],n[3]]])}this.closeInfoBanner()}}},methods:{load:function(e){var t=this,i=e.map;this.map=i;var o=this;setTimeout((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(o.successGeolocation,o.errorGeolocation):this.store.commit("setGeolocDisabled",!0)}),1e3),this.map.addSource("GIGN",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GIGN",type:"raster",source:"GIGN",minzoom:0,maxzoom:20}),this.map.addSource("GeoportailFrance.PlanIGN.Uni",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GeoportailFrance.PlanIGN.Uni",type:"raster",source:"GeoportailFrance.PlanIGN.Uni",minzoom:0,maxzoom:20}),this.isMapLoaded=!0,this.setLoading(!0,"Chargement des images...");var n="https://privamap-dev.azurewebsites.net/api/imageLayer/all",a={method:"GET",redirect:"follow"};fetch(n,a).then((function(e){return e.text()})).then((function(e){JSON.parse(e).ImageLayers&&(t.imageList=JSON.parse(e).ImageLayers),t.addAllImages(),t.addElementsLayer(),t.setLoading(!0,"Chargement des éléments..."),t.loadShapes(t.selectedElement)})).catch((function(e){return console.log("error",e)})),this.$nextTick((function(){for(var e=0;e<t.map._controls.length;e++)void 0!==t.map._controls[e].options&&void 0!==t.map._controls[e].options.showAccuracyCircle&&(t.geolocateControlIndex=e)}))},onClickBuilding:function(e){this.expandedInfo=!1,this.isDirections||(this.noZoom=!0);var t=e.features[0],i=t.properties.typeId+"-"+t.properties.elementId;this.isDirections||this.isNavigation||this.store.commit("setSelectedTreeElement",i),this.isDirections&&(this.isSelectArrivalOnMap?this.store.commit("setSelectedTreeElement",i):this.isSelectDepartureOnMap&&this.store.commit("setItineraryStartTreeElt",i)),this.selectPolygon(t)},selectPolygon:function(e){null!==this.selectedPolygonId&&this.map.removeFeatureState({source:"buildings",id:this.selectedPolygonId}),this.selectedPolygonId=e.id,this.map.setFeatureState({source:"buildings",id:this.selectedPolygonId},{clicked:!0})},showInfoBanner:function(e,t,i,o,n){document.getElementById("infoBanner").style.visibility="visible",this.infoName=e,this.infoShortName=t,this.infoDescText=o||"Aucune information disponible",this.setMapMaxHeight()},onClickCloseInfoBanner:function(){this.closeInfoBanner(),this.unselectElement()},closeInfoBanner:function(){this.expandedInfo=!1,document.getElementById("infoBanner").style.visibility="hidden",this.setMapMaxHeight()},unselectElement:function(){null!==this.selectedPolygonId&&this.map.removeFeatureState({source:"buildings",id:this.selectedPolygonId}),this.store.commit("setSelectedTreeElement",null)},toggleInfoDesc:function(){this.expandedInfo=!this.expandedInfo},centerMap:function(){this.map.flyTo({center:this.center,zoom:this.zoom,bearing:0,pitch:0})},addAllImages:function(){if(this.isMapLoaded)for(var e=null,t=0;t<this.imageList.length;t++)e={type:"image",url:"data:"+this.imageList[t].fileType+";base64,"+this.imageList[t].image,coordinates:[[parseFloat(this.imageList[t].topLeftLng),parseFloat(this.imageList[t].topLeftLat)],[parseFloat(this.imageList[t].topRightLng),parseFloat(this.imageList[t].topRightLat)],[parseFloat(this.imageList[t].bottomRightLng),parseFloat(this.imageList[t].bottomRightLat)],[parseFloat(this.imageList[t].bottomLeftLng),parseFloat(this.imageList[t].bottomLeftLat)]]},this.map.addSource("image"+this.imageList[t].id,e),this.map.addLayer({id:"imageLayer"+this.imageList[t].id,type:"raster",source:"image"+this.imageList[t].id,layout:{},paint:{"raster-opacity":1}})},addElementsLayer:function(){this.map.addSource("buildings",{type:"geojson",data:null});var e={id:"buildings",type:"fill",source:"buildings",layout:{},paint:{"fill-color":["case",["boolean",["feature-state","clicked"],!1],"#2f52a0","#088"],"fill-opacity":["case",["boolean",["feature-state","clicked"],!1],1,.8]}};this.map.addLayer(e);var t=this.map;this.map.on("mouseenter","buildings",(function(){t.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave","buildings",(function(){t.getCanvas().style.cursor=""})),this.map.on("click","buildings",this.onClickBuilding),this.map.addSource("directionPath",{type:"geojson",data:null}),this.map.addLayer({id:"directionPath",type:"line",source:"directionPath",paint:{"line-color":"#00CD9A","line-width":7,"line-opacity":1},layout:{"line-cap":"round","line-join":"round"}}),this.map.addSource("directionPathNavigation",{type:"geojson",data:null}),this.map.addLayer({id:"directionPathNavigation",type:"fill",source:"directionPathNavigation",paint:{"fill-color":"#56BFEC","fill-opacity":1},layout:{}})},loadShapes:function(e){var t=this;if(this.isMapLoaded&&this.isTreeSelectLoaded){var i="https://privamap-dev.azurewebsites.net/api/elementType/"+e+"/elements",o={method:"GET",redirect:"follow"};fetch(i,o).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e);for(var i=e.Elements,o={type:"FeatureCollection",features:[]},n=0;n<i.length;n++)for(var a=0;a<i[n].Shapes.length;a++){var s={type:"Feature",geometry:i[n].Shapes[a].json,id:i[n].Shapes[a].id,properties:{elementId:i[n].id,name:i[n].name,shortname:i[n].shortname,description:i[n].description,typeName:e.ElementTypeStyle.name,typeId:e.ElementTypeStyle.id}};o.features.push(s)}t.shapesGeojson=o,t.map.getSource("buildings").setData(t.shapesGeojson),t.setLoading(!1)})).catch((function(e){return console.log("error",e)}))}},resizeMap:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),this.map.resize()},successGeolocation:function(e){if(this.userLocation.latitude=e.coords.latitude,this.userLocation.longitude=e.coords.longitude,!this.isNavigation&&!this.isDirections){var t=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0);t.click()}},errorGeolocation:function(){this.store.commit("setGeolocDisabled",!0),document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0).disabled=!0},setLoading:function(e,t){t&&(this.loadingText=t),this.isLoading=e,this.setMapMaxHeight()},locateMe:function(){var e=this;return d()(c.a.mark((function t(){var i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.closeInfoBanner(),e.setLoading(!0,"Recherche de la position..."),e.store.commit("setGeolocDisabled",!1),t.prev=3,t.next=6,e.getLocation();case 6:e.location=t.sent,i=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0),i.disabled=!1,i.click(),e.setLoading(!1),e.store.commit("setRetryLocate",!1),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),e.setLoading(!1),e.reloadPage();case 18:case"end":return t.stop()}}),t,null,[[3,14]])})))()},getLocation:function(){return d()(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){"geolocation"in navigator||t(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition((function(t){e(t)}),(function(e){t(e)}))})));case 1:case"end":return e.stop()}}),e)})))()},reloadPage:function(){document.location.reload()},startDirection:function(e){this.store.commit("setDirectionMode",!0);var t=this.selectedTreeElement.toString().includes("-")&&parseInt(this.selectedTreeElement)>0?parseInt(this.selectedTreeElement.split("-")[1]):this.selectedTreeElement;this.getDirections(this.itineraryStartEltId,t),this.closeInfoBanner()},getDirections:function(e,t){var i=this;if(this.isNoDirectionOnChange)this.isNoDirectionOnChange=!1;else{var o="";if(e>0&&t>0)o="https://privamap-dev.azurewebsites.net/api/route/elm_"+e+"/elm_"+t;else{navigator.geolocation.getCurrentPosition(this.successGeolocation,this.errorGeolocation);var n=0,a=t;-1===parseInt(t)&&(n=1,a=e),o="https://privamap-dev.azurewebsites.net/api/route/"+this.userLocation.latitude+"/"+this.userLocation.longitude+"/elm_"+a+"/"+n}var s={method:"GET",redirect:"follow"};fetch(o,s).then((function(e){return e.text()})).then((function(e){i.routePath=JSON.parse(e),i.map.getSource("directionPath").setData(i.routePath);var t=u()(i.routePath);i.map.fitBounds([[t[0],t[1]],[t[2],t[3]]],{padding:{top:10,bottom:30,left:20,right:20}});var o=i.routePath.features[0].geometry.coordinates;i.endMarker.setLngLat(o[o.length-1]).addTo(i.map),i.startMarker.setLngLat(o[0]).addTo(i.map)})).catch((function(e){return console.log("error",e)}))}},confirmDirections:function(){var e=this,t=Object(m["a"])(this.routePath,.003);this.map.getSource("directionPathNavigation").setData(t.features[0]);var i=this.routePath.features[0].geometry.coordinates[0],o=Object(b["point"])(i),n=Object(b["point"])(this.routePath.features[0].geometry.coordinates[1]),a=g()(o,n);this.map.flyTo({center:i,zoom:17,pitch:60,bearing:a}),this.locMarker.setRotation(a),this.store.commit("setDirectionMode",!1),this.store.commit("setNavigationMode",!0),this.geolocateTimer=setInterval((function(){e.isNavigation&&navigator.geolocation.getCurrentPosition(e.successGeolocation,e.errorGeolocation)}),500),this.map._controls[this.geolocateControlIndex].options.showAccuracyCircle=!1,this.map._controls[this.geolocateControlIndex].options.showUserLocation=!1,this.map._controls[this.geolocateControlIndex]._updateMarker(),this.locMarker.setLngLat(this.startMarker.getLngLat()).addTo(this.map)},easeMarkerTo:function(e){var t=this.locMarker.getLngLat(),i=Object(b["point"])([t.lng,t.lat]),o=Object(b["point"])(e.geometry.coordinates),n=Object(b["lineString"])(this.routePath.features[0].geometry.coordinates);this.markerRoute=Object(E["a"])(i,o,n);var a=q(this.markerRoute);if(!(a<.003)){var s=[];this.markerAnimSteps=50;for(var r=0;r<a;r+=a/this.markerAnimSteps){var c=S()(this.markerRoute,r);s.push(c.geometry.coordinates)}this.markerRoute.geometry.coordinates=s,this.counter=0,this.counter=0,this.animateMarker(this.counter)}},animateMarker:function(){this.locMarker.setLngLat(this.markerRoute.geometry.coordinates[this.counter]);var e=g()(Object(b["point"])(this.markerRoute.geometry.coordinates[this.counter>=this.markerAnimSteps?this.counter-1:this.counter]),Object(b["point"])(this.markerRoute.geometry.coordinates[this.counter>=this.markerAnimSteps?this.counter:this.counter+1]));this.locMarker.setRotation(e),this.map.easeTo({center:this.markerRoute.geometry.coordinates[this.counter],bearing:e}),this.counter<this.markerAnimSteps&&requestAnimationFrame(this.animateMarker),this.counter=this.counter+1},setMapMaxHeight:function(){var e=0;"hidden"!==document.getElementById("infoBanner").style.visibility&&!1===this.expandedInfo||this.isLoading?e+=54:"hidden"!==document.getElementById("infoBanner").style.visibility&&!0===this.expandedInfo&&(e+=document.getElementById("infoBanner").offsetHeight),this.isDirections?e+=112:e+=65,document.getElementById("mapElement").style.height="calc(100vh - 16px - "+e+"px)",document.getElementById("mapElement").style.height="calc(var(--vh, 1vh) * 100 - 16px - "+e+"px)",this.map.resize()}}};function q(e){var t=0;if(e.geometry.coordinates&&e.geometry.coordinates.length>0)for(var i=e.geometry.coordinates,o=0;o<i.length-1;o++){var n=Object(b["point"])(i[o]),a=Object(b["point"])(i[o+1]),s=v()(n,a);t+=s}return t}var F=j,H=i("9989"),Q=i("f09f"),J=i("cf57"),U=i("3b73"),V=i("4074"),X=i("0016"),Y=i("a370"),Z=Object(D["a"])(F,a,s,!1,null,null,null),W=Z.exports;B()(Z,"components",{QPage:H["a"],QCard:Q["a"],QPageSticky:P["a"],QBtn:O["a"],QBanner:N["a"],QSpinnerGears:J["a"],QExpansionItem:U["a"],QItemSection:V["a"],QIcon:X["a"],QCardSection:Y["a"]});var $={components:{"map-component":W},name:"PageIndex"},K=$,ee=Object(D["a"])(K,o,n,!1,null,null,null);t["default"]=ee.exports;B()(ee,"components",{QPage:H["a"]})},cb43:function(e,t,i){}}]);