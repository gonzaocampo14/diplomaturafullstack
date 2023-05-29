const distancia = prompt('Ingrese la distancia');
const transportes = ['Pie', 'Bici', 'Colectivo', 'Auto', 'Avion'];

if (parseInt(distancia) <= 1000){
    document.write(transportes[0])
}
else if (parseInt(distancia) > 1000 && distancia <= 10000){
    document.write(transportes[1])
}
else if (parseInt(distancia) > 10000 && distancia <= 30000){
    document.write(transportes[2])
}
else if (parseInt(distancia) > 30000 && distancia <= 100000){
    document.write(transportes[3])
}
else {
    document.write(transportes[4])
}