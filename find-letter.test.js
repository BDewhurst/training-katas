const {findMissingLetter} = require("./find-letter")

test('hotSingles should return [4, 5]', () => {
    const result =  findMissingLetter(["a", "b", "d", "e"]);
    expect(result).toEqual(["c"]);
  });