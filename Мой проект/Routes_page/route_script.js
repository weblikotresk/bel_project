
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


































