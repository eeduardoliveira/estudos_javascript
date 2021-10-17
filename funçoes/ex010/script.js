let a;

function num(a){
    for ( let i = 1 ; i <= 10; i--){
        if( a % 2 == 0 ){
            console.log(a, "É par")
            a--;
        break;
        }else{
        console.log(a, "n é par")
        }
    }
}

num(10);

