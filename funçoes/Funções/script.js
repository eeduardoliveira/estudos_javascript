// função é uma estrutura de codigo para evitar repetições
// parametros são definidios por ()
//a função fica entre {} 
// geralmente retorna valores 

function escreverNoConsole () {
    console.log("escrevendo no console")
}

escreverNoConsole ();


// a função pode ser feita a partir de uma variavel
let textp = function falarNoConsol (text) {
    console.log(text);
}

 textp("teste")

 //Teste de função 
  const soma = function (a, b) {
      return a + b;
    }
    
    console.log(soma(5,5));

    // Teste
    const acesso = function (nome) {
        if (nome == "Eduardo"){
            return "Acesso permitido";
        }
         return "Acesso Negado"
    }
    console.log(acesso("Eduardo"));

    // Arrow function é um outro jeito de escrever funções
    //utilizada nos frameworks modenos

    const parOuImpar = (n) =>{
        return n % 2 == 0;
    };
    
    console.log("É verdade que o numero é par?", parOuImpar(10));
// arrow function

    const parOuImpar2 = n =>{
        return n % 2 == 0;
    }
    console.log(parOuImpar2(10));

    //com valor default

    function repeatPhrase( frase, n =2){
        for( let i = 1; i <= n;i++){
            console.log(frase + " " + i);
        }
    }
    repeatPhrase("vrau", 2);

    //closures 

    function armazenaSoma(x){
        return y => x + y;
    }

    let somar = armazenaSoma(8);
    console.log(somar(4));

    