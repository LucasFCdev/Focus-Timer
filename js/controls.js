function resetControls (){
  playButton.classList.toggle("hide")
  pauseButton.classList.toggle("hide")
  stopButton.classList.remove('hide')
  configButton.classList.add('hide')
}

export default resetControls