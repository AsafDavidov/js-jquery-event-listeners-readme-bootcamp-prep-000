//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    addClass('tasty');
  });
}

function pressIt(){
  $('#typing').on("keydown", function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    
  });
}
$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
