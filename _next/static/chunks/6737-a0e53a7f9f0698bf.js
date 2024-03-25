"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6737],{924:function(e,t,l){var o=l(5893),n=l(3478);let s=e=>{let{children:t,durationInSec:l=.5}=e;return(0,o.jsx)(n.E.div,{animate:{opacity:1},initial:{opacity:0},transition:{duration:l,type:"tween",ease:"linear"},exit:{opacity:0},children:t})};t.Z=s},6475:function(e,t,l){l.d(t,{Z:function(){return U}});var o=l(5893),n=l(3478),s=l(7294),r=l(8193),i=l(3750),a=l(4107),c=l(6678),d=l(5580),u=l(36),m=l(1633),v=l(3363),x=l(7054),h=l(3990),f=l(1649),p=l(9843),g=l(9361),j=l(1616);let y={width:"100%",height:"100%"},b=e=>{let{lat:t,lng:l,setLocation:n}=e,[r,i]=(0,s.useState)({lat:t,lng:l}),[a,c]=(0,s.useState)(null),d=(0,j.s)(),u=new google.maps.Geocoder,m=(0,s.useCallback)(e=>{let o=new window.google.maps.LatLngBounds({lat:t,lng:l});e.fitBounds(o),c(e)},[t,l]);(0,s.useEffect)(()=>{a&&(i({lat:t,lng:l}),h(t,l))},[t,l,a]);let v=(0,s.useCallback)(()=>{c(null)},[]);async function h(e,t){try{var l,o;let s=await u.geocode({location:{lat:e,lng:t}});n(e,t,(null==s?void 0:null===(l=s.results)||void 0===l?void 0:null===(o=l[0])||void 0===o?void 0:o.formatted_address)||"Your location")}catch(r){console.log(r),n(e,t,"Your location")}}return(0,o.jsx)(x.b6,{mapContainerStyle:y,center:r,zoom:19,options:{zoomControl:!1,clickableIcons:!1,streetViewControl:!1,mapTypeControl:!1},onDragEnd:()=>{let e=null==a?void 0:a.getCenter(),t=null==e?void 0:e.lat(),l=null==e?void 0:e.lng();t&&l&&(i({lat:t,lng:l}),h(t,l))},onLoad:m,onUnmount:v,children:d?(0,o.jsx)(x.Jx,{position:r,animation:google.maps.Animation.DROP,draggable:!0,onDragEnd:e=>{var t,l;let o=null===(t=e.latLng)||void 0===t?void 0:t.lat(),n=null===(l=e.latLng)||void 0===l?void 0:l.lng();o&&n&&(i({lat:o,lng:n}),h(o,n))}}):null})};var N=(0,s.memo)(b),w=l(155),L=l(7106),C=l(2920),k=l(8177),S=l(2686);let F=e=>{let{setLocation:t,onSelectFromMap:l,selectLocation:n}=e,r=(0,s.useRef)(null),i=(0,S.T)(),{recentSearches:a}=(0,S.C)(e=>e.booking),[c,d]=(0,s.useState)(""),u=new google.maps.Geocoder;async function m(e,l){try{var o,n;let s=await u.geocode({location:{lat:e,lng:l}});t(e,l,(null==s?void 0:null===(o=s.results)||void 0===o?void 0:null===(n=o[0])||void 0===n?void 0:n.formatted_address)||"Your location")}catch(r){console.log(r),t(e,l,"Your location")}}return(0,o.jsxs)("div",{className:"px-3 py-2",children:[n?null:(0,o.jsx)("p",{className:"text-sm font-medium",children:"Search Location"}),(0,o.jsx)(x.Zk,{onLoad:e=>r.current=e,onPlacesChanged:function(){try{var e,l,o;let n=null===(e=null===(l=r.current)||void 0===l?void 0:l.getPlaces())||void 0===e?void 0:e[0];if(!n)return;let s=null===(o=n.geometry)||void 0===o?void 0:o.location;if(s){let{lat:a,lng:c}=s.toJSON();i((0,k.DL)({coords:{lat:a,lng:c},name:n.formatted_address||"Unknown"})),t(a,c,n.formatted_address||"Unknown"),d("")}}catch(u){(0,C.Am)("Something went wrong",{type:"error"})}},children:(0,o.jsxs)("div",{className:"relative my-2 animate-fade-in shadow-md rounded-2xl",role:"button",children:[(0,o.jsx)(w.kXE,{className:"absolute z-10 text-pistachio top-0 left-1 bottom-0 h-full",size:24}),(0,o.jsx)("input",{value:c,onChange:e=>d(e.target.value),type:"text",className:"common-input rounded-2xl px-2 py-3 pl-8 input-focus text-sm animate-fade-in",placeholder:"Search for your area or street"})]})}),n?null:(0,o.jsxs)(s.Fragment,{children:[(0,o.jsxs)("button",{onClick:function(){if(!navigator){(0,C.Am)("Your browser doesn't support geo location",{type:"error"});return}navigator.geolocation.getCurrentPosition(e=>{m(e.coords.latitude,e.coords.longitude)},e=>{(0,C.Am)(e.message,{type:"error"})},{enableHighAccuracy:!0})},className:"flex items-center space-x-2 my-4 px-2 text-sm text-gray-600",children:[(0,o.jsx)(L.FMP,{}),(0,o.jsx)("span",{children:"Use my current location"})]}),(0,o.jsxs)("button",{onClick:l,className:"flex items-center space-x-2 my-4 px-2 text-sm text-gray-600",children:[(0,o.jsx)(L.SSU,{}),(0,o.jsx)("span",{children:"Set location on the map"})]}),(0,o.jsx)("hr",{className:"my-4"}),(null==a?void 0:a.length)?(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)("p",{className:"text-sm ",children:"Recent searches"}),(0,o.jsx)("div",{className:"text-xs mt-2 px-2 overflow-y-auto",children:a.map(e=>(0,o.jsxs)("div",{className:"flex py-2 space-x-2 items-center animate-fade-in",children:[(0,o.jsx)(w.kXE,{className:"text-pistachio top-0 min-w-[18px] left-1 bottom-0 h-full",size:18}),(0,o.jsx)("p",{onClick:()=>{t(e.coords.lat,e.coords.lng,e.name)},className:"growing-link cut-text-2",children:e.name})]},e.name))})]}):null]})]})},M=e=>{let{onClose:t,onSelectLocation:l,cityCoords:r,radius:i}=e,{isLoaded:a}=(0,x.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyDiQxNRLG5gyPiDO5EOEbqqM2Ot79pLbfI",libraries:p.S,region:"in"}),[d,u]=(0,s.useState)(),[m,j]=(0,s.useState)(!1),{setter:y,successmessage:b,errMessage:w}=(0,c.Z)();return(0,o.jsxs)(n.E.div,{initial:{opacity:0},animate:{opacity:1},children:[(0,o.jsx)("header",{className:"modal-header-bg",children:(0,o.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,o.jsx)("button",{className:"modal-close",onClick:t,children:(0,o.jsx)(f.PjY,{className:"w-4 h-4 sm:text-pistachio text-black"})}),(0,o.jsx)("h3",{className:"sm:text-black text-gray-50 ",children:"Home Delivery"})]})}),(0,o.jsxs)("div",{className:"h-[82vh] relative w-full",children:[a?(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)("div",{className:"absolute z-40 left-0 top-0 right-0",children:(0,o.jsx)(F,{setLocation:(e,t,l)=>{u({lat:e,lng:t,name:l})},selectLocation:m,onSelectFromMap:()=>{j(!0)}})}),m?(0,o.jsx)(N,{lat:(null==d?void 0:d.lat)||(null==r?void 0:r.lat),lng:(null==d?void 0:d.lng)||(null==r?void 0:r.lng),setLocation:(e,t,l)=>{u({lat:e,lng:t,name:l})}}):null]}):(0,o.jsx)(h.Cd,{className:"animate-spin my-4 mx-auto"}),d?(0,o.jsx)("div",{className:"absolute z-50 sm:bottom-0 bottom-3 left-0 right-0 p-2 animate-fade-in",children:(0,o.jsxs)("div",{className:"p-2 bg-gray-50 shadow-md border rounded-lg",children:[(0,o.jsx)(v.Z,{className:"text-xs min-h-[20px]",errMessage:w,successmessage:b}),(0,o.jsx)("p",{className:"text-xs text-gray-500 cut-text-2",children:null==d?void 0:d.name}),(0,o.jsx)("button",{onClick:function(){if(d){let e=(0,g.NM)({lat:null==r?void 0:r.lat,lng:null==r?void 0:r.lng},{lat:null==d?void 0:d.lat,lng:null==d?void 0:d.lng});e>i?y("Sorry, delivery service is not available to this location.","error"):l(d)}},className:"action-btn w-full py-2 rounded-xl mt-2 ",children:"Select location"})]})}):null]})]})};var E=l(9734),Z=l(5983);function P(){return(0,o.jsxs)("div",{role:"button",className:"flex flex-col justify-center items-center px-3 py-2 rounded-lg smooth-animate hover:scale-105 border",children:[(0,o.jsx)("div",{className:"w-14 h-8 skeleton"}),(0,o.jsx)("div",{className:"w-8 h-2 skeleton mt-2"})]})}let W=e=>{let{cityName:t,cityImage:l,cityCode:n,selected:s,onSelect:r}=e;return(0,o.jsxs)("div",{role:"button",onClick:r,className:"".concat(s?"border-pistachio bg-pear/30":"border-gray-500/40 hover:border-pistachio","   flex flex-col justify-center items-center border-2 px-3 py-2 rounded-lg smooth-animate hover:bg-pear/10"),children:[(0,o.jsx)("img",{src:l,alt:"",width:40,className:"w-14 h-8 object-cover"}),(0,o.jsx)("p",{className:"mt-2 text-xs",children:t})]})},D=e=>{var t;let{category:l,selectedCity:n,onSelect:r,setSelectedCity:i}=e,{data:a,isLoading:c,isValidating:d}=(0,E.ZP)(Z.Q.ListOfCities("car"===l?1:2));return(0,s.useEffect)(()=>{var e,t;!n&&(null==a?void 0:null===(e=a.cityList)||void 0===e?void 0:e[0])&&!d&&!c&&r(null==a?void 0:null===(t=a.cityList)||void 0===t?void 0:t[0])},[a,d,c]),(0,s.useEffect)(()=>{if(n&&!d&&!c){var e;i(null==a?void 0:null===(e=a.cityList)||void 0===e?void 0:e.find(e=>e.cityCode===n.code))}},[a,d,c]),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)("div",{className:"grid grid-cols-3 gap-4 overflow-x-hidden",children:d||c?(0,o.jsx)(s.Fragment,{children:Array(6).fill("").map((e,t)=>(0,o.jsx)(P,{},t))}):(0,o.jsx)(s.Fragment,{children:null==a?void 0:null===(t=a.cityList)||void 0===t?void 0:t.map(e=>(0,o.jsx)(W,{...e,selected:(null==n?void 0:n.code)===e.cityCode,onSelect:()=>r(e)},e.cityCode))})})})};function A(){return(0,o.jsxs)("div",{className:"border-transparent border-2 mb-3 flex items-center bg-[#F0F0F0] p-2 rounded-lg",children:[(0,o.jsx)("div",{className:"w-6 h-6 skeleton rounded-md"}),(0,o.jsx)("div",{className:"w-2/3 h-5 skeleton ml-2 rounded-md"})]})}var R=l(5953);let _=e=>{let{selected:t,locImage:l,homeDeliveryAddress:n,locName:s,onSelect:r,locCode:i,showLocation:a,onMapsPick:c}=e;return(0,o.jsxs)("div",{role:"button",onClick:()=>{r({code:i,name:s}),a&&c()},className:"".concat(t?"border-pistachio bg-pear/30":"border-gray-500/40 bg-[#F0F0F0] hover:border-pistachio hover:bg-pear/10","  border-2 smooth-animate mb-3 flex items-center  p-2 rounded-lg max-w-[365px]"),children:[(0,o.jsx)(R.Z,{className:"w-6 h-6 object-cover",imageSrc:l,width:24,height:24,alt:"loc_ico"}),(0,o.jsx)("span",{className:"ml-2 text-sm cut-text-1",children:n||s})]})},z=e=>{var t;let{category:l,cityCode:n,selectedLoc:r,onSelect:i,onMapsPick:a,homeDeliveryAddress:c}=e,{data:d,isLoading:u,isValidating:m}=(0,E.ZP)(n?Z.Q.LocationBasedOnCityCode("car"===l?1:2,n):null);return(0,o.jsx)("div",{className:"sm:h-64 h-60 overflow-y-auto overflow-x-auto pb-6",children:u||m?(0,o.jsx)(s.Fragment,{children:Array(6).fill("").map((e,t)=>(0,o.jsx)(A,{},t))}):(0,o.jsx)(s.Fragment,{children:null==d?void 0:null===(t=d.locationList)||void 0===t?void 0:t.map(e=>(0,o.jsx)(_,{...e,onSelect:i,selected:!!e.showLocation&&!!c||(null==r?void 0:r.code)===e.locCode&&!c,onMapsPick:a,homeDeliveryAddress:e.showLocation?c:void 0},e.locCode))})})},O=e=>{let{showModal:t,setShowModal:l=()=>{},heading:x,category:h,submitBtn:f,homeDeliveryAddress:p,onBackButtonClick:g,defaultValue:j}=e,{setter:y,successmessage:b,errMessage:N}=(0,c.Z)(),{width:w}=(0,d.Z)(!0),[L,C]=(0,s.useState)(j.city),[k,S]=(0,s.useState)(),[F,E]=(0,s.useState)(j.location),[Z,P]=(0,s.useState)(!1),[W,A]=(0,s.useState)(p),R=(0,s.useRef)(null);return(0,s.useEffect)(()=>(j.city.code===(null==L?void 0:L.code)&&j.location.code===(null==F?void 0:F.code)&&p&&A(p),()=>{}),[j]),(0,a.Z)(()=>{t&&!Z&&l(!1)},R),(0,o.jsx)(m.Z,{setShowModal:l,showModal:t,children:(0,o.jsx)(u.Z,{children:(0,o.jsxs)(n.E.div,{ref:R,animate:{y:0},initial:w<=640?{y:"100%"}:{y:"-100%"},exit:w<=640?{y:"100%"}:{y:"-100%"},transition:{duration:.3,ease:"easeOut"},className:"overflow-x-hidden max-h-[98vh] bg-gray-50 will-change-transform sm:rounded-2xl rounded-t-2xl sm:max-w-sm shadow-2xl max-w-[98vw] sm:m-auto mt-auto sm:min-w-[397px] sm:w-auto w-full",children:[Z?(0,o.jsx)(M,{radius:parseFloat((null==k?void 0:k.cityRadius)||"0"),onClose:()=>{P(!1),E(void 0)},onSelectLocation:function(e){P(!1),f.onMapLocationSelect(e,L)},cityCoords:{lat:parseFloat((null==k?void 0:k.cityLat)||"9.9312"),lng:parseFloat((null==k?void 0:k.cityLong)||"76.2673")}}):null,(0,o.jsxs)(n.E.div,{initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},className:"".concat(Z?"hidden":""),children:[(0,o.jsxs)("header",{className:"modal-header-bg",children:[(0,o.jsxs)("div",{className:"flex space-x-2 items-center",children:[g?(0,o.jsx)("button",{className:"modal-close",onClick:g,children:(0,o.jsx)(i.i1r,{size:16})}):null,(0,o.jsx)("h3",{className:"sm:text-black text-gray-50",children:x})]}),(0,o.jsx)("button",{className:"modal-close",onClick:()=>l(!1),children:(0,o.jsx)(r.oHP,{className:"w-4 h-4 sm:text-pistachio text-black"})})]}),(0,o.jsxs)("div",{className:"sm:px-4 px-3",children:[(0,o.jsx)(D,{category:h,selectedCity:L,onSelect:e=>{C({code:e.cityCode,name:e.cityName}),S(e),E(void 0),A(void 0)},setSelectedCity:e=>S(e)}),(0,o.jsx)("p",{className:"mb-2 h-6",children:(null==L?void 0:L.name)?"Our locations in ".concat(null==L?void 0:L.name):""}),(0,o.jsx)(z,{category:h,cityCode:null==L?void 0:L.code,onSelect:e=>{E(e),A(void 0)},selectedLoc:F,onMapsPick:()=>{P(!0)},homeDeliveryAddress:W})]}),(0,o.jsxs)("div",{className:"sm:px-4 px-3 shadow-2xl rounded-t-2xl sticky left-0 right-0 bottom-0 py-2 bg-white",children:[(0,o.jsx)(v.Z,{successmessage:b,errMessage:N,className:"text-xs min-h-[16px]"}),(0,o.jsx)("button",{onClick:function(){if(!L){y("Please choose city to continue","error");return}if(!F){y("Please choose location to continue","error");return}L&&F&&f.onSubmit(L,F)},className:"action-btn w-full py-2 rounded-xl mt-2 flex space-x-1 justify-center items-center",children:(0,o.jsx)("span",{children:f.name})})]})]})]})})})};var U=O},8141:function(e,t,l){var o=l(5893),n=l(7294),s=l(8193);let r=e=>{let{swipeSpeed:t=1,children:l,className:r,showControls:i=!0,alignToCenter:a=!1}=e,c=(0,n.useRef)(0),d=(0,n.useRef)(!1),u=(0,n.useRef)(0),[m,v]=(0,n.useState)(!0),[x,h]=(0,n.useState)(!0),f=(0,n.useRef)(null);function p(e){if(f.current){var t;"prev"===e?f.current.scrollTo({top:0,behavior:"smooth",left:f.current.scrollLeft-=f.current.offsetWidth-200}):f.current.scrollTo({top:0,behavior:"smooth",left:f.current.scrollLeft+=f.current.offsetWidth-200}),null===(t=f.current)||void 0===t||t.classList.remove("scroll-smooth"),setTimeout(()=>{var e,t,l,o;v(((null==f?void 0:null===(e=f.current)||void 0===e?void 0:e.scrollLeft)||0)>0),h((null==f?void 0:null===(t=f.current)||void 0===t?void 0:t.scrollWidth)!=((null===(l=f.current)||void 0===l?void 0:l.offsetWidth)||0)+((null===(o=f.current)||void 0===o?void 0:o.scrollLeft)||0))},500)}}return(0,n.useEffect)(()=>{var e,t,l;v(f.current.scrollLeft>0),h((null==f?void 0:null===(e=f.current)||void 0===e?void 0:e.scrollWidth)!=((null===(t=f.current)||void 0===t?void 0:t.offsetWidth)||0)+((null===(l=f.current)||void 0===l?void 0:l.scrollLeft)||0))},[]),(0,o.jsxs)("div",{className:"relative select-none",children:[(0,o.jsx)("div",{onMouseDown:e=>{if(!f.current)return;d.current=!0;let t=e.pageX-f.current.offsetLeft;c.current=t;let l=f.current.scrollLeft;u.current=l},onMouseLeave:()=>{var e,t,l,o;d.current=!1,v(((null==f?void 0:null===(e=f.current)||void 0===e?void 0:e.scrollLeft)||0)>0),h((null==f?void 0:null===(t=f.current)||void 0===t?void 0:t.scrollWidth)!=((null===(l=f.current)||void 0===l?void 0:l.offsetWidth)||0)+((null===(o=f.current)||void 0===o?void 0:o.scrollLeft)||0))},onMouseUp:()=>{var e,t,l,o;d.current=!1,v(((null==f?void 0:null===(e=f.current)||void 0===e?void 0:e.scrollLeft)||0)>0),h((null==f?void 0:null===(t=f.current)||void 0===t?void 0:t.scrollWidth)!=((null===(l=f.current)||void 0===l?void 0:l.offsetWidth)||0)+((null===(o=f.current)||void 0===o?void 0:o.scrollLeft)||0))},onMouseMove:e=>{if(!d.current||!f.current)return;e.preventDefault();let t=e.pageX-f.current.offsetLeft,l=(t-c.current)*1;f.current.scrollLeft=u.current-l},className:"".concat(a?f.current&&f.current.scrollWidth>f.current.clientWidth?"":"justify-center":""," flex overflow-x-auto overflow-y-hidden hide-scrollbar will-change-transform transition-all duration-300 cursor-grabbing relative ").concat(r," sm:snap-none snap-x"),ref:f,children:l}),i?(0,o.jsx)(n.Fragment,{children:f.current&&f.current.scrollWidth>f.current.clientWidth?(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)("span",{className:"absolute top-0 -left-4 sm:flex hidden items-center h-full  cursor-default",children:(0,o.jsx)(s._u0,{className:"".concat(m?"animate-fade-in":"hidden"," cursor-pointer text-pistachio h-8 w-8 rounded-full  bg-gray-50 sm:hover:scale-110 transform transition-all ease-out duration-300"),onClick:()=>p("prev"),onMouseDown:()=>{var e;null===(e=f.current)||void 0===e||e.classList.add("scroll-smooth")}})}),(0,o.jsx)("span",{className:"absolute top-0 -right-4 sm:flex hidden items-center h-full cursor-default",children:(0,o.jsx)(s.bBv,{className:"".concat(x?"animate-fade-in":"hidden"," cursor-pointer text-pistachio h-8 w-8  rounded-full bg-gray-50 sm:hover:scale-110 transform transition-all ease-out duration-300"),onClick:()=>p("next"),onMouseDown:()=>{var e;null===(e=f.current)||void 0===e||e.classList.add("scroll-smooth")}})})]}):""}):""]})};t.Z=r},9843:function(e,t,l){l.d(t,{S:function(){return o},u:function(){return n}});let o=["places"],n="/assets/loading-blur.jpeg"}}]);