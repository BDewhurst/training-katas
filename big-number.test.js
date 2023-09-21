const {bigNumbers} = require('./big-numbers')

test('Organise number in largest order', ()=> {
    const result = bigNumbers([1,2,3])
    expect(result).toEqual('321')
})