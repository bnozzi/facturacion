import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  data: any = [
    { nombre: 'mate', precio: 100, stock: 340, descripcion: 'mate jaja asd' },
    { nombre: 'mate1', precio: 20, stock: 330, descripcion: 'mate jajaasd' },
    {
      nombre: 'mate2',
      precio: 100,
      stock: 302,
      descripcion: 'mate jaadA A D ja',
    },
    {
      nombre: 'mate3',
      precio: 100,
      stock: 310,
      descripcion: 'mate jaja ADd ADS SDsda',
    },
  ];
  subtotal:any=0;
   
  


  constructor() {

    this.data.forEach((data:any)=>{
      this.subtotal+=data.precio;
    })
  }

  ngOnInit(): void {}

}
