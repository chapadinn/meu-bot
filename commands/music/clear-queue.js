module.exports = {
    name: 'limparfila',
    aliases: ['lf'],
    category: 'Music',
    utilisation: '{prefix}limparfila',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Não encontrei músicas na fila para remove-las.`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`Só há uma música na fila.`);

        client.player.clearQueue(message);

        message.channel.send(`**Uhul!** Fila foi limpa com sucesso!`);
    },
};