import { Component } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
	selector: 'app-root',
	template: `
	    <div class="container">
			<h1>ANIMALS</h1>
			<animal-list></animal-list>
			</div>
  `
})

export class App_Component {
	animals_master: Animal[] = [

	];

}
