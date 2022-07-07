function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'otavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luis', 'otavio');
pessoa.exibirNome();

export { pessoa };

//Void quando uma funçao ou metodo não volta nada
