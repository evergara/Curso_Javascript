class Rectangulo{
    #are;

    constructor(base, altura){
        this.base = base;
        this.altura = altura;

        this.#calcularArea();
    }

    #calcularArea(){
      this.#are = this.base * this.altura;
    }

    get getArea(){
        return this.#are;
    }
}

const rectangulo = new Rectangulo(10, 15);
//Esto genera un error
//rectangulo.#calcularArea()
console.log('El area del rectangulo es: ', rectangulo.getArea);
console.log(`El area del rectangulo es:  ${rectangulo.getArea}`);