import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SearchData } from 'src/app/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private readonly _fb: FormBuilder,
    private readonly _store: Store<any>) { }

  ngOnInit(): void {
    this.initialiseFormState();
  }

  private initialiseFormState(): void {
    this.searchForm = this._fb.group({
      id: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  get form() {
    return this.searchForm.controls
  }

  public submitForm(): void {
    let payload = {
      pitchID: this.form.id.value,
      startDate: this.form.startDate.value,
      endDate: this.form.endDate.value
    };

    this._store.dispatch(new SearchData(payload));
    this.initialiseFormState();
  }
}
