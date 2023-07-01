import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendAPIService } from 'src/app/backend-api.service';



@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {


  notesForm!: FormGroup

  constructor(private api: BackendAPIService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {


    this.notesForm = new FormGroup({
      "title": new FormControl(""),
      "description": new FormControl("")
    })
  }
  item: any = {};
  id: any





  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.api.getOneItem(this.id).subscribe((res: any) => {
      this.item = res.data
      console.log(this.item)

      this.notesForm = this.fb.group({
        "title": res.data.title,
        "description": res.data.description
      })

    })
  }




  onSubmit() {
    console.log(this.notesForm.value)

    this.api.editItem(this.notesForm.value, this.id)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/'])
      }
      )


  }

}
