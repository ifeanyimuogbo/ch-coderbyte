const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  // Refactor 01 - Reduce nested if/else to a single if/else if statement using the && operator)
  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event && !event.partitionKey) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  // Refactor 02 - Simplify nested if/else to two if statements)
  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};
