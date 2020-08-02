import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { SearchData } from 'src/app/store';
import { showAllData } from 'src/app/store/selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() dataStream: EventEmitter<any> = new EventEmitter();
  public searchForm: FormGroup;
  public data$: Observable<[]>
  public queryString = window.location.href

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _store: Store<any>) { }

  ngOnInit(): void {
    this.initialiseFormState();
    this.urlParser();
    this.getTargetData();
  }

  private initialiseFormState(): void {
    this.searchForm = this._fb.group({
      id: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  get form() {
    return this.searchForm.controls;
  }

  private urlParser(): string[] {
    let target = this.queryString.replace(/\//g, '');
    let url = target.slice(20);
    let parameters = url.split(':');
    return parameters;
  }

  public getTargetData(): void {

    let payload = {
      pitchID: parseInt(this.urlParser()[0]),
      startDate: this.urlParser()[1],
      endDate: this.urlParser()[2]
    };
    if (payload.endDate === undefined) { // reformat?
      return null
    } else {
      this._store.dispatch(new SearchData(payload));
      this.data$ = this._store.pipe(select(showAllData));
      this.dataStream.emit(this.data$);
    }

  }

  public retrieveData(): void {

    let payload = {
      pitchID: this.form.id.value,
      startDate: this.form.startDate.value,
      endDate: this.form.endDate.value
    };

    this._store.dispatch(new SearchData(payload));
    this.data$ = this._store.pipe(select(showAllData));
    this.dataStream.emit(this.data$);
    window.location.href = `http://localhost:4200/:${payload.pitchID}/:${payload.startDate}/:${payload.endDate}`

  }

}