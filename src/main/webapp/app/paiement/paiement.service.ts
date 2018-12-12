import { Injectable } from '@angular/core';
import { PaiementInfos } from './paiementinfo.model';

@Injectable()
export class PaiementService {
    public formobject: PaiementInfos;

    constructor() {}
}
