

$(".fa-align-justify").click(function(){
   var x= $(this).height() - 43;
   
   var change= $(".category").css({
   	"display":"block",
	"position":"absolute",
	"top": $(this).offset().top+ x,
	"left": $(this).offset().left - 13
   });
    
   $("change").animate({
    width: 'toggle'},100);
   
});

$("#close").click(function(){
	$(".category").fadeOut(200);
});

$("#backToTop").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});

var nextBtn= document.getElementById("btnNext");
var prevBtn= document.getElementById("btnPrev");
var slideshow= document.querySelector(".slideshow");
var images= document.querySelectorAll(".slideshow img");
var imgSize= images[0].clientWidth;

let counter=1;

slideshow.style.transform= 'translateX('+ (-imgSize*counter)+'px)';

nextBtn.addEventListener("click" ,function(){
   if (counter>images.length-2) return;
   slideshow.style.transition= "transform 0.4s ease-in-out";
   counter++;
   slideshow.style.transform= 'translateX('+ (-imgSize*counter)+'px)';
});
  


prevBtn.addEventListener("click" ,function(){
   if (counter<1) return;
   slideshow.style.transition= "transform 0.4s ease-in-out";
   counter--;
   slideshow.style.transform= 'translateX('+ (-imgSize*counter)+'px)';
});

slideshow.addEventListener("transitionend", function(){
  if (images[counter].id === "lastClone") {
         slideshow.style.transition= "none";
         counter= images.length-2;
         slideshow.style.transform= 'translateX('+ (-imgSize*counter)+'px)';
  }
  if (images[counter].id === "firstClone") {
         slideshow.style.transition= "none";
         counter=1;
         slideshow.style.transform= 'translateX('+ (-imgSize*counter)+'px)';
  }
});

 

