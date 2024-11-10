import{j as l}from"./jsx-runtime-DR9Q75dM.js";import{r as g}from"./index-DRjF_FHU.js";import{a as M,g as D,s as k,b as G,m as $,e as q,f as F,h as N}from"./createSimplePaletteValueFilter-oTkLXce8.js";import{f as U}from"./formControlState-Dq1zat_P.js";import{u as V}from"./useSlot-BwTs--wQ.js";import{a as A}from"./useFormControl-BBpouV88.js";import{T as L}from"./Typography-BTHQLogJ.js";import{C as j}from"./Checkbox-DkCf9LQX.js";import"./createSvgIcon-BAzP-N4j.js";import"./SwitchBase-BSVp2RIw.js";import"./ButtonBase-CLklZbvj.js";import"./useEventCallback-CszQkwiw.js";function X(e){return D("MuiFormControlLabel",e)}const m=M("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Y=e=>{const{classes:o,disabled:r,labelPlacement:s,error:n,required:c}=e,t={root:["root",r&&"disabled",`labelPlacement${G(s)}`,n&&"error",c&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return N(t,X,o)},Z=k("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${m.label}`]:o.label},o.root,o[`labelPlacement${G(r.labelPlacement)}`]]}})($(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${m.disabled}`]:{cursor:"default"},[`& .${m.label}`]:{[`&.${m.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),ee=k("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})($(({theme:e})=>({[`&.${m.error}`]:{color:(e.vars||e).palette.error.main}}))),R=g.forwardRef(function(o,r){const s=q({props:o,name:"MuiFormControlLabel"}),{checked:n,className:c,componentsProps:t={},control:a,disabled:p,disableTypography:u,inputRef:v,label:_,labelPlacement:B="end",name:ne,onChange:ce,required:W,slots:z={},slotProps:H={},value:ie,...O}=s,b=A(),w=p??a.props.disabled??(b==null?void 0:b.disabled),x=W??a.props.required,P={disabled:w,required:x};["checked","name","onChange","value","inputRef"].forEach(C=>{typeof a.props[C]>"u"&&typeof s[C]<"u"&&(P[C]=s[C])});const J=U({props:s,muiFormControl:b,states:["error"]}),f={...s,disabled:w,labelPlacement:B,required:x,error:J.error},y=Y(f),K={slots:z,slotProps:{...t,...H}},[Q,h]=V("typography",{elementType:L,externalForwardedProps:K,ownerState:f});let i=_;return i!=null&&i.type!==L&&!u&&(i=l.jsx(Q,{component:"span",...h,className:F(y.label,h==null?void 0:h.className),children:i})),l.jsxs(Z,{className:F(y.root,c),ownerState:f,ref:r,...O,children:[g.cloneElement(a,P),x?l.jsxs("div",{children:[i,l.jsxs(ee,{ownerState:f,"aria-hidden":!0,className:y.asterisk,children:[" ","*"]})]}):i]})});function oe(e){return D("MuiFormGroup",e)}M("MuiFormGroup",["root","row","error"]);const re=e=>{const{classes:o,row:r,error:s}=e;return N({root:["root",r&&"row",s&&"error"]},oe,o)},se=k("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),te=g.forwardRef(function(o,r){const s=q({props:o,name:"MuiFormGroup"}),{className:n,row:c=!1,...t}=s,a=A(),p=U({props:s,muiFormControl:a,states:["error"]}),u={...s,row:c,error:p.error},v=re(u);return l.jsx(se,{className:F(v.root,n),ownerState:u,ref:r,...t})}),E=({items:e,onChange:o})=>{const[r,s]=g.useState([]),n=t=>{t.target.checked?(s(e),o(e)):(s([]),o([]))},c=t=>{const a=r.includes(t)?r.filter(p=>p!==t):[...r,t];s(a),o(a)};return l.jsxs("div",{children:[l.jsx(R,{control:l.jsx(j,{checked:r.length===e.length,onChange:n}),label:"Select All"}),l.jsx(te,{children:e.map(t=>l.jsx(R,{control:l.jsx(j,{checked:r.includes(t),onChange:()=>c(t)}),label:t},t))})]})},ke={title:"Components/CheckboxList",component:E,argTypes:{onChange:{action:"onChange"}}},le=["Item 1","Item 2","Item 3","Item 4"],ae=e=>l.jsx(E,{...e}),d=ae.bind({});d.args={items:le,onChange:e=>{console.log("Selected Items:",e)}};var S,T,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"args => <CheckboxList {...args} />",...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const ve=["Default"];export{d as Default,ve as __namedExportsOrder,ke as default};