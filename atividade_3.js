let numeros = []

for (let i = 0; i<10; i++){
    numeros.unshift(Math.round(Math.random() * 10))
}

console.log(numeros)

let soma = 0

numeros.forEach(numero => {
    soma = soma + numero

    //console.log(numero)
});

console.log(soma)
