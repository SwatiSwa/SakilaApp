import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
    constructor(private http: Http) { }

    getActors() : any{
        return this.http.get('/actors/findAllActors').toPromise()
                .then(response => response.json())
                .catch(this.handleError)
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    } 
}