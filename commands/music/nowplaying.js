module.exports = {
    name: 'tocando',
    aliases: ['np', 'agora'],
    category: 'Music',
    utilisation: '{prefix}tocando',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Não encontrei nenhuma música.`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Obrigado por me fazer cutucar orelha com minhas músicas.' },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Solicitada por', value: track.requestedBy.username, inline: true },
                    { name: 'Playlist', value: track.fromPlaylist ? 'Sim' : 'Não', inline: true },
        
                    { name: 'Visualização', value: track.views, inline: true },
                    { name: 'Duração', value: track.duration, inline: true },
        
                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Modo repetição', value: client.player.getQueue(message).repeatMode ? 'Sim' : 'Não', inline: true },
                    { name: 'Pausada', value: client.player.getQueue(message).paused ? 'Sim' : 'Não', inline: true },
        
                    { name: 'Progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            }
        });
    },
};

/*        message.channel.send({
    embed: {
        color: 'RED',
        author: { name: track.title },
        footer: { text: 'Obrigado por me fazer cutucar orelha com minhas músicas.' },
        fields: [
            { name: 'Canal', value: track.author, inline: true },
            { name: 'Solicitada por', value: track.requestedBy.username, inline: true },
            { name: 'Playlist', value: track.fromPlaylist ? 'Sim' : 'Não', inline: true },

            { name: 'Visualização', value: track.views, inline: true },
            { name: 'Duração', value: track.duration, inline: true },

            { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
            { name: 'Modo repetição', value: client.player.getQueue(message).repeatMode ? 'Sim' : 'Não', inline: true },
            { name: 'Pausada', value: client.player.getQueue(message).paused ? 'Sim' : 'Não', inline: true },

            { name: 'Progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
        ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date(), */