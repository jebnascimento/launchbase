const users =
  [
    { nome: 'Carlos', techs: ['HTML', 'CSS'] },
    { nome: 'Jasmine', techs: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', techs: ['HTML', 'Node.js'] }
  ]

function isCss(user) {
  if ((user.techs[0] == 'CSS') || (user.techs[1] == 'CSS'))
    return true
  else
    return false
}

for (let index = 0; index < users.length; index++) {
  let resultado = isCss(users[index])
  if (resultado)
    console.log(`O(A) usuário(a) ${users[index].nome} trabalha com CSS.`)
}

const usuarios =
  [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]


function print() 
{
  var saldo = 0

  for (let index = 0; index < usuarios.length; index++) {
    saldo = calculaSaldo(usuarios[index].receitas, usuarios[index].despesas)

    if (saldo > 0)
      console.log(`${usuarios[index].nome} possui saldo POSITIVO de ${saldo}.`)
    else
      console.log(`${usuarios[index].nome} possui saldo NEGATIVO de ${saldo}.`)
  }
}

function calculaSaldo(receitas, despesas) 
{
  var totalReceitas = somaArray(receitas)
  var totalDespesas = somaArray(despesas)
  return (totalReceitas - totalDespesas)
}

function somaArray(array) 
{
  var total = 0

  for (let index = 0; index < array.length; index++)
    total = total + array[index]
  return (total)
}

print()

