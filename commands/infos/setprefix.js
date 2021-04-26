module.exports = {
    name: 'setprefix',
    aliases: ['prefix'],
    category: 'Infos',
    utilisation: '{prefix}sp',

    execute(client, message, args) {
    const Prefix = require("../../Data/prefix.json")
    const fs = require('fs')
    if (!message.member.hasPermission("MANAGE_GUILD")) return  message.channel.send(`${message.author}, você não tem permissão para utilizar esse comando!`);

    if(!args.join(' ')) return message.channel.send(`${message.author}, desculpa mas esse comando ainda não está pronto.`)
    if(args[0].length>=4) return  message.channel.send(`${message.author}, o prefix só pode conter no máximo 5 carcteres.`)
   
    Prefix[message.guild.id]=args[0]
   message.channel.send(`Prefix alterado com sucesso! Novo: \`${args[0]}\``)
    fs.writeFile("./Data/prefix.json", JSON.stringify(Prefix), (err) => {
        if (err) console.log(err)
    });
    }
} 