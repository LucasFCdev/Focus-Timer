let playButton =  document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let configButton = document.querySelector(".config")
let volOn = document.querySelector(".vol-on")
let volOff = document.querySelector(".vol-off")
let minutesDisplay = document.querySelector(".minutes")
let secondesDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)

function resetControls (){
  playButton.classList.toggle("hide")
  pauseButton.classList.toggle("hide")
  stopButton.classList.remove('hide')
  configButton.classList.add('hide')
}

function updateTimerDisplay (minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondesDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTime(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countDown (){
  timerTimeOut = setTimeout(function (){
    let seconds = Number(secondesDisplay.textContent) 
    let minutesCount = Number(minutesDisplay.textContent)
  
    updateTimerDisplay(minutesCount, 0)

    if (minutesCount <= 0 && seconds <= 0){
      
      resetControls()

      return
    }

    if (seconds <= 0){
      seconds = 5
      --minutesCount
      //minutesDisplay.textContent = String(minutesCount - 1).padStart(2, "0")
    }

    updateTimerDisplay(minutesCount, String(seconds-1))
 
    countDown()

  },1000)

}

function changeButtonPlay (){
  resetControls()
  countDown()
}

function changeButtonPause (){
  playButton.classList.toggle("hide")
  pauseButton.classList.toggle("hide")

  clearTimeout (timerTimeOut)
}

function changeButtonStop (){
  stopButton.classList.toggle('hide')
  configButton.classList.toggle('hide')
  playButton.classList.remove("hide")
  pauseButton.classList.add("hide")

  resetTime()
}

function changeVolOnOff (){
  volOn.classList.toggle('hide')
  volOff.classList.toggle('hide')
}

function setConfig (){
  minutes = prompt('Quantos minutos') || 0
  updateTimerDisplay(minutes, 0)
}

playButton.addEventListener('click', changeButtonPlay)
pauseButton.addEventListener('click', changeButtonPause)

stopButton.addEventListener('click', changeButtonStop)

volOn.addEventListener('click', changeVolOnOff)
volOff.addEventListener('click', changeVolOnOff)

configButton.addEventListener('click', setConfig)