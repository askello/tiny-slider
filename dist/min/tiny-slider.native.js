var tns=function(){"use strict";function t(t){function f(){return"gallery"===xt||Kt||"page"===t.slideBy?wt:t.slideBy}function h(){if(o(Mt,{"data-tns-role":"wrapper"}),o(Tt,{"data-tns-role":"content-wrapper"}),"vertical"===Et?o(Tt,{"data-tns-hidden":"y"}):o(Mt,{"data-tns-hidden":"x"}),"carousel"===xt){var t=Dt&&Pt?I():Pt?Pt+kt:0;Tt.style.cssText="horizontal"===Et?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Pt+"px; height: "+H()+"px;"}}function p(){bt=Cn(),wt=Ln();var t=Dt&&bt%_t!==0?1:Nt;yt=en-wt-t,"horizontal"!==Et||Dt||(_t=Mn()),mt=Tn(),Jt=f()}function E(){""===Lt.id?Lt.id=$t=n():$t=Lt.id;var t="";if(Et&&(t+=Et+" "),Vt&&(t+="autoheight"),o(Lt,{"data-tns-role":"content","data-tns-mode":xt,"data-tns-features":t}),"carousel"===xt)if("horizontal"===Et){var e="width: "+(_t+1)*en+"px; ",a=-ln*_t,r=v?v+": translate3d("+a+"px, 0px, 0px)":"left: "+a+"px";Lt.style.cssText+=e+r}else{var i=-fn[ln];Lt.style.cssText+=v?v+": translate3d(0px, "+i+"px, 0px)":"top: "+i+"px"}}function w(){navigator.msMaxTouchPoints&&(Mt.classList.add("ms-touch"),Mt.addEventListener("scroll",st,!1))}function L(){for(var t=0;t<At;t++){var n=Ct[t];n.id=$t+"-item"+t,"gallery"===xt&&Ut.normal&&n.classList.add(Ut.normal),"vertical"!==Et&&o(n,{style:"width: "+_t+"px"}),o(n,{"aria-hidden":"true"});var e="carousel"===xt&&"vertical"===Et?"bottom":"right";n.innerHTML='<div data-tns-role="item-wrapper" style="margin-'+e+": "+kt+'px">'+n.innerHTML+"</div>"}if(Xt||Pt){for(var a=document.createDocumentFragment(),r=document.createDocumentFragment(),i=nn;i--;){var l=i%At,d=Ct[l].cloneNode(!0);if(s(d,"id"),r.insertBefore(d,r.firstChild),"carousel"===xt){var c=Ct[At-1-l].cloneNode(!0);s(c,"id"),a.appendChild(c)}}Lt.insertBefore(a,Lt.firstChild),Lt.appendChild(r),Ct=Lt.children}}function M(){St&&(t.controlsContainer||(gn.append(Mt,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+$t+'" type="button">'+zt[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+$t+'" type="button">'+zt[1]+"</button></div>"),It=Mt.querySelector('[data-tns-role="controls"]')),vt=It.querySelector('[data-controls="prev"]'),ht=It.querySelector('[data-controls="next"]'),r(It,"tabindex")||(o(It,{"aria-label":"Carousel Navigation"}),o(It.children,{"aria-controls":$t,tabindex:"-1"})))}function T(){if(Ot){if(!t.navContainer){for(var n="",e=0;e<At;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+$t+"-item"+e+'" type="button"></button>';qt&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+jt[0]+"</button>"),n='<div data-tns-role="nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(Mt,n),Wt=Mt.querySelector('[data-tns-role="nav"]')}if(pt=Wt.querySelectorAll("[data-slide]"),!r(Wt,"aria-label")){o(Wt,{"aria-label":"Carousel Pagination"});for(var a=0;a<At;a++)o(pt[a],{tabindex:"-1","aria-selected":"false","aria-controls":$t+"-item"+a})}for(var i=mt;i<At;i++)o(pt[i],{hidden:""});an=mt}}function C(){qt&&(Wt||(gn.append(Mt,'<div data-tns-role="nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+jt[0]+"</button></div>"),Wt=Mt.querySelector('[data-tns-role="nav"]')),hn=Wt.querySelector("[data-action]"),_())}function A(){for(var t=ln;t<ln+wt;t++)o(Ct[t],{"aria-hidden":"false"}),"gallery"===xt&&(Ct[t].style.marginLeft=_t*(t-ln)+"px",Ct[t].classList.remove(Ut.normal),Ct[t].classList.add(Ut.in));St&&(o(ht,{tabindex:"0"}),(ln===cn&&!Xt||Ft)&&(vt.disabled=!0)),Ot&&o(pt[0],{tabindex:"0","aria-selected":"true"})}function k(){if("carousel"===xt&&(y&&Lt.addEventListener(y,Y,!1),Zt&&(Lt.addEventListener("touchstart",lt,!1),Lt.addEventListener("touchmove",dt,!1),Lt.addEventListener("touchend",ct,!1),Lt.addEventListener("touchcancel",ct,!1))),Ot)for(var t=0;t<At;t++)pt[t].addEventListener("click",$,!1),pt[t].addEventListener("keydown",ot,!1);if(St&&(vt.addEventListener("click",Q,!1),ht.addEventListener("click",Z,!1),vt.addEventListener("keydown",it,!1),ht.addEventListener("keydown",it,!1)),qt&&(hn.addEventListener("click",nt,!1),St&&(vt.addEventListener("click",et,!1),ht.addEventListener("click",et,!1)),Ot))for(var n=0;n<At;n++)pt[n].addEventListener("click",et,!1);Ht&&document.addEventListener("keydown",at,!1),window.addEventListener("resize",ut,!1),window.addEventListener("scroll",ft,!1)}function P(){if(Qt&&gn.isInViewport(Lt)){for(var t=[],n=ln-1;n<ln+wt+1;n++){for(var e=Ct[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var r=t.length;r--;){var o=t[r];o.classList.contains("loaded")||(o.src=i(o,"data-src"),o.classList.add("loaded"))}}}function N(){if(Vt){for(var t=[],n=ln;n<ln+wt;n++)for(var e=Ct[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?O():D(t)}}function D(t){for(var n=t.length;n--;)u(t[n])&&t.splice(n,1);0===t.length?O():setTimeout(function(){D(t)},16)}function S(){gn.wrap(Lt,Tt),gn.wrap(Tt,Mt),p(),L(),"vertical"===Et&&W(),h(),E(),w(),M(),T(),C(),A(),k(),z(),P(),N()}function z(){At<=wt?(Ot=St=qt=Xt=Ft=!1,ln=nn,Wt&&d(Wt),It&&d(It),hn&&d(hn)):(Ot=t.nav,St=t.controls,qt=t.autoplay,Xt=!t.rewind&&t.loop,Ft=t.rewind,Ot&&c(Wt),St&&c(It),qt&&c(hn))}function I(){return(bt%Dt+kt)/2}function O(){for(var t,n=[],e=ln;e<ln+wt;e++)n.push(Ct[e].offsetHeight);t=Math.max.apply(null,n),Lt.style.height!==t&&(m&&F(1),Lt.style.height=t+"px")}function W(){fn=[0];for(var t,n=Ct[0].getBoundingClientRect().top,e=1;e<en;e++)t=Ct[e].getBoundingClientRect().top,fn.push(t-n)}function H(){return fn[ln+wt]-fn[ln]}function B(){Mt.style.msScrollSnapPointsX="snapInterval(0%, "+_t+")"}function q(){var t,n,e,a;ln!==dn&&(ln>dn?(t=dn,n=Math.min(dn+wt,ln),e=Math.max(dn+wt,ln),a=ln+wt):(t=Math.max(ln+wt,dn),n=dn+wt,e=ln,a=Math.min(ln+wt,dn))),Jt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var r=t;r<n;r++)o(Ct[r],{"aria-hidden":"true"});for(var i=e;i<a;i++)o(Ct[i],{"aria-hidden":"false"})}function G(){if(mt!==an)if(mt>an)for(var t=an;t<mt;t++)s(pt[t],"hidden");else for(var n=mt;n<an;n++)o(pt[n],{hidden:""});an=mt}function R(){if(Ot){if(rn===-1){for(var n=ln;n<nn;)n+=At;n=(n-nn)%At,t.navContainer?on=n:(on=Math.floor(n/wt),Xt||At%wt===0||ln!==yt||(on+=1))}else on=rn,rn=-1;on!==sn&&(o(pt[sn],{tabindex:"-1","aria-selected":"false"}),o(pt[on],{tabindex:"0","aria-selected":"true"}),sn=on)}}function j(){if(St&&!Xt)if(ln===cn||!Ft&&ln===yt){var t=ln===cn?vt:ht,n=ln===cn?ht:vt;rt(t,n),t.disabled=!0,o(t,{tabindex:"-1"}),n.disabled=!1,o(n,{tabindex:"0"})}else vt.disabled=!1,ht.disabled=!1}function F(t,n){var e=Bt*t/1e3+"s";n=n||Lt,n.style[m]=e,"gallery"===xt&&(n.style[g]=e),"vertical"===Et&&(Tt.style[m]=e)}function U(t,n){m&&F(t),kn(n)}function X(){var t=Jt+Nt,n=en-wt-Jt-1;if(ln<t||ln>n){K();var e=ln-At,a=ln+At;ln=e>=t&&e<=n?e:a,U(0)}}function V(t){o(Lt,{"aria-busy":"true"}),U(t),y||Y()}function Y(t){if("gallery"===xt&&tn.length>0)for(var n=0;n<wt;n++){var e=tn[n];m&&F(0,e),e.classList.remove(Ut.out),e.classList.add(Ut.normal),e.style.marginLeft=""}(!y||t&&"height"!==t.propertyName)&&(Xt&&"carousel"===xt&&X(),q(),R(),j(),P(),N(),s(Lt,"aria-busy"),K())}function K(){dn=ln}function J(t){if("true"!==i(Lt,"aria-busy")){var n=ln,e=ln+t*Jt,a=Math.abs(t*Jt);ln=Xt?e:Math.max(cn,Math.min(e,yt)),ln!==n&&V(a)}}function Q(){J(-1)}function Z(){J(Ft&&ln===yt?-(yt-cn)/Jt:1)}function $(n){if("true"!==i(Lt,"aria-busy")){for(var e,a,r=n.target||n.srcElement;gn.indexOf(pt,r)===-1;)r=r.parentNode;e=rn=Number(i(r,"data-slide")),ln=t.navContainer?e+nn:e*wt+nn,ln=Xt?ln:Math.min(ln,yt),a=Math.abs(ln-dn),V(a)}}function _(){vn=setInterval(function(){J(Rt)},Gt),hn.setAttribute("data-action","stop"),hn.innerHTML="<span hidden>Stop Animation</span>"+jt[1],pn=!0}function tt(){clearInterval(vn),hn.setAttribute("data-action","start"),hn.innerHTML="<span hidden>Stop Animation</span>"+jt[0],pn=!1}function nt(){pn?tt():_()}function et(){pn&&tt()}function at(t){switch(t=t||window.event,t.keyCode){case x.LEFT:Q();break;case x.RIGHT:Z()}}function rt(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function it(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case x.LEFT:case x.UP:case x.HOME:case x.PAGEUP:e!==vt&&vt.disabled!==!0&&rt(e,vt);break;case x.RIGHT:case x.DOWN:case x.END:case x.PAGEDOWN:e!==ht&&ht.disabled!==!0&&rt(e,ht);break;case x.ENTER:case x.SPACE:e===ht?Z():Q()}}function ot(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=i(e,"data-slide");switch(n){case x.LEFT:case x.PAGEUP:a>0&&rt(e,e.previousElementSibling);break;case x.UP:case x.HOME:0!==a&&rt(e,pt[0]);break;case x.RIGHT:case x.PAGEDOWN:a<mt-1&&rt(e,e.nextElementSibling);break;case x.DOWN:case x.END:a<mt-1&&rt(e,pt[mt-1]);break;case x.ENTER:case x.SPACE:$(t)}}function st(){U(0,Lt.scrollLeft()),K()}function lt(t){var n=t.changedTouches[0];En=parseInt(n.clientX),wn=parseInt(n.clientY);var e="horizontal"===Et?[12,-13]:[17,-8];mn=Number(Lt.style[v].slice(e[0],e[1]))}function dt(t){var n=t.changedTouches[0];if(yn=parseInt(n.clientX)-En,bn=parseInt(n.clientY)-wn,a(e(bn,yn),15)===Et){xn=!0,t.preventDefault();var r="horizontal"===Et?yn:bn;U(0,mn+r)}}function ct(t){var n=t.changedTouches[0];if(yn=parseInt(n.clientX)-En,bn=parseInt(n.clientY)-wn,xn){xn=!1,t.preventDefault();var e;if("horizontal"===Et)e=-(mn+yn)/_t,e=yn>0?Math.floor(e):Math.ceil(e);else{var a=-(mn+bn);if(a<=0)e=cn;else if(a>=fn[fn.length-1])e=yt;else{var r=0;do r++,e=bn<0?r+1:r;while(r<en&&a>=Math.round(fn[r+1]))}}ln=Math.max(cn,Math.min(e,yt));var i="horizontal"===Et?-ln*_t:-fn[ln];!Dt||Xt||Pt||ln!==yt||(i=-en*_t+bt+kt),U(1,i),y||Y()}}function ut(){clearTimeout(gt),gt=setTimeout(function(){var t=Cn();bt!==t&&(bt=t,p(),"vertical"===Et&&W(),z(),Dt&&!Pt||An(),G(),navigator.msMaxTouchPoints&&B(),"carousel"===xt&&(U(0),Y(),K()))},100)}function ft(){un||window.requestAnimationFrame(function(){P(),un=!1}),un=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","pause"],animate:{in:"tns-fadeIn",out:"tns-fadeOut",normal:"tns-normal"},loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var vt,ht,pt,mt,yt,gt,bt,xt=t.mode,Et=t.axis,wt=t.items,Lt=t.container,Mt=document.createElement("div"),Tt=document.createElement("div"),Ct=Lt.children,At=Ct.length,kt=t.gutter,Pt="vertical"!==xt&&t.edgePadding,Nt=Pt?1:0,Dt=t.fixedWidth,St=t.controls,zt=t.controlsText,It=!!t.controlsContainer&&t.controlsContainer,Ot=t.nav,Wt=!!t.navContainer&&t.navContainer,Ht=t.arrowKeys,Bt=m?t.speed:0,qt=t.autoplay,Gt=t.autoplayTimeout,Rt="forward"===t.autoplayDirection?1:-1,jt=t.autoplayText,Ft=t.rewind,Ut=t.animate,Xt=!t.rewind&&t.loop,Vt="gallery"===xt||t.autoHeight,Yt=!Dt&&t.responsive,Kt=t.slideByPage,Jt=f(),Qt=t.lazyload,Zt=t.touch,$t=Lt.id||n(),_t=Dt||0,tn=[],nn="gallery"===xt?2*At:Xt?Math.ceil(1.5*At):Pt?1:0,en="gallery"===xt?At+nn:At+2*nn,an=At,rn=-1,on=0,sn=0,ln="gallery"===xt?0:nn,dn=ln,cn=Nt,un=!1;if("carousel"===xt&&"vertical"===Et)var fn;if(qt)var vn,hn,pn=!1;if(Zt)var mn,yn,bn,xn,En=0,wn=0;Ut.in=Ut.in||"tns-fadeIn",Ut.out=Ut.out||"tns-fadeOut",Ut.normal=Ut.normal||"tns-normal";var Ln=function(){return Dt?function(){return Math.max(1,Math.min(At,Math.floor(bt/Dt)))}:function(){var n=t.items,e="object"==typeof Yt&&Object.keys(Yt);if(e)for(var a=0;a<e.length;a++)bt>=e[a]&&(n=Yt[e[a]]);return Math.max(1,Math.min(At,n))}}(),Mn=function(){return navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((bt+kt)/wt)}:function(){return(bt+kt)/wt}}(),Tn=function(){return t.navContainer?function(){return At}:function(){return Math.ceil(At/wt)}}(),Cn=function(){return Dt||!Pt||"vertical"===Et?function(){return Mt.clientWidth}:function(){return Mt.clientWidth-2*(Pt+kt)}}();S();var An=function(){return"horizontal"!==Et?function(){Tt.style.height=H()+"px"}:Dt?Pt?function(){Tt.style.cssText="margin: 0px "+I()+"px"}:void 0:function(){Lt.style.width=(_t+1)*en+"px";for(var t=en;t--;)Ct[t].style.width=_t+"px","gallery"===xt&&t>ln&&t<ln+wt&&(Ct[t].style.marginLeft=_t*(t-ln)+"px")}}(),kn=function(){return"carousel"===xt?function(t){var n=t?t:"horizontal"===Et?-_t*ln:-fn[ln],e="translate3d(",a={x:[v,e,n,"px, 0px, 0px)"],y:[v,e+"0px, ",n,"px, 0px)"],l:["left","",n,"px"],t:["top","",n,"px"]},r="horizontal"===Et?v?"x":"l":v?"y":"t";Lt.style[a[r][0]]=a[r][1]+a[r][2]+a[r][3],"vertical"===Et&&(Tt.style.height=H()+"px")}:function(){if(ln>yt)for(;ln>=At;)ln-=At;else if(ln<cn)for(;ln<=yt-At;)ln+=At;tn=[],Ct[dn].removeEventListener(y,Y,!1),Ct[dn].removeEventListener(b,Y,!1),Ct[ln].addEventListener(y,Y,!1),Ct[ln].addEventListener(b,Y,!1);for(var t=dn,n=dn+wt;t<n;t++){var e=t<en?t:t-At,a=Ct[e];m&&F(1,a),a.classList.remove(Ut.in),a.classList.add(Ut.out),tn.push(a)}for(var r=0,i=ln,o=ln+wt;i<o;i++){var s=i<en?i:i-At,l=Ct[s];m&&F(1,l),l.classList.remove(Ut.normal),l.classList.add(Ut.in),r>0&&(l.style.marginLeft=r*_t+"px"),r++}}}();return{destory:function(){if(gn.unwrap(Mt),gn.unwrap(Tt),Mt=Tt=null,s(Lt,["id","style","data-tns-role","data-tns-features"]),Xt)for(var n=nn;n--;)Ct[0].remove(),Ct[Ct.length-1].remove();s(Ct,["id","style","aria-hidden"]),$t=At=null,St&&(t.controlsContainer?(s(It,["aria-label"]),s(It.children,["aria-controls","tabindex"]),l(It)):(It.remove(),It=vt=ht=null)),Ot&&(t.navContainer?(s(Wt,["aria-label"]),s(pt,["aria-selected","aria-controls","tabindex"]),l(Wt)):(Wt.remove(),Wt=null),pt=null),qt&&(t.navContainer||null===Wt?l(hn):(Wt.remove(),Wt=null)),l(Lt),Ht&&document.removeEventListener("keydown",at,!1),window.removeEventListener("resize",ut,!1),window.removeEventListener("scroll",ft,!1)},hasAttr:r,getAttr:i,setAttrs:o,removeAttrs:s,removeEvents:l,getSlideId:n,toDegree:e,getPanDirection:a,hideElement:d,showElement:c,mode:xt,axis:Et,gutter:kt,edgePadding:Pt,fixedWidth:Dt,controls:St,nav:Ot,rewind:Ft,loop:Xt,autoHeight:Vt,slideBy:Jt,lazyload:Qt,touch:Zt,speed:Bt,items:Ln(),cloneCount:nn,navCountVisible:function(){return mt},index:function(){return ln},slideWidth:function(){return _t},container:Lt,slideItems:Ct,slideCount:At,controlsContainer:function(){return It},prevButton:function(){return vt},nextButton:function(){return ht},navContainer:function(){return Wt},navItems:function(){return pt}}}function n(){return window.tnsNumber=window.tnsNumber?window.tnsNumber++:1,"tns"+window.tnsNumber}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function r(t,n){return t.hasAttribute(n)}function i(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function s(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var r=e;r--;)t[a].removeAttribute(n[r])}function l(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function d(t){r(t,"hidden")||o(t,{hidden:""})}function c(t){r(t,"hidden")&&s(t,"hidden")}function u(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n]];return!1}var v=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),h={transitionDuration:"transitionend",WebkitTransitionDuration:"oTransitionEnd",MozTransitionDuration:"transitionend",OTransitionDuration:"webkitTransitionEnd"},p={animationDuration:"animationend",WebkitAnimationDuration:"oAnimationEnd",MozAnimationDuration:"animationend",OAnimationDuration:"webkitAnimationEnd"},m=f(h)[0],y=f(h)[1],g=f(p)[0],b=f(p)[1],x={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
