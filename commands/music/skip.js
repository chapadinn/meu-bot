module.exports = {
    name: 'skip',
    aliases: ['sk', 'pular'],
    category: 'Music',
    utilisation: '{prefix}pular',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Não encontrei nenhuma música.`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`Música pulada com sucesso!`);
    },
};