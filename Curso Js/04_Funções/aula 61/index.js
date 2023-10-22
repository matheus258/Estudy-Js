function* construtora1(){
    yield 'passo 1';
    yield 'passo 2';
    yield 'passo 3';
    yield 'passo 4';
}

const g1 = construtora1();

function* contador1(){
    let i = 0;
    while (true) {
        yield i;
        i++
    }
}

const g2 = contador1();
console.log(g2.next().value);
console.log(g2.next().value);