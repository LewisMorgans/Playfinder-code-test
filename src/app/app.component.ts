import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchData } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'playfinder';

  constructor(private readonly _store: Store<any>) {}

  ngOnInit() {
    let payload = {
      pitchID: 32990,
      startDate: '2018-01-09',
      endDate: '2018-01-15'
    }
    this._store.dispatch(new SearchData(payload))
  }
}
