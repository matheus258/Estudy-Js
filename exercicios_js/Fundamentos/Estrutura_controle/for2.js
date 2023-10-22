const notas = [5.2, 6.3, 9.0, 1.9, 7.4, 8.0]

for(let i in notas){
    if(i == 3 ){
        console.log('Metade das notas')
        console.log(i, notas[i])
        continue
    }
    console.log(i, notas[i])
}