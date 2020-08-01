import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getDataByID } from 'src/app/store';

export interface test  {
  id: string,
  type: string,
  attributes: object
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
 
  @Input() dataStream$: Observable<{}>


  public data$: Observable<test>;

  constructor(private readonly _store: Store<any>,
    ) { }

  ngOnInit(): void {
  }



  public getValue(event): void {
    this.data$ = this._store.pipe(select(getDataByID(event.target.innerHTML)));
    console.log(this.data$)
    
    this.data$.subscribe(resp => console.log(resp))
    
  }

}
