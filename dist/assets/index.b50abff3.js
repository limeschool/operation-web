import{g as Re,d as Z,e as Le,f as ee,h as Oe,_ as Me}from"./index.917dbba1.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{d as Pe,e as c,r as Ge,c as je,w as Je,aG as m,bG as Ke,b3 as We,bw as Xe,b8 as He,bh as Qe,aW as Ye,b7 as Ze,bx as ea,by as aa,b6 as ua,bz as ta,bi as la,bt as oa,aT as na,bF as sa,bq as ia,bl as da,bm as ra,aX as ca,bA as ma,B as d,C,aJ as a,aI as e,aV as U,aN as i,bB as A,aD as v,F as g,aL as ae,aK as ue,aO as F,u as te,aE as R,a$ as pa,n as _a,b4 as fa,bg as va,bC as ga,bD as Fa,br as ha,bn as Ba,D as ba,bE as Va}from"./arco.af438d9f.js";import{u as wa}from"./loading.275920af.js";import{g as Da}from"./team.639f671a.js";import{g as Ca}from"./role.8dfc8fcb.js";import{S as ya,c as L}from"./sortable.esm.7eaa3e7f.js";import{l as xa}from"./logo.f3610a8b.js";import"./chart.a344a590.js";import"./vue.d426fe84.js";const Ea={class:"container"},ka={class:"action-icon"},Ua={class:"action-icon"},Aa={id:"tableSetting"},Ia={style:{"margin-right":"4px",cursor:"move"}},Sa={class:"title"},Na=["src"],Ta=["src"],za={name:"User"},$a=Pe({...za,setup(qa){const O=()=>({}),V=c(!1),w=c(!1),M=c(),{loading:le,setLoading:P}=wa(!0),G=c([]),I=c([]),S=c([]),o=c(O()),s=c({}),h=c([]),y=c([]),N=c("medium"),p=Ge({current:1,pageSize:10,total:0}),oe=async()=>{const{data:l}=await Ca();I.value=[l]},ne=async()=>{const{data:l}=await Da();S.value=[l]};oe(),ne();const se=je(()=>[{title:"\u5E8F\u53F7",dataIndex:"index",slotName:"index",width:50},{title:"\u7528\u6237\u89D2\u8272",dataIndex:"role",slotName:"role"},{title:"\u7528\u6237\u90E8\u95E8",dataIndex:"team",slotName:"team"},{title:"\u7528\u6237\u6635\u79F0",dataIndex:"nickname"},{title:"\u7528\u6237\u59D3\u540D",dataIndex:"name"},{title:"\u7528\u6237\u7535\u8BDD",dataIndex:"phone"},{title:"\u7528\u6237\u5934\u50CF",dataIndex:"avatar",slotName:"avatar"},{title:"\u7528\u6237\u90AE\u7BB1",dataIndex:"email"},{title:"\u7528\u6237\u6027\u522B",dataIndex:"sex",slotName:"sex"},{title:"\u7528\u6237\u72B6\u6001",dataIndex:"status",slotName:"status"},{title:"\u6700\u540E\u767B\u5F55\u65F6\u95F4",dataIndex:"last_login",slotName:"lastLogin",width:170},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",slotName:"createdAt",width:170},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updated_at",slotName:"updatedAt",width:170},{title:"\u64CD\u4F5C\u4EBA\u5458",dataIndex:"operator"},{title:"\u64CD\u4F5C",dataIndex:"operations",slotName:"operations",fixed:"right",width:200}]),D=async l=>{P(!0);try{p.current||(p.current=1),l||(l={}),l.page=p.current,l.count=p.pageSize;const{data:t}=await Re(l);G.value=t.list,p.total=t.total}finally{P(!1)}};D();const j=()=>{p.current=1,p.pageSize=10;const l={...o.value};l.status=void 0,l.status&&(l.status=o.value.status==="true"),o.value.time&&o.value.time.length===1&&(l.start=Math.floor(new Date(o.value.time[0]).getTime()/1e3)),o.value.time&&o.value.time.length===2&&(l.start=Math.floor(new Date(o.value.time[0]).getTime()/1e3),l.end=Math.floor(new Date(o.value.time[1]).getTime()/1e3)),D(l)},ie=l=>{D()},de=()=>{o.value=O()},re=(l,t)=>{N.value=l},ce=(l,t,f)=>{l?h.value.splice(f,0,t):h.value=y.value.filter(r=>r.dataIndex!==t.dataIndex)},me=()=>{s.value={},w.value=!0,V.value=!0},pe=async l=>{await Oe({id:l}),await D(),U.success("\u5220\u9664\u6210\u529F")},_e=l=>{s.value=Z(l),w.value=!1,V.value=!0},fe=l=>{const t=l.status?"\u542F\u7528":"\u7981\u7528";pa.info({title:"\u72B6\u6001\u53D8\u66F4\u63D0\u793A",content:()=>`\u60A8\u786E\u8BA4\u8981 '${t}'\u6B64\u89D2\u8272\uFF1F`,closable:!0,hideCancel:!1,onOk:async()=>{ee(l).then(()=>{U.success("\u66F4\u65B0\u6210\u529F")}).catch(()=>{l.status=!l.status})},onCancel:()=>{l.status=!l.status}})},ve=async()=>{if(await M.value.validate())return!1;const t=Z(s.value);return w.value?(await Le(t),U.success("\u65B0\u5EFA\u6210\u529F")):(await ee(t),U.success("\u66F4\u65B0\u6210\u529F")),await D(),!0},J=(l,t,f,r=!1)=>{const n=r?L(l):l;return t>-1&&f>-1&&n.splice(t,1,n.splice(f,1,n[t]).pop()),n},ge=l=>{l&&_a(()=>{const t=document.getElementById("tableSetting");new ya(t,{onEnd(f){const{oldIndex:r,newIndex:n}=f;J(h.value,r,n),J(y.value,r,n)}})})};return Je(()=>se.value,l=>{h.value=L(l),h.value.forEach((t,f)=>{t.checked=!0}),y.value=L(h.value)},{deep:!0,immediate:!0}),(l,t)=>{const f=m("Breadcrumb"),r=Ke,n=fa,_=va,B=We,K=ga,Fe=Xe,he=Fa,T=ha,W=He,X=Qe,Be=m("icon-search"),z=Ye,H=m("icon-refresh"),Q=Ze,be=m("icon-plus"),$=ea,Ve=m("icon-line-height"),we=Va,De=aa,Ce=m("icon-settings"),ye=m("icon-drag-arrow"),xe=ua,Ee=ta,ke=la,Ue=m("icon-man"),x=oa,Ae=m("icon-woman"),Ie=na,Se=m("icon-edit"),Ne=m("icon-delete"),Te=sa,ze=ia,$e=da,E=ra,Y=Ba,qe=ca,k=ma("permission");return d(),C("div",Ea,[a(f),a($e,{class:"general-card",title:"\u7528\u6237\u7BA1\u7406"},{default:e(()=>[a(T,null,{default:e(()=>[a(_,{flex:1},{default:e(()=>[a(W,{model:o.value,"label-col-props":{span:6},"wrapper-col-props":{span:18},"label-align":"left","auto-label-width":""},{default:e(()=>[a(T,{gutter:16},{default:e(()=>[a(_,{span:8},{default:e(()=>[a(n,{field:"team_id",label:"\u7528\u6237\u89D2\u8272"},{default:e(()=>[a(r,{modelValue:o.value.role_id,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value.role_id=u),"check-strictly":"",options:I.value,"field-names":{value:"id",label:"name"},placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u89D2\u8272","allow-search":""},null,8,["modelValue","options"])]),_:1})]),_:1}),a(_,{span:8},{default:e(()=>[a(n,{field:"team_id",label:"\u7528\u6237\u90E8\u95E8"},{default:e(()=>[a(r,{modelValue:o.value.team_id,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value.team_id=u),"check-strictly":"",options:S.value,"field-names":{value:"id",label:"name"},placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u90E8\u95E8","allow-search":""},null,8,["modelValue","options"])]),_:1})]),_:1}),a(_,{span:8},{default:e(()=>[a(n,{field:"name",label:"\u7528\u6237\u59D3\u540D"},{default:e(()=>[a(B,{modelValue:o.value.name,"onUpdate:modelValue":t[2]||(t[2]=u=>o.value.name=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:e(()=>[a(n,{field:"phone",label:"\u7528\u6237\u7535\u8BDD"},{default:e(()=>[a(B,{modelValue:o.value.phone,"onUpdate:modelValue":t[3]||(t[3]=u=>o.value.phone=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u7535\u8BDD"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:e(()=>[a(n,{field:"status",label:"\u7528\u6237\u72B6\u6001"},{default:e(()=>[a(Fe,{modelValue:o.value.status,"onUpdate:modelValue":t[4]||(t[4]=u=>o.value.status=u),"allow-search":"",placeholder:"\u7528\u6237\u72B6\u6001"},{default:e(()=>[a(K,{value:"true"},{default:e(()=>[i("\u542F\u7528")]),_:1}),a(K,{value:"false"},{default:e(()=>[i("\u7981\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:e(()=>[a(n,{field:"createdTime",label:"\u521B\u5EFA\u65F6\u95F4"},{default:e(()=>[a(he,{modelValue:o.value.time,"onUpdate:modelValue":t[5]||(t[5]=u=>o.value.time=u),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(X,{style:{height:"84px"},direction:"vertical"}),a(_,{flex:"86px",style:{"text-align":"right"}},{default:e(()=>[a(Q,{direction:"vertical",size:18},{default:e(()=>[a(z,{type:"primary",onClick:j},{icon:e(()=>[a(Be)]),default:e(()=>[i(" \u641C\u7D22 ")]),_:1}),a(z,{onClick:de},{icon:e(()=>[a(H)]),default:e(()=>[i(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1})]),_:1}),a(X,{style:{"margin-top":"0"}}),a(T,{style:{"margin-bottom":"16px","align-items":"center"}},{default:e(()=>[a(_,{span:12},{default:e(()=>[A((d(),v(z,{type:"primary",onClick:me},{icon:e(()=>[a(be)]),default:e(()=>[i(" \u65B0\u5EFA ")]),_:1})),[[k,"system:user:add"]])]),_:1}),a(_,{span:12,style:{display:"flex",flex:"1","align-items":"center","justify-content":"end"}},{default:e(()=>[a($,{content:"\u5237\u65B0"},{default:e(()=>[g("div",{class:"action-icon",onClick:j},[a(H,{size:"18"})])]),_:1}),a(De,{onSelect:re},{content:e(()=>[(d(!0),C(ae,null,ue(l.$densityList,u=>(d(),v(we,{key:u.value,value:u.value,class:ba({active:u.value===N.value})},{default:e(()=>[g("span",null,F(u.name),1)]),_:2},1032,["value","class"]))),128))]),default:e(()=>[a($,{content:"\u5B57\u4F53\u5927\u5C0F"},{default:e(()=>[g("div",ka,[a(Ve,{size:"18"})])]),_:1})]),_:1}),a($,{content:"\u884C\u8BBE\u7F6E"},{default:e(()=>[a(Ee,{trigger:"click",position:"bl",onPopupVisibleChange:ge},{content:e(()=>[g("div",Aa,[(d(!0),C(ae,null,ue(y.value,(u,b)=>(d(),C("div",{key:u.dataIndex,class:"setting"},[g("div",Ia,[a(ye)]),g("div",null,[a(xe,{modelValue:u.checked,"onUpdate:modelValue":q=>u.checked=q,onChange:q=>ce(q,u,b)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),g("div",Sa,F(u.title==="#"?"index":u.title),1)]))),128))])]),default:e(()=>[g("div",Ua,[a(Ce,{size:"18"})])]),_:1})]),_:1})]),_:1})]),_:1}),A((d(),v(ze,{"row-key":"id",loading:te(le),pagination:p,columns:h.value,data:G.value,bordered:!1,size:N.value,scroll:{x:2e3,y:200},onPageChange:ie},{index:e(({rowIndex:u})=>[i(F(u+1+(p.current-1)*p.pageSize),1)]),role:e(({record:u})=>[i(F(u.role.name),1)]),team:e(({record:u})=>[i(F(u.team.name),1)]),avatar:e(({record:u})=>[a(ke,null,{default:e(()=>[u.avatar==""?(d(),C("img",{key:0,alt:"avatar",src:te(xa)},null,8,Na)):R("",!0),g("img",{alt:"avatar",src:l.$staticUrl+u.avatar},null,8,Ta)]),_:2},1024)]),sex:e(({record:u})=>[u.sex?(d(),v(x,{key:0,color:"arcoblue"},{icon:e(()=>[a(Ue)]),default:e(()=>[i("\u7537 ")]),_:1})):R("",!0),u.sex?R("",!0):(d(),v(x,{key:1,color:"red"},{icon:e(()=>[a(Ae)]),default:e(()=>[i("\u5973 ")]),_:1}))]),status:e(({record:u})=>[a(Ie,{modelValue:u.status,"onUpdate:modelValue":b=>u.status=b,type:"round",onChange:b=>fe(u)},{checked:e(()=>[i(" \u542F\u7528 ")]),unchecked:e(()=>[i(" \u7981\u7528 ")]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),lastLogin:e(({record:u})=>[i(F(l.$formatTime(u.last_login)),1)]),createdAt:e(({record:u})=>[i(F(l.$formatTime(u.created_at)),1)]),updatedAt:e(({record:u})=>[i(F(l.$formatTime(u.updated_at)),1)]),operations:e(({record:u})=>[a(Q,{class:"cursor-pointer"},{default:e(()=>[A((d(),v(x,{color:"arcoblue",onClick:b=>_e(u)},{icon:e(()=>[a(Se)]),default:e(()=>[i("\u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[k,"system:user:update"]]),a(Te,{content:"\u60A8\u786E\u8BA4\u8981\u5220\u9664\u6B64\u7528\u6237\u4E48\uFF1F",type:"warning",onOk:b=>pe(u.id)},{default:e(()=>[A((d(),v(x,{color:"red"},{icon:e(()=>[a(Ne)]),default:e(()=>[i("\u5220\u9664 ")]),_:1})),[[k,"system:user:delete"]])]),_:2},1032,["onOk"])]),_:2},1024)]),_:1},8,["loading","pagination","columns","data","size"])),[[k,"system:user:query"]])]),_:1}),a(qe,{visible:V.value,"onUpdate:visible":t[15]||(t[15]=u=>V.value=u),title:w.value?"\u65B0\u5EFA":"\u4FEE\u6539",width:"380px",onCancel:t[16]||(t[16]=u=>V.value=!1),onBeforeOk:ve},{default:e(()=>[a(W,{ref_key:"submitFormRef",ref:M,model:s.value,"label-align":"left",layout:"horizontal","auto-label-width":""},{default:e(()=>[a(n,{field:"name",label:"\u7528\u6237\u59D3\u540D",rules:[{required:!0,message:"\u7528\u6237\u59D3\u540D\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(B,{modelValue:s.value.name,"onUpdate:modelValue":t[6]||(t[6]=u=>s.value.name=u),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D"},null,8,["modelValue"])]),_:1}),a(n,{field:"phone",label:"\u7528\u6237\u7535\u8BDD",rules:[{required:!0,message:"\u7528\u6237\u7535\u8BDD\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(B,{modelValue:s.value.phone,"onUpdate:modelValue":t[7]||(t[7]=u=>s.value.phone=u),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u7535\u8BDD"},null,8,["modelValue"])]),_:1}),a(n,{field:"email",label:"\u7528\u6237\u90AE\u7BB1",rules:[{required:!0,message:"\u7528\u6237\u90AE\u7BB1\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(B,{modelValue:s.value.email,"onUpdate:modelValue":t[8]||(t[8]=u=>s.value.email=u),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),a(n,{field:"sex",label:"\u7528\u6237\u6027\u522B",rules:[{required:!0,message:"\u7528\u6237\u6027\u522B\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(Y,{modelValue:s.value.sex,"onUpdate:modelValue":t[9]||(t[9]=u=>s.value.sex=u)},{default:e(()=>[a(E,{value:!0},{default:e(()=>[i("\u7537")]),_:1}),a(E,{value:!1},{default:e(()=>[i("\u5973")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(n,{field:"role_id",label:"\u7528\u6237\u89D2\u8272",rules:[{required:!0,message:"\u7528\u6237\u89D2\u8272\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(r,{modelValue:s.value.role_id,"onUpdate:modelValue":t[10]||(t[10]=u=>s.value.role_id=u),"check-strictly":"",options:I.value,placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u89D2\u8272","field-names":{value:"id",label:"name"},"allow-search":""},null,8,["modelValue","options"])]),_:1}),a(n,{field:"team_id",label:"\u7528\u6237\u90E8\u95E8",rules:[{required:!0,message:"\u7528\u6237\u90E8\u95E8\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(r,{modelValue:s.value.team_id,"onUpdate:modelValue":t[11]||(t[11]=u=>s.value.team_id=u),"check-strictly":"",options:S.value,"field-names":{value:"id",label:"name"},placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u90E8\u95E8","allow-search":""},null,8,["modelValue","options"])]),_:1}),a(n,{field:"status",label:"\u7528\u6237\u72B6\u6001",rules:[{required:!0,message:"\u7528\u6237\u72B6\u6001\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(Y,{modelValue:s.value.status,"onUpdate:modelValue":t[12]||(t[12]=u=>s.value.status=u)},{default:e(()=>[a(E,{value:!0},{default:e(()=>[i("\u542F\u7528")]),_:1}),a(E,{value:!1},{default:e(()=>[i("\u7981\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1}),w.value?(d(),v(n,{key:0,field:"password",label:"\u7528\u6237\u5BC6\u7801",rules:[{required:!0,message:"\u7528\u6237\u5BC6\u7801\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:e(()=>[a(B,{modelValue:s.value.password,"onUpdate:modelValue":t[13]||(t[13]=u=>s.value.password=u),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801"},null,8,["modelValue"])]),_:1})):(d(),v(n,{key:1,field:"password",label:"\u7528\u6237\u5BC6\u7801"},{default:e(()=>[a(B,{modelValue:s.value.password,"onUpdate:modelValue":t[14]||(t[14]=u=>s.value.password=u),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801"},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])]),_:1},8,["visible","title"])])}}});const iu=Me($a,[["__scopeId","data-v-956f54bc"]]);export{iu as default};