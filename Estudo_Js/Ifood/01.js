// Troposfera: essa camada se estende até 20 km do solo;
// Estratosfera: a estratosfera chega a 50 km do solo;
// Mesosfera: o topo da mesosfera fica a 80 km do solo;
// Termosfera: o topo da termosfera fica a  450 km acima da Terra;
// Exosfera: a camada superior da atmosfera fica a  900 km acima da Terra.

let altitude = 20;

if (altitude <= 20){
    console.log('TROPOSFERA');
} else if (altitude <= 50){
    console.log('ESTRATOSFERA');
} else if (altitude <= 80){
    console.log('MESOSFERA');
} else if (altitude <= 450){
    console.log('TERMOSFERA');
} else if (altitude <= 900){
    console.log('EXOSFERA')
}
