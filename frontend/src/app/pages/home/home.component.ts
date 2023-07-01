import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/backend-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  cards:any = []; 
  constructor(private api:BackendAPIService, private route : Router){}

  ngOnInit(){
    this.api.getCards().subscribe((res:any)=>{
      this.cards = res.data;
    })
  }

  editItem(id:any){

    this.route.navigate(['/editItem/' +id])

  }


}
