let body = document.getElementsByTagName('body')[0];
let filter = document.getElementById('filter');

function closeit(){
  body.classList.remove('closed');
  filter.removeAttribute('style');
}

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
  let text = document.querySelectorAll(elem >' label');

  if(elem.style.background == "rgba(116, 175, 237, 0.3)"){
    elem.style.background = '#fff';
    
  }else{
    elem.style.background = "rgba(116, 175, 237, 0.3)";

  }
}  
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
    head.style.backgroundColor = 'rgba(116, 175, 237, 0.8)';
    head.style.color='white';


}
}
function change() {

    let costArr =document.querySelectorAll("div.cost >label  > input[type=checkbox]"),
        openArr = document.querySelectorAll("div.open >label >  input[type=checkbox]"),
        closeArr = document.querySelectorAll("div.close >label >   input[type=checkbox]"),
        placeArr = document.querySelectorAll("div.place >label >  input[type=checkbox]"),
        themeArr = document.querySelectorAll("div.theme >label >  input[type=checkbox]");
        console.log(costArr, openArr, closeArr, placeArr);
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
    rElems[i].style.display = "block";
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (let i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.display = "none";
  }
}