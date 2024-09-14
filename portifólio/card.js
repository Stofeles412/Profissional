function verMais(){
var div1 = document.getElementById("card1")
var div2 = document.getElementById("card2")
var div3 = document.getElementById("card3")
div4 = document.getElementById("div4")
if(div1.classList.contains("hidden")){
  div1.classList.remove("hidden");
  div2.classList.add("hidden");
  div3.classList.remove("hidden")
  div4.classList.add("hidden")
}else{
  div1.classList.add("hidden");
  div2.classList.remove("hidden")
  div3.classList.add("hidden")
  div4.classList.remove("hidden")
}
}