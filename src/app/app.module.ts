import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsInfoComponent } from './components/cards-info/cards-info.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { NewClientComponent } from './components/cliente/new-client/new-client.component';
import { ListClientComponent } from './components/cliente/list-client/list-client.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/aux/wrapper/wrapper.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { MainListProductComponent } from './components/products/main-list-product/main-list-product.component';
import { WrapperContentComponent } from './components/aux/wrapper-content/wrapper-content.component';
import { MainNewProductComponent } from './components/products/main-new-product/main-new-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProductComponent } from './components/products/list-product/list-product.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListProductMaterialComponent } from './components/products/list-product-material/list-product-material.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FindClientComponent } from './components/cliente/find-client/find-client.component';





import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainCompanyComponent } from './components/company/main-company/main-company.component';


import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    CardsInfoComponent,
    MainComponent,
    HeaderComponent,
    AsideMenuComponent,
    NewProductComponent,
    EditProductComponent,
    NewClientComponent,
    ListClientComponent,
    FooterComponent,
    PedidoComponent,
    WrapperComponent,
    MainListProductComponent,
    WrapperContentComponent,
    MainNewProductComponent,
    ListProductComponent,

    ListProductMaterialComponent,
    FindClientComponent,
    MainCompanyComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
