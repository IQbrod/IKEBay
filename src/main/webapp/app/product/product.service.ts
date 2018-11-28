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

    create(product: IProduct): Observable<HttpResponse<IProduct>> {
        return this.http.post<IProduct>(this.resourceUrl, product, { observe: 'response' });
    }

    update(product: IProduct): Observable<HttpResponse<IProduct>> {
        return this.http.put<IProduct>(this.resourceUrl, product, { observe: 'response' });
    }

    find(Id: string): Observable<HttpResponse<IProduct>> {
        return this.http.get<IProduct>(`${this.resourceUrl}/${Id}`, { observe: 'response' });
    }

    query(req?: any): Observable<HttpResponse<IProduct[]>> {
        const options = createRequestOption(req);
        return this.http.get<IProduct[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(Id: string): Observable<HttpResponse<any>> {
        return this.http.delete(`${this.resourceUrl}/${Id}`, { observe: 'response' });
    }

    /* listAll(): Observable<HttpResponse<IProduct[]>> {
        return this.http.get<IProduct[]>(this.resourceUrl, {observe: 'response' });
    } */
    listAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.resourceUrl, { observe: 'response' }).pipe(
            map(res => res.body)

            /* map((response: HttpResponse<Product[]>) => {
                const result = response.body.map((product: Product) =>
                    Object.assign(new Product(), product));
                // console.log(result);
                return result;
            }) */
        );
    }
}
