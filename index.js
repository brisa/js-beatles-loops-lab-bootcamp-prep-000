// add solution here
let emptyArr = []
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  for(let i = 0; i < arrayMusicians.length; i++){
      emptyArr.push(arrayMusicians[i] + " plays "+ arrayInstruments[i])
  }
  
  return(emptyArr)
}
let newFacts = []
function johnLennonFacts(arrayFacts){
  for(let i = 0; i<arrayFacts; i++){
    newFacts.push(arrayFacts[i]+ "!!!")
    return newFacts
  }
}