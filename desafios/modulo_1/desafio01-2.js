// ----Construção e impressão de objetos-----

const empresa = 
{
  nome: 'Rocketseat',
  cor: 'Roxo',
  foco: 'Programação',
  endereço:
  {
    rua: 'Rua Guilherme Gembala',
    numero: 260
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)


// ----Vetores e objetos----

const dev = 
{
  nome: 'Carlos',
  idade: 32,
  techs:
  [
    {
      nome: 'C++',
      especialidade: 'Desktop'
    },
    {
      nome: 'Python',
      especialidade: 'Data Science'      
    },
    {
      nome:'Javascript',
      especialidade: 'Web/Mobile'
    }
  ]
}

console.log(`O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.techs[0].nome} coom especialidade em ${dev.techs[0].especialidade}.`)