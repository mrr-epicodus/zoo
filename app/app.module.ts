import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App_Component } from './app.component';
import { AnimalList_Component } from './components/animal-list.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	], declarations: [
		App_Component,
		AnimalList_Component
	], bootstrap: [
		App_Component
	]
})

export class AppModule {

}
