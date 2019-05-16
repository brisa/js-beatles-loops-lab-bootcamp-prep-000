// add solution here
let emptyArr = []
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  for(let i = 0; i < arrayMusicians.length; i++){
      emptyArr.push(arrayMusicians[i] + " plays "+ arrayInstruments[i])
  }
  
  return(emptyArr)
}

function johnLennonFacts(array){
    let facts = array
    let newFacts = []
   // console.log(array.length)
   // console.log('newFacts ' + newFacts.length)
  for(let i = 0; i<array.length; i++){
    newFacts.push(array[i]+ "!!!")
   
  }
    return(newFacts)
}
