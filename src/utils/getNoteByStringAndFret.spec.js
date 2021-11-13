import { getNoteByStringAndFret } from "./getNoteByStringAndFret";

describe("getNoteyStringAndFret", () => {
  it("should return e", () => {
    expect(getNoteByStringAndFret("e", 0)).toEqual("E");
  });
  it("should return B", () => {
    expect(getNoteByStringAndFret("B", 0)).toEqual("B");
  });
  it("should return G", () => {
    expect(getNoteByStringAndFret("G", 0)).toEqual("G");
  });
  it("should return D", () => {
    expect(getNoteByStringAndFret("D", 0)).toEqual("D");
  });
  it("should return A", () => {
    expect(getNoteByStringAndFret("A", 0)).toEqual("A");
  });
  it("should return E", () => {
    expect(getNoteByStringAndFret("E", 0)).toEqual("E");
  });
});
