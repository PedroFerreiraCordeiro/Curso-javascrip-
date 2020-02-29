//Criação de 2 variáveis para a relização de calculos matemáticos
var n1;
var n2;
/*
Integarir com o usuário e pedir os valores para n1 e n2
*/
n1 = prompt ("Digite um valor","");
n2 = prompt ("Digite outro valor","");

/*
Para o javascrip realizar a operação aritmética de soma 
é necessário fazer a conversão das variáveis de n1 e n2
para número, pois o retorno do prompt é sempre como texto,
ou seja um comando prompt sempre trata o seu conteúdo como texto.
Faremos a conversão usando o comando 
Parseint(passe para inteiro)
*/
n1 = parseInt (n1);
n2 = parseInt (n2);
soma= n1+n2;
subtrair= n1-n2;
multiplicar= n1 * n2;
dividir= n1 / n2;
resto = n1 % n2;


//vamos apresentar os resultados em tela de console
console.log(soma);
console.log(subtrair);
console.log(multiplicar);
console.log(dividir);
console.log(resto);
