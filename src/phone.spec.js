import isPhoneNumber from "./phone.js";

describe("isGermanPhone", () => {
  it("can be +491 000 000000", () => {
    expect(isPhoneNumber("+491 000 000000")).toBe(true);
  });

  it("can be 01000000000", () => {
    expect(isPhoneNumber("01000000000")).toBe(true);
  });

  it("can be +491000000000", () => {
    expect(isPhoneNumber("+491000000000")).toBe(true);
  });
});
