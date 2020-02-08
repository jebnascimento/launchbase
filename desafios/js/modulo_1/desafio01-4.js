const user = 
{
  name: 'Mariana',
  transactions: [],
  balance: 0
}

var transactions =
[ 
  {type: 'credit', value: 50},
  {type: 'debit', value: 80},
  {type: 'credit', value: 120}, 
  {type: 'debit', value: 30},
  {type: 'debit', value: 127.7},
  {type: 'debit', value: 300.0},
  {type: 'credit', value: 1000.45}, 
  {type: 'debit', value: 478.9}
]


function createTransaction(obj)
{
  user.transactions.push(obj);
  if(obj.type == 'credit')
    user.balance = user.balance + obj.value
  else
    user.balance = user.balance - obj.value
}

function getHigherTransactionByType(type)
{
  var higherValue = 0
  for(transaction of transactions)
  {
    if(transaction.type == type)
    {
      if(transaction.value > higherValue)
        higherValue = transaction.value
    }
  }
  return(higherValue)
}

for(pos in transactions)
  createTransaction(transactions[pos])


function getAverageTransactionValue()
{
  var avg = 0; 
  for(transaction of user.transactions)
    avg = avg + (transaction.value/transactions.length)
   
  return(avg)
}

function getTransactionsCount()
{
  var debitCount = 0
  var creditCount = 0
  var countTransaction = 
  {
    credit: 0,
    debit: 0
  }

  for(transactions of user.transactions)
  {
    if(transactions.type == 'debit')
      debitCount++
    else
      creditCount++
  }
  countTransaction.credit = creditCount
  countTransaction.debit = debitCount
  return(countTransaction)
}

console.table(user.transactions)
console.log(`User balance is: ${user.balance}`);
console.log(`Highet debit value is: ${getHigherTransactionByType('debit')}.`)
console.log(`Highet credit value is: ${getHigherTransactionByType('credit')}.`)
console.log(`The average value of transactions is: ${getAverageTransactionValue()}.`)
console.log(`The number of credit and debit transactions is, respectively: ${getTransactionsCount().credit}/${getTransactionsCount().debit}.`)

