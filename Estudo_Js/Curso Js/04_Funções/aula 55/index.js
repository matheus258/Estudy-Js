//IIFE 
(function(){
    const sobrenome = 'Marques';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome("Matheus"))
    }
    falaNome();
})();

