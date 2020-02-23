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
      if(blocks[i].headline.innerText.toLowerCase().includes(val)){
        blocks[i].hidden = false;
      }
      else{
        blocks[i].hidden = true;
      }
    }
    
  }else{
    blocks.forEach((item)=>{
      item.hidden = false;
    })
    
    errorblock.hidden = true;
    return change();
  }
   if(Array.from(blocks).every(item => item.hidden == true)){
     errorblock.hidden = false;
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

// проверка если есть что-то в поисковой строке
if(input_value != '' ){
  return search();
}
}

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
  return change();
  
}
//очистка поля для ввода
function clearInput(){
  input.value = '';
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
