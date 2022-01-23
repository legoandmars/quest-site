import{S as W,i as X,s as Y,e as _,k as T,t as K,c as h,a as U,d as u,m as C,h as O,b as o,L as z,g as y,J as g,K as P,l as G,q as I,o as Q,M as oe,f as ae,n as Z,p as x,N as se,v as re,w as ie,x as ne,y as ce,B as ue}from"./vendor-d7306fc4.js";import{d as de}from"./data-b1f8c0f3.js";function fe(r){let t,a,e,l,i,f,s,m,b,A,n,v,E,L,D;return{c(){t=_("div"),a=_("div"),e=_("a"),l=_("img"),s=T(),m=_("div"),b=_("a"),A=K("Download"),v=T(),E=_("a"),L=K("Details"),this.h()},l(k){t=h(k,"DIV",{class:!0});var M=U(t);a=h(M,"DIV",{class:!0});var R=U(a);e=h(R,"A",{href:!0});var S=U(e);l=h(S,"IMG",{class:!0,src:!0,alt:!0}),S.forEach(u),R.forEach(u),s=C(M),m=h(M,"DIV",{class:!0});var d=U(m);b=h(d,"A",{download:!0,href:!0,class:!0});var F=U(b);A=O(F,"Download"),F.forEach(u),v=C(d),E=h(d,"A",{href:!0,class:!0});var V=U(E);L=O(V,"Details"),V.forEach(u),d.forEach(u),M.forEach(u),this.h()},h(){o(l,"class","w-full border-2 border-stone-800 rounded-t-lg border-b-0"),z(l.src,i=r[0])||o(l,"src",i),o(l,"alt",r[1]),o(e,"href",f="/"+r[3]),o(a,"class","h-0 w-[100%] pb-[100%]"),o(b,"download",""),o(b,"href",n="/"+r[2]),o(b,"class","w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-bl-lg border-r border-stone-800 text-white"),o(E,"href",D="/"+r[3]),o(E,"class","w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-br-lg border-l border-stone-800 text-white"),o(m,"class","flex rounded-b-lg border-2 border-stone-800 bg-black"),o(t,"class","sm:max-w-sm max-w-[18rem] rounded-lg overflow-hidden shadow-lg")},m(k,M){y(k,t,M),g(t,a),g(a,e),g(e,l),g(t,s),g(t,m),g(m,b),g(b,A),g(m,v),g(m,E),g(E,L)},p(k,[M]){M&1&&!z(l.src,i=k[0])&&o(l,"src",i),M&2&&o(l,"alt",k[1]),M&8&&f!==(f="/"+k[3])&&o(e,"href",f),M&4&&n!==(n="/"+k[2])&&o(b,"href",n),M&8&&D!==(D="/"+k[3])&&o(E,"href",D)},i:P,o:P,d(k){k&&u(t)}}}function me(r,t,a){let{imageURL:e}=t,{imageAltText:l}=t,{downloadLink:i}=t,{detailsLink:f}=t;return r.$$set=s=>{"imageURL"in s&&a(0,e=s.imageURL),"imageAltText"in s&&a(1,l=s.imageAltText),"downloadLink"in s&&a(2,i=s.downloadLink),"detailsLink"in s&&a(3,f=s.detailsLink)},[e,l,i,f]}class pe extends W{constructor(t){super();X(this,t,me,fe,Y,{imageURL:0,imageAltText:1,downloadLink:2,detailsLink:3})}}function $(r,t,a){const e=r.slice();return e[2]=t[a],e}function _e(r){let t,a,e=(r[2].type===r[0]||r[0]==="all")&&ee(r);return{c(){e&&e.c(),t=G()},l(l){e&&e.l(l),t=G()},m(l,i){e&&e.m(l,i),y(l,t,i),a=!0},p(l,i){l[2].type===l[0]||l[0]==="all"?e?(e.p(l,i),i&1&&I(e,1)):(e=ee(l),e.c(),I(e,1),e.m(t.parentNode,t)):e&&(Z(),Q(e,1,1,()=>{e=null}),x())},i(l){a||(I(e),a=!0)},o(l){Q(e),a=!1},d(l){e&&e.d(l),l&&u(t)}}}function ee(r){let t,a;return t=new pe({props:{imageURL:r[2].image_name,imageAltText:r[2].endpoint,downloadLink:r[2].file_name,detailsLink:r[2].endpoint}}),{c(){ie(t.$$.fragment)},l(e){ne(t.$$.fragment,e)},m(e,l){ce(t,e,l),a=!0},p:P,i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){Q(t.$$.fragment,e),a=!1},d(e){ue(t,e)}}}function te(r){let t,a,e=r[2].hidden!==!0&&r[2].hidden!=="true"&&_e(r);return{c(){e&&e.c(),t=G()},l(l){e&&e.l(l),t=G()},m(l,i){e&&e.m(l,i),y(l,t,i),a=!0},p(l,i){l[2].hidden!==!0&&l[2].hidden!=="true"&&e.p(l,i)},i(l){a||(I(e),a=!0)},o(l){Q(e),a=!1},d(l){e&&e.d(l),l&&u(t)}}}function he(r){let t,a,e,l,i,f,s,m,b,A;return document.title=t=(r[0].charAt(0).toUpperCase()+r[0].slice(1)+"s").replace("Miscs","Misc Models"),{c(){a=T(),e=_("meta"),i=T(),f=_("meta"),m=T(),b=_("meta"),this.h()},l(n){a=C(n),e=h(n,"META",{content:!0,property:!0}),i=C(n),f=h(n,"META",{name:!0,content:!0}),m=C(n),b=h(n,"META",{content:!0,property:!0}),this.h()},h(){o(e,"content",l=(r[0].charAt(0).toUpperCase()+r[0].slice(1)+"s").replace("Miscs","Misc Models")),o(e,"property","og:title"),o(f,"name","description"),o(f,"content",s=`Download Bobbie's Custom ${(r[0].charAt(0).toUpperCase()+r[0].slice(1)+"s").replace("Miscs","Misc Models")} for the Quest version of Beat Saber.`),o(b,"content",A="Download Bobbie's Custom "+(r[0].charAt(0).toUpperCase()+r[0].slice(1)+"s").replace("Miscs","Misc Models")+" for the Quest version of Beat Saber."),o(b,"property","og:description")},m(n,v){y(n,a,v),y(n,e,v),y(n,i,v),y(n,f,v),y(n,m,v),y(n,b,v)},p(n,v){v&1&&t!==(t=(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models"))&&(document.title=t),v&1&&l!==(l=(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models"))&&o(e,"content",l),v&1&&s!==(s=`Download Bobbie's Custom ${(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models")} for the Quest version of Beat Saber.`)&&o(f,"content",s),v&1&&A!==(A="Download Bobbie's Custom "+(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models")+" for the Quest version of Beat Saber.")&&o(b,"content",A)},d(n){n&&u(a),n&&u(e),n&&u(i),n&&u(f),n&&u(m),n&&u(b)}}}function be(r){let t,a,e,l,i,f;return{c(){t=T(),a=_("meta"),e=T(),l=_("meta"),i=T(),f=_("meta"),this.h()},l(s){t=C(s),a=h(s,"META",{name:!0,content:!0}),e=C(s),l=h(s,"META",{content:!0,property:!0}),i=C(s),f=h(s,"META",{content:!0,property:!0}),this.h()},h(){document.title="Bobbie's Quest Model Site",o(a,"name","description"),o(a,"content","Download Bobbie's quest model packs, notes, walls, and more!"),o(l,"content","Bobbie's Quest Model Site"),o(l,"property","og:title"),o(f,"content","Download Bobbie's quest model packs, notes, walls, and more!"),o(f,"property","og:description")},m(s,m){y(s,t,m),y(s,a,m),y(s,e,m),y(s,l,m),y(s,i,m),y(s,f,m)},p:P,d(s){s&&u(t),s&&u(a),s&&u(e),s&&u(l),s&&u(i),s&&u(f)}}}function ge(r){let t,a,e,l,i,f,s,m,b,A,n,v,E,L,D,k,M,R,S=le,d=[];for(let c=0;c<S.length;c+=1)d[c]=te($(r,S,c));const F=c=>Q(d[c],1,1,()=>{d[c]=null});function V(c,p){return c[0]=="all"?be:he}let N=V(r),B=N(r);return{c(){t=_("div"),a=_("script"),l=T(),i=_("ins"),f=T(),s=_("script"),m=K("(adsbygoogle = window.adsbygoogle || []).push({});"),b=T(),A=_("div");for(let c=0;c<d.length;c+=1)d[c].c();n=T(),v=_("meta"),E=_("meta"),B.c(),L=_("meta"),D=_("meta"),k=_("meta"),M=_("meta"),this.h()},l(c){t=h(c,"DIV",{class:!0,align:!0});var p=U(t);a=h(p,"SCRIPT",{src:!0,crossorigin:!0});var w=U(a);w.forEach(u),l=C(p),i=h(p,"INS",{class:!0,style:!0,"data-ad-client":!0,"data-ad-slot":!0,"data-ad-format":!0,"data-full-width-responsive":!0}),U(i).forEach(u),f=C(p),s=h(p,"SCRIPT",{});var j=U(s);m=O(j,"(adsbygoogle = window.adsbygoogle || []).push({});"),j.forEach(u),p.forEach(u),b=C(c),A=h(c,"DIV",{class:!0});var H=U(A);for(let J=0;J<d.length;J+=1)d[J].l(H);H.forEach(u),n=C(c);const q=oe('[data-svelte="svelte-sh6dh8"]',document.head);v=h(q,"META",{charset:!0}),E=h(q,"META",{name:!0,content:!0}),B.l(q),L=h(q,"META",{content:!0,property:!0}),D=h(q,"META",{content:!0,property:!0}),k=h(q,"META",{name:!0,content:!0}),M=h(q,"META",{name:!0,value:!0}),q.forEach(u),this.h()},h(){a.async=!0,z(a.src,e="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8003053308644369")||o(a,"src",e),o(a,"crossorigin","anonymous"),o(i,"class","adsbygoogle"),ae(i,"display","block"),o(i,"data-ad-client","ca-pub-8003053308644369"),o(i,"data-ad-slot","3670690695"),o(i,"data-ad-format","auto"),o(i,"data-full-width-responsive","true"),o(t,"class","mx-auto w-[90%] 2xl:w-[75%] pt-32 pb-2 sm:pt-32 sm:pb-16"),o(t,"align","center"),o(A,"class","grid mx-auto w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-[90%] 2xl:w-[75%] pb-0 gap-8 container"),o(v,"charset","utf-8"),o(E,"name","viewport"),o(E,"content","width=device-width,initial-scale=1"),o(L,"content","https://quest.bobbie.dev/bobbie.png"),o(L,"property","og:image"),o(D,"content","quest.bobbie.dev"),o(D,"property","og:site_name"),o(k,"name","theme-color"),o(k,"content","#202020"),o(M,"name","twitter:card"),o(M,"value","summary")},m(c,p){y(c,t,p),g(t,a),g(t,l),g(t,i),g(t,f),g(t,s),g(s,m),y(c,b,p),y(c,A,p);for(let w=0;w<d.length;w+=1)d[w].m(A,null);y(c,n,p),g(document.head,v),g(document.head,E),B.m(document.head,null),g(document.head,L),g(document.head,D),g(document.head,k),g(document.head,M),R=!0},p(c,[p]){if(p&1){S=le;let w;for(w=0;w<S.length;w+=1){const j=$(c,S,w);d[w]?(d[w].p(j,p),I(d[w],1)):(d[w]=te(j),d[w].c(),I(d[w],1),d[w].m(A,null))}for(Z(),w=S.length;w<d.length;w+=1)F(w);x()}N===(N=V(c))&&B?B.p(c,p):(B.d(1),B=N(c),B&&(B.c(),B.m(L.parentNode,L)))},i(c){if(!R){for(let p=0;p<S.length;p+=1)I(d[p]);R=!0}},o(c){d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)Q(d[p]);R=!1},d(c){c&&u(t),c&&u(b),c&&u(A),se(d,c),c&&u(n),u(v),u(E),B.d(c),u(L),u(D),u(k),u(M)}}}const le=de;function ve(r,t,a){let{modelFiltering:e}=t;return re(async()=>{window.navigator.userAgent.toLowerCase().indexOf("bmbf_quest")>-1}),r.$$set=l=>{"modelFiltering"in l&&a(0,e=l.modelFiltering)},[e]}class ye extends W{constructor(t){super();X(this,t,ve,ge,Y,{modelFiltering:0})}}export{ye as M};
