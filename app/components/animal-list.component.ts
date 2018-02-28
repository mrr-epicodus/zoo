import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../models/animal.model';

@Component({
	selector: 'animal-list',
	template: `
  <div class="form-group">
  <h3>Filter Animals By Age: </h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="juvenile">Juvenile Animals</option>
    <option value="Mature">Mature Animals</option>
  </select>
  </div>
    <div *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
			<div class="jumbotron">
				<h2>{{currentAnimal.name}}</h2>
        <p>Species: {{currentAnimal.species}}</p>
        <p>Age: {{currentAnimal.age}}</p>
        <p>Diet: {{currentAnimal.diet}}</p>
        <p>Location: {{currentAnimal.location}}</p>
        <p>Caretakers: {{currentAnimal.caretakers}}</p>
        <p>Sex: {{currentAnimal.sex}}</p>
        <p>Likes: {{currentAnimal.likes}}</p>
        <p>Dislikes: {{currentAnimal.dislikes}}</p>
        <p><button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></p>
			</div>
		</div>
  `
})

export class AnimalListComponent {
	@Input() childAnimalList: Animal[];
	@Output() editClickSender = new EventEmitter();

	filterByAge: string = "allAnimals";

	editButtonHasBeenClicked(animalToEdit: Animal) {
		this.editClickSender.emit(animalToEdit);
	}

	onChange(optionFromMenu) {
		this.filterByAge = optionFromMenu;
	}

}
