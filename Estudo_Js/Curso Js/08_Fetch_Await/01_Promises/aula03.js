//Funcao para Numero aleatorio.
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

//Funcao que simula algo que vai precisar esperar.
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
        
            resolve(msg.toUpperCase() + ' - Passei na Promise.')
            return;
        }, tempo);
    })
}

/* 
esperaAi('Fase 1', rand( 0, 3))
    .then(valor => console.log(valor))
 */
async function executa() {
    try {
        const fase1 = await esperaAi('Frase 1', rand(1, 3))
        console.log(fase1)
        const fase2 = await esperaAi('Frase 2', rand(1, 3))
        console.log(fase2)
        const fase3 = await esperaAi('Frase 3', rand(1, 3))
        console.log(fase3)
        
        console.log('Terminamos na fase:', fase3 )
        
    } catch(e) {
        console.log('Erro: ',e)
    }
    
}
executa()