module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`Não encontrei nenhuma música.`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`Por favor, me diz um número válido!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`Número válido entre 1 e 100.`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`🎧 Volume alterado para **${parseInt(args[0])}%**!`);
    },
};