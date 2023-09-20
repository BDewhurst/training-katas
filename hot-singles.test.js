const {hotSingles} = require("./hot-singles.js")

test('hotSingles should return [4, 5]', () => {
    const result = hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]);
    expect(result).toEqual([4, 5]);
  });
  test('hotSingles should return ["tartar", "domino"]', () => {
    const result = hotSingles(
      ["tartar", "blanket", "cinnamon"],
      ["cinnamon", "blanket", "domino"]
    );
    expect(result).toEqual(["tartar", "domino"]);
  });