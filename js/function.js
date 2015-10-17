$(document).ready(function() {
 
//  owl-carousel =======================================================
  
  var owl = $("#owl-example");
  
  $("#owl-example").owlCarousel({
    singleItem: true,
    slideSpeed: 500
  });
  
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  
  //  Footer height ===========================================================
  
  var Foo_height = $("footer").height() + 205;
  
  $("main").css({
    "margin-bottom" : +Foo_height+ "px"});
  
});



//Countdown Timer =====================================================================

function count(){
  
  var timer_sec = document.querySelector(".seconds i");
  var timer_min = document.querySelector(".minutes i");
  var timer_hr = document.querySelector(".hours i");
  var timer_ds = document.querySelector(".days i");
  
  timer_sec.innerHTML--;
  
  if(timer_sec.innerHTML < 0 ){
    timer_min.innerHTML--;
    timer_sec.innerHTML = 59;
    setTimeout(count,1000);
  }
  else {
    setTimeout(count,1000);
  }
  
  if(timer_min.innerHTML < 0 ){
    timer_hr.innerHTML--;
    timer_min.innerHTML = 59;
  }
  
  if(timer_hr.innerHTML < 0){
    timer_ds.innerHTML--;
    timer_hr.innerHTML = 23;
  }
  
  if(timer_ds.innerHTML < 0 ){
    timer_ds.innerHTML = 0;
    timer_hr.innerHTML = 0;
    timer_min.innerHTML = 0;
    timer_sec.innerHTML = 0;
    alert("We are done");
    return;
  }
};

setTimeout(count,1000);