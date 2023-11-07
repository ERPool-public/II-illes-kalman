import{q as a,o as i,e as l,a as e,b as d,i as _,m as c,s as m,t as n,f as v,F as f,h as P}from"./app-57e4c8dc.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const b={components:{TopMenu},data(){return{form:{name:"",oneUnitPrice:0,threeUnitPrice:0,fiveUnitPrice:0},message:"",products:[]}},methods:{submitForm(){axios.post("/products/store",this.form).then(s=>{console.log("Sikeres termék felvétel"),this.message="Sikeres termék felvétel",this.form={name:"",oneUnitPrice:0,threeUnitPrice:0,fiveUnitPrice:0},this.fetchProducts()}).catch(s=>{console.log("Nem sikerült termék felvétele"),this.message="Nem sikerült termék felvétele"})},fetchProducts(){axios.get("/products/list").then(s=>{this.products=s.data}).catch(s=>{console.error("Hiba a termékek lekérésekor: "+s)})}},mounted(){this.fetchProducts()}},k={class:"container"},g={class:"form-group"},y=e("label",{for:"name"},"Termék neve",-1),T={class:"form-group"},x=e("label",{for:"oneUnitPrice"},"Egységára",-1),M={class:"form-group"},V=e("label",{for:"threeUnitPrice"},"3 Termék ára",-1),N={class:"form-group"},q=e("label",{for:"fiveUnitPrice"},"5 Termék ára",-1),F=e("button",{type:"submit",class:"btn btn-primary"},"Mentés",-1),S={key:0,class:"alert alert-success mt-3"},w={class:"table table-bordered mt-3"},B=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Név"),e("th",{scope:"col"},"Egységár"),e("th",{scope:"col"},"3 Termék ára"),e("th",{scope:"col"},"5 Termék ára"),e("th",{scope:"col"},"Státusz")])],-1);function C(s,r,E,D,o,u){const p=a("TopMenu"),h=a("router-view");return i(),l(f,null,[e("div",null,[d(p),d(h)]),e("div",k,[e("form",{onSubmit:r[4]||(r[4]=_((...t)=>u.submitForm&&u.submitForm(...t),["prevent"]))},[e("div",g,[y,c(e("input",{type:"text",id:"name","onUpdate:modelValue":r[0]||(r[0]=t=>o.form.name=t),class:"form-control",required:""},null,512),[[m,o.form.name]])]),e("div",T,[x,c(e("input",{type:"number",id:"oneUnitPrice","onUpdate:modelValue":r[1]||(r[1]=t=>o.form.oneUnitPrice=t),class:"form-control",required:""},null,512),[[m,o.form.oneUnitPrice]])]),e("div",M,[V,c(e("input",{type:"number",id:"threeUnitPrice","onUpdate:modelValue":r[2]||(r[2]=t=>o.form.threeUnitPrice=t),class:"form-control",required:""},null,512),[[m,o.form.threeUnitPrice]])]),e("div",N,[q,c(e("input",{type:"number",id:"fiveUnitPrice","onUpdate:modelValue":r[3]||(r[3]=t=>o.form.fiveUnitPrice=t),class:"form-control",required:""},null,512),[[m,o.form.fiveUnitPrice]])]),F],32),o.message?(i(),l("div",S,n(o.message),1)):v("",!0),e("table",w,[B,e("tbody",null,[(i(!0),l(f,null,P(o.products,t=>(i(),l("tr",{key:t.id},[e("td",null,n(t.name),1),e("td",null,n(t.oneUnitPrice),1),e("td",null,n(t.threeUnitPrice),1),e("td",null,n(t.fiveUnitPrice),1),e("td",null,n(t.status),1)]))),128))])])])],64)}const L=U(b,[["render",C]]);export{L as default};
