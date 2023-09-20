function friendOrFoe(array) {
let friends = []
array.forEach((person) => {
    if (person.length == 4) {
        friends.push(person)
    }
}) 
return friends
}

module.exports = {friendOrFoe}