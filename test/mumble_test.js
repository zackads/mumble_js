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

  it("handles another single character input", function () {
    const input_string = "X";
    assert.strictEqual("X", mumble(input_string));
  });

  it("handles uppercase characters from A to F", function () {
    const input_chars = ['A', 'B', 'C', 'D', 'E', 'F'];
    const output_chars = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < input_chars.length; i += 1) {
      assert.strictEqual(output_chars[i], mumble(input_chars[i]));
    };
  });

  it("handles several single lowercase letter inputs", function() {
    const input_chars = ['a', 'z', 'y'];
    const output_chars = ['A', 'Z', 'Y'];
    for (let i = 0; i < input_chars.length; i += 1) {
      assert.strictEqual(output_chars[i], mumble(input_chars[i]));
    };
  })

  it("handles two uppercase letter inputs", function() {
    const input_string = "AA";
    const expected_output = "A-Aa";
    assert.strictEqual(expected_output, mumble(input_string));
  });
});