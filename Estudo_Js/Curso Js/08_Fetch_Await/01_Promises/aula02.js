//Criação de Promessa 
const myPromise = new Promise((resolve, reject)=> {
    const nome = 'Matheus';

    if(nome === 'Matheus'){
        resolve('Usuario matheus encontrado!')
    } else{
        reject('O usuário Matheus não foi encontrado!')
    }
});

const myPromise2 = new Promise((resolve, reject)=> {
    const nome = 'Matheus';

    if(nome === 'Matheus'){
        resolve('Usuario matheus encontrado!')
    } else{
        reject('O usuário Matheus não foi encontrado!')
    }
})

myPromise2
    .then((data) => {
        return data.toLowerCase()
    })
    .then((stringMod) => {
        console.log(stringMod)
    })
    
// Retorno do Catch 

const myPromise3 = new Promise((resolve, reject)=> {
    const nome = 'João';

    if(nome === 'Matheus'){
        resolve('Usuario matheus encontrado!')
    } else{
        reject('O usuário Matheus não foi encontrado!')
    }
})

myPromise3
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log('Aconteceu um erro: '+ err)
    })  


// Resolver varias Promessas com All

const p1 = new Promise((resolve, reject) => {
    resolve('p1 ok!')
})

const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!')
})

const resolveAll = Promise.all([p1,p2,p3])
    .then((data) => {
        console.log(data)
    })


// Resolver varias Promessas com Race

const p4 = new Promise((resolve, reject) => {
    resolve('p4 ok!')
})

const p5 = new Promise((resolve, reject) => {
    resolve('p5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('p6 ok!')
})

const resolveAllrace = Promise.race([p4,p5,p6])
    .then((data) => {
        console.log(data)
    })
