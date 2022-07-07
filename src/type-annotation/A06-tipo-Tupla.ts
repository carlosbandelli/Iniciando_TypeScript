//Tuple
const dadosCliente1: readonly [number, string] = [1, 'Luiz']; //readonly serve para não alterar os valors
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

console.table(dadosCliente1);
console.table(dadosCliente2);
console.table(dadosCliente3);
console.table(dadosCliente4);
