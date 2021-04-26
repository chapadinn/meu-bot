module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`Sua seleção foi **cancelada** com sucesso!`);
    } else message.channel.send(`**Eiii!** Você deve enviar um número válido entre **1** e **${tracks.length}**!`);
};