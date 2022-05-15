var ii =  3.1416;


function resultado() {
    var  radio = document.getElementById('radio').value;
    var resultado = ii*(radio*radio);
    alert("El area del radio es: " + resultado);
};

function longitud() {
    var  radio = document.getElementById('radio').value;
    var resultado = (2*ii)*radio;
    alert("La Longitud del radio es: " + resultado);
};
