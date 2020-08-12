const properties = {
    tabla: {
        demand: true,
        alias: 'b'
    },
    tope: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Comando para imprimir consulta', properties)
    .command('crear', 'Comando para crear archivo .txt con la consulta', properties).help()
    .argv;

module.exports = {
    argv
}