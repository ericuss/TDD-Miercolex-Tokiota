function calcular(valor) {

    if (valor % 3 == 0 && valor % 5 == 0) {
        valor = "FizzBuzz";
    } else if (valor % 3 == 0) {
        valor = "Fizz";
    } else if (valor % 5 == 0) {
        valor = "Buzz";
    }


    return valor;
}

var libreria = new libreriaCalculo();
function calcular2(valor) {
    var self = this;

    if (validar.isValid()) {
        valor = libreria.ejecutar(valor);
    }
    return valor;
}
