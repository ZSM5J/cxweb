import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

@Injectable()
export class ApiService {
  public api = 'http://127.0.0.1:5336/';

  constructor(private http: Http) {

  }

  sendCode(code: string) {
  const url = this.api + 'eval';

  const data = {
    Code: code,
  };

  return this.http.post(url, data,  new RequestOptions({
                              headers: new Headers({'Content-Type': 'application/json' })  }));
  }

}
