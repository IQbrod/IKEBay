import { SERVER_API_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'app/categories/model/categorie.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CategorieService {
    private resourceUrl = SERVER_API_URL + 'api/categories';
    private catSelected: BehaviorSubject<number>;
    public catPublisher: Observable<number>;
    private pageSelected: BehaviorSubject<number>;
    public pagePublisher: Observable<number>;

    constructor(private http: HttpClient) {
        this.catSelected = new BehaviorSubject<number>(0);
        this.catPublisher = this.catSelected.asObservable();
        this.pageSelected = new BehaviorSubject<number>(0);
        this.pagePublisher = this.pageSelected.asObservable();
    }

    listAll(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(this.resourceUrl, { observe: 'response' }).pipe(map(res => res.body));
    }

    setCategorie(id: number) {
        this.catSelected.next(id);
    }

    setPage(pN: number) {
        if (pN >= 0) {
            this.pageSelected.next(pN);
        }
    }
}
