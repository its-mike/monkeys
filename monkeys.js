/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

var Monkey = function(name, species, foodsEaten) {
	this.name = name;
	this.species = species;
	this.foodsEaten = foodsEaten;
	this.introduceSelf = function(){
		console.log('My name is ' + this.name + ' and I am a ' + this.species)
	}
	this.speackFoodsEaten = function(){
		console,log('i have eaten ' + this.foodsEaten);

	}
}

Monkey.prototype.introduce = function() {
    console.log('This ' + this.species + ' monkey is called ' + this.name + '. ' + this.name + ' has eaten ' + this.foodsEaten);
};

Monkey.prototype.feed = function(newFood) {
	if(newFood === this.foodEaten) {
		console.log(this.name + " has already eaten this today!")
	} else {
		console.log(this.name + " is a massive fan!")
		this.foodEaten = newFood
	}
};

Monkey.prototype.getFood = function() {
	return this.foodEaten
}

var Monkey1 = new Monkey("Abe", "Gorilla", ["Banannas", "Leaves", "Nuts", "Fruit"])
var Monkey2 = new Monkey("Jack", "Gibbon", ["Chocolate", "Ice-cream", "Pizza", "Donuts"])
var Monkey3 = new Monkey("Jimmy", "Gorilla", ["Lettuce", "Carrots", "Apples", "Pears"])