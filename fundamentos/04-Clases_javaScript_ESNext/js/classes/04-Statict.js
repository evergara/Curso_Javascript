class Recipe {
    static _count = 0;

    static get getNumberInstance(){
        return `Instacias creadas ${Recipe._count}`;
    }

    static bestRanking(){
        console.log('My receta: ', this.name);
        console.log('Desde el metodo static puedes ver tus instancias', Recipe._count);
    }

    name;
    ingredient = [];

    constructor(name){
        this.name = name;
        Recipe._count++;
    }

    set setIngredient(ingredient){
       this.ingredient.push(ingredient);
    }
}



const arepa = new Recipe('Arepa de camarones')
arepa.setIngredient = '1/2 kl de camarones';
arepa.setIngredient = '3 kl masa de maiz'


console.log(arepa);
console.log('Conteo de las instancias', Recipe._count);
console.log(Recipe.getNumberInstance);
console.log(Recipe.bestRanking());