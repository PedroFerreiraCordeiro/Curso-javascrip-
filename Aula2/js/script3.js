var nomeproduto;
var valorproduto;
var percentualdedesconto;



nomeproduto = prompt ("Digite o nome do protudo","");
valorproduto = prompt ("Digite o valor do produto","");
percentualdedesconto= prompt("Digite porcentagem de desconto","");

percentualdesconto = parseFloat (percentualdedesconto);
valorproduto = parseFloat (valorproduto);

var resultado= valorproduto *percentualdedesconto/ 100;

console.log(nomeproduto);
console.log(valorproduto - resultado);

