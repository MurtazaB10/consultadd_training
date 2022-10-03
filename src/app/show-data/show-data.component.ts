import { DataServiceService } from './../data-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  data:any = [];
  dataSource: any;
  constructor(private api : DataServiceService) { }

  ngOnInit(): void {
    this.api.fetchData().subscribe(val => {
      this.data = val;
      this.dataSource = new MatTableDataSource(this.data);
    });
  }

  compareNames(a: any,b: any): Number {
    return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
  }

  compareAges(a: any,b: any): Number {
    return a.age < b.age ? -1 : (a.age > b.age ? 1 : 0);
  }

  sortByName(){
    this.data.sort(this.compareNames);
    this.dataSource = new MatTableDataSource(this.data);
  }

  sortByAge(){
    this.data.sort(this.compareAges);
    this.dataSource = new MatTableDataSource(this.data);
  }

  displayedColumns: string[] = ['Name', 'Age'];
}
