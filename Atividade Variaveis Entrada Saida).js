//1–5: Variáveis e Entrada/Saída
//Nome completo
//Peça ao usuário seu primeiro nome e sobrenome com prompt e exiba:
//"Olá, [nome completo]!"

let primeiroNome = prompt('Qual seu nome?');
let sobrenome = prompt('Qual seu sobrenome?');
let nomeCompleto = primeiroNome + ' ' + sobrenome;
alert(`Olá, ${nomeCompleto}!`);

//Calculadora de idade
//Peça ao usuário o ano de nascimento e calcule a idade com base no ano atual.

let anoNascimento = parseInt(prompt('Qual seu ano de nascimento?'));
let anoAtual = 2025;
let idade = anoAtual - anoNascimento;
alert(`Sua idade é ${idade}`);

//Área de um retângulo
//Peça a largura e a altura com prompt, calcule a área e mostre:
//"Área do retângulo: X"

let larguraRetangulo = parseFloat(prompt('Qual a largura?'));
let alturaRetangulo = parseFloat(prompt('Qual a altura?'));
let areaRetangulo = larguraRetangulo * alturaRetangulo;
alert(`Área do retângulo: ${areaRetangulo}`);

//Conversor de temperatura
//Peça uma temperatura em Celsius e converta para Fahrenheit.
//Fórmula: F = C * 1.8 + 32

let temperaturaCelsius = parseFloat(prompt('Qual a temperatura em Celsius?'));
let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
alert(`A temperatura em Fahrenheit é ${temperaturaFahrenheit}°F`);


//Conversor de moedas
//Peça um valor em reais e converta para dólares (considere cotação fixa, ex: 1 USD = 5 BRL).

let valorReal = parseFloat(prompt('Quantos reais deseja converter?'));
let cotacaoDolar = 5; // 1 USD = 5 BRL
let valorDolar = valorReal / cotacaoDolar;
alert(`R$ ${valorReal} equivalem a $${valorDolar} dólares.`);