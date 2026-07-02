const fallbackReplies = [
  "I hear you. Tell me a little more.",
  "That makes sense. What would you like to chat about next?",
  "I'm here with you. We can keep it simple.",
  "Interesting. Want to say more about that?"
];

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

export function createReply(message, now = new Date()) {
  const text = String(message || "").trim().toLowerCase();

  if (!text) {
    return "Send me a message and I'll chat with you.";
  }

  if (includesAny(text, ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"])) {
    return "Hi! I'm ChatHelp. How can I help or chat with you today?";
  }

  if (includesAny(text, ["help", "what can you do", "commands"])) {
    return "I can have simple conversations, answer greetings, respond to thanks, and share the current date or time.";
  }

  if (includesAny(text, ["thank", "thanks", "appreciate"])) {
    return "You're welcome. Happy to help.";
  }

  if (includesAny(text, ["bye", "goodbye", "see you"])) {
    return "Goodbye! Come back anytime you want to chat.";
  }

  if (includesAny(text, ["time", "clock"])) {
    return `The current time is ${now.toLocaleTimeString()}.`;
  }

  if (includesAny(text, ["date", "today"])) {
    return `Today's date is ${now.toLocaleDateString()}.`;
  }

  if (includesAny(text, ["sad", "tired", "stressed", "bad day"])) {
    return "I'm sorry you're feeling that way. We can take it one message at a time.";
  }

  const replyIndex = Math.abs([...text].reduce((sum, char) => sum + char.charCodeAt(0), 0)) % fallbackReplies.length;
  return fallbackReplies[replyIndex];
}
