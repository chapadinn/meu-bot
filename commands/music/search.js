module.exports = {
    name: 'search',
    aliases: ['sr', 'procurar'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`**Ops!** Você tem que estar em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**Ops!** Você não está no mesmo canal de voz!`);

        if (!args[0]) return message.channel.send(`**Ops!** Me diz um nome ou link da música.`);

        client.player.play(message, args.join(" "));
    },
};