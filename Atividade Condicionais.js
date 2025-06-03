//6–10: Condicionais
//Par ou ímpar
//Peça um número e diga se ele é par ou ímpar.

let numeroEscolha = parseInt(prompt('Digite um numero'));

if (numeroEscolha % 2 === 0) {
    alert(`O ${numeroEscolha} eh par`);
}
else {
    alert(`O ${numeroEscolha} eh impar`);
};

//Maior de dois números
//Peça dois números e diga qual é o maior (ou se são iguais).

let numeroX = parseInt(prompt('Escolha o Primeiro Numero'));
let numeroY = parseInt(prompt('Escolha o Segundo Numero'));

if (numeroX > numeroY) {
    alert(`O ${numeroX} é maior que ${numeroY}.`);
} else if (numeroX < numeroY) {
    alert(`O ${numeroY} é maior que ${numeroX}.`);
} else {
    alert('Os números são iguais.');
}

//Nota do aluno
//Peça uma nota e diga:
//Aprovado (nota ≥ 7)
//Recuperação (5 a <7)
//Reprovado (<5)

let nota = parseFloat(prompt('Qual a nota?'));

if (nota >= 7) {
    alert('Aprovado')
} else if (nota >= 5 && nota <= 7) {
    alert('Recuperacao')
} else if (nota < 5) {
    alert('Reprovado')
};

//Verificador de senha
//Peça uma senha com prompt. Se for "1234", exiba "Acesso permitido", senão "Acesso negado".

let senha = prompt('Qual a senha?');

if (senha === '1234') {
    alert('Acesso Permitido');
} else {
    alert('Acesso Negado');
}

//Classificação por idade
//Peça a idade e classifique:
//Até 12 anos: criança
//13 a 17: adolescente
//18+: adulto

let idade = parseInt(prompt('Qual a idade?'));

if (idade <= 12) {
    alert('Crianca');
} else if (idade >= 13 && idade <= 17) {
    alert('Adolescente');
} else {
    alert('Adulto');
}
