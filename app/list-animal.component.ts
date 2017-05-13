import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template: `
      <div class="panel panel-default">
        <div class="panel-heading">
          <button id="youngButton" class="btn btn-info"(click)="listYoungAnimalsClick()">Young <small>(under 2 years)</small></button>
          <button id="allButton" class="btn btn-primary" (click)="listAllAnimalsClick()">All Animals</button>
          <button id="matureButton" class="btn btn-info" (click)="listMatureAnimalsClick()">Mature <small>(over 2 years)</small></button>
        </div>
        <div class="panel-body">
          <br>
          <ul><br>
            <li class="animalDetails" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
              <p class="species"(click)="currentAnimal.details = true">{{currentAnimal.species}}</p><p class="name"> ({{currentAnimal.name}})</p><br>
              <ul *ngIf="currentAnimal.details === true">
                <li>Age: {{currentAnimal.age}}</li>
                <li>Diet: {{currentAnimal.diet}}</li>
                <li>Location: {{currentAnimal.location}}</li>
                <li>Sex: {{currentAnimal.sex}}</li>
                <li>Likes: {{currentAnimal.likes}}</li>
                <li>Dislikes: {{currentAnimal.dislikes}}</li>
                <li>Caretakers: {{currentAnimal.caretakers}}</li><br>
                <button id="hideDetails" class="btn btn-default" (click)="currentAnimal.details = false">Hide details</button>
                <button id="editRecords" class="btn btn-default" (click)="editButtonHasBeenClicked(currentAnimal)" data-toggle="modal" data-target="#myModal">Edit records</button>
              </ul>
            </li>
            <hr>
          </ul>
        </div>
      </div>
    `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal[];
  @Output() editAnimalSender= new EventEmitter();

  filterByAge: string = "all";

  listAllAnimalsClick(){
    this.filterByAge = "all";
  }

  listYoungAnimalsClick(){
    this.filterByAge = "young";
  }

  listMatureAnimalsClick(){
    this.filterByAge = "mature";
  }

  editButtonHasBeenClicked(currentAnimal: Animal) {
    this.editAnimalSender.emit(currentAnimal);
  }
}
