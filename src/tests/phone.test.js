import { isPhoneNumber } from "../phone.js";

describe("Is Phone Number", () => {
  it("Should accept +33 6 12 34 56 68", () => {
    expect(isPhoneNumber("+33 6 12 34 56 68")).toBe(true);
  });
  it("Should accept +49-155-5559-748", () => {
    expect(isPhoneNumber("+49-155-5559-748")).toBe(true);
  });
  it("Should accept +49.155.5559.748", () => {
    expect(isPhoneNumber("+49-155-5559-748")).toBe(true);
  });
  it("Should accept +491555559748", () => {
    expect(isPhoneNumber("+49-155-5559-748")).toBe(true);
  });
  it("Should accept 01000000000", () => {
    expect(isPhoneNumber("01000000000")).toBe(true);
  });
  it("Should accept adcvddd+491555559748ddwdwd", () => {
    expect(isPhoneNumber("adcvddd+491555559748ddwdwd")).toBe(true);
  });
  it("Should reject adcvddd", () => {
    expect(isPhoneNumber("adcvddd")).toBe(false);
  });
  it("Should reject falsy non-number values", () => {
    const falsyValues = [null, NaN, undefined, ""];
    falsyValues.forEach((value) => expect(isPhoneNumber(value)).toBe(false));
  });
});
