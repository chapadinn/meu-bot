module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`**PONG!** Ping: **${client.ws.ping}ms**!`);
    },
};