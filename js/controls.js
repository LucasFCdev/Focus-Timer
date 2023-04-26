export default function Controls({
  playButton,
  pauseButton,
  stopButton,
  configButton,
}) {

  function play(){
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    stopButton.classList.remove('hide')
    configButton.classList.add('hide')
  }

  function pause() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  }
  
  function reset(){
    playButton.classList.toggle("hide")
    pauseButton.classList.toggle("hide")
    stopButton.classList.add('hide')
    configButton.classList.remove('hide')
  }

  function getMinutes(){
    let newMinutes = prompt("Quantos Minutos?")

    if(!newMinutes){
      return false
    }

    return newMinutes
  }

  return{
    play,
    pause,
    reset,
    getMinutes
  }

}
