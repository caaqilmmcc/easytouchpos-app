import{k as m,o as c,f,g as a,w as s,u as e,m as n,M as u,a3 as d}from"./vendor.99ed0ea4.js";import{s as l}from"./index.a677176e.js";import{e as _}from"./index.206caab4.js";import{e as p,c as g,a as w,b as r,_ as x}from"./Input.ef2e7162.js";const h={class:"h-screen flex justify-center items-center"},v=m({__name:"Login",setup(b){function i(t){let o=new FormData(t.target);l.login.submit({email:o.get("email"),password:o.get("password")})}return(t,o)=>(c(),f("div",h,[a(e(x),{class:"w-full max-w-sm"},{default:s(()=>[a(e(p),null,{default:s(()=>[a(e(g),null,{default:s(()=>[n("Login to your FrappeUI App!")]),_:1})]),_:1}),a(e(w),null,{default:s(()=>[u("form",{class:"flex flex-col space-y-2 w-full",onSubmit:d(i,["prevent"])},[a(e(r),{required:"",name:"email",type:"text",placeholder:"johndoe@email.com",label:"User ID"}),a(e(r),{required:"",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",label:"Password"}),a(e(_),{loading:e(l).login.loading},{default:s(()=>[n("Login")]),_:1},8,["loading"])],32)]),_:1})]),_:1})]))}});export{v as default};
