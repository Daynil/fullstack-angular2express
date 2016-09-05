import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { CheshireCatComponent } from './cheshire-cat/cheshire-cat.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  serverData: string;
  
  constructor(private http: Http) { 
    this.http.get('/test')
      .subscribe((res:any) => {
        this.serverData = res._body;
      });
  }

}