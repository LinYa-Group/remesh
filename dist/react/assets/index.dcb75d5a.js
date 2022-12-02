import{j as g,a as r,r as T,F as j,c as _}from"./jsx-runtime.bdd3bf05.js";import{S as K,_ as M,a as B,O as z,n as Z,o as X,c as H,i as ee,R as U,u as q,b as Q,d as S,m as A,e as te}from"./remesh-react.691c86dd.js";import{R as ne,a as re}from"./remesh-logger.f172f3d4.js";import{s as ae}from"./startWith.dc14a779.js";import{m as oe}from"./merge.b528929a.js";import{s as ie,t as de}from"./takeUntil.5d5ca843.js";import{L as W}from"./list.a9b0e861.js";import"./concat.48218eca.js";import"./mergeAll.8e6282bc.js";import"./isScheduler.98b3f195.js";import"./mergeMap.2dc77344.js";var V={now:function(){return(V.delegate||performance).now()},delegate:void 0},E={schedule:function(e){var t=requestAnimationFrame,a=cancelAnimationFrame,n=E.delegate;n&&(t=n.requestAnimationFrame,a=n.cancelAnimationFrame);var i=t(function(o){a=void 0,e(o)});return new K(function(){return a==null?void 0:a(i)})},requestAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=E.delegate;return((a==null?void 0:a.requestAnimationFrame)||requestAnimationFrame).apply(void 0,M([],B(e)))},cancelAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=E.delegate;return((a==null?void 0:a.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,M([],B(e)))},delegate:void 0};function le(e){return e?G(e):se}function G(e){return new z(function(t){var a=e||V,n=a.now(),i=0,o=function(){t.closed||(i=E.requestAnimationFrame(function(l){i=0;var m=a.now();t.next({timestamp:e?m:l,elapsed:m-n}),o()}))};return o(),function(){i&&E.cancelAnimationFrame(i)}})}var se=G(),ce=new z(Z);function me(e,t){return t===void 0&&(t=ee),e=e!=null?e:ue,X(function(a,n){var i,o=!0;a.subscribe(H(n,function(l){var m=t(l);(o||!e(i,m))&&(o=!1,i=m,n.next(l))}))})}function ue(e,t){return e===t}function pe(){return X(function(e,t){var a,n=!1;e.subscribe(H(t,function(i){var o=a;a=i,n&&t.next([o,i]),n=!0}))})}const he=U.domain({name:"CounterDomain",impl:e=>{const t=e.state({name:"CounterState",default:0}),a=e.query({name:"CounterQuery",impl:({get:i})=>i(t())}),n=e.command({name:"IncreCommand",impl:({get:i})=>{const o=i(t());return t().new(o+1)}});return{query:{CountQuery:a},command:{IncreCommand:n}}}}),ye=()=>{const e=q(),t=Q(he()),a=S(t.query.CountQuery());return g("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[r("h2",{children:"Counter"}),r("input",{type:"number",readOnly:!0,value:a}),g("label",{children:[r("button",{onClick:()=>{e(t.command.IncreCommand())},children:"Count "})," "]})]})},Ce=U.domain({name:"TemperatureConverterDomain",impl:e=>{const t=e.state({name:"CelsiusState",default:""}),a=e.query({name:"CelsiusQuery",impl:({get:d})=>d(t())}),n=e.state({name:"FahrenheitState",default:""}),i=e.query({name:"FahrenheitQuery",impl:({get:d})=>d(n())}),o=e.command({name:"ResetBothCommand",impl:({})=>[t().new(""),n().new("")]}),l=e.command({name:"UpdateCelsiusCommand",impl:({},d)=>{if(d==="")return o();const p=parseFloat(d);if(Number.isNaN(p))return t().new(d);const u=p*(9/5)+32;return[t().new(d),n().new(u.toString())]}}),m=e.command({name:"UpdateFahrenheitCommand",impl:({},d)=>{if(d==="")return o();const p=parseFloat(d);if(Number.isNaN(p))return n().new(d);const u=(p-32)*(5/9);return[t().new(u.toString()),n().new(d)]}});return{query:{CelsiusQuery:a,FahrenheitQuery:i},command:{UpdateCelsiusCommand:l,UpdateFahrenheitCommand:m}}}}),fe=()=>{const e=q(),t=Q(Ce()),a=S(t.query.CelsiusQuery()),n=S(t.query.FahrenheitQuery());return g("div",{style:{border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[r("h2",{children:"Temperature Converter"}),g("div",{children:[r("input",{type:"text",value:a,onChange:l=>{e(t.command.UpdateCelsiusCommand(l.target.value))}}),r("label",{htmlFor:"",children:"Celsius"}),"=",r("input",{type:"text",value:n,onChange:l=>{e(t.command.UpdateFahrenheitCommand(l.target.value))}}),r("label",{htmlFor:"",children:"Fahrenheit"})]})]})},$=e=>{const t=e.split(".");if(t.length!==3)return null;const a=new Date(`${t[2]}.${t[1]}.${t[0]}`);return a.toString()==="Invalid Date"?null:a},Y=e=>{const t=e.toLocaleDateString().split("/");return`${t[2]}.${t[1]}.${t[0]}`},ge=(e,t)=>e.getFullYear()!==t.getFullYear()?e.getFullYear()-t.getFullYear():e.getMonth()!==t.getMonth()?e.getMonth()-t.getMonth():e.getDate()-t.getDate(),xe=U.domain({name:"FlightBookerDomain",impl:e=>{const t=e.state({name:"OptionState",default:"one-way"}),a=e.query({name:"OptionQuery",impl:({get:s})=>s(t())}),n=e.state({name:"StartDateInputState",default:Y(new Date)}),i=e.query({name:"StartDateInputQuery",impl:({get:s})=>s(n())}),o=e.state({name:"EndDateInputState",default:Y(new Date)}),l=e.query({name:"EndDateInputQuery",impl:({get:s})=>s(o())}),m=e.query({name:"StartDateQuery",impl:({get:s})=>{const b=s(n());return $(b)}}),d=e.query({name:"EndDateQuery",impl:({get:s})=>{const b=s(o());return $(b)}}),p=e.command({name:"UpdateOptionCommand",impl:({},s)=>t().new(s)}),u=e.command({name:"UpdateStartDateCommand",impl:({},s)=>n().new(s)}),x=e.command({name:"UpdateEndDateCommand",impl:({},s)=>o().new(s)});return{query:{StatusQuery:e.query({name:"StatusQuery",impl:({get:s})=>{const b=s(t()),h=s(m()),c=s(d()),C=h?"valid":"invalid",v=b==="return"?c?"valid":"invalid":"disabled",y=b==="one-way"?h?"enabled":"disabled":!!h&&!!c&&ge(h,c)<=0?"enabled":"disabled";return{startDate:C,endDate:v,bookButton:y}}}),OptionQuery:a,StartDateQuery:m,EndDateQuery:d,StartDateInputQuery:i,EndDateInputQuery:l},command:{UpdateOptionCommand:p,UpdateStartDateCommand:u,UpdateEndDateCommand:x}}}}),ve=()=>{const e=q(),t=Q(xe()),a=S(t.query.OptionQuery()),n=S(t.query.StatusQuery()),i=S(t.query.StartDateInputQuery()),o=S(t.query.EndDateInputQuery()),l=u=>{e(t.command.UpdateOptionCommand(u.target.value))},m=u=>{e(t.command.UpdateStartDateCommand(u.target.value))},d=u=>{e(t.command.UpdateEndDateCommand(u.target.value))},p=()=>{n.bookButton==="enabled"&&alert(a==="one-way"?`You have booked a one-way flight on ${i}`:`You have booked return flight from ${i} to ${o}`)};return g("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[r("h2",{children:"Flight Booker"}),r("div",{children:g("select",{value:a,onChange:l,children:[r("option",{value:"one-way",children:"One-way flight"}),r("option",{value:"return",children:"Return flight"})]})}),r("div",{children:r("input",{type:"text",style:{backgroundColor:n.startDate==="invalid"?"red":""},value:i,onChange:m})}),r("div",{children:r("input",{type:"text",style:{backgroundColor:n.endDate==="invalid"?"red":""},disabled:n.endDate==="disabled",value:o,onChange:d})}),r("div",{children:r("button",{disabled:n.bookButton==="disabled",onClick:p,children:"Book"})})]})},Se=U.domain({name:"TimerDomain",inspectable:!1,impl:e=>{const t=e.state({name:"DurationState",default:15e3}),a=e.query({name:"DurationQuery",impl:({get:u})=>u(t())}),n=e.state({name:"ElapsedState",default:0}),i=e.query({name:"ElapsedQuery",impl:({get:u})=>u(n())}),o=e.event({name:"StartEvent"}),l=e.event({name:"StopEvent"}),m=e.command({name:"UpdateElapsedCommand",impl:({get:u},x)=>{const w=u(t()),s=u(n());return s>w?l():n().new(s+x)}}),d=e.command({name:"UpdateDurationCommand",impl:({get:u},x)=>{const w=u(n());return x>w?[t().new(x),o()]:t().new(x)}}),p=e.command({name:"ResetElapsedCommand",impl:({})=>[n().new(0),o()]});return e.effect({name:"UpdateElapsedByAnimationEffect",impl:({fromEvent:u})=>{const x=u(o).pipe(ae(o()),A(()=>1)),w=u(l).pipe(A(()=>0));return oe(x,w).pipe(me(),ie(s=>s===0?ce:le().pipe(pe(),A(([b,h])=>m(h.elapsed-b.elapsed)),de(u(l)))))}}),{query:{DurationQuery:a,ElapsedQuery:i},command:{ResetElapsedCommand:p,UpdateDurationCommand:d}}}}),be=()=>{const e=q(),t=Q(Se()),a=S(t.query.ElapsedQuery()),n=S(t.query.DurationQuery()),i=l=>{const m=parseInt(l.target.value,10);isNaN(m)||e(t.command.UpdateDurationCommand(m))},o=()=>{e(t.command.ResetElapsedCommand())};return g("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[r("h2",{children:"Timer"}),g("div",{style:{display:"flex"},children:[r("label",{style:{marginRight:10,whiteSpace:"nowrap"},children:"Elapsed Timer:"}),r("div",{style:{width:"100%"},children:r("span",{style:{display:"inline-block",height:10,background:"green",width:`${Math.min(a/n,1)*100}%`,verticalAlign:"middle",borderRadius:5}})})]}),g("div",{children:[a>n?(n/1e3).toFixed(1):(a/1e3).toFixed(1),"s"]}),g("div",{style:{display:"flex"},children:[r("label",{style:{width:100,marginRight:10},children:"Duration:"}),r("input",{style:{width:"100%"},type:"range",min:0,max:3e4,value:n,onChange:i})]}),r("div",{children:r("button",{style:{width:"100% "},onClick:o,children:"Reset Timer"})})]})},we=U.domain({name:"CRUDDomain",impl:e=>{let t=0;const a=W(e,{name:"NameListModule",key:c=>c.id}),n=e.state({name:"FilterPrefixState",default:""}),i=e.query({name:"FilterPrefixQuery",impl:({get:c})=>c(n())}),o=e.command({name:"UpdateFilterPrefixCommand",impl:({},c)=>n().new(c)}),l=e.state({name:"CreatedState",default:{name:"",surname:""}}),m=e.query({name:"CreatedQuery",impl:({get:c})=>c(l())}),d=e.command({name:"UpdateCreatedCommand",impl:({get:c},C)=>{const v=c(l());return l().new({...v,...C})}}),p=e.state({name:"SelectedState",default:null}),u=e.query({name:"SelectedQuery",impl:({get:c})=>c(p())}),x=e.command({name:"SelectItemCommand",impl:({get:c},C)=>{const v=c(p());if(C===null)return v===null?null:p().new(null);if(v&&v.id===C)return p().new(null);const y=c(a.query.ItemQuery(C));return p().new(y)}}),w=e.command({name:"UpdateSelectedNameCommand",impl:({get:c},C)=>{const v=c(p());return v===null?null:p().new({...v,...C})}}),s=e.query({name:"FilteredListQuery",impl:({get:c})=>{const C=c(n()),v=c(a.query.ItemListQuery());return C===""?v:v.filter(y=>y.surname.startsWith(C))}}),b=e.command({name:"SyncSelectedCommand",impl:({get:c})=>{const C=c(p());return C===null?null:a.command.UpdateItemCommand(C)}}),h=e.command({name:"CreateNameItemCommand",impl:({get:c})=>{const C=c(l()),v={id:`${t++}`,...C};return[a.command.AddItemCommand(v),d({name:"",surname:""})]}});return{query:{...a.query,FilteredListQuery:s,SelectedQuery:u,FilterPrefixQuery:i,CreatedQuery:m},command:{...a.command,UpdateFilterPrefixCommand:o,SelectItemCommand:x,UpdateCreatedCommand:d,UpdateSelectedNameCommand:w,CreateNameItemCommand:h,SyncSelectedCommand:b}}}}),N=e=>{const{onOuterClick:t,...a}=e,n=T.exports.useRef(null);return T.exports.useEffect(()=>{const i=o=>{var m;if(!((m=o.target)!=null&&m.parentElement))return;!!(n.current&&!n.current.contains(o.target))&&(t==null||t(o))};return document.addEventListener("click",i,!1),()=>{document.removeEventListener("click",i,!1)}},[]),r("div",{ref:n,...a})},De=()=>{const e=q(),t=Q(we()),a=S(t.query.FilteredListQuery()),n=S(t.query.FilterPrefixQuery()),i=S(t.query.CreatedQuery()),o=S(t.query.SelectedQuery()),l=s=>{e(t.command.UpdateFilterPrefixCommand(s.target.value))},m=s=>{e(t.command.SelectItemCommand(s))},d=s=>{e(o?t.command.UpdateSelectedNameCommand({name:s.target.value}):t.command.UpdateCreatedCommand({name:s.target.value}))},p=s=>{e(o?t.command.UpdateSelectedNameCommand({surname:s.target.value}):t.command.UpdateCreatedCommand({surname:s.target.value}))},u=()=>{o===null&&e(t.command.CreateNameItemCommand())},x=()=>{o&&e(t.command.SyncSelectedCommand())},w=()=>{o&&e([t.command.DeleteItemCommand(o.id),t.command.SelectItemCommand(null)])};return g(N,{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},onOuterClick:()=>{m(null)},children:[r("h2",{children:"CRUD"}),g("div",{children:[r("label",{htmlFor:"",children:"Filter prefix"}),r("input",{type:"text",value:n,onChange:l})]}),g("div",{style:{display:"flex"},children:[r("div",{style:{width:"50%",height:100,border:"1px solid #eaeaea",overflow:"scroll"},children:a.map(s=>{const b=s.name+", "+s.surname;return r("div",{style:{background:(o==null?void 0:o.id)===s.id?"blue":"",color:(o==null?void 0:o.id)===s.id?"white":""},onClick:()=>{m(s.id)},children:b},s.id)})}),g("div",{style:{width:"50%",padding:10},children:[g("div",{children:[r("label",{children:"Name:"}),r("input",{type:"text",value:o?o.name:i.name,onChange:d})]}),g("div",{children:[r("label",{children:"Surname:"}),r("input",{type:"text",value:o?o.surname:i.surname,onChange:p})]})]}),g("div",{children:[r("button",{disabled:o!==null,style:{marginRight:10},onClick:u,children:"Create"}),r("button",{disabled:o===null,style:{marginRight:10},onClick:x,children:"Update"}),r("button",{disabled:o===null,style:{marginRight:10},onClick:w,children:"Delete"})]})]})]})},Ie=U.domain({name:"CircleDrawerDomain",impl:e=>{const t=e.state({name:"HistoryState",default:{items:[],currentIndex:-1}}),a=e.query({name:"HistoryQuery",impl:({get:y})=>y(t())}),n=e.command({name:"RecordHistoryStateCommand",impl:({get:y},f)=>{const I=y(t()),D=I.items.slice(0,I.currentIndex+1);if(f.action==="adjust-circle"){const k=D[D.length-1];k.action==="adjust-circle"&&k.index===f.index&&D.pop()}const F=[...D,f],R=F.length-1;return t().new({items:F,currentIndex:R})}}),i=e.state({name:"DrawState",default:{circles:[]}}),o=e.query({name:"DrawQuery",impl:({get:y})=>y(i())}),l=e.command({name:"UndoCommand",impl:({get:y})=>{const f=y(t()),I=y(d()),D=f.currentIndex-1;return!I||D<0?[i().new({circles:[]}),t().new({items:f.items,currentIndex:-1})]:[i().new(f.items[D].state),t().new({items:f.items,currentIndex:D})]}}),m=e.command({name:"RedoCommand",impl:({get:y})=>{const f=y(t());if(!y(p()))return[];const D=f.currentIndex+1;return[i().new(f.items[D].state),t().new({items:f.items,currentIndex:D})]}}),d=e.query({name:"CanUndoQuery",impl:({get:y})=>y(t()).currentIndex>=0}),p=e.query({name:"CanRedoQuery",impl:({get:y})=>{const f=y(t());return f.currentIndex<f.items.length-1}}),u=e.state({name:"SelectedIndexState",default:-1}),x=e.query({name:"SelectedIndexQuery",impl:({get:y})=>y(u())}),w=e.command({name:"SetSelectedIndexCommand",impl:({},y)=>u().new(y)}),s=e.query({name:"SelectedCircleInfoQuery",impl:({get:y})=>{const f=y(u()),I=y(i()).circles;return f===-1?null:{index:f,circle:I[f]}}}),b=e.command({name:"DrawCommand",impl:({get:y},f)=>{const D={circles:[...y(i()).circles,{position:f.position,diameter:f.diameter}]};return[i().new(D),n({action:"add-circle",state:D})]}}),h=e.command({name:"AdjustCommand",impl:({get:y},f)=>{const F={circles:y(i()).circles.map((R,k)=>k===f.index?{position:R.position,diameter:f.diameter}:R)};return[i().new(F),n({action:"adjust-circle",index:f.index,state:F})]}}),c=e.state({name:"TooltipsState",default:{type:"default"}}),C=e.query({name:"TooltipsQuery",impl:({get:y})=>y(c())}),v=e.command({name:"UpdateTooltipsCommand",impl:({},y)=>c().new(y)});return{query:{HistoryQuery:a,DrawQuery:o,TooltipsQuery:C,SelectedIndexQuery:x,SelectedCircleInfoQuery:s,CanUndoQuery:d,CanRedoQuery:p},command:{DrawCommand:b,AdjustCommand:h,UpdateTooltipsCommand:v,UndoCommand:l,RedoCommand:m,SetSelectedIndexCommand:w}}}}),Qe=(e,t)=>{const{x:a,y:n}=e,{diameter:i,position:o}=t,{x:l,y:m}=o,d=i/2,p=a-l,u=n-m;return p*p+u*u<d*d},Ue=()=>{var b;const e=q(),t=Q(Ie()),a=S(t.query.DrawQuery()),n=S(t.query.TooltipsQuery()),i=S(t.query.SelectedCircleInfoQuery()),o=S(t.query.CanUndoQuery()),l=S(t.query.CanRedoQuery()),m=h=>{const c=a.circles.find(v=>Qe(h,v));return c?{index:a.circles.indexOf(c),circle:c}:null},d=h=>{h.preventDefault();const c={x:h.pageX,y:h.pageY},C=m(c);C&&e([t.command.SetSelectedIndexCommand(C.index),t.command.UpdateTooltipsCommand({type:"show-tips",index:C.index,circle:C.circle,pageX:h.pageX,pageY:h.pageY})])},p=h=>{if(n.type!=="default")return;const c={x:h.pageX,y:h.pageY};m(c)||e(t.command.DrawCommand({position:c,diameter:30}))},u=h=>{if(n.type!=="default")return;const c={x:h.pageX,y:h.pageY},C=m(c);e(C?t.command.SetSelectedIndexCommand(C.index):t.command.SetSelectedIndexCommand(-1))},x=()=>{n.type==="show-tips"&&e(t.command.UpdateTooltipsCommand({type:"open-slider",index:n.index,circle:n.circle,pageX:n.pageX,pageY:n.pageY}))},w=()=>{e(t.command.UpdateTooltipsCommand({type:"default"}))},s=h=>{const c=parseInt(h.target.value,10);i&&!isNaN(c)&&e(t.command.AdjustCommand({index:i.index,diameter:c}))};return g("div",{style:{border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[r("h2",{children:"Circle Drawer"}),g("div",{style:{width:400,textAlign:"center",padding:10},children:[r("button",{onClick:()=>e(t.command.UndoCommand()),style:{margin:"0 10px"},disabled:!o,children:"Undo"}),r("button",{onClick:()=>e(t.command.RedoCommand()),style:{margin:"0 10px"},disabled:!l,children:"Redo"})]}),r("div",{style:{width:400,height:400,border:"1px solid #eaeaea",boxSizing:"border-box",overflow:"hidden"},onClick:p,onMouseMove:u,children:a.circles.map((h,c)=>r("div",{style:{position:"absolute",left:h.position.x-h.diameter/2,top:h.position.y-h.diameter/2,width:h.diameter,height:h.diameter,borderRadius:h.diameter/2,border:"1px solid #666",backgroundColor:(i==null?void 0:i.index)===c?"#eaeaea":""},onContextMenu:d},h.position.x+"-"+h.position.y+"-"+h.diameter))}),n.type==="show-tips"&&r(N,{style:{position:"absolute",left:n.pageX,top:n.pageY,zIndex:100,background:"#fff",border:"1px solid #666",padding:10},onOuterClick:w,onClick:x,children:"Adjust Diameter"},"show-tips"),n.type==="open-slider"&&g(N,{style:{position:"absolute",left:n.pageX,top:n.pageY,background:"#fff",border:"1px solid #666",zIndex:100,padding:10},onOuterClick:w,children:[r("p",{children:"Adjust Diameter"}),r("div",{children:r("input",{type:"range",value:(b=i==null?void 0:i.circle.diameter)!=null?b:"",min:1,max:150,onChange:s})})]},"open-slider")]})},J=[0,1,2,3,4,5,6,7,8,9],L=["A","B","C","D","E","F","G","H","I","J"],qe=()=>{const e=[];for(const t of L)for(const a of J)e.push({row:a,column:t,content:{type:"text",text:""},isEditing:!1});return e},O=U.domain({name:"CellsDomain",inspectable:!1,impl:e=>{const t=W(e,{name:"CellListModule",key:l=>l.column+l.row,default:qe()}),a=e.query({name:"CellQuery",impl:({get:l},m)=>{const d=l(t.query.ItemQuery(m));if(d.content.type==="text")return{type:"text",isEditing:d.isEditing,content:d.content.text,displayContent:d.content.text};if(d.content.type==="formula"){const p=Fe(d.content.formula),u=x=>Number(l(a(x)).displayContent);return{type:"formula",isEditing:d.isEditing,content:d.content.formula,displayContent:p(u)}}throw new Error("Unknown cell type")}}),n=e.command({name:"SelectCellCommand",impl:({get:l},m)=>{const d=l(t.query.ItemQuery(m));return t.command.UpdateItemCommand({...d,isEditing:!0})}}),i=e.command({name:"UnselectCellCommand",impl:({get:l},m)=>{const d=l(t.query.ItemQuery(m));return t.command.UpdateItemCommand({...d,isEditing:!1})}}),o=e.command({name:"SetCellContentCommand",impl:({get:l},{key:m,input:d})=>{const p=l(t.query.ItemQuery(m));return d.startsWith("=")?t.command.UpdateItemCommand({...p,content:{type:"formula",formula:d},isEditing:p.isEditing}):t.command.UpdateItemCommand({...p,content:{type:"text",text:d},isEditing:p.isEditing})}});return{query:{CellQuery:a},command:{SelectCellCommand:n,UnselectCellCommand:i,SetCellContentCommand:o}}}}),Fe=e=>t=>{try{const a=e.slice(1).replace(/\w\d+/g,i=>`get('${i}')`);return new Function("get",`return (${a}).toString()`)(t)}catch{return"-"}},Ee=()=>(Q(O()),g("div",{children:[r("h2",{children:"Cells"}),g("table",{style:{borderCollapse:"collapse",border:"1px solid #bbb",textAlign:"center"},children:[r("thead",{children:g("tr",{style:{backgroundColor:"#f6f6f6"},children:[r("th",{style:{width:30,display:"block"}}),L.map(e=>r("th",{style:{maxWidth:80,border:"1px solid #bbb"},children:e},e))]})}),r("tbody",{children:J.map(e=>r("tr",{children:r(Re,{rowKey:e,columnKeyList:L})},e))})]})]})),Re=({columnKeyList:e,rowKey:t})=>{const a=q(),n=Q(O());return g(j,{children:[r("td",{style:{width:30,border:"1px solid #bbb",backgroundColor:"#f6f6f6"},children:t}),e.map(i=>{const o=`${i}${t}`;return r("td",{style:{maxWidth:80,minWidth:80,border:"1px solid #bbb",overflow:"hidden"},onClick:l=>{l.target instanceof HTMLInputElement||a(n.command.SelectCellCommand(o))},children:r(ke,{cellKey:o})},o)})]})},ke=({cellKey:e})=>{const t=q(),a=Q(O()),n=S(a.query.CellQuery(e)),i=o=>{t(a.command.SetCellContentCommand({key:e,input:o.target.value}))};return g(j,{children:[n.isEditing&&r("input",{style:{width:"100%",height:"100%",backgroundColor:"transparent",boxSizing:"border-box",textAlign:"center"},value:n.content,onChange:i,onBlur:()=>{n.isEditing&&t(a.command.UnselectCellCommand(e))},autoFocus:!0}),!n.isEditing&&n.displayContent]})},Ae=()=>g("div",{children:[r("h1",{children:"7GUIs in React/Remesh/TypeScript"}),r("p",{children:"This is a live version of an implementation (source) of 7GUIs with React, TypeScript and Remesh."}),r("hr",{}),r(ye,{}),r("hr",{}),r(fe,{}),r("hr",{}),r(ve,{}),r("hr",{}),r(be,{}),r("hr",{}),r(De,{}),r("hr",{}),r(Ue,{}),r("hr",{}),r(Ee,{})]}),P=document.getElementById("root");if(P){const e=_(P),t=U.store({inspectors:[ne(),re()]});e.render(r(T.exports.StrictMode,{children:r(te,{store:t,children:r(Ae,{})})}))}
//# sourceMappingURL=index.dcb75d5a.js.map