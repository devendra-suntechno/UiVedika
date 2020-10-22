import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  

  constructor(private http: HttpClient) { }
  url=environment.api_url+"/api/recentlybooked?ownerId=kumar";
  httpData:any;
  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.httpData=data;
    })

  }

}