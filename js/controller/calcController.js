class CalcController {

    constructor() {

        //O atributo ficará privado por convensão se iniciado por "_"
        this._displayCalc = "0";
        this._dataAtual;
    }

    get displayCalc() {
        return this._displayCalc;
    }
    set displayCalc() {
        this._displayCalc = valor;
    }
    get dataAtual() {
        return this.dataAtual
    }
    set dataAtual() {
        this._dataAtual = valor;
    }


}