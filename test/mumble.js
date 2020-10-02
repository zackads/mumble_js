import { mumble } from "../lib/mumble.js";
// require("../lib/mumble.js");
var assert = require("assert");

describe("Mumble", function () {
  it("handles empty strings", function () {
    input_string = "";
    assert.strictEqual("", mumble(input_string));
  });
});
