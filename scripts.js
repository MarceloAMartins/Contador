const aumentar=document.getElementById("Increase")
const diminuir=document.getElementById("toDecrease")
const reset=document.getElementById("Reset")
const counterElement = document.getElementById('cont')

let cont = 0

const aumentarNumber= () =>{    
    cont++
    counterElement.textContent = cont
}
const diminuirNumber = () => {
  cont--
  counterElement.textContent = cont
}
const ResetNumber = () => {
  cont = 0
  counterElement.textContent = cont
}


aumentar.addEventListener('click', aumentarNumber)

diminuir.addEventListener('click', diminuirNumber)

reset.addEventListener('click', ResetNumber)
