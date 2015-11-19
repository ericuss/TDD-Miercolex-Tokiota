/// <reference path="../LibreriaCalculo.js" />
/// <reference path="../FizzBuzz.js" />

describe('Tests del fichero FizzBuzz', function () {
    describe('tests de la funcion de Calcular', function () {
        it('Envio 1 recibo 1', function () {
            var dummyParameter = 1,
                result = calcular(dummyParameter);
            expect(result).toEqual(dummyParameter);
        });

        it('Envio 3 recibo Fizz', function () {
            var dummyParameter = 3,
                result = calcular(dummyParameter);
            expect(result).toEqual("Fizz");
        });

        it('Envio 5 recibo Buzz', function () {
            var dummyParameter = 5,
                result = calcular(dummyParameter);
            expect(result).toEqual("Buzz");
        });

        it('Envio 15 recibo FizzBuzz', function () {
            var dummyParameter = 15,
                result = calcular(dummyParameter);
            expect(result).toEqual("FizzBuzz");
        });
    });
    describe('tests de la funcion de Calcular2', function () {
        beforeEach(function () {
            validar = getMockValidacion();
        });

        function getMockValidacion() {
            return {
                isValid: function () {
                    return true;
                }
            };
        }

        it('Se llama la funcion de la libreria de calculo', function () {
            spyOn(libreria, 'ejecutar');

            calcular2();

            expect(libreria.ejecutar).toHaveBeenCalled();
        });

        it('Envio 1 recibo 1', function () {
            var dummyParameter = 1,
                result = calcular2(dummyParameter);
            expect(result).toEqual(dummyParameter);
        });

        it('Envio 3, se llama a la funcion de ejecutar de Fizz y no a la de Buzz', function () {
            var dummyParameter = 3,
                result;
            spyOn(libreria.tipos.fizz, 'ejecutar');
            spyOn(libreria.tipos.buzz, 'ejecutar');

            result = calcular2(dummyParameter);

            expect(libreria.tipos.fizz.ejecutar).toHaveBeenCalled();
            expect(libreria.tipos.buzz.ejecutar).not.toHaveBeenCalled();
        });

        it('Envio 3 recibo Fizz', function () {
            var dummyParameter = 3,
                result;

            result = calcular2(dummyParameter);

            expect(result).toEqual("Fizz");
        });

        it('Envio 5, no se llama a la funcion de ejecutar de Fizz y si se llama a la de Buzz', function () {
            var dummyParameter = 5,
                result;
            spyOn(libreria.tipos.fizz, 'ejecutar');
            spyOn(libreria.tipos.buzz, 'ejecutar');

            result = calcular2(dummyParameter);

            expect(libreria.tipos.fizz.ejecutar).not.toHaveBeenCalled();
            expect(libreria.tipos.buzz.ejecutar).toHaveBeenCalled();
        });
        it('Envio 5 recibo Buzz', function () {
            var dummyParameter = 5,
                result = calcular2(dummyParameter);
            expect(result).toEqual("Buzz");
        });

        it('Envio 15 recibo FizzBuzz', function () {
            var dummyParameter = 15,
                result = calcular2(dummyParameter);
            expect(result).toEqual("FizzBuzz");
        });
    });
});