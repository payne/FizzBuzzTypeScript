import "jasmine";
const Jasmine = require('jasmine');
import Something from "../src/something";

describe("something", () => {
  it("should work", () => {
    const s = new Something();
    expect(s.works()).toBe(true);
  });
});
