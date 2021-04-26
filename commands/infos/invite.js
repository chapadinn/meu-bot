const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'invite',
  aliases: ['convite'],
  category: 'Infos',
  utilisation: '{prefix}convite',

  execute(client, message) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Olá tudo bom? Me chamo **DJ CHAPADÃO** fui criado e desenvolvido apenas pra tocar músicas.\nQuem sabe que em uma proxima update consigo ter mais coisas néh! \n> Me adicione em seu servidor!\n\n [Clique para me adicionar](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};