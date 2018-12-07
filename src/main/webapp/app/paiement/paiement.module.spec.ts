import { PaiementModule } from './paiement.module';

describe('PaiementModule', () => {
    let paiementModule: PaiementModule;

    beforeEach(() => {
        paiementModule = new PaiementModule();
    });

    it('should create an instance', () => {
        expect(paiementModule).toBeTruthy();
    });
});
