const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('¡Bienvenido a tu convertidor de moneda!');
console.log('Aqui podras convertir dólares a euros.');

rl.question('Por favor, ingrese la cantidad en dólares: ', (input) => {
  // Procesamos la entrada del usuario
  const cantidadDolares = parseFloat(input);

  // Verificamos si la entrada es un número válido
  if (isNaN(cantidadDolares)) {
    console.log('La entrada no es un número válido.');
    rl.close();
    return;
  }

  // Definimos la tasa de cambio
  const tasaDeCambio = 0.93;

  // Realizar el cálculo de conversión
  const cantidadEuros = cantidadDolares * tasaDeCambio;

  // Mostrar el resultado
  console.log(`${cantidadDolares} dólares son equivalentes a ${cantidadEuros} euros.`);

  rl.close();
});
