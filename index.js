var calcularRank = require('./calculadoraRank')
var readline = require('readline')

var args = process.argv.slice(2)
if (args.length >= 2) {
  var v = Number(args[0])
  var d = Number(args[1])
  var out = calcularRank(v, d)
  console.log(out)
} else {
  var rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  rl.question('Vitórias: ', function(vStr) {
    rl.question('Derrotas: ', function(dStr) {
      var v = parseInt(vStr)
      var d = parseInt(dStr)
      var mensagem = calcularRank(v, d)
      console.log(mensagem)
      rl.close()
    })
  })
}
