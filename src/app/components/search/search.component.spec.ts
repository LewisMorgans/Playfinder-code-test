import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { showAllData } from 'src/app/store';
import { MemoizedSelector } from '@ngrx/store';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: MockStore;
  const mockFormBuilder = new FormBuilder();
  let mockForm = new FormGroup({});
  const initialState = [];
  let mockSelector: MemoizedSelector<any, object>;

  beforeEach(async(() => {

    mockForm = mockFormBuilder.group({
      id: '32990',
      startDate: '2019-01-01',
      endDate: '2019-01-03'
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
    component.queryString = 'http://localhost:4200/:32990/:2020-01-01/:2020-02-01';
    mockSelector = store.overrideSelector(
      showAllData,
      { data: [{ name: 'lewis' }] } as any
    );
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize form state', () => {
    expect(component.searchForm).toEqual(undefined);
    component.ngOnInit();
    expect(component.searchForm).toBeInstanceOf(FormGroup);
  });

  it('Should return the account form controls object', () => {
    component.ngOnInit();
    expect(component.form).toBeInstanceOf(Object);
  });

  it('Should strip the properties from the URL and assign to new array', () => {
    const parsedArray = ['32990', '2020-01-01', '2020-02-01'];
    component.ngOnInit();
    expect(component.parsedURL).toEqual(parsedArray);
  });

  it('Should dispatch a new action, populate the local data$ variable with the selector return and emit the data', (done) => {
    const dispatchSpy = spyOn(store, 'dispatch');
    spyOn(component.dataStream, 'emit');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalled();
    expect(component.data$).toBeInstanceOf(Observable);
    component.data$
      .subscribe(r => {
        expect(r).toEqual(jasmine.objectContaining({ data: [{ name: 'lewis' }] }));
        done();
      });
    expect(component.dataStream.emit).toHaveBeenCalledWith(component.data$);
  });

  it('Should submit the form to the action, select the data and emit the data. Should update the URL.', (done) => {
    const dispatchSpy = spyOn(store, 'dispatch');
    spyOn(component.dataStream, 'emit');
    component.ngOnInit();
    component.searchForm = mockForm;
    component.retrieveData();
    expect(dispatchSpy).toHaveBeenCalled();
    expect(component.data$).toBeInstanceOf(Observable);
    component.data$
      .subscribe(r => {
        expect(r).toEqual(jasmine.objectContaining({ data: [{ name: 'lewis' }] }));
        done();
      });
    expect(component.dataStream.emit).toHaveBeenCalledWith(component.data$);
  });
});
