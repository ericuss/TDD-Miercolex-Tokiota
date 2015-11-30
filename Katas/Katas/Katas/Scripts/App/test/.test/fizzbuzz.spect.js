/// <reference path="../FizzBuzz.js" />

describe('test fizz buzz', function () {
    
    it('envio 1 y me llega 1', function () {
        expect(calcular(1)).toEqual(1);
    });

    it('envio 3 y me llega Fizz', function () {
        expect(calcular(3)).toEqual("Fizz");
    });

    it('envio 5 y me llega Buzz', function () {
        expect(calcular(5)).toEqual("Buzz");
    });

    it('envio 15 y me llega FizzBuzz', function () {
        expect(calcular(15)).toEqual("FizzBuzz");
    });
});