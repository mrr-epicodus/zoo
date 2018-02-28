"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimalList_Component = (function () {
    function AnimalList_Component() {
        this.clickSender = new core_1.EventEmitter();
    }
    return AnimalList_Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalList_Component.prototype, "childAnimals", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalList_Component.prototype, "clickSender", void 0);
AnimalList_Component = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n\t<div class=\"form-group\">\n\t<ul>\n\t  <li *ngFor=\"let currentAnimal of childAnimals\">\n\t    <ul>\n\t\t\t\t<h3>Name: {{currentAnimal.name}}</h3>\n\t      <li>Species: {{currentAnimal.species}}</li>\n\t      <li>Age: {{currentAnimal.age}}</li>\n\t      <li>Diet: {{currentAnimal.diet}}</li>\n\t      <li>Location: {{currentAnimal.location}}</li>\n\t      <li>Caretakers: {{currentAnimal.caretakers}}</li>\n\t      <li>Sex: {{currentAnimal.sex}}</li>\n\t      <li>Likes: {{currentAnimal.likes}}</li>\n\t      <li>Dislikes: {{currentAnimal.dislikes}}</li>\n\t      <li><button class=\"btn btn-info\" (click)=\"editButtonHasBeenClicked(currentAnimal)\">Edit!</button></li>\n\t    </ul>\n\t  </li>\n\t</ul>\n  "
    })
], AnimalList_Component);
exports.AnimalList_Component = AnimalList_Component;
//# sourceMappingURL=animal-list.component.js.map