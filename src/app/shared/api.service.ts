import {Injectable} from '@angular/core';
import {Headers, Http, Request, RequestMethod, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService {
  private _apiUrl = environment.apiUrl;

  constructor(private _http: Http) {
  }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post(url: string, body: Object) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: Object) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete(url: string) {
    return this.request(url, RequestMethod.Delete);
  }

  request(url: string, method: RequestMethod, body?: Object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestOptions = new RequestOptions({
      url: `${this._apiUrl}/${url}`,
      method: method,
      headers: headers
    });

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);

    return this._http.request(request)
      .map((res: Response) => res.json().data)
      .catch((res: Response) => this.onRequestError(res));
  }

  onRequestError(error: Response) {
    return Observable.throw(error);
  }

}