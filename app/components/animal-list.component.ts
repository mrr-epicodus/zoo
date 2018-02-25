import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../models/animal.model';

@Component({
	selector: 'animal-list',
	template: `

  `
})

export class AnimalList_Component {
	@Input() animals_child: Animal[];
	@Output() clickSender = new EventEmitter();

	animals: Animal[] = [
		new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
		new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
		new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Delicate roots and leaves", "Loud Noises", "Female", )
	];
}
