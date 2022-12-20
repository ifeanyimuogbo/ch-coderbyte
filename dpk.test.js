const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns a string value when passed a string as input", () => {
    const trivialKey = deterministicPartitionKey("thisisastringvalue");
    expect(typeof trivialKey).toBe("string");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns a string value when passed a event object with the partitionKey key as input", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "ajhfdfghjhfghg",
    });
    expect(typeof trivialKey).toBe("string");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns a string value when passed an empty event object as input", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(typeof trivialKey).toBe("string");
  });
});
