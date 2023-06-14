document.getElementById("teste").addEventListener("click", function(){
    window.alert(document.getElementById("testedetitulo").textContent);
});

var largura_script = window.innerWidth;
var altura_script = window.innerHeight;

document.getElementById("teste2").addEventListener("click", function(){
    window.alert(largura_script);
    window.alert(altura_script);
});