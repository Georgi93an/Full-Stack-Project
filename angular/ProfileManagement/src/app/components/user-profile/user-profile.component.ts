import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from 'src/app/model/type-user';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  users:User=new User();

  typeUser:TypeUser[]=[];
  constructor(private service:ProfileService,
    private activeRoute:ActivatedRoute,private router:Router){}

  ngOnInit() {
        this.service.getTypeUser().subscribe(response =>{
        this.typeUser = response;
        });
       

    this.activeRoute.params.subscribe(params =>{
      let id: number = params['id'];  
        this.service.getUserById(id).
        subscribe(response=>this.users=response)      
    });
  }
  viewType(opt1:TypeUser,opt2:TypeUser):boolean {
    if(opt1===undefined && opt2===undefined)return true;
    return opt1 === null || opt2 === null || opt1 === undefined || opt2 === undefined ? false: opt1.id === opt2.id;
  }
}
