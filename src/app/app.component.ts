import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataObj } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  public searchedData$: Observable<DataObj>
 
  constructor() {}

}
