function bigNumbers (array) {
const sortedArray = array.sort((a, b) => b-a)
const stringArray = sortedArray.join('')
return stringArray
}


module.exports = {bigNumbers}