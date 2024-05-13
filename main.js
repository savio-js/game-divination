const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide' )) {
    handleResetClick()
  }
}


function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) <= 10){
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
  
      screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`
  
    }
  }else{
    alert('Digite um número entre 0 e 10')
  }

  

  randomNumber = Math.round(Math.random() * 10)

  inputNumber.value = ''
  xAttempts++
  console.log(randomNumber)
}

function handleResetClick() {
  toggleScreen()

  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}



