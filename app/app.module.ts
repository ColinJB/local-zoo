import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewAnimalComponent } from './new-animal.component';
import { ListAnimalComponent } from './list-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { FormsModule }  from '@angular/forms';
import { AgePipe } from './age.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewAnimalComponent, ListAnimalComponent, EditAnimalComponent, AgePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
