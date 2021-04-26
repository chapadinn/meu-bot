module.exports = {
    name: 'embaralhar',
    aliases: ['misturar', 'eb', 'shuffle'],
    category: 'Music',
    utilisation: '{prefix}embaralhar',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Não encontrei nenhuma música.`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`Fila embaralhada com sucesso! **${client.player.getQueue(message).tracks.length}** música(s)!`);
    },
};