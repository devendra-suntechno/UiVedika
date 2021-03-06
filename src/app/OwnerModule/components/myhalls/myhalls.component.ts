import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ownerServices } from '../../services/ownerServices';

@Component({
  selector: 'app-myhalls',
  templateUrl: './myhalls.component.html',
  styleUrls: ['./myhalls.component.css']
})
export class MyhallsComponent implements OnInit {

  data;

  constructor(private router: Router, private service: ownerServices) { }

  ngOnInit(): void {
    this.service.getMyhalls().subscribe(data => {
      console.log(data);
      this.data = data["data"]
    });
  }

  onclick() {
    this.router.navigateByUrl("/owner-dashboard")
  }

  edit() {
    this.router.navigateByUrl("/dashboard")
  }

  

}
