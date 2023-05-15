import{r as u}from"./index.ed373d49.js";var h={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=u,p=Symbol.for("react.element"),f=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,y=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function j(s,t,l){var a,r={},n=null,o=null;l!==void 0&&(n=""+l),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)w.call(t,a)&&!v.hasOwnProperty(a)&&(r[a]=t[a]);if(s&&s.defaultProps)for(a in t=s.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:p,type:s,key:n,ref:o,props:r,_owner:y.current}}i.Fragment=f;i.jsx=j;i.jsxs=j;h.exports=i;var e=h.exports;const b=({sensorName:s,sensorValue:t})=>{let l;return(a=>{a.temperature="Temperatura",a.humidity="Humedad",a.precipitationsPerMinute="Precipitaciones por minuto",a.acumulatedPrecipitations="Precipitaciones acumuladas",a.windDirection="Dirección del viento	",a.windForce="Fuerza del viento",a.windSpeed="Velocidad del viento"})(l||(l={})),e.jsx("div",{className:"col-md-4 col-lg-4",children:e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title m-b-5 text-center",children:e.jsx("b",{children:l[s]})}),e.jsx("h3",{className:"font-light text-center",children:t}),e.jsx("div",{className:"m-t-20 text-center"})]})})})},_=({day:s})=>e.jsx("div",{className:"col-md-4 col-lg-4",children:e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex align-items-center flex-row m-t-30",children:[e.jsxs("div",{className:"display-5 text-info",children:[e.jsx("i",{className:"wi wi-day-showers"}),e.jsxs("span",{children:["25",e.jsx("sup",{children:"°"})]})]}),e.jsxs("div",{className:"m-l-10",children:[e.jsx("h3",{className:"m-b-0",children:s}),e.jsx("small",{children:"Formosa, Argentina"})]})]}),e.jsx("table",{className:"table no-border mini-table m-t-20",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-muted",children:"Dirección del Viento"}),e.jsx("td",{className:"font-medium",children:"Norte"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-muted",children:"Humedad"}),e.jsx("td",{className:"font-medium",children:"83%"})]})]})}),e.jsxs("ul",{className:"row list-style-none text-center m-t-30",children:[e.jsxs("li",{className:"col-3",children:[e.jsx("h4",{className:"text-info",children:e.jsx("i",{className:"wi wi-day-sunny"})}),e.jsx("span",{className:"d-block text-muted",children:"09:30"}),e.jsxs("h3",{className:"m-t-5",children:["20",e.jsx("sup",{children:"°"})]})]}),e.jsxs("li",{className:"col-3",children:[e.jsx("h4",{className:"text-info",children:e.jsx("i",{className:"wi wi-day-cloudy"})}),e.jsx("span",{className:"d-block text-muted",children:"11:30"}),e.jsxs("h3",{className:"m-t-5",children:["22",e.jsx("sup",{children:"°"})]})]}),e.jsxs("li",{className:"col-3",children:[e.jsx("h4",{className:"text-info",children:e.jsx("i",{className:"wi wi-day-hail"})}),e.jsx("span",{className:"d-block text-muted",children:"13:30"}),e.jsxs("h3",{className:"m-t-5",children:["30",e.jsx("sup",{children:"°"})]})]}),e.jsxs("li",{className:"col-3",children:[e.jsx("h4",{className:"text-info",children:e.jsx("i",{className:"wi wi-day-sprinkle"})}),e.jsx("span",{className:"d-block text-muted",children:"15:30"}),e.jsxs("h3",{className:"m-t-5",children:["28",e.jsx("sup",{children:"°"})]})]})]})]})})}),g=await fetch("https://sada-api-production.up.railway.app/api/fake"),m=await g.json(),x=m[m.length-1],c=new Date;c.setHours(c.getHours()-1);const D=c.getFullYear(),k=c.getMonth()+1,O=c.getDate(),E=c.getHours(),P=c.getMinutes(),R=`${O}/${k}/${D}`,F=`${E}:${P}`,d=[c];for(let s=0;s<2;s++){const t=new Date(d[s]);t.setDate(t.getDate()+1),d.push(t)}const $=d.map(s=>s.toLocaleDateString("es-ES",{weekday:"long"})),S=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"row",children:$.map((s,t)=>e.jsx(_,{day:s},"dia-"+s))}),e.jsxs("h4",{className:"text-center",children:["Ultima Actualización: ",R,":",F]}),e.jsx("div",{className:"row",children:Object.keys(x).map((s,t)=>e.jsx(b,{sensorName:s,sensorValue:x[s]},"sensores-"+t))})]});export{S as Sensores};