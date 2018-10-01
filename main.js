var jaulaCarnivoros = [];
var jaulaHerviboros = [];

//Creo un objeto padre del cual instanciaré los animales
function Animal(name, type) {
    this.name = name;
    this.type = type;
    this.clasify = function() {
        if (type === 'Carnívoro') {
            jaulaCarnivoros.push(name);
        } else if (type === 'Hervíboro') {
            jaulaHerviboros.push(name);
        }
    };
}

//Creo los animales
var leon = new Animal('León', 'Carnívoro');
leon.clasify();
var puma = new Animal('Puma', 'Carnívoro');
puma.clasify();
var perezoso = new Animal('Perezoso', 'Hervíboro');
perezoso.clasify();
var mono = new Animal('Mono', 'Hervíboro');
mono.clasify();

//Hago una lista para meter en una jaula 
console.log(jaulaCarnivoros);
console.log(jaulaHerviboros);