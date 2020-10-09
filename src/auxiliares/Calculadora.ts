
export var Calculadora = new (function(this:any){
  this.valores = ["+", "-", "/", "*"];
  this.formateo = (input: string) => {
    if (input === "") return "";
    let spliteado = input.split(/[\+x\-\/]/g);
    spliteado.map((numero: string) => {
      return parseInt(numero);
    });
    return spliteado;
  }
  this.operandos = (input: string) => {
    if (input === "") return "";
    return input.match(/[\+x\-\/]/g);
  }
  this.orden = (input:string) => {
    if(input.indexOf("+") !== -1 || input.indexOf("-") !== -1){
      
    }
    if(input.indexOf("x") !== -1 || input.indexOf("/") !== -1){

    }
  }
}as any
)();
