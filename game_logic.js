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
const equipWeapon = () => {};

