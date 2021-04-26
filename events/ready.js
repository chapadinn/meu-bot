module.exports = async (client) => {

    client.user.setActivity(client.config.discord.activity);
    console.log(`Logado como ${client.user.username}. Em ${client.guilds.cache.size} servidores, com um total de ${client.users.cache.size} úsuarios.`);

};
