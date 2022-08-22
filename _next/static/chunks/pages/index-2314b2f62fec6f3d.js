(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{55819:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var n=r(63366),a=r(87462),o=r(67294),s=r(86010),i=r(94780),c=r(41796),u=r(26393),l=r(27623),d=r(59773),p=r(48652),m=r(58974),f=r(51705),v=r(1588);var h=(0,v.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var x=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var b=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),g=r(27621);function y(e){return(0,g.Z)("MuiMenuItem",e)}var w=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=r(85893);const A=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],N=(0,u.ZP)(p.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.inset}`]:{marginLeft:52},[`& .${b.root}`]:{marginTop:0,marginBottom:0},[`& .${b.inset}`]:{paddingLeft:36},[`& .${x.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${x.root} svg`]:{fontSize:"1.25rem"}}))));var S=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:u="li",dense:p=!1,divider:v=!1,disableGutters:h=!1,focusVisibleClassName:x,role:b="menuitem",tabIndex:g}=r,w=(0,n.Z)(r,A),S=o.useContext(d.Z),k={dense:p||S.dense||!1,disableGutters:h},Z=o.useRef(null);(0,m.Z)((()=>{c&&Z.current&&Z.current.focus()}),[c]);const C=(0,a.Z)({},r,{dense:k.dense,divider:v,disableGutters:h}),T=(e=>{const{disabled:t,dense:r,divider:n,disableGutters:o,selected:s,classes:c}=e,u={root:["root",r&&"dense",t&&"disabled",!o&&"gutters",n&&"divider",s&&"selected"]},l=(0,i.Z)(u,y,c);return(0,a.Z)({},c,l)})(r),_=(0,f.Z)(Z,t);let E;return r.disabled||(E=void 0!==g?g:-1),(0,j.jsx)(d.Z.Provider,{value:k,children:(0,j.jsx)(N,(0,a.Z)({ref:_,role:b,tabIndex:E,component:u,focusVisibleClassName:(0,s.Z)(T.focusVisible,x)},w,{ownerState:C,classes:T}))})}))},61903:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(87462),a=r(63366),o=r(67294),s=r(86010),i=r(94780),c=r(57579),u=r(26393),l=r(27623),d=r(90089),p=r(78288),m=r(37058),f=r(33841),v=r(10913),h=r(15704),x=r(74423),b=r(98216),g=r(27621),y=r(1588);function w(e){return(0,g.Z)("MuiFormHelperText",e)}var j,A=(0,y.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),N=r(85893);const S=["children","className","component","disabled","error","filled","focused","margin","required","variant"],k=(0,u.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t[`size${(0,b.Z)(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})((({theme:e,ownerState:t})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${A.error}`]:{color:(e.vars||e).palette.error.main}},"small"===t.size&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})));var Z=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiFormHelperText"}),{children:o,className:c,component:u="p"}=r,d=(0,a.Z)(r,S),p=(0,x.Z)(),m=(0,h.Z)({props:r,muiFormControl:p,states:["variant","size","disabled","error","filled","focused","required"]}),f=(0,n.Z)({},r,{component:u,contained:"filled"===m.variant||"outlined"===m.variant,variant:m.variant,size:m.size,disabled:m.disabled,error:m.error,filled:m.filled,focused:m.focused,required:m.required}),v=(e=>{const{classes:t,contained:r,size:n,disabled:a,error:o,filled:s,focused:c,required:u}=e,l={root:["root",a&&"disabled",o&&"error",n&&`size${(0,b.Z)(n)}`,r&&"contained",c&&"focused",s&&"filled",u&&"required"]};return(0,i.Z)(l,w,t)})(f);return(0,N.jsx)(k,(0,n.Z)({as:u,ownerState:f,className:(0,s.Z)(v.root,c),ref:t},d,{children:" "===o?j||(j=(0,N.jsx)("span",{className:"notranslate",children:"\u200b"})):o}))})),C=r(53179);function T(e){return(0,g.Z)("MuiTextField",e)}(0,y.Z)("MuiTextField",["root"]);const _=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],E={standard:d.Z,filled:p.Z,outlined:m.Z},F=(0,u.ZP)(v.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({});var P=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTextField"}),{autoComplete:o,autoFocus:u=!1,children:d,className:p,color:m="primary",defaultValue:v,disabled:h=!1,error:x=!1,FormHelperTextProps:b,fullWidth:g=!1,helperText:y,id:w,InputLabelProps:j,inputProps:A,InputProps:S,inputRef:k,label:P,maxRows:R,minRows:H,multiline:q=!1,name:I,onBlur:$,onChange:z,onFocus:B,placeholder:O,required:L=!1,rows:M,select:W=!1,SelectProps:X,type:J,value:V,variant:G="outlined"}=r,Y=(0,a.Z)(r,_),D=(0,n.Z)({},r,{autoFocus:u,color:m,disabled:h,error:x,fullWidth:g,multiline:q,required:L,select:W,variant:G}),Q=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},T,t)})(D);const U={};"outlined"===G&&(j&&"undefined"!==typeof j.shrink&&(U.notched=j.shrink),U.label=P),W&&(X&&X.native||(U.id=void 0),U["aria-describedby"]=void 0);const K=(0,c.Z)(w),ee=y&&K?`${K}-helper-text`:void 0,te=P&&K?`${K}-label`:void 0,re=E[G],ne=(0,N.jsx)(re,(0,n.Z)({"aria-describedby":ee,autoComplete:o,autoFocus:u,defaultValue:v,fullWidth:g,multiline:q,name:I,rows:M,maxRows:R,minRows:H,type:J,value:V,id:K,inputRef:k,onBlur:$,onChange:z,onFocus:B,placeholder:O,inputProps:A},U,S));return(0,N.jsxs)(F,(0,n.Z)({className:(0,s.Z)(Q.root,p),disabled:h,error:x,fullWidth:g,ref:t,required:L,color:m,variant:G,ownerState:D},Y,{children:[null!=P&&""!==P&&(0,N.jsx)(f.Z,(0,n.Z)({htmlFor:K,id:te},j,{children:P})),W?(0,N.jsx)(C.Z,(0,n.Z)({"aria-describedby":ee,id:K,labelId:te,value:V,input:ne},X,{children:d})):ne,y&&(0,N.jsx)(Z,(0,n.Z)({id:ee},b,{children:y}))]}))}))},78581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(89514)}])},89514:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n=r(85893),a=r(7160),o=r.n(a),s=r(34051),i=r.n(s),c=r(83078),u=r(96301),l=r(52533),d=r(67294),p=r(10913),m=r(33841),f=r(53179),v=r(55819),h=r(61903),x=r(61744);function b(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,a)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){b(o,n,a,s,i,"next",e)}function i(e){b(o,n,a,s,i,"throw",e)}s(void 0)}))}}function y(){var e=(0,c.Nr)(),t=(e.address,e.account),r=e.isWeb3Enabled,n=(0,d.useState)("0"),a=n[0],o=n[1],s=(0,d.useState)("0"),l=s[0],p=s[1],m=(0,d.useState)("0"),f=m[0],v=m[1],h=(0,d.useState)("0"),b=h[0],y=h[1],w=(0,d.useState)("0"),j=w[0],A=w[1],N=(0,c.JX)({abi:u.achieverAbi,contractAddress:u.achieverAddress,functionName:"balanceOf",params:{account:t}}).runContractFunction,S=(0,c.JX)({abi:u.wethAbi,contractAddress:u.wethAddress,functionName:"balanceOf",params:{Matthew:t}}).runContractFunction,k=(0,c.JX)({abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"balanceOf",params:{Elkanah:t}}).runContractFunction,Z=(0,c.JX)({abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"earned",params:{account:t}}).runContractFunction,C=(0,c.JX)({abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"totalSupply",params:{}}).runContractFunction;function T(){return(T=g(i().mark((function e(){var t,r,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({onError:function(e){return console.log(e)}});case 2:return t=e.sent,o(+t?x.dF(t).toString():0),e.next=6,S({onError:function(e){return console.log(e)}});case 6:return r=e.sent,p(+r?x.dF(r).toString():0),e.next=10,k({onError:function(e){return console.log(e)}});case 10:return n=e.sent,v(+n?x.dF(n).toString():0),e.next=14,Z({onError:function(e){return console.log(e)}});case 14:return a=e.sent,y(+a?x.dF(a).toString():0),e.next=18,C({onError:function(e){return console.log(e)}});case 18:s=e.sent,A(+s?x.dF(s).toString():0);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){r&&t&&function(){T.apply(this,arguments)}()}),[t,r]),{earningsBalance:b,lpBalance:f,totalLPBalance:j,achBalance:a,wethBalance:l}}function w(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,a)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){w(o,n,a,s,i,"next",e)}function i(e){w(o,n,a,s,i,"throw",e)}s(void 0)}))}}function A(){var e=(0,d.useState)("0"),t=e[0],r=e[1],a=(0,d.useState)(""),o=a[0],s=a[1],x=y(),b=(0,c.JX)({abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"reserve0",params:{}}).runContractFunction,g=(0,c.JX)({abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"reserve1",params:{}}).runContractFunction;function w(e){return A.apply(this,arguments)}function A(){return(A=j(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNaN(t.target.value)){e.next=4;break}n=t.target.value,s(n),e.next=11;break;case 4:if(o){e.next=6;break}return e.abrupt("return");case 6:return e.t0=r,e.next=9,N(o,t.target.value);case 9:e.t1=e.sent,(0,e.t0)(e.t1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return S.apply(this,arguments)}function S(){return(S=j(i().mark((function e(t,r){var n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,b();case 3:return e.t1=e.sent,n=e.t0.formatEther.call(e.t0,e.t1).toString(),e.t2=l,e.next=8,g();case 8:return e.t3=e.sent,a=e.t2.formatEther.call(e.t2,e.t3).toString(),o="WETH"==t?n:a,console.log(t,r),e.abrupt("return",(Math.sqrt(o*(3988009*o+3988e3*r))-1997*o)/1994);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e,t){var r=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(r)[0]};return(0,n.jsxs)("div",{className:"rounded-xl p-8 px-12",children:[(0,n.jsx)("h3",{className:"font-bold text-2xl mb-4 text-slate-500",children:"Optimizer Calculator"}),(0,n.jsxs)("div",{className:"flex flex-col gap-5 py-2",children:[(0,n.jsxs)(p.Z,{size:"small",className:"w-1/2 flex gap-6",sx:{minWidth:"240px"},children:[(0,n.jsx)(m.Z,{id:"select",children:"Select a token"}),(0,n.jsxs)(f.Z,{value:o,onChange:w,label:"select",children:[(0,n.jsx)(v.Z,{value:"ACH",children:"ACH"}),(0,n.jsx)(v.Z,{value:"WETH",children:"WETH"})]}),(0,n.jsx)(h.Z,{id:"swap-amount",label:"Amount intended to utilize",size:"small",onChange:w,type:"number",required:!0})]}),(0,n.jsxs)("div",{className:"info text-lg",children:[(0,n.jsxs)("div",{children:["Optimized Amount To Swap:"," ",(0,n.jsxs)("span",{className:"font-bold",children:[" ",k(t,8)]})]}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{children:["Your ACH Balance:",(0,n.jsxs)("span",{className:"font-bold",children:[" ",k(x.achBalance,8)]})]}),(0,n.jsxs)("div",{children:["Your WETH Balance:",(0,n.jsxs)("span",{className:"font-bold",children:[" ",k(x.wethBalance,8)]})]})]})]})]})}var N=r(45220),S=r(66319);function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,a)}function C(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){Z(o,n,a,s,i,"next",e)}function i(e){Z(o,n,a,s,i,"throw",e)}s(void 0)}))}}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(){var e=(0,c.JX)().runContractFunction,t=((0,c.Nr)().isWeb3Enabled,(0,N.lm)()),r={abi:u.achieverAbi,contractAddress:u.achieverAddress,functionName:"approve"},a={abi:u.wethAbi,contractAddress:u.wethAddress,functionName:"approve"},o={abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"swap"},s=(0,d.useState)("0"),b=s[0],g=s[1],w=(0,d.useState)(""),j=w[0],A=w[1],k=(0,d.useState)(!1),Z=k[0],_=k[1],E=(0,d.useState)("Approve and swap"),F=E[0],P=E[1],R="approve and swap",H=y(),q=(0,c.JX)({abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"reserve0",params:{}}).runContractFunction,I=(0,c.JX)({abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"reserve1",params:{}}).runContractFunction;function $(){return($=C(i().mark((function t(){var n,o,s,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((o=document.querySelector("#swap-amount").value)<=0)&&j){t.next=4;break}return t.abrupt("return");case 4:return _(!0),P("Approving..."),s=x.vz(o,"ether").toString(),"WETH"==j?(a.params={wad:s,guy:u.mutualsAddress},n=a):(r.params={amount:s,spender:u.mutualsAddress},n=r),t.next=10,e({params:n,onError:function(e){console.log(e),_(!1),P(R)}});case 10:if(c=t.sent){t.next=13;break}return t.abrupt("return");case 13:return t.next=15,c.wait(1);case 15:z(n.contractAddress,s);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(e,t){return B.apply(this,arguments)}function B(){return(B=C(i().mark((function r(n,a){var s;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return P("Swapping..."),o.params={_amountIn:a,_tokenIn:n},console.log("Swapping ".concat(o.params._amountIn," ...")),r.next=5,e({params:o,onSuccess:function(){t({title:"Successfully Swapped",type:"success",position:"topR",iconColor:"green"})}});case 5:if(s=r.sent,_(!1),P(R),document.querySelector("#swap-amount").value="",s){r.next=11;break}return r.abrupt("return");case 11:return r.next=13,s.wait(1);case 13:console.log("Transaction has confirmed by 1 block");case 14:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function O(e){return L.apply(this,arguments)}function L(){return(L=C(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.querySelector("#swap-amount"),!isNaN(t.target.value)){e.next=5;break}n=t.target.value,A(n),r.value="",g(0),e.next=12;break;case 5:if(j){e.next=7;break}return e.abrupt("return");case 7:return e.t0=g,e.next=10,M(r.value);case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return W.apply(this,arguments)}function W(){return(W=C(i().mark((function e(t){var r,n,a,o,s,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,q();case 3:return e.t1=e.sent,r=e.t0.formatEther.call(e.t0,e.t1).toString(),e.t2=l,e.next=8,I();case 8:return e.t3=e.sent,n=e.t2.formatEther.call(e.t2,e.t3).toString(),null,a=T("WETH"==j?[r,n]:[n,r],2),o=a[0],s=a[1],u=+s*(c=997*t/1e3)/(+o+c),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e,t){var r=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(r)[0]};return(0,n.jsxs)("div",{className:"shadow-2xl rounded-xl p-8 px-12",children:[(0,n.jsx)("h3",{className:"font-bold text-2xl mb-4 text-slate-500",children:"Let's swap!"}),(0,n.jsxs)("div",{className:"flex flex-col gap-5 py-2",children:[(0,n.jsxs)(p.Z,{size:"small",className:"w-1/2 min-w-[180px] flex gap-6",children:[(0,n.jsx)(m.Z,{id:"select",children:"Select a token"}),(0,n.jsxs)(f.Z,{value:j,onChange:O,label:"select",children:[(0,n.jsx)(v.Z,{value:"ACH",children:"ACH"}),(0,n.jsx)(v.Z,{value:"WETH",children:"WETH"})]}),(0,n.jsx)(h.Z,{id:"swap-amount",label:"Amount to swap",size:"small",onChange:O,type:"number",required:!0})]}),(0,n.jsxs)("div",{className:"info text-lg",children:[(0,n.jsxs)("div",{children:["Corresponding Token Out: ",(0,n.jsxs)("span",{className:"font-bold",children:[" ",b]})]}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{children:["Your ACH Balance:",(0,n.jsxs)("span",{className:"font-bold",children:[" ",X(H.achBalance,8)]})]}),(0,n.jsxs)("div",{children:["Your WETH Balance:",(0,n.jsxs)("span",{className:"font-bold",children:[" ",X(H.wethBalance,8)]})]})]}),(0,n.jsx)(S.Z,{variant:"contained",className:"max-w-[200px] rounded-lg p-2",type:"submit",onClick:function(){return $.apply(this,arguments)},loading:Z,loadingPosition:"end",children:F})]})]})}function E(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,a)}function F(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){E(o,n,a,s,i,"next",e)}function i(e){E(o,n,a,s,i,"throw",e)}s(void 0)}))}}function P(){var e="Approve and Stake",t=(0,d.useState)(!1),r=t[0],a=t[1],o=(0,d.useState)(e),s=o[0],l=o[1],m=(0,N.lm)(),f=(0,c.JX)().runContractFunction,v={abi:u.wethAbi,contractAddress:u.wethAddress,functionName:"approve"},b={abi:u.achieverAbi,contractAddress:u.achieverAddress,functionName:"approve"},g={abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"addLiquidity"},w={abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:null};function j(){return(j=F(i().mark((function t(){var r,n,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=document.querySelector("#Token1").value,n=document.querySelector("#Token0").value,!(Number(r)<=0)){t.next=4;break}return t.abrupt("return");case 4:return a(!0),l("Approving..."),v.params={wad:x.vz(r,"ether").toString(),guy:u.mutualsAddress},b.params={amount:x.vz(n,"ether").toString(),spender:u.mutualsAddress},t.next=10,f({params:v,onError:function(e){return console.log(e)}});case 10:if(t.sent){t.next=15;break}return l(e),a(!1),t.abrupt("return");case 15:return t.next=17,f({params:b,onError:function(e){return console.log(e)}});case 17:if(o=t.sent){t.next=22;break}return l(e),a(!1),t.abrupt("return");case 22:return t.next=24,o.wait(1);case 24:A(v.params.wad,b.params.amount);case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(e,t){return k.apply(this,arguments)}function k(){return(k=F(i().mark((function t(r,n){var o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l("Staking..."),g.params={_amount0:r,_amount1:n},t.next=4,f({params:g,onError:function(e){return console.log(e)},onSuccess:function(){m({type:"success",title:"Staked token successfully!",position:"topR",iconColor:"green"})}});case 4:if(o=t.sent,a(!1),l(e),o){t.next=9;break}return t.abrupt("return");case 9:return t.next=11,o.wait(1);case 11:document.querySelector("#Token0").value="",document.querySelector("#Token1").value="",console.log("Transaction has confirmed by 1 block");case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(e){return C.apply(this,arguments)}function C(){return(C=F(i().mark((function e(t){var r,n,a,o,s,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.target.id),!(t.target.value<0)){e.next=4;break}return t.target.value=0,e.abrupt("return");case 4:return r=T(t.target.value,8),n=x.vz(r,"ether").toString(),w.functionName="calculate".concat(t.target.id,"Amount"),w.params="Token1"==t.target.id?{x:n}:{y:n},console.log(w),e.next=11,f({params:w,onError:function(e){return console.log(e)}});case 11:a=e.sent,o=a?x.dF(a).toString():0,s=T(o,8),c=document.querySelector("#Token1"),u=document.querySelector("#Token0"),"Token1"==t.target.id?u.value=s:c.value=s;case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e,t){var r=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(r)[0]},_=y();return(0,n.jsxs)("div",{className:"shadow-2xl rounded-xl p-8 px-12",children:[(0,n.jsx)("h3",{className:"font-bold text-2xl mb-4 text-slate-500",children:"Let's Stake!"}),(0,n.jsxs)("div",{className:"flex flex-col gap-6 py-2",children:[(0,n.jsxs)(p.Z,{className:"w-1/2 min-w-[180px] flex gap-6",children:[(0,n.jsx)(h.Z,{id:"Token0",label:"Amount to stake (in ACH)",size:"small",onChange:Z,type:"number",InputLabelProps:{shrink:!0},required:!0}),(0,n.jsx)(h.Z,{id:"Token1",label:"Amount to stake (in WETH)",size:"small",onChange:Z,type:"number",InputLabelProps:{shrink:!0},required:!0})]}),(0,n.jsxs)("div",{className:"text-lg",children:[(0,n.jsxs)("div",{children:["Your ACH Balance:",(0,n.jsxs)("span",{className:"font-bold",children:[" ",T(_.achBalance,8)]})]}),(0,n.jsxs)("div",{children:["Your WETH Balance:",(0,n.jsxs)("span",{className:"font-bold",children:[" ",T(_.wethBalance,8)]})]})]}),(0,n.jsx)(S.Z,{variant:"contained",className:"max-w-[200px] rounded-lg p-2",type:"submit",onClick:function(){return j.apply(this,arguments)},loading:r,loadingPosition:"end",children:s})]})]})}var R=r(83321);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,a)}function I(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){q(o,n,a,s,i,"next",e)}function i(e){q(o,n,a,s,i,"throw",e)}s(void 0)}))}}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(){var e=function(e,t){r({type:t,title:e,position:"topR"})},t=(0,c.JX)().runContractFunction,r=(0,N.lm)(),a={abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"removeLiquidity"},o=(0,d.useState)(!1),s=o[0],l=o[1],p=$(function(){var e=y();return[e.lpBalance,e.totalLPBalance]}(),2),m=p[0],f=p[1];function v(){return(v=I(i().mark((function r(){var n,o;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(l(!0),!((n=document.querySelector("#amount-to-remove").value)<=0||n>m)){r.next=5;break}return l(!1),r.abrupt("return");case 5:return o=x.vz(n,"ether").toString(),a.params={_shares:o},r.next=9,t({params:a,onError:function(t){return e(t.message,"error")},onSuccess:function(){return e("Removed ".concat(n," LP shares"),"success")}});case 9:l(!1);case 10:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var b=function(e,t){var r=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(r)[0]};return(0,n.jsxs)("div",{className:"p-8 px-12 rounded-xl",children:[(0,n.jsx)("h3",{className:"font-bold text-2xl mb-4 text-slate-500",children:"Remove Liquidity"}),(0,n.jsxs)("div",{className:"flex flex-col gap-6 py-2",children:[(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)(h.Z,{id:"amount-to-remove",size:"small",type:"number",required:!0,label:"Amount to remove",onChange:function(e){e.target.value<0&&(e.target.value=0)},InputLabelProps:{shrink:!0}}),(0,n.jsx)(R.Z,{variant:"contained",className:"bg-emerald-500 rounded-md",onClick:function(){var e=document.querySelector("#amount-to-remove");e.focus(),e.value=m},children:"Max"})]}),(0,n.jsxs)("div",{className:"text-lg",children:["LP Shares: ",(0,n.jsx)("span",{className:"font-bold",children:b(m,8)}),(0,n.jsx)("br",{}),"Contract LP Shares:"," ",(0,n.jsx)("span",{className:"font-bold",children:b(f,8)})]}),(0,n.jsx)(S.Z,{variant:"contained",className:"max-w-[110px] rounded-lg p-2",type:"submit",onClick:function(){return v.apply(this,arguments)},loading:s,children:"Submit"})]})]})}function B(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,a)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){B(o,n,a,s,i,"next",e)}function i(e){B(o,n,a,s,i,"throw",e)}s(void 0)}))}}function L(){var e=function(e,t){r({type:t,title:e,position:"topR"})},t=(0,c.JX)().runContractFunction,r=(0,N.lm)(),a={abi:u.mutualsAbi,contractAddress:u.mutualsAddress,functionName:"getReward"},o=y().earningsBalance;function s(){return(s=O(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return m(!0),r.next=3,t({params:a,onError:function(t){return console.log(t),e(t.message,"error"),t},onSuccess:function(){return e("Successfully claimed ".concat(o,"!"),"success")}});case 3:m(!1);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var l=(0,d.useState)(!1),p=l[0],m=l[1],f=(0,d.useState)(!1),v=f[0],h=f[1];(0,d.useEffect)((function(){Number(o)?h(!1):h(!0)}),[o]);return(0,n.jsxs)("div",{className:"p-8 px-12 rounded-xl",children:[(0,n.jsx)("h3",{className:"font-bold text-2xl mb-4 text-slate-500",children:"Claim Rewards"}),(0,n.jsxs)("p",{className:"text-lg",children:["Rewards Earned: ",(0,n.jsx)("span",{className:"font-semibold",children:function(e,t){var r=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(r)[0]}(o,8)})]}),(0,n.jsx)(S.Z,{className:"p-3 my-8 rounded-xl",variant:"contained",size:"large",onClick:function(){return s.apply(this,arguments)},loading:p,disabled:v,children:"Claim rewards"})]})}function M(){var e=(0,c.Nr)(),t=e.chainId,r=e.isWeb3Enabled,a={gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",width:"85vw"};return console.log(u.supportedNetworks,t),(0,n.jsx)("div",{children:r&&u.supportedNetworks.includes(Number(t))?(0,n.jsxs)("div",{className:o().container,style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[(0,n.jsxs)("div",{className:"grid gap-12 pt-7",style:a,children:[(0,n.jsx)(_,{}),(0,n.jsx)(P,{})]}),(0,n.jsxs)("div",{className:"shadow-xl grid",style:a,children:[(0,n.jsx)(A,{}),(0,n.jsx)(z,{}),(0,n.jsx)(L,{})]})]}):(0,n.jsx)("div",{className:"px-9 py-4 font-bold text-lg",children:r?(0,n.jsxs)("div",{children:["Network not supported! Supported networks are:"," ",u.supportedNetworks.join(", ")]}):(0,n.jsx)("div",{children:"Web3 Currently Not Enabled"})})})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(e){e.O(0,[293,301,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);