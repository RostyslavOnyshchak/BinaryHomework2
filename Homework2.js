class Fighter{

	// default parameters

	constructor(name, power=5, health=30){
		this.name = name;
		this.power = power;
		this.health = health;
	}
	setDamage (damage=1) {
		this.health -= damage;

		// string interpolation

		console.log(`health: ${this.health} for ${this.name}`);
	}
	hit (enemy, point=1){
		let damage = point * this.power;
		enemy.setDamage(damage);
	}
}

// classes + inheritance + super

class ImprovedFighter extends Fighter {
	doubleHit(enemy, point){

		super.hit(enemy, point*2);
	};
}

var fighter = new Fighter('Rost', 2, 300);
var improvedFighter = new ImprovedFighter('Ivan', 3, 450);

// spread / rest operator; arrow functions

var fight = (fighter, improvedFighter, ...point) => {
	
	// block scoping (let)

	let item = 0;
	for (let value of point){
		if (item%2 === 0){
			fighter.hit(improvedFighter, value);
			if (improvedFighter.health <= 0){
				console.log(`Game over! ${fighter.name} has won`);
				return;
			}
		} else {
			improvedFighter.hit(fighter, value);
			if (fighter.health <= 0){
				console.log(`Game over! ${improvedFighter.name} has won`);
				return;
			}
		}
		item++;
	}
}

fight(fighter, improvedFighter, 23, 34, 32, 45, 34, 43);