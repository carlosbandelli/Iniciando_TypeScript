let x: unknown;
// te força a checkar o typo antes de executar uma ação
x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
