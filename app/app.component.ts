import { Component } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
	selector: 'app-root',
	template: `
    <h1>All Animals at the Zoo</h1>

    <animal-list [childAnimalList]="masterAnimalList" (editClickSender)="editAnimal($event)"></animal-list>

    <hr>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (finishedClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  `
})

export class AppComponent {
	selectedAnimal = null;

	masterAnimalList: Animal[] = [

	];

	editAnimal(clickedAnimal) {
		this.selectedAnimal = clickedAnimal;
	}

	finishedEditing() {
		this.selectedAnimal = null;
	}

	addAnimal(newAnimalFromChild: Animal) {
		this.masterAnimalList.push(newAnimalFromChild);
	}
}
