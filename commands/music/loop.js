module.exports = {
    name: 'loop',
    aliases: ['lp', 'repetir'],
    category: 'Music',
    utilisation: '{prefix}repetir',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`**Ops!** Não encontrei músicas pra repetir.`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`Modo repetição **desativado** com sucesso.`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`Modo repetição **ativado** com sucesso.`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`Modo repetição **desativado** com sucesso.`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`Modo repetição **ativado** com sucesso.`);
            };
        };
    },
};