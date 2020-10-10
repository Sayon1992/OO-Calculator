export const Calculadora = new (function(this:any){
  let resultado = 0;
  this.valores = ["+", "-", "/", "*"];
  this.esNumero = function(n:any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  this.formateo = (input: string) => {
    if (input.length === 0) return 0;
    let spliteado = input.split(" ")
    spliteado.map((numero: string) => {
      if(this.esNumero(numero)){
        return Number(numero);
      }
      return numero;
    });
    return spliteado;
  }
  this.operacionesPrimarias = (input:Array<any>) => {
    let calculo = 0;
    if(input.indexOf("x") !== -1 || input.indexOf("/") !== -1){
      for(let i =0; i < input.length; i++){
        switch(input[i]){
          case "x":
            calculo = input[i-1] * input[i+1];
            input.splice(i-1,3,calculo);
            i--;
            break;
          case "/":
            if (input[i+1] === 0) {
              throw new Error("No se puede dividir por 0");
            } else {
              calculo = input[i-1] / input[i+1];
            }
            input.splice(i-1,3,calculo);
            i--;
            break;
          default:
            break;
        }
      }
    }
    return input;
  }
  this.opreacionesSecundarias = (input:Array<any>) => {
    let calculo = 0;
    if(input.indexOf("+") !== -1 || input.indexOf("-") !== -1){
      for(let i =0; i < input.length; i++){
        switch(input[i]){
          case "+":
            calculo = input[i-1] + input[i+1];
            input.splice(i-1,3,calculo);
            i--;
            break;
          case "-":
            calculo = input[i-1] - input[i+1];
            input.splice(i-1,3,calculo);
            i--;
            break;
          default:
            break;
        }
      }
    }
    return input;
  }
  this.igual = function(input:string){
    if(input.length === 0) return "";

    let array = this.formateo(input);

    if(array.length === 0){
      resultado = 0;
    }

    array = this.operacionesPrimarias(array)
    array = this.opreacionesSecundarias(array)

    if(array.length !== 1 || !Number(array[0])){
      throw new Error("Orden de las operaciones incompleto")
    }
    resultado = array[0]
    return resultado;
  }
}as any
)();
