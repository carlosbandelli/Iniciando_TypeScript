/* eslint-disable prefer-const */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line prefer-const
let nome = 'Carlos';
let idade = 0b1010;
let boolean = true;
let simbolo = Symbol;

// Array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'Carlos',
};

console.table(pessoa.nome);
console.table(arrayDeNumeros);
console.table(arrayDeStrings);

// Funçoes
//Tipagem de parametros //Tipagem de retorno
function soma(x: number, y: number): number {
  return x + y;
}
// começa com tipagem então usamos um arrow function
const soma2: (x: number, y: number) => number = (x, y) => x + y;
