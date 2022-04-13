

function positions (firstPlace, secondPlace, lastPlace) {
    let vencedores = [firstPlace, secondPlace, lastPlace]
    if (vencedores[2] == 'Daniel'){
        vencedores.splice(1,1)
        vencedores.push('Manoel')} 
        else {
        return vencedores}
        {
    console.log('1 - Colocado: ' + vencedores[0]);
    console.log('2 - Colocado:' + vencedores[1]);
    console.log('3 - Colocado:' + vencedores[2]);
        }


}

positions('Rafael', 'Manoel', 'Daniel')