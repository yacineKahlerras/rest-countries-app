import{b as l,r as t,_ as n,j as r,O as c}from"./index-70b50030.js";const d=t.lazy(()=>n(()=>import("./CountryElement-b0487b7c.js"),["assets/CountryElement-b0487b7c.js","assets/index-70b50030.js","assets/index-8507842b.css"]));function p(e){const{countriesList:a,scrollPosition:o}=e;return r("div",{className:`grid justify-center justify-items-center gap-5 grid-cols-countriesMap \r
       mx-auto pb-14`,children:a.map((s,i)=>r(t.Suspense,{fallback:r(c,{height:80,width:80,color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2}),children:r(d,{scrollPosition:o,country:s})},i))})}const f=l.trackWindowScroll(p);export{f as default};
