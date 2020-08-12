//Area de Require
const { crearArchivo, ListarConsulta } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

console.log('Iniciando programa'.green);
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
var name = 'Marak';
console.log('Hello %s', colors.green(name.green));

console.log('=========================================================='); // Drops the bass
//   console.log(argv);
let comando = argv._[0];
let base = argv.tabla;
let lim = argv.tope;

switch (comando) {
    case 'listar':
        ListarConsulta(base, lim).then(archivo => console.log(archivo.rainbow)).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(base, lim).then(archivo => console.log(`El archivo ${colors.green(archivo)} ha sido creado`)).catch(err => console.log(err));
        break;

}
//crearArchivo(base).then(archivo => console.log(`El archivo ${archivo} ha sido creado`)).catch(err => console.log(err));