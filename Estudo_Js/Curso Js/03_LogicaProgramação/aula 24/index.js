// if, else if, else

// If pode ser usado sozinho, porém o else ifs ou else sempre vou depender de um if antes. O else apenas uma vez depois do if.

const hora = 17;

if (hora <= 11) {
    console.log("Bom dia!");
}
else if (hora >= 12 && hora <= 17) {
    console.log("Boa Tarde!");
}
else if(hora >= 18 && hora <= 23){
    console.log("Boa noite!");
}
else{
    console.log("Olá");
}
