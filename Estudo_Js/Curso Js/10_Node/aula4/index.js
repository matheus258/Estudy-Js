const fs = require('fs').promises;
const path = require('path');

// Mostrar arquivos da pasta.
// fs.readdir(path.resolve(__dirname))
// .then(files => console.log(files))
// .catch(e => console.log(e))

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir)
}

async function walk(files, rootDir){
    for (let file of files) {
        const fileFull = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFull)
        console.log(file, stats.isDirectory())
    }
}

readdir('../../')
