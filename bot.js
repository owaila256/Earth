const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost', // Replace with your server IP or domain
  port: 25565,       // Replace if your server uses a different port
  username: 'QuantomBot',
  version: false     // Automatically detects version
});

bot.on('login', () => {
  console.log('QuantomBot has joined the server!');
  bot.chat("Hey, I'm just AFKing here 👋");
});

bot.on('end', () => {
  console.log('Disconnected. Trying to reconnect...');
  setTimeout(() => {
    process.exit(); // Auto-restart with external tool like PM2 or batch/shell loop
  }, 5000);
});

// Simple jump to prevent kick
setInterval(() => {
  bot.setControlState('jump', true);
  setTimeout(() => bot.setControlState('jump', false), 500);
}, 60000);