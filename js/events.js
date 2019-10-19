//define functions here
function getIt() {
  $('p').on('click', function(){
  //actions you want to 
  alert("Hey!")
});
}

function frameIt() {
    $('.tasty').on('load', function(){
  //actions you want to 
    });
  
}
function pressIt() {
    $('#typing').on('keydown', function(){
  //actions you want to 
  alert("Hey!")
    });
  
}

function submitIt() {
    $('#typing').on('keydown', function(){
  //actions you want to 
  alert("Your form is going to be submitted now.")
    });
  
}

$(document).ready(function(){

// call functions here

});
