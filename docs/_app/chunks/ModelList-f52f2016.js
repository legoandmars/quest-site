import{S as J,i as K,s as O,e as h,k as D,t as j,c as b,a as L,d as c,m as C,h as H,b as o,L as P,g as M,J as g,K as R,l as V,q,o as I,M as $,n as z,p as W,N as ee,v as te,w as le,x as re,y as oe,B as ae}from"./vendor-d7306fc4.js";import{d as ne}from"./data-ee0a2447.js";function ie(n){let l,r,e,t,d,f,a,m,p,A,i,v,y,B,T;return{c(){l=h("div"),r=h("div"),e=h("a"),t=h("img"),a=D(),m=h("div"),p=h("a"),A=j("Download"),v=D(),y=h("a"),B=j("Details"),this.h()},l(u){l=b(u,"DIV",{class:!0});var E=L(l);r=b(E,"DIV",{class:!0});var N=L(r);e=b(N,"A",{href:!0});var S=L(e);t=b(S,"IMG",{class:!0,src:!0,alt:!0}),S.forEach(c),N.forEach(c),a=C(E),m=b(E,"DIV",{class:!0});var k=L(m);p=b(k,"A",{download:!0,href:!0,class:!0});var s=L(p);A=H(s,"Download"),s.forEach(c),v=C(k),y=b(k,"A",{href:!0,class:!0});var _=L(y);B=H(_,"Details"),_.forEach(c),k.forEach(c),E.forEach(c),this.h()},h(){o(t,"class","w-full border-2 border-stone-800 rounded-t-lg border-b-0"),P(t.src,d=n[0])||o(t,"src",d),o(t,"alt",n[1]),o(e,"href",f="/"+n[3]),o(r,"class","h-0 w-[100%] pb-[100%]"),o(p,"download",""),o(p,"href",i="/"+n[2]),o(p,"class","w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-bl-lg border-r border-stone-800 text-white"),o(y,"href",T="/"+n[3]),o(y,"class","w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-br-lg border-l border-stone-800 text-white"),o(m,"class","flex rounded-b-lg border-2 border-stone-800 bg-black"),o(l,"class","sm:max-w-sm max-w-[18rem] rounded-lg overflow-hidden shadow-lg")},m(u,E){M(u,l,E),g(l,r),g(r,e),g(e,t),g(l,a),g(l,m),g(m,p),g(p,A),g(m,v),g(m,y),g(y,B)},p(u,[E]){E&1&&!P(t.src,d=u[0])&&o(t,"src",d),E&2&&o(t,"alt",u[1]),E&8&&f!==(f="/"+u[3])&&o(e,"href",f),E&4&&i!==(i="/"+u[2])&&o(p,"href",i),E&8&&T!==(T="/"+u[3])&&o(y,"href",T)},i:R,o:R,d(u){u&&c(l)}}}function se(n,l,r){let{imageURL:e}=l,{imageAltText:t}=l,{downloadLink:d}=l,{detailsLink:f}=l;return n.$$set=a=>{"imageURL"in a&&r(0,e=a.imageURL),"imageAltText"in a&&r(1,t=a.imageAltText),"downloadLink"in a&&r(2,d=a.downloadLink),"detailsLink"in a&&r(3,f=a.detailsLink)},[e,t,d,f]}class ce extends J{constructor(l){super();K(this,l,se,ie,O,{imageURL:0,imageAltText:1,downloadLink:2,detailsLink:3})}}function X(n,l,r){const e=n.slice();return e[2]=l[r],e}function ue(n){let l,r,e=(n[2].type===n[0]||n[0]==="all")&&Y(n);return{c(){e&&e.c(),l=V()},l(t){e&&e.l(t),l=V()},m(t,d){e&&e.m(t,d),M(t,l,d),r=!0},p(t,d){t[2].type===t[0]||t[0]==="all"?e?(e.p(t,d),d&1&&q(e,1)):(e=Y(t),e.c(),q(e,1),e.m(l.parentNode,l)):e&&(z(),I(e,1,1,()=>{e=null}),W())},i(t){r||(q(e),r=!0)},o(t){I(e),r=!1},d(t){e&&e.d(t),t&&c(l)}}}function Y(n){let l,r;return l=new ce({props:{imageURL:n[2].image_name,imageAltText:n[2].endpoint,downloadLink:n[2].file_name,detailsLink:n[2].endpoint}}),{c(){le(l.$$.fragment)},l(e){re(l.$$.fragment,e)},m(e,t){oe(l,e,t),r=!0},p:R,i(e){r||(q(l.$$.fragment,e),r=!0)},o(e){I(l.$$.fragment,e),r=!1},d(e){ae(l,e)}}}function Z(n){let l,r,e=n[2].hidden!==!0&&n[2].hidden!=="true"&&ue(n);return{c(){e&&e.c(),l=V()},l(t){e&&e.l(t),l=V()},m(t,d){e&&e.m(t,d),M(t,l,d),r=!0},p(t,d){t[2].hidden!==!0&&t[2].hidden!=="true"&&e.p(t,d)},i(t){r||(q(e),r=!0)},o(t){I(e),r=!1},d(t){e&&e.d(t),t&&c(l)}}}function de(n){let l,r,e,t,d,f,a,m,p,A;return document.title=l=(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models"),{c(){r=D(),e=h("meta"),d=D(),f=h("meta"),m=D(),p=h("meta"),this.h()},l(i){r=C(i),e=b(i,"META",{content:!0,property:!0}),d=C(i),f=b(i,"META",{name:!0,content:!0}),m=C(i),p=b(i,"META",{content:!0,property:!0}),this.h()},h(){o(e,"content",t=(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models")),o(e,"property","og:title"),o(f,"name","description"),o(f,"content",a=`Download Bobbie's Custom ${(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models")} for the Quest version of Beat Saber.`),o(p,"content",A="Download Bobbie's Custom "+(n[0].charAt(0).toUpperCase()+n[0].slice(1)+"s").replace("Miscs","Misc Models")+" for the Quest version of Beat Saber."),o(p,"property","og:description")},m(i,v){M(i,r,v),M(i,e,v),M(i,d,v),M(i,f,v),M(i,m,v),M(i,p,v)},p(i,v){v&1&&l!==(l=(i[0].charAt(0).toUpperCase()+i[0].slice(1)+"s").replace("Miscs","Misc Models"))&&(document.title=l),v&1&&t!==(t=(i[0].charAt(0).toUpperCase()+i[0].slice(1)+"s").replace("Miscs","Misc Models"))&&o(e,"content",t),v&1&&a!==(a=`Download Bobbie's Custom ${(i[0].charAt(0).toUpperCase()+i[0].slice(1)+"s").replace("Miscs","Misc Models")} for the Quest version of Beat Saber.`)&&o(f,"content",a),v&1&&A!==(A="Download Bobbie's Custom "+(i[0].charAt(0).toUpperCase()+i[0].slice(1)+"s").replace("Miscs","Misc Models")+" for the Quest version of Beat Saber.")&&o(p,"content",A)},d(i){i&&c(r),i&&c(e),i&&c(d),i&&c(f),i&&c(m),i&&c(p)}}}function fe(n){let l,r,e,t,d,f;return{c(){l=D(),r=h("meta"),e=D(),t=h("meta"),d=D(),f=h("meta"),this.h()},l(a){l=C(a),r=b(a,"META",{name:!0,content:!0}),e=C(a),t=b(a,"META",{content:!0,property:!0}),d=C(a),f=b(a,"META",{content:!0,property:!0}),this.h()},h(){document.title="Bobbie's Quest Model Site",o(r,"name","description"),o(r,"content","Download Bobbie's quest model packs, notes, walls, and more!"),o(t,"content","Bobbie's Quest Model Site"),o(t,"property","og:title"),o(f,"content","Download Bobbie's quest model packs, notes, walls, and more!"),o(f,"property","og:description")},m(a,m){M(a,l,m),M(a,r,m),M(a,e,m),M(a,t,m),M(a,d,m),M(a,f,m)},p:R,d(a){a&&c(l),a&&c(r),a&&c(e),a&&c(t),a&&c(d),a&&c(f)}}}function me(n){let l,r,e,t,d,f,a,m,p,A,i,v,y,B,T=x,u=[];for(let s=0;s<T.length;s+=1)u[s]=Z(X(n,T,s));const E=s=>I(u[s],1,1,()=>{u[s]=null});function N(s,_){return s[0]=="all"?fe:de}let S=N(n),k=S(n);return{c(){l=h("div"),r=h("div"),e=h("script"),t=j(`try {\r
    \r
                window._mNHandle.queue.push(function (){\r
    \r
                    window._mNDetails.loadTag("953660264", "970x250", "953660264");\r
    \r
                });\r
    \r
            }\r
    \r
            catch (error) {}`),d=D(),f=h("div");for(let s=0;s<u.length;s+=1)u[s].c();a=D(),m=h("meta"),p=h("meta"),k.c(),A=h("meta"),i=h("meta"),v=h("meta"),y=h("meta"),this.h()},l(s){l=b(s,"DIV",{class:!0,align:!0});var _=L(l);r=b(_,"DIV",{id:!0});var w=L(r);e=b(w,"SCRIPT",{type:!0});var Q=L(e);t=H(Q,`try {\r
    \r
                window._mNHandle.queue.push(function (){\r
    \r
                    window._mNDetails.loadTag("953660264", "970x250", "953660264");\r
    \r
                });\r
    \r
            }\r
    \r
            catch (error) {}`),Q.forEach(c),w.forEach(c),_.forEach(c),d=C(s),f=b(s,"DIV",{class:!0});var G=L(f);for(let F=0;F<u.length;F+=1)u[F].l(G);G.forEach(c),a=C(s);const U=$('[data-svelte="svelte-sh6dh8"]',document.head);m=b(U,"META",{charset:!0}),p=b(U,"META",{name:!0,content:!0}),k.l(U),A=b(U,"META",{content:!0,property:!0}),i=b(U,"META",{content:!0,property:!0}),v=b(U,"META",{name:!0,content:!0}),y=b(U,"META",{name:!0,value:!0}),U.forEach(c),this.h()},h(){o(e,"type","text/javascript"),o(r,"id","953660264"),o(l,"class","mx-auto w-[90%] 2xl:w-[75%] pt-32 pb-2 sm:pt-16 sm:pb-16"),o(l,"align","center"),o(f,"class","grid mx-auto w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-[90%] 2xl:w-[75%] pb-0 gap-8 container"),o(m,"charset","utf-8"),o(p,"name","viewport"),o(p,"content","width=device-width,initial-scale=1"),o(A,"content","https://quest.bobbie.dev/bobbie.png"),o(A,"property","og:image"),o(i,"content","quest.bobbie.dev"),o(i,"property","og:site_name"),o(v,"name","theme-color"),o(v,"content","#202020"),o(y,"name","twitter:card"),o(y,"value","summary")},m(s,_){M(s,l,_),g(l,r),g(r,e),g(e,t),M(s,d,_),M(s,f,_);for(let w=0;w<u.length;w+=1)u[w].m(f,null);M(s,a,_),g(document.head,m),g(document.head,p),k.m(document.head,null),g(document.head,A),g(document.head,i),g(document.head,v),g(document.head,y),B=!0},p(s,[_]){if(_&1){T=x;let w;for(w=0;w<T.length;w+=1){const Q=X(s,T,w);u[w]?(u[w].p(Q,_),q(u[w],1)):(u[w]=Z(Q),u[w].c(),q(u[w],1),u[w].m(f,null))}for(z(),w=T.length;w<u.length;w+=1)E(w);W()}S===(S=N(s))&&k?k.p(s,_):(k.d(1),k=S(s),k&&(k.c(),k.m(A.parentNode,A)))},i(s){if(!B){for(let _=0;_<T.length;_+=1)q(u[_]);B=!0}},o(s){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)I(u[_]);B=!1},d(s){s&&c(l),s&&c(d),s&&c(f),ee(u,s),s&&c(a),c(m),c(p),k.d(s),c(A),c(i),c(v),c(y)}}}const x=ne;function pe(n,l,r){let{modelFiltering:e}=l;return te(async()=>{window.navigator.userAgent.toLowerCase().indexOf("bmbf_quest")>-1}),n.$$set=t=>{"modelFiltering"in t&&r(0,e=t.modelFiltering)},[e]}class be extends J{constructor(l){super();K(this,l,pe,me,O,{modelFiltering:0})}}export{be as M};