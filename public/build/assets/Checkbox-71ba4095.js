import{k as r,l as u,v as d,o as i,e as p}from"./app-5e2a7eae.js";const k=["value"],h={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:c}){const s=c,l=e,t=r({get(){return l.checked},set(o){s("update:checked",o)}});return(o,a)=>u((i(),p("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n),type:"checkbox",value:e.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,k)),[[d,t.value]])}};export{h as _};
