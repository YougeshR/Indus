(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{5620:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...slug]",function(){return t(1203)}])},1203:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return K},default:function(){return X}});var a=t(5893),r=t(1163),l=t(924),i=t(2442),n=t(7213),c=t(7294),d=t(4129),o=t(6437),x=t(5953);let m=e=>{let{title:s,url:t,height:r,width:l}=e;return(0,a.jsx)(x.Z,{imageSrc:t,className:"rounded-md object-cover",alt:s,width:l||0,height:r||0})},h=(e,s)=>{try{var t,r,l,i,n;if(!(null==s?void 0:s.assets))return null;let c=null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(r=t.target)||void 0===r?void 0:r.sys;if((null==c?void 0:c.type)==="Link"&&(null==c?void 0:c.linkType)==="Asset"){let d=null===(l=null===(i=s.assets)||void 0===i?void 0:i.block)||void 0===l?void 0:l.find(e=>{let{sys:{id:s}}=e;return s==c.id});if(!d)return null;if(!0===(null==d?void 0:null===(n=d.contentType)||void 0===n?void 0:n.startsWith("image")))return(0,a.jsx)(m,{...d})}return null}catch(o){return null}},u=e=>{let{data:s}=e,t={renderMark:{},renderNode:{[o.BLOCKS.TABLE]:(e,s)=>(0,a.jsx)("div",{className:"overflow-y-auto my-1",children:(0,a.jsx)("table",{className:"table-auto",children:(0,a.jsx)("tbody",{children:s})})}),[o.BLOCKS.EMBEDDED_ASSET]:e=>h(e,s.links),"embedded-entry-block":e=>(0,a.jsx)("div",{children:"Widget Block missing"}),"embedded-entry-inline":e=>""}};return(0,a.jsx)("div",{className:"rich-text",children:(0,d.h)(s.json,t)})};var j=t(2041),p=t(2168),g=t(3990),v=t(3363),N=t(6678),b=t(7374),f=t(9361);let y=()=>{let{query:e}=(0,r.useRouter)(),[s,t]=(0,c.useState)(""),[l,i]=(0,c.useState)(""),[n,d]=(0,c.useState)(""),{successmessage:o,errMessage:x,setter:m}=(0,N.Z)(),[h,u]=(0,c.useState)(!1);async function j(){try{if(!s.trim()){m("Name cannot be empty","error");return}if(!l.trim()){m("Email cannot be empty","error");return}if(!(0,f.oH)(l)){m("Entered email is invalid","error");return}if(!n.trim()){m("Comment cannot be empty","error");return}u(!0),await (0,b.C5)({BlogSlug:null==e?void 0:e.slug,Comments:n,EmailId:l,Name:s}),m("Comment submitted successfully","success")}catch(t){m("Something went wrong","error")}finally{u(!1)}}return(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("hr",{className:"my-4"}),(0,a.jsx)("h2",{className:"text-2xl font-medium mb-4",children:"Leave a reply"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"uppercase text-sm text-gray-600 font-bold",children:"Name"}),(0,a.jsx)("input",{value:s,onChange:e=>t(e.target.value),className:"common-input input-focus p-2 rounded-md mt-2 text-sm",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("span",{className:"uppercase text-sm text-gray-600 font-bold",children:"Email"}),(0,a.jsx)("input",{value:l,onChange:e=>i(e.target.value),className:"common-input input-focus p-2 rounded-md mt-2 text-sm",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-8 mb-4",children:[(0,a.jsx)("span",{className:"uppercase text-sm text-gray-600 font-bold",children:"Comment"}),(0,a.jsx)("textarea",{value:n,onChange:e=>d(e.target.value),className:"common-input input-focus p-2 rounded-md mt-2 text-sm",rows:4})]}),(0,a.jsx)(v.Z,{className:"text-start text-sm min-h-[25px]",errMessage:x,successmessage:o}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsxs)("button",{onClick:j,disabled:h,className:"action-btn px-6 py-2 rounded-md flex space-x-2 items-center",children:[h?(0,a.jsx)(g.Cd,{className:"animate-spin"}):null,(0,a.jsx)("span",{children:"Post Comment"})]})})]})]})};var w=t(5820),k=t(3478),Z=t(3854);let C=e=>{let{answer:s,question:t}=e,[r,l]=(0,c.useState)(!1);return(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsxs)("div",{role:"button",onClick:()=>l(!r),className:"p-2 font-medium flex items-center justify-between space-x-3 smooth-animate hover:bg-gray-100 rounded-md",children:[(0,a.jsx)("span",{children:t}),r?(0,a.jsx)(Z.HRq,{className:"w-4 h-4 min-w-[16px] animate-fade-in"}):(0,a.jsx)(Z.HQD,{className:"w-4 h-4 min-w-[16px] animate-fade-in"})]}),(0,a.jsx)(w.M,{mode:"wait",children:r&&(0,a.jsx)(k.E.div,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0,height:0,padding:0},className:"prose-sm px-2 py-1",children:(0,d.h)(s.json)})}),(0,a.jsx)("hr",{})]})},S=e=>{let{data:s}=e;return(0,a.jsxs)("div",{className:"my-8",children:[(0,a.jsx)("strong",{className:"text-center block text-sm mt-6",children:"FAQs"}),(0,a.jsx)("h4",{className:"font-semibold text-2xl text-center my-3",children:"Frequently asked questions"}),(0,a.jsxs)("p",{className:"text-center text-sm text-gray-500 my-3",children:["Have questions? ","We're"," here to help."," "]}),s.map(e=>{let{answer:s,question:t,sys:r}=e;return(0,a.jsx)(C,{answer:s,question:t},r.id)})]})};var E=t(1872);let B=e=>{let{publishedDate:s,author:t,estimatedReadTime:r,title:l,oneLineAboutThePost:i,keyFactors:n}=e;return(0,a.jsxs)("div",{className:"section-container py-8",children:[(0,a.jsxs)("div",{className:"flex justify-center sm:gap-3 gap-1 divide-x",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,a.jsx)(E.SPI,{}),(0,a.jsx)("span",{className:"text-center text-gray-500 text-xs",children:new Date(s).toLocaleDateString("en",{day:"2-digit",month:"short",year:"numeric"})})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-1 px-3",children:[(0,a.jsx)(E.Alp,{}),(0,a.jsx)("span",{className:"text-center text-gray-500 text-xs",children:t})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-1 px-3",children:[(0,a.jsx)(E.IMt,{}),(0,a.jsxs)("span",{className:"text-center text-gray-500 text-xs",children:[r," mins read"]})]})]}),(0,a.jsx)("h2",{className:"text-2xl font-semibold text-center my-3",children:l}),(0,a.jsx)("small",{className:"text-center block text-gray-600",children:i}),(null==n?void 0:n.length)?(0,a.jsx)("div",{className:"flex gap-3 flex-wrap text-sm my-6 justify-center",children:null==n?void 0:n.map((e,s)=>(0,a.jsx)("div",{className:"bg-gray-100 px-3 py-0.5 rounded",children:e},s))}):null,(0,a.jsx)("hr",{className:"my-5"})]})};var _=t(1664),F=t.n(_);let H=e=>{let{author:s,category:t,estimatedReadTime:r,publishedDate:l,shortDescription:i,slug:n,sys:c,thumbnail:d,title:o}=e;return(0,a.jsxs)("div",{className:"flex space-x-4 hover:shadow-xl smooth-animate shadow border border-gray-500/5 rounded-lg p-2",children:[(0,a.jsx)(F(),{href:"/".concat(t.slug,"/").concat(n,"/"),passHref:!0,children:(0,a.jsx)(x.Z,{width:112,height:112,className:"w-28 min-w-[112px] h-28 rounded-lg object-cover",imageSrc:d.url})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,a.jsx)(F(),{href:"/".concat(t.slug,"/"),className:"bg-pistachio text-xs px-3 py-0.5 rounded-sm cut-text-1",children:t.title}),(0,a.jsx)("p",{className:"text-xs text-gray-500 whitespace-nowrap",children:"5 min"})]}),(0,a.jsx)(F(),{href:"/".concat(t.slug,"/").concat(n,"/"),passHref:!0,children:(0,a.jsx)("h3",{className:"mt-2 cut-text-3 text-sm",children:o})})]})]})},T=e=>{let{recentBlogs:s}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl font-medium ",children:"Recent Blogs"}),(0,a.jsx)("hr",{className:"my-3"}),(0,a.jsx)("div",{className:"grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4",children:s.map(e=>(0,a.jsx)(H,{...e},e.sys.id))})]})},A=e=>{let{recentBlogs:s}=e;return(0,a.jsx)("div",{className:"col-span-1 px-2",children:(0,a.jsx)(T,{recentBlogs:s})})},D=e=>{let{author:s,category:t,detail:r,estimatedReadTime:l,publishedDate:i,sys:n,recentBlogs:d}=e;return(0,a.jsxs)("section",{"aria-describedby":"BlogPage",className:"mb-20",children:[(0,a.jsx)(j.Z,{...r.banner}),(0,a.jsx)(B,{author:s,estimatedReadTime:l,keyFactors:r.keyFactors,oneLineAboutThePost:r.oneLineAboutThePost,publishedDate:i||n.publishedAt,title:r.title}),(0,a.jsx)("div",{className:"section-container mb-20",children:(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 grid-cols-1 gap-3",children:[(0,a.jsxs)("div",{className:"lg:col-span-2 sm:px-4 lg:px-6",children:[(0,a.jsx)(u,{data:r.content}),r.faQsCollection.items.length?(0,a.jsxs)(c.Fragment,{children:[(0,a.jsx)("hr",{className:"my-10"}),(0,a.jsx)(S,{data:r.faQsCollection.items})]}):null,(0,a.jsx)(y,{})]}),(0,a.jsx)(A,{recentBlogs:d})]})}),(0,a.jsx)(p.Z,{})]})};var L=t(130),P=t(9360);let q=e=>{let{data:s}=e;return(0,a.jsx)("div",{className:"section-container lg:my-14 my-8 mb-20",children:(0,a.jsxs)("div",{className:"lg:flex lg:space-x-28",children:[(0,a.jsx)("div",{className:"lg:w-64 lg:mb-0 mb-10",children:(0,a.jsxs)("div",{className:"relative lg:w-64",children:[(0,a.jsx)("div",{className:"lg:block hidden",children:(0,a.jsx)(P.Z,{height:424,width:267})}),(0,a.jsxs)("h4",{className:"text-black lg:absolute -right-16 bottom-8 text-xl lg:whitespace-pre-wrap sm:text-center",children:["Frequently asked ","\n"," questions"]})]})}),(0,a.jsx)("div",{className:"w-full",children:s.map(e=>{let{answer:s,question:t,sys:r}=e;return(0,a.jsx)(C,{answer:s,question:t},r.id)})})]})})};var R=t(8177),I=t(2686);let M=e=>{let{data:s}=e,{banner:t,content:r,faQsCollection:l}=s,i=(0,I.T)();return(0,c.useEffect)(()=>{i((0,R.tp)())},[]),(0,a.jsxs)("section",{"aria-describedby":"Location Page",className:"mb-20",children:[(0,a.jsx)(j.Z,{backgroundImage:t.backgroundImage,description:t.description,descriptionForBike:t.descriptionForBike,title:t.title,titleForBike:t.titleForBike}),(0,a.jsxs)("div",{className:"section-container mb-20 mt-8",children:[(0,a.jsx)(u,{data:r}),l.items.length?(0,a.jsxs)(c.Fragment,{children:[(0,a.jsx)("hr",{className:"my-10"}),(0,a.jsx)(q,{data:l.items})]}):null]}),(0,a.jsx)(p.Z,{})]})};var O=t(3e3);let Q=e=>{let{data:s}=e;return(0,a.jsx)("div",{className:"section-container mb-20 mt-8",children:(0,a.jsx)(u,{data:s.content})})},W=e=>{let{locationData:s,richTextPageData:t,blogCategoryPageData:c,blogPageData:d}=e,{query:o}=(0,r.useRouter)();if(t)return(0,a.jsxs)(n.Z,{shouldShowHeaderAndFooter:!(null==o?void 0:o.mobile),children:[(0,a.jsx)(i.Z,{...t.seo}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(Q,{data:t})})]});if(s)return(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(i.Z,{...s.seo}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(M,{data:s})})]});if(c){let{categories:x,description:m,postsCollection:h,seo:u,title:j}=c;return(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(i.Z,{...u}),(0,a.jsx)(L.Z,{description:m,postsCollection:h,title:j,categories:x})]})}if(d){let{detail:p,author:g,category:v,estimatedReadTime:N,publishedDate:b,sys:f,recentBlogs:y}=d;return(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(i.Z,{...p.seo}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(D,{recentBlogs:y,author:g,category:v,detail:p,estimatedReadTime:N,publishedDate:b,sys:f})})]})}return(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(O.Z,{})]})};var K=!0,X=W},130:function(e,s,t){"use strict";t.d(s,{Z:function(){return j}});var a=t(5893),r=t(924),l=t(1664),i=t.n(l),n=t(3750),c=t(5953);let d=e=>{var s;let{author:t,category:r,estimatedReadTime:l,publishedDate:d,shortDescription:o,slug:x,thumbnail:m,title:h,sys:u}=e;return(0,a.jsxs)("div",{className:"relative pb-11 border bg-pear/5 rounded-xl hover:scale-[1.02] smooth-animate hover:border-pear shadow-md hover:shadow-xl drop-shadow-sm",children:[(0,a.jsx)(i(),{href:(null==r?void 0:null===(s=r.slug)||void 0===s?void 0:s.trim().length)?"/".concat(r.slug,"/").concat(x,"/"):"/".concat(x,"/"),passHref:!0,children:(0,a.jsx)(c.Z,{height:192,width:320,className:"rounded-t-xl w-full object-cover h-48",imageSrc:m.url})}),(0,a.jsxs)("div",{className:"p-3",children:[(0,a.jsx)("p",{className:"uppercase text-rose-500 text-sm mb-2 cut-text-1",children:r.title}),(0,a.jsx)(i(),{href:r.slug.trim().length?"/".concat(r.slug,"/").concat(x,"/"):"/".concat(x,"/"),passHref:!0,children:(0,a.jsx)("strong",{className:"inline-block cut-text-2 mb-2",children:h})}),(0,a.jsx)("p",{className:"text-gray-500 text-sm cut-text-4 mb-2",children:o}),(0,a.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 p-3",children:[(0,a.jsx)(i(),{className:"growing-link text-sm text-pistachio",href:r.slug.trim().length?"/".concat(r.slug,"/").concat(x,"/"):"/".concat(x,"/"),passHref:!0,children:(0,a.jsxs)("div",{className:"inline-flex items-center",children:[(0,a.jsx)("span",{children:"Read Post"}),(0,a.jsx)(n.UE1,{className:"-rotate-45 w-5 h-5",size:16})]})}),(0,a.jsxs)("div",{className:"grid grid-cols-3 text-xs text-gray-500 mt-2 divide-x divide-gray-500",children:[(0,a.jsx)("div",{className:"cut-text-1 text-left",children:t}),(0,a.jsx)("div",{className:"cut-text-1 text-center",children:new Date(u.publishedAt||d).toLocaleDateString("en",{day:"2-digit",month:"short",year:"numeric"})}),(0,a.jsxs)("div",{className:"cut-text-1 text-right",children:[l," mins read"]})]})]})]})]})};var o=t(1163),x=t(8141);let m=e=>{let{categories:s}=e,{asPath:t}=(0,o.useRouter)();return(0,a.jsxs)(x.Z,{className:"mt-8 border-b rounded-md text-sm space-x-3",showControls:!1,children:[(0,a.jsx)(i(),{href:"/blog/",className:"\n        smooth-animate py-1  px-3 whitespace-nowrap font-semibold border-b-2 ".concat("/blog/"===t?"text-pistachio border-pistachio":"text-gray-500 hover:text-pistachio border-transparent"),children:"Home"}),s.map(e=>(0,a.jsx)(i(),{href:"/"+e.slug+"/",className:"\n          smooth-animate py-1  px-3 whitespace-nowrap font-semibold border-b-2 ".concat(t==="/"+e.slug+"/"?"text-pistachio border-pistachio":"text-gray-500 hover:text-pistachio border-transparent"),children:e.title},e.sys.id))]})},h=e=>{let{description:s,title:t}=e;return(0,a.jsxs)("div",{className:"section-container",children:[(0,a.jsx)("h1",{className:"text-4xl text-center font-semibold text-pistachio",children:t}),(0,a.jsx)("p",{className:"text-center mt-6 text-gray-500",children:s})]})},u=e=>{let{description:s,postsCollection:t,title:l,categories:i}=e;return(0,a.jsxs)("section",{className:"section-container py-8","aria-describedby":"Blogs listing page",children:[(0,a.jsx)(h,{description:s,title:l}),(0,a.jsx)(m,{categories:i}),(0,a.jsx)(r.Z,{children:(0,a.jsx)("div",{className:"py-10 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6",children:t.items.map(e=>(0,a.jsx)(d,{...e},e.slug))})})]})};var j=u}},function(e){e.O(0,[4980,3415,5937,260,4617,955,9866,3874,3609,4090,2013,8907,1255,994,6556,4251,5675,5680,2104,7674,6737,3e3,8210,2068,9774,2888,179],function(){return e(e.s=5620)}),_N_E=e.O()}]);