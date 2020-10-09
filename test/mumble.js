import { mumble } from "../lib/mumble.js";

import assert from 'assert';

describe("Mumble", function () {
  it("handles empty strings", function () {
    const input_string = "";
    assert.strictEqual("", mumble(input_string));
  });
});
