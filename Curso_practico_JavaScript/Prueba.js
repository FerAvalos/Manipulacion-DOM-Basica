let name='Juan'
let lastName='Marcus'
console.log('Mi nombre completo es: ' + name + " " + lastName)
console.log(`Mi nombre completo es: ${name} ${lastName}`)

function ConstruirNombre (name, lastName, nickname) {
    console.log("Mi nombre es " + name + ' ' + lastName + ", pero prefiero que me digas " + nickname + ".");
}

let Prueba = ConstruirNombre('Diego', 'Julius', 'Juanma')