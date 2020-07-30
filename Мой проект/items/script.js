
let sources = document.querySelector('.sources_list'),
source_Text = document.querySelector('#sources'),
anchorBtnUp = document.getElementsByClassName('anchor_button')[0],
anchorBtnDown = document.getElementsByClassName('anchor_button')[1];

anchorBtnUp.addEventListener('click', scrollBtnUpClick);
anchorBtnDown.addEventListener('click', scrollBtnDownClick);
window.addEventListener('scroll', scrollDown);
window.addEventListener('scroll', scrollUp);
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
      )
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