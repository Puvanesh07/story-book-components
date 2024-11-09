import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{f as be}from"./index-B5ZI-g0m.js";import"./index-DJO9vBfz.js";const U=({id:X,label:Y,onClick:Z,size:c="medium",width:ee,height:ae,variant:re="primary",backgroundColor:te,textColor:ne="white",disabled:p=!1,type:se="button",shape:oe="roundedRectangle",startIcon:g,endIcon:y,onBlur:ie,onMouseOut:le,onMouseOver:ue,loading:b=!1})=>{const de="font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center transition duration-200 ease-in-out",me={primary:"bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",secondary:"bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",danger:"bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"},ce={small:"px-3 py-2 text-sm h-80 min-w-[80px]",medium:"px-4 py-2 text-base h-10 min-w-[100px]",large:"px-6 py-3 text-lg h-12 min-w-[120px]",custom:""},pe={rounded:"rounded-full",roundedRectangle:"rounded-lg",circle:"rounded-full p-0 aspect-square"},ge=`
    ${de}
    ${me[re]}
    ${ce[c]}
    ${pe[oe]}
    ${p?"opacity-50 cursor-not-allowed":""}
  `,ye={backgroundColor:te||void 0,color:ne,width:c==="custom"?ee:void 0,height:c==="custom"?ae:void 0};return e.jsx("button",{id:X,type:se,onClick:Z,onBlur:ie,onMouseOut:le,onMouseOver:ue,disabled:p||b,style:ye,className:ge,children:b?e.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):e.jsxs(e.Fragment,{children:[g&&e.jsx("span",{className:"mr-2",children:g}),Y,y&&e.jsx("span",{className:"ml-2",children:y})]})})};U.__docgenInfo={description:"",methods:[],displayName:"Button",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'custom'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'custom'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'white'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'rounded' | 'roundedRectangle' | 'circle'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'roundedRectangle'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'roundedRectangle'",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},onMouseOut:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},onMouseOver:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Se={title:"Components/Button",component:U,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},size:{control:"select",options:["small","medium","large","custom"]},variant:{control:"select",options:["primary","secondary","danger"]},shape:{control:"select",options:["rounded","roundedRectangle","circle"]},width:{control:"text",if:{arg:"size",eq:"custom"}},height:{control:"text",if:{arg:"size",eq:"custom"}},disabled:{control:"boolean"},loading:{control:"boolean"}},args:{onClick:be()}},a={args:{label:"Primary Button",variant:"primary",size:"medium"}},r={args:{label:"Secondary Button",variant:"secondary",size:"medium"}},t={args:{label:"Danger Button",variant:"danger",size:"medium"}},n={args:{label:"Small Button",size:"small",variant:"primary"}},s={args:{label:"Medium Button",size:"medium",variant:"primary"}},o={args:{label:"Large Button",size:"large",variant:"primary"}},i={args:{label:"Custom Size",size:"custom",width:"200px",height:"60px",variant:"primary"}},l={args:{label:"Loading Button",loading:!0,variant:"primary",size:"medium"}},u={args:{label:"Disabled Button",disabled:!0,variant:"primary",size:"medium"}},d={args:{label:"Rounded Button",shape:"rounded",variant:"primary",size:"medium"}},m={args:{label:"🔔",shape:"circle",variant:"primary",size:"medium"}};var v,f,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,x,z;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium'
  }
}`,...(z=(x=r.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var B,w,R;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Danger Button',
    variant: 'danger',
    size: 'medium'
  }
}`,...(R=(w=t.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var T,q,M;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Small Button',
    size: 'small',
    variant: 'primary'
  }
}`,...(M=(q=n.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var E,L,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Medium Button',
    size: 'medium',
    variant: 'primary'
  }
}`,...(C=(L=s.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var H,N,j;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    size: 'large',
    variant: 'primary'
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var D,V,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Custom Size',
    size: 'custom',
    width: '200px',
    height: '60px',
    variant: 'primary'
  }
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var $,P,_;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Loading Button',
    loading: true,
    variant: 'primary',
    size: 'medium'
  }
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var F,O,W;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true,
    variant: 'primary',
    size: 'medium'
  }
}`,...(W=(O=u.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var I,A,G;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Rounded Button',
    shape: 'rounded',
    variant: 'primary',
    size: 'medium'
  }
}`,...(G=(A=d.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: '🔔',
    shape: 'circle',
    variant: 'primary',
    size: 'medium'
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const xe=["Primary","Secondary","Danger","Small","Medium","Large","CustomSize","WithLoading","Disabled","RoundedShape","CircleShape"];export{m as CircleShape,i as CustomSize,t as Danger,u as Disabled,o as Large,s as Medium,a as Primary,d as RoundedShape,r as Secondary,n as Small,l as WithLoading,xe as __namedExportsOrder,Se as default};
