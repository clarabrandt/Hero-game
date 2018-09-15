// Write your JS here
const hero = {
    name: 'Maximus',
    heroic: true,
    inventory: [],
    health: 10, 
    weapon: {
        type: 'fork',
        damage: 2,
    }
};

const rest = (recover) => {
    recover.health = 10;
    return recover;
};

const pickUpItem = (hero, item) => {
    hero.inventory.push(item);
};

const equipWeapon = (hero) => {
    if (hero.inventory.length > 0){
        hero.weapon = hero.inventory[0];
    }
};
let changeName = (hero) => {
    const nameInput = document.getElementById('name');
    const newName = nameInput.value; 
    hero.name = newName;
    displayStatus();
};
const displayStatus = () => {
    document.write(JSON.stringify(hero));
}
displayStatus();