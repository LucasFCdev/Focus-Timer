export default function Timer ({
  minutesDisplay,
  secondesDisplay,
  minutes,
  resetControls
})
{ 
  let timerTimeOut

  function updateTimerDisplay (minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondesDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countDown(){
    timerTimeOut = setTimeout(function (){
      let seconds = Number(secondesDisplay.textContent) 
      let minutesCount = Number(minutesDisplay.textContent)
    
      updateTimerDisplay(minutesCount, 0)

      if (minutesCount <= 0 && seconds <= 0){
        
        reset()
        updateMinutes(minutes)

        return
      }

      if (seconds <= 0){
        seconds = 5
        --minutesCount
        //minutesDisplay.textContent = String(minutesCount - 1).padStart(2, "0")
      }

      updateTimerDisplay(minutesCount, String(seconds-1))
  
      countDown()

    }, 1000)
  }

  function updateMinutes(newMinutes){
    minutes = newMinutes
  }

  function hold(){
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    reset,
    updateTimerDisplay,
    updateMinutes,
    hold
  }

}