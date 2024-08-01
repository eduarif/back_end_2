let numeros = []

for (let i = 0; i<10; i++){
    numeros.unshift(Math.round(Math.random() * 10))
}

const nX2 = numeros.map((n) => n *2)

console.log(numeros)
console.log(nX2)