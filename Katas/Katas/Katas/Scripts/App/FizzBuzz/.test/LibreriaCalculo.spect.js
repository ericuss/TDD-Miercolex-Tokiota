/// <reference path="../LibreriaCalculo.js" />

describe('test de la libreria de calculos', function () {
    var target;

    beforeEach(function () {
        target = new libreriaCalculo();
    });

    it('tiene las funciones basicas', function () {
        expect(target.ejecutar).not.toBeNull();
        expect(target.tipos).not.toBeNull();
        expect(target.orden.length).toBeGreaterThan(0);
    });

    describe('comprobacion de los tipos de condiciones', function () {
        it('tiene los tipos', function () {
            expect(target.tipos.fizz).not.toBeNull();
            expect(target.tipos.buzz).not.toBeNull();
            expect(target.tipos.fizzbuzz).not.toBeNull();
        });

        beforeEach(function () {
            spyOn(target.tipos.fizz, 'ejecutar').and.returnValue("Fizz");
            spyOn(target.tipos.buzz, 'ejecutar').and.returnValue("Buzz");
            spyOn(target.tipos.fizzbuzz, 'ejecutar').and.returnValue("FizzBuzz");
        });

        describe('fizz', function () {
            it('envio 3 y recibo fizz', function () {
                var dummyParameter = 3,
                    result;

                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Fizz");
                expect(target.tipos.fizz.ejecutar).toHaveBeenCalled();
                expect(target.tipos.buzz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.fizzbuzz.ejecutar).not.toHaveBeenCalled();
            });

            it('envio 6 y recibo fizz', function () {
                var dummyParameter = 3,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Fizz");
                expect(target.tipos.fizz.ejecutar).toHaveBeenCalled();
                expect(target.tipos.buzz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.fizzbuzz.ejecutar).not.toHaveBeenCalled();
            });
        });

        describe('buzz', function () {
            it('envio 5 y recibo Buzz', function () {
                var dummyParameter = 5,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Buzz");
                expect(target.tipos.fizz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.buzz.ejecutar).toHaveBeenCalled();
                expect(target.tipos.fizzbuzz.ejecutar).not.toHaveBeenCalled();

            });

            it('envio 10 y recibo Buzz', function () {
                var dummyParameter = 10,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Buzz");
                expect(target.tipos.fizz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.buzz.ejecutar).toHaveBeenCalled();
                expect(target.tipos.fizzbuzz.ejecutar).not.toHaveBeenCalled();
            });
        });

        describe('FizzBuzz', function () {
            it('envio 15 y recibo FizzBuzz', function () {
                var dummyParameter = 15,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("FizzBuzz");
                expect(target.tipos.fizz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.buzz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.fizzbuzz.ejecutar).toHaveBeenCalled();
            });

            it('envio 30 y recibo FizzBuzz', function () {
                var dummyParameter = 30,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("FizzBuzz");
                expect(target.tipos.fizz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.buzz.ejecutar).not.toHaveBeenCalled();
                expect(target.tipos.fizzbuzz.ejecutar).toHaveBeenCalled();
            });
        });
   
        describe('numeros del 1 al 15', function () {

            it('envio y recibo 1', function () {
                var dummyParameter = 1,
                    result;

                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });

            it('envio y recibo 2', function () {
                var dummyParameter = 2,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });

            it('envio 3 y recibo fizz', function () {
                var dummyParameter = 3,
                    result;

               var  newtarget = new libreriaCalculo();
               result = newtarget.ejecutar(dummyParameter);
               
                expect(result).toEqual("Fizz");
            });

            it('envio y recibo 4', function () {
                var dummyParameter = 4,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });

            it('envio 5 y recibo buzz', function () {
                var dummyParameter = 5,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Buzz");
            });

            it('envio 6 y recibo Fizz', function () {
                var dummyParameter = 6,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Fizz");
            });

            it('envio y recibo 7', function () {
                var dummyParameter = 7,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });

            it('envio y recibo 8', function () {
                var dummyParameter = 8,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });

            it('envio 9 y recibo Fizz', function () {
                var dummyParameter = 9,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Fizz");
            });

            it('envio 10 y recibo Buzz', function () {
                var dummyParameter = 10,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Buzz");
            });

            it('envio y recibo 11', function () {
                var dummyParameter = 11,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });

            it('envio 12 y recibo Fizz', function () {
                var dummyParameter = 12,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("Fizz");
            });


            it('envio y recibo 13', function () {
                var dummyParameter = 13,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });

            it('envio y recibo 14', function () {
                var dummyParameter = 14,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual(dummyParameter);
            });
            it('envio 15 y recibo FizzBuzz', function () {
                var dummyParameter = 15,
                    result;
                result = target.ejecutar(dummyParameter);
                expect(result).toEqual("FizzBuzz");
            });
        });
    });
});
