(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"07a4":function(e,t,o){"use strict";var n=o("2b0e"),i=o("2f62");n["default"].use(i["a"]),t["a"]=new i["a"].Store({state:{selectedTreeElement:null,isRetryLocate:!1,geolocDisabled:!1,isDirectionMode:!1},mutations:{setSelectedTreeElement:function(e,t){console.log("setSelectedTreeElement triggered with"),console.log(t),e.selectedTreeElement=t},setRetryLocate:function(e,t){console.log("setRetryLocate triggered with"),console.log(t),e.isRetryLocate=t},setGeolocDisabled:function(e,t){console.log("setGeolocDisabled triggered with"),console.log(t),e.geolocDisabled=t},setDirectionMode:function(e,t){console.log("setDirectionMode triggered with"),console.log(t),e.isDirectionMode=t}}})},"0e66":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"noDoubleTap",attrs:{onClick:"{e => e.preventDefault()}"}},[o("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("map-component")],1)])])},i=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"flex mapPage noDoubleTap",attrs:{sync:"",onClick:"{e => e.preventDefault()}"}},[o("geoLocErrorNotif"),o("q-card",{staticStyle:{flex:"1"},attrs:{id:"map"}},[o("MglMap",{staticStyle:{height:"calc(var(--vh, 1vh) * 100 - 81px)"},attrs:{id:"mapElement",logoPosition:"bottom-right",accessToken:e.accessToken,mapStyle:e.mapStyle,center:e.center,zoom:e.zoom,maxZoom:16.75,trackResize:!0,attributionControl:!1},on:{load:e.load}},[o("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!0,showZoom:!1}}),o("MglNavigationControl",{attrs:{color:"mapButton",position:"top-right",showCompass:!1}}),o("MglScaleControl",{attrs:{position:"bottom-left"}}),o("MglAttributionControl",{attrs:{position:"top-left",customAttribution:"PrivaMap"}}),o("MglGeolocateControl",{attrs:{position:"bottom-right",trackUserLocation:!0}}),o("q-page-sticky",{staticClass:"mapButtonsFab mapbox-ctrl"},[o("q-btn",{attrs:{square:"",padding:"xs",color:"mapButton"},on:{click:function(t){return e.centerMap()}}}),o("div",{staticClass:"mapButtonsFabBottomDiv"})],1)],1),e.isLoading?o("q-banner",{staticClass:"text-white bg-secondary",attrs:{id:"loadingBanner","inline-actions":""},scopedSlots:e._u([{key:"avatar",fn:function(){return[o("q-spinner-gears",{attrs:{color:"white",size:"5vh"}})]},proxy:!0}],null,!1,144345241)},[e._v("\n      "+e._s(e.loadingText)+"\n      ")]):e._e(),o("q-expansion-item",{staticStyle:{visibility:"hidden"},attrs:{id:"infoBanner","expand-icon":"ion-add","header-class":"bg-primary text-white","expand-icon-toggle":""},on:{"after-show":e.setMapMaxHeight,"before-hide":e.setMapMaxHeight},scopedSlots:e._u([{key:"header",fn:function(){return[o("q-item-section",{staticClass:"col-2",attrs:{id:"infoBannerIcon"}},[o("q-icon",{attrs:{name:"location_city",color:"white",size:"5vh"}})],1),o("q-item-section",{attrs:{id:"infoBannerText"}},[o("div",{attrs:{id:"infoBannerName"}},[e._v(e._s(e.infoName))]),o("div",{attrs:{id:"infoBannerShortName"}},[e._v(e._s(e.infoShortName))])]),o("q-item-section",{attrs:{side:""}},[o("div",{staticClass:"row items-center infoBannerBtns"},[o("q-btn",{staticClass:"infoBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:e.expandedInfo?"fas fa-chevron-down":"info_outline"},on:{click:function(t){return e.toggleInfoDesc()}}}),o("q-btn",{staticClass:"dirBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-directions"},on:{click:function(t){return e.startDirection()}}}),o("q-btn",{staticClass:"closeBtn",attrs:{unelevated:"",round:"",size:"lg",color:"primary",icon:"fas fa-times"},on:{click:function(t){return e.closeInfoBanner()}}})],1)])]},proxy:!0}]),model:{value:e.expandedInfo,callback:function(t){e.expandedInfo=t},expression:"expandedInfo"}},[o("q-card",[o("q-card-section",{attrs:{id:"infoContent"}},[e._v("\n          "+e._s(e.infoDescText)+"\n        ")])],1)],1)],1)],1)},s=[],r=(o("551c"),o("a34a")),c=o.n(r),l=(o("96cf"),o("c973")),d=o.n(l),p=(o("7f7f"),o("28a5"),o("6b54"),o("06db"),o("6762"),o("2fdb"),o("ac6d"),o("cb43"),o("409f")),m=o.n(p),u=o("07a4"),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.geolocationDisabled&&!e.noGeolocBannerReduced?o("q-banner",{staticClass:"text-white bg-red",attrs:{id:"noGeolocationBanner","inline-actions":""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-8"},[e._v("\n        Votre position n'a pas pu être détectée. "+e._s(e.locationErrorText)+"\n      ")]),o("div",{staticClass:"col-4"},[o("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.reduceGeolocBanner}},[e._v("\n          Réduire\n        ")]),o("q-btn",{attrs:{flat:"",color:"white"},on:{click:e.retryLocate}},[e._v("\n          Réessayer\n        ")])],1)])]):e._e(),e.noGeolocBannerReduced?o("q-page-sticky",{staticClass:"geolocErrorBtn",attrs:{position:"top-left",offset:[15,45]}},[o("q-btn",{attrs:{fab:"",icon:"gps_off",color:"red",dense:"",size:"xs",padding:"xs"},on:{click:e.expandGeolocBanner}})],1):e._e()],1)},g=[],f={name:"GeoLocErrorNotif",props:{showDialog:null},data:function(){return{store:u["a"],geolocationDisabled:!1,locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",noGeolocBannerReduced:!1}},created:function(){},computed:{isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled}},watch:{geolocDisabled:function(e){this.geolocationDisabled=e}},methods:{retryLocate:function(){this.store.commit("setRetryLocate",!0)},reduceGeolocBanner:function(){this.noGeolocBannerReduced=!0},expandGeolocBanner:function(){this.noGeolocBannerReduced=!1}}},y=f,v=o("2877"),b=o("eebe"),L=o.n(b),x=o("54e1"),B=o("9c40"),E=o("de5e"),I=Object(v["a"])(y,h,g,!1,null,null,null),S=I.exports;L()(I,"components",{QBanner:x["a"],QBtn:B["a"],QPageSticky:E["a"]});var w=o("3f3d"),M={props:["type"],components:{MglMap:w["c"],MglAttributionControl:w["a"],MglNavigationControl:w["d"],MglGeolocateControl:w["b"],MglScaleControl:w["e"],GeoLocErrorNotif:S},data:function(){return{store:u["a"],accessToken:"pk.eyJ1IjoianVseXVzcyIsImEiOiJja2E2amxxOW0wN245MnhvaHU5OHRrM25rIn0.JFf7wbHPb7AwEvXK45h47g",mapStyle:"mapbox://styles/mapbox/light-v10",zoom:13.25,center:[3.153204729474396,50.21899024777983],selectedElement:"1",imageList:[],isMapLoaded:!1,shapesGeojson:null,isTreeSelectLoaded:!1,isLoading:!0,loadingText:"Chargement en cours...",locationErrorText:"Veuillez vérifier vos paramètres et autorisations.",infoName:"",infoShortName:"",infoDescText:"Aucune information disponible.",expandedInfo:!1,timer:null}},created:function(){this.$q.localStorage.set("objectId",""),this.selectedElement="";var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"));var t=this;window.addEventListener("orientationchange",(function(e){setTimeout((function(){t.resizeMap()}),500)}))},beforeDestroy:function(){clearInterval(this.timer)},computed:{selectedTreeElement:function(){return this.store.state.selectedTreeElement},isRetryLocate:function(){return this.store.state.isRetryLocate},geolocDisabled:function(){return this.store.state.geolocDisabled},isDirections:function(){return this.store.state.isDirectionMode}},watch:{geolocDisabled:function(e){this.setMapMaxHeight()},isRetryLocate:function(e){this.locateMe()},isDirections:function(e){e||this.closeInfoBanner()},selectedTreeElement:function(e){var t=this;if(this.selectedElement=e,e&&!this.isTreeSelectLoaded&&(this.isTreeSelectLoaded=!0,this.loadShapes(e)),e&&void 0!==this.map)if(e.toString().includes("-"))this.expandedInfo=!1,this.elmts.forEach((function(o){if(parseInt(e.split("-")[1])===o.id){var n=m()(o.Shapes[0].json);if(t.map.fitBounds([[n[0],n[1]],[n[2],n[3]]],{padding:{top:10,bottom:30,left:20,right:20}}),t.map.getSource("selectedBuildings").setData(o.Shapes[0].json),!t.isDirections){var i=t;setTimeout((function(){i.showInfoBanner(o.name,o.shortname,o.Shapes[0].json.coordinates[0][0],o.description)}),0)}}}));else{if(this.shapesGeojson){var o=m()(this.shapesGeojson);this.map.fitBounds([[o[0],o[1]],[o[2],o[3]]])}this.closeInfoBanner()}}},methods:{load:function(e){var t=this,o=e.map;this.map=o;var n=this;setTimeout((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n.successGeolocation,n.errorGeolocation):this.store.commit("setGeolocDisabled",!0)}),1e3),this.map.addSource("GIGN",{type:"raster",tiles:["https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],tileSize:200,minzoom:0,maxzoom:18}),this.map.addLayer({id:"GIGN",type:"raster",source:"GIGN",minzoom:0,maxzoom:20}),this.isMapLoaded=!0,this.setLoading(!0,"Chargement des images...");var i="https://privamap-dev.azurewebsites.net/api/imageLayer/all",a={method:"GET",redirect:"follow"};fetch(i,a).then((function(e){return e.text()})).then((function(e){JSON.parse(e).ImageLayers&&(t.imageList=JSON.parse(e).ImageLayers),t.addAllImages(),t.addElementsLayer(),t.setLoading(!0,"Chargement des éléments..."),t.loadShapes(t.selectedElement)})).catch((function(e){return console.log("error",e)}))},onClickBuilding:function(e){this.expandedInfo=!1;var t=e.features[0];if(!this.isDirections){var o=this;setTimeout((function(){o.showInfoBanner(t.properties.name,t.properties.shortname,t.geometry.coordinates[0][0],t.properties.description,t.properties.typeName)}),0)}this.map.getSource("selectedBuildings").setData(t)},showInfoBanner:function(e,t,o,n,i){document.getElementById("infoBanner").style.visibility="visible",this.infoName=e,this.infoShortName=t,this.infoDescText=n||"Aucune information disponible",this.setMapMaxHeight()},closeInfoBanner:function(){this.expandedInfo=!1,document.getElementById("infoBanner").style.visibility="hidden",this.setMapMaxHeight(),this.map.getSource("selectedBuildings").setData({type:"Feature",geometry:null})},toggleInfoDesc:function(){this.expandedInfo=!this.expandedInfo},centerMap:function(){this.map.flyTo({center:this.center,zoom:this.zoom,bearing:0,pitch:0})},addAllImages:function(){if(this.isMapLoaded)for(var e=null,t=0;t<this.imageList.length;t++)e={type:"image",url:"data:"+this.imageList[t].fileType+";base64,"+this.imageList[t].image,coordinates:[[parseFloat(this.imageList[t].topLeftLng),parseFloat(this.imageList[t].topLeftLat)],[parseFloat(this.imageList[t].topRightLng),parseFloat(this.imageList[t].topRightLat)],[parseFloat(this.imageList[t].bottomRightLng),parseFloat(this.imageList[t].bottomRightLat)],[parseFloat(this.imageList[t].bottomLeftLng),parseFloat(this.imageList[t].bottomLeftLat)]]},this.map.addSource("image"+this.imageList[t].id,e),this.map.addLayer({id:"imageLayer"+this.imageList[t].id,type:"raster",source:"image"+this.imageList[t].id,layout:{},paint:{"raster-opacity":1}})},addElementsLayer:function(){this.map.addSource("buildings",{type:"geojson",data:null});var e={id:"buildings",type:"fill",source:"buildings",layout:{},paint:{"fill-color":"#088","fill-opacity":.8}};this.map.addLayer(e);var t=this.map;this.map.on("mouseenter","buildings",(function(){t.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave","buildings",(function(){t.getCanvas().style.cursor=""})),this.map.on("click","buildings",this.onClickBuilding),this.map.addSource("selectedBuildings",{type:"geojson",data:null}),this.map.addLayer({id:"selectedBuildings",type:"fill",source:"selectedBuildings",layout:{},paint:{"fill-color":"#2f52a0","fill-opacity":1}}),this.map.addSource("directionPath",{type:"geojson",data:null,lineMetrics:!0}),this.map.addLayer({id:"directionPath",type:"line",source:"directionPath",paint:{"line-color":"#008888","line-width":8,"line-opacity":1,"line-gradient":["interpolate",["linear"],["line-progress"],0,"#008888",1,"#61C1D2"]},layout:{"line-cap":"round","line-join":"round"}})},loadShapes:function(e){var t=this;if(this.isMapLoaded&&this.isTreeSelectLoaded){var o="https://privamap-dev.azurewebsites.net/api/elementType/"+e+"/elements",n={method:"GET",redirect:"follow"};fetch(o,n).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e);for(var o=e.Elements,n={type:"FeatureCollection",features:[]},i=0;i<o.length;i++)for(var a=0;a<o[i].Shapes.length;a++){var s={type:"Feature",geometry:o[i].Shapes[a].json,id:o[i].Shapes[a].id,properties:{elementId:o[i].id,name:o[i].name,shortname:o[i].shortname,description:o[i].description,typeName:e.ElementTypeStyle.name,typeId:e.ElementTypeStyle.id}};n.features.push(s)}t.elmts=o,t.shapesGeojson=n,t.map.getSource("buildings").setData(t.shapesGeojson),t.setLoading(!1)})).catch((function(e){return console.log("error",e)}))}},resizeMap:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),this.map.resize()},successGeolocation:function(e){var t=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0);t.click()},errorGeolocation:function(){this.store.commit("setGeolocDisabled",!0),document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0).disabled=!0},setLoading:function(e,t){t&&(this.loadingText=t),this.isLoading=e,this.setMapMaxHeight()},locateMe:function(){var e=this;return d()(c.a.mark((function t(){var o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.closeInfoBanner(),e.setLoading(!0,"Recherche de la position..."),e.store.commit("setGeolocDisabled",!1),t.prev=3,t.next=6,e.getLocation();case 6:e.location=t.sent,o=document.getElementsByClassName("mapboxgl-ctrl-geolocate").item(0),o.disabled=!1,o.click(),e.setLoading(!1),e.store.commit("setRetryLocate",!1),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),e.setLoading(!1),e.reloadPage();case 18:case"end":return t.stop()}}),t,null,[[3,14]])})))()},getLocation:function(){return d()(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){"geolocation"in navigator||t(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition((function(t){e(t)}),(function(e){t(e)}))})));case 1:case"end":return e.stop()}}),e)})))()},reloadPage:function(){document.location.reload()},startDirection:function(e){var t=this;this.store.commit("setDirectionMode",!0);var o=this.map.getSource("selectedBuildings")._data,n=o.properties.typeId+"-"+o.properties.elementId;this.store.commit("setSelectedTreeElement",n),this.closeInfoBanner();var i=o.properties.elementId,a=112,s="https://privamap-dev.azurewebsites.net/api/route/elm_"+i+"/elm_"+a,r={method:"GET",redirect:"follow"};fetch(s,r).then((function(e){return e.text()})).then((function(e){console.log("result"),console.log(e),t.map.getSource("directionPath").setData(JSON.parse(e))})).catch((function(e){return console.log("error",e)}))},setMapMaxHeight:function(){var e=0;"hidden"!==document.getElementById("infoBanner").style.visibility&&!1===this.expandedInfo||this.isLoading?e+=54:"hidden"!==document.getElementById("infoBanner").style.visibility&&!0===this.expandedInfo&&(e+=document.getElementById("infoBanner").offsetHeight),this.isDirections?e+=112:e+=65,document.getElementById("mapElement").style.height="calc(100vh - 16px - "+e+"px)",document.getElementById("mapElement").style.height="calc(var(--vh, 1vh) * 100 - 16px - "+e+"px)",this.map.resize()}}},T=M,C=o("9989"),D=o("f09f"),G=o("cf57"),R=o("3b73"),k=o("4074"),N=o("0016"),_=o("a370"),z=Object(v["a"])(T,a,s,!1,null,null,null),q=z.exports;L()(z,"components",{QPage:C["a"],QCard:D["a"],QPageSticky:E["a"],QBtn:B["a"],QBanner:x["a"],QSpinnerGears:G["a"],QExpansionItem:R["a"],QItemSection:k["a"],QIcon:N["a"],QCardSection:_["a"]});var P={components:{"map-component":q},name:"PageIndex"},j=P,A=Object(v["a"])(j,n,i,!1,null,null,null);t["default"]=A.exports;L()(A,"components",{QPage:C["a"]})},cb43:function(e,t,o){}}]);