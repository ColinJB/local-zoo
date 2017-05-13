import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
      <div *ngIf="childSelectedAnimal">
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button (click)="closeEditFormClicked()" type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit {{childSelectedAnimal.name}}</h4>
              </div>
              <div class="modal-body">
                <div>
                  <label>Species:</label>
                  <input class="form-control"[(ngModel)]="childSelectedAnimal.species">
                </div>
                <div>
                  <label>Name:</label>
                  <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
                </div>
                <div>
                  <label>Diet:</label>
                  <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">
                </div>
                <div>
                  <label>Location:</label>
                  <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
                </div>
                <div>
                  <label>Sex:</label>
                  <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
                </div>
                <div>
                  <label>Likes:</label>
                  <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
                </div>
                <div>
                  <label>Dislikes:</label>
                  <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
                </div>
                <div>
                  <label>Caretakers required:</label><br>
                  <input class="caretakerInput" type="number" min="1" max="10" [(ngModel)]="childSelectedAnimal.caretakers">
                </div>
                <div>
                  <label>Age:</label><br>
                  <input class="ageInput" type="number" min="1" max="50" [(ngModel)]="childSelectedAnimal.age">
                </div>
              </div>
              <div class="modal-footer">
                <button (click)="closeEditFormClicked()" data-dismiss="modal" class="close" data-dismis="modal">Done</button>
              </div>
            </div>
          </div>
        </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() closeEditButtonClickedSender = new EventEmitter();

  closeEditFormClicked(){
    this.closeEditButtonClickedSender.emit();
  }
}
