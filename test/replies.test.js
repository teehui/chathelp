import test from "node:test";
import assert from "node:assert/strict";
import { createReply } from "../src/replies.js";

test("responds to greetings", () => {
  assert.match(createReply("hello"), /Hi! I'm ChatHelp/);
});

test("responds with help", () => {
  assert.match(createReply("what can you do?"), /simple conversations/);
});

test("responds with a fixed time when a date is supplied", () => {
  const now = new Date("2026-07-02T10:30:00Z");
  assert.match(createReply("what time is it?", now), /current time/);
});

test("responds to general conversation", () => {
  assert.equal(typeof createReply("I want to chat"), "string");
  assert.ok(createReply("I want to chat").length > 0);
});
