var libreriaCalculo = (function () {
    function libreriaCalculo() {
        var self = this;
        self.orden = [self.tipos.fizzbuzz, self.tipos.fizz, self.tipos.buzz];
    }


    libreriaCalculo.prototype.ejecutar = function (valor) {
        var self = this,
            resultado = valor;

        for (var i = 0, len = self.orden.length; i < len && resultado === valor; i++) {
            if (self.orden[i].puedeEjecutar(valor)) {
                resultado = self.orden[i].ejecutar(valor);
            }
        }

        return resultado;
    };

    libreriaCalculo.prototype.tipos = {
        fizzbuzz: {
            puedeEjecutar: function (valor) {
                return valor % 3 === 0 && valor % 5 === 0;
            },
            ejecutar: function () {
                return "FizzBuzz";
            }
        }, fizz: {
            puedeEjecutar: function (valor) {
                return valor % 3 === 0;
            },
            ejecutar: function () {
                return "Fizz";
            }
        },
        buzz: {
            puedeEjecutar: function (valor) {
                return valor % 5 === 0;
            },
            ejecutar: function () {
                return "Buzz";
            },
        }
    };

    return libreriaCalculo;
})();