import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users:User[]=[];
 
  selectedUser!: User;

  notFound:string="No Users found in the database. Please add an User."

  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  
  constructor(private service:ProfileService){}

  ngOnInit() {
      this.service.getUsers().subscribe(response=>{
        this.users = response;
      })
  }

  deleteUser(id:number){
    this.service.deleteUser(id).subscribe(response=>{
      this.users=this.users.filter(user=>user.id!=id)
    })
  }

 changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
