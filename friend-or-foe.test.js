const {friendOrFoe} = require("./friend-or-foe.js")

test("should return an array of friend", () => {
    expect(friendOrFoe(['Kieran', 'Bob', 'John', 'Mark'])).toEqual(['John', 'Mark'])
    expect(friendOrFoe(['Kieran', 'Bob'])).toEqual([])
    expect(friendOrFoe(['Kieran', 'Bob', 'Frank', 'Jim', 'Mark'])).toEqual(['Mark'])

})