import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Login } from './../../model/login.model';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      this.snackBar.open("Dados inválidos", "Erro", { duration: 50000 })
      return;
    }
    const login: Login = this.form.value;
    this.loginService.logar(login)
    .subscribe(
      data => {
        console.log(JSON.stringify(data));
        localStorage['token'] = data['data']['token'] ;
        const usuarioData = JSON.parse(
          atob(data['data']['token'].split('.')[1]));
        console.log(JSON.stringify(usuarioData));
        if (usuarioData['role'] == 'ROLE_ADMIN') {
          alert('Deve redirecionar para a pagina de admin');
          //this.router.navigate(['/admin]);
        } else {
          alert('Deve redirecionar para');
          //this.router.navigate(['/funcionario'])
        }
      },
      err => {
        console.log(JSON.stringify(err));
        let msg: string = " Tente novamente";
        if(err['status'] == 401){
          msg = "Email/senha invalida.";
        }
        this.snackBar.open(msg, "Erro", {duration: 5000});
      }
      
    );
}

}
