import{d as H,_ as Ne}from"./index.917dbba1.js";/* empty css               */import Oe from"./SelectTeam.bdb76a62.js";/* empty css              *//* empty css               *//* empty css                *//* empty css              *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as $e,e as s,r as ze,c as qe,w as Le,aG as m,aW as Pe,bx as Je,by as Ge,b6 as Ke,bz as We,aT as je,bt as He,bF as Xe,b7 as Qe,bq as Ye,bl as Ze,bG as ea,b3 as aa,bm as ta,bw as ua,bH as oa,b8 as na,aX as la,bI as sa,a$ as X,bA as ia,B as i,C as U,aJ as u,aI as t,aV as y,bB as B,aD as _,aN as l,F as v,aL as Q,aK as Y,bJ as da,aE as T,aO as h,u as ca,n as ra,bg as ma,br as _a,b4 as pa,bn as va,bC as fa,D as ga,bE as Fa}from"./arco.af438d9f.js";import{u as ba}from"./loading.275920af.js";import{g as Ca,u as ya,a as Ba,b as Z,c as ha,d as ka,e as Ea}from"./role.8dfc8fcb.js";import{S as Da,c as O}from"./sortable.esm.7eaa3e7f.js";import{g as wa}from"./team.639f671a.js";import"./chart.a344a590.js";import"./vue.d426fe84.js";const Va={class:"container"},Aa={class:"action-icon"},xa={class:"action-icon"},Sa={id:"tableSetting"},Ua={style:{"margin-right":"4px",cursor:"move"}},Ta={class:"title"},Ia={name:"Role"},Ma=$e({...Ia,setup(Ra){const F=s(!1),b=s(!1),k=s(!1),$=s(),{loading:ee,setLoading:z}=ba(!0),I=s([]),q=s([]),E=s([]),D=s([]),L=s([]),n=s({}),f=s([]),w=s([]),M=s("medium"),P=s(),V=ze({...{current:1,pageSize:20}}),ae=qe(()=>[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"name",slotName:"name"},{title:"\u89D2\u8272\u6807\u8BC6",dataIndex:"keyword"},{title:"\u89D2\u8272\u72B6\u6001",dataIndex:"status",slotName:"status"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",slotName:"createdAt"},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updated_at",slotName:"updatedAt"},{title:"\u64CD\u4F5C\u4EBA\u5458",dataIndex:"operator"},{title:"\u83DC\u5355\u7BA1\u7406",slotName:"menu"},{title:"\u64CD\u4F5C",dataIndex:"operations",slotName:"operations"}]),te=async o=>{const{data:e}=await wa(o);L.value=[e]},A=async o=>{z(!0);try{const{data:e}=await Ca(o);I.value=[e],V.current=1,V.total=e.length}finally{z(!1)}};A(),te();const ue=async()=>{let o=E.value;return o=o.concat(D.value),await ya({role_id:P.value,menu_ids:o}),y.success("\u8BBE\u7F6E\u89D2\u8272\u83DC\u5355\u6210\u529F"),F.value=!1,!0},oe=async o=>{P.value=o.id;const{data:e}=await ha({role_id:o.parent_id});q.value=[e];const d=await ka({role_id:o.id});E.value=d.data,D.value=[],F.value=!0},ne=(o,e)=>{M.value=o},le=(o,e,d)=>{o?f.value.splice(d,0,e):f.value=w.value.filter(c=>c.dataIndex!==e.dataIndex)},se=o=>{const e=o.status?"\u542F\u7528":"\u7981\u7528";X.info({title:"\u72B6\u6001\u53D8\u66F4\u63D0\u793A",content:()=>`\u60A8\u786E\u8BA4\u8981 '${e}'\u6B64\u89D2\u8272\uFF1F`,closable:!0,hideCancel:!1,onOk:async()=>{Z(o).then(()=>{y.success("\u66F4\u65B0\u6210\u529F")}).catch(()=>{o.status=!o.status})},onCancel:()=>{o.status=!o.status}})},J=o=>{n.value={},o&&(n.value.parent_id=o),n.value.status=!0,k.value=!0,b.value=!0},ie=async o=>{await Ea({id:o}),await A(),y.success("\u5220\u9664\u6210\u529F")},de=o=>{n.value=H(o),o.data_scope==="CUSTOM"?n.value.team_ids=JSON.parse(o.team_ids):n.value.team_ids=[],k.value=!1,b.value=!0},ce=async()=>{if(await $.value.validate())return!1;const e=H(n.value);return e.data_scope==="CUSTOM"?e.team_ids=JSON.stringify(e.team_ids):e.team_ids=null,k.value?(await Ba(e),y.success("\u521B\u5EFA\u6210\u529F")):(await Z(e),y.success("\u66F4\u65B0\u6210\u529F")),await A(),!0},G=(o,e,d,c=!1)=>{const r=c?O(o):o;return e>-1&&d>-1&&r.splice(e,1,r.splice(d,1,r[e]).pop()),r},re=o=>{o&&ra(()=>{const e=document.getElementById("tableSetting");new Da(e,{onEnd(d){const{oldIndex:c,newIndex:r}=d;G(f.value,c,r),G(w.value,c,r)}})})};return Le(()=>ae.value,o=>{f.value=O(o),f.value.forEach((e,d)=>{e.checked=!0}),w.value=O(f.value)},{deep:!0,immediate:!0}),(o,e)=>{const d=m("Breadcrumb"),c=m("icon-plus"),r=Pe,K=ma,me=m("icon-refresh"),R=Je,_e=m("icon-line-height"),pe=Fa,ve=Ge,fe=m("icon-settings"),ge=m("icon-drag-arrow"),Fe=Ke,be=We,Ce=_a,ye=je,Be=m("icon-menu"),x=He,he=m("icon-edit"),ke=m("icon-delete"),Ee=Xe,De=Qe,we=Ye,Ve=Ze,Ae=ea,g=pa,W=aa,j=ta,xe=va,S=fa,Se=ua,Ue=oa,Te=na,Ie=la,Me=sa,Re=X,C=ia("permission");return i(),U("div",Va,[u(d),u(Ve,{class:"general-card",title:"\u89D2\u8272\u7BA1\u7406"},{default:t(()=>[u(Ce,{style:{"margin-bottom":"16px","align-items":"center"}},{default:t(()=>[u(K,{span:12},{default:t(()=>[B((i(),_(r,{type:"primary",onClick:e[0]||(e[0]=a=>J())},{icon:t(()=>[u(c)]),default:t(()=>[l(" \u521B\u5EFA ")]),_:1})),[[C,"system:role:add"]])]),_:1}),u(K,{span:12,style:{display:"flex",flex:"1","align-items":"center","justify-content":"end"}},{default:t(()=>[u(R,{content:"\u5237\u65B0"},{default:t(()=>[v("div",{class:"action-icon",onClick:A},[u(me,{size:"18"})])]),_:1}),u(ve,{onSelect:ne},{content:t(()=>[(i(!0),U(Q,null,Y(o.$densityList,a=>(i(),_(pe,{key:a.value,value:a.value,class:ga({active:a.value===M.value})},{default:t(()=>[v("span",null,h(a.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[u(R,{content:"\u5B57\u4F53\u5927\u5C0F"},{default:t(()=>[v("div",Aa,[u(_e,{size:"18"})])]),_:1})]),_:1}),u(R,{content:"\u884C\u8BBE\u7F6E"},{default:t(()=>[u(be,{trigger:"click",position:"bl",onPopupVisibleChange:re},{content:t(()=>[v("div",Sa,[(i(!0),U(Q,null,Y(w.value,(a,p)=>(i(),U("div",{key:a.dataIndex,class:"setting"},[v("div",Ua,[u(ge)]),v("div",null,[u(Fe,{modelValue:a.checked,"onUpdate:modelValue":N=>a.checked=N,onChange:N=>le(N,a,p)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),v("div",Ta,h(a.title==="#"?"index":a.title),1)]))),128))])]),default:t(()=>[v("div",xa,[u(fe,{size:"18"})])]),_:1})]),_:1})]),_:1})]),_:1}),B((i(),_(we,{"row-key":"id",loading:ca(ee),columns:f.value,data:I.value,bordered:!1,size:M.value},da({index:t(({rowIndex:a})=>[l(h(a+1+(V.current-1)*V.pageSize),1)]),status:t(({record:a})=>[u(ye,{modelValue:a.status,"onUpdate:modelValue":p=>a.status=p,type:"round",onChange:p=>se(a)},{checked:t(()=>[l(" \u542F\u7528 ")]),unchecked:t(()=>[l(" \u7981\u7528 ")]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),createdAt:t(({record:a})=>[l(h(o.$formatTime(a.created_at)),1)]),updatedAt:t(({record:a})=>[l(h(o.$formatTime(a.updated_at)),1)]),operations:t(({record:a})=>[u(De,{class:"cursor-pointer"},{default:t(()=>[B((i(),_(x,{color:"arcoblue",onClick:p=>J(a.id)},{icon:t(()=>[u(c)]),default:t(()=>[l(" \u65B0\u5EFA ")]),_:2},1032,["onClick"])),[[C,"system:role:add"]]),a.id!=1?B((i(),_(x,{key:0,color:"arcoblue",onClick:p=>de(a)},{icon:t(()=>[u(he)]),default:t(()=>[l("\u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[C,"system:role:update"]]):T("",!0),B((i(),_(Ee,{content:"\u60A8\u786E\u8BA4\u5220\u9664\u6B64\u89D2\u8272",type:"warning",onOk:p=>ie(a.id)},{default:t(()=>[a.id!=1?(i(),_(x,{key:0,color:"red"},{icon:t(()=>[u(ke)]),default:t(()=>[l("\u5220\u9664 ")]),_:1})):T("",!0)]),_:2},1032,["onOk"])),[[C,"system:role:delete"]])]),_:2},1024)]),_:2},[o.$hasPermission("system:role:menu")?{name:"menu",fn:t(({record:a})=>[a.keyword!="superAdmin"?(i(),_(x,{key:0,class:"cursor-pointer",color:"arcoblue",onClick:p=>oe(a)},{icon:t(()=>[u(Be)]),default:t(()=>[l(" \u83DC\u5355\u7BA1\u7406 ")]),_:2},1032,["onClick"])):T("",!0)]),key:"0"}:void 0]),1032,["loading","columns","data","size"])),[[C,"system:role:query"]])]),_:1}),u(Ie,{visible:b.value,"onUpdate:visible":e[8]||(e[8]=a=>b.value=a),title:k.value?"\u521B\u5EFA":"\u4FEE\u6539",width:"380px",onCancel:e[9]||(e[9]=a=>b.value=!1),onBeforeOk:ce},{default:t(()=>[u(Te,{ref_key:"submitFormRef",ref:$,model:n.value,"label-align":"left",layout:"horizontal","auto-label-width":""},{default:t(()=>[u(g,{field:"parent_id",label:"\u7236\u89D2\u8272",rules:[{required:!0,message:"\u7236\u89D2\u8272\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:t(()=>[u(Ae,{modelValue:n.value.parent_id,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value.parent_id=a),"check-strictly":"",options:I.value,"field-names":{value:"id",label:"name"},placeholder:"\u8BF7\u9009\u62E9\u7236\u89D2\u8272","allow-search":""},null,8,["modelValue","options"])]),_:1}),u(g,{field:"name",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0,message:"\u89D2\u8272\u540D\u79F0\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:t(()=>[u(W,{modelValue:n.value.name,"onUpdate:modelValue":e[2]||(e[2]=a=>n.value.name=a),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),u(g,{field:"keyword",label:"\u89D2\u8272\u6807\u8BC6",rules:[{required:!0,message:"\u89D2\u8272\u6807\u8BC6\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:t(()=>[u(W,{modelValue:n.value.keyword,"onUpdate:modelValue":e[3]||(e[3]=a=>n.value.keyword=a),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),u(g,{field:"status",label:"\u89D2\u8272\u72B6\u6001",rules:[{required:!0,message:"\u89D2\u8272\u72B6\u6001\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:t(()=>[u(xe,{modelValue:n.value.status,"onUpdate:modelValue":e[4]||(e[4]=a=>n.value.status=a),"default-value":!0},{default:t(()=>[u(j,{value:!0},{default:t(()=>[l("\u542F\u7528")]),_:1}),u(j,{value:!1},{default:t(()=>[l("\u7981\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(g,{field:"data_scope",label:"\u89D2\u8272\u6743\u9650",rules:[{required:!0,message:"\u89D2\u8272\u6743\u9650\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:t(()=>[u(Se,{modelValue:n.value.data_scope,"onUpdate:modelValue":e[5]||(e[5]=a=>n.value.data_scope=a),"allow-search":"",placeholder:"\u6570\u636E\u6743\u9650"},{default:t(()=>[u(S,{value:"ALLTEAM"},{default:t(()=>[l("\u6240\u5728\u90E8\u95E8\u53CA\u5B50\u90E8\u95E8")]),_:1}),u(S,{value:"CURTEAM"},{default:t(()=>[l("\u4EC5\u6240\u5728\u90E8\u95E8")]),_:1}),u(S,{value:"DOWNTEAM"},{default:t(()=>[l("\u4EC5\u5B50\u90E8\u95E8")]),_:1}),u(S,{value:"CUSTOM"},{default:t(()=>[l("\u81EA\u5B9A\u4E49\u90E8\u95E8")]),_:1})]),_:1},8,["modelValue"])]),_:1}),n.value.data_scope==="CUSTOM"?(i(),_(g,{key:0,field:"team_ids",label:"\u9009\u62E9\u90E8\u95E8",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u90E8\u95E8"}],"validate-trigger":["change","input"]},{default:t(()=>[u(Oe,{keys:n.value.team_ids,data:L.value,onSelect:e[6]||(e[6]=a=>{n.value.team_ids=a})},null,8,["keys","data"])]),_:1})):T("",!0),u(g,{field:"description",label:"\u89D2\u8272\u63CF\u8FF0",rules:[{required:!0,message:"\u89D2\u8272\u63CF\u8FF0\u662F\u5FC5\u586B\u9879"}],"validate-trigger":["change","input"]},{default:t(()=>[u(Ue,{modelValue:n.value.description,"onUpdate:modelValue":e[7]||(e[7]=a=>n.value.description=a),"allow-clear":"",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(Re,{visible:F.value,"onUpdate:visible":e[12]||(e[12]=a=>F.value=a),title:"\u8BBE\u7F6E\u89D2\u8272\u83DC\u5355\u6743\u9650",width:"380px",onCancel:e[13]||(e[13]=a=>F.value=!1),onBeforeOk:ue},{default:t(()=>[u(Me,{"checked-keys":E.value,"onUpdate:checkedKeys":e[10]||(e[10]=a=>E.value=a),"half-checked-keys":D.value,"onUpdate:halfCheckedKeys":e[11]||(e[11]=a=>D.value=a),checkable:!0,data:q.value,"only-check-leaf":!0,"field-names":{key:"id",icon:"icon_"}},null,8,["checked-keys","half-checked-keys","data"])]),_:1},8,["visible"])])}}});const ot=Ne(Ma,[["__scopeId","data-v-2b8ea3d3"]]);export{ot as default};