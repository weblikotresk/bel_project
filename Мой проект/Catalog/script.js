/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webplossless_webp_lossless-setclasses !*/
 !function(n,e,s){function o(n,e){return typeof n===e}function t(){var n,e,s,t,i,a,f;for(var u in r)if(r.hasOwnProperty(u)){if(n=[],e=r[u],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(t=o(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)a=n[i],f=a.split("."),1===f.length?Modernizr[f[0]]=t:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=t),l.push((t?"":"no-")+f.join("-"))}}function i(n){var e=c.className,s=Modernizr._config.classPrefix||"";if(d&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),d?c.className.baseVal=e:c.className=e)}function a(n,e){if("object"==typeof n)for(var s in n)u(n,s)&&a(s,n[s]);else{n=n.toLowerCase();var o=n.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;e="function"==typeof e?e():e,1==o.length?Modernizr[o[0]]=e:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=e),i([(e&&0!=e?"":"no-")+o.join("-")]),Modernizr._trigger(n,e)}return Modernizr}var l=[],r=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){r.push({name:n,fn:e,options:s})},addAsyncTest:function(n){r.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var u,c=e.documentElement,d="svg"===c.nodeName.toLowerCase();!function(){var n={}.hasOwnProperty;u=o(n,"undefined")||o(n.call,"undefined")?function(n,e){return e in n&&o(n.constructor.prototype[e],"undefined")}:function(e,s){return n.call(e,s)}}(),f._l={},f.on=function(n,e){this._l[n]||(this._l[n]=[]),this._l[n].push(e),Modernizr.hasOwnProperty(n)&&setTimeout(function(){Modernizr._trigger(n,Modernizr[n])},0)},f._trigger=function(n,e){if(this._l[n]){var s=this._l[n];setTimeout(function(){var n,o;for(n=0;n<s.length;n++)(o=s[n])(e)},0),delete this._l[n]}},Modernizr._q.push(function(){f.addTest=a}),Modernizr.addAsyncTest(function(){var n=new Image;n.onerror=function(){a("webplossless",!1,{aliases:["webp-lossless"]})},n.onload=function(){a("webplossless",1==n.width,{aliases:["webp-lossless"]})},n.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),t(),i(l),delete f.addTest,delete f.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();n.Modernizr=Modernizr}(window,document);
let body = document.getElementsByTagName('body')[0],
filter = document.getElementById('filter'),
global_hidden_Elems=0,global_checkboxes=[],
errorblock = document.getElementById('error');
errorblock.hidden = true;
//Функция поиска
let input_value = '';
let input = document.querySelector("#search_form");
input.addEventListener('input', search);

function search(){
  let headlines = document.getElementsByClassName("item_headline");
  let blocks = document.querySelectorAll('#catalog > div');

  for(let i = 0; i<blocks.length; i++){
    blocks[i].headline = headlines[i];
  }
  blocks = Array.from(blocks).filter((block)=>{
    if(block.classList.contains('block_hidden')){
      return false;
    }else{
      return true;
    }
  });

  let val = input.value.split(' ').join('').toLowerCase();
   input_value = val;
  if(val != ''){
    
    for(let i = 0; i< blocks.length; i++){
      if(blocks[i].headline.innerText.split(' ').join('').toLowerCase().includes(val)){
        blocks[i].hidden = false;
      }
      else{
        blocks[i].hidden = true;
      }
    }
    if(Array.from(blocks).every(item => item.hidden == true)){
        errorblock.hidden = false;
    }else{
      errorblock.hidden = true;
    }
   }
   
  else{
     blocks.forEach((item)=>{item.hidden = false});
     errorblock.hidden = true;  
  }
}
//закрыть фильтры
function closeit(){
  body.classList.remove('closed');
  filter.removeAttribute('style');
}
//открыть фильтры
function filter_unwrap(){
    let wrap = document.getElementById('filter');
    if(body.classList.contains('closed')){
    body.classList.remove('closed');
    }else{
      body.classList.add('closed');
    }
    if(wrap.style.display == "block"){
        wrap.style.display= "none";
    }
    else{
        wrap.style.display= "block";
        window.scrollTo(0,0);
    }
    
    
}

function backColor(elem){
  if(elem.style.background == "rgba(116, 175, 237, 0.3)"){
    elem.style.background = '#fff';
    
  }else{
    elem.style.background = "rgba(116, 175, 237, 0.3)";

  }
}  
//открыть подзаголовок фильтров
function chboxShow(elem, head){
  
  let chboxes = document.querySelectorAll('.filter_checkboxes'),
  arrow = document.querySelectorAll('.filter_arrow');
  
  if(chboxes[elem].style.display == "flex"){
    chboxes[elem].style.display = "none";
    arrow[elem].style.transform = "rotate(0deg)";
    head.style.background = "#fff";
    head.style.color='black';
    arrow[elem].style.fill='black';

}
else{
    chboxes[elem].style.display = "flex";

    arrow[elem].style.transform = "rotate(180deg)";
    arrow[elem].style.fill='#fff';
    head.style.backgroundColor = '#48b9ffc4';
    head.style.color='white';


}
}


//фильтрация

function change() {

    let costArr =document.querySelectorAll("div.cost >label  > input[type=checkbox]"),
        openArr = document.querySelectorAll("div.open >label >  input[type=checkbox]"),
        closeArr = document.querySelectorAll("div.close >label >   input[type=checkbox]"),
        placeArr = document.querySelectorAll("div.place >label >  input[type=checkbox]"),
        themeArr = document.querySelectorAll("div.theme >label >  input[type=checkbox]");
        global_checkboxes = global_checkboxes.concat(costArr, openArr, closeArr, placeArr, themeArr);
    let filters = {
      cost: getClassOfCheckedCheckboxes(costArr),
      open: getClassOfCheckedCheckboxes(openArr),
      close: getClassOfCheckedCheckboxes(closeArr),
      place: getClassOfCheckedCheckboxes(placeArr),
      theme: getClassOfCheckedCheckboxes(themeArr),

    };

    filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  let classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (let i = 0; i < checkboxes.length; i++) {
      let cb = checkboxes[i];

      if (cb.checked) {
        classes.push(cb.getAttribute("rel"));
        
      }
    }
  }

  return classes;
}

function filterResults(filters) {
  
  let rElems = document.querySelectorAll("#catalog > div");

  let hiddenElems = [];

  let hiddenBySearch = document.querySelectorAll('#catalog > div[hidden]');

  if(hiddenBySearch != [] || hiddenBySearch!=0){
    rElems=Array.from(rElems).filter((elem)=>{
      if(elem.hasAttribute('hidden')){
        return false;
      }else{
        return true;
      }
    })
  }

  if (!rElems || rElems.length <= 0) {
    return;
  }

  for (let i = 0; i < rElems.length; i++) {
    let el = rElems[i];
    
    // ===============//
    if (filters.open.length > 0) {
      let isHidden = true;

      for (let j = 0; j < filters.open.length; j++) {
        let filter = filters.open[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }

    }

  //===========//
  if (filters.close.length > 0) {
    let isHidden = true;

    for (let j = 0; j < filters.close.length; j++) {
      let filter = filters.close[j];

      if (el.classList.contains(filter)) {
        isHidden = false;
        break;
      }
    }

    if (isHidden) {
      hiddenElems.push(el);
    }
  }
  //============//
    if (filters.cost.length > 0) {
      let isHidden = true;

      for (let j = 0; j < filters.cost.length; j++) {
        let filter = filters.cost[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }
    //===============================//
    if (filters.place.length > 0) {
      let isHidden = true;

      for (let j = 0; j < filters.place.length; j++) {
        let filter = filters.place[j];
        
        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
      
    }
    //===============================//
    if (filters.theme.length > 0) {
      let isHidden = true;

      for (let j = 0; j < filters.theme.length; j++) {
        let filter = filters.theme[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }
      if (isHidden) {
        hiddenElems.push(el);
      }
    }
    
    //===============================//
  }
  for (let i = 0; i < rElems.length; i++) {
    rElems[i].classList.remove('block_hidden');
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (let i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].classList.add('block_hidden');
  }
  global_hidden_Elems = hiddenElems;
  //проверка пустого блока
 if(hiddenElems.length >= rElems.length){
   console.log(hiddenElems, rElems);
   errorblock.hidden = false;
 }else{
  console.log(hiddenElems, rElems);
  errorblock.hidden = true;
 }
// проверка если есть что-то в поисковой строке
if(input_value != '' ){
  return search();
}
}
// очистить фильтры
function filter_clear(){
  let controlArr = Array.from(document.getElementsByClassName('checkbox'));
  for(let i = 0; i<global_checkboxes.length; i++){
    global_checkboxes[i].forEach((item)=>{
      item.checked = false;
      
    })
    
  }
  controlArr.forEach(item=>
    item.style.backgroundColor = "#fff"
  )
  if(errorblock.hidden == false){
    errorblock.hidden = true;
  }
  return change();
  
}
//очистка поля для ввода
function clearInput(){
  input.value = '';
  errorblock.hidden = true;
  return search();
}
//при клике на Материал взят из следующих источников: открывается список
let sources = document.querySelector('.sources_list'),
source_Text = document.querySelector('#sources');

function source(){
  if (sources.style.display != 'block'){
      //если параграф скрыт
      source_Text.style.color= "#48b9ff";
      sources.style.display = 'block';
  }else{
      //если параграф открыт
      source_Text.style.color= "#b3b3b3";
      sources.style.display = 'none';

  }
}
