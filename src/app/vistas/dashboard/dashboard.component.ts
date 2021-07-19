import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
 //import { FormGroup, For } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllEmployees().subscribe(data =>{
      console.log(data)
    });
  }

}
