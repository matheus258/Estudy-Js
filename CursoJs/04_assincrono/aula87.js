document.write('TESTES COM PROMISSES APERTE F12')

// criação promessa

const myPromisse = new Promise((resolve,reject)=> {
    const nome = 'Matheus';

    if( nome == 'Matheus'){
        resolve('Dados de Usuário correto!')
    } else {
        reject('Dados de Usuário incorreto!')
    }
});

myPromisse.then((data)=>{
    console.log(data);
})

// Encadeamento de then's

const myPromisse2 = new Promise((resolve,reject)=> {
    const nome = 'Matheus';

    if( nome == 'Matheus'){
        resolve('Dados de Usuário correto!')
    } else {
        reject('Dados de Usuário incorreto!')
    }
});
// Convertendo para minusculo
myPromisse2.then((data) => {
    return data.toLowerCase();
})
.then((stringModifiMini)=>{
    console.log("Dado convertido para minúsculo");
    console.log(stringModifiMini)
})
.catch((err)=>{
    console.log(err) // Tratamento de erro
})
// Convertendo para Maiusculo
myPromisse2.then((data)=>{
    return data.toUpperCase();
})
.then((stringMaior)=>{
    console.log(`Dado em maiusculo: ${stringMaior}`);
})
.catch((e)=>{
    console.error(e); // Tratamento do erro
})

// Resolver várias promessas com ALL
const p1 = new Promise((resolve, reject) => {
    resolve('P1, OK');
})
const p2 = new Promise((resolve, reject) => {
    resolve('p2, ok');
})
const p3 = new Promise((resolve, reject) => {
    resolve('p3, ok');
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.table(data);
})

// Resolvendo várias promessas com RACE

// A primeira resolvida vai ser retornada
const p4 = new Promise((resolve, reject) => {
    resolve('P4, OK');
})
const p5 = new Promise((resolve, reject) => {
    resolve('p5, ok');
})
const p6 = new Promise((resolve, reject) => {
    resolve('p6, ok');
})
const resolveAllRace = Promise.race([p4,p5,p6])  .then ((data)=>console.log (data));
