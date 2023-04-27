import Controls from "./controls.js"
import Timer from "./timer.js"

let playButton =  document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let configButton = document.querySelector(".config")
let volOn = document.querySelector(".vol-on")
let volOff = document.querySelector(".vol-off")
let minutesDisplay = document.querySelector(".minutes")
let secondesDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls ({
  playButton,
  pauseButton,
  stopButton,
  configButton,
})

const timer = Timer ({
  minutesDisplay,
  secondesDisplay,
  timerTimeOut,
  minutes,
  resetControls: controls.reset
  
})

function changeVolOnOff (){
  volOn.classList.toggle('hide')
  volOff.classList.toggle('hide')
}

playButton.addEventListener('click', function(){
  controls.play()
  timer.countDown()
})

pauseButton.addEventListener('click', function(){
  controls.pause()
  clearTimeout(timerTimeOut)
})

stopButton.addEventListener('click', function(){
  controls.reset()
  timer.reset()
})

volOn.addEventListener('click', changeVolOnOff)
volOff.addEventListener('click', changeVolOnOff)

configButton.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()

  if (!newMinutes){
    timer.reset()
    return
  }

  minutes = newMinutes
  timer.updateTimerDisplay(minutes, 0)
})