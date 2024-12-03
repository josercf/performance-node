const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const array = [];
for (let i = 0; i < 1e6; i++) {
  array.push(i);
}

// Adicionar testes
suite
  .add('Loop for tradicional', function() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  })
  .add('Método forEach', function() {
    let sum = 0;
    array.forEach(function(value) {
      sum += value;
    });
  })
  .add('Loop for...of', function() {
    let sum = 0;
    for (const value of array) {
      sum += value;
    }
  })
  .add('Método reduce', function() {
    const sum = array.reduce(function(acc, value) {
      return acc + value;
    }, 0);
  })
  // Adicionar listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('O mais rápido é ' + this.filter('fastest').map('name'));
  })
  // Executar de forma assíncrona
  .run({ async: true });
