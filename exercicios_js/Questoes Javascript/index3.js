//função receba como parâmetros o número de horas trabalhadas em um mês, o salário por hora e retorne o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
function salarioBruto(horasTrabalhada, salarioHora){
    //let horaSemana = horasTrabalhada / 4;
    let salarioFinal = horasTrabalhada * salarioHora;

    if(horasTrabalhada <= 160){
        console.log(`Salário Total: R$ ${salarioFinal.toFixed(2)}`);
    }
    else{
        let aumentoSalarial = ((horasTrabalhada - 160) * (salarioHora * 0.5) + salarioFinal);
        console.log(`Salário Total: R$ ${aumentoSalarial.toFixed(2)}`);
    };
};

salarioBruto(161,10);