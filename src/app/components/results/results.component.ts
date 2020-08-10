import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getDataByID } from 'src/app/store';
import { DataObj } from 'src/app/shared';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() dataStream$: Observable<any>;
  public data$: Observable<any>;
  public id: string;

  constructor(private readonly _store: Store<any>) { }


  public getValue(event): void {
    this.id = event.target.innerHTML.trim();
    console.log(this.id)
    this.data$ = this._store.pipe(select(getDataByID, { id: this.id }));
  }

}
