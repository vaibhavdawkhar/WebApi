import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.scss']
})
export class UserRegisterComponent {
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

  register()
  {
   // this.isLogin = false; 
   // alert("hi");
    let bodyData = {
      "uname" : this.uname,
      "uemail" : this.uemail,
    
    };

    this.http.post("https://localhost:7035/api/User/AddUser",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully")
        this.getAllUser();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
    });
  }

  setUpdate(data: any) 
  {
   this.uname = data.stname;
   this.uemail = data.course;
   

   this.currentUserID = data.id;
 
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "uname" : this.uname,
      "uemail" : this.uemail,
    };
    
    this.http.patch("https://localhost:7035/api/User/UpdateUser"+ "/"+ this.currentUserID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Updateddd")
        this.getAllUser();
      
    });
  }
 
  save()
  {
    debugger;
    if(this.currentUserID == '')
    {
        this.register();
        
        this.router.navigate(['/user-data']);
    }
      else
      {
       this.UpdateRecords();

       this.router.navigate(['/user-data']);
      }       

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