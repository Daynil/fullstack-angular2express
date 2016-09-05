import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { CheshireCatComponent } from './cheshire-cat/cheshire-cat.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverData: string;
  
  constructor(private http: Http) { 
    this.http.get('http://localhost:3000/api/test')
      .subscribe((res:any) => {
        console.log(res);
        this.serverData = res._body;
      });
  }

}