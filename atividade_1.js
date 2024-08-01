let notas = [0,0,0,0,0]

let escolha = 'inicio'
let escolha2 = 'final'

function adicionarElementos(notas, adicionar, onde) {
    if (onde === "inicio"){
        notas.unshift(adicionar)
    } 
    else if (onde === "final"){
        notas.push(adicionar)
    }
}


adicionarElementos(notas, 2, "inicio")
adicionarElementos(notas, 4, "final")



console.log(notas)