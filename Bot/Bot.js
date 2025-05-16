import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf("7436164642:AAEISjcDTdOW4RQaX1kxeIKuQKQpnqUXRh0");
const webLink = "https://telegram-bot-one-kappa.vercel.app/"
bot.start((ctx) =>
  ctx.reply("Welcome", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Web App",
            web_app: { url: webLink }
          }
        ]
      ],
    //   resize_keyboard: true
    }
  })
);
bot.launch();

console.log("🤖 Telegram bot is running!");
