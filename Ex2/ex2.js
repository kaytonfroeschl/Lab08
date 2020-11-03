
var currentSlide;


function nextSlide(){
    slideShow(currentSlide + 1);
}

function prevSlide(){
    slideShow(currentSlide - 1);
}

function slideShow(n){
    if(n < 0){
        currentSlide = 4;
    }
    else if(n > 4){
        currentSlide = 0;
    }
    else{
        currentSlide = n;
    }
    var slide = document.getElementsByClassName('slide');
    for(i=0; i < 5; i++){
        if(i === currentSlide){
            slide[i].style.display = "block";
        }
        else{
            slide[i].style.display = "none";
        }
    }
}
