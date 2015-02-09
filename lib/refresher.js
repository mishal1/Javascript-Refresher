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
  array.forEach(function(element){newArray.push(reverseElement(element))})
  return newArray
}

function reverseElement(element){
  return element.split('').reverse().join('')
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

function makeNumberNegative(number){
  if(number < 0){return number}
  return number * -1
}

function separateArrayIntoEvenAndOddNumbers(array){
  var newArray = [[],[]]
  array.forEach(function(element){
    if(element % 2 === 0){ return newArray[0].push(element)}
    newArray[1].push(element)
  })
  return newArray
}

function numberOfElementsThatArePalindromes(array){
  var count = 0
  array.forEach(function(element){if(element === reverseElement(element)){count+=1}})
  return count
}

function shortestWordInArray(array){
  var shortestWord = array[0]
  array.forEach(function(element){
    if(element.length < shortestWord.length) {shortestWord = element}
  });
  return shortestWord
}

function longestWordInArray(array){
  var longestWord = array[0]
  array.forEach(function(element){
    if(element.length > longestWord.length) {longestWord = element}
  });
  return longestWord
}

function arrayTotal(array){
  var total = 0
  array.forEach(function(number){total += number});
  return total
}

function doubleArray(array){
  var newArray = array
  array.forEach(function(element){newArray.push(element)});
  return newArray
}

function averageOfArray(array){
  var total = arrayTotal(array)
  return parseFloat((total / array.length).toFixed(1))
}

function removeElementsGreaterThanFive(array){
  return array.filter(function(element){return element <= 5});
}

function convertArrayToObject(array){
  var newObject = {}
  for(var i = 0; i < array.length; i++){newObject[i] = array[i]}
  return newObject
}

function getLettersInArrayOfWords(array){
  var newArray = []
  array.forEach(function(element){
    for(var i = 0; i < element.length; i++){
      newArray.push(element.charAt(i))
    }
  });
  return newArray.sort()
}

function swapKeysAndValuesInObject(object){
  var newObject = {}
  for(var key in object){newObject[object[key]] = parseInt(key)}
  return newObject
}

function addKeysAndValues(object){
  var sum = 0
  for(var key in object){sum += (parseInt(object[key]) + parseInt(key))}
  return sum
};

function removeCapitalLettersFromString(string){
  return string.replace(/[A-Z]/g, '')
}

function everyPossiblePairing(array){
  var newArray = []
  for(var i = 0; i < array.length; i++){
    if(array[i+1]){newArray.push([array[i], array[i+1]])}
    if(array[i+2]){newArray.push([array[i], array[i+2]])}
  }
  return newArray
}

function roundUpNumber(number){
  return Math.ceil(number)
}













