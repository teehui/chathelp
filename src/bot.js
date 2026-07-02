import "dotenv/config";
import { Telegraf } from "telegraf";
import { createReply } from "./replies.js";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("Missing TELEGRAM_BOT_TOKEN. Copy .env.example to .env and add your Telegram bot token.");
  process.exit(1);
}

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply("Hi! I'm ChatHelp. Send me a message and I'll chat with you.");
});

bot.help((ctx) => {
  ctx.reply("I can have simple conversations, answer greetings, respond to thanks, and share the current date or time.");
});

bot.on("text", (ctx) => {
  ctx.reply(createReply(ctx.message.text));
});

bot.catch((error) => {
  console.error("Bot error:", error);
});

bot.launch();
console.log("ChatHelp bot is running.");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
