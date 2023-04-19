import resetControls from "./controls"
import "./timer.js"
import { Timer } from "./timer.js"

let playButton =  document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let configButton = document.querySelector(".config")
let volOn = document.querySelector(".vol-on")
let volOff = document.querySelector(".vol-off")
let minutesDisplay = document.querySelector(".minutes")
let secondesDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)

const timer = Timer ({
  minutesDisplay,
  secondesDisplay,
  resetControls,
  timerTimeOut
})

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