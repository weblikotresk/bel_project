
let 
sources = document.querySelector('.sources_list'),
source_Text = document.querySelector('#sources'),

anchorBtnUp = document.getElementsByClassName('anchor_button')[0],
anchorBtnDown = document.getElementsByClassName('anchor_button')[1];

anchorBtnUp.addEventListener('click', scrollBtnUpClick)
anchorBtnDown.addEventListener('click', scrollBtnDownClick)
window.addEventListener('scroll', scrollDown)
window.addEventListener('scroll', scrollUp)
function scrollUp(){
    //для кнопки вверх
    if(( pageYOffset)<document.documentElement.clientHeight){
        anchorBtnUp.style.display= 'none';
    }
    else{
        anchorBtnUp.style.display= 'block';
    }
}

function scrollDown(){
    //для кнопки вниз
    if((pageYOffset)>document.documentElement.clientHeight){
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



//при клике на Материал взят из следующих источников: открывается список
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