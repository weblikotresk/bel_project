
//кнопки вверх-вниз
let anchorBtnUp = document.getElementsByClassName('anchor_button')[0];
let anchorBtnDown = document.getElementsByClassName('anchor_button')[1];
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




























