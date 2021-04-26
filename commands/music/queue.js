module.exports = {
    name: 'fila',
    aliases: ['lista'],
    category: 'Music',
    utilisation: '{prefix}fila',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`Não encontrei nenhuma música.`);

        message.channel.send(`**Servidor - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(repetir)' : ''}**\nTocando: ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (Solicitado por: ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `e **${queue.tracks.length - 5}** outras músicas...` : `Na playlist **${queue.tracks.length}** música(s)...`}`));
    },
};