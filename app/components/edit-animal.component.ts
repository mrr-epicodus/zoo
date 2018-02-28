import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../models/animal.model';

@Component({
	selector: 'edit-animal',
	template: `
	<div class="container">

		<div *ngIf="childSelectedAnimal">
			<h3>{{childSelectedAnimal.name}}</h3>
			<p>Species: {{childSelectedAnimal.species}}</p>
			<hr>
			<h3>Edit Animal</h3>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Name:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.name">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Species:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.species">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Age:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.age">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Diet:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.diet">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Location:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.location">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">CareTakers:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.careTakers">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Sex:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.sex">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Likes:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.likes">
				</div>
			</div>

			<div class="form-group row">
				<label class="col-2 col-form-label" for="example-text-input">Dislikes:</label>
				<div class="col-10">
					<input [(ngModel)]="childSelectedAnimal.dislikes">
				</div>

			</div>
			<button (click)="doneButtonClicked()">Done</button>
		</div>
	</div>
  `
})

export class EditAnimalComponent {
	@Input() childSelectedAnimal: Animal;
	@Output() finishedClickedSender = new EventEmitter();

	doneButtonClicked() {
		this.finishedClickedSender.emit();
	}
}
