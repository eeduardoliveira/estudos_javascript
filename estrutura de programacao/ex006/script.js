// verificar se o usuario pode dirigir
// armazenar varias infos: idade, se tem cnh, nome 
//se tive +18 e n tiver cnh, avise
//se tiver +18 com cnh avise
//se n tiver 18 nem cnh aivse

let idade = 18;
let cnh = false;

if(idade >= 18 && cnh == true) {
    console.log('tem 18 e carteira');
} else if(idade >=18  && cnh == false) {   // oq eu to errando??
    console.log('tem +18 mas n tem carteira');
}else if( idade < 18 && cnh == false){
    console.log('n tem 18 nem carteira');
}

