import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list.component';
import { NewAnimalComponent } from './components/new-animal.component';
import { EditAnimalComponent } from './components/edit-animal.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		AnimalListComponent,
		NewAnimalComponent,
		EditAnimalComponent
	], bootstrap: [
		AppComponent
	]
})

export class AppModule {

}
