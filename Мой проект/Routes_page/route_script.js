/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webplossless_webp_lossless-setclasses !*/
 !function(n,e,s){function o(n,e){return typeof n===e}function t(){var n,e,s,t,i,a,f;for(var u in r)if(r.hasOwnProperty(u)){if(n=[],e=r[u],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(t=o(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)a=n[i],f=a.split("."),1===f.length?Modernizr[f[0]]=t:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=t),l.push((t?"":"no-")+f.join("-"))}}function i(n){var e=c.className,s=Modernizr._config.classPrefix||"";if(d&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),d?c.className.baseVal=e:c.className=e)}function a(n,e){if("object"==typeof n)for(var s in n)u(n,s)&&a(s,n[s]);else{n=n.toLowerCase();var o=n.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;e="function"==typeof e?e():e,1==o.length?Modernizr[o[0]]=e:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=e),i([(e&&0!=e?"":"no-")+o.join("-")]),Modernizr._trigger(n,e)}return Modernizr}var l=[],r=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){r.push({name:n,fn:e,options:s})},addAsyncTest:function(n){r.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var u,c=e.documentElement,d="svg"===c.nodeName.toLowerCase();!function(){var n={}.hasOwnProperty;u=o(n,"undefined")||o(n.call,"undefined")?function(n,e){return e in n&&o(n.constructor.prototype[e],"undefined")}:function(e,s){return n.call(e,s)}}(),f._l={},f.on=function(n,e){this._l[n]||(this._l[n]=[]),this._l[n].push(e),Modernizr.hasOwnProperty(n)&&setTimeout(function(){Modernizr._trigger(n,Modernizr[n])},0)},f._trigger=function(n,e){if(this._l[n]){var s=this._l[n];setTimeout(function(){var n,o;for(n=0;n<s.length;n++)(o=s[n])(e)},0),delete this._l[n]}},Modernizr._q.push(function(){f.addTest=a}),Modernizr.addAsyncTest(function(){var n=new Image;n.onerror=function(){a("webplossless",!1,{aliases:["webp-lossless"]})},n.onload=function(){a("webplossless",1==n.width,{aliases:["webp-lossless"]})},n.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),t(),i(l),delete f.addTest,delete f.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();n.Modernizr=Modernizr}(window,document);
let details = document.querySelectorAll('.details'),
arrowDown = document.querySelectorAll('.arrow_down'),
routeDetails = document.querySelectorAll('.route_details'),
routeDetails_Text = document.querySelectorAll('.details_text'),

anchorBtnUp = document.getElementsByClassName('anchor_button')[0],
anchorBtnDown = document.getElementsByClassName('anchor_button')[1];

anchorBtnUp.addEventListener('click', scrollBtnUpClick)
anchorBtnDown.addEventListener('click', scrollBtnDownClick)
window.addEventListener('scroll', scrollDown)
window.addEventListener('scroll', scrollUp)
function scrollUp(){
    //для кнопки вверх
    if((0.5 * pageYOffset)<document.documentElement.clientHeight){
        anchorBtnUp.style.display= 'none';
    }
    else{
        anchorBtnUp.style.display= 'block';
    }
}

function scrollDown(){
    //для кнопки вниз
    if((0.5 * pageYOffset)>document.documentElement.clientHeight){
        anchorBtnDown.style.display= 'none';
    }
    else{
        anchorBtnDown.style.display= 'block';
    }
    
}
function scrollBtnUpClick(){
    window.scrollTo(0,0);
}
function scrollBtnDownClick(){
    window.scrollTo(0, Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight)
      );
}


//при клике на Подробнее открывается параграф
function Details_click(a){
    if (routeDetails[a].style.display != 'block'){
        //если параграф скрыт
        routeDetails_Text[a].innerHTML= "Свернуть";
        routeDetails[a].style.display = 'block';
        
        arrowDown[a].style.fill='#fff';
        arrowDown[a].style.transform = 'rotate(180deg)';
        details[a].style.backgroundColor = '#74afed';
        details[a].style.color='#fff';
    }else{
        //если параграф открыт
        routeDetails_Text[a].innerHTML= "Подробнее";
        
        routeDetails[a].style.display = 'none';
        arrowDown[a].style.fill='#000';
        arrowDown[a].style.transform = 'rotate(360deg)';
        details[a].style.backgroundColor = 'white';
        details[a].style.color='#000';
    }
}
//событие :hover
function Details_enter(a){
    arrowDown[a].style.fill='#fff';
    details[a].style.backgroundColor = '#74afed';
    details[a].style.color='#fff';
}
function Details_leave(a){
    //событие обратное :hover
    if(routeDetails[a].style.display != 'block'){
        arrowDown[a].style.fill='#000';
        details[a].style.backgroundColor = '#fff';
        details[a].style.color='#000';
    }
}


// Set the date we're counting down to
let countDownDate = new Date("Feb 16, 2021 00:00:00").getTime(),
rights = document.getElementsByClassName('footer_rights')[0].innerHTML,
now = new Date().getTime();
if (now >= 1609448400000){
    document.getElementsByClassName('footer_rights')[0].innerHTML = 'Copyright © Владислав Климов 2020-2021. Все права защищены.';
}



document.body.onload = function(){
    let countdown = document.createElement('div');
    countdown.classList.add('footer_countdown');
    
    let footer_bottom = document.getElementsByClassName("footer_rights")[0];
    footer_bottom.prepend(countdown);
    // Update the count down every 1 second

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
        countdown.innerHTML = 'Поддержка сайта закончится через ' + days + "д " + hours + "ч "
        + minutes + "м " + seconds + "с.";
    
  });
}































