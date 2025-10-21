let count = 1 ;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage()   
}, 10000);

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}    
function nextSlide() {
  count++;
  if (count > 5) count = 1;
  document.getElementById("radio" + count).checked = true;
}

function prevSlide() {
  count--;
  if (count < 1) count = 5;
  document.getElementById("radio" + count).checked = true;
}


document.getElementById('next1').addEventListener('click', nextSlide);
document.getElementById('next2').addEventListener('click', nextSlide);
document.getElementById('prev1').addEventListener('click', prevSlide);
document.getElementById('prev2').addEventListener('click', prevSlide);
