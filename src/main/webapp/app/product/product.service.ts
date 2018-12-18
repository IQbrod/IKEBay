import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { SERVER_API_URL } from 'app/app.constants';

import { createRequestOption } from 'app/shared/util/request-util';
import { IProduct, Product } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
    private resourceUrl = SERVER_API_URL + 'api/products';

    constructor(private http: HttpClient) {}

    create(product: IProduct): Observable<HttpResponse<Product>> {
        return this.http.post<IProduct>(this.resourceUrl, product, { observe: 'response' });
    }

    update(product: IProduct): Observable<HttpResponse<Product>> {
        return this.http.put<IProduct>(this.resourceUrl, product, { observe: 'response' });
    }

    query(req?: any): Observable<HttpResponse<Product[]>> {
        const options = createRequestOption(req);
        return this.http.get<IProduct[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(Id: string): Observable<HttpResponse<any>> {
        return this.http.delete(`${this.resourceUrl}/${Id}`, { observe: 'response' });
    }

    getProduct(Id: number): Observable<Product> {
        return this.http.get<Product>(`${this.resourceUrl}/${Id}`, { observe: 'response' }).pipe(map(res => res.body));
    }
    /* searchFor(name: String): Observable<Product[]> {
        // console.log('call : ', name);
        return this.http.get<Product[]>(`${this.resourceUrl}?name=${name}`, { observe: 'response' }).pipe(map(res => res.body));
    } */
    searchFor(name: String, categorie: number): Observable<Product[]> {
        // console.log('call : ', name);
        if (name == null && categorie == null) {
            return this.http.get<Product[]>(this.resourceUrl, { observe: 'response' }).pipe(map(res => res.body));
        } else if (name == null && categorie != null) {
            return this.http
                .get<Product[]>(`${this.resourceUrl}?categorieid=${categorie}`, { observe: 'response' })
                .pipe(map(res => res.body));
        } else if (name != null && categorie == null) {
            return this.http.get<Product[]>(`${this.resourceUrl}?name=${name}`, { observe: 'response' }).pipe(map(res => res.body));
        } else {
            return this.http
                .get<Product[]>(`${this.resourceUrl}?name=${name}&categorieid=${categorie}`, { observe: 'response' })
                .pipe(map(res => res.body));
        }
    }
}
