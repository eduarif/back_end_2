let nomes = ["eduardo", "pedro", 'gabriel', "lucas", "bruno", "eva", "bento", "jose"]

let escolha = 'inicio'
let escolha2 = 'final'

function removerElementos(nomes, onde) {
    if (onde === "inicio"){
        nomes.shift()
        console.log(nomes)
    } 
    else if (onde === "final"){
        nomes.pop()
        console.log(nomes)
    }
}


removerElementos(nomes, "inicio")
removerElementos(nomes, "final")



