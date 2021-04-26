module.exports = (client, message, queue, playlist) => {
    message.channel.send(`**Uhuul! 😎** **${playlist.title}** foi adiciona á fila! (**${playlist.tracks.length}** músicas).`);
};