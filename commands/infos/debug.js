module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`**OK!** ${client.user.username} conectado em **${client.voice.connections.size}** canais!`);
    },
};