import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// data table
export interface Cliente {
  documento: string;
  nombre: string;
  direccion: string;
  telefono: string;
}

/** Constants used to fill up our data base. */
const direcciones: string[] = [
  'avellaneda 355',
  'mendoza 1772',
  'avellaneda 1',
  'mendoza 4343',
  'avellaneda 564',
  'mendoza 9301',

];
const NAMES: string[] = [
  'Maia Pizzi',
  'Asher pereyra',
  'Olivia perez',
  'Atticus fernandez',
  'Amelia martinez',
  'Jack grealish',
  'Charlotte gonzales',
  'Theodore canigia',
  'Isla mauricio',
  'Oliver kahn',
  'Isabella II',
  'Jasper jisper',
  'Cora son ',
  'Levi sosa',
  'Violet evergarden',
  'Arthur ito ',
  'Mia tuya',
  'Thomas edison',
];

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements AfterViewInit {
  displayedColumns: string[] = ['documento', 'nombre', 'direccion', "telefono"];
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 35000000+Math.round(Math.random()*10000000)));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): Cliente {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    documento: id.toString(),
    nombre: name,
    telefono: "353"+ Math.round(Math.random() * 999999).toString(),
    direccion: direcciones[Math.round(Math.random() * (direcciones.length - 1))],
  };
}
