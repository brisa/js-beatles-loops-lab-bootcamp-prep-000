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

function iLoveTheBeatles(num){
  let newArr = []
 
    for(let i=1; i< num; i++){
       if(num === 17){
    return 'I love the Beatles!'
  }
     else{
       newArr.push('I love the Beatles!')
      return newArr
     } 
  }
}