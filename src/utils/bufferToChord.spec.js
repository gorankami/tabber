import { bufferToChord, countMaxFretLength } from "./bufferToChord";

describe("countMaxFretLength", () => {
  it("shoould return 0", () => {
    expect(countMaxFretLength([null, null, null, null, null, null])).toEqual(0);
  });

  it("should return 1", () => {
    expect(countMaxFretLength([null, null, null, "2", null, null])).toEqual(1);
    expect(countMaxFretLength(["2", "2", null, "2", null, null])).toEqual(1);
    expect(countMaxFretLength(["2", "2", "2", "2", "2", "2"])).toEqual(1);
  });

  it("should return 2", () => {
    expect(countMaxFretLength([null, null, null, "22", null, null])).toEqual(2);
    expect(countMaxFretLength(["2", "22", null, "2", null, null])).toEqual(2);
    expect(countMaxFretLength(["22", "22", "22", "2", "22", "22"])).toEqual(2);
  });
});

describe("bufferToChord", () => {
  it("should be empty", () => {
    expect(bufferToChord([null, null, null, null, null, null])).toEqual(null);
  });

  it("Should be E chord", () => {
    const result = ["0", "2", "2", "-", "-", "-"];
    expect(bufferToChord(["0", "2", "2", null, null, null])).toEqual(result);
  });

  it("Should be Some upper chord combining 1 and 2 spaces", () => {
    const result = ["-9", "11", "11", "--", "--", "--"];
    expect(bufferToChord(["9", "11", "11", null, null, null])).toEqual(result);
  });

  
  it("Should be Some upper chord combining 2 spaces", () => {
    const result = ["10", "11", "11", "--", "--", "--"];
    expect(bufferToChord(["10", "11", "11", null, null, null])).toEqual(result);
  });
});
