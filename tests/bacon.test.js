const { bacon } = require("../src");

let encoded = bacon.encode("encode");
let decoded = bacon.decode(encoded);

test('is encode work?', () => {
    expect(encoded).toBeTruthy();
  });
  
test('is decode work?', () => {
    expect(decoded).toBeTruthy();
});
