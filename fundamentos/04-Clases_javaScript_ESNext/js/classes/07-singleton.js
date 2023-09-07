class Conexion {
    static #instance;

    constructor(){

    }

    getInstance(){
        if(!Conexion.#instance){
            Conexion.#instance = new Conexion();
        }
        return Conexion.#instance;
    }
 }

 class Heroe{
    static #instance;
    name;

    constructor(name = ''){
        if(!!Heroe.#instance){
            return Heroe.#instance;
        }
        //Esto es importante lo pongo aqui para que salga una vez, 
        //para entender porque del !!
        const a = undefined;
        console.log({a});
        console.log(!a);
        console.log(!!a);
        Heroe.#instance = this;
        this.name = name;
    }
 }

 const ironMan = new Heroe('Iron Man');
 console.log(`La instancia 1 es ${ironMan.name}`);

 const spiderMan = new Heroe('Spider Man');
 console.log(`La instancia 2 es ${spiderMan.name}`);

 const blackPanther = new Heroe('Black Panther');
 console.log(`La instancia 2 es ${blackPanther.name}`);