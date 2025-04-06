// forEach: Uma ação para cada elemento

const frutas = ["maçã", "banana", "uva", "Pêra"];

frutas.forEach(fruta => {
    console.log(`Eu gosto de comer frutas ${fruta}!`);
});


const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(numero => numero*2);
console.log(numeros);
console.log(numerosDobrados);


// filter: Selecionando o que importa
const idades = [10, 18, 15, 22, 16];

const maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade);


// find: Encontrando o tesouro
const pessoas = [
    {nome: "João", idade: 15},
    {nome: "Maria", idade: 30},
    {nome: "Pedro", idade: 18}
];

const pessoaProcurada = pessoas.find(pessoa => pessoa.nome ==="Maria");
console.log(pessoaProcurada);