let frutas = ["abacate", "uva", "manga", "jabuticaba", "pera", "melancia"]

function filtrarPalavrasLongas(frutas){
    const curtas = frutas.filter((fruta) => fruta.length > 6);
    console.log(curtas)
}

console.log(frutas)
filtrarPalavrasLongas(frutas)