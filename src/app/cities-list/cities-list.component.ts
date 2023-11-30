import { Component, Input,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrl: './cities-list.component.css'
})
export class CitiesListComponent implements OnInit{

  @Input() selectedStateId:number | undefined;
  cities:any[] | undefined;
  

  constructor(private apiservice:ApiService){}
  ngOnInit(): void {
    
  }

  ngOnChanges(){
    if(this.selectedStateId){
      this.apiservice.getCitiesByState(this.selectedStateId).subscribe(cities=>{
        this.cities=this.cities;
      })
    }
  }
}
