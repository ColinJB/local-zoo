import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1 id="new">New Animal</h1>
  <div>
    <label>Species:</label>
    <input class="form-control" #newSpecies required>
  </div>
  <div>
    <label>Name:</label>
    <input class="form-control" #newName required>
  </div>
  <div>
    <label>Diet:</label>
    <input class="form-control" #newDiet required>
  </div>
  <div>
    <label>Location:</label>
    <input class="form-control" #newLocation required>
  </div>
  <div>
    <label>Sex:</label>
    <input class="form-control" #newSex required>
  </div>
  <div>
    <label>Likes:</label>
    <input class="form-control" #newLikes>
  </div>
  <div>
    <label>Dislikes:</label>
    <input class="form-control" #newDislikes>
  </div>
  <div>
  <label>Caretakers required:</label><br>
  <input class="caretakerInput" type="number" min="1" max="10" #newCaretakers required>
  </div>
  <div>
    <label>Age:</label><br>
    <input class="ageInput" type="number" min="1" max="50" #newAge required>
  </div><br>
  <div>
    <button id="submitNew" class="btn btn-lg btn-default btn-block"(click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Submit Animal</button>
  </div><br><hr>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
