import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isNullOrUndefined} from 'util';
import {SingleResponseModel} from '../models/responses/single-response.model';
import {ListResponseModel} from '../models/responses/list-response.model';
import {PageableResponseModel} from '../models/responses/pageable-response.model';
import {map} from 'rxjs/operators';

export abstract class AbstractRestService {
  constructor(protected _http: HttpClient) {
  }

  protected getSingleResponse(url: string, params: URLSearchParams = null): Observable<SingleResponseModel<object>> {
    const parameters = params == null ? '' : params;
    return this._http.get(url + parameters).pipe(map(res => res as SingleResponseModel<object>));
  }

  protected getListResponse(url: string, params: URLSearchParams = null): Observable<ListResponseModel<object>> {
    const parameters = params == null ? '' : params;
    return this._http.get(url + parameters).pipe(map(res => res as ListResponseModel<object>));
  }

  protected getListResponseList(url: string, params: URLSearchParams = null): Observable<any> {
    const parameters = params == null ? '' : params;
    return this._http.get(url + parameters).pipe(map(res => res));
  }

  protected getPageableResponse(url: string, params: URLSearchParams = null, bodyParams = {}): Observable<object> {
    const parameters = isNullOrUndefined(params) ? '' : params;
    return this._http.get(url + parameters, {params: bodyParams}).pipe(map(res => res as PageableResponseModel<object>));
  }

  protected postSingleResponses(url: string, body: any = {}, params: any): Observable<SingleResponseModel<object>> | any {
    return this._http.post(url, body, { params: params}).pipe(map(res => res as SingleResponseModel<object> | any));
  }

  protected postSingleResponse(url: string, body: any = {}, params: any): Observable<SingleResponseModel<object>> | any {
    return this._http.post(url, body, { params: params}).pipe(map(res => res as SingleResponseModel<object> | any));
  }

  protected putSingleResponse(url: string, body: any = {}, params: any): Observable<SingleResponseModel<object>> {
    return this._http.put(url, body, { params: params}).pipe(map(res => res as SingleResponseModel<object>));
  }

  protected getObjectById(url, id: number): Observable<object> {
    return this._http.get(url + '/' + id).pipe(map(res => res as SingleResponseModel<object>));
  }

  protected deleteObject(url, id: number): Observable<object> {
    return this._http.delete(url + '/' + id).pipe(map(res => res as SingleResponseModel<object>));
  }
}

