import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn } from '../../router.animations';
import { AuthService } from '../../services/auth.service';
import { ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginData: any;
  loginAuth: boolean;
  loginSend: boolean = false;
  loading: boolean = false;


  client =[{
    uname:'',
    upass: '',
  }];
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService,
    private toastr: ToastrService,
  ) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      userpassword: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]]
    });
  }

  ngOnInit() {
  }

  login(){
    this.loading=true;
    if(this.client[0].uname!=="" && this.client[0].upass!=""){
      this.authService.loginClient(this.client).subscribe(data=>{
        if(data.records[0].IDSynergy=='false'){
          this.toastr.error('Ingrese una password o email validos','Error');
          this.loading=false;
        }
       else{
        localStorage.setItem("db",JSON.stringify(data.records[0].Db));
        localStorage.setItem("user",JSON.stringify(this.client[0].uname));
        localStorage.setItem('page','1');
        this.loading=false;
        this.router.navigate(['dashboard']);
      }
      });
    }
    else{
      this.toastr.error('Ingrese el password o email','Faltan Datos');
    }
  }

}

