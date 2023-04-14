let playButton =  document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let configButton = document.querySelector(".config")
let volOn = document.querySelector(".vol-on")
let volOff = document.querySelector(".vol-off")
let minutes
let minutesDisplay = document.querySelector(".minutes")
let secondesDisplay = document.querySelector(".seconds")

function countDown (){
  setTimeout(function (){
    let seconds = Number(secondesDisplay.textContent) 
    let minutesCount = Number(minutesDisplay.textContent)
    

    secondesDisplay.textContent = String(seconds-1).padStart(2,"0")

    if (minutesCount == 0){
      
      playButton.classList.toggle("hide")
      pauseButton.classList.toggle("hide")
      stopButton.classList.remove('hide')
      configButton.classList.add('hide')

      return
    }

    if (seconds == 0){
      seconds = 2

      minutesDisplay.textContent = String(minutesCount - 1).padStart(2, "0")
    }
 
    countDown()

  },1000)

}

function changeButtonPlay (){
  playButton.classList.toggle("hide")
  pauseButton.classList.toggle("hide")
  stopButton.classList.remove('hide')
  configButton.classList.add('hide')

  countDown()
}

function changeButtonPause (){
  playButton.classList.toggle("hide")
  pauseButton.classList.toggle("hide")
}

function changeButtonStop (){
  stopButton.classList.toggle('hide')
  configButton.classList.toggle('hide')
  playButton.classList.remove("hide")
  pauseButton.classList.add("hide")
}

function changeVolOnOff (){
  volOn.classList.toggle('hide')
  volOff.classList.toggle('hide')
}

function setConfig (){
  minutes = prompt('Quantos minutos')
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

playButton.addEventListener('click', changeButtonPlay)
pauseButton.addEventListener('click', changeButtonPause)

stopButton.addEventListener('click', changeButtonStop)

volOn.addEventListener('click', changeVolOnOff)
volOff.addEventListener('click', changeVolOnOff)

configButton.addEventListener('click', setConfig)