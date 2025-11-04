class Cuenta{
   
    #saldo;

    constructor(saldo){
        this.#saldo = saldo;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }

    depositar(monto){
        this.#saldo += monto;
    }

    retirar(monto){
        if (monto <= this.saldo) {
            this.saldo -= monto;
            return monto;
        } else {
            return "Saldo insuficiente";
        }
    }

    transferir(monto, cuentaDestino){
        const retiro = this.retirar(monto);
        if (typeof retiro === "number"){
            cuentaDestino.depositar(monto); 
            return "Transferencia exitosa";
        }
        else return "No se pudo transferir "+ retiro;
    }
}

class CuentaAhorro extends Cuenta{

    constructor(saldo){
        super(saldo);
    }

    retirar(monto){
        if (this.saldo - monto >= 0){
            this.saldo -= monto;
            return monto;
        } else {
            return "Saldo insuficiente en cuenta de ahorro";
        }
    }

}

class CuentaCorriente extends Cuenta{

    #limite;

    constructor(saldo, limite){
        super(saldo);
        this.#limite = limite;
    }

    retirar(monto){
        if ((this.saldo - monto)>=-this.#limite){
            this.saldo -= monto;
            return monto;
        }
        else return "No se puede retirar, supera el límite de sobregiro";
    }
}

const ahorro = new CuentaAhorro(1000);
const corriente = new CuentaCorriente(500, 200);

console.log(ahorro.transferir(300, corriente));
console.log("Saldo ahorro:", ahorro.saldo);
console.log("Saldo corriente:", corriente.saldo);
console.log(corriente.transferir(1000, ahorro));
console.log("Saldo ahorro:", ahorro.saldo);
console.log("Saldo corriente:", corriente.saldo);