import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AbstractRestService} from '../http/AbstractRestService';
import {HttpClient} from '@angular/common/http';
import {isNullOrUndefined} from 'util';
import {PageableResponseModel} from '../models/responses/pageable-response.model';


@Injectable({
  providedIn: 'root'
})
export class RequestService  extends AbstractRestService {
  private listDataSubject: BehaviorSubject<PageableResponseModel<any>>;
  private loading: BehaviorSubject<boolean>;
  constructor(protected _http: HttpClient ) {
    super(_http);
    this.listDataSubject = new BehaviorSubject<PageableResponseModel<any>>(new PageableResponseModel<any>());
    this.loading = new BehaviorSubject(false);
  }
  public index(url, args): void {
    this.setloading(true);
    this.getPageableResponse(url, null, args.params).pipe(map(res => res as PageableResponseModel<any>))
      .toPromise()
      .then(res => {
        this.setDataList$(res.data);
        this.setloading(false);
      });
  }
  public autocomplite(url, args): void {
    this.getPageableResponse(url, null, args.params).pipe(map(res => res as PageableResponseModel<any>))
      .toPromise()
      .then(res => {
        this.setDataList$(res.data);
      });
  }

  public select(url) {
    return this.getListResponseList(url)
      .toPromise()
      .then(res => {
        return res;
      });
  }
  public add( url, body: any, params): Observable<any> {
    return this.postSingleResponse(url, body, []).pipe(map(res => res));
  }
  public delete( url, id): Observable<any> {
    return this.deleteObject(url, id).pipe(map(res => res));
  }
  public update( url, body: any, params): Observable<any> {
    return this.postSingleResponse(url, body, []).pipe(map(res => res));
  }
  public put( url, body: any, params): Observable<any> {
    return this.putSingleResponse(url, body, []).pipe(map(res => res));
  }
  public edit( url): Observable<any> {
    return this.getSingleResponse(url).pipe(map(res => res));
  }
  public show( url, body: any, params): Observable<any> {
    return this.postSingleResponse(url, body, []).pipe(map(res => res));
  }
  get dataList$(): Observable<PageableResponseModel<any>> {
    return this.listDataSubject.asObservable();
  }

  public setloading(args) {
    this.loading.next(args);
  }
  get loadingValue$() {
    return this.loading.getValue();
  }
  public setDataList$(args) {
    this.listDataSubject.next(args);
  }
  public resetDataList$() {
    this.listDataSubject.getValue().data = new Array<any>();
  }
  public redrawList() {
    if (!isNullOrUndefined(this.listDataSubject.getValue().data)) {
      this.listDataSubject.getValue().data = [...this.listDataSubject.getValue().data];
    }
  }
  get dataListValue$() {
    return this.listDataSubject.getValue();
  }
}
