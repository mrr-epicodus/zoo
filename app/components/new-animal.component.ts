import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './../models/animal.model';

@Component({
	selector: 'new-animal',
	template: `
  <h1>New Animal</h1>

  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Name:</label>
		<div class="col-10">
	  	<input #newName>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Species:</label>
		<div class="col-10">
	  	<input #newSpecies>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Age:</label>
		<div class="col-10">
	  	<input #newAge>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Diet:</label>
		<div class="col-10">
	  	<input #newDiet>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Location:</label>
		<div class="col-10">
	  	<input #newLocation>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal CareTakers:</label>
		<div class="col-10">
	  	<input #newCareTakers>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Sex:</label>
		<div class="col-10">
	  	<input #newSex>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Likes:</label>
		<div class="col-10">
	  	<input #newLikes>
	  </div>
	</div>
  <div class="form-group row">
  <label class="col-2 col-form-label">Enter Animal Dislikes:</label>
		<div class="col-10">
	  	<input #newDislikes>
	  </div>
	</div>
  <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCareTakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCareTakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  `
})

export class NewAnimalComponent {
	@Output() newAnimalSender = new EventEmitter();

	submitForm(species: string, name: string, age: number, diet: string, location: string, careTakers: number, sex: string, likes: string, dislikes: string) {
		var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, careTakers, sex, likes, dislikes);
		this.newAnimalSender.emit(newAnimalToAdd);
	}
}
