import { Component, OnInit } from '@angular/core';

import { Cliente } from './../../models/cliente';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  cliente: Cliente;
  
  constructor() { }

  ngOnInit(): void {
  }

}
