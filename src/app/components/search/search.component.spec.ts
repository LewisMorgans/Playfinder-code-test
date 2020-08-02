import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: MockStore;
  let mockFormBuilder = new FormBuilder();
  let mockForm = new FormGroup({})
  const initialState = [];

  beforeEach(async(() => {

    mockForm = mockFormBuilder.group({
      id: '12345',
      startDate: '2020-01-01',
      endDate: '2020-02-01'
    });


    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: FormBuilder, useValue: mockFormBuilder }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize form state', () => {
    expect(component.searchForm).toEqual(undefined);
    component.ngOnInit();
    expect(component.searchForm).toBeInstanceOf(FormGroup)
  });

  it('[Form Getter] Should return the account form controls object', () => {
    component.ngOnInit();
    expect(component.form).toBeInstanceOf(Object);
  });

  it('Should strip the properties from the URL', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    component.getTableData();
    expect(dispatchSpy).not.toHaveBeenCalled();

    component.queryString = 'http://localhost:4200/:32990/:2020-01-01/:2020-02-01';
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalled();

  });

  it('Should dispatch a new action, populate the local data$ variable with the selector return and emit the data', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    spyOn(component.dataStream, 'emit');
    component.queryString = 'http://localhost:4200/:32990/:2020-01-01/:2020-02-01';
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalled();
    expect(component.data$).toBeInstanceOf(Observable);
    expect(component.dataStream.emit).toHaveBeenCalledWith(component.data$);
  });

  it('Should submit the form to the action, select the data and emit the data. Should update the URL.', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    spyOn(component.dataStream, 'emit');
    component.ngOnInit();
    component.searchForm = mockForm;
    component.submitForm();
    expect(dispatchSpy).toHaveBeenCalled();
    expect(component.data$).toBeInstanceOf(Observable);
    expect(component.dataStream.emit).toHaveBeenCalledWith(component.data$)
  })
});
