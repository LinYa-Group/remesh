var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,m=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&l(e,n,t[n]);return e},u=(e,r)=>t(e,n(r));import"./modulepreload-polyfill.b7f2da20.js";import{i,s,S as d,O as c,b as p,r as y,a as g,m as f,c as b,d as S,e as w,o as h,N as E,f as v,p as x,g as C,t as Q,R as I}from"./vendor.a1573f5e.js";let R=0;let D=0;const k=(e,t)=>i(e)&&i(t)?s(e,t):e===t,$=e=>{var t;const n=D++;let r=null;const a=e=>{if(void 0===e&&r)return r;const t={type:"RemeshStateItem",arg:e,State:a,new:e=>({type:"RemeshStateSetterPayload",stateItem:t,newState:e})};return void 0===e&&(r=t),t};return a.type="RemeshState",a.stateId=n,a.stateName=e.name,a.impl=e.impl,a.compare=null!=(t=e.compare)?t:k,a.Query=M({name:`Query(${e.name})`,impl:({get:e},t)=>e(a(t))}),a};let q=0;const M=e=>{var t;const n=q++;let r=null;const a=e=>{if(void 0===e&&r)return r;const t={type:"RemeshQueryPayload",Query:a,arg:e};return void 0===e&&(r=t),t};return a.type="RemeshQuery",a.queryId=n,a.queryName=e.name,a.impl=e.impl,a.compare=null!=(t=e.compare)?t:k,a};let F=0;let N=0;let O=0;const P=e=>{let t=null;const n=e=>{if(void 0===e&&t)return t;const r={type:"RemeshDomainPayload",Domain:n,arg:e};return void 0===e&&(t=r),r};return Object.assign(n,{type:"RemeshDomain",domainId:O++,domainName:e.name,impl:e.impl}),n},j=P({name:"DefaultDomain",impl:()=>({})}),K=e=>{const t=new Set,n=new Map,r=new Map,a=new Set,o=t=>{const n=r.get(t);if(n)return n;const a={type:"RemeshExternStorage",Extern:t,currentValue:(t=>{var n;for(const r of null!=(n=e.externs)?n:[])if(r.Extern===t)return r.value;return t.default})(t)};return r.set(t,a),o(t)},l=new WeakMap,i=e=>{var t;const n=l.get(e);if(n)return n;const r=e.State.stateName,a=null!=(t=JSON.stringify(e.arg))?t:"",o=`State/${e.State.stateId}/${r}/${a}`;return l.set(e,o),o},s=e=>{var t;const n=l.get(e);if(n)return n;const r=e.Query.queryName,a=null!=(t=JSON.stringify(e.arg))?t:"",o=`Query/${e.Query.queryId}/${r}/${a}`;return l.set(e,o),o},y=e=>{var t;const n=w(null!=(t=e.State.owner)?t:j()),r=i(e),a=n.stateMap.get(r);return a||(n.stateMap.set(r,{type:"RemeshStateStorage",State:e.State,arg:e.arg,key:r,currentState:e.State.impl(e.arg),downstreamSet:new Set}),y(e))},g=e=>{var t;const n=w(null!=(t=e.owner)?t:j()),r=n.eventMap.get(e);if(r)return r;const o=new d,l=new c((e=>{const t=o.subscribe(e);return m.refCount+=1,()=>{t.unsubscribe(),m.refCount-=1,a.add(m),U()}})),m={type:"RemeshEventStorage",Event:e,subject:o,observable:l,refCount:0};return n.eventMap.set(e,m),g(e)},f=e=>{var t;const n=w(null!=(t=e.Query.owner)?t:j()),r=s(e),o=n.queryMap.get(r);if(o)return o;const l=new d,m=new c((e=>{const t=l.subscribe(e);return S.refCount+=1,()=>{t.unsubscribe(),S.refCount-=1,a.add(S),U()}})),u=new Set,i=new Set,{Query:p}=e,g={get:e=>{if("RemeshStateItem"===e.type){const t=y(e);return u.add(t),q.get(e)}if("RemeshQueryPayload"===e.type){const t=f(e);return u.add(t),q.get(e)}return q.get(e)}},b=p.impl(g,e.arg),S={type:"RemeshQueryStorage",Query:e.Query,arg:e.arg,currentValue:b,key:r,upstreamSet:u,downstreamSet:i,subject:l,observable:m,refCount:0};for(const a of u)a.downstreamSet.add(S);return n.queryMap.set(r,S),S},b=e=>{var t;const n=w(null!=(t=e.owner)?t:j()),r=n.command$Map.get(e);if(r)return r;const a=new d,o=a.asObservable(),l={type:"RemeshCommand$Storage",Command$:e,subject:a,observable:o};return n.command$Map.set(e,l),l},S=e=>{var t;const n=l.get(e);if(n)return n;const r=e.Domain.domainName,a=null!=(t=JSON.stringify(e.arg))?t:"",o=`Domain/${e.Domain.domainId}/${r}/${a}`;return l.set(e,o),o},w=e=>{const t=S(e),r=n.get(t);if(r)return r;let a=!1;const l=new Set,m=new Set,u={state:t=>{if(a)throw new Error("Unexpected calling domain.state(..) asynchronously");if("default"in t){const n=(e=>$({name:e.name,impl:()=>e.default,compare:e.compare}))(t);return n.owner=e,n}const n=$(t);return n.owner=e,n},query:t=>{if(a)throw new Error("Unexpected calling domain.query(..) asynchronously");const n=M(t);return n.owner=e,n},event:t=>{if(a)throw new Error("Unexpected calling domain.event(..) asynchronously");const n=(e=>{const t=R++,n=e=>({type:"RemeshEventPayload",arg:e,Event:n});return n.type="RemeshEvent",n.eventId=t,n.eventName=e.name,n.impl=e.impl,n})(t);return n.owner=e,n},command:t=>{if(a)throw new Error("Unexpected calling domain.command(..) asynchronously");const n=(e=>{const t=F++,n=e=>({type:"RemeshCommandPayload",arg:e,Command:n});return n.type="RemeshCommand",n.commandId=t,n.commandName=e.name,n.impl=e.impl,n})(t);return n.owner=e,n},command$:t=>{if(a)throw new Error("Unexpected calling domain.command$(..) asynchronously");const n=(e=>{const t=N++,n=e=>({type:"RemeshCommand$Payload",arg:e,Command$:n});return n.type="RemeshCommand$",n.command$Id=t,n.command$Name=e.name,n.impl=e.impl,n})(t);return n.owner=e,m.add(n),n},module:e=>{if(a)throw new Error("Unexpected calling domain.module(..) asynchronously");return e(u)},getDomain:e=>{const t=w(e);return l.add(t),t.domain},getExtern:e=>(e=>o(e).currentValue)(e)},i=e.Domain.impl(u,e.arg);a=!0;const s={type:"RemeshDomainStorage",Domain:e.Domain,arg:e.arg,domain:i,domainPayload:e,key:t,command$Set:m,upstreamSet:l,downstreamSet:new Set,upstreamSubscriptionSet:new Set,domainSubscriptionSet:new Set,stateMap:new Map,queryMap:new Map,eventMap:new Map,command$Map:new Map,refCount:0,running:!1};n.set(t,s);for(const n of l)n.downstreamSet.add(s);return w(e)},h=e=>{var t;const n=w(null!=(t=e.Query.owner)?t:j());e.subject.complete(),n.queryMap.delete(e.key);for(const r of e.upstreamSet)if(r.downstreamSet.delete(e),"RemeshQueryStorage"===r.type)E(r);else{if("RemeshStateStorage"!==r.type)throw new Error(`Unknown upstream in clearQueryStorageIfNeeded(..): ${r}`);x(r)}},E=e=>{0===e.refCount&&0===e.downstreamSet.size&&h(e)},v=e=>{var t;const n=w(null!=(t=e.State.owner)?t:j());n.stateMap.has(e.key)&&console.log("delete",e.key),n.stateMap.delete(e.key)},x=e=>{0===e.downstreamSet.size&&v(e)},C=e=>{var t;const n=w(null!=(t=e.Event.owner)?t:j());e.subject.complete(),n.eventMap.delete(e.Event)},Q=e=>{var t,n;const r=w(null!=(t=e.Command$.owner)?t:j());e.subject.complete(),null==(n=e.subscription)||n.unsubscribe(),r.command$Map.delete(e.Command$)},I=e=>{const t=[...e.upstreamSet];L(e.domainSubscriptionSet),L(e.upstreamSubscriptionSet);for(const n of e.eventMap.values())C(n);for(const n of e.queryMap.values())h(n);for(const n of e.stateMap.values())v(n);for(const n of e.command$Map.values())Q(n);e.upstreamSubscriptionSet.clear(),e.domainSubscriptionSet.clear(),e.downstreamSet.clear(),e.upstreamSet.clear(),e.stateMap.clear(),e.queryMap.clear(),e.eventMap.clear(),n.delete(e.key);for(const n of t)n.downstreamSet.delete(e),D(n)},D=e=>{0===e.refCount&&0===e.downstreamSet.size&&0===e.domainSubscriptionSet.size&&I(e)},k=e=>f(e).currentValue,q={get:e=>{if("RemeshStateItem"===e.type)return y(e).currentState;if("RemeshQueryPayload"===e.type)return k(e);throw new Error(`Unexpected input in ctx.get(..): ${e}`)},fromEvent:e=>g(e).observable,fromQuery:e=>f(e).observable},O=e=>{const{Query:n}=e;for(const t of e.upstreamSet)t.downstreamSet.delete(e),0===t.downstreamSet.size&&a.add(t);e.upstreamSet.clear();const r={get:t=>{if("RemeshStateItem"===t.type){const n=t,r=y(n);return e.upstreamSet.add(r),r.downstreamSet.add(e),q.get(n)}if("RemeshQueryPayload"===t.type){const n=t,r=f(n);return e.upstreamSet.add(r),r.downstreamSet.add(e),q.get(n)}return q.get(t)}},o=n.impl(r,e.arg);if(!n.compare(e.currentValue,o)){e.currentValue=o,t.add(e);for(const t of[...e.downstreamSet])O(t)}},P=()=>{if(0===a.size)return;const e=[...a];a.clear();for(const n of e)"RemeshDomainStorage"===n.type?D(n):"RemeshEventStorage"===n.type?0===(t=n).refCount&&C(t):"RemeshQueryStorage"===n.type?E(n):"RemeshStateStorage"===n.type&&x(n);var t;P()},K=()=>{if(0===t.size)return;const e=[...t];t.clear();for(const n of e)t.has(n)||n.subject.next(n.currentValue);K()},U=()=>{K(),P()},z=e=>{const{Event:t,arg:n}=e,r=g(t);if(t.impl){const e={get:q.get},a=t.impl(e,n);r.subject.next(a)}else r.subject.next(n)},T=e=>{const{Command:t,arg:n}=e,r={get:q.get},a=t.impl(r,n);A(a)},Y=(e,t)=>{e.add(t),t.add((()=>{e.delete(t)}))},B=e=>{const t=b(e);if(t.subscription)return;const n={get:q.get,fromEvent:q.fromEvent,fromQuery:q.fromQuery},r=e.impl(n,t.observable).subscribe(A);t.subscription=r},A=e=>{if(Array.isArray(e))for(const t of e)A(t);else if("RemeshCommandPayload"!==e.type)if("RemeshEventPayload"!==e.type)if("RemeshStateSetterPayload"!==e.type){if("RemeshCommand$Payload"!==e.type)throw new Error(`Unknown command output of ${e}`);X(e)}else(e=>{const t=y(e.stateItem);if(!e.stateItem.State.compare(t.currentState,e.newState)){t.arg=e.stateItem.arg,t.key=i(e.stateItem),t.currentState=e.newState;for(const e of[...t.downstreamSet])O(e);U()}})(e);else z(e);else T(e)},X=e=>{const{Command$:t,arg:n}=e,r=b(t);B(t),r.subject.next(n)},V=e=>{if(!e.running){e.running=!0;for(const t of e.upstreamSet){const n=W(t.domainPayload);Y(e.upstreamSubscriptionSet,n)}(e=>{for(const t of e)B(t);e.clear()})(e.command$Set)}},W=e=>{const t=w(e),n=new p;return((e,t)=>{Y(e.domainSubscriptionSet,t),t.add((()=>{a.add(e),U()}))})(t,n),V(t),n},H=e=>{"RemeshCommandPayload"===e.type?T(e):"RemeshCommand$Payload"===e.type&&X(e)};return{name:e.name,getDomain:e=>{const t=w(e);if(t.domainOutput)return t.domainOutput;const n=t.domain,r=(e=>{const t={};for(const n in e.command){const r=e.command[n];t[n]=e=>H(r(e))}return t})(n),a=u(m({},n),{command:r});return t.domainOutput=a,a},query:k,emitEvent:e=>{z(e)},emitCommand:H,destroy:()=>{for(const e of n.values())I(e);n.clear(),t.clear()},subscribeQuery:(e,t)=>f(e).observable.subscribe(t),subscribeEvent:(e,t)=>g(e).observable.subscribe(t),subscribeDomain:W,getKey:e=>"RemeshStateItem"===e.type?i(e):"RemeshQueryPayload"===e.type?s(e):S(e)}},L=e=>{for(const t of e)t.unsubscribe()},U=y.exports.createContext(null),z=()=>(()=>{const e=y.exports.useContext(U);if(null===e)throw new Error("You may forgot to add <RemeshRoot />");return e})().remeshStore,T=e=>{const t=y.exports.useRef(null);return null===t.current&&(e.store?t.current={remeshStore:e.store}:t.current={remeshStore:K(m({name:"RemeshStore"},e.options))}),y.exports.useEffect((()=>()=>{var e;null==(e=t.current)||e.remeshStore.destroy()}),[]),g.createElement(U.Provider,{value:t.current},e.children)},Y=function(e){const t=z(),[n,r]=y.exports.useState((()=>t.query(e))),a=y.exports.useRef(null);return y.exports.useEffect((()=>()=>{var e;null==(e=a.current)||e.unsubscribe(),a.current=null}),[t,t.getKey(e)]),y.exports.useEffect((()=>{null===a.current&&(a.current=t.subscribeQuery(e,r))}),[t,e]),n},B=function(e){const t=z(),n=t.getDomain(e);return y.exports.useEffect((()=>{const n=t.subscribeDomain(e);return()=>{n.unsubscribe()}}),[t,e]),n},A=P,X=e=>e,V=A({name:"Counter",impl:e=>{const t=e.state({name:"CounterState",default:0}),n=e.command({name:"increCommand",impl:({get:e})=>{const n=e(t());return t().new(n+1)}});return{query:{CounterQuery:t.Query},command:{incre:n}}}}),W=()=>{const e=B(V()),t=Y(e.query.CounterQuery());return g.createElement("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10}},g.createElement("h2",null,"Counter"),g.createElement("input",{type:"number",readOnly:!0,value:t}),g.createElement("label",null,g.createElement("button",{onClick:()=>{e.command.incre()}},"Count ")," "))},H=A({name:"TemperatureConverter",impl:e=>{const t=e.state({name:"CelsiusState",default:""}),n=e.state({name:"FahrenheitState",default:""}),r=e.command({name:"resetBoth",impl:()=>[t().new(""),n().new("")]}),a=e.command({name:"updateCelsius",impl:({},e)=>{if(""===e)return r();const a=parseFloat(e);if(Number.isNaN(a))return t().new(e);const o=1.8*a+32;return[t().new(e),n().new(o.toString())]}}),o=e.command({name:"updateFahrenheit",impl:({},e)=>{if(""===e)return r();const a=parseFloat(e);if(Number.isNaN(a))return n().new(e);const o=5/9*(a-32);return[t().new(o.toString()),n().new(e)]}});return{query:{CelsiusQuery:t.Query,FahrenheitQuery:n.Query},command:{updateCelsius:a,updateFahrenheit:o}}}}),J=()=>{const e=B(H()),t=Y(e.query.CelsiusQuery()),n=Y(e.query.FahrenheitQuery());return g.createElement("div",{style:{border:"1px solid #eaeaea",boxSizing:"border-box",padding:10}},g.createElement("h2",null,"Temperature Converter"),g.createElement("div",null,g.createElement("input",{type:"text",value:t,onChange:t=>{e.command.updateCelsius(t.target.value)}}),g.createElement("label",{htmlFor:""},"Celsius"),"=",g.createElement("input",{type:"text",value:n,onChange:t=>{e.command.updateFahrenheit(t.target.value)}}),g.createElement("label",{htmlFor:""},"Fahrenheit")))},G=e=>{const t=e.split(".");if(3!==t.length)return null;const n=new Date(`${t[2]}.${t[1]}.${t[0]}`);return"Invalid Date"===n.toString()?null:n},Z=e=>{const t=e.toLocaleDateString().split("/");return`${t[2]}.${t[1]}.${t[0]}`},_=A({name:"FlightBooker",impl:e=>{const t=e.state({name:"OptionState",default:"one-way"}),n=e.state({name:"StartDateInputState",default:Z(new Date)}),r=e.state({name:"EndDateInputState",default:Z(new Date)}),a=e.query({name:"StartDateQuery",impl:({get:e})=>{const t=e(n());return G(t)}}),o=e.query({name:"EndDateQuery",impl:({get:e})=>{const t=e(r());return G(t)}}),l=e.command({name:"updateOption",impl:({},e)=>t().new(e)}),m=e.command({name:"updateStartDate",impl:({},e)=>n().new(e)}),u=e.command({name:"updateEndDate",impl:({},e)=>r().new(e)});return{query:{StatusQuery:e.query({name:"StatusQuery",impl:({get:e})=>{const n=e(t()),r=e(a()),l=e(o());var m,u;return{startDate:r?"valid":"invalid",endDate:"return"===n?l?"valid":"invalid":"disabled",bookButton:"one-way"===n?r?"enabled":"disabled":r&&l&&(u=l,((m=r).getFullYear()!==u.getFullYear()?m.getFullYear()-u.getFullYear():m.getMonth()!==u.getMonth()?m.getMonth()-u.getMonth():m.getDate()-u.getDate())<=0)?"enabled":"disabled"}}}),OptionQuery:t.Query,StartDateQuery:a,EndDateQuery:o,StartDateInput:n.Query,EndDateInput:r.Query},command:{updateOption:l,updateStartDate:m,updateEndDate:u}}}}),ee=()=>{const e=B(_()),t=Y(e.query.OptionQuery()),n=Y(e.query.StatusQuery()),r=Y(e.query.StartDateInput()),a=Y(e.query.EndDateInput());return g.createElement("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10}},g.createElement("h2",null,"Flight Booker"),g.createElement("div",null,g.createElement("select",{value:t,onChange:t=>{e.command.updateOption(t.target.value)}},g.createElement("option",{value:"one-way"},"One-way flight"),g.createElement("option",{value:"return"},"Return flight"))),g.createElement("div",null,g.createElement("input",{type:"text",style:{backgroundColor:"invalid"===n.startDate?"red":""},value:r,onChange:t=>{e.command.updateStartDate(t.target.value)}})),g.createElement("div",null,g.createElement("input",{type:"text",style:{backgroundColor:"invalid"===n.endDate?"red":""},disabled:"disabled"===n.endDate,value:a,onChange:t=>{e.command.updateEndDate(t.target.value)}})),g.createElement("div",null,g.createElement("button",{disabled:"disabled"===n.bookButton,onClick:()=>{"enabled"===n.bookButton&&("one-way"===t?alert(`You have booked a one-way flight on ${r}`):alert(`You have booked return flight from ${r} to ${a}`))}},"Book")))},te=A({name:"timer",impl:e=>{const t=e.state({name:"duration",default:15e3}),n=e.state({name:"elapsed",default:0}),r=e.event({name:"StartEvent"}),a=e.event({name:"StopEvent"}),o=e.command({name:"updateElapsed",impl:({get:e},r)=>{const o=e(t()),l=e(n());return l>o?a():n().new(l+r)}}),l=e.command({name:"updateDuration",impl:({get:e},a)=>a>e(n())?[t().new(a),r()]:t().new(a)}),m=e.command({name:"resetElapsed",impl:({})=>[n().new(0),r()]});return e.command$({name:"updateElapsed$",impl:({fromEvent:e})=>{const t=f(e(r).pipe(b(1)),e(a).pipe(b(0))).pipe(S()).pipe(w((t=>0===t?E:v().pipe(x(),C((([e,t])=>t.elapsed-e.elapsed)),C((e=>o(e))),Q(e(a))))));return f(t,h(r()))}}),{query:{DurationQuery:t.Query,ElapsedQuery:n.Query},command:{resetElapsed:m,updateDuration:l}}}}),ne=()=>{const e=B(te()),t=Y(e.query.ElapsedQuery()),n=Y(e.query.DurationQuery());return g.createElement("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10}},g.createElement("h2",null,"Timer"),g.createElement("div",{style:{display:"flex"}},g.createElement("label",{style:{marginRight:10,whiteSpace:"nowrap"}},"Elapsed Timer:"),g.createElement("div",{style:{width:"100%"}},g.createElement("span",{style:{display:"inline-block",height:10,background:"green",width:100*Math.min(t/n,1)+"%",verticalAlign:"middle",borderRadius:5}}))),g.createElement("div",null,t>n?(n/1e3).toFixed(1):(t/1e3).toFixed(1),"s"),g.createElement("div",{style:{display:"flex"}},g.createElement("label",{style:{width:100,marginRight:10}},"Duration:"),g.createElement("input",{style:{width:"100%"},type:"range",min:0,max:3e4,value:n,onChange:t=>{const n=parseInt(t.target.value,10);isNaN(n)||e.command.updateDuration(n)}})),g.createElement("div",null,g.createElement("button",{style:{width:"100% "},onClick:()=>{e.command.resetElapsed()}},"Reset Timer")))},re=e=>{const t=e,{onOuterClick:n}=t,l=((e,t)=>{var n={};for(var l in e)a.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&r)for(var l of r(e))t.indexOf(l)<0&&o.call(e,l)&&(n[l]=e[l]);return n})(t,["onOuterClick"]),u=g.useRef(null);return y.exports.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&(null==n||n(e))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),g.createElement("div",m({ref:u},l))},ae=A({name:"CRUD",impl:e=>{let t=0;const n=e.module((r={name:"Name",getKey:e=>e.id,createItem:e=>({id:e,name:"",surname:""})},X((e=>{const t=e.state({name:`${r.name}.KeyListState`,default:[]}),n=e.state({name:`${r.name}.ItemState`,impl:e=>r.createItem(e)}),a=e.query({name:`${r.name}.ItemListQuery`,impl:({get:e})=>e(t()).map((t=>e(n(t))))}),o=e.command({name:`${r.name}.setList`,impl:({},e)=>{const a=e.map(r.getKey);return[t().new(a),...e.map((e=>n(r.getKey(e)).new(e)))]}}),l=e.command({name:`${r.name}.addItem`,impl:({get:e},a)=>{const o=e(t()),l=r.getKey(a);return o.includes(l)?[]:[t().new(o.concat(l)),n(l).new(a)]}}),m=e.command({name:`${r.name}.removeItem`,impl:({get:e},n)=>{const r=e(t()).filter((e=>e!==n));return t().new(r)}}),u=e.command({name:`${r.name}.updateItem`,impl:({get:e},a)=>{const o=r.getKey(a);return e(t()).includes(o)?n(o).new(a):l(a)}});return{command:{setList:o,addItem:l,removeItem:m,updateItem:u},query:{KeyListQuery:t.Query,ItemQuery:n.Query,ItemListQuery:a}}}))));var r;const a=e.state({name:"FilterPrefix",default:""}),o=e.command({name:"updateFilterPrefix",impl:({},e)=>a().new(e)}),l=e.state({name:"Created",default:{name:"",surname:""}}),i=e.command({name:"UpdateCreated",impl:({get:e},t)=>{const n=e(l());return l().new(m(m({},n),t))}}),s=e.state({name:"Selected",default:null}),d=e.command({name:"Select",impl:({get:e},t)=>{if(null===t)return s().new(null);const r=e(n.query.ItemQuery(t));return s().new(r)}}),c=e.command({name:"UpdateSelectedName",impl:({get:e},t)=>{const n=e(s());return null===n?[]:s().new(m(m({},n),t))}}),p=e.query({name:"FilteredListQuery",impl:({get:e})=>{const t=e(a()),r=e(n.query.ItemListQuery());return""===t?r:r.filter((e=>e.surname.startsWith(t)))}}),y=e.command({name:"SyncSelected",impl:({get:e})=>{const t=e(s());return null===t?[]:n.command.updateItem(t)}}),g=e.command({name:"CreateNameItem",impl:({get:e})=>{const r=e(l()),a=m({id:""+t++},r);return[n.command.addItem(a),i({name:"",surname:""})]}});return{query:u(m({},n.query),{FilteredListQuery:p,SelectedQuery:s.Query,FilterPrefixQuery:a.Query,CreatedQuery:l.Query}),command:u(m({},n.command),{updateFilterPrefix:o,selectItem:d,updateCreated:i,updateSelectedName:c,createNameItem:g,syncSelected:y})}}}),oe=()=>{const e=B(ae()),t=Y(e.query.FilteredListQuery()),n=Y(e.query.FilterPrefixQuery()),r=Y(e.query.CreatedQuery()),a=Y(e.query.SelectedQuery()),o=t=>{e.command.selectItem(t)};return g.createElement(re,{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},onOuterClick:()=>{o(null)}},g.createElement("h2",null,"CRUD"),g.createElement("div",null,g.createElement("label",{htmlFor:""},"Filter prefix"),g.createElement("input",{type:"text",value:n,onChange:t=>{e.command.updateFilterPrefix(t.target.value)}})),g.createElement("div",{style:{display:"flex"}},g.createElement("div",{style:{width:"50%",height:100,border:"1px solid #eaeaea",overflow:"scroll"}},t.map((e=>{const t=e.name+", "+e.surname;return g.createElement("div",{key:e.id,style:{background:(null==a?void 0:a.id)===e.id?"blue":"",color:(null==a?void 0:a.id)===e.id?"white":""},onClick:()=>{o(e.id)}},t)}))),g.createElement("div",{style:{width:"50%",padding:10}},g.createElement("div",null,g.createElement("label",null,"Name:"),g.createElement("input",{type:"text",value:a?a.name:r.name,onChange:t=>{a?e.command.updateSelectedName({name:t.target.value}):e.command.updateCreated({name:t.target.value})}})),g.createElement("div",null,g.createElement("label",null,"Surname:"),g.createElement("input",{type:"text",value:a?a.surname:r.surname,onChange:t=>{a?e.command.updateSelectedName({surname:t.target.value}):e.command.updateCreated({surname:t.target.value})}}))),g.createElement("div",null,g.createElement("button",{disabled:null!==a,style:{marginRight:10},onClick:()=>{null===a&&e.command.createNameItem()}},"Create"),g.createElement("button",{disabled:null===a,style:{marginRight:10},onClick:()=>{a&&e.command.syncSelected()}},"Update"),g.createElement("button",{disabled:null===a,style:{marginRight:10},onClick:()=>{a&&(e.command.removeItem(a.id),e.command.selectItem(null))}},"Delete"))))},le=A({name:"CircleDrawer",impl:e=>{const t=e.state({name:"HistoryState",default:{items:[],currentIndex:-1}}),n=e.command({name:"recordHistoryState",impl:({get:e},n)=>{const r=e(t()),a=r.items.slice(0,r.currentIndex+1);if("adjust-circle"===n.action){const e=a[a.length-1];"adjust-circle"===e.action&&e.index===n.index&&a.pop()}const o=[...a,n],l=o.length-1;return t().new({items:o,currentIndex:l})}}),r=e.state({name:"DrawState",default:{circles:[]}}),a=e.command({name:"undo",impl:({get:e})=>{const n=e(t()),a=e(l()),o=n.currentIndex-1;return!a||o<0?[r().new({circles:[]}),t().new({items:n.items,currentIndex:-1})]:[r().new(n.items[o].state),t().new({items:n.items,currentIndex:o})]}}),o=e.command({name:"redo",impl:({get:e})=>{const n=e(t());if(!e(m()))return[];const a=n.currentIndex+1;return[r().new(n.items[a].state),t().new({items:n.items,currentIndex:a})]}}),l=e.query({name:"CanUndoQuery",impl:({get:e})=>e(t()).currentIndex>=0}),m=e.query({name:"CanRedoQuery",impl:({get:e})=>{const n=e(t());return n.currentIndex<n.items.length-1}}),u=e.state({name:"SelectedIndexState",default:-1}),i=e.command({name:"setSelectedIndex",impl:({},e)=>u().new(e)}),s=e.query({name:"SelectedCircleInfoQuery",impl:({get:e})=>{const t=e(u()),n=e(r()).circles;return-1===t?null:{index:t,circle:n[t]}}}),d=e.command({name:"draw",impl:({get:e},t)=>{const a={circles:[...e(r()).circles,{position:t.position,diameter:t.diameter}]};return[r().new(a),n({action:"add-circle",state:a})]}}),c=e.command({name:"adjust",impl:({get:e},t)=>{const a={circles:e(r()).circles.map(((e,n)=>n===t.index?{position:e.position,diameter:t.diameter}:e))};return[r().new(a),n({action:"adjust-circle",index:t.index,state:a})]}}),p=e.state({name:"TooltipsState",default:{type:"default"}}),y=e.command({name:"updateTooltips",impl:({},e)=>p().new(e)});return{query:{HistoryQuery:t.Query,DrawQuery:r.Query,TooltipsQuery:p.Query,SelectedIndexQuery:u.Query,SelectedCircleInfoQuery:s,CanUndoQuery:l,CanRedoQuery:m},command:{draw:d,adjust:c,updateTooltips:y,undo:a,redo:o,setSelectedIndex:i}}}}),me=()=>{var e;const t=B(le()),n=Y(t.query.DrawQuery()),r=Y(t.query.TooltipsQuery()),a=Y(t.query.SelectedCircleInfoQuery()),o=Y(t.query.CanUndoQuery()),l=Y(t.query.CanRedoQuery()),m=e=>{const t=n.circles.find((t=>((e,t)=>{const{x:n,y:r}=e,{diameter:a,position:o}=t,{x:l,y:m}=o,u=a/2,i=n-l,s=r-m;return i*i+s*s<u*u})(e,t)));if(!t)return null;return{index:n.circles.indexOf(t),circle:t}},u=e=>{e.preventDefault();const n={x:e.pageX,y:e.pageY},r=m(n);r&&(t.command.setSelectedIndex(r.index),t.command.updateTooltips({type:"show-tips",index:r.index,circle:r.circle,pageX:e.pageX,pageY:e.pageY}))},i=()=>{"show-tips"===r.type&&t.command.updateTooltips({type:"open-slider",index:r.index,circle:r.circle,pageX:r.pageX,pageY:r.pageY})},s=()=>{t.command.updateTooltips({type:"default"})};return g.createElement("div",{style:{border:"1px solid #eaeaea",boxSizing:"border-box",padding:10}},g.createElement("h2",null,"Circle Drawer"),g.createElement("div",{style:{width:400,textAlign:"center",padding:10}},g.createElement("button",{onClick:()=>t.command.undo(),style:{margin:"0 10px"},disabled:!o},"Undo"),g.createElement("button",{onClick:()=>t.command.redo(),style:{margin:"0 10px"},disabled:!l},"Redo")),g.createElement("div",{style:{width:400,height:400,border:"1px solid #eaeaea",boxSizing:"border-box",overflow:"hidden"},onClick:e=>{if("default"!==r.type)return;const n={x:e.pageX,y:e.pageY};m(n)||t.command.draw({position:n,diameter:30})},onMouseMove:e=>{if("default"!==r.type)return;const n={x:e.pageX,y:e.pageY},a=m(n);a?t.command.setSelectedIndex(a.index):t.command.setSelectedIndex(-1)}},n.circles.map(((e,t)=>g.createElement("div",{key:e.position.x+"-"+e.position.y+"-"+e.diameter,style:{position:"absolute",left:e.position.x-e.diameter/2,top:e.position.y-e.diameter/2,width:e.diameter,height:e.diameter,borderRadius:e.diameter/2,border:"1px solid #666",backgroundColor:(null==a?void 0:a.index)===t?"#eaeaea":""},onContextMenu:u})))),"show-tips"===r.type&&g.createElement(re,{style:{position:"absolute",left:r.pageX,top:r.pageY,zIndex:100,background:"#fff",border:"1px solid #666",padding:10},onOuterClick:s,onClick:i},"Adjust Diameter"),"open-slider"===r.type&&g.createElement(re,{style:{position:"absolute",left:r.pageX,top:r.pageY,background:"#fff",border:"1px solid #666",zIndex:100,padding:10},onOuterClick:s,onClick:i},g.createElement("p",null,"Adjust Diameter"),g.createElement("div",null,g.createElement("input",{type:"range",value:null!=(e=null==a?void 0:a.circle.diameter)?e:"",min:1,max:150,onChange:e=>{const n=parseInt(e.target.value,10);a&&!isNaN(n)&&t.command.adjust({index:a.index,diameter:n})}}))))},ue=A({name:"Cells",impl:e=>{const t=e.state({name:"RowKeyListState",default:[0,1,2,3,4,5,6,7,8,9].map(String)}),n=e.state({name:"ColumnKeyListState",default:["A","B","C","D","E","F","G","H","I","J"]}),r=e.state({name:"CellState",impl:()=>({content:{type:"text",text:""},isEditing:!1})}),a=e.query({name:"CellQuery",impl:({get:e},t)=>{const n=e(r(t));if("text"===n.content.type)return{type:"text",isEditing:n.isEditing,content:n.content.text,displayContent:n.content.text};if("formula"===n.content.type){const t=ce(n.content.formula),r=t=>Number(e(a(t)).displayContent);return{type:"formula",isEditing:n.isEditing,content:n.content.formula,displayContent:t(r)}}throw new Error("Unknown cell type")}}),o=e.command({name:"selectCell",impl:({get:e},t)=>{const n=e(r(t));return r(t).new({content:n.content,isEditing:!0})}}),l=e.command({name:"unselectCell",impl:({get:e},t)=>{const n=e(r(t));return r(t).new({content:n.content,isEditing:!1})}}),m=e.command({name:"setCellContent",impl:({get:e},{key:t,input:n})=>{const a=e(r(t));return n.startsWith("=")?r(t).new({content:{type:"formula",formula:n},isEditing:a.isEditing}):r(t).new({content:{type:"text",text:n},isEditing:a.isEditing})}});return{query:{CellQuery:a,ColumnKeyListQuery:n.Query,RowKeyListQuery:t.Query},command:{selectCell:o,unselectCell:l,setCellContent:m}}}}),ie=()=>{const e=B(ue()),t=Y(e.query.ColumnKeyListQuery()),n=Y(e.query.RowKeyListQuery());return g.createElement("div",null,g.createElement("h2",null,"Cells"),g.createElement("table",{style:{borderCollapse:"collapse",border:"1px solid #bbb",textAlign:"center"}},g.createElement("thead",null,g.createElement("tr",{style:{backgroundColor:"#f6f6f6"}},g.createElement("th",{style:{width:30,display:"block"}}),t.map((e=>g.createElement("th",{key:e,style:{maxWidth:80,border:"1px solid #bbb"}},e))))),g.createElement("tbody",null,n.map((e=>g.createElement("tr",{key:e},g.createElement(se,{rowKey:e,columnKeyList:t})))))))},se=({columnKeyList:e,rowKey:t})=>{const n=B(ue());return g.createElement(g.Fragment,null,g.createElement("td",{style:{width:30,border:"1px solid #bbb",backgroundColor:"#f6f6f6"}},t),e.map((e=>{const r=`${e}${t}`;return g.createElement("td",{key:r,style:{maxWidth:80,minWidth:80,border:"1px solid #bbb",overflow:"hidden"},onClick:()=>{n.command.selectCell(r)}},g.createElement(de,{cellKey:r}))})))},de=({cellKey:e})=>{const t=B(ue()),n=Y(t.query.CellQuery(e));return g.createElement(g.Fragment,null,n.isEditing&&g.createElement("input",{style:{width:"100%",height:"100%",backgroundColor:"transparent",boxSizing:"border-box",textAlign:"center"},value:n.content,onChange:n=>{t.command.setCellContent({key:e,input:n.target.value})},onBlur:()=>{n.isEditing&&t.command.unselectCell(e)},autoFocus:!0}),!n.isEditing&&n.displayContent)},ce=e=>t=>{try{const n=e.slice(1).replace(/\w\d+/g,(e=>`get('${e}')`));return new Function("get",`return (${n}).toString()`)(t)}catch{return"-"}},pe=()=>g.createElement("div",null,g.createElement("h1",null,"7GUIs in React/Remesh/TypeScript"),g.createElement("p",null,"This is a live version of an implementation (source) of 7GUIs with React, TypeScript and Remesh."),g.createElement("hr",null),g.createElement(W,null),g.createElement("hr",null),g.createElement(J,null),g.createElement("hr",null),g.createElement(ee,null),g.createElement("hr",null),g.createElement(ne,null),g.createElement("hr",null),g.createElement(oe,null),g.createElement("hr",null),g.createElement(me,null),g.createElement("hr",null),g.createElement(ie,null));I.render(g.createElement(g.StrictMode,null,g.createElement(T,null,g.createElement(pe,null))),document.getElementById("root"));
