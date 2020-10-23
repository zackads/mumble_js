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

  it("handles a single lowercase letter input", function () {
    const input_string = 'a';
    const expected_output = 'A';
    assert.strictEqual(expected_output, mumble(input_string)); 
    // the test challenges the main function to transform and evolve
  });
});

// "abc" => "A-Bb-Ccc"
// "abcde" => "A-Bb-Ccc-Dddd-Eeeee"