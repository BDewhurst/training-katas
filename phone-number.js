function createPhoneNumber(numbers){
    const newNumbers = [...numbers]
    const formattedNumbers = newNumbers.join("")
    const regexPattern = /(\d{3})(\d{3})(\d{4})/;
    regexedNumbers = formattedNumbers.replace(regexPattern, `($1) $2-$3`)
    return regexedNumbers
    }
    
    module.exports = {createPhoneNumber}