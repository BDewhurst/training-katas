function findMissingLetter(array) {
const missingLetter = []
for(let i = 0; i < array.length -1; i++) {
  let currentCharCode = array[i].charCodeAt(0)
  let nextCharCode = array[i + 1].charCodeAt(0)
if (nextCharCode - currentCharCode > 1) {
 const missingCharCode = currentCharCode + 1
 const missingString = String.fromCharCode(missingCharCode)
 missingLetter.push(missingString)
}
}
return missingLetter
}

module.exports = {findMissingLetter}