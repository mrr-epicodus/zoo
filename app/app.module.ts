<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list.component';
import { NewAnimalComponent } from './components/new-animal.component';
import { EditAnimalComponent } from './components/edit-animal.component';
=======
import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { AppComponent }        from './app.component';
import { AnimalListComponent } from './components/animal-list.component';
>>>>>>> 0f829509fb7410ec41239b894f345893e1298a62

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
<<<<<<< HEAD
	],
	declarations: [
		AppComponent,
		AnimalListComponent,
		NewAnimalComponent,
		EditAnimalComponent
=======
	], declarations: [
		AppComponent,
		AnimalListComponent
>>>>>>> 0f829509fb7410ec41239b894f345893e1298a62
	], bootstrap: [
		AppComponent
	]
})

export class AppModule {

}
