var enter = document.getElementById("enter")
var select = document.getElementById("select")
var submit = document.getElementById("submit")
var total = document.getElementById("total")


function setnum() {
  for (var i = 0; i < enterF.length; i++) {

    if ( (isNaN(parseInt(enterF[i])) === true) && (enterF[i] !== ".") ) {

      enterF = enterF.split("")
      enterF.splice(i,1)
      enterF = enterF.join("")

      i -= 1

    }

  }

}

submit.addEventListener("click",
function() {
  selectF = select.options[select.selectedIndex].value
  enterF = enter.value

  setnum()

  var tip = enterF * selectF
  var tip = tip.toFixed(2)

  total.innerHTML = "You should tip $" + tip

})
