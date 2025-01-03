import{t as be,c as Ne,r as i,j as e,a as H,S as ve,b as we,M as Se,d as Q,C as Ce,e as U,P as ke,f as W,I as K,g as Z,h as J,i as Re,R as ee,k as Pe,L as se,l as te,m as Te,T as Me,n as v,o as Ae,p as ae,q as ze,s as re,u as Le,v as Ee,w as _e,O as ne,x as ie,y as Ie,X as Oe,z as oe,D as le,A as $e,B as De,E as Fe,F as Xe,G as V,H as _,J as I,K as O,N as X,Q as f,U as Ye,V as Be,W as de,Y as qe,Z as Ve,_ as Ge,$ as He,a0 as Qe,a1 as $,a2 as Ue,a3 as We}from"./vendor.BclOzmPo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();function x(...s){return be(Ne(s))}function Ke(s){return`/smolmart_prototype/${s.startsWith("/")?s.slice(1):s}`}const Ze=H("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),h=i.forwardRef(({className:s,variant:t,size:a,asChild:o=!1,...n},c)=>{const d=o?ve:"button";return e.jsx(d,{className:x(Ze({variant:t,size:a,className:s})),ref:c,...n})});h.displayName="Button";const Je={theme:"system",setTheme:()=>null},ce=i.createContext(Je);function es({children:s,defaultTheme:t="system",storageKey:a="vite-ui-theme",...o}){const[n,c]=i.useState(()=>localStorage.getItem(a)||t);i.useEffect(()=>{const m=window.document.documentElement;if(m.classList.remove("light","dark"),n==="system"){const r=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";m.classList.add(r);return}m.classList.add(n)},[n]);const d={theme:n,setTheme:m=>{localStorage.setItem(a,m),c(m)}};return e.jsx(ce.Provider,{...o,value:d,children:s})}const ss=()=>{const s=i.useContext(ce);if(s===void 0)throw new Error("useTheme must be used within a ThemeProvider");return s};function ts(){const{theme:s,setTheme:t}=ss();return e.jsxs(h,{variant:"ghost",size:"icon",onClick:()=>t(s==="light"?"dark":"light"),children:[e.jsx(we,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(Se,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}const as=Te,rs=Me,ns=i.forwardRef(({className:s,inset:t,children:a,...o},n)=>e.jsxs(Q,{ref:n,className:x("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t&&"pl-8",s),...o,children:[a,e.jsx(Ce,{className:"ml-auto"})]}));ns.displayName=Q.displayName;const is=i.forwardRef(({className:s,...t},a)=>e.jsx(U,{ref:a,className:x("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...t}));is.displayName=U.displayName;const me=i.forwardRef(({className:s,sideOffset:t=4,...a},o)=>e.jsx(ke,{children:e.jsx(W,{ref:o,sideOffset:t,className:x("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...a})}));me.displayName=W.displayName;const D=i.forwardRef(({className:s,inset:t,...a},o)=>e.jsx(K,{ref:o,className:x("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",t&&"pl-8",s),...a}));D.displayName=K.displayName;const os=i.forwardRef(({className:s,children:t,checked:a,...o},n)=>e.jsxs(Z,{ref:n,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),checked:a,...o,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(J,{children:e.jsx(Re,{className:"h-4 w-4"})})}),t]}));os.displayName=Z.displayName;const ls=i.forwardRef(({className:s,children:t,...a},o)=>e.jsxs(ee,{ref:o,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...a,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(J,{children:e.jsx(Pe,{className:"h-2 w-2 fill-current"})})}),t]}));ls.displayName=ee.displayName;const ds=i.forwardRef(({className:s,inset:t,...a},o)=>e.jsx(se,{ref:o,className:x("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",s),...a}));ds.displayName=se.displayName;const cs=i.forwardRef(({className:s,...t},a)=>e.jsx(te,{ref:a,className:x("-mx-1 my-1 h-px bg-muted",s),...t}));cs.displayName=te.displayName;function ms({children:s}){return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("header",{className:"fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:e.jsxs("div",{className:"container flex h-14 items-center justify-between px-4 mx-auto max-w-[1400px]",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(v,{to:"/",className:"flex items-center",children:e.jsx("span",{className:"font-bold text-lg",children:"SmolMart"})}),e.jsxs("nav",{className:"hidden md:flex items-center",children:[e.jsx(v,{to:"/gallery",className:"px-3 py-2 text-sm",children:"Gallery"}),e.jsx(v,{to:"/artists",className:"px-3 py-2 text-sm",children:"Artists"}),e.jsx(v,{to:"/about",className:"px-3 py-2 text-sm",children:"About"})]}),e.jsxs(as,{children:[e.jsx(rs,{asChild:!0,className:"md:hidden",children:e.jsx(h,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:e.jsx(Ae,{className:"h-4 w-4"})})}),e.jsxs(me,{align:"start",className:"w-[160px]",children:[e.jsx(D,{asChild:!0,children:e.jsx(v,{to:"/gallery",children:"Gallery"})}),e.jsx(D,{asChild:!0,children:e.jsx(v,{to:"/artists",children:"Artists"})}),e.jsx(D,{asChild:!0,children:e.jsx(v,{to:"/about",children:"About"})})]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ts,{}),e.jsx(h,{variant:"outline",size:"sm",className:"whitespace-nowrap",children:"Connect Wallet"})]})]})}),e.jsx("main",{className:"pt-14 h-[calc(100vh] overflow-x-hidden",children:e.jsx("div",{className:"container mx-auto max-w-[1400px] h-full px-4 overflow-visible pb-0",children:s})})]})}const F=i.forwardRef(({className:s,type:t,...a},o)=>e.jsx("input",{type:t,className:x("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:o,...a}));F.displayName="Input";const Y=i.forwardRef(({className:s,orientation:t="horizontal",decorative:a=!0,...o},n)=>e.jsx(ae,{ref:n,decorative:a,orientation:t,className:x("shrink-0 bg-border",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",s),...o}));Y.displayName=ae.displayName;const us=Le,xs=Ee,ps=_e,ue=i.forwardRef(({className:s,sideOffset:t=4,...a},o)=>e.jsx(ze,{children:e.jsx(re,{ref:o,sideOffset:t,className:x("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...a})}));ue.displayName=re.displayName;const hs={totalVolume:"12.5K 🍌",floorPrice:"500 🍌",bestOffer:"480 🍌",recentSales:"24h ago"},fs=[{name:"SmolArtist",totalCustoms:156,bananas:12500,status:"Available"},{name:"PixelMaster",totalCustoms:89,bananas:8900,status:"Available"},{name:"SmolLegend",totalCustoms:234,bananas:15600,status:"Busy"}],gs=["All","Customs","Memes","Pixel Art","Animations","Backgrounds"],js=[{id:1,title:"Smol Adventure",artist:"SmolArtist",description:"A cute pixel art adventure scene",image:"images/smol1.png",bananas:500,status:"Available for Custom",category:"Pixel Art",tags:["pixel","adventure","cute"]},{id:2,title:"Meme Lord",artist:"PixelMaster",description:"Epic meme compilation",image:"images/smol2.png",bananas:300,status:"Available for Custom",category:"Memes",tags:["meme","funny","viral"]},{id:3,title:"Smol Dreams",artist:"SmolLegend",description:"Animated pixel art dreamscape",image:"images/smol3.png",bananas:800,status:"Limited Edition",category:"Animations",tags:["animation","dream","pixel"]},{id:4,title:"Custom Paradise",artist:"SmolArtist",description:"Custom background art",image:"images/smol4.png",bananas:450,status:"Available for Custom",category:"Backgrounds",tags:["background","custom","paradise"]}],b={stats:hs,artists:fs,categories:gs,artworks:js},ys=De,bs=Fe,Ns=$e,xe=i.forwardRef(({className:s,...t},a)=>e.jsx(ne,{className:x("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...t,ref:a}));xe.displayName=ne.displayName;const vs=H("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),pe=i.forwardRef(({side:s="right",className:t,children:a,...o},n)=>e.jsxs(Ns,{children:[e.jsx(xe,{}),e.jsxs(ie,{ref:n,className:x(vs({side:s}),t),...o,children:[e.jsxs(Ie,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(Oe,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]}),a]})]}));pe.displayName=ie.displayName;const ws=i.forwardRef(({className:s,...t},a)=>e.jsx(oe,{ref:a,className:x("text-lg font-semibold text-foreground",s),...t}));ws.displayName=oe.displayName;const Ss=i.forwardRef(({className:s,...t},a)=>e.jsx(le,{ref:a,className:x("text-sm text-muted-foreground",s),...t}));Ss.displayName=le.displayName;const Cs={hidden:{y:20,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}};function ks({artwork:s}){const t=i.useRef(null),[a,o]=i.useState({x:0,y:0}),[n,c]=i.useState({x:50,y:50}),[d,m]=i.useState(!1),[r,g]=i.useState(0),[j,w]=i.useState({x:0,y:0}),[C]=i.useState("ontouchstart"in window),S=i.useRef(),L=i.useRef(!1);i.useEffect(()=>{const u=l=>{if(!L.current||!d)return;const p=l.beta?-l.beta/5:0,k=l.gamma?l.gamma/5:0,N=Math.min(Math.max(p,-10),10),y=Math.min(Math.max(k,-10),10);w({x:N,y})};return C&&d&&(typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(l=>{l==="granted"&&(L.current=!0,window.addEventListener("deviceorientation",u))}).catch(console.error):(L.current=!0,window.addEventListener("deviceorientation",u))),()=>{C&&window.removeEventListener("deviceorientation",u)}},[d,C]),i.useEffect(()=>{const u=()=>{o(l=>({x:l.x+(j.x-l.x)*.2,y:l.y+(j.y-l.y)*.2})),S.current=requestAnimationFrame(u)};return d&&(S.current=requestAnimationFrame(u)),()=>{S.current&&cancelAnimationFrame(S.current)}},[d,j]);const fe=()=>{m(!0),g(s.status==="Limited Edition"?.6:.25),t.current&&c({x:50,y:50})},B=()=>{m(!1),w({x:0,y:0}),o({x:0,y:0}),c({x:50,y:50}),g(0),S.current&&cancelAnimationFrame(S.current)},ge=u=>{if(!t.current||!d)return;const l=u.touches[0],p=t.current.getBoundingClientRect(),k=p.left+p.width/2,N=p.top+p.height/2,y=(l.clientX-k)/(p.width/2),R=(l.clientY-N)/(p.height/2),E=Math.sqrt(y*y+R*R),P=.4,T=6,M=-R*T*P,A=y*T*P,z=(l.clientX-p.left)/p.width*100,q=(l.clientY-p.top)/p.height*100;L.current||w({x:M,y:A}),c({x:z,y:q}),t.current&&(t.current.style.setProperty("--rx",`${M}deg`),t.current.style.setProperty("--ry",`${A}deg`),t.current.style.setProperty("--hyp",E.toString()),t.current.style.setProperty("--posx",`${z}%`),t.current.style.setProperty("--posy",`${q}%`))},je=u=>{if(!t.current||C)return;const l=t.current.getBoundingClientRect(),p=l.left+l.width/2,k=l.top+l.height/2,N=(u.clientX-p)/(l.width/2),y=(u.clientY-k)/(l.height/2),R=Math.sqrt(N*N+y*y),E=.4,P=6,T=-y*P*E,M=N*P*E,A=(u.clientX-l.left)/l.width*100,z=(u.clientY-l.top)/l.height*100;w({x:T,y:M}),c({x:A,y:z}),t.current&&(t.current.style.setProperty("--rx",`${T}deg`),t.current.style.setProperty("--ry",`${M}deg`),t.current.style.setProperty("--hyp",R.toString()),t.current.style.setProperty("--posx",`${A}%`),t.current.style.setProperty("--posy",`${z}%`))},ye=u=>{switch(u){case"Available for Custom":return e.jsx(Ge,{className:"h-4 w-4 text-green-500"});case"Limited Edition":return e.jsx(Ve,{className:"h-4 w-4 text-yellow-500"});default:return e.jsx(qe,{className:"h-4 w-4 text-blue-500"})}};return e.jsx(f.div,{variants:Cs,"data-rarity":s.status==="Limited Edition"?"rare ultra":"rare holo",...s.status==="Limited Edition"?{"data-supertype":"pokémon"}:{},className:"card relative w-full border bg-card text-card-foreground group rounded-lg",children:e.jsxs("div",{className:"card__front",children:[e.jsx("div",{className:"relative overflow-visible",children:e.jsxs("div",{ref:t,className:"card__image-container relative aspect-square overflow-hidden rounded-t-lg",style:{transform:d?`perspective(800px) 
                   rotateX(${a.x}deg) 
                   rotateY(${a.y}deg) 
                   scale3d(1.04, 1.04, 1.04)
                   translateZ(50px)`:"perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)",transition:"transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)",transformStyle:"preserve-3d",transformOrigin:"center center",borderRadius:d?"0.5rem":"0.5rem 0.5rem 0 0","--o":r,"--pos":`${n.x}% ${n.y}%`,willChange:"transform"},onMouseMove:je,onMouseEnter:()=>{C||(m(!0),g(s.status==="Limited Edition"?.6:.25))},onMouseLeave:B,onTouchStart:fe,onTouchMove:ge,onTouchEnd:B,children:[e.jsx("img",{src:Ke(s.image),alt:s.title,className:"h-full w-full object-cover transform-gpu"}),e.jsx("div",{className:"card__shine absolute inset-0"}),e.jsx("div",{className:"card__glare absolute inset-0"}),e.jsxs(f.div,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.2},className:"absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30",children:[e.jsx(f.div,{initial:{scale:.5,opacity:0},animate:d?{scale:1,opacity:1}:{scale:.5,opacity:0},transition:{type:"spring",damping:20,stiffness:300,opacity:{duration:.2}},className:`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold
                  ${s.status==="Limited Edition"?"bg-gradient-to-r from-amber-600/90 via-yellow-500/90 to-amber-600/90 text-white shadow-lg shadow-amber-500/30":"bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 text-white shadow-md shadow-slate-500/20"}`,children:e.jsx(f.div,{initial:!1,animate:d?{scale:[1,1.05,1],opacity:[1,.9,1]}:{scale:1,opacity:1},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:`flex items-center gap-1.5 ${s.status==="Limited Edition"?"drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]":"drop-shadow-[0_0_4px_rgba(148,163,184,0.4)]"}`,children:s.status==="Limited Edition"?e.jsxs(e.Fragment,{children:[e.jsx(f.span,{animate:{scale:[1,1.2,1],opacity:[1,.9,1]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut",delay:.5},className:"text-amber-200 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]",children:"★"}),e.jsx("span",{className:"font-bold text-amber-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]",children:"Ultra Rare"})]}):e.jsxs(e.Fragment,{children:[e.jsx(f.span,{animate:{scale:[1,1.2,1],opacity:[1,.9,1]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut",delay:.5},className:"text-blue-200 drop-shadow-[0_0_4px_rgba(148,163,184,0.4)]",children:"◇"}),e.jsx("span",{className:"font-bold text-slate-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]",children:"Rare"})]})})}),e.jsx(f.div,{initial:{x:-20,opacity:0},animate:d?{x:0,opacity:1}:{x:-20,opacity:0},transition:{duration:.3,ease:"easeOut",opacity:{duration:.2}},className:"absolute top-2 left-2 flex items-center",children:e.jsxs("div",{className:"relative flex items-center group",children:[e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/40 via-yellow-300/40 to-yellow-500/40 animate-spin-slow"}),e.jsx("div",{className:"relative w-[22px] h-[22px] rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-[1px]",children:e.jsx("div",{className:"w-full h-full rounded-full bg-black flex items-center justify-center",children:e.jsx("span",{className:"text-[10px] font-bold bg-gradient-to-br from-purple-300 to-pink-300 text-transparent bg-clip-text",children:s.artist[0].toUpperCase()})})})]}),e.jsx("div",{className:"h-[22px] flex flex-col justify-center ml-1.5",children:e.jsxs("div",{className:"flex flex-col leading-[1.1]",children:[e.jsx("span",{className:"text-[8px] font-medium text-purple-200/70 tracking-wider uppercase -mb-0.5",children:"Artist"}),e.jsx("div",{className:"text-[11px] font-bold tracking-wide bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-200 text-transparent bg-clip-text",children:s.artist})]})})]})}),e.jsxs(f.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},className:"absolute bottom-2 left-2 right-2 flex justify-between text-white",children:[e.jsxs(f.div,{initial:{y:20,opacity:0},animate:d?{y:0,opacity:1}:{y:20,opacity:0},transition:{duration:.3,ease:[.23,1,.32,1],delay:.1},className:"flex items-center gap-1 px-2 py-1 rounded-full bg-black/50",children:[e.jsx(Ye,{className:"w-3 h-3 text-red-500"}),e.jsxs("span",{className:"text-xs font-medium",children:[s.bananas,"k"]})]}),e.jsxs(f.div,{initial:{y:20,opacity:0},animate:d?{y:0,opacity:1}:{y:20,opacity:0},transition:{duration:.3,ease:[.23,1,.32,1],delay:.15},className:"flex items-center gap-1 px-2 py-1 rounded-full bg-black/50",children:[e.jsx(Be,{className:"w-3 h-3 text-blue-500"}),e.jsxs("span",{className:"text-xs font-medium",children:[Math.floor(s.bananas*2.5),"k"]})]})]})]})]})}),e.jsxs("div",{className:"p-4 flex flex-col gap-2 rounded-b-lg",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-semibold truncate text-base",children:s.title}),e.jsxs("span",{className:"flex items-center gap-1 text-yellow-500 shrink-0",children:[e.jsx(de,{className:"h-4 w-4"}),e.jsx("span",{children:s.bananas})]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["by ",s.artist]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"flex overflow-x-auto no-scrollbar items-center gap-1 pb-0.5 mask-fade-right",children:s.tags.map(u=>e.jsx("span",{className:"inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium whitespace-nowrap",children:u},u))}),e.jsx("div",{className:"pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent"})]}),e.jsxs("div",{className:"flex items-center justify-between mt-auto pt-2",children:[e.jsx(us,{children:e.jsxs(xs,{children:[e.jsx(ps,{children:ye(s.status)}),e.jsx(ue,{children:e.jsx("p",{children:s.status})})]})}),e.jsx(h,{variant:"outline",size:"sm",className:"rounded-md",children:"Request Custom"})]})]})]})})}function G({artist:s}){return e.jsxs("div",{className:"flex items-center justify-between rounded-lg border bg-card p-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground",children:s.name[0]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:s.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[s.totalCustoms," customs"]})]})]}),e.jsxs("div",{className:"flex items-center gap-1 text-yellow-500",children:[e.jsx(de,{className:"h-4 w-4"}),e.jsx("span",{children:s.bananas})]})]})}function Rs(){const[s,t]=i.useState("All"),[a,o]=i.useState(""),[n,c]=i.useState("");i.useEffect(()=>{const r=setTimeout(()=>{c(a)},300);return()=>clearTimeout(r)},[a]);const d=i.useMemo(()=>b.artworks.filter(r=>{const g=s==="All"||r.category===s,j=r.title.toLowerCase().includes(n.toLowerCase())||r.artist.toLowerCase().includes(n.toLowerCase())||r.tags.some(w=>w.toLowerCase().includes(n.toLowerCase()));return g&&j}),[s,n]),{stats:m}=b;return e.jsxs("div",{className:"relative flex min-h-full flex-col",children:[e.jsx("div",{className:"fixed top-[3.54rem] left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:e.jsxs("div",{className:"container mx-auto max-w-[1400px] py-3 md:py-6 px-4",children:[e.jsxs("div",{className:"flex flex-col gap-2 md:gap-4 md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between md:hidden w-full",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(ys,{children:[e.jsx(bs,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"h-9 w-9 shrink-0",children:e.jsx(Xe,{className:"h-5 w-5"})})}),e.jsx(pe,{side:"left",className:"w-[280px] p-0",children:e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(V,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Volume"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.totalVolume})]}),e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Floor"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.floorPrice})]}),e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Best Offer"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.bestOffer})]}),e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Recent"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.recentSales})]})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Top Artists"}),e.jsx("div",{className:"space-y-2",children:b.artists.map(r=>e.jsx(G,{artist:r},r.name))})]}),e.jsx(Y,{}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("div",{className:"relative w-full",children:[e.jsx(F,{placeholder:"Search artworks...",value:a,onChange:r=>o(r.target.value),className:"h-9"}),e.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none",children:e.jsx(X,{className:"h-4 w-4 text-muted-foreground"})})]})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Categories"}),e.jsx("div",{className:"space-y-1",children:b.categories.map(r=>{const g=b.artworks.filter(j=>r==="All"?!0:j.category===r).length;return e.jsxs(h,{variant:s===r?"secondary":"ghost",className:"w-full justify-between",onClick:()=>t(r),children:[e.jsx("span",{children:r}),e.jsx("span",{className:`ml-auto inline-flex h-5 items-center justify-center rounded-full px-2 text-xs font-medium
                                  ${s===r?"bg-primary/10 text-primary":"bg-muted text-muted-foreground"}`,children:g})]},r)})})]})]})})]}),e.jsx("h2",{className:"text-lg font-semibold tracking-tight",children:"Smol Gallery"})]}),e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"bg-muted/50 rounded-full py-0.5 px-0.5 border border-border/40",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs(h,{variant:"ghost",size:"sm",className:"h-8 w-10 rounded-full flex items-center justify-center hover:bg-background p-0 transition-colors",children:[e.jsx(_,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Featured"})]}),e.jsxs(h,{variant:"ghost",size:"sm",className:"h-8 w-10 rounded-full flex items-center justify-center hover:bg-background p-0 transition-colors",children:[e.jsx(I,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Popular"})]}),e.jsxs(h,{variant:"ghost",size:"sm",className:"h-8 w-10 rounded-full flex items-center justify-center hover:bg-background p-0 transition-colors",children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Recent"})]})]})})})]}),e.jsx("div",{className:"hidden md:flex items-center gap-4",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Smol Gallery"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Discover and collect unique Smol artworks"})]})}),e.jsx("div",{className:"hidden md:flex items-center",children:e.jsx("div",{className:"bg-muted/50 rounded-full py-1 px-1 border border-border/40",children:e.jsxs("div",{className:"flex items-center gap-0.5",children:[e.jsxs(h,{variant:"ghost",size:"sm",className:"h-8 px-3 rounded-full flex items-center justify-center hover:bg-background",children:[e.jsx(_,{className:"h-4 w-4 mr-2"}),e.jsx("span",{className:"text-sm",children:"Featured"})]}),e.jsxs(h,{variant:"ghost",size:"sm",className:"h-8 px-3 rounded-full flex items-center justify-center hover:bg-background",children:[e.jsx(I,{className:"h-4 w-4 mr-2"}),e.jsx("span",{className:"text-sm",children:"Popular"})]}),e.jsxs(h,{variant:"ghost",size:"sm",className:"h-8 px-3 rounded-full flex items-center justify-center hover:bg-background",children:[e.jsx(O,{className:"h-4 w-4 mr-2"}),e.jsx("span",{className:"text-sm",children:"Recent"})]})]})})})]}),e.jsx("div",{className:"flex md:hidden mt-2",children:e.jsxs("div",{className:"relative w-full",children:[e.jsx(F,{placeholder:"Search artworks...",value:a,onChange:r=>o(r.target.value),className:"h-8 w-full pr-8 text-sm"}),e.jsx("div",{className:"absolute right-0 top-0 h-8 w-8 flex items-center justify-center pointer-events-none",children:e.jsx(X,{className:"h-4 w-4 text-muted-foreground"})})]})})]})}),e.jsx("div",{className:"flex-1 pt-32 md:pt-32",children:e.jsxs("div",{className:"mx-auto max-w-[1400px] relative px-4 md:px-0",children:[e.jsx("div",{className:"fixed w-[280px] hidden md:block",children:e.jsx("div",{className:"rounded-lg border bg-card shadow-lg",children:e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(V,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Volume"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.totalVolume})]}),e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Floor"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.floorPrice})]}),e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Best Offer"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.bestOffer})]}),e.jsxs("div",{className:"rounded-lg border p-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Recent"})]}),e.jsx("p",{className:"mt-1 font-medium",children:m.recentSales})]})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Top Artists"}),e.jsx("div",{className:"space-y-2",children:b.artists.map(r=>e.jsx(G,{artist:r},r.name))})]}),e.jsx(Y,{}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("div",{className:"relative w-full",children:[e.jsx(F,{placeholder:"Search artworks...",value:a,onChange:r=>o(r.target.value),className:"h-9"}),e.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none",children:e.jsx(X,{className:"h-4 w-4 text-muted-foreground"})})]})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Categories"}),e.jsx("div",{className:"space-y-1",children:b.categories.map(r=>{const g=b.artworks.filter(j=>r==="All"?!0:j.category===r).length;return e.jsxs(h,{variant:s===r?"secondary":"ghost",className:"w-full justify-between",onClick:()=>t(r),children:[e.jsx("span",{children:r}),e.jsx("span",{className:`ml-auto inline-flex h-5 items-center justify-center rounded-full px-2 text-xs font-medium
                            ${s===r?"bg-primary/10 text-primary":"bg-muted text-muted-foreground"}`,children:g})]},r)})})]})]})})}),e.jsx("div",{className:"md:pl-[calc(280px+1rem)]",children:e.jsxs(f.div,{layout:!0,className:"grid auto-rows-max grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 w-full px-2 md:px-3 relative min-h-[200px]",style:{perspective:"1000px",transformStyle:"preserve-3d"},children:[d.map(r=>e.jsx(f.div,{className:"h-fit",style:{transformStyle:"preserve-3d",position:"relative",padding:"1.5rem",margin:"-1.5rem"},layout:"position",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:25,mass:.5}},exit:{scale:.9,opacity:0,transition:{duration:.15}},children:e.jsx(ks,{artwork:r})},r.id)),d.length===0&&e.jsx(f.div,{className:"absolute inset-0 flex items-center justify-center text-muted-foreground",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:e.jsx("p",{children:"No artworks found matching your criteria"})},"empty")]})})]})})]})}const Ps=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Welcome to SmolMart"}),e.jsx("p",{className:"text-muted-foreground",children:"Discover and collect unique digital artworks"})]}),Ts=()=>e.jsx("div",{children:"Artists Page"}),Ms=()=>e.jsx("div",{children:"About Page"});function As(){return e.jsx(es,{defaultTheme:"system",storageKey:"smolmart-theme",children:e.jsx(He,{basename:"/smolmart_prototype",children:e.jsx(ms,{children:e.jsxs(Qe,{children:[e.jsx($,{path:"/",element:e.jsx(Ps,{})}),e.jsx($,{path:"/gallery",element:e.jsx(Rs,{})}),e.jsx($,{path:"/artists",element:e.jsx(Ts,{})}),e.jsx($,{path:"/about",element:e.jsx(Ms,{})})]})})})})}const he=document.getElementById("root");if(!he)throw new Error("Root element not found");Ue.createRoot(he).render(e.jsx(We.StrictMode,{children:e.jsx(As,{})}));
