module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            footer: { text: 'Obrigado por me fazer cutucar orelha com minhas músicas.' },
            description: `\`${track.title}\` foi adicionado a fila.`,
    
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
};

//    message.channel.send(`${client.emotes.music} **${track.title}** adicionada á fila.`);
