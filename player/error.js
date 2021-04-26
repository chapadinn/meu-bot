module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`**Ops!** Não há música sendo tocada neste servidor!`);
            break;
        case 'NotConnected':
            message.channel.send(`**Eii**, você não está conectado no canal de voz.`);
            break;
        case 'UnableToJoin':
            message.channel.send(`**Ops!** Eu não consigo me conectar nesse canal, por favor verifique minhas permissões. 😢`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${args[0].title} não está disponível em seu país! Pular...`);
            break;
        case 'MusicStarting':
            message.channel.send(`A música está começando... Por favor, espere e tente novamente!`);
            break;
        default:
            message.channel.send(`**Ops!** Houve um erro: ${error}`);
    };
};
