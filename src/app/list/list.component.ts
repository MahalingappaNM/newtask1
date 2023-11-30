import { Component,OnInit,EventEmitter, Output} from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  @Output() selectedState=new EventEmitter<number>();
  stateForm:FormGroup;
  states: any[] = [];

  constructor( private apiservice:ApiService,private formbuilder:FormBuilder,private router:Router){
    this.stateForm=this.formbuilder.group({
      selectedStateId:['']
    });
     this.apiservice.getAllstates().subscribe(states=>{
      console.log('fff',states)
      this.states=states;
      console.log('this', this.states)
     });
  }

ngOnInit(): void {
}

onStateChange(){
  const stateId = this.stateForm.get('selectedStateId')?.value;
  this.selectedState.emit(stateId);
}

onSubmit(){
  this.router.navigate(['/result'])
}

}
