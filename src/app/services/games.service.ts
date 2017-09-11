import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GameService {
    constructor(private http: Http) {
    }

    getGames(): Observable<any> {
        return this.http.get("../../assets/covers.json")
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}