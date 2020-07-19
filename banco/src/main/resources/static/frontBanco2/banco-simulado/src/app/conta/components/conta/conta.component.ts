import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBarModule,
    private router: Router) { }

  form: FormGroup;
  ngOnInit(): void {
    this.gerarForm();
  }

gerarForm(){
  this.form = this.fb.group({
    valor: ['', [Validators.required]]
  })
}

enviar(){
  
}

  formatLabel(value: number) {
    if (value >= 10) {
      return Math.round(value / 10);
    }

    return value;
  }

}
