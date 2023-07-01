import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendAPIService } from 'src/app/backend-api.service';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  constructor(private api :BackendAPIService){}

  notesForm = new FormGroup({
    "title":new FormControl(""),
    "description":new FormControl("")
  })


   onSubmit(){
    console.log(this.notesForm.value)

    this.api.addItem(this.notesForm.value)
    .subscribe(data =>console.log(data))
    

   }
}
