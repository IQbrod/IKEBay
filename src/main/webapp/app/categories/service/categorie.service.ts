import { SERVER_API_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'app/categories/model/categorie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CategorieService {
    private resourceUrl = SERVER_API_URL + 'api/categories';

    constructor(private http: HttpClient) {}

    listAll(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(this.resourceUrl, { observe: 'response' }).pipe(map(res => res.body));
    }
}
