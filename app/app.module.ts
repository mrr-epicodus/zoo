import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list.component';
import { NewAnimalComponent } from './components/new-animal.component';
import { EditAnimalComponent } from './components/edit-animal.component';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	], declarations: [
		AppComponent,
		EditAnimalComponent,
		NewAnimalComponent,
		AgePipe,
		AnimalListComponent
	], bootstrap: [
		AppComponent
	]
})

export class AppModule { }
