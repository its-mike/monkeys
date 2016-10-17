// //var myHouse = {
// 	address: "10 Wilington Court",
// 	postCode: "E50DQ",
// 	floors: 2,
// 	residents: ["Mike", "Jo"],
// 	city: "London",
// 	rentPrice: 600
// };

// for (var i in myHouse){
// 	console.log(i + " = " + myHouse[i])
// }




// var stock = {
// 	availableItem:
// 	numberOfItems:
// 	value:
// 	items: ["Product1", "Product2", "Product3" ]
// }

// stock
// 	availableItem
// 	numberOfItems
// 	value

// cart
// 	items
// 	value
// 	numberOfItems

// Order
// 	paymentType

// 	A user who had reserved a Zipcar arrives to find it has not 
// 	been returned yet, and customer service transfers her 
// 	reservation to an available car.


// var user = {
// 	name:
// 	address:
// 	ZipcarId:
// 	phoneNumber:
// 	bookingId:
// };
	

// var cars = {
// 	locationSpot:
// 	availability:
// 	registration:
// 	typeOfVehicle:
// 	numberOfseats:
// };
	

// var = reservation {
// 	bookingId:
// 	locationSpot:
// 	typeOfVehicle:
// 	numberOfseats:
// }


//person is a class
// var Person = function (firstName, lastNAme) {
// 	this.firstName = firstName;
// 	this.lastName = lastNAme;
// } ;

// Person.prototype.identity = function(){

// 	console.log(this.lastName + " is " +  this.age + " years old");
// }

// Person.prototype.setAge = function(newAge){
// 	if(newAge < 0){
// 		console.log("A person cannot be negative years old")
// 	} else if(newAge > 140){
// 		console.log("People do not generally live that long!")
// 	}
// 	else{
// 		this.age = newAge
// 	}
// }

// Person.prototype.getAge = function(){
// 	return this.age
// }

// //matt and mike are instances of the class person
// var Matt = new Person("Matt", "Studdert");
// Matt.setAge(25)
// var Mike = new Person("Mike", "Scott");
// Mike.setAge(65)
	
// Mike.identity()



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

var Monkey1 = new Monkey("Abe", "Gorilla", ["Banannas", "Leaves", "Nuts", "Fruit"])
var Monkey2 = new Monkey("Jack", "Gibbon", ["Chocolate", "Ice-cream", "Pizza", "Donuts"])
var Monkey3 = new Monkey("Jimmy", "Gorilla", ["Lettuce", "Carrots", "Apples", "Pears"])









// var Monkey = function(name, species, foodsEaten){
//     this.name = name,
//     this.species = species,
//     this.foodsEaten = foodsEaten,
//     this.introduceSelf = function(){
//         console.log('my name is ' + this.name + ' and i am a ' + this.species + ' monkey');
//     },
//     this.speakFoodsEaten = function(){
//         console.log('i have eaten ' + this.foodsEaten);
//     },
//     this.eatFood = function(newFood){
//         this.foodsEaten.push(newFood);
//     }
// };

// Monkey.prototype.introduce = function() {
//     console.log('This ' + this.species + ' monkey is called ' + this.name + '. ' + this.name + ' has eaten ' + this.foodsEaten);
// };

// // prevent duplicate items being added !! TODO !!
// Monkey.prototype.eatSomething = function(newFood) {
// /*
//     if (this.foodsEaten.indexOf(newFood)) {
//         console.log('i have eaten this before');
//         return false;
//     } else {
//         this.foodsEaten.push(newFood);
//         console.log('have not eaten this before');
//     }
// */
//     this.foodsEaten.push(newFood);
// };

// var monkey1 = new Monkey('Henry', 'Bonobo', ['nuts', 'stuff', 'thangs', 'filet Mignon']);
// var monkey2 = new Monkey('Barry', 'Spider', ['bananas', 'spam', 'eggs']);
// var monkey3 = new Monkey('Mildred', 'Cheeky', 'pizza');

// monkey1.speakFoodsEaten();
// monkey1.eatFood('ham');
// monkey1.introduceSelf();
// monkey1.speakFoodsEaten();
// monkey2.speakFoodsEaten();
// monkey2.eatSomething('melons');
// monkey2.speakFoodsEaten();
// //console.log(monkey2.constructor === Monkey); // is instanceof







