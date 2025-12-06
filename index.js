const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// event ketika bot online
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// command dasar !ping
client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

// login bot
client.login(process.env.TOKEN);
