let colors= {
a: 5,
b:  6,


get color() {

return this.a;
},
set color(value) {
 this.a = value;
}
}
colors.color=5;
console.log(colors.color)
if (colors<9){
    colors++;
    console.log(colors)
} 

// objects

let objects = {};

objects.object1 = "cat";
objects.object = "dog";

// the top code is the same as the code on the bottom




let pets = {

    pet1:"dog",
    pet2:"cat",
    // You can also store objects inside of objects as shown here.
    pet3: {"bear" :  {
        fur:"black",
        face:"small",
        size:"three feet"
}
}
//How to remove propertes from objects.
};

pets.pet3.bear = "color:yellow"
delete pets.footer;
pets.footer = "pet1"
console.log(pets)

 // Classes
 //You can also use extends keyword.

 class drinks  {
    constructor(type,sugar){
        this.type = type;
        this.sugar = sugar;


}
 getCO2level(){
    let CO2level = 5*(64);
    console.log("This is the percent of CO2 in your drink:"+ CO2level);
    return CO2level;

    
 }
set healthscale(value){

    this.healthscale = value
}
get healthscale(){

    return this.healthscale;
}
get caps(){
    let mom = this.caps.toUpperCase();
    console.log(mom)

}

 }

let myDrink = new drinks("Carbonated,High,CO2level");
myDrink.getCO2level();
myDrink.healthscale = 5.5
console.log(myDrink.healthscale)
console.log(myDrink.type)

console.log(myDrink.sugar)




 












