const jinInput = document.getElementById('jinInput');

//hidden
document.getElementById("output").style.visibility = "hidden"



jinInput.addEventListener("input",function (e) {
  document.getElementById("output").style.visibility = "visible"
  let jinNumber = e.target.value;
  document.getElementById("kgOutput").innerHTML =
      jinNumber * 0.5 ;
  document.getElementById("poundOutput").innerHTML =
      jinNumber * 1.1023113 ;
  document.getElementById("ozOutput").innerHTML =
      jinNumber * 17.636981 ;
})


