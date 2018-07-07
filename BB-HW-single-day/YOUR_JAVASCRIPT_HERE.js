// Write your JS here
// xDeclare a variable `hero` and assign it an object ‣
// xHero object should have a name property that is a string ‣
//x Hero object should have a heroic property that is a boolean ‣
// xHero object should have an inventory property that is an empty array ‣
// xHero object should have an health property that is 10 ‣
// xHero object should have a weapon is an object with a type which is a string and damage which is 2
let hero = {
name : 'Stefan',
heroic : true,
inventory : [],
health : 10,
weapon :{
        type:'Hammer',
        damage: 2
}
};
// hero.health = health
// const testCreature = {}

// xAnd (re)assigns the health property of the object the value 10 ‣
// xReturns the object from the function

        

function rest(hero) {
        hero.health = 10;
        return  hero
}








// Adds the weapon object as the last element of the inventory array of the hero-like object

function pickUpItem(hero,hero) {
        hero.push(hero)
        return hero
        }


// And reassigns the `weapon` property to the first element of the inventory array
function equipWeapon(weapon,hero) { hero.weapon = weapon[0];
        return hero.weapon
   
        };
        




// When the bag is clicked it will equip the hero with the first item in the inventory array
