let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  // 1º bloco: inicio da função tipar os parametros que ela recebe
  firstName: string,
  lastName?: string,
): {
  // 2º bloco: o retorna da função tipar o que ela retorna
  firstName: string;
  lastName?: string;
} {
  return {
    // 3º bloco: A função de verdade, em outras palavras o corpo da função
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 100);
}
