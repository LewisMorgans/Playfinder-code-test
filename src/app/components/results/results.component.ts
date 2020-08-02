import { Component, Input, } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getDataByID } from 'src/app/store';

export interface test  { // move to shared file?
  id: string,
  type: string,
  attributes: object
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 
  @Input() dataStream$: Observable<{}>
  public data$: Observable<test>;

  constructor(private readonly _store: Store<any>) { }

  public getValue(event): void {
    let id = event.target.innerHTML.trim();
    this.data$ = this._store.pipe(select(getDataByID(id)));    
  }

}
