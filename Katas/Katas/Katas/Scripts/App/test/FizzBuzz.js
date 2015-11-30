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