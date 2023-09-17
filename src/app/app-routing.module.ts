import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CardsInfoComponent } from './components/cards-info/cards-info.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { NewClientComponent } from './components/cliente/new-client/new-client.component';
import { ListClientComponent } from './components/cliente/list-client/list-client.component';
import { PedidoComponent } from './components/pedido/pedido.component';

import { MainListProductComponent } from './components/products/main-list-product/main-list-product.component';
import { MainNewProductComponent } from './components/products/main-new-product/main-new-product.component';
import { MainCompanyComponent } from './components/company/main-company/main-company.component';


const routes: Routes = [
  {path:"", component: MainComponent},
  {path:"test", component: CardsInfoComponent},
  {path:"nuevoProducto", component: MainNewProductComponent},
  {path:"listarProductos" , component: MainListProductComponent},
  {path:"nuevoCliente" , component: NewClientComponent},
  {path:"listarClientes" , component: ListClientComponent},
  {path:"nuevoPedido" , component:PedidoComponent},

  {path:"configuracion" , component:MainCompanyComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
