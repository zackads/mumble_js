import { mumble } from "../lib/mumble.js";

import assert from 'assert';

describe("Mumble", function () {
  it("handles empty strings", function () {
    const input_string = "";
    assert.strictEqual('', mumble(input_string));
  });
  
  it("handles single character inputs", function () {
    const input_string = "Z";
    assert.strictEqual("Z", mumble(input_string));
  });

  it("handles alternative single character inputs", function () {
    const input_string = "Y";
    assert.strictEqual("Y", mumble(input_string));
  });
});

