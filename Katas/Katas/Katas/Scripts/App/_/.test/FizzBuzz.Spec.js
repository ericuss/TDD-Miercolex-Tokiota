/// <reference path="../FizzBuzz.js" />



describe('Test de la funcion calcular', function () {

    it('esta denifido', function () {
        expect(calcular).toBeDefined();
    });

    it('envio y recibo 1', function () {
        var dumyParameter = 1,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual(dumyParameter);
    });

    it('envio y recibo 2', function () {
        var dumyParameter = 2,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual(dumyParameter);
    });

    it('envio 3 y recibo Fizz', function () {
        var dumyParameter = 3,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual("Fizz");
    });

    it('envio y recibo 4', function () {
        var dumyParameter = 4,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual(dumyParameter);
    });

    it('envio 5 y recibo Buzz', function () {
        var dumyParameter = 5,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual("Buzz");
    });

    it('envio 6 y recibo Fizz', function () {
        var dumyParameter = 6,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual("Fizz");
    });


    it('envio y recibo 7', function () {
        var dumyParameter = 7,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual(dumyParameter);
    });

    it('envio 15 y recibo FizzBuzz', function () {
        var dumyParameter = 15,
            resultado;

        resultado = calcular(dumyParameter);
        expect(resultado).toEqual("FizzBuzz");
    });

});