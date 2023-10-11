botao.addEventListener ("click", function(){

var nota1 = parseInt (av1.value);
var nota2 = parseInt (r1.value);
var nota3 = parseInt (av2.value);
var nota4 = parseInt (r2.value);
var nota5 = parseInt (av3.value);
var nota6 = parseInt (r3.value);
var media1 = 0;
var media2 = 0;
var media3 = 0;
var mediafinal = 0;

if(nota1>=nota2){
    media1 = nota1;
} 
if(nota1<=nota2){
    media1 = nota2;
}

if(nota3>=nota4){
    media2 = nota3;
} 
if(nota3<=nota4){
    media2 = nota4;
}
if(nota5>=nota6){
    media3 = nota5;
} 
if(nota5<=nota6){
    media3 = nota6;
}

alert (media1)

})