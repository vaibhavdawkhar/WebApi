import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {
  UserArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  uname: string ="";
  uemail: string ="";
  currentUserID = "";  

  constructor(private http: HttpClient, private router: Router ) 
  {
    this.getAllUser();
  }

  ngOnInit(): void {
  }

  getAllUser()
  { 
    this.http.get("https://localhost:7035/api/User/GetUser")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.UserArray = resultData;
    });
  }

 

  setUpdate(data: any) 
  {
   this.uname = data.stname;
   this.uemail = data.course;
   

   this.currentUserID = data.id;
   this.router.navigate(['/UserRegister']);
 
  }



  setDelete(data: any)
  {
    this.http.delete("https://localhost:7035/api/User/DeleteUser"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Deletedddd")
        this.getAllUser();
    });
  }
}