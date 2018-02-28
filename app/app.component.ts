import { Component } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
	selector: 'app-root',
	template: `
	    <div class="container">
				<h1>ANIMALS</h1>
				<animal-list [childAnimals]="masterAnimals" (editClickSender)="editAnimal($event)"></animal-list>

				<h2>UPDATE ANIMAL</h2>
				<edit-animal [childAnimals]="selectedAnimal" (finishedClickedSender)="finishedEditing()"></edit-animal>

				<h2>NEW ANIMAL</h2>
				<new-animal [animal-list]="masterAnimals" (editClickSender)="editAnimal($event)"></new-animal>
			</div>
  `
})

export class AppComponent {
	animals: Animal[] = [
		new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
		new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
		new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Delicate roots and leaves", "Loud Noises", "Female", )
	];

	selectedAnimal = null;

	editAnimal(clickedAnimal) {
		this.selectedAnimal = clickedAnimal;
	}

}
