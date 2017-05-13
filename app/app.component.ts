import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1 id="header"><span id="big">Lou's Zoo</span><span id="small"> Animal Tracker</span></h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
      <div class="col-md-6">
        <list-animal [childAnimalList]="masterAnimalList" (editAnimalSender)="showEditForm($event)"></list-animal>
        <edit-animal [childSelectedAnimal]="selectedAnimal"
        (closeEditButtonClickedSender)="closeEditForm()"></edit-animal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  masterAnimalList: Animal[] = [];

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  showEditForm(currentAnimal){
    this.selectedAnimal = currentAnimal;
  }

  closeEditForm(){
    this.selectedAnimal = null;
  }
}
