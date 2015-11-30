

function calcular(valor){
    var resultado = "";

    if (valor % 3 == 0) {
        resultado = "Fizz";
    }

    if (valor % 5 == 0) {
        resultado += "Buzz";
    }

    return resultado !== "" ? resultado : valor;
}
