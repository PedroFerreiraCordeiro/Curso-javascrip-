//Vamos criar uma janela de alerta para saudar os usuários
alert("Olá, seja bem vindo!");
/*
Vamos pedir ao usuário que digite o seu nome e depois mostraremos em uma 
caixa de alerta.
para executar a operação iremos guardar o nome de usuário em umva variável. essa variável terá o nome de "nome"
*/
var nome = prompt("Digite o seu nome","Escreva seu nome aqui");
alert(nome);

/*
Para apresentar o nome do usuário na página HTML foi necessário Criar algum elemento de "link|Relação"
da página HTML Com o javascrip.
Para esse vinculo usamos o comando document.GetelementById
-Document refere-se ao body da página HTML
-get (obter) Element(Elemento)by(por) id(identificação)
-inner (internet, ou seja, dentro)HTML
então pegamos um elemnto que está body por seu id e inserimos contéudo em html, que neste caso é o nome do usuário 
*/

document.getElementById("titulo").innerHTML=nome;