import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
import { Preference } from '../_models/index';

import {Observable}     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class PreferenceService {
    
    private headers = new Headers({'Content-Type':'application/json'});
    private postheaders = new Headers({'Content-Type':'application/json'});
    private apiURL = 'http://localhost:8000/Preference/'
cc = 0
    constructor(private http: Http) { }
    create(preference: any) {
        // alert(this.cc)
        this.cc += 1
        if(this.cc ==1)
        {this.postheaders.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token)}
        return this.http.post(this.apiURL, preference , {headers: this.postheaders}).toPromise()
    }

    delete(id: number) {
        return this.http.delete(this.apiURL + id + '/' , this.jwt()).toPromise()
    }

     getAll() {
              return this.http.get(this.apiURL, this.jwt()).toPromise().then(response => response.json())
     }

         private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}

    // update(message: any) {
    //     message.content = 'whatever message'
    //     return this.http.put(this.messagesURL + '/' + message.id , JSON.stringify(message), {headers: this.headers}).toPromise()
    // }