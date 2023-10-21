// middleware pattern
const passoUm = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passoDois = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passoTres = (ctx) => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        if(middlewares && indice < middlewares.length){
            middlewares[indice](ctx, () => execPasso(indice+1))
        }
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passoUm, passoDois, passoTres)
console.log(ctx)