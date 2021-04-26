module.exports = {
    name: 'resume',
    aliases: ['resumo'],
    category: 'Music',
    utilisation: '{prefix}resumo',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Não encontrei nenhuma música.`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`Música já está tocando.`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`Música ${client.player.getQueue(message).playing.title} resumida!`);
    },
};