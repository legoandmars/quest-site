(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2AuE":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return u})),e.d(t,"default",(function(){return b}));var a=e("ODXe"),o=e("q1tI"),i=e.n(o);e("Tred"),i.a.createElement;var r=e("eng3"),l=e("cWnB"),d=e("2mvg"),s=e("pJDg"),c=(e("YFqc"),e("8Kt/")),m=e.n(c),g=i.a.createElement,u=!0;function b(n){var t,e,o=n.postData;o.extra_images?(t=o.extra_images[0],e=o.image_metadata[0]):(t=o.image_name,e="");var c=i.a.useState(t),u=Object(a.a)(c,2),b=u[0],p=u[1],h=i.a.useState(e),w=Object(a.a)(h,2),f=w[0],v=w[1];return g(i.a.Fragment,null,g(r.a,null),g("style",{type:"text/css"},"\n                :root {\n                --jumbotron-padding-y: 3rem;\n                }\n                .jumbotron {\n                padding-top: var(--jumbotron-padding-y);\n                padding-bottom: var(--jumbotron-padding-y);\n                margin-bottom: 0;\n                background-color: #fff;\n                }\n                @media (min-width: 768px) {\n                .jumbotron {\n                    padding-top: calc(var(--jumbotron-padding-y) * 2);\n                    padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n                }\n                }\n    \n                .jumbotron p:last-child {\n                margin-bottom: 0;\n                }\n    \n                .jumbotron-heading {\n                font-weight: 300;\n                }\n    \n                .jumbotron .container {\n                    /*max-width: 40rem;*/\n                }\n                .container{\n                    position: absolute;\n                    max-width:100%;\n                    max-height:100%;\n                    width:60%;\n                    left:20%;\n                    height:50%; \n                }\n                footer {\n                    padding-top: 3rem;\n                    padding-bottom: 3rem;\n                }\n    \n                footer p {\n                margin-bottom: .25rem;\n                }\n    \n                .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n    \n                .main {\n                    background-color: #202020;\n                }\n                body{\n                    background-color: #202020;\n                }\n                .card-title{\n                    font-size:2rem;\n                    text-align: center;\n                    margin-bottom: .2rem;\n                }\n                .btn{\n                    font-size: 1.5rem;\n                }\n                .card{\n                    background-color: #000000;\n                }\n                .btn{\n                    background-color: #000000;\n                    border-color: #4d4d4d;\n                    border-radius: 10px;       \n                    border: 0.15rem solid #4d4d4d;            \n                }\n                .mainimage{\n                    height:55%;\n                    width:55%;\n                    margin-left:0px;\n                    background-color: #303030;\n                    float:left;\n                    border-radius: 0.5vw;\n                }\n                .imagetext{\n                    width:45%;\n                    height:100%;\n                    float:right;\n                }\n                .p{\n                    text-align: center;\n                }\n                .titletext{\n                    font-size:2.25rem;\n                    font-size:1.9vw;\n                    text-align: center;\n                    font-weight:bold;\n                    background-color: #000000;\n                    width: 85%;\n                    margin: auto;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                }\n                .descriptiontext{\n                    font-size:1.5rem;\n                    font-size:1.25vw;\n                    text-align: center;\n                    margin-top: 0.5vw;\n                    margin-bottom: 0.5vw;\n                    margin-left: 0.75vw;\n                    margin-right: 0.75vw;\n                }\n                .description-holder{\n                    margin: auto;\n                    margin-top: 0.25vw;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    position:relative;\n                    width: 85%;\n                    height:100%;\n                    background-color: #000000;\n                    z-index:1;\n                }\n                .imagesubcontainer{\n                    margin-top:2.5vw;\n                    display:inline-block;\n                    width:100%;\n                    position:relative;\n                }\n                .downloadbuttons{\n                    position:absolute;\n                    width: 37.5%;\n                    bottom:0;                          \n                    right:0;   \n                    left: 58.75%;\n                    height:3vw;\n                    z-index:2;\n                    top: calc(100% - 3vw);\n                }\n                .arrow-button{\n                    position:absolute;\n                    background-color: #000000;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    width:3vw;\n                    height:3vw;\n                    top: calc(90% + 0.2vw);\n                    left: calc(55% - 3.0vw);\n                    outline: none !important;\n                    padding:0;\n                    margin:0;\n                }\n                .left-arrow-button{\n                    position:absolute;\n                    background-color: #000000;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    width:3vw;\n                    height:3vw;\n                    top: calc(90% + 0.2vw);\n                    left: 0;\n                    outline: none !important;\n                    padding:0;\n                    margin:0;\n                }\n                .arrow{\n                    position:absolute;\n                    left:0.375vw;\n                    top:0.375vw;\n                    width:2.25vw;\n                    height:2.25vw;\n                }\n                .arrowleft{\n                    position:absolute;\n                    right:0.375vw;\n                    top:0.375vw;\n                    width:2.25vw;\n                    height:2.25vw;\n                }\n                .imageheader{\n                    position: absolute;\n                    font-size:3rem;\n                    font-size: 2vw;\n                    text-align: center;\n                    font-weight:bold;\n                    width: 55%;\n                    margin: auto;\n                }\n                .imageheaderstroke{\n                    position: absolute;\n                    font-size:3rem;\n                    font-size: 2vw;\n                    text-align: center;\n                    font-weight:bold;\n                    width: 55%;\n                    margin: auto;\n                    -webkit-text-stroke-width: .4vw;\n                    -webkit-text-stroke-color: black;                  \n                }\n                .credit-holder{\n                    margin: auto;\n                    margin-top: 57.5%;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    position:absolute;\n                    width: 96.75%;\n                    background-color: #000000;\n                    z-index:0;\n                    margin-bottom: 2%;\n                }\n                .creditheader{\n                    font-size:2.25vw;\n                    text-align: center;\n                    margin: auto;\n                }\n                .credittext{\n                    font-size:1.5rem;\n                    font-size:1.25vw;\n                    text-align: center;\n                    margin: auto;\n                }\n                .credittext-bottom{\n                    font-size:1.5rem;\n                    font-size:1.25vw;\n                    text-align: center;\n                    margin: auto;\n                    margin-bottom:0.7%;\n                }\n                .graylink{\n                    color: gray;\n                    text-decoration: underline;\n                }\n                .graylink:hover {\n                    color: #474747;\n                }                  \n\n                ::-webkit-scrollbar {\n                    width: 8px;\n                    background-color: transparent;\n                    -webkit-border-radius: 100px;\n                }\n                ::-webkit-scrollbar:hover {\n                    background-color: rgba(0, 0, 0, 0.09);\n                }\n                ::-webkit-scrollbar-thumb:vertical {\n                    background: rgba(0,0,0,0.5);\n                    -webkit-border-radius: 100px;\n                }\n                ::-webkit-scrollbar-thumb:vertical:active {\n                    background: rgba(0,0,0,0.61);\n                    -webkit-border-radius: 100px;\n                }\n                .btn{\n                    font-size:1.25vw;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    position:absolute!important;\n                    max-height:100%;\n                    height:100%;\n                    max-width:100%;\n                    width:100%;\n                    top:0;\n                    padding:0;\n                    padding-top: 0.4vw;\n                    /*height:3vw!important;*/\n                }\n                .second{\n                    width:50%;\n                    left:50%;\n                }\n                .first{\n                    width:50%;\n                }\n                @media (max-aspect-ratio: 1/1) {\n                    .container {\n                        width: 95%;\n                        left: 2.5%;\n                    }\n                    .descriptiontext{\n                        font-size:2vw;\n                    }    \n                }     \n                .donationpopup{\n                    position: fixed;\n                    width:15%;\n                    left:85%;\n                    height:20%;\n                    top:80%;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    background-color: #000000;\n                }\n                .donationtext{\n                    font-size:1.5rem;\n                    font-size:1.0vw;\n                    text-align: center;\n                    margin-top: 0.5vw;\n                    margin-bottom: 0.5vw;\n                    margin-left: 0.75vw;\n                    margin-right: 0.75vw;\n                }        \n                .donationbuttons{\n                    left:5%;\n                    width:45%;\n                    height:25%;\n                }\n                .button1{\n                    font-size:1.2vw;\n                    padding:0;\n                    padding-top: 0.2vw;\n                    margin:0;\n                }\n                .button2{\n                    font-size:1.2vw;\n                    padding:0;\n                    padding-top: 0vw;\n                    margin:0;\n                    left:100%;\n                }\n        "),g(m.a,null,g("title",null,o.model.name),g("meta",{content:"quest.bobbie.dev",property:"og:site_name"}),g("meta",{content:o.model.name,property:"og:title"}),g("meta",{content:o.model.description.length>150?o.model.description.substring(0,146)+"...":o.model.description,property:"og:description"}),g("meta",{content:"#202020",name:"theme-color"}),g("meta",{content:"https://quest.bobbie.dev/"+o.image_name,property:"og:image"}),function(){if("Solar System Pack"==o.model.name)return g(i.a.Fragment,null,g("meta",{"http-equiv":"refresh",content:"0; url = https://bsmodel.city/SolarSystemPack"}))}(),function(n){if(n){var t=[];return n.forEach((function(n){t.push(g(i.a.Fragment,null,g("a",{rel:"preload",href:n,as:"image"})))})),t}}(o.extra_images)),g("div",{class:"main"},function(){if("pack"==o.type)return g(i.a.Fragment,null,g("div",{class:"donationpopup",id:"donationpopup"},g("p",{class:"text-light donationtext"},"Have a few extra bucks and want to support me in making awesome free model packs? Donate to my ko-fi!"),g(s.a,{className:"d-flex donationbuttons"},g(l.a,{type:"button",variant:"dark",className:"button1",href:"https://ko-fi.com/bobbievr",download:!0},"Donate"),g(l.a,{type:"button",variant:"dark",className:"button2",onClick:function(){document.getElementById("donationpopup").style.visibility="hidden"}},"Close"))))}(),g("div",{class:"container"},g("div",{class:"imagesubcontainer"},g("div",null,g(d.a,{class:"mainimage float-left",src:b,fluid:!0}),g("p",{class:"text-light imageheaderstroke"},f),g("p",{class:"text-light imageheader"},f),function(){if(o.extra_images)return g(i.a.Fragment,null,g(l.a,{variant:"dark",class:"left-arrow-button",size:"lg",onClick:function(){0==o.extra_images.indexOf(b)?(p(o.extra_images[o.extra_images.length-1]),v(o.image_metadata[o.extra_images.length-1])):(p(o.extra_images[o.extra_images.indexOf(b)-1]),v(o.image_metadata[o.extra_images.indexOf(b)-1]))}},g(d.a,{class:"arrowleft",src:"arrow-left.png"})),g(l.a,{variant:"dark",class:"arrow-button",size:"lg",onClick:function(){o.extra_images.indexOf(b)+1==o.extra_images.length?(p(o.extra_images[0]),v(o.image_metadata[0])):(p(o.extra_images[o.extra_images.indexOf(b)+1]),v(o.image_metadata[o.extra_images.indexOf(b)+1]))}},g(d.a,{class:"arrow",src:"arrow.png"})))}(),g(s.a,{className:"d-flex downloadbuttons"},o.second_button?g(i.a.Fragment,null,g(l.a,{type:"button",className:"first",variant:"dark",href:"./".concat(o.file_name),download:!0},"Download"),g(l.a,{type:"button",className:"second",variant:"dark",href:o.second_button.link},o.second_button.text)):g(i.a.Fragment,null,g(l.a,{type:"button",variant:"dark",href:"./".concat(o.file_name),download:!0},"Download")))),g("div",{class:"imagetext"},g("p",{class:"text-light titletext"},o.model.name),g("div",{class:"description-holder"},g("p",{class:"text-light descriptiontext"},o.model.description))),function(){if(o.fallguyscredits)return g(i.a.Fragment,null,g("div",{class:"credit-holder"},g("h2",{class:"text-light creditheader"},"Credits"),g("p",{class:"text-light credittext"},"Fall Guy Model: ",g("a",{link:!0,class:"graylink",href:"https://sketchfab.com/3d-models/unofficial-fall-guy-598b22b710b44c22a962fecc9dd92312"},"Sketchfab"),g("br",null)),g("p",{class:"text-light credittext"},"Sabers: ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/Hooi21"},"Hooi")),g("p",{class:"text-light credittext"},"Maps: ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/lethrial"},"Lethrial"),", ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/One_narwhal"},"That_Narwhal"),", ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/bytrius"},"Bytrius"),", ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/ConnnnorJC"},"ConnorJC"),", ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/Lonewolvez1"},"Lonewolvez"),", ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/The_Caeden117"},"Caeden117"),", ",g("a",{link:!0,class:"graylink",href:"https://twitter.com/nomuffn"},"nomuffn")),g("p",{class:"text-light credittext"},"Fall Guys Original Soundtrack created by Jukio Kallio and Daniel Hagstr\xf6m"),g("p",{class:"text-light credittext"},"SUPPORT & FOLLOW THE ORIGINAL ARTISTS: ",g("a",{link:!0,class:"graylink",href:"https://jukiokallio.bandcamp.com/album/fall-guys-original-soundtrack"},"Bandcamp")," / ",g("a",{link:!0,class:"graylink",href:"https://open.spotify.com/album/2XbgThX8BaW5Euimr3JAPT?si=OjPnw2qSSby1I2vGZJtOsg"},"Spotify")),g("p",{class:"text-light credittext-bottom"},g("a",{link:!0,class:"graylink",href:"https://jukiokallio.com"},"More about Jukio Kallio")," / ",g("a",{link:!0,class:"graylink",href:"https://danielhagstrom.com"},"More about Daniel Hagstr\xf6m"))))}()))))}},"8qr+":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return e("2AuE")}])},Tred:function(n,t,e){n.exports={container:"layout_container__2t4v2"}}},[["8qr+",0,2,1,3]]]);