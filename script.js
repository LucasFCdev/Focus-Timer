let playButton =  document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let configButton = document.querySelector(".config")

function changeButtonPlay (){
  playButton.classList.toggle("hide")
  pauseButton.classList.toggle("hide")
  stopButton.classList.remove('hide')
  configButton.classList.add('hide')
}

function changeButtonStop (){
  stopButton.classList.toggle('hide')
  configButton.classList.toggle('hide')
  playButton.classList.remove("hide")
  pauseButton.classList.add("hide")
}

playButton.addEventListener('click', changeButtonPlay)
pauseButton.addEventListener('click', changeButtonPlay)

stopButton.addEventListener('click', changeButtonStop)
