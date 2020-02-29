//Vamos criar uma janela de alerta para saudar os usuários
alert("Olá, seja bem vindo!");
/*
Vamos pedir ao usuário que digite o seu nome e depois mostraremos em uma 
caixa de alerta.
para executar a operação iremos guardar o nome de usuário em umva variável. essa variável terá o nome de "nome"
*/
var nome = prompt("Digite o seu nome","Escreva seu nome aqui");
alert(nome);

document.getElementById("titulo").innerHTML=nome;