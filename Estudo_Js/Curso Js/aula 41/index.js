//Essa Função retorna o maior numero.
function max(num1, num2) {
    if (num1 < num2){
        return num2;
    }else{
        return num1;
    }
}
const resultado = max(100, 10);
console.log(resultado,`é o meior numero.`);