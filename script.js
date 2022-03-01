var numTab = 0; 
showTab(numTab); 

function showTab(n) {
  var x = document.getElementsByClassName("tab");

  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("sub").style.display = "block";
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
  } 
}      

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  x[numTab].style.display = "none";
  numTab = numTab + n;
  showTab(numTab);
}
  
function makeInput() {
  document.getElementById("text").style.display = "block";
}
    
 function makeInput_2() {
   document.getElementById("number").style.display = "block";
}   
    
  sub.onclick = function() {
    alert('Спасибо за заявку!');
  };

  function validate(){

    var x=document.forms['form']['nameText'].value;
    if (x.length==0){
      alert('пусто');
       return false;
    }

 }