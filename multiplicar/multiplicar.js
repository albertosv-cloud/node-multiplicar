//requires
const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');
// const fs = require('express');
// const fs = require('./fs'); --> archivos locales

// let base = 7;
let crearArchivo = (base, lim) => {

    return new Promise((resolve, reject) => {

        //Validaciones previas 
        Validaciones(base).catch(err => console.log(err));

        let contenido = '';
        for (let i = 1; i <= lim; i++) {
            contenido += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla${base}-.txt`, contenido, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);
        });

    });
}

let ListarConsulta = (base, lim) => {
    return new Promise((resolve, reject) => {

        //Validaciones Previas
        Validaciones(base).catch(err => console.log(err));

        let contenido = ''
        for (let i = 1; i <= lim; i++) {
            contenido += (`${base} * ${i} = ${base * i} \n`);
        }
        resolve(contenido);
    });
}

let Validaciones = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base))
            reject('El valor ingresado no es de tipo Numerico');
        return;
    });
};

module.exports = { crearArchivo, ListarConsulta }