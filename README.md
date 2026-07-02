# chathelp

chathelp is a simple Telegram chatbot for friendly, normal conversations. It can greet people, answer basic help requests, respond to thanks, share the current date or time, and keep the chat moving with gentle fallback replies.

## Features

- Telegram bot powered by Telegraf
- Friendly responses for common conversation starters
- Simple keyword-based conversation logic
- Local tests for reply behavior
- Environment-based bot token setup

## Setup

1. Create a Telegram bot with [BotFather](https://t.me/BotFather).
2. Copy `.env.example` to `.env`.
3. Add your bot token:

```bash
TELEGRAM_BOT_TOKEN=your_token_here
```

4. Install dependencies:

```bash
npm install
```

5. Start the bot:

```bash
npm start
```

## Test

```bash
npm test
```

## Project Structure

```text
src/
  bot.js       Telegram bot entry point
  replies.js  Conversation rules
test/
  replies.test.js
```

## Notes

This bot uses simple rule-based replies. It does not require an AI API, database, or server framework.
