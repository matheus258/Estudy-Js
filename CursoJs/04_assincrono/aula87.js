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