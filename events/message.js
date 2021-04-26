module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.discord.prefix;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
        return message.channel.send(`Me chamooou? 🧐 \nOi tudo bom? Meu prefix é \`${prefix}\`, fui criado pra tocar uns batidão, utilize\no comando \`${prefix}help\` e veja meus comandos.`).then(m => m.delete({ timeout: 10000 }) && message.delete());
      }

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);
};