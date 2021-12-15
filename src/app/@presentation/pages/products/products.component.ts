import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  dataserver: string = "Hola soy data mains"
  constructor() { }

  ngOnInit(): void {
  }
  apdateData() {
    this.dataserver = "Change page"


  }
}
