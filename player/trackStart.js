const Discord = require('discord.js')
module.exports = (client, message, track, args) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            footer: { text: 'Obrigado por me fazer cutucar orelha com minhas músicas.' },
            description: `\`${track.title}\` começou a tocar agora no canal \`${message.member.voice.channel.name}\` 🎵 `,
    
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
}
//thumbnail: { url: track.thumbnail },
//    message.channel.send(`${client.emotes.music} Tocando agora **${track.title}** no canal **${message.member.voice.channel.name}**`);