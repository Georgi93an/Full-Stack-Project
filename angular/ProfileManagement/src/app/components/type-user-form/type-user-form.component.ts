import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from 'src/app/model/type-user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html'
})
export class TypeUserFormComponent implements OnInit {
  typeUser:TypeUser=new TypeUser();
  errormessage!:any;

  constructor(private service:ProfileService,
    private activeRoute:ActivatedRoute,private router:Router){}

ngOnInit(){
  this.activeRoute.params.subscribe(params =>{
    let id: number = params['id'];
    if(id){
      this.service.getTypeUserById(id).
      subscribe(response=>this.typeUser=response)
    }
  })
}
  onSubmit(){
      this.service.createTypeUser(this.typeUser).
      subscribe(r =>{
        this.router.navigate(['/typeuser'])
      },(error)=>{
        this.errormessage="The Type of User Already Exists"
      });
 
   
  }
}
