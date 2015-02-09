function selectElementsStartingWithE(array){
  return array.filter(function(element){ return checkElementStartsWith('e', element) });
}

function checkElementStartsWith(string, element){
  return element.charAt(0) === string
};

function selectElementsStartingWithVowel(array, element){
  return array.filter(function(element){return checkElementStartsWith('a', element) || checkElementStartsWith('e', element) || checkElementStartsWith('i', element) || checkElementStartsWith('o', element) || checkElementStartsWith('u', element)});
};

function removeNullsFromArray(array){
  return array.filter(function(element){return element !== null})
}

function removeNullsAndFalseFromArray(array){
  return array.filter(function(element){return (element !== null && element !== false)});
}

function reverseEveryElementInArray(array){
  var newArray = []
  array.forEach(function(element){newArray.push(element.split('').reverse().join(''))})
  return newArray
}

function dropFirstThreeElements(array){
  array.splice(0, 3)
  return array
}

function addElementToBeginningOfArray(array, newElement){
  array.unshift(newElement)
  return array
}

function sortArrayByLastLetterOfEachWord(array){
  return array.sort(function(a, b){
    if(a.charAt(a.length-1) > b.charAt(b.length-1)){return 1};
    if(a.charAt(a.length-1) < b.charAt(b.length-1)){return -1};
    return 0;
  })
}

function returnFirstHalfOfString(string){
  return string.slice(0, Math.ceil(string.length * 0.5))
}