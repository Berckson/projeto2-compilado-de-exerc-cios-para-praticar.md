//1Faça um Programa que mostre a mensagem "Olá mundo" na tela.
alert("Olá mundo");
//2Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let numero = prompt('Digite um número: ');
alert(`O número informado foi ${numero}`)
//3Faça um Programa que peça dois números e imprima a soma.
let numero1 = parseInt(prompt('Digite um número: '))
let  numero2 = parseInt(prompt('Digite outro número: '))
let soma = (numero1 + numero2)
alert( soma)
//4Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let nota1 = parseInt(prompt('Digite a primeira nota: '))
let nota2 = parseInt(prompt('Digite a segunda nota: '))
let nota3 = parseInt(prompt('Digite a terceira nota: '))
let nota4 = parseInt(prompt('Digite a quarta nota: '))
let media = (nota1 + nota2 + nota3 + nota4) / 4
//5Faça um Programa que converta metros para centímetros.
let  metros = parseInt(prompt( 'Digite o valor em metros: '))
let cent = metros * 100
alert(`${metros} metros = ${cent} centimetros`)
//6Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
let raio = parseInt(prompt('qual é o raio do circulo? '))
let area =(3.14 * raio * raio) 
alert(`o valor da sua area é ${area}`)
//7Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário
let  lado = parseInt(prompt('digite o lado do quadrado' ))
let = area = lado * lado 
let dobro = area * 2
alert("o dobro desta area é "  + dobro)
//8Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let dinheiroH =parseInt(prompt("quanto você ganha por hora? "))
let dinheiroN = parseInt(prompt("quantas horas você trabalhou esse mês? "))
alert(" você ganhou esse mês " + (dinheiroH * dinheiroN) + " reais")
//9Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
let F = parseInt(prompt(" coloque a temperatura em Fahrenheit"))
let c = parseInt( 5 * ((F-32) / 9))
alert(c + "°" + " " + " Celsius ")
//10Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
let C = parseInt(prompt(" coloque a temperatura em graus Celsius"))
let f = parseInt( 9 * ((C-32) / 5))
alert(f + "°" + " " + " Fahrenheit ")
//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:*/
//11 Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.
let nint = parseInt(prompt('digite um numero inteiro'))
let nint2 = parseInt(prompt('digite outro numero inteiro'))
let nreal = parseInt(prompt('digite um numero real'))
alert((nint * 2) + (nint2 / 2) + ' ' + (nint * 3) + (nreal * nreal * nreal) ) 

//12 Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = parseFloat(prompt('qual sua altura?'))
let peso = (72.7*altura) - 58
alert(peso)
//13 Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7
let altura1 = parseFloat(prompt('qual sua altura?'))
let h = (72.7*altura1) - 58
let m = (62.1*altura1) - 44.7
alert( `seu peso ideal para homem é ${h} seu peso ideal para mulher é ${m}`)
//João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

let peixe = parseInt(prompt('quantos quilos de peixe você pegou?'))
let excesso = peixe - 50
let multa = excesso * 4
alert(`a quantidade de Kg de peixe que passou do limite foi ${excesso}\n  e a multa que você deverá pagar ${multa} R$`) 
//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

/*salário bruto.
quanto pagou ao INSS.
quando pagou para o sindicato.
o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
Salário Bruto : R$
INSS (8%) : R$
Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.*/
let ganhoPhora=  parseInt(prompt('quanto você ganha por hora?'))
let horasTrab= parseInt(prompt('quantas horas você trabalha no mês?'))
let salarioBruto=ganhoPhora * horasTrab
let inss = salarioBruto * 8/100
let sindicato = salarioBruto * 5/100
let salarioLiquido = salarioBruto - inss - sindicato
alert(`seu salario bruto é ${salarioBruto}\n o valor pago ao INSS foi ${inss}\n o valor pago ai sindicato foi ${sindicato}\n seu salario liquido é ${salarioLiquido}`)
